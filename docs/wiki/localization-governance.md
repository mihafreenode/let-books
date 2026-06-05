---
title: "Localization Governance"
summary: >-
  Localization governance defines who can propose, review, approve, and dispute multilingual content changes.
topics:
  - governance
  - localization
  - terminology
---
# Localization Governance

## Summary

Localization governance defines who can propose, review, approve, and dispute multilingual content changes.

## Governance areas

- source ownership
- language maintainer roles
- terminology approvals
- dispute resolution
- review-state tracking
- reusable review-example tracking
- review artifact freshness
- tooling documentation obligations
- native-language review quality

## Why it matters

Without governance, multilingual content drifts in tone, terminology, and quality expectations.

Review governance should also define how AI-assisted correction examples are stored and reused across training, scorecards, and evaluation work.

## Review artifact freshness

Governance should require reviewers to distinguish between:

- source Markdown
- generated HTML
- deployed site output
- browser-rendered output

Before parity signoff, reviewers should confirm that the generated artifacts being inspected were regenerated from the current repository state.

## Tooling governance

New generators, renderers, transformers, validators, audit tools, and other content-processing tools should be treated as governance artifacts, not just implementation details.

They are not complete until:

- their purpose and limits are documented
- their non-obvious rules and heuristics are explained
- relevant workflow and validation documentation are updated
- maintainers can interpret warnings, failures, and blind spots without reconstructing intent from code alone

## Native-language review quality

Localization governance should require review not only for correctness, but also for natural native-language expression.

The standard is that a localized document should read as if it had originally been written in the target language.

That means reviewers should treat the following as quality findings:

- literal English sentence structure
- direct translation of English idioms
- translated-sounding governance or corporate language
- terminology that preserves source wording unnecessarily

Governance should also prioritize this review first for:

- newly created content
- recently expanded content
- content currently being edited

Older localized content should then be improved progressively over time rather than through a single repository-wide rewrite.

## Related Pages

- `translation-memory-and-glossaries.md`
- `localization-maturity-model.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/review-workflow.md`
