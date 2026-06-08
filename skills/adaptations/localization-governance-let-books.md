# Let Books Adaptation: Localization Governance

This note records how the portable localization governance skill is implemented specifically in Let Books.

## Repository-Specific Content Model

- localized Markdown content under `docs/blog/`, `docs/wiki/`, and other docs families
- supported locales include `en`, `sl`, `hr`, `bs`, `sr-Latn`, `sr-Cyrl`, `mk`, `sq`, `de`, `it`, `fr`, and `es`

## Repository-Specific Guidance

- `docs/localization-at-scale-program.md`
- `docs/localization-maintenance-system.md`
- `docs/localization-audit-report.md`
- `docs/style-guide/localization/*`

## Repository-Specific Validators

- `tools/validate_translation_parity.py`
- `tools/validate_language_quality.py`
- `tools/validate-localized-articles.mjs`
- `tools/validate-structural-localization-parity.mjs`
- `tools/validate-localization-completeness.mjs`
- `tools/audit-localized-markdown-sources.mjs`
- `tools/summarize_native_speaker_findings.py`

## Repository-Specific Tests

- validator tests under `tools/tests/`
- runtime localization smoke check under `tests/static-demo/localization-smoke.js`

## Repository-Specific Review Process

- native-speaker findings corpus at `docs/style-guide/localization/native-speaker-findings-corpus.json`
- explicit defect classes and closure rules in `docs/localization-audit-report.md`
- fresh-artifact review rule before semantic or structural review

## Repository-Specific Risks Managed

- mixed-language publishing
- untranslated summaries or bodies
- drift between localized Markdown and generated/rendered output
