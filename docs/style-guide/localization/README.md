# Localization

## Summary

`docs/style-guide/localization/` defines how multilingual knowledge content should be translated and linked.

## Purpose

Keep translations traceable, script-correct, and structurally aligned with canonical English sources.

## Structure

- locale policy
- article ID policy
- cross-language linking rules
- terminology alignment rules

## Multilingual Article Requirements

Every blog article published in this repository must follow these rules:

### 1. English Canonical First

All blog articles must be written in English first. Translations are derived from the English canonical version. The English article is the authoritative source for evidence and specification references.

### 2. Required Frontmatter

Every article (canonical and translation) must include a `language_variants` field in its YAML frontmatter listing all 12 language variants with relative paths:

```yaml
language_variants:
  - ../en/<article-id>.md
  - ../sl/<article-id>.md
  - ../hr/<article-id>.md
  - ../bs/<article-id>.md
  - ../sr-Latn/<article-id>.md
  - ../sr-Cyrl/<article-id>.md
  - ../mk/<article-id>.md
  - ../sq/<article-id>.md
  - ../de/<article-id>.md
  - ../it/<article-id>.md
  - ../fr/<article-id>.md
  - ../es/<article-id>.md
```

Supported locales: `en`, `sl`, `hr`, `bs`, `sr-Latn`, `sr-Cyrl`, `mk`, `sq`, `de`, `it`, `fr`, `es`.

### 3. Other Languages Footer

Every translated article must include an "Other Languages" footer section at the end listing all other available translations with the locale's native name.

English canonical articles must also include this section for parity.

### 4. Localized Source-Map Stubs

Every flagship English blog article must have a corresponding source map under `docs/sources/en/`. Every non-English locale must have a stub source map under `docs/sources/<locale>/` that links back to the canonical English source map.

Source-map stubs are not full translations. They are short files with a pointer to the English original and language-appropriate context.

### 5. LinkedIn Derivative Packs

Every flagship English blog article must have a LinkedIn derivative pack under `docs/blog/en/linkedin/<article-id>.md` containing:

- a broad-audience post
- an institutional/library post
- a student/learner post
- a thread outline

These are social-media derivatives only. They do not require translation.

### 6. HTML Article Versions

Every blog article must have an HTML version alongside the Markdown source. The HTML version follows the same structure as the existing documentation HTML site (`docs/<locale>/index.html` pattern) and is linked from the appropriate locale's documentation index.

HTML versions are generated from the Markdown source using the standard conversion pipeline (pandoc-based) and must maintain parity with the Markdown content.

### 7. HTML Publishing Requirements

- Every locale's `docs/<locale>/index.html` must list blog articles available in that locale with direct links to the HTML article pages.
- The HTML article page uses the same header, footer, stylesheet, and language-switching pattern as the existing documentation pages.
- The `<head>` must include proper `hreflang` alternates for all 12 locales.
- The `data-page-type` attribute on `<body>` must be set to `"article"`.

## Source-Map Policy

- Source maps live in `docs/sources/<locale>/`.
- English source maps are full evidence maps tracing claims to repository documentation.
- Non-English source-map stubs are short files that reference the English original.
- Source maps are created only for flagship articles, not for every minor post.

## LinkedIn Pack Policy

- LinkedIn packs live in `docs/blog/en/linkedin/`.
- Only English flagship articles require LinkedIn packs.
- LinkedIn packs are Markdown, not HTML.
- The `docs/blog/README.md` must list the LinkedIn pack folder.

## Related Topics

- Terminology
- Publishing
- Multilingual systems
- Spec-driven content program

## Related Articles

- `../../blog/README.md`
- `../../spec-driven-content-program.md`
- `../../blog/article-template.md`

## Related Learning Guides

- `../../learning/README.md`

## Related Wiki Pages

- `../../wiki/README.md`

## Further Reading

- `../terminology/README.md`
- `../../knowledge-platform-bootstrap.md`
