---
title: "How to Review AI-Assisted Work Against the Spec"
summary: >-
  This guide explains how to review AI-assisted implementation by checking it against the product specification, workflow rules, documentation, and validation expectations rather than judging only whether the output looks polished or technically plausible.
topics:
  - product-review
  - ai-assisted-delivery
  - spec-driven-development
---
# How to Review AI-Assisted Work Against the Spec

## Summary

This guide explains how to review AI-assisted implementation by checking it against the product specification, workflow rules, documentation, and validation expectations rather than judging only whether the output looks polished or technically plausible.

## Why this matters

AI can produce code, copy, tests, and interface changes that look complete very quickly.

That speed creates a review risk: reviewers may unconsciously switch from asking, "Is this the right product behavior?" to asking, "Does this seem reasonable?"

Those are not the same question.

In spec-driven work, review should begin with alignment and only then move to code quality, style, and implementation details.

## Start with the source of truth

Before reviewing the output, identify the documents that define the intended behavior.

In the Let Books repository, that usually means:

- `AGENTS.md` for product rules, workflows, and scope
- `AGENTS-Implementation.md` for tactical delivery constraints
- `README.md` for current-state framing
- relevant docs under `docs/` for publishing, verification, or workflow guidance

Without this step, review easily becomes subjective and local.

## Review in the right order

Use this order when reviewing AI-assisted work.

### 1. Product alignment

Ask whether the output matches the intended user workflow and product boundary.

Examples:

- does manual entry still work where the spec requires it
- does the change preserve separation between physical copies and bibliographic records
- does it add behavior that was never approved
- does it incorrectly present optional AI features as mandatory

If the product alignment is wrong, there is no value in spending much time on polish first.

### 2. Documentation alignment

Ask whether the surrounding docs still describe reality honestly.

Examples:

- was a user-visible workflow changed without updating the docs
- does the README still describe the current state correctly
- do new public claims match the actual documented product position

AI-generated changes often modify behavior without remembering to update the narrative around that behavior.

### 3. Validation and fallback behavior

Ask whether the change preserves the failure and fallback expectations in the spec.

Examples:

- can the workflow still succeed when an optional provider fails
- are invalid inputs handled explicitly
- are low-confidence or uncertain outputs treated as suggestions instead of facts

This is where many plausible implementations fail the real product test.

### 4. Technical quality

Only after the above checks should you spend most of your time on:

- clarity
- maintainability
- naming
- duplication
- tests
- structure

Technical quality still matters. It just should not outrank product correctness.

## Common review traps

AI-assisted work tends to create several repeatable review traps.

### The polished-output trap

The output looks clean, so reviewers assume it is correct.

### The nearby-context trap

The change matches the nearest existing implementation, but the nearest implementation may already have drifted.

### The implicit-scope trap

The assistant adds features, abstractions, or assumptions that were never requested, and the reviewer accepts them because they are not obviously broken.

### The test-pass trap

Tests may pass because they validate the generated behavior, not because they validate the intended product behavior.

## A practical review checklist

For each substantial AI-assisted change, ask:

1. What product rule or workflow is this change supposed to implement?
2. Which spec or docs define that rule?
3. Does the output preserve the required constraints?
4. Does it keep fallback behavior intact?
5. Do the docs still match the resulting behavior?
6. What validation or tests support the change?
7. Did the assistant add anything that should be removed as out of scope?

## How to review generated tests

Generated tests are useful, but they should also be reviewed against the specification.

Ask:

- do the tests check the intended workflow
- do they cover fallback behavior
- do they reflect the documented boundary conditions
- are they asserting a convenience behavior that was never specified

This is especially important in spec-driven work because a weak test suite can lock in drift.

## Let Books examples

Examples of spec-level questions in this repository include:

- does the workflow still remain useful without paid AI services
- does current-state documentation clearly separate demo status from future backend plans
- do public docs avoid treating source code as canonical editorial evidence
- do validation steps remain part of the delivery flow rather than optional memory

Those questions are specific enough to guide review, which is exactly what a spec should enable.

## The durable lesson

AI-assisted review is not about checking whether the assistant produced something impressive. It is about checking whether the output still belongs to the intended product.

The best review question is usually not, "Does this work?" It is, "Does this match the spec, including the parts that are easy to forget?"

## Further Reading

- `../spec-driven-content-program.md`
- `how-to-write-a-spec-that-ai-can-follow.md`
- `how-to-turn-a-product-spec-into-an-implementation-plan.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `../wiki/spec-driven-development.md`
- `../blog/en/spec-driven-development-for-ai-projects.md`
