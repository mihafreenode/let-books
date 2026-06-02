#!/usr/bin/env python3
"""Generate alignment sidecar metadata for all localized Markdown article pairs."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

from localization_alignment import align_blocks, build_sidecar_entries, load_document, load_sidecar, save_sidecar


ROOT_DIR = Path(__file__).resolve().parents[1]
DOCS_DIR = ROOT_DIR / "docs"
CONFIG = json.loads((ROOT_DIR / "tools" / "docs-config.json").read_text(encoding="utf-8"))


def iter_pairs(content_type_filter: str | None = None):
    for content_type in CONFIG["contentTypes"]:
        if content_type_filter and content_type != content_type_filter:
            continue
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
                    yield content_type, locale, source_path, target_path


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate .l10n.json sidecars for all localized docs articles.")
    parser.add_argument("--content-type", choices=CONFIG["contentTypes"], help="Limit generation to one docs content type")
    parser.add_argument("--locale", help="Limit generation to one locale")
    parser.add_argument("--rebuild", action="store_true", help="Ignore existing sidecar metadata and rebuild matches from current content")
    args = parser.parse_args()

    generated = 0
    for content_type, locale, source_path, target_path in iter_pairs(args.content_type):
        if args.locale and locale != args.locale:
            continue

        source_doc = load_document(source_path)
        target_doc = load_document(target_path)
        sidecar = {} if args.rebuild else load_sidecar(target_path)
        matches = align_blocks(source_doc.blocks, target_doc.blocks, sidecar)
        payload = build_sidecar_entries(source_path, target_path, locale, source_doc.blocks, target_doc.blocks, matches)
        save_sidecar(target_path, payload)
        generated += 1

    print(json.dumps({"generatedSidecars": generated, "contentType": args.content_type, "locale": args.locale, "rebuilt": args.rebuild}, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
