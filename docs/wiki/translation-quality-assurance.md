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
- structural parity against fresh generated output
- placeholder mismatches
- broken links
- glossary drift
- accessibility text coverage
- screenshot and diagram parity

## Freshly generated output requirement

Before structural parity review, semantic review, or manual article comparison:

1. regenerate the site from the current repository state
2. run validators against the current generated output
3. inspect generated HTML artifacts
4. only then perform manual parity assessment

This rule exists because source Markdown and generated output can temporarily diverge during development, and QA findings should be based on current artifacts rather than stale generated files.

## Structural parity review

Structural parity review should look for loss of reader value even when the localized article still broadly preserves meaning.

Typical signals include:

- missing major sections
- collapsed heading hierarchy
- missing examples
- compressed practical guidance
- reduced governance discussion
- shortened review or validation guidance

Warnings from structural parity validators are review prompts, not automatic proof of a bad translation. They should be interpreted together with the generated HTML and, where needed, browser-rendered output.

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

Before signing off on an AI-assisted translation, reviewers should:

- read relevant entries from the structured findings corpus for that language or topic
- check for recurring defect patterns from human review
- confirm that the current draft does not reintroduce known issues before signoff

Every reported native-speaker defect should also be evaluated for:

- content correction
- review-guidance update
- terminology-guidance update
- prompt improvement
- validator opportunity
- regression-test opportunity

This matters because even when the overall meaning is preserved, AI-generated translations may require native-speaker review to correct subtle issues in grammar, modality, terminology, and domain-specific register. These issues are often difficult to detect through automated quality metrics alone.

Concrete reported errors are not advisory-only. Each one should end up fixed, systematized, intentionally unresolved with justification, or still explicitly tracked in the findings corpus.

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
