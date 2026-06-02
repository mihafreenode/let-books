#!/usr/bin/env python3
"""Granular translation parity validation for Markdown source/target pairs."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

from localization_alignment import align_blocks, load_document, load_sidecar, similarity


ROOT_DIR = Path(__file__).resolve().parents[1]
DOCS_DIR = ROOT_DIR / "docs"
CONFIG = json.loads((ROOT_DIR / "tools" / "docs-config.json").read_text(encoding="utf-8"))
ENGLISH_FRAGMENT_RE = re.compile(r"[A-Z][a-z]+(?:\s+[a-z][a-z-]+){3,}")


def iter_pairs(single_source: str | None, single_target: str | None):
    if single_source and single_target:
        yield Path(single_source), Path(single_target), infer_locale_from_path(single_target)
        return

    for content_type in CONFIG["contentTypes"]:
        english_dir = DOCS_DIR / content_type / "en" if content_type == "blog" else DOCS_DIR / content_type
        if not english_dir.exists():
            continue
        for source_path in sorted(english_dir.glob("*.md")):
            if source_path.name == "README.md":
                continue
            for locale in CONFIG["locales"]:
                if locale == "en":
                    continue
                target_path = DOCS_DIR / content_type / locale / source_path.name
                if target_path.exists():
                    yield source_path, target_path, locale


def infer_locale_from_path(path: str) -> str:
    normalized = path.replace("\\", "/")
    for locale in CONFIG["locales"]:
        if f"/{locale}/" in normalized:
            return locale
    return "unknown"


def extract_urls(text: str) -> list[str]:
    return re.findall(r"\[[^\]]+\]\(([^)]+)\)", text)


def root_relative(path: Path) -> str:
    resolved = path.resolve() if not path.is_absolute() else path
    try:
        return str(resolved.relative_to(ROOT_DIR))
    except ValueError:
        return path.as_posix()


def validate_pair(source_path: Path, target_path: Path, locale: str) -> dict:
    source_doc = load_document(source_path)
    target_doc = load_document(target_path)
    sidecar = load_sidecar(target_path)
    matches = align_blocks(source_doc.blocks, target_doc.blocks, sidecar)
    target_by_id = {block.block_id: block for block in target_doc.blocks}

    findings: list[dict] = []

    source_title = source_doc.metadata.get("title", "")
    target_title = target_doc.metadata.get("title", "")
    if source_title and target_title and source_title == target_title:
        findings.append(issue("warning", "metadata drift", source_path, target_path, None, None, "target title is identical to source title"))

    source_summary = source_doc.metadata.get("summary", "")
    target_summary = target_doc.metadata.get("summary", "")
    if source_summary and target_summary and source_summary == target_summary:
        findings.append(issue("warning", "metadata drift", source_path, target_path, None, None, "target summary is identical to source summary"))

    if source_doc.metadata.keys() != target_doc.metadata.keys():
        findings.append(issue("warning", "metadata drift", source_path, target_path, None, None, "frontmatter key set differs"))

    for match in matches:
        source_block = next(block for block in source_doc.blocks if block.block_id == match.source_block_id)
        target_block = target_by_id.get(match.target_block_id) if match.target_block_id else None

        if target_block is None:
            findings.append(issue("error", "missing section", source_path, target_path, source_block.start_line, None, f"no target block aligned for source {source_block.block_id}"))
            continue

        if source_block.block_type == "heading" and target_block.block_type != "heading":
            findings.append(issue("error", "missing headings", source_path, target_path, source_block.start_line, target_block.start_line, "source heading aligned to non-heading target block"))

        if source_block.block_type in {"code", "diagram"} and source_block.text != target_block.text:
            findings.append(issue("error", "diagram parity", source_path, target_path, source_block.start_line, target_block.start_line, f"{source_block.block_type} block changed in translation"))

        source_urls = extract_urls(source_block.text)
        target_urls = extract_urls(target_block.text)
        missing_urls = [url for url in source_urls if url not in target_urls]
        if missing_urls:
            findings.append(issue("error", "broken internal links", source_path, target_path, source_block.start_line, target_block.start_line, f"missing URLs in target: {', '.join(missing_urls)}"))

        if locale != "en" and source_block.word_count >= 8 and similarity(source_block.text, target_block.text) >= 0.93:
            findings.append(issue("warning", "untranslated source-language fragments", source_path, target_path, source_block.start_line, target_block.start_line, "target block is too similar to source block"))

        if locale != "en" and ENGLISH_FRAGMENT_RE.search(target_block.text) and source_block.block_type not in {"code", "diagram", "html_comment"}:
            findings.append(issue("warning", "untranslated source-language fragments", source_path, target_path, source_block.start_line, target_block.start_line, "target block still contains a suspicious English fragment"))

        if source_block.word_count >= 12 and target_block.word_count and (target_block.word_count / source_block.word_count) < 0.45:
            findings.append(issue("warning", "excessive shortening", source_path, target_path, source_block.start_line, target_block.start_line, f"target block is much shorter than source ({target_block.word_count}/{source_block.word_count} words)"))

        if match.score < 0.40:
            findings.append(issue("warning", "suspicious semantic loss", source_path, target_path, source_block.start_line, target_block.start_line, f"low alignment confidence ({match.score:.3f})"))

    return {
        "source": root_relative(source_path),
        "target": root_relative(target_path),
        "locale": locale,
        "findings": findings,
    }


def issue(severity: str, category: str, source_path: Path, target_path: Path, source_line: int | None, target_line: int | None, message: str) -> dict:
    return {
        "severity": severity,
        "category": category,
        "sourcePath": root_relative(source_path),
        "targetPath": root_relative(target_path),
        "sourceLine": source_line,
        "targetLine": target_line,
        "message": message,
    }


def render_markdown(results: list[dict]) -> str:
    findings = [finding for result in results for finding in result["findings"]]
    errors = [finding for finding in findings if finding["severity"] == "error"]
    warnings = [finding for finding in findings if finding["severity"] == "warning"]

    lines = ["# Translation Parity Validation Report", ""]
    lines.append(f"- Files reviewed: {len(results)}")
    lines.append(f"- Errors: {len(errors)}")
    lines.append(f"- Warnings: {len(warnings)}")
    lines.append("")

    if findings:
        lines.append("## Findings")
        lines.append("")
        for finding in findings:
            location = []
            if finding["sourceLine"]:
                location.append(f"source:{finding['sourceLine']}")
            if finding["targetLine"]:
                location.append(f"target:{finding['targetLine']}")
            suffix = f" ({', '.join(location)})" if location else ""
            lines.append(f"- [{finding['severity']}] {finding['category']} {finding['targetPath']}{suffix}: {finding['message']}")
        lines.append("")
    else:
        lines.append("No translation parity issues detected.")
        lines.append("")

    return "\n".join(lines)


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate semantic and structural translation parity.")
    parser.add_argument("--source", help="Single source Markdown file")
    parser.add_argument("--target", help="Single target Markdown file")
    parser.add_argument("--report-file", help="Write Markdown report")
    parser.add_argument("--json-report-file", help="Write JSON report")
    parser.add_argument("--fail-on-errors", action="store_true", help="Exit non-zero on errors")
    parser.add_argument("--fail-on-warnings", action="store_true", help="Exit non-zero on warnings")
    args = parser.parse_args()

    results = [validate_pair(source_path, target_path, locale) for source_path, target_path, locale in iter_pairs(args.source, args.target)]
    markdown = render_markdown(results)
    json_report = json.dumps(results, indent=2, ensure_ascii=False)

    if args.report_file:
        Path(args.report_file).write_text(markdown, encoding="utf-8")
    if args.json_report_file:
        Path(args.json_report_file).write_text(json_report + "\n", encoding="utf-8")

    print(markdown)

    findings = [finding for result in results for finding in result["findings"]]
    has_errors = any(finding["severity"] == "error" for finding in findings)
    has_warnings = any(finding["severity"] == "warning" for finding in findings)
    if (args.fail_on_errors and has_errors) or (args.fail_on_warnings and has_warnings):
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
