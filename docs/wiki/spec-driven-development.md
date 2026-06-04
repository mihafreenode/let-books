---
title: "Spec-Driven Development"
summary: >-
  Spec-driven development is an approach in which explicit product and workflow definitions guide implementation, documentation, review, and verification.
topics:
  - spec-driven-development
  - documentation
  - product-quality
---
# Spec-Driven Development

## Summary

Spec-driven development is an approach in which explicit product and workflow definitions guide implementation, documentation, review, and verification.

## Definition

In this approach, a specification is not only an initial planning artifact. It acts as an ongoing reference for:

- product purpose
- scope boundaries
- required behavior
- acceptance criteria
- review standards

## Why it matters in AI-assisted work

AI increases delivery speed, but it can also increase product drift when intent is vague.

Spec-driven development helps by giving teams a stable source of truth that can be reviewed, updated, and used to evaluate generated output.

## Typical layers

Common layers in a spec-driven system include:

- product specification
- implementation guidance
- current-state documentation
- demo or application behavior
- validation rules and tests
- CI/CD enforcement

## Common failure mode

A common failure mode is letting the most visible artifact become the default source of truth.

Examples:

- the latest prompt
- the current prototype
- the current implementation shortcut
- a stale documentation page

Spec-driven development reduces that risk by making the intended authority chain explicit.

## Let Books context

In Let Books, spec-driven development is supported by:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- `docs/Development.md`
- `docs/Deployment.md`

## Related Pages

- `ai-assisted-knowledge-work.md`
- `demo-spec-alignment.md`
- `../learning/how-to-write-a-spec-that-ai-can-follow.md`
- `../blog/en/spec-driven-development-for-ai-projects.md`
