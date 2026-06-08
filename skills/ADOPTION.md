# Adoption

## Philosophy

These skills are intended to transfer engineering practices, not copy Let Books implementation details.

The goal of adoption is to carry forward:

- governance patterns
- review expectations
- artifact expectations
- validation ideas
- enforcement models

without requiring the target repository to copy the same tools, workflows, directory structure, or technology stack.

## Adoption Model

Future repositories could adopt these skills through any combination of:

- `AGENTS.md`
- `CONTRIBUTING.md`
- `README.md`
- repository templates
- validator packs
- CI integrations
- onboarding documentation
- review checklists

The correct adoption shape depends on repository size, risk, and maturity.

## Core Skill Vs Repository Adaptation

The portable unit is the skill definition.

Examples:

- `Engineering Governance` -> portable skill
- current validators under `tools/` -> repository adaptation
- current workflows under `.github/workflows/` -> repository adaptation
- current docs folder structure -> repository adaptation
- current locale set -> repository adaptation

Another repository should be able to install a skill without reproducing Let Books conventions verbatim.

## Minimum Adoption

### Engineering Governance

Smallest useful footprint:

- define a source-of-truth order
- add evidence and rationale rules to `README.md`, `CONTRIBUTING.md`, or `AGENTS.md`
- add at least one template for documenting validators, workflows, or tests

Add later:

- policy validators
- source-map or evidence-note conventions
- structured adaptation docs

### Localization Governance

Smallest useful footprint:

- define supported locales
- define parity and review expectations
- document at least one localization review workflow

Add later:

- findings corpus
- localization validators
- CI blocking for stable defect classes

### Documentation as Product

Smallest useful footprint:

- explicitly state that docs are a maintained delivery surface
- define publication and review expectations
- review rendered output, not only source files

Add later:

- generated-output validators
- browser-facing tests
- publication automation

### CI/CD Governance

Smallest useful footprint:

- define validation order
- rebuild before publish or deploy
- document workflow purpose and protected guarantees

Add later:

- workflow self-validation
- freshness gates
- platform-neutral pipeline templates

## Incremental Adoption Strategy

Recommended order for most repositories:

1. install `Engineering Governance`
2. add `CI/CD Governance` once the repo has non-trivial automation
3. add `Documentation as Product` if docs are a meaningful product surface
4. add `Localization Governance` when multilingual delivery matters

## Adoption Notes

- The skills are versioned and licensed as portable assets.
- Individual skill files contain metadata, parent-skill relationships, provenance notes, and a license reference.
- Repository-specific implementations are documented separately under `skills/adaptations/`.
- Package-wide versioning rules live in `skills/VERSIONING.md`.
- Current top-level skill metadata is summarized in `skills/SKILL_MANIFEST.md`.
