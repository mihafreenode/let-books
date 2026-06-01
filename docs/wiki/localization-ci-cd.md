---
title: "Localization CI and CD"
summary: >-
  Localization CI/CD validates multilingual content continuously so missing assets, broken links, and accessibility regressions are caught early.
topics:
  - continuous-localization
  - qa
  - ci-cd
---
# Localization CI and CD

## Summary

Localization CI/CD validates multilingual content continuously so missing assets, broken links, and accessibility regressions are caught early.

## Desired checks

- locale inventory consistency
- link validation
- article and page generation
- spellcheck where available
- placeholder parity
- accessibility smoke tests
- screenshot and diagram coverage checks

## Defect-class progression

Localization CI should track both:

- `Localization Debt`
- `Open Defect Classes`

Debt measures remaining source-content work.

Open defect classes measure whether the system can still permit a category of problem to reappear.

As soon as a defect class reaches zero occurrences, its validator should move from advisory to blocking where practical.

Examples:

- placeholder draft publishing
- untranslated summaries
- untranslated metadata
- untranslated bodies
- mixed-language publishing

CI is not only a gatekeeper. It is the mechanism that keeps closed defect classes from reopening silently.

## Generation order for article navigation

The current public article navigation contract is:

- `post-article-nav`
- `related-content`
- `related-topic-nav`

Generation and validation should happen in this order:

1. generate article HTML
2. generate index pages
3. run any remaining navigation post-processing only if still required
4. validate output

If a validator still expects the legacy `topic-nav` block, update the validator to the current contract instead of patching generated HTML.

## Related Pages

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../learning/how-to-run-localization-qa-in-ci.md`
