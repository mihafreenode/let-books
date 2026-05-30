---
title: "How to Keep Spec, Docs, Demo, and Code Aligned"
summary: >-
  This guide describes a practical workflow for keeping product specification, documentation, demo behavior, and implementation work aligned over time.
topics:
  - demo-alignment
  - documentation
  - spec-driven-development
---
# How to Keep Spec, Docs, Demo, and Code Aligned

## Summary

This guide describes a practical workflow for keeping product specification, documentation, demo behavior, and implementation work aligned over time.

## The core problem

Product drift rarely begins with a dramatic mistake. It usually starts with small misalignments.

Examples:

- the demo adds a new workflow but the spec is never updated
- docs describe a feature that no longer behaves that way
- code implements a convenient shortcut that violates a product rule
- validation checks enforce only syntax, not product intent

AI can accelerate all of these if the alignment workflow is weak.

## The alignment model

Use this order of authority:

1. product specification
2. implementation guidance
3. current-state documentation
4. demo or app behavior
5. tests and validation rules

The lower layers should support the higher layers. If they conflict, update the chain intentionally instead of letting the most visible artifact win by default.

## Recommended workflow

### 1. Start with the change in the spec

If a user-visible workflow or product rule changes, update the relevant specification or guidance first.

Use:

- `AGENTS.md` for product-level rules and workflows
- `AGENTS-Implementation.md` for tactical repository and delivery rules

### 2. Update current-state documentation

If the change affects what exists now, update the docs that describe the current state.

Typical examples:

- `README.md`
- `docs/Development.md`
- `docs/Deployment.md`
- new or revised learning/wiki/blog content where relevant

### 3. Update the demo or implementation

Only after the intent is clear should the demo or app be changed.

This helps prevent the common pattern where a prototype silently becomes the source of truth.

### 4. Add or update validation

Then ask what can be checked automatically.

Examples:

- localization key completeness
- required file presence
- metadata generation
- link validation
- workflow-specific tests

Not every rule can be automated immediately, but important rules should not remain dependent only on memory.

### 5. Review against the spec, not only the output

When reviewing changes, do not stop at:

- does it run
- does it look good
- do the tests pass

Also ask:

- does it match the documented workflow
- does it preserve the required product boundary
- did the docs and current-state framing stay honest

## Handling demo discoveries

Sometimes the demo teaches the team something better than the original spec.

That is useful. The correct response is:

1. document the discovery
2. decide whether the workflow change is intentional
3. update the spec and docs
4. keep the implementation aligned with the updated decision

The wrong response is to let the demo win silently because it already exists.

## Handling AI-assisted implementation

With AI, this workflow becomes even more important because assistants often optimize for local plausibility.

A good alignment loop is:

1. write or update the spec
2. generate implementation
3. compare output against the spec
4. update docs if current behavior changed
5. add validation where practical

## Let Books example

The repository already contains a useful alignment chain:

- `AGENTS.md` for product direction
- `AGENTS-Implementation.md` for tactical rules
- `README.md` for current-state framing
- `docs/` for knowledge and publishing rules
- deployment and development docs for validation guidance

That structure should be used intentionally whenever new features, docs, or public explanations are added.

## Checklist

Before merging a meaningful change, check:

1. Was the product rule or workflow documented clearly?
2. Does the current-state documentation still match reality?
3. Does the demo or implementation reflect the intended rule?
4. Is there at least one validation or review mechanism guarding the change?
5. Could a new contributor understand the decision later?

## Further Reading

- `../spec-driven-content-program.md`
- `../wiki/demo-spec-alignment.md`
- `../wiki/spec-driven-development.md`
- `../blog/en/spec-driven-development-in-let-books.md`
