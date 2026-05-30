# Blog

## Summary

`docs/blog/` will hold public-facing articles.

English should be the canonical source language, with translated variants linked by shared article identifiers.

## Purpose

Use this area for technical articles, public-interest essays, project reflections, and future long-form writing based on repository evidence.

## Evidence Rules

- Blog articles and related source maps must treat specifications and documentation as the canonical repository evidence.
- Allowed repository evidence includes `docs/**`, `AGENTS.md`, `AGENTS-Implementation.md`, and other top-level documentation files such as `README.md`.
- Do not quote or cite `static-demo/`, `src/`, `tests/`, or other app source files as editorial evidence.
- If a feature exists in a current demo or app build, mention that only as implementation status, not as the primary source of truth.
- Avoid brittle source-code line references in blog content. If you keep file references in Markdown, they must be maintained when those docs or specs move.

## Structure

- one subdirectory per language
- one stable `article_id` across all translations
- one source map per substantial article
- `article-template.md` for new canonical article drafts

## Related Topics

- Publishing workflow
- Source maps
- Localization
- Human-AI collaboration

## Related Articles

- [ISBN Is Not a Database](en/isbn-not-a-database.md) (English)
- [ISBN ni podatkovna zbirka](sl/isbn-not-a-database.md) (Slovenian)
- [ISBN nije baza podataka](hr/isbn-not-a-database.md) (Croatian)
- [ISBN nije baza podataka](bs/isbn-not-a-database.md) (Bosnian)
- [ISBN nije baza podataka](sr-Latn/isbn-not-a-database.md) (Serbian Latin)
- [ISBN није база података](sr-Cyrl/isbn-not-a-database.md) (Serbian Cyrillic)
- [ISBN не е база на податоци](mk/isbn-not-a-database.md) (Macedonian)
- [ISBN nuk është bazë të dhënash](sq/isbn-not-a-database.md) (Albanian)
- [ISBN ist keine Datenbank](de/isbn-not-a-database.md) (German)
- [L'ISBN non è un database](it/isbn-not-a-database.md) (Italian)
- [L'ISBN n'est pas une base de données](fr/isbn-not-a-database.md) (French)
- [El ISBN no es una base de datos](es/isbn-not-a-database.md) (Spanish)

## Related Learning Guides

- `../learning/README.md`

## Related Wiki Pages

- `../wiki/README.md`

## Further Reading

- `../style-guide/publishing/README.md`
- `../style-guide/localization/README.md`
- `../sources/README.md`
- `article-template.md`
