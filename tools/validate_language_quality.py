#!/usr/bin/env python3
"""
Purpose:
- Produce a warning-only language-quality report for localized Markdown content.

Why:
- Localization quality benefits from deterministic checks for spelling, punctuation,
  typography, casing, whitespace, and script consistency before any future CI
  enforcement is considered.

Detects / Enforces:
- Warning-only findings for localized Markdown sources.
- Optional Hunspell-based spelling warnings when locale dictionaries are available.
- Regex and Unicode-driven checks for punctuation, typography, whitespace, and script mixing.

Limitations:
- This tool is intentionally advisory.
- It avoids subjective grammar enforcement.
- Some locales still need allowlists or external dictionaries for higher precision.

Related:
- tools/README.md
- tools/docs-config.json
- docs/style-guide/localization/review-workflow.md
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parents[1]
DOCS_DIR = ROOT_DIR / "docs"
CONFIG = json.loads((ROOT_DIR / "tools" / "docs-config.json").read_text(encoding="utf-8"))

HUNSPELL_DICTS = {
    "sl": "sl_SI",
    "hr": "hr_HR",
    "bs": "bs_BA",
    "sr-Latn": "sr_Latn_RS",
    "sr-Cyrl": "sr_RS",
    "de": "de_DE",
    "it": "it_IT",
    "fr": "fr_FR",
    "es": "es_ES",
}

LATIN_LOCALES = {"sl", "hr", "bs", "sr-Latn", "sq", "de", "it", "fr", "es"}
CYRILLIC_LOCALES = {"sr-Cyrl", "mk"}

COMMON_ALLOWED_WORDS = {
    "agenti", "ai", "api", "aspell", "azure", "blazor", "books", "ci", "cobiss",
    "codespell", "crossref", "csv", "dexie", "docs", "docker", "ebook", "ef", "excel",
    "figma", "github", "git", "html", "hunspell", "isbn", "json", "let", "llm", "llms",
    "markdown", "metadata", "oauth", "ocr", "odbc", "openai", "openalex", "openlibrary",
    "pandoc", "pdf", "playwright", "postgresql", "pwa", "qa", "qr", "readme", "redis",
    "seo", "sqlite", "svg", "unicode", "uri", "url", "urls", "wikidata", "workflow",
    "workflows", "yaml", "english", "slovenščina", "hrvatski", "bosanski", "srpski",
    "српски", "latinica", "ћирилица", "македонски", "shqip", "deutsch", "italiano", "français",
    "español", "blog", "summary", "purpose", "structure", "related", "topics",
    "articles", "further", "reading", "directory", "canonical", "linked", "publishing",
    "support", "this", "will", "hold", "translations", "source", "sources", "booksa",
    "booksu", "open", "library", "aria", "stack", "startup", "governance",
}

SCRIPT_ALLOWLIST = {
    "ai", "api", "azure", "blazor", "books", "ci", "cobiss", "crossref", "csv", "docs",
    "excel", "github", "git", "html", "isbn", "json", "let", "llm", "llms", "markdown",
    "ocr", "openai", "openalex", "openlibrary", "pdf", "playwright", "postgresql", "pwa",
    "qa", "qr", "readme", "redis", "seo", "sqlite", "svg", "unicode", "uri", "url",
    "urls", "wikidata", "yaml", "english", "slovenščina", "hrvatski", "bosanski",
    "srpski", "српски", "latinica", "ћирилица", "македонски", "shqip", "deutsch",
    "italiano", "français", "español", "booksa", "booksu", "open", "library",
}

TOKEN_RE = re.compile(r"[^\W\d_][^\W\d_'’/-]*", re.UNICODE)
INLINE_CODE_RE = re.compile(r"`[^`]*`")
HTML_COMMENT_RE = re.compile(r"<!--.*?-->", re.DOTALL)
LINK_RE = re.compile(r"!?\[([^\]]*)\]\(([^)]+)\)")
FENCED_CODE_LINE_RE = re.compile(r"^```")
SPACE_BEFORE_PUNCT_RE = re.compile(r"\s+[,:;!?]")
MISSING_SPACE_AFTER_PUNCT_RE = re.compile(r'''[,:;!?](?=[^\s\]\)\}"'»”’\d])''')
DUPLICATE_PUNCT_RE = re.compile(r"([!?;,])\1+|\.{4,}|[!?]{3,}|[?!]{3,}")
ASCII_DOUBLE_QUOTE_RE = re.compile(r'"[^"\n]{2,}"')
ELLIPSIS_RE = re.compile(r"\.\.\.")
TRAILING_SPACE_RE = re.compile(r"[ \t]+$")
DOUBLE_SPACE_RE = re.compile(r"\S  +\S")


def iter_localized_markdown_files() -> list[tuple[str, Path]]:
    files: list[tuple[str, Path]] = []
    for content_type in CONFIG["contentTypes"]:
        base_dir = DOCS_DIR / content_type
        if not base_dir.exists():
            continue
        for locale in CONFIG["locales"]:
            if locale == "en":
                continue
            locale_dir = base_dir / locale
            if not locale_dir.exists():
                continue
            for path in sorted(locale_dir.glob("*.md")):
                if path.name == "README.md":
                    continue
                files.append((locale, path))
    return files


def strip_frontmatter(text: str) -> str:
    if not text.startswith("---\n"):
        return text
    end = text.find("\n---\n", 4)
    if end == -1:
        return text
    prefix = text[: end + 5]
    return ("\n" * prefix.count("\n")) + text[end + 5 :]


def strip_markdown_markup(text: str) -> list[tuple[int, str]]:
    text = strip_frontmatter(text)
    text = HTML_COMMENT_RE.sub(" ", text)
    lines = text.splitlines()
    cleaned_lines: list[tuple[int, str]] = []
    in_fence = False
    for line_number, raw_line in enumerate(lines, start=1):
        if FENCED_CODE_LINE_RE.match(raw_line.strip()):
            in_fence = not in_fence
            continue
        if in_fence:
            continue
        if raw_line.lstrip().startswith("!["):
            continue
        line = INLINE_CODE_RE.sub(" ", raw_line)
        line = LINK_RE.sub(lambda match: match.group(1) or " ", line)
        cleaned_lines.append((line_number, line))
    return cleaned_lines


def contains_cyrillic(token: str) -> bool:
    return any("CYRILLIC" in unicodedata_name(char) for char in token)


def contains_latin(token: str) -> bool:
    return any("LATIN" in unicodedata_name(char) for char in token)


def unicodedata_name(char: str) -> str:
    import unicodedata

    return unicodedata.name(char, "")


def normalize_token(token: str) -> str:
    return token.strip("'’/-").lower()


def collect_line_warnings(locale: str, path: Path, line_number: int, line: str) -> list[dict]:
    warnings: list[dict] = []
    stripped = line.strip()
    if not stripped:
        return warnings

    for match in SPACE_BEFORE_PUNCT_RE.finditer(line):
        punct = match.group(0).strip()[-1]
        if locale == "fr" and punct in {":", ";", "!", "?"}:
            continue
        warnings.append(make_warning("punctuation", path, locale, line_number, f"space before punctuation '{punct}'", stripped))
        break

    if "http" not in line:
        for match in MISSING_SPACE_AFTER_PUNCT_RE.finditer(line):
            punct = match.group(0)[0]
            if locale == "fr" and punct in {":", ";", "!", "?"}:
                warnings.append(make_warning("punctuation", path, locale, line_number, f"missing French spacing after punctuation '{punct}'", stripped))
            elif locale != "fr":
                warnings.append(make_warning("punctuation", path, locale, line_number, f"missing space after punctuation '{punct}'", stripped))
            break

    if DUPLICATE_PUNCT_RE.search(line):
        warnings.append(make_warning("punctuation", path, locale, line_number, "duplicate punctuation sequence", stripped))

    if ASCII_DOUBLE_QUOTE_RE.search(line):
        warnings.append(make_warning("typography", path, locale, line_number, "ASCII double quotes in prose", stripped))

    if ELLIPSIS_RE.search(line):
        warnings.append(make_warning("typography", path, locale, line_number, "three-dot ellipsis instead of single ellipsis character", stripped))

    if "\t" in line:
        warnings.append(make_warning("whitespace", path, locale, line_number, "tab character in content line", stripped))

    trailing_match = TRAILING_SPACE_RE.search(line)
    if trailing_match:
        trailing = trailing_match.group(0)
        if "\t" in trailing or len(trailing) != 2:
            warnings.append(make_warning("whitespace", path, locale, line_number, "trailing whitespace", stripped))

    return warnings


def collect_script_warnings(locale: str, path: Path, line_number: int, line: str) -> list[dict]:
    warnings: list[dict] = []
    for match in TOKEN_RE.finditer(line):
        token = match.group(0)
        normalized = normalize_token(token)
        if len(normalized) < 3 or normalized in SCRIPT_ALLOWLIST:
            continue
        has_latin = contains_latin(token)
        has_cyrillic = contains_cyrillic(token)

        if re.fullmatch(r"[A-Z]{2,8}[А-Яа-яЉЊЂЈЋЏљњђјћџ]+", token):
            continue

        if has_latin and has_cyrillic:
            warnings.append(make_warning("script-consistency", path, locale, line_number, f"mixed Latin/Cyrillic token '{token}'", line.strip()))
            continue

        if locale in LATIN_LOCALES and has_cyrillic:
            warnings.append(make_warning("script-consistency", path, locale, line_number, f"Cyrillic token in Latin-script locale: '{token}'", line.strip()))

        if locale in CYRILLIC_LOCALES and has_latin and not token.isupper():
            warnings.append(make_warning("script-consistency", path, locale, line_number, f"Latin token in Cyrillic-script locale: '{token}'", line.strip()))
    return warnings


def collect_spelling_warnings(locale: str, path: Path, cleaned_lines: list[tuple[int, str]]) -> list[dict]:
    dictionary = HUNSPELL_DICTS.get(locale)
    if not dictionary:
        return []

    tokens: list[str] = []
    for _, line in cleaned_lines:
        for match in TOKEN_RE.finditer(line):
            token = match.group(0)
            normalized = normalize_token(token)
            if len(normalized) < 3 or normalized in COMMON_ALLOWED_WORDS:
                continue
            tokens.append(token)

    if not tokens:
        return []

    result = subprocess.run(
        ["hunspell", "-d", dictionary, "-l"],
        input="\n".join(tokens) + "\n",
        text=True,
        capture_output=True,
        check=False,
    )
    if result.returncode not in {0, 1}:
        return [make_warning("spelling", path, locale, None, f"hunspell returned exit code {result.returncode}", path.as_posix())]

    misses = []
    seen = set()
    for word in result.stdout.splitlines():
        normalized = normalize_token(word)
        if not normalized or normalized in COMMON_ALLOWED_WORDS or normalized in seen:
            continue
        seen.add(normalized)
        misses.append(word)

    if not misses:
        return []
    preview = ", ".join(misses[:12])
    return [make_warning("spelling", path, locale, None, f"hunspell unknown words: {preview}", path.as_posix())]


def make_warning(category: str, path: Path, locale: str, line_number: int | None, message: str, excerpt: str) -> dict:
    return {
        "category": category,
        "locale": locale,
        "path": str(path.relative_to(ROOT_DIR)),
        "line": line_number,
        "message": message,
        "excerpt": excerpt[:220],
    }


def analyze_files() -> dict:
    warnings: list[dict] = []
    for locale, path in iter_localized_markdown_files():
        cleaned_lines = strip_markdown_markup(path.read_text(encoding="utf-8"))
        for line_number, line in cleaned_lines:
            warnings.extend(collect_line_warnings(locale, path, line_number, line))
            warnings.extend(collect_script_warnings(locale, path, line_number, line))
        warnings.extend(collect_spelling_warnings(locale, path, cleaned_lines))

    counts = {category: 0 for category in ["spelling", "punctuation", "typography", "casing", "whitespace", "script-consistency"]}
    for warning in warnings:
        counts[warning["category"]] = counts.get(warning["category"], 0) + 1
    return {"warnings": warnings, "counts": counts}


def render_markdown(report: dict) -> str:
    warnings = report["warnings"]
    counts = report["counts"]
    lines = ["# Language Quality Warning Report", "", "Warning-only stage. This report never fails by itself.", ""]
    lines.append("## Summary")
    lines.append("")
    for category in ["spelling", "punctuation", "typography", "casing", "whitespace", "script-consistency"]:
        lines.append(f"- {category} warnings: {counts.get(category, 0)}")
    lines.append("")

    for category in ["spelling", "punctuation", "typography", "casing", "whitespace", "script-consistency"]:
        lines.append(f"## {category.title()} Warnings")
        lines.append("")
        category_warnings = [warning for warning in warnings if warning["category"] == category]
        if not category_warnings:
            lines.append("- none")
            lines.append("")
            continue
        for warning in category_warnings[:120]:
            suffix = f":{warning['line']}" if warning["line"] else ""
            lines.append(f"- `{warning['path']}{suffix}` {warning['message']}")
        if len(category_warnings) > 120:
            lines.append(f"- ... {len(category_warnings) - 120} more warnings omitted")
        lines.append("")
    return "\n".join(lines)


def main() -> int:
    parser = argparse.ArgumentParser(description="Run warning-only language quality checks for localized Markdown.")
    parser.add_argument("--report-file", help="Write Markdown report")
    parser.add_argument("--json-report-file", help="Write JSON report")
    args = parser.parse_args()

    report = analyze_files()
    markdown = render_markdown(report)
    print(markdown)

    if args.report_file:
        Path(args.report_file).write_text(markdown + "\n", encoding="utf-8")
    if args.json_report_file:
        Path(args.json_report_file).write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
