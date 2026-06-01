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

## Why it is useful

It shows how a project can:

- define locale scope early
- keep accessibility tied to localization
- use English-first authoring without collapsing into English-only publishing
- document governance before scale arrives

## Slovenian AI-review example

The repository now includes a concrete Slovenian review example where the AI draft preserved the broad meaning but still required native-speaker correction.

Key lessons:

- grammar errors can survive even when the sentence seems understandable
- modality is especially vulnerable to literal translation
- policy and product-spec language often needs domain-specific register rather than dictionary-level equivalence
- automated checks rarely catch subtle fluency and modality issues on their own

This kind of example is valuable because it is small enough for reviewer training, but realistic enough for governance and benchmark use.

## Mixed-language publishing example

Source article: `docs/blog/sl/the-cost-of-english-only-software.md`

Language: Slovenian

Original localized state:

- localized title: `Cena programske opreme samo v angleščini`
- English summary remained visible in source metadata
- English tags were rendered in generated HTML before taxonomy labels were added
- English body sections followed a localized draft placeholder paragraph

Improved localized state:

- localized summary
- localized tags
- localized body, headings, and lists
- no draft placeholder paragraph in the published article body

Explanation:

This is a mixed-language publishing failure. Coverage existed, but localization completeness did not. The page looked translated at first glance while still exposing English reader-facing content.

Category:

- mixed-language publishing
- localization completeness
- metadata localization

Would automated QA detect it?

Yes, if the validator checks source markdown and generated reader-facing HTML for untranslated summaries, tags, and body content.

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
