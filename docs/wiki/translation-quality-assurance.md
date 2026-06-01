---
title: "Translation Quality Assurance"
summary: >-
  Translation QA combines automated validation, spellcheck, terminology review, accessibility checks, and human judgment.
topics:
  - translation-quality
  - qa
  - localization
---
# Translation Quality Assurance

## Summary

Translation QA combines automated validation, spellcheck, terminology review, accessibility checks, and human judgment.

## Common checks

- missing translations
- English leakage
- reader-facing localization completeness
- placeholder mismatches
- broken links
- glossary drift
- accessibility text coverage
- screenshot and diagram parity

## Reader-facing localization validator

One validator class should explicitly fail CI when a page appears localized but still exposes source-language reader-facing content.

Examples that should fail:

- localized title with English summary
- localized article with English tags
- localized article with English headings or lists
- localized article with English callouts or captions
- localized article with English diagram labels or alt text
- mixed-language related-content cards

This is a fail condition, not merely a warning, because readers experience such pages as visibly unfinished.

## Defect-class audit

Translation QA should maintain explicit defect classes with:

- description
- occurrence count
- root cause
- validator coverage
- recurrence risk
- closure plan

Required categories include:

- untranslated summaries
- untranslated bodies
- placeholder draft publishing
- untranslated metadata
- mixed-language publishing
- future discovered classes

A class is closed only when its count reaches zero and CI prevents it from returning without failure.

## Human review evidence

Translation QA should also preserve short human review records for representative AI-assisted corrections.

Minimum fields:

- original text
- corrected text
- error category
- root-cause hypothesis
- reviewer rationale

Native-speaker review findings should be preserved as a growing corpus, not as isolated one-off notes. Repeated findings should feed back into validator design, contributor guidance, and future AI-agent instructions.

This matters because even when the overall meaning is preserved, AI-generated translations may require native-speaker review to correct subtle issues in grammar, modality, terminology, and domain-specific register. These issues are often difficult to detect through automated quality metrics alone.

## Common AI translation error taxonomy

- grammar
- modality
- terminology
- register
- fluency
- literal translation
- ambiguity
- context loss
- word order
- collocation
- script or orthography
- domain-policy phrasing
- accessibility wording

## Lightweight benchmark scoring

For repeatable AI-translation evaluation, use a lightweight 0-3 rubric instead of relying only on pass/fail judgment.

Recommended dimensions:

- meaning accuracy
- grammar and fluency
- terminology and domain fit
- register and style
- review effort

Recommended release labels:

- blocker
- major revision
- minor revision
- ready with review signoff

This creates scorecard-friendly data without requiring a heavyweight localization-measurement framework.

## Related Pages

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../learning/how-to-run-localization-qa-in-ci.md`
