#!/usr/bin/env python3
"""Shared Markdown parsing, alignment, and sidecar metadata helpers."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
from dataclasses import asdict, dataclass
from difflib import SequenceMatcher
from pathlib import Path
from typing import Sequence

try:
    from rapidfuzz import fuzz
except ImportError:  # pragma: no cover - optional fallback
    fuzz = None


ROOT_DIR = Path(__file__).resolve().parents[1]
MARKDOWN_EXTENSIONS = {".md", ".markdown"}
HEADING_RE = re.compile(r"^(#{1,6})\s+(.*)$")
LIST_RE = re.compile(r"^(\s*)([-*+] |\d+\. )")
TABLE_SEPARATOR_RE = re.compile(r"^\s*\|?(\s*:?-{3,}:?\s*\|)+\s*:?-{3,}:?\s*\|?\s*$")
BLOCKQUOTE_RE = re.compile(r"^\s*>\s?")
IMAGE_RE = re.compile(r"^!\[[^\]]*\]\([^)]*\)\s*$")
HTML_COMMENT_START_RE = re.compile(r"^\s*<!--")
HTML_COMMENT_END_RE = re.compile(r"-->\s*$")
FRONTMATTER_RE = re.compile(r"^---\n([\s\S]*?)\n---\n?", re.MULTILINE)


@dataclass
class MarkdownBlock:
    index: int
    block_id: str
    block_type: str
    start_line: int
    end_line: int
    heading_path: list[str]
    text: str
    source_hash: str

    @property
    def word_count(self) -> int:
        return count_words(self.text)


@dataclass
class ParsedDocument:
    path: str
    frontmatter: str
    body: str
    blocks: list[MarkdownBlock]
    metadata: dict[str, str]


@dataclass
class AlignmentMatch:
    source_block_id: str
    target_block_id: str | None
    score: float
    strategy: str


def split_frontmatter(content: str) -> tuple[str, str]:
    match = FRONTMATTER_RE.match(content)
    if not match:
        return "", content
    return match.group(0), content[match.end() :]


def parse_frontmatter(frontmatter_text: str) -> dict[str, str]:
    if not frontmatter_text:
        return {}

    body = frontmatter_text.strip()
    if not (body.startswith("---") and body.endswith("---")):
        return {}

    lines = body.splitlines()[1:-1]
    metadata: dict[str, str] = {}
    index = 0
    while index < len(lines):
        line = lines[index]
        if not line.strip() or line.lstrip().startswith("#"):
            index += 1
            continue

        if ":" not in line:
            index += 1
            continue

        key, raw_value = line.split(":", 1)
        key = key.strip()
        value = raw_value.strip()

        if value in {">", ">-", "|", "|-"}:
            collected: list[str] = []
            index += 1
            while index < len(lines) and (lines[index].startswith("  ") or not lines[index].strip()):
                collected.append(lines[index][2:] if lines[index].startswith("  ") else "")
                index += 1
            metadata[key] = "\n".join(collected).strip()
            continue

        metadata[key] = value.strip('"\'')
        index += 1

    return metadata


def parse_markdown(content: str, path: str = "") -> ParsedDocument:
    frontmatter, body = split_frontmatter(content)
    metadata = parse_frontmatter(frontmatter)
    blocks = parse_blocks(body, frontmatter.count("\n"))
    return ParsedDocument(path=path, frontmatter=frontmatter, body=body, blocks=blocks, metadata=metadata)


def parse_blocks(body: str, line_offset: int = 0) -> list[MarkdownBlock]:
    lines = body.splitlines()
    blocks: list[MarkdownBlock] = []
    heading_stack: list[str] = []
    block_index = 0
    line_index = 0
    block_ids_seen: dict[str, int] = {}

    while line_index < len(lines):
        line = lines[line_index]
        stripped = line.strip()
        if not stripped:
            line_index += 1
            continue

        start = line_index
        block_type = "paragraph"

        if is_fence_start(stripped):
            block_type = classify_fence_block(stripped)
            line_index = consume_fence(lines, line_index)
        elif match := HEADING_RE.match(line):
            level = len(match.group(1))
            heading_text = match.group(2).strip()
            heading_stack = heading_stack[: level - 1]
            heading_stack.append(heading_text)
            block_type = "heading"
            line_index += 1
        elif is_table_start(lines, line_index):
            block_type = "table"
            line_index = consume_table(lines, line_index)
        elif LIST_RE.match(line):
            block_type = "list"
            line_index = consume_list(lines, line_index)
        elif BLOCKQUOTE_RE.match(line):
            block_type = "callout" if "[!" in line else "blockquote"
            line_index = consume_blockquote(lines, line_index)
        elif IMAGE_RE.match(stripped):
            block_type = "image"
            line_index += 1
        elif HTML_COMMENT_START_RE.match(line):
            block_type = "html_comment"
            line_index = consume_comment(lines, line_index)
        else:
            line_index = consume_paragraph(lines, line_index)

        block_lines = lines[start:line_index]
        text = "\n".join(block_lines)
        heading_path = list(heading_stack)
        if block_type == "heading" and heading_path:
            current_heading_path = heading_path
        else:
            current_heading_path = heading_path

        base_id = make_block_id(block_type, current_heading_path, text)
        occurrence = block_ids_seen.get(base_id, 0) + 1
        block_ids_seen[base_id] = occurrence
        block_id = f"{base_id}-{occurrence}"

        blocks.append(
            MarkdownBlock(
                index=block_index,
                block_id=block_id,
                block_type=block_type,
                start_line=line_offset + start + 1,
                end_line=line_offset + line_index,
                heading_path=current_heading_path,
                text=text,
                source_hash=sha256_text(normalize_text(text)),
            )
        )
        block_index += 1

    return blocks


def is_fence_start(line: str) -> bool:
    return line.startswith("```") or line.startswith("~~~")


def classify_fence_block(line: str) -> str:
    if line.startswith("```mermaid") or line.startswith("~~~mermaid"):
        return "diagram"
    return "code"


def consume_fence(lines: Sequence[str], start_index: int) -> int:
    fence = lines[start_index].strip()[:3]
    index = start_index + 1
    while index < len(lines):
        if lines[index].strip().startswith(fence):
            return index + 1
        index += 1
    return len(lines)


def is_table_start(lines: Sequence[str], index: int) -> bool:
    if index + 1 >= len(lines):
        return False
    return "|" in lines[index] and bool(TABLE_SEPARATOR_RE.match(lines[index + 1]))


def consume_table(lines: Sequence[str], start_index: int) -> int:
    index = start_index + 2
    while index < len(lines) and lines[index].strip() and "|" in lines[index]:
        index += 1
    return index


def consume_list(lines: Sequence[str], start_index: int) -> int:
    index = start_index
    while index < len(lines):
        line = lines[index]
        if not line.strip():
            next_index = index + 1
            if next_index < len(lines) and (LIST_RE.match(lines[next_index]) or lines[next_index].startswith("  ")):
                index += 1
                continue
            return index
        if index != start_index and not (LIST_RE.match(line) or line.startswith("  ") or line.startswith("\t")):
            return index
        index += 1
    return index


def consume_blockquote(lines: Sequence[str], start_index: int) -> int:
    index = start_index
    while index < len(lines) and (lines[index].strip().startswith(">") or not lines[index].strip()):
        index += 1
    return index


def consume_comment(lines: Sequence[str], start_index: int) -> int:
    index = start_index
    while index < len(lines):
        if HTML_COMMENT_END_RE.search(lines[index]):
            return index + 1
        index += 1
    return index


def consume_paragraph(lines: Sequence[str], start_index: int) -> int:
    index = start_index
    while index < len(lines):
        if index != start_index:
            stripped = lines[index].strip()
            if not stripped:
                return index
            if (
                is_fence_start(stripped)
                or HEADING_RE.match(lines[index])
                or LIST_RE.match(lines[index])
                or BLOCKQUOTE_RE.match(lines[index])
                or is_table_start(lines, index)
                or HTML_COMMENT_START_RE.match(lines[index])
                or IMAGE_RE.match(stripped)
            ):
                return index
        index += 1
    return index


def make_block_id(block_type: str, heading_path: Sequence[str], text: str) -> str:
    heading_part = "/".join(slugify(part) for part in heading_path if part.strip()) or "root"
    text_part = slugify(first_text_line(text)) or block_type
    digest = sha256_text(normalize_text(text))[:8]
    return f"{heading_part}-{block_type}-{text_part}-{digest}"


def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r"`[^`]*`", " ", text)
    text = re.sub(r"\[[^\]]*\]\([^)]*\)", " ", text)
    text = re.sub(r"[^\w\s-]", " ", text, flags=re.UNICODE)
    text = re.sub(r"[\s_-]+", "-", text).strip("-")
    return text[:60]


def first_text_line(text: str) -> str:
    for line in text.splitlines():
        stripped = line.strip()
        if stripped:
            return stripped
    return ""


def normalize_text(text: str) -> str:
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def sha256_text(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def count_words(text: str) -> int:
    cleaned = re.sub(r"`[^`]*`", " ", text)
    cleaned = re.sub(r"\[[^\]]*\]\([^)]*\)", " ", cleaned)
    cleaned = re.sub(r"[^\w\s-]", " ", cleaned, flags=re.UNICODE)
    return len([word for word in cleaned.split() if word])


def similarity(left: str, right: str) -> float:
    left_normalized = normalize_text(left)
    right_normalized = normalize_text(right)
    if not left_normalized and not right_normalized:
        return 1.0
    if fuzz is not None:
        return fuzz.token_sort_ratio(left_normalized, right_normalized) / 100.0
    return SequenceMatcher(None, left_normalized, right_normalized).ratio()


def sidecar_path(markdown_path: str | Path) -> Path:
    path = Path(markdown_path)
    return path.with_name(f"{path.name}.l10n.json")


def load_sidecar(markdown_path: str | Path) -> dict:
    path = sidecar_path(markdown_path)
    if not path.exists():
        return {"version": 1, "blocks": []}
    return json.loads(path.read_text(encoding="utf-8"))


def save_sidecar(markdown_path: str | Path, payload: dict) -> Path:
    path = sidecar_path(markdown_path)
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return path


def build_sidecar_entries(
    source_path: str | Path,
    target_path: str | Path,
    locale: str,
    source_blocks: Sequence[MarkdownBlock],
    target_blocks: Sequence[MarkdownBlock],
    matches: Sequence[AlignmentMatch] | None = None,
) -> dict:
    match_map = {match.source_block_id: match for match in (matches or [])}
    target_map = {block.block_id: block for block in target_blocks}
    blocks = []
    for source_block in source_blocks:
        match = match_map.get(source_block.block_id)
        target_block = target_map.get(match.target_block_id) if match and match.target_block_id else None
        blocks.append(
            {
                "blockId": source_block.block_id,
                "sourceHash": source_block.source_hash,
                "targetBlockId": target_block.block_id if target_block else None,
                "translationHash": target_block.source_hash if target_block else None,
                "blockType": source_block.block_type,
                "headingPath": source_block.heading_path,
                "sourceLineRange": [source_block.start_line, source_block.end_line],
                "targetLineRange": [target_block.start_line, target_block.end_line] if target_block else None,
                "alignmentStrategy": match.strategy if match else None,
                "alignmentScore": match.score if match else None,
            }
        )

    return {
        "version": 1,
        "sourcePath": str(Path(source_path).as_posix()),
        "targetPath": str(Path(target_path).as_posix()),
        "locale": locale,
        "blocks": blocks,
    }


def align_blocks(
    source_blocks: Sequence[MarkdownBlock],
    target_blocks: Sequence[MarkdownBlock],
    sidecar: dict | None = None,
) -> list[AlignmentMatch]:
    sidecar = sidecar or {}
    sidecar_entries = {entry.get("blockId"): entry for entry in sidecar.get("blocks", [])}
    available_target_ids = {block.block_id for block in target_blocks}
    matches: list[AlignmentMatch] = []

    for source_block in source_blocks:
        entry = sidecar_entries.get(source_block.block_id)
        if entry:
            target_id = entry.get("targetBlockId")
            if target_id in available_target_ids:
                matches.append(AlignmentMatch(source_block.block_id, target_id, 1.0, "metadata"))
                available_target_ids.remove(target_id)
                continue

        exact_heading_candidates = [
            block
            for block in target_blocks
            if block.block_id in available_target_ids
            and block.block_type == source_block.block_type
            and block.heading_path == source_block.heading_path
        ]
        if exact_heading_candidates:
            best = max(exact_heading_candidates, key=lambda candidate: similarity(source_block.text, candidate.text))
            score = similarity(source_block.text, best.text)
            matches.append(AlignmentMatch(source_block.block_id, best.block_id, score, "heading-path"))
            available_target_ids.remove(best.block_id)
            continue

        fuzzy_candidates = [block for block in target_blocks if block.block_id in available_target_ids]
        best_block = None
        best_score = -1.0
        best_strategy = "unmatched"
        for candidate in fuzzy_candidates:
            score = similarity(source_block.text, candidate.text)
            if source_block.block_type == candidate.block_type:
                score += 0.08
            if source_block.heading_path == candidate.heading_path:
                score += 0.12
            else:
                shared_prefix = common_prefix_length(source_block.heading_path, candidate.heading_path)
                score += min(shared_prefix * 0.03, 0.09)
            position_penalty = abs(source_block.index - candidate.index) * 0.01
            score -= min(position_penalty, 0.15)
            if score > best_score:
                best_score = score
                best_block = candidate
                best_strategy = "fuzzy" if score >= 0.45 else "position"

        if best_block is not None and best_score >= 0.32:
            matches.append(AlignmentMatch(source_block.block_id, best_block.block_id, round(best_score, 3), best_strategy))
            available_target_ids.remove(best_block.block_id)
        else:
            matches.append(AlignmentMatch(source_block.block_id, None, 0.0, "unmatched"))

    return matches


def common_prefix_length(left: Sequence[str], right: Sequence[str]) -> int:
    count = 0
    for left_item, right_item in zip(left, right):
        if left_item != right_item:
            break
        count += 1
    return count


def infer_locale_path(source_path: str | Path, locale: str) -> Path:
    path = Path(source_path)
    parts = list(path.parts)
    for index, part in enumerate(parts):
        if part == "en":
            parts[index] = locale
            return Path(*parts)
    return path.parent / locale / path.name


def load_document(file_path: str | Path) -> ParsedDocument:
    content = Path(file_path).read_text(encoding="utf-8")
    return parse_markdown(content, path=str(file_path))


def render_alignment_report(matches: Sequence[AlignmentMatch], source_blocks: Sequence[MarkdownBlock]) -> str:
    source_lookup = {block.block_id: block for block in source_blocks}
    lines = ["# Alignment Report", ""]
    for match in matches:
        source_block = source_lookup[match.source_block_id]
        heading = " > ".join(source_block.heading_path) or "(root)"
        lines.append(
            f"- {source_block.block_id} [{source_block.block_type}] lines {source_block.start_line}-{source_block.end_line}: "
            f"strategy={match.strategy}, score={match.score:.3f}, heading={heading}"
        )
    lines.append("")
    return "\n".join(lines)


def cli() -> int:
    parser = argparse.ArgumentParser(description="Inspect Markdown block structure and alignment metadata.")
    parser.add_argument("--source", required=True, help="Source Markdown file")
    parser.add_argument("--target", help="Target Markdown file")
    parser.add_argument("--locale", help="Target locale when inferring the target path")
    parser.add_argument("--write-sidecar", action="store_true", help="Write a .l10n.json sidecar file")
    parser.add_argument("--json", action="store_true", help="Print JSON instead of Markdown")
    args = parser.parse_args()

    source_doc = load_document(args.source)
    output = {
        "source": {
            "path": args.source,
            "metadata": source_doc.metadata,
            "blocks": [asdict(block) for block in source_doc.blocks],
        }
    }

    if args.target or args.locale:
        target_path = args.target or infer_locale_path(args.source, args.locale)
        target_doc = load_document(target_path)
        sidecar = load_sidecar(target_path)
        matches = align_blocks(source_doc.blocks, target_doc.blocks, sidecar)
        output["target"] = {
            "path": str(target_path),
            "metadata": target_doc.metadata,
            "blocks": [asdict(block) for block in target_doc.blocks],
        }
        output["matches"] = [asdict(match) for match in matches]
        if args.write_sidecar:
            payload = build_sidecar_entries(args.source, target_path, args.locale or "", source_doc.blocks, target_doc.blocks, matches)
            save_sidecar(target_path, payload)

    if args.json:
        print(json.dumps(output, indent=2, ensure_ascii=False))
    elif args.target or args.locale:
        print(render_alignment_report([AlignmentMatch(**match) for match in output["matches"]], source_doc.blocks))
    else:
        print(json.dumps(output["source"], indent=2, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(cli())
