#!/usr/bin/env python3
"""
Purpose:
- Generate machine-translated Markdown drafts while preserving structure and protected
  syntax.

Why:
- Raw MT output is too risky for Markdown-heavy docs. Draft generation must protect code,
  links, diagrams, and other syntax that reviewers should not need to reconstruct.

Detects / Enforces:
- Enforces structure-preserving translation boundaries and backend-normalized translation
  output.

Limitations:
- Draft-generation helper only; human review remains required.

Related:
- tools/README.md
- tools/localization_alignment.py
- tools/generate_translation_sidecars.py
"""

from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import textwrap
from pathlib import Path
from typing import Sequence

from localization_alignment import (
    align_blocks,
    build_sidecar_entries,
    infer_locale_path,
    load_document,
    parse_markdown,
    render_alignment_report,
    save_sidecar,
    sha256_text,
    similarity,
)


LANGUAGE_CODE_MAP = {
    "en": "en",
    "sl": "sl",
    "hr": "hr",
    "bs": "bs",
    "sr-Latn": "sr",
    "sr-Cyrl": "sr",
    "mk": "mk",
    "sq": "sq",
    "de": "de",
    "it": "it",
    "fr": "fr",
    "es": "es",
}

INLINE_CODE_RE = re.compile(r"`[^`]+`")
RAW_URL_RE = re.compile(r"https?://\S+")
LINK_RE = re.compile(r"(!?\[)([^\]]*)(\]\()([^)]*)(\))")


class TranslationBackend:
    name = "backend"

    def available(self, source_locale: str, target_locale: str) -> tuple[bool, str]:
        raise NotImplementedError

    def translate(self, text: str, source_locale: str, target_locale: str) -> str:
        raise NotImplementedError


class ArgosBackend(TranslationBackend):
    name = "argos"

    def __init__(self) -> None:
        try:
            import argostranslate.translate as argos_translate  # type: ignore
        except ImportError:
            self._argos = None
        else:
            self._argos = argos_translate

    def available(self, source_locale: str, target_locale: str) -> tuple[bool, str]:
        if self._argos is None:
            return False, "Python package not installed"
        try:
            translation = self._argos.get_translation_from_codes(
                LANGUAGE_CODE_MAP.get(source_locale, source_locale),
                LANGUAGE_CODE_MAP.get(target_locale, target_locale),
            )
        except Exception:
            translation = None
        if translation is None:
            return False, "Language model pair not installed"
        return True, "Ready"

    def translate(self, text: str, source_locale: str, target_locale: str) -> str:
        translation = self._argos.get_translation_from_codes(
            LANGUAGE_CODE_MAP.get(source_locale, source_locale),
            LANGUAGE_CODE_MAP.get(target_locale, target_locale),
        )
        if translation is None:
            raise RuntimeError("Argos language model pair is not installed")
        return translation.translate(text)


class ApertiumBackend(TranslationBackend):
    name = "apertium"

    def available(self, source_locale: str, target_locale: str) -> tuple[bool, str]:
        if shutil.which("apertium") is None:
            return False, "Command not found"
        return True, "Command available"

    def translate(self, text: str, source_locale: str, target_locale: str) -> str:
        pair = f"{LANGUAGE_CODE_MAP.get(source_locale, source_locale)}-{LANGUAGE_CODE_MAP.get(target_locale, target_locale)}"
        completed = subprocess.run(
            ["apertium", pair],
            input=text,
            text=True,
            capture_output=True,
            check=False,
        )
        if completed.returncode != 0:
            stderr = completed.stderr.strip() or "unknown apertium error"
            raise RuntimeError(stderr)
        return completed.stdout.strip("\n")


class TranslateShellBackend(TranslationBackend):
    name = "translate-shell"

    def available(self, source_locale: str, target_locale: str) -> tuple[bool, str]:
        if shutil.which("trans") is None:
            return False, "Command not found"
        return True, "Command available"

    def translate(self, text: str, source_locale: str, target_locale: str) -> str:
        pair = f"{LANGUAGE_CODE_MAP.get(source_locale, source_locale)}:{LANGUAGE_CODE_MAP.get(target_locale, target_locale)}"
        completed = subprocess.run(
            ["trans", "-brief", pair, text],
            text=True,
            capture_output=True,
            check=False,
        )
        if completed.returncode != 0:
            stderr = completed.stderr.strip() or "unknown translate-shell error"
            raise RuntimeError(stderr)
        return completed.stdout.strip()


BACKENDS: list[TranslationBackend] = [ArgosBackend(), ApertiumBackend(), TranslateShellBackend()]


def choose_backend(name: str, source_locale: str, target_locale: str) -> TranslationBackend:
    if name != "auto":
        backend = next((candidate for candidate in BACKENDS if candidate.name == name), None)
        if backend is None:
            raise RuntimeError(f"Unknown backend: {name}")
        ok, reason = backend.available(source_locale, target_locale)
        if not ok:
            raise RuntimeError(f"Backend '{name}' unavailable: {reason}")
        return backend

    for backend in BACKENDS:
        ok, _ = backend.available(source_locale, target_locale)
        if ok:
            return backend
    raise RuntimeError("No machine-translation backend is available")


def print_backend_status(source_locale: str, target_locale: str) -> int:
    print("# Machine Translation Backend Status")
    print("")
    for backend in BACKENDS:
        ok, reason = backend.available(source_locale, target_locale)
        status = "available" if ok else "unavailable"
        print(f"- {backend.name}: {status} ({reason})")
    print("")
    print("Argos may still require model installation inside .venv.")
    return 0


def protect_segments(text: str) -> tuple[str, dict[str, str]]:
    placeholders: dict[str, str] = {}
    counter = 0

    def reserve(match: re.Match[str]) -> str:
        nonlocal counter
        token = f"__TOKEN_{counter}__"
        placeholders[token] = match.group(0)
        counter += 1
        return token

    protected = INLINE_CODE_RE.sub(reserve, text)
    protected = RAW_URL_RE.sub(reserve, protected)
    return protected, placeholders


def restore_segments(text: str, placeholders: dict[str, str]) -> str:
    restored = text
    for token, value in placeholders.items():
        restored = restored.replace(token, value)
    return restored


def translate_inline(text: str, backend: TranslationBackend, source_locale: str, target_locale: str) -> str:
    if not text.strip():
        return text

    pieces: list[str] = []
    last_end = 0
    for match in LINK_RE.finditer(text):
        if match.start() > last_end:
            pieces.append(translate_plain_text(text[last_end:match.start()], backend, source_locale, target_locale))
        label = translate_plain_text(match.group(2), backend, source_locale, target_locale)
        pieces.append(f"{match.group(1)}{label}{match.group(3)}{match.group(4)}{match.group(5)}")
        last_end = match.end()
    if last_end < len(text):
        pieces.append(translate_plain_text(text[last_end:], backend, source_locale, target_locale))
    return "".join(pieces)


def translate_plain_text(text: str, backend: TranslationBackend, source_locale: str, target_locale: str) -> str:
    if not text.strip():
        return text
    protected, placeholders = protect_segments(text)
    translated = backend.translate(protected, source_locale, target_locale)
    return restore_segments(translated, placeholders)


def translate_block_text(block_type: str, text: str, backend: TranslationBackend, source_locale: str, target_locale: str) -> str:
    if block_type in {"code", "diagram", "html_comment"}:
        return text

    translated_lines: list[str] = []
    for line in text.splitlines():
        stripped = line.strip()
        if not stripped:
            translated_lines.append(line)
            continue

        if block_type == "heading":
            prefix, content = line.split(" ", 1)
            translated_lines.append(f"{prefix} {translate_inline(content, backend, source_locale, target_locale)}")
            continue

        if block_type == "list":
            match = re.match(r"^(\s*(?:[-*+] |\d+\. ))(.*)$", line)
            if match:
                translated_lines.append(match.group(1) + translate_inline(match.group(2), backend, source_locale, target_locale))
                continue

        if block_type in {"blockquote", "callout"}:
            match = re.match(r"^(\s*>\s?)(.*)$", line)
            if match:
                remainder = match.group(2)
                if remainder.startswith("[!"):
                    translated_lines.append(line)
                else:
                    translated_lines.append(match.group(1) + translate_inline(remainder, backend, source_locale, target_locale))
                continue

        if block_type == "table":
            if re.match(r"^\s*\|?(\s*:?-{3,}:?\s*\|)+\s*:?-{3,}:?\s*\|?\s*$", line):
                translated_lines.append(line)
                continue
            cells = line.split("|")
            translated_cells = [translate_inline(cell, backend, source_locale, target_locale) if cell.strip() else cell for cell in cells]
            translated_lines.append("|".join(translated_cells))
            continue

        translated_lines.append(translate_inline(line, backend, source_locale, target_locale))

    return "\n".join(translated_lines)


def translate_frontmatter(frontmatter: str, backend: TranslationBackend, source_locale: str, target_locale: str) -> str:
    if not frontmatter:
        return ""

    translated = frontmatter
    title_match = re.search(r'(^title:\s*"?)(.*?)("?\s*$)', translated, flags=re.MULTILINE)
    if title_match:
        title = title_match.group(2)
        translated_title = translate_inline(title, backend, source_locale, target_locale)
        translated = translated[: title_match.start()] + f"{title_match.group(1)}{translated_title}{title_match.group(3)}" + translated[title_match.end() :]

    summary_block_match = re.search(r"(^summary:\s*>-?\s*\n)((?:^[ ]{2}.*\n?)*)", translated, flags=re.MULTILINE)
    if summary_block_match:
        summary_lines = [line[2:] if line.startswith("  ") else line for line in summary_block_match.group(2).splitlines()]
        translated_summary = translate_inline("\n".join(summary_lines).strip(), backend, source_locale, target_locale)
        wrapped = textwrap.fill(translated_summary, width=78, initial_indent="  ", subsequent_indent="  ")
        translated = translated[: summary_block_match.start()] + summary_block_match.group(1) + wrapped + "\n" + translated[summary_block_match.end() :]
    else:
        summary_match = re.search(r'(^summary:\s*"?)(.*?)("?\s*$)', translated, flags=re.MULTILINE)
        if summary_match:
            summary = summary_match.group(2)
            translated_summary = translate_inline(summary, backend, source_locale, target_locale)
            translated = translated[: summary_match.start()] + f"{summary_match.group(1)}{translated_summary}{summary_match.group(3)}" + translated[summary_match.end() :]

    return translated


def render_document(frontmatter: str, block_texts: Sequence[str]) -> str:
    body = "\n\n".join(block_texts).strip() + "\n"
    if frontmatter:
        return frontmatter.rstrip() + "\n\n" + body
    return body


def build_review_packet(source_doc, target_doc, source_locale: str, target_locale: str, backend_name: str) -> dict:
    return {
        "sourcePath": source_doc.path,
        "targetPath": target_doc.path,
        "sourceLocale": source_locale,
        "targetLocale": target_locale,
        "backend": backend_name,
        "checks": [
            "semantic parity",
            "heading hierarchy parity",
            "list parity",
            "terminology consistency",
            "example parity",
            "diagram parity",
            "metadata parity",
            "link preservation",
        ],
        "sourceHash": sha256_text(source_doc.body),
        "targetHash": sha256_text(target_doc.body),
    }


def infer_source_locale(source_path: str) -> str:
    for locale in LANGUAGE_CODE_MAP:
        token = f"/{locale}/"
        if token in source_path.replace("\\", "/"):
            return locale
    return "en"


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate a machine-translated Markdown draft.")
    parser.add_argument("--source", required=False, help="Source Markdown file")
    parser.add_argument("--target", help="Target Markdown file")
    parser.add_argument("--locale", default="sl", help="Target locale")
    parser.add_argument("--source-locale", help="Source locale override")
    parser.add_argument("--backend", default="auto", choices=["auto", "argos", "apertium", "translate-shell"], help="Translation backend")
    parser.add_argument("--write", action="store_true", help="Write the translated draft to disk")
    parser.add_argument("--write-sidecar", action="store_true", help="Write alignment metadata sidecar")
    parser.add_argument("--report-file", help="Write an AI review packet as JSON")
    parser.add_argument("--print-backends", action="store_true", help="Print backend availability and exit")
    args = parser.parse_args()

    if args.print_backends:
        return print_backend_status(args.source_locale or "en", args.locale)

    if not args.source:
        parser.error("--source is required unless --print-backends is used")

    source_path = Path(args.source)
    target_path = Path(args.target) if args.target else infer_locale_path(source_path, args.locale)
    source_locale = args.source_locale or infer_source_locale(str(source_path))
    backend = choose_backend(args.backend, source_locale, args.locale)

    source_doc = load_document(source_path)
    translated_blocks = [
        translate_block_text(block.block_type, block.text, backend, source_locale, args.locale)
        for block in source_doc.blocks
    ]
    translated_frontmatter = translate_frontmatter(source_doc.frontmatter, backend, source_locale, args.locale)
    output_text = render_document(translated_frontmatter, translated_blocks)
    target_doc = parse_markdown(output_text, path=str(target_path))

    if args.write:
        target_path.parent.mkdir(parents=True, exist_ok=True)
        target_path.write_text(output_text, encoding="utf-8")

    if args.write_sidecar:
        matches = align_blocks(source_doc.blocks, target_doc.blocks, None)
        payload = build_sidecar_entries(source_path, target_path, args.locale, source_doc.blocks, target_doc.blocks, matches)
        save_sidecar(target_path, payload)

    if args.report_file:
        report_path = Path(args.report_file)
        report_path.parent.mkdir(parents=True, exist_ok=True)
        report_path.write_text(json.dumps(build_review_packet(source_doc, target_doc, source_locale, args.locale, backend.name), indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    print(f"Generated {args.locale} draft from {source_path} using {backend.name}")
    print(f"Target path: {target_path}")
    print(render_alignment_report([], source_doc.blocks).replace("# Alignment Report\n\n", ""))
    print(f"Draft/source similarity checksum: {similarity(source_doc.body, target_doc.body):.3f}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
