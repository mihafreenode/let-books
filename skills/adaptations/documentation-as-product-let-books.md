# Let Books Adaptation: Documentation as Product

This note records how the portable documentation-as-product skill is implemented specifically in Let Books.

## Repository-Specific Surfaces

- multilingual documentation site under `docs/`
- public blog under `docs/blog/`
- source maps under `docs/sources/`
- static demo documentation and generated site outputs

## Repository-Specific Generators

- `tools/generate_docs_content.py`
- `tools/generate-static-seo.mjs`
- `tools/generate-index-pages.mjs`
- `tools/generate-search-index.mjs`
- `tools/generate-sitemap.mjs`
- `tools/generate-articles-json.mjs`
- `tools/generate-topic-nav.mjs`

## Repository-Specific Validators And Tests

- `tools/validate-blog.mjs`
- `tools/validate-generated-site-structure.mjs`
- browser-facing docs tests in `tests/docs/`

## Repository-Specific Publishing Rules

- canonical evidence rules for public articles and source maps
- localized topic navigation and language selector behavior
- print and layout validation for generated docs pages

## Repository-Specific Risks Managed

- generated docs that are structurally plausible but poor in the browser
- navigation or language-selector drift after generator changes
- public articles that are publishable in source but not in rendered output
