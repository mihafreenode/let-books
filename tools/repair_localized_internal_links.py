#!/usr/bin/env python3
"""Rewrite localized docs links away from English targets when a locale variant exists."""

from __future__ import annotations

import argparse
import re
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parents[1]
DOCS_DIR = ROOT_DIR / "docs"
LOCALES = ["sl", "hr", "bs", "sr-Latn", "sr-Cyrl", "mk", "sq", "de", "it", "fr", "es"]

ABSOLUTE_EN_LINK_RE = re.compile(r"\(/docs/(?P<section>learning|wiki|topics|blog)/en/(?P<slug>[^)]+?)\.html\)")
RELATIVE_EN_LINK_RE = re.compile(r"\(\.\./en/(?P<slug>[^)]+?)\.md\)")


def localized_target_exists(section: str, locale: str, slug: str) -> bool:
    if section == "blog":
        return (DOCS_DIR / section / locale / f"{slug}.md").exists()
    return (DOCS_DIR / section / locale / f"{slug}.md").exists()


def repair_content(content: str, file_path: Path, locale: str) -> tuple[str, int]:
    replacements = 0

    def replace_absolute(match: re.Match[str]) -> str:
        nonlocal replacements
        section = match.group("section")
        slug = match.group("slug")
        if localized_target_exists(section, locale, slug):
            replacements += 1
            return f"(/docs/{section}/{locale}/{slug}.html)"
        return match.group(0)

    def replace_relative(match: re.Match[str]) -> str:
        nonlocal replacements
        slug = match.group("slug")
        relative_target = file_path.parent / ".." / locale / f"{slug}.md"
        if relative_target.resolve().exists():
            replacements += 1
            return f"(../{locale}/{slug}.md)"
        return match.group(0)

    updated = ABSOLUTE_EN_LINK_RE.sub(replace_absolute, content)
    updated = RELATIVE_EN_LINK_RE.sub(replace_relative, updated)
    return updated, replacements


def iter_markdown_files(locale: str):
    for path in sorted(DOCS_DIR.glob(f"**/{locale}/*.md")):
        yield path


def main() -> int:
    parser = argparse.ArgumentParser(description="Repair localized internal links that still point at English docs.")
    parser.add_argument("--locale", choices=LOCALES, help="Limit repairs to one locale")
    parser.add_argument("--write", action="store_true", help="Write changes to disk")
    args = parser.parse_args()

    locales = [args.locale] if args.locale else LOCALES
    changed_files = 0
    replacements = 0
    for locale in locales:
        for path in iter_markdown_files(locale):
            original = path.read_text(encoding="utf-8")
            updated, count = repair_content(original, path, locale)
            if count > 0:
                changed_files += 1
                replacements += count
                if args.write:
                    path.write_text(updated, encoding="utf-8")

    print({"changed_files": changed_files, "replacements": replacements, "locale": args.locale, "write": args.write})
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
