#!/usr/bin/env bash
set -euo pipefail

# Generate blog HTML article page from Markdown source.
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
