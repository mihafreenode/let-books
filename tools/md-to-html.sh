#!/usr/bin/env bash
# Purpose:
# - Rebuild one localized blog article quickly through the main docs generator.
#
# Why:
# - Full-site generation is unnecessary for routine article editing.
#
# Detects / Enforces:
# - Enforces that the requested Markdown source exists before rendering.
#
# Limitations:
# - Blog-only convenience wrapper.
#
# Related:
# - tools/README.md
# - tools/generate_docs_content.py
set -euo pipefail

# Usage: tools/md-to-html.sh <article-id> <locale>
# Reads: docs/blog/<locale>/<article-id>.md
# Writes: docs/blog/<locale>/<article-id>.html

ARTICLE_ID="${1:?Usage: $0 <article-id> <locale>}"
LOCALE="${2:?Usage: $0 <article-id> <locale>}"
MD="docs/blog/${LOCALE}/${ARTICLE_ID}.md"

if [ ! -f "$MD" ]; then
  echo "Error: $MD not found" >&2
  exit 1
fi

python3 "$(dirname "$0")/generate_docs_content.py" --type blog --locale "$LOCALE" --slug "$ARTICLE_ID"
