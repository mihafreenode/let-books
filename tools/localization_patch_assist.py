#!/usr/bin/env python3
"""Patch localized Markdown files using source-side git diffs and block alignment."""

from __future__ import annotations

import argparse
import json
import re
import subprocess
from pathlib import Path

from localization_alignment import (
    AlignmentMatch,
    align_blocks,
    build_sidecar_entries,
    infer_locale_path,
    load_document,
    load_sidecar,
    parse_markdown,
    render_alignment_report,
    save_sidecar,
)
from localization_mt_draft import choose_backend, infer_source_locale, translate_block_text, translate_frontmatter


HUNK_RE = re.compile(r"^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@")


def git_show_file(base_ref: str, source_path: Path) -> str:
    completed = subprocess.run(
        ["git", "show", f"{base_ref}:{source_path.as_posix()}"],
        capture_output=True,
        text=True,
        check=False,
    )
    if completed.returncode != 0:
        stderr = completed.stderr.strip() or "unable to load base revision"
        raise RuntimeError(stderr)
    return completed.stdout


def changed_line_ranges(base_ref: str, source_path: Path) -> list[tuple[int, int]]:
    completed = subprocess.run(
        ["git", "diff", "--unified=0", base_ref, "--", source_path.as_posix()],
        capture_output=True,
        text=True,
        check=False,
    )
    if completed.returncode not in {0, 1}:
        stderr = completed.stderr.strip() or "git diff failed"
        raise RuntimeError(stderr)

    ranges: list[tuple[int, int]] = []
    for line in completed.stdout.splitlines():
        match = HUNK_RE.match(line)
        if not match:
            continue
        start = int(match.group(1))
        length = int(match.group(2) or "1")
        end = start + max(length, 1) - 1
        ranges.append((start, end))
    return ranges


def blocks_in_ranges(blocks, ranges: list[tuple[int, int]]):
    changed = []
    for block in blocks:
        if any(not (block.end_line < start or block.start_line > end) for start, end in ranges):
            changed.append(block)
    return changed


def replace_target_blocks(target_doc, replacements: dict[str, str]) -> str:
    rendered = []
    for block in target_doc.blocks:
        rendered.append(replacements.get(block.block_id, block.text))
    body = "\n\n".join(rendered).strip() + "\n"
    if target_doc.frontmatter:
        return target_doc.frontmatter.rstrip() + "\n\n" + body
    return body


def build_context_packet(source_blocks, changed_block_ids: set[str]) -> list[dict]:
    contexts = []
    for index, block in enumerate(source_blocks):
        if block.block_id not in changed_block_ids:
            continue
        previous_block = source_blocks[index - 1] if index > 0 else None
        next_block = source_blocks[index + 1] if index + 1 < len(source_blocks) else None
        contexts.append(
            {
                "blockId": block.block_id,
                "headingPath": block.heading_path,
                "changedBlock": block.text,
                "previousUnchangedBlock": previous_block.text if previous_block else None,
                "nextUnchangedBlock": next_block.text if next_block else None,
            }
        )
    return contexts


def main() -> int:
    parser = argparse.ArgumentParser(description="Patch a localized Markdown document using git diff and block alignment.")
    parser.add_argument("--source", required=True, help="Changed source Markdown file")
    parser.add_argument("--target", help="Target localized Markdown file")
    parser.add_argument("--locale", required=True, help="Target locale")
    parser.add_argument("--base-ref", default="HEAD", help="Git base revision for diff detection")
    parser.add_argument("--backend", default="auto", choices=["auto", "argos", "apertium", "translate-shell"], help="Translation backend")
    parser.add_argument("--write", action="store_true", help="Write updated localized file")
    parser.add_argument("--write-sidecar", action="store_true", help="Write updated alignment metadata")
    parser.add_argument("--report-file", help="Write JSON report for AI review and fallback handling")
    args = parser.parse_args()

    source_path = Path(args.source)
    target_path = Path(args.target) if args.target else infer_locale_path(source_path, args.locale)
    source_locale = infer_source_locale(str(source_path))
    backend = choose_backend(args.backend, source_locale, args.locale)

    current_source = load_document(source_path)
    parse_markdown(git_show_file(args.base_ref, source_path), path=f"{args.base_ref}:{source_path}")
    target_doc = load_document(target_path)
    sidecar = load_sidecar(target_path)

    ranges = changed_line_ranges(args.base_ref, source_path)
    changed_blocks = blocks_in_ranges(current_source.blocks, ranges)
    if not changed_blocks:
        print("No changed source blocks detected.")
        return 0

    matches = align_blocks(current_source.blocks, target_doc.blocks, sidecar)
    match_map = {match.source_block_id: match for match in matches}
    replacements: dict[str, str] = {}
    low_confidence = []

    for block in changed_blocks:
        match = match_map.get(block.block_id)
        if match is None or match.target_block_id is None or match.score < 0.45:
            low_confidence.append(
                {
                    "blockId": block.block_id,
                    "strategy": match.strategy if match else "unmatched",
                    "score": match.score if match else 0.0,
                }
            )
            continue
        replacements[match.target_block_id] = translate_block_text(block.block_type, block.text, backend, source_locale, args.locale)

    fallback_required = bool(low_confidence)
    updated_text = replace_target_blocks(target_doc, replacements)

    if any(block.start_line <= current_source.frontmatter.count("\n") + 1 for block in changed_blocks):
        target_frontmatter = translate_frontmatter(current_source.frontmatter, backend, source_locale, args.locale)
        parsed_target = parse_markdown(updated_text, path=str(target_path))
        updated_text = target_frontmatter.rstrip() + "\n\n" + parsed_target.body.strip() + "\n"

    updated_target = parse_markdown(updated_text, path=str(target_path))

    if args.write:
        target_path.write_text(updated_text, encoding="utf-8")

    if args.write_sidecar:
        payload = build_sidecar_entries(source_path, target_path, args.locale, current_source.blocks, updated_target.blocks, matches)
        save_sidecar(target_path, payload)

    report = {
        "sourcePath": str(source_path),
        "targetPath": str(target_path),
        "baseRef": args.base_ref,
        "changedLineRanges": ranges,
        "changedBlocks": [block.block_id for block in changed_blocks],
        "context": build_context_packet(current_source.blocks, {block.block_id for block in changed_blocks}),
        "lowConfidenceAlignments": low_confidence,
        "fallbackRequired": fallback_required,
        "fallbackGuidance": (
            "Generate a full-source MT draft, compare it with the existing translation, and merge only the changed source semantics "
            "while preserving previously reviewed target text."
            if fallback_required
            else None
        ),
    }

    if args.report_file:
        Path(args.report_file).write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    print(render_alignment_report(matches, current_source.blocks))
    if fallback_required:
        print("Fallback required for one or more changed blocks.")
    else:
        print(f"Patched {len(replacements)} localized block(s) in {target_path}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
