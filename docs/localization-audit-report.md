# Localization Audit Report

## Summary

This report classifies repository-wide localization findings discovered during source-first remediation and generated-site validation work.

The goal is to fix each issue once in content and once in the system.

Current tracked metrics:

```text
Localization Debt = 138
Open Defect Classes = 4
```

`Localization Debt` measures remaining content work.

`Open Defect Classes` measures how many categories are still not fully prevented by validators, workflow, policy, and CI.

## Defect-Class Status

- `untranslated summaries`: OPEN
- `untranslated bodies`: OPEN
- `placeholder draft publishing`: OPEN
- `untranslated metadata`: OPEN
- `mixed-language publishing`: CLOSED at generated HTML output level because CI already blocks it via `tools/validate-localization-completeness.mjs`

Closure rule:

1. count reaches zero
2. detection becomes blocking in CI
3. regression coverage remains in place
4. contributor guidance is updated
5. AI-agent guidance is updated
6. class is marked closed

## Missing Coverage

- Pages affected: no currently missing published blog variants were identified in the audited set.
- Root cause: none currently observed for the audited article groups.
- Validator coverage: language-variant inventory and existing completeness checks cover generated publication paths.
- Remediation status: clean for the audited set.
- CI currently prevents recurrence: partially. Generated-page validation helps, but source-level coverage auditing remains advisory.

## Localization Completeness

- Pages affected:
  - 60 localized blog markdown files still contain English article body text according to `tools/audit-localized-markdown-sources.mjs`
  - the main affected article families are `future-of-continuous-localization`, `multilingual-accessibility`, `preserving-smaller-languages-in-the-digital-age`, `the-cost-of-english-only-software`, `translation-and-learning`, and `united-in-diversity-and-open-source`
- Root cause: localized markdown files were published with localized titles but English summaries, English helper sections, localized draft-placeholder paragraphs, and in some locales English body copy.
- Validator coverage: generated HTML is blocked by `tools/validate-localization-completeness.mjs`; source markdown is now audited by `tools/audit-localized-markdown-sources.mjs` as an advisory CI step.
- Remediation status:
  - Slovenian pages above fixed at source.
  - same issue class remains open in other locales and should be treated as repository-wide localization debt.
- CI currently prevents recurrence: only for generated reader-facing HTML. Source-markdown recurrence is visible in CI warnings but not yet blocking.

## Semantic Parity

- Pages affected: the same 60 localized blog markdown files with English body content.
- Root cause: some localized markdown variants preserved only the title and shell while leaving the substantive body in English, which breaks parity even when the generated site hides some fields.
- Validator coverage: current completeness validator focuses on reader-facing output; semantic parity remains partially automated and still needs source-level checks plus review.
- Remediation status: partially fixed in Slovenian; open in multiple locales.
- CI currently prevents recurrence: no, not completely.

## Native-Language Quality

- Pages affected:
  - `docs/blog/sl/the-cost-of-english-only-software.md` mixed-language case
  - `docs/wiki/let-books-localization-case-study.md` documents Slovenian review evidence
- Root cause: technically correct or partially localized content still requires native-speaker rewriting for fluency, rhetorical naturalness, and publication quality.
- Validator coverage: native-language quality is documented and partially supported by examples, but still relies on human review.
- Remediation status: corpus entry added for mixed-language publishing; broader corpus should keep growing.
- CI currently prevents recurrence: no. Human review remains necessary.

## Mixed-Language Publishing

- Pages affected:
  - `docs/blog/sl/the-cost-of-english-only-software.md` before remediation
  - 42 localized markdown files still contain localized draft-placeholder paragraphs that explicitly acknowledge incomplete publication content
- Root cause: localized title and page shell were treated as sufficient while summaries, tags, or body text remained in English.
- Validator coverage: `tools/validate-localization-completeness.mjs` now blocks generated mixed-language reader-facing output.
- Remediation status: Slovenian case fixed and documented as corpus evidence; broader source-markdown backlog remains.
- CI currently prevents recurrence: yes for generated HTML; source markdown is only warning-audited at present.

## Metadata Localization

- Pages affected:
  - 70 localized blog markdown files still contain English frontmatter summaries
  - the heaviest concentration is in `economics-of-localization`, `future-of-continuous-localization`, `multilingual-accessibility`, `preserving-smaller-languages-in-the-digital-age`, `the-cost-of-english-only-software`, `translation-and-learning`, and `united-in-diversity-and-open-source`
- Root cause: English summaries were copied into localized frontmatter and then suppressed during generation instead of being translated at source.
- Validator coverage: generated completeness validator catches rendered summary leakage; `tools/audit-localized-markdown-sources.mjs` now flags English frontmatter summaries directly in source.
- Remediation status: Slovenian `the-cost-of-english-only-software` and the remaining Slovenian draft articles fixed; other locales still open.
- CI currently prevents recurrence: partially. Source-level detection is warning-only.

## Taxonomy/Tag Localization

- Pages affected:
  - `docs/blog/sl/the-cost-of-english-only-software.md` before remediation in generated output
  - any localized page using topics without locale labels in `tools/generate_docs_content.py`
- Root cause: topic label mappings were incomplete, causing tags to disappear or render in English.
- Validator coverage: generated completeness validator catches reader-facing English tags; generator now requires locale-aware labels for rendered tags.
- Remediation status: Slovenian labels added for `digital-inclusion`, `education`, and `public-sector-software`; broader taxonomy coverage should continue to expand.
- CI currently prevents recurrence: partially.

## Diagram Localization

- Pages affected: no new untranslated diagram-label failures were found in the current pass.
- Root cause: none newly observed in this audit.
- Validator coverage: the generated completeness validator already compares SVG text labels where localized variants exist.
- Remediation status: no active issue identified in this pass.
- CI currently prevents recurrence: partially.

## Navigation Localization

- Pages affected: previously 109 localized blog markdown files contained `## Related Pages` or `## Other Languages` helper headings in English.
- Root cause: source markdown retained English generator helper sections even when localized content existed.
- Validator coverage: generator support now recognizes localized related-pages headings, and `tools/audit-localized-markdown-sources.mjs` reports any future English helper-heading regressions.
- Remediation status: fixed repository-wide for localized blog markdown helper headings.
- CI currently prevents recurrence: yes, as an advisory source-audit warning and through generator support for localized helper headings.

## Next Actions

1. Add a source-markdown localization audit script that reports placeholder paragraphs, English summaries, and English helper headings in localized files.
2. Translate remaining localized source summaries and bodies for the affected blog article families across all languages.
3. Decide whether English helper headings should be fully localized in source or replaced by locale-agnostic non-reader-facing generator markers.
4. Promote selected source-audit checks from warnings to blocking CI gates once the current backlog is cleared.
5. Continue expanding the Native-Speaker Review Corpus with real findings, especially mixed-language publishing and rhetorical-naturalness cases.
