# Localization Audit Report

## Summary

This report classifies repository-wide localization findings discovered during source-first remediation and generated-site validation work.

The goal is to fix each issue once in content and once in the system.

Current tracked metrics:

```text
Localization Debt = 0
Open Defect Classes = 0
```

`Localization Debt` measures remaining content work.

`Open Defect Classes` measures how many categories are still not fully prevented by validators, workflow, policy, and CI.

## Defect-Class Status

- `untranslated summaries`: CLOSED
- `untranslated bodies`: CLOSED
- `placeholder draft publishing`: CLOSED
- `untranslated metadata`: CLOSED
- `mixed-language publishing`: CLOSED
- `missing topic navigation`: CLOSED

Closure rule:

1. count reaches zero
2. detection becomes blocking in CI
3. regression coverage remains in place
4. contributor guidance is updated
5. AI-agent guidance is updated
6. class is marked closed

## Missing Coverage

- Pages affected: none in the audited set.
- Root cause: none currently observed.
- Validator coverage: language-variant inventory and generated-page validation cover publication paths.
- Remediation status: closed for the audited blog families.
- CI currently prevents recurrence: yes for generated publication paths.

## Localization Completeness

- Pages affected: none.
- Root cause: previously caused by localized source files that preserved translated shells while leaving summaries, placeholder paragraphs, or body content in English.
- Validator coverage: generated HTML is blocked by `tools/validate-localization-completeness.mjs`; source markdown is now blocked by `tools/audit-localized-markdown-sources.mjs` for the closed classes it tracks.
- Remediation status: closed in the current repository state.
- CI currently prevents recurrence: yes.

## Semantic Parity

- Pages affected: no current failures in the audited families.
- Root cause: historical drift came from partial localized stubs with untranslated body content.
- Validator coverage: current completeness validator covers reader-facing leakage; semantic parity beyond visible source-language text still relies partly on human review.
- Remediation status: no active issue identified in this pass.
- CI currently prevents recurrence: partially.

## Native-Language Quality

- Pages affected:
  - `docs/blog/sl/the-cost-of-english-only-software.md` mixed-language case
  - `docs/wiki/let-books-localization-case-study.md` documents Slovenian review evidence
- Root cause: technically correct or partially localized content still requires native-speaker rewriting for fluency, rhetorical naturalness, and publication quality.
- Validator coverage: native-language quality is documented and partially supported by examples, but still relies on human review.
- Remediation status: corpus entry added for mixed-language publishing; broader corpus should keep growing.
- CI currently prevents recurrence: no. Human review remains necessary.

## Mixed-Language Publishing

- Pages affected: none.
- Root cause: historical cases combined localized titles or shells with English summaries, tags, or body copy.
- Validator coverage: `tools/validate-localization-completeness.mjs` blocks generated mixed-language reader-facing output.
- Remediation status: closed.
- CI currently prevents recurrence: yes.

## Metadata Localization

- Pages affected: none.
- Root cause: historical cases copied English summaries into localized frontmatter and relied on rendering suppression instead of source translation.
- Validator coverage: generated completeness validator catches rendered leakage; `tools/audit-localized-markdown-sources.mjs` now blocks untranslated summary metadata in source.
- Remediation status: closed.
- CI currently prevents recurrence: yes.

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

- Pages affected: none.
- Root cause: historical source markdown retained English helper headings for generator control sections.
- Validator coverage: generator support recognizes localized related-pages headings, and the source audit blocks future regressions.
- Remediation status: closed.
- CI currently prevents recurrence: yes.

## Missing Topic Navigation

- Category:
  - publication completeness
  - generated navigation integrity
- Pages affected: previously the CI workflow reported 48 missing `topic-nav` cases across four blog article families and all locales.
- Root cause: the inline CI check still required the legacy `class="topic-nav"` marker even though public blog pages now render the newer `post-article-nav` + `related-content` + `related-topic-nav` contract from `tools/generate_docs_content.py`. The legacy `tools/generate-topic-nav.mjs` path is intentionally disabled.
- Preferred fix: validator and workflow alignment, not generated HTML patching.
- Validator coverage: `.github/workflows/ci.yml` now checks for the current related navigation contract instead of the disabled legacy marker.
- Remediation status: fixed at the CI regression-check level.
- Closure rule: keep the CI check blocking so related topic navigation cannot silently disappear again from public blog pages.

## Next Actions

1. Keep the blocking source-audit and generated-page validators in CI.
2. Extend the Native-Speaker Review Corpus with additional real examples as new quality findings appear.
3. Continue treating new localization failures as defect classes first, not only as file-level issues.
