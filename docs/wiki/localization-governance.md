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

## Related Pages

- `translation-memory-and-glossaries.md`
- `localization-maturity-model.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/review-workflow.md`
