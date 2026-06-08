---
skill: CI/CD Governance
version: 1.0.0
status: Experimental
license: Apache-2.0
origin: Let Books Skills Package
parent_skill: Engineering Governance
related_skills:
  - Documentation as Product
  - Localization Governance
minimum_adoption: Define validation order and rebuild-before-publish rule
maturity_level: 4
---

# CI/CD Governance

## Purpose

Use CI/CD as a governed trust boundary that rebuilds, revalidates, and verifies automation before publish or merge.

## Problem Being Solved

Automation can silently decay or publish stale artifacts even when source files look plausible. Common failures include:

- deployment of stale or hand-prepared artifacts
- CI that validates the product but not the workflow itself
- checks running in the wrong order
- publication without a fresh trusted build

## Core Skill

CI/CD governance is the capability of making automation trustworthy through:

- explicit validation order
- rebuild-before-publish rules
- generated-artifact freshness gates
- workflow self-validation
- deployment checks that confirm publishability from source

Another repository would want this because CI/CD is often the final enforcement layer for repository guarantees.

## Repository Adaptation

Let Books currently implements this skill through:

- policy and workflow guidance in `.github/workflows/README.md`
- CI and deployment workflows in `.github/workflows/ci.yml` and `.github/workflows/docs.yml`
- fresh-artifact review rules in workflow guidance and localization CI docs
- workflow self-validation with `actionlint` and `yamllint`
- deployment that rebuilds and revalidates instead of trusting earlier artifacts

## Current Repository Evidence

- `.github/workflows/README.md`
- `.github/workflows/ci.yml`
- `.github/workflows/docs.yml`
- `docs/wiki/localization-ci-cd.md`
- `docs/wiki/validation-layers.md`
- `docs/Deployment.md`
- `tools/validate_environment.py`
- `tools/validate_layout_structure.py`
- `tests/docs/layout-validation.cjs`
- `tests/docs/print-validation.cjs`

## Inputs

- repository guarantees that deserve enforcement
- build and generation steps
- validation order requirements
- publish or deployment trust boundaries

## Expected Actions

- document workflow purpose and protected guarantees
- validate automation files themselves
- regenerate derived outputs in CI and deploy workflows
- run validators and tests in deliberate order
- block publish when trusted rebuild and revalidation do not pass

## Expected Artifacts

- documented workflow catalog
- CI and deployment workflows
- workflow self-validation steps
- generation and validation pipeline
- deployment rules tied to fresh source builds

## Validation

### Manual Review

- review whether workflow order still matches repository guarantees
- review whether deployment assumptions remain justified

### Automated Validation

- workflow linting
- build and generation checks
- validator and test execution on fresh artifacts

### CI Enforcement

- workflows themselves are the main enforcement mechanism for this skill

### Existing Gaps

- workflow implementation is naturally platform-specific
- some publish-time rules depend on the surrounding skills for meaning

## Success Criteria

- merged or published artifacts come from current trusted source state
- automation layer remains syntactically and operationally healthy
- validators and tests run in an order that preserves meaning
- deployment does not bypass required validation

## Failure Modes

- stale artifact publication
- automation rot
- validators run against old output
- deployment trusts assumptions from earlier unrelated workflow runs

## Maturity Assessment

- Established

The repository documents workflow guarantees clearly, self-validates automation, rebuilds before publish, and enforces generation and validation in both CI and deployment. The skill is strong and portable, though the concrete implementation is platform-specific.

## Portability Assessment

### Would I Install This In A New Repository?

- Yes.

### ERP

- Yes.

### Web Application

- Yes.

### Documentation Repository

- Yes.

### Internal Business Application

- Yes.

### Repository-Specific Parts

- GitHub Actions files
- GitHub Pages deployment details
- exact Let Books generation pipeline

### Reusable Parts

- rebuild before deploy
- fresh-artifact gates
- workflow self-validation
- staged enforcement order
- deployment as trusted rebuild

### Adaptation Requirements

- map the pattern onto the target CI platform
- adapt validation sequence to the target build outputs
- choose which guarantees must block merge or publish

### Confidence Level

- High

## Future Installation Concept

A future repository could adopt this skill through:

- workflow governance sections in `AGENTS.md` or `CONTRIBUTING.md`
- workflow header templates
- CI templates that include self-validation and fresh-artifact rebuild rules
- starter configuration for staged validation order

## Open Questions

- which subset of this skill belongs in a base governance package versus a CI-specific package?
- how small can the install footprint be before the trust-boundary benefit disappears?
- should future packaging include platform-neutral workflow templates?

## License

This skill definition is licensed under the Apache License 2.0.

See `skills/LICENSE` for the full license text.

## Provenance

Originally extracted from repository evidence including workflow guidance, validators, tests, CI configuration, and deployment review procedures.

See repository adaptation documentation for implementation-specific details.
