---
title: "Validation Layers"
summary: >-
  Validation layers are the different ways a project checks whether implementation, documentation, and delivery artifacts still match intended rules and quality expectations.
topics:
  - validation
  - ci-cd
  - product-quality
---
# Validation Layers

## Summary

Validation layers are the different ways a project checks whether implementation, documentation, and delivery artifacts still match intended rules and quality expectations.

`Engineering Governance` is the authoritative owner of the portable layered-validation rule used by this repository.

See:

- `skills/engineering-governance.md`

This page explains how Let Books applies that rule to its current documentation, localization, validation, and delivery surfaces.

## Why layers matter in Let Books

No single validation method is enough.

- documentation alone does not enforce behavior
- tests alone may validate the wrong assumptions
- CI alone cannot define the rules it is supposed to enforce

A layered approach is stronger because each layer catches a different class of drift.

## Common validation layers

### 1. Specification and guidance

The first layer defines the rule.

Without this layer, later checks may be strict but arbitrary.

### 2. Manual review

Human review checks intent, edge cases, and product meaning that may not yet be automated.

### 3. Local validation

Scripts and structured checks catch fast, repeatable issues before changes reach CI.

### 4. Tests

Executable tests verify expected behavior, but only when they are aligned with the spec.

### 5. CI gates

CI makes checks repeatable and visible across contributors and environments.

### 6. Deployment checks

Deployment workflows confirm that the built artifacts are still publishable and structurally sound.

## How the layers should relate

The layers should reinforce each other in order:

- docs and specs define expectations
- review interprets those expectations in context
- validation scripts and tests automate stable parts of the review
- CI runs those checks consistently
- deployment ensures the output can actually ship

## Good early validation targets

Examples of strong early candidates include:

- required-file presence
- localization completeness
- syntax validity
- broken internal links
- forbidden editorial citations
- metadata generation success

These checks tend to be objective and inexpensive.

## Let Books context

The Let Books repository already documents several layers, including:

- product and implementation rules in `AGENTS.md` and `AGENTS-Implementation.md`
- development and deployment validation in `docs/Development.md` and `docs/Deployment.md`
- editorial evidence rules in `docs/blog/README.md` and `docs/sources/README.md`
- learning guidance for staged CI and validation rollout

That makes validation a documented system rather than only a future aspiration.

## Related Pages

- `documentation-traceability.md`
- `implementation-guidance.md`
- `../learning/how-to-add-validation-rules-and-ci-gates-in-stages.md`
- `../blog/en/documentation-is-part-of-the-product.md`
