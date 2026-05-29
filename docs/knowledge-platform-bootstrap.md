# LetBooks Knowledge Platform Bootstrap

## Summary

This document records the first knowledge-platform analysis pass for the repository.

It does not introduce a large content migration.
It establishes a foundation for future documentation, articles, learning guides, terminology work, source mapping, and multilingual publishing.

## Current Repository Shape

The current repository already contains five meaningful knowledge layers:

- product and implementation specification in `README.md`, `AGENTS.md`, and `AGENTS-Implementation.md`
- a public static landing page in `index.html`
- a multilingual static documentation site under `docs/`
- a local-first static PWA demo under `static-demo/`
- concept visuals and OCR sidecars under `marketing-mocks/`

Supporting evidence also exists in:

- `docs/android-debugging.md`
- `docs/book-metadata.md`
- `docs/google-books-proxy.md`
- `tests/static-demo/localization-smoke.js`
- `tools/generate-static-seo.mjs`
- `tools/wsl-find-adb.sh`
- git history, especially commits related to metadata lookup, multilingual docs, scanning, and Android debugging

## Existing Content Inventory

### Reusable now

- public framing and project overview in `README.md`
- full product specification in `AGENTS.md`
- tactical delivery guidance in `AGENTS-Implementation.md`
- multilingual audience docs under `docs/<locale>/`
- mobile debugging guide in `docs/android-debugging.md`
- metadata lookup and proxy notes in `docs/book-metadata.md` and `docs/google-books-proxy.md`
- static demo contributor workflow in `static-demo/README.md`
- localized UI strings in `static-demo/locales/*.json`
- concept visuals and OCR sidecars in `marketing-mocks/`

### Duplicated or overlapping

- project overview copy is repeated in `README.md`, `index.html`, and `docs/en/index.html`
- metadata lookup guidance is split across `README.md`, `static-demo/README.md`, `docs/book-metadata.md`, and `docs/google-books-proxy.md`
- localized docs are mirrored as many separate HTML files, which is good for parity but expensive to maintain

### Gaps for a real knowledge platform

- no article system
- no learning-guide system
- no wiki/reference system
- no terminology control files
- no source-map workflow for claims
- no knowledge graph model
- no visible docs CI workflow in the current checkout
- no shared content template for cross-link sections such as Summary, Related Topics, or Further Reading

## Knowledge Themes

Primary themes currently evidenced by the repository:

- Book donation logistics
- Physical books versus bibliographic records
- Personal libraries and home collections
- Digital preservation
- Library review workflows
- ISBN and metadata lookup
- Localization and multilingual systems
- Latin and Cyrillic script support
- Mobile camera APIs
- QR and barcode scanning
- PWA and local-first web apps
- Accessibility and mobile usability
- Static documentation publishing
- Playwright-assisted verification
- Android real-device debugging
- AI coding agents and agent instructions
- Human-AI collaboration
- Public-interest technology

## Evidence Map Model

Future knowledge artifacts should trace claims through this pattern:

Claim
-> Repository evidence
-> External source
-> Notes

Recommended repository evidence types:

- product spec: `AGENTS.md`
- implementation notes: `AGENTS-Implementation.md`
- public docs: `docs/**/*.html`, `docs/*.md`
- demo code: `static-demo/app.js`, `static-demo/app.css`, `static-demo/index.html`
- translation resources: `static-demo/locales/*.json`
- tests: `tests/static-demo/localization-smoke.js`
- tooling: `tools/*.js`, `tools/*.sh`
- git history: commit subjects and changed-file ranges
- design evidence: `marketing-mocks/*`

## Proposed Knowledge Structure

Proposed long-term structure:

```text
docs/
  README.md
  knowledge-platform-bootstrap.md

  blog/
    README.md
    en/
    sl/
    hr/
    bs/
    sr-Latn/
    sr-Cyrl/
    mk/
    sq/
    de/
    it/
    fr/
    es/

  learning/
    README.md

  wiki/
    README.md

  diagrams/
    README.md

  assets/
    README.md

  sources/
    README.md

  style-guide/
    README.md
    terminology/
      README.md
    publishing/
      README.md
    localization/
      README.md
    writing/
      README.md
```

## README Requirements

Every README should be written in English and include:

- concise overview
- purpose
- structure
- related topics
- links to adjacent areas

Recommended common sections:

- Summary
- Purpose
- Structure
- Related Topics
- Related Articles
- Related Learning Guides
- Related Wiki Pages
- Further Reading

## Article and Translation Model

Canonical authoring language should be English.

Each future article should use:

- a stable article identifier such as `isbn-not-a-database`
- one English source file
- translated variants linked by the same identifier
- language-switch metadata suitable for future `hreflang` generation

Suggested article front matter fields:

```yaml
article_id: isbn-not-a-database
canonical_language: en
title: ISBN Is Not a Database
summary: Why ISBN helps identify books but does not replace metadata systems.
topics:
  - isbn-metadata
  - library-systems
evidence:
  - docs/book-metadata.md
  - static-demo/app.js
sources:
  - sources/en/isbn-agency-reference.md
status: draft
```

## Terminology Proposal

Create a terminology system under `docs/style-guide/terminology/` with:

- preferred terms
- alternative terms
- forbidden terms
- notes by language

Suggested first terminology domains:

- books and copies
- donation workflow
- storage and logistics
- metadata and cataloging
- localization and scripts
- AI and enrichment
- public-interest technology

Suggested terminology record shape:

```yaml
term_id: physical-book-copy
domain: cataloging
preferred:
  en: Physical book copy
alternatives:
  en:
    - Physical copy
forbidden:
  en:
    - Book item
notes:
  en: Use when referring to one real stored book rather than a bibliographic record.
```

## Knowledge Graph Proposal

The knowledge graph should connect:

- topics
- technologies
- repository evidence
- sources
- articles
- learning guides
- wiki pages

Suggested core entities:

- `Topic`
- `Article`
- `LearningGuide`
- `WikiPage`
- `RepositoryEvidence`
- `ExternalSource`
- `Technology`
- `Term`

Suggested uses:

- suggest future article ideas
- detect under-documented themes
- surface related reading automatically
- trace claims back to repo files and external sources

## Weekly Publishing Workflow

Suggested workflow:

1. Repository analysis
2. Topic discovery
3. Source research
4. Topic proposal
5. Approval
6. Article drafting
7. Localization
8. Diagram creation
9. Final review
10. Publishing

Approval should be required before article generation.
Publishing should not be automatic.

## Immediate Next Steps

Recommended order for the next implementation phase:

1. add `docs/README.md` as the entry point for the knowledge platform
2. add style-guide README files and terminology scaffolding
3. define article metadata and source-map templates
4. define cross-linking rules for all new long-form documents
5. decide whether future knowledge content should be Markdown-first with generated HTML output
6. migrate one small pilot topic through the full workflow before scaling

## Notes

- The current repo is already a strong case study in multilingual public documentation, local-first PWA design, and AI-assisted repository evolution.
- The main missing piece is not content volume. It is content structure, traceability, and sustainable publishing workflow.
