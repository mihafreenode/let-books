#!/usr/bin/env python3
"""Summarize translation warning debt by locale, article, and file."""

from __future__ import annotations

import argparse
import json
from collections import Counter, defaultdict
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parents[1]


def load_report(path: Path) -> list[dict]:
    return json.loads(path.read_text(encoding="utf-8"))


def build_summary(report: list[dict], top_n: int) -> dict:
    warnings = [finding for result in report for finding in result["findings"] if finding["severity"] == "warning"]
    by_locale = Counter(result["locale"] for result in report for finding in result["findings"] if finding["severity"] == "warning")
    by_category = Counter(finding["category"] for finding in warnings)

    by_file = []
    article_locale = defaultdict(Counter)
    for result in report:
        file_warnings = [finding for finding in result["findings"] if finding["severity"] == "warning"]
        if not file_warnings:
            continue
        by_file.append(
            {
                "target": result["target"],
                "locale": result["locale"],
                "warnings": len(file_warnings),
                "categories": dict(Counter(finding["category"] for finding in file_warnings).most_common()),
            }
        )
        article_locale[Path(result["target"]).name][result["locale"]] += len(file_warnings)

    by_file.sort(key=lambda item: (item["warnings"], item["target"]), reverse=True)
    by_article = sorted(
        (
            {
                "article": article,
                "warnings": sum(locales.values()),
                "locales": dict(locales),
            }
            for article, locales in article_locale.items()
        ),
        key=lambda item: (item["warnings"], item["article"]),
        reverse=True,
    )

    return {
        "warningCount": len(warnings),
        "byLocale": dict(by_locale.most_common()),
        "byCategory": dict(by_category.most_common()),
        "topFiles": by_file[:top_n],
        "topArticles": by_article[:top_n],
    }


def render_markdown(summary: dict) -> str:
    lines = ["# Translation Warning Audit", ""]
    lines.append(f"- Total warnings: {summary['warningCount']}")
    lines.append("")

    lines.append("## By Locale")
    lines.append("")
    for locale, count in summary["byLocale"].items():
        lines.append(f"- {locale}: {count}")
    lines.append("")

    lines.append("## By Category")
    lines.append("")
    for category, count in summary["byCategory"].items():
        lines.append(f"- {category}: {count}")
    lines.append("")

    lines.append("## Top Files")
    lines.append("")
    for item in summary["topFiles"]:
        lines.append(f"- {item['target']} ({item['locale']}): {item['warnings']} warnings")
    lines.append("")

    lines.append("## Top Articles")
    lines.append("")
    for item in summary["topArticles"]:
        locale_summary = ", ".join(f"{locale}={count}" for locale, count in item["locales"].items())
        lines.append(f"- {item['article']}: {item['warnings']} warnings ({locale_summary})")
    lines.append("")
    return "\n".join(lines)


def main() -> int:
    parser = argparse.ArgumentParser(description="Audit translation warnings from a parity JSON report.")
    parser.add_argument("--json-report", default="docs/.translation-parity-all.json", help="Path to the parity JSON report")
    parser.add_argument("--summary-file", help="Write Markdown summary")
    parser.add_argument("--summary-json-file", help="Write JSON summary")
    parser.add_argument("--top", type=int, default=20, help="Number of top files/articles to include")
    args = parser.parse_args()

    summary = build_summary(load_report(ROOT_DIR / args.json_report), args.top)
    markdown = render_markdown(summary)
    print(markdown)

    if args.summary_file:
        Path(args.summary_file).write_text(markdown, encoding="utf-8")
    if args.summary_json_file:
        Path(args.summary_json_file).write_text(json.dumps(summary, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
