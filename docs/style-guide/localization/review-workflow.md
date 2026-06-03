# Review Workflow

## Summary

Localization review should move from draft generation to increasingly reliable human review.

## Recommended stages

1. draft translation
2. review relevant native-speaker findings and terminology guidance
3. automated validation
4. terminology review
5. accessibility review
6. native-speaker review
7. optional professional review

## Continuous-improvement rule

Every localization defect should improve the system.

When a native speaker reports a defect, do not stop at fixing the current sentence. Also decide whether the finding should become:

- review guidance
- terminology guidance
- prompt guidance
- validator logic
- regression coverage
- a reusable corpus record

## AI review record requirements

When a reviewer corrects AI-generated text, the correction should be documented in a reusable record.

Required fields:

- original text
- corrected text
- error category
- root-cause hypothesis
- reviewer rationale

Recommended additional fields:

- finding id
- language
- source text
- preferred localized text
- validator possible
- related files
- date added

Store structured records in `native-speaker-findings-corpus.json` when the issue teaches a reusable lesson or should block recurrence.

This keeps review work reusable for governance, training, QA calibration, and model evaluation.

## Review examples

The Slovenian example in `ai-translation-review-records.md` shows a common pattern: broad meaning preserved, but native-speaker correction still required for grammar, modality, terminology, and register.

## Related Pages

- `ai-translation-review-records.md`
