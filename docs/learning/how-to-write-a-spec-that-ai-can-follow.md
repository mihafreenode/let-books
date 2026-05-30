---
title: "How to Write a Spec That AI Can Follow"
summary: >-
  This guide explains how to write a product or feature specification that helps AI-assisted implementation stay aligned with real product goals instead of drifting toward generic output.
topics:
  - spec-writing
  - ai-assisted-delivery
  - documentation
---
# How to Write a Spec That AI Can Follow

## Summary

This guide explains how to write a product or feature specification that helps AI-assisted implementation stay aligned with real product goals instead of drifting toward generic output.

## Why this matters

AI can generate code quickly, but it works best when the task has clear boundaries.

If a specification is vague, AI will often fill the gaps with plausible defaults:

- common architecture patterns
- generic UI flows
- unnecessary abstractions
- made-up assumptions about what the product should do

That output may look polished and still be wrong.

## What a useful AI-facing spec should include

### 1. Product purpose

State why the feature exists.

Bad:

> Add a book form.

Better:

> Add a fast intake form that lets a donor catalog one physical book copy in seconds while standing near a shelf or box.

Purpose tells the implementer what to optimize for.

### 2. Scope boundaries

State what is in scope and out of scope.

Example:

- in scope: cover photo, ISBN entry, storage location, save and continue
- out of scope: OCR, cloud sync, institution review workflow

This prevents the assistant from inflating a small task into a mini-platform.

### 3. Required behavior

List non-negotiable rules.

Examples from the Let Books approach:

- manual workflow must work without AI
- incomplete data must be allowed
- physical copies must stay separate from bibliographic records
- user-facing behavior must remain localizable

These rules matter more than implementation style.

### 4. Failure and fallback behavior

AI-generated solutions often optimize for the happy path. A good spec explains what happens when optional systems fail.

Example:

- if metadata lookup fails, manual entry remains available
- if OCR is disabled, intake still works
- if export validation fails, the user gets a clear report instead of silent partial import

### 5. Acceptance criteria

Write the success condition in observable terms.

Example:

1. user selects a box
2. user enters or scans ISBN
3. user can save even if no metadata provider responds
4. book appears in the selected location

Acceptance criteria give reviewers and AI systems a stable target.

## What to avoid

- vague goals such as "improve UX"
- implementation detail without product purpose
- mixed future ideas presented as current requirements
- hidden assumptions about user roles or data quality
- naming-only specs that do not describe workflow

## A practical writing pattern

Use this compact structure when drafting a feature spec.

1. problem
2. user and context
3. in-scope workflow
4. out-of-scope items
5. required rules
6. fallback behavior
7. acceptance criteria
8. verification notes

## How this maps to Let Books

The repository already demonstrates this pattern at multiple levels:

- `AGENTS.md` defines product purpose, workflows, and acceptance criteria
- `AGENTS-Implementation.md` defines tactical delivery constraints
- `README.md` separates current state from future direction

That layered approach is useful because AI does better when the product memory is explicit and reviewable.

## Exercise

Take one Let Books feature such as box QR scanning or Excel decision import and write a one-page spec using the structure above.

Then ask a coding assistant to implement it.

Afterward, review the output against the spec before reviewing the code style. That order matters.

## Further Reading

- `../spec-driven-content-program.md`
- `../wiki/spec-driven-development.md`
- `../wiki/demo-spec-alignment.md`
- `../blog/en/spec-driven-development-for-ai-projects.md`
