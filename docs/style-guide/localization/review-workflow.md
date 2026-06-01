# Review Workflow

## Summary

Localization review should move from draft generation to increasingly reliable human review.

## Recommended stages

1. draft translation
2. automated validation
3. terminology review
4. accessibility review
5. native-speaker review
6. optional professional review

## AI review record requirements

When a reviewer corrects AI-generated text, the correction should be documented in a reusable record.

Required fields:

- original text
- corrected text
- error category
- root-cause hypothesis
- reviewer rationale

This keeps review work reusable for governance, training, QA calibration, and model evaluation.

## Review examples

The Slovenian example in `ai-translation-review-records.md` shows a common pattern: broad meaning preserved, but native-speaker correction still required for grammar, modality, terminology, and register.

## Related Pages

- `ai-translation-review-records.md`
