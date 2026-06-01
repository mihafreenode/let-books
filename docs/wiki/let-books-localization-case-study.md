---
title: "Let Books Localization Case Study"
summary: >-
  Let Books is a living case study in building a multilingual knowledge platform and product vision before a full backend application exists.
topics:
  - let-books
  - localization
  - public-interest-technology
---
# Let Books Localization Case Study

## Summary

Let Books is a living case study in building a multilingual knowledge platform and product vision before a full backend application exists.

The central program model now lives in `../localization-at-scale-program.md`. This page focuses on repository-specific evidence that supports that handbook.

## Why it is useful

It shows how a project can:

- define locale scope early
- keep accessibility tied to localization
- use English-first authoring without collapsing into English-only publishing
- document governance before scale arrives

## Slovenian AI-review example

The repository includes a concrete Slovenian review example where the AI draft preserved broad meaning but still required native-speaker correction for modality, fluency, and policy-register wording.

The detailed record now lives in the Native-Speaker Review Findings section of `../localization-at-scale-program.md` and in `../style-guide/localization/ai-translation-review-records.md`.

Key lessons:

- grammar errors can survive even when the sentence seems understandable
- modality is especially vulnerable to literal translation
- policy and product-spec language often needs domain-specific register rather than dictionary-level equivalence
- automated checks rarely catch subtle fluency and modality issues on their own

## Mixed-language publishing example

Source article: `docs/blog/sl/the-cost-of-english-only-software.md`

This article family provided a concrete example of a localized title and partial localized shell coexisting with English reader-facing publication surfaces.

The detailed program-level interpretation now lives in the Native-Speaker Review Findings section of `../localization-at-scale-program.md` and in `../localization-audit-report.md`.

Repository-specific lessons:

- coverage is not the same as completeness
- source metadata matters because summaries can leak into publication surfaces
- taxonomy localization matters because English topic labels are visible reader-facing defects
- generated HTML should be validated, not trusted blindly

## Benchmark fixture direction

Structured review examples should also be stored as reusable benchmark fixtures so future LLM evaluation can measure:

- grammar reliability
- modality handling
- terminology precision
- policy-register accuracy
- quality of reviewer rationale capture

## Related Pages

- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `let-books-localization-architecture.md`
- `let-books-localization-lessons-learned.md`
- `../blog/en/why-every-language-matters.md`
