---
title: "Demo and Spec Alignment"
summary: >-
  Demo and spec alignment is the practice of keeping prototype or demo behavior consistent with documented product intent, while updating the specification explicitly when a demo reveals a better workflow.
topics:
  - demo-alignment
  - spec-driven-development
  - product-review
---
# Demo and Spec Alignment

## Summary

Demo and spec alignment is the practice of keeping prototype or demo behavior consistent with documented product intent, while updating the specification explicitly when a demo reveals a better workflow.

## Why this matters

Demos are useful because they make workflows concrete. They are risky because people often start treating visible behavior as approved product truth even when the underlying documentation was never updated.

## Recommended authority order

1. product specification
2. implementation guidance
3. current-state documentation
4. demo or implementation behavior
5. validation and tests

This order does not mean demos are unimportant. It means demos should be interpreted within a documented decision system.

## Healthy demo usage

Use demos to:

- expose workflow problems
- reveal usability issues
- test assumptions with users
- support explanation for stakeholders

Do not use demos as silent replacements for product decisions.

## When the demo should lead

If the demo reveals a clearly better workflow, the team should:

1. review the change intentionally
2. update the relevant specification and docs
3. adjust validation or review expectations

In other words, the demo may inspire the next decision, but the updated decision should still be documented.

## Let Books context

The Let Books repository already distinguishes between canonical documentation evidence and implementation status for public writing. That is a useful guardrail because it prevents prototypes from becoming accidental editorial authority.

## Related Pages

- `spec-driven-development.md`
- `../learning/how-to-keep-spec-docs-demo-and-code-aligned.md`
- `../blog/en/spec-driven-development-in-let-books.md`
