#!/usr/bin/env bash
set -euo pipefail

# Generate HTML article page from Markdown source.
# Usage: tools/md-to-html.sh <article-id> <locale>
# Reads: docs/blog/<locale>/<article-id>.md
# Writes: docs/blog/<locale>/<article-id>.html

ARTICLE_ID="${1:?Usage: $0 <article-id> <locale>}"
LOCALE="${2:?Usage: $0 <article-id> <locale>}"
MD="docs/blog/${LOCALE}/${ARTICLE_ID}.md"
OUT="docs/blog/${LOCALE}/${ARTICLE_ID}.html"

if [ ! -f "$MD" ]; then
  echo "Error: $MD not found" >&2
  exit 1
fi

# ---- Extract YAML frontmatter ----
# Read title and summary from frontmatter
TITLE=$(sed -n '/^---$/,/^---$/p' "$MD" | grep -E '^title:' | head -1 | sed 's/^title: *//')
SUMMARY=$(sed -n '/^---$/,/^---$/p' "$MD" | grep -E '^summary:' | head -1 | sed 's/^summary: *//')

# ---- Strip frontmatter and "Other Languages" section ----
# Remove YAML frontmatter (everything between --- delimiters)
# Remove "Other Languages" section (from ## Other Languages to end)
BODY=$(sed '1,/^---$/d' "$MD" | sed '/^## Other Languages/,$d')

# ---- Convert to HTML with pandoc ----
HTML_BODY=$(echo "$BODY" | pandoc -f markdown -t html --wrap=preserve 2>/dev/null)

# ---- Post-process ----
# Add class="lead" to the first <p> tag
HTML_BODY=$(echo "$HTML_BODY" | sed '0,/<p>/s/<p>/<p class="lead">/')

# Remove the <h1> line (article title is handled by the template)
HTML_BODY=$(echo "$HTML_BODY" | sed '/^<h1 id=/d')

# ---- Build hreflang links ----
HREF_LANGS=""
for lang in en sl hr bs sr-Latn sr-Cyrl mk sq de it fr es; do
  if [ "$lang" = "$LOCALE" ]; then
    HREF_LANGS+="    <link rel=\"alternate\" hreflang=\"${lang}\" href=\"https://letbooks.org/docs/blog/${lang}/${ARTICLE_ID}.html\">"$'\n'
  else
    HREF_LANGS+="    <link rel=\"alternate\" hreflang=\"${lang}\" href=\"https://letbooks.org/docs/blog/${lang}/${ARTICLE_ID}.html\">"$'\n'
  fi
done

# Determine canonical URL
CANONICAL_URL="https://letbooks.org/docs/blog/${LOCALE}/${ARTICLE_ID}.html"

# Determine x-default (use English)
X_DEFAULT="https://letbooks.org/docs/blog/en/${ARTICLE_ID}.html"

# Escape HTML body for sed
# Instead of using sed, we'll write a temp file and use it
TMP_BODY=$(mktemp)
echo "$HTML_BODY" > "$TMP_BODY"

# ---- Build the HTML page ----
# Relative path to docs/root depends on locale nesting (docs/blog/<locale>/)
ROOT="../../"
STYLESHEET="${ROOT}assets/css/style.css"
JS="${ROOT}assets/js/docs-lang.js"
INDEX_LINK="${ROOT}${LOCALE}/index.html"
ALL_LANG_LINK="${ROOT}index.html"
FAVICON_BASE="${ROOT}../"

cat > "$OUT" <<ENDOFFILE
<!DOCTYPE html>
<html lang="${LOCALE}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${TITLE} | LetBooks</title>
    <meta name="description" content="${SUMMARY}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="application-name" content="LetBooks">
    <link rel="canonical" href="${CANONICAL_URL}">
    <link rel="alternate" hreflang="x-default" href="${X_DEFAULT}">
${HREF_LANGS}    <link rel="icon" href="${FAVICON_BASE}favicon/favicon.svg" type="image/svg+xml">
    <link rel="icon" href="${FAVICON_BASE}favicon/favicon-dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)">
    <link rel="icon" href="${FAVICON_BASE}favicon/favicon.ico" sizes="any">
    <link rel="icon" href="${FAVICON_BASE}favicon/favicon-32x32.png" type="image/png" sizes="32x32">
    <link rel="icon" href="${FAVICON_BASE}favicon/favicon-16x16.png" type="image/png" sizes="16x16">
    <link rel="apple-touch-icon" href="${FAVICON_BASE}favicon/apple-touch-icon.png" sizes="180x180">
    <link rel="manifest" href="${FAVICON_BASE}favicon/site.webmanifest">
    <meta name="theme-color" content="#0f5b45">
    <meta property="og:title" content="${TITLE} | LetBooks">
    <meta property="og:description" content="${SUMMARY}">
    <meta property="og:image" content="https://letbooks.org/og-image.png">
    <meta property="og:image:alt" content="LetBooks social preview image">
    <meta property="og:url" content="${CANONICAL_URL}">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="LetBooks">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${TITLE} | LetBooks">
    <meta name="twitter:description" content="${SUMMARY}">
    <meta name="twitter:image" content="https://letbooks.org/og-image.png">
    <meta name="twitter:image:alt" content="LetBooks social preview image">
    <link rel="stylesheet" href="${STYLESHEET}">
    <script src="${JS}" defer></script>
  </head>
  <body data-page-type="article" data-locale="${LOCALE}">
    <div class="page-shell">
      <header class="site-header">
        <div class="header-inner">
          <a class="brand-link" href="${INDEX_LINK}">
            <img class="brand-mark" src="${ROOT}assets/images/logo-mark-symbol.svg" alt="Let Books">
            <span class="brand-copy">
              <strong>Let Books</strong>
              <span>Blog</span>
            </span>
          </a>
          <div class="header-nav">
            <a class="nav-link" href="${ROOT}index.html">Docs</a>
            <a class="nav-link" href="${ROOT}../index.html">Public site</a>
            <a class="nav-link" href="https://github.com/mihafreenode/let-books">GitHub</a>
            <div class="lang-switch" aria-label="Language options">
ENDOFFILE

# Generate language links in the header
for lang in en sl hr bs sr-Latn sr-Cyrl mk sq de it fr es; do
  LANG_NAME=""
  case "$lang" in
    en) LANG_NAME="EN";;
    sl) LANG_NAME="SL";;
    hr) LANG_NAME="HR";;
    bs) LANG_NAME="BS";;
    sr-Latn) LANG_NAME="SR";;
    sr-Cyrl) LANG_NAME="СР";;
    mk) LANG_NAME="МК";;
    sq) LANG_NAME="SQ";;
    de) LANG_NAME="DE";;
    it) LANG_NAME="IT";;
    fr) LANG_NAME="FR";;
    es) LANG_NAME="ES";;
  esac
  CURRENT=""
  if [ "$lang" = "$LOCALE" ]; then
    CURRENT=" is-current"
  fi
  cat >> "$OUT" <<EOF
              <a class="lang-link${CURRENT}" href="${ARTICLE_ID}.html" lang="${lang}">${LANG_NAME}</a>
EOF
done

cat >> "$OUT" <<'ENDOFFILE'
              <a class="lang-link" href="../../index.html">All languages</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <article class="section blog-article">
ENDOFFILE

# Insert the HTML body
cat "$TMP_BODY" >> "$OUT"

cat >> "$OUT" <<'ENDOFFILE'
        </article>
      </main>

      <footer class="site-footer">
        <div class="footer-inner">
          <div>
            <h3>Let Books</h3>
            <p>A practical platform for cataloging, offering, and retrieving educational books.</p>
            <p class="footer-microcopy">Early alpha prototype. Institutions and integrations mentioned in examples are conceptual only and do not imply partnership or endorsement.</p>
          </div>
          <div>
            <div class="footer-links">
              <a href="../../en/index.html">Overview</a>
              <a href="../../index.html">Project home</a>
              <a href="../../../static-demo/">Demo</a>
            </div>
            <div class="language-list" style="margin-top: 1rem;">
              <a href="../../index.html">All languages</a>
            </div>
            <div class="language-list" data-equivalent-language-list style="margin-top: 0.85rem;"></div>
          </div>
        </div>
      </footer>
    </div>
  </body>
</html>
ENDOFFILE

rm -f "$TMP_BODY"
echo "Wrote $OUT"
