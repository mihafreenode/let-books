#!/usr/bin/env python3
"""Run a focused translation parity audit and summarize the highest-signal issues."""

from __future__ import annotations

import argparse
import json
from collections import Counter
from pathlib import Path

from validate_translation_parity import CONFIG, DOCS_DIR, render_markdown, validate_pair


def iter_pairs(locale: str, content_type_filter: str | None = None):
    for content_type in CONFIG["contentTypes"]:
        if content_type_filter and content_type != content_type_filter:
            continue
        english_dir = DOCS_DIR / content_type / "en" if content_type == "blog" else DOCS_DIR / content_type
        if not english_dir.exists():
            continue
        for source_path in sorted(english_dir.glob("*.md")):
            if source_path.name == "README.md":
                continue
            target_path = DOCS_DIR / content_type / locale / source_path.name
            if target_path.exists():
                yield source_path, target_path


def summarize_results(results: list[dict], top_files: int) -> dict:
    findings = [finding for result in results for finding in result["findings"]]
    by_category = Counter(finding["category"] for finding in findings)
    by_severity = Counter(finding["severity"] for finding in findings)

    file_summaries = []
    for result in results:
        file_findings = result["findings"]
        if not file_findings:
            continue
        file_summaries.append(
            {
                "target": result["target"],
                "errors": sum(1 for finding in file_findings if finding["severity"] == "error"),
                "warnings": sum(1 for finding in file_findings if finding["severity"] == "warning"),
                "total": len(file_findings),
                "categories": dict(Counter(finding["category"] for finding in file_findings).most_common()),
            }
        )

    file_summaries.sort(key=lambda item: (item["errors"], item["warnings"], item["total"], item["target"]), reverse=True)
    return {
        "filesReviewed": len(results),
        "filesWithFindings": len(file_summaries),
        "errors": by_severity.get("error", 0),
        "warnings": by_severity.get("warning", 0),
        "byCategory": dict(by_category.most_common()),
        "topFiles": file_summaries[:top_files],
    }


def render_summary_markdown(locale: str, content_type: str | None, summary: dict) -> str:
    title_scope = f"English to {locale}"
    if content_type:
        title_scope += f" ({content_type})"

    lines = [f"# Translation Parity Audit: {title_scope}", ""]
    lines.append(f"- Files reviewed: {summary['filesReviewed']}")
    lines.append(f"- Files with findings: {summary['filesWithFindings']}")
    lines.append(f"- Errors: {summary['errors']}")
    lines.append(f"- Warnings: {summary['warnings']}")
    lines.append("")

    lines.append("## Categories")
    lines.append("")
    for category, count in summary["byCategory"].items():
        lines.append(f"- {category}: {count}")
    lines.append("")

    lines.append("## Highest-Signal Files")
    lines.append("")
    for file_summary in summary["topFiles"]:
        lines.append(
            f"- {file_summary['target']}: {file_summary['errors']} errors, {file_summary['warnings']} warnings, {file_summary['total']} findings"
        )
    lines.append("")
    return "\n".join(lines)


def main() -> int:
    parser = argparse.ArgumentParser(description="Audit translation parity for one locale and summarize the results.")
    parser.add_argument("--locale", required=True, help="Target locale to audit, for example sl")
    parser.add_argument("--content-type", choices=CONFIG["contentTypes"], help="Limit the audit to one docs content type")
    parser.add_argument("--top-files", type=int, default=12, help="Number of highest-signal files to include in the summary")
    parser.add_argument("--report-file", help="Write the full Markdown findings report")
    parser.add_argument("--json-report-file", help="Write the full JSON findings report")
    parser.add_argument("--summary-file", help="Write a compact Markdown summary report")
    parser.add_argument("--summary-json-file", help="Write a compact JSON summary report")
    args = parser.parse_args()

    results = [validate_pair(source_path, target_path, args.locale) for source_path, target_path in iter_pairs(args.locale, args.content_type)]
    summary = summarize_results(results, args.top_files)
    markdown_report = render_markdown(results)
    markdown_summary = render_summary_markdown(args.locale, args.content_type, summary)

    if args.report_file:
        Path(args.report_file).write_text(markdown_report, encoding="utf-8")
    if args.json_report_file:
        Path(args.json_report_file).write_text(json.dumps(results, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    if args.summary_file:
        Path(args.summary_file).write_text(markdown_summary, encoding="utf-8")
    if args.summary_json_file:
        Path(args.summary_json_file).write_text(json.dumps(summary, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    print(markdown_summary)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
