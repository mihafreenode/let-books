---
article_id: your-article-id
canonical_language: en
language_variants:
  - ../en/your-article-id.md
  - ../sl/your-article-id.md
  - ../hr/your-article-id.md
  - ../bs/your-article-id.md
  - ../sr-Latn/your-article-id.md
  - ../sr-Cyrl/your-article-id.md
  - ../mk/your-article-id.md
  - ../sq/your-article-id.md
  - ../de/your-article-id.md
  - ../it/your-article-id.md
  - ../fr/your-article-id.md
  - ../es/your-article-id.md
title: Your Article Title
summary: One-sentence summary of the article.
topics:
  - topic-one
  - topic-two
evidence:
  - docs/README.md
  - AGENTS.md
sources:
  - ../sources/source-map-template.md
diagrams:
  - ../diagrams/isbn-lookup-chain.svg
status: draft
---

# Your Article Title

<!--
Editorial evidence rule:
- Quote and cite specs/docs only.
- Allowed repository evidence: docs/**, AGENTS.md, AGENTS-Implementation.md, README.md, and other top-level documentation.
- Do not cite static-demo/, src/, tests/, or other app source files as editorial evidence.
- If a feature is already implemented, mention that only as implementation status.
- Avoid brittle source-code line references.
- Replace the example evidence, sources, and diagrams above with article-specific doc/spec references before publishing.

Writing structure rule:
- Prefer connected reasoning over fragmented formatting.
- Use a smaller number of substantial sections.
- Do not add a heading for every intermediate thought.
- Let paragraphs develop an argument across observation, implication, example, refinement, and conclusion when appropriate.
- Use lists for requirements, examples, alternatives, checklists, or comparisons, not as a substitute for explanatory prose.

Multilingual requirements (see docs/style-guide/localization/README.md):
- Every article must have language_variants frontmatter listing all 12 locales.
- canonical_language should remain `en` in translated variants when English is the canonical source.
- Every article must have an "Other Languages" footer section.
- Every non-English translation needs a source-map stub under docs/sources/<locale>/.
- Every flagship English article needs a LinkedIn derivative pack under docs/blog/en/linkedin/.
- Every article (all locales) needs an HTML version alongside the Markdown source.
-->

Intro paragraph.

## Major Argument Or Theme

Develop one coherent idea across multiple connected paragraphs. Explain what was observed, why it matters, how the example supports the point, and how the conclusion follows.

## Supporting Example Or Counterpoint

Use this section only when it advances the same article-level argument. Merge it with the previous section if the split does not help the reader.

## Implementation Status

Optional. Use only when implementation status materially helps the reader interpret the argument.

## Other Languages

<!--
Required footer for all translated and canonical articles.
List all other available translations with the locale's native name.
Remove the canonical language from the list.
-->

- Slovenščina (../sl/your-article-id.md)
- Hrvatski (../hr/your-article-id.md)
- Bosanski (../bs/your-article-id.md)
- Srpski (latinica) (../sr-Latn/your-article-id.md)
- Српски (ћирилица) (../sr-Cyrl/your-article-id.md)
- Македонски (../mk/your-article-id.md)
- Shqip (../sq/your-article-id.md)
- Deutsch (../de/your-article-id.md)
- Italiano (../it/your-article-id.md)
- Français (../fr/your-article-id.md)
- Español (../es/your-article-id.md)
