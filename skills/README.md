# Skills

## License

The portable skill definitions in this directory are licensed under the Apache License 2.0.

They are intended to be reusable engineering assets that may be copied, adapted, redistributed, and reused in other repositories, including commercial and closed-source projects.

See `skills/LICENSE` for the full license text.

Important distinction:

- skill definitions are the portable licensed assets
- repository adaptations document current Let Books implementations
- implementation artifacts elsewhere in the repository may have different licensing or reuse constraints

## What Is A Skill?

A skill is a reusable engineering capability.

In this repository, a skill may combine:

- principles
- guidance
- expected artifacts
- review practices
- validators
- tests
- automation

A skill is not a single script, validator, workflow, prompt, or README. Those are implementations or components.

## Why Skills Were Extracted

This repository contains accumulated engineering knowledge spread across governance docs, style guides, validators, tests, workflows, and audit artifacts. The goal of this directory is to separate:

- portable engineering capabilities that another repository could intentionally adopt
- Let Books specific implementations that merely demonstrate those capabilities

The extraction is intentionally conservative. Reducing the skill count is preferred over promoting repository organization into fake skills.

## Relationship Between Principles, Guidance, Validators, Workflows, And Skills

- Principles explain why a practice matters.
- Guidance explains how contributors should apply it.
- Artifacts preserve the practice in durable form.
- Validators and tests automate stable parts of the practice.
- Workflows orchestrate when those checks run.
- Skills are the reusable capability formed by those layers together.

Recurring repository pattern:

```text
Principles
-> Guidance
-> Artifacts
-> Validation
-> Enforcement
-> Feedback and learning
```

## Discovered Skills

### `engineering-governance.md`

Purpose:
- Reusable governance template for authority chains, evidence-backed claims, rationale preservation, validator discipline, and traceable review.

Maturity:
- Established

Portability:
- High

### `localization-governance.md`

Purpose:
- Govern multilingual content through parity rules, review workflow, defect classes, findings preservation, and layered validation.

Maturity:
- Mature

Portability:
- High in multilingual repositories

### `documentation-as-product.md`

Purpose:
- Treat documentation and public knowledge surfaces as product artifacts with publication, rendering, navigation, and quality expectations.

Maturity:
- Mature

Portability:
- Medium-high

### `ci-cd-governance.md`

Purpose:
- Govern CI/CD as a trust boundary that rebuilds, revalidates, and checks automation before publish.

Maturity:
- Established

Portability:
- High

## Core Skills Vs Repository Adaptations

Each skill document separates:

- Core Skill: the reusable engineering capability
- Repository Adaptation: the current Let Books implementation

Examples of repository adaptations rather than skills:

- `tools/validate_translation_parity.py`
- `.github/workflows/docs.yml`
- the current locale set
- the current docs folder layout
- the current static demo scenario structure

These are evidence of the skills, not the skills themselves.

## Skill Dependency Map

The evidence supports a layered model rather than a flat peer model.

```text
Engineering Governance
├── Localization Governance
├── Documentation as Product
└── CI/CD Governance
```

Interpretation:

- `engineering-governance.md` is the governance template and meta-skill.
- `localization-governance.md` applies that pattern to multilingual content.
- `documentation-as-product.md` applies that pattern to documentation surfaces.
- `ci-cd-governance.md` applies that pattern to automation and publish-time enforcement.

Repository evidence supporting this model includes:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `PRINCIPLES.md`
- `docs/wiki/spec-driven-development.md`
- `docs/wiki/documentation-traceability.md`
- `docs/wiki/validation-layers.md`
- `docs/style-guide/localization/*`
- `.github/workflows/README.md`
- `tools/README.md`
- `tests/README.md`

## Related Directories

- `adaptations/` documents Let Books specific implementations of each skill.
- `research/` preserves observations, rejected skill candidates, merge decisions, surprises, and future portability questions.

## Asset Metadata

Each top-level skill file includes a metadata block so the skill remains identifiable when copied elsewhere.

Shared package metadata is documented in:

- `skills/VERSIONING.md`
- `skills/SKILL_MANIFEST.md`
- `skills/PORTABLE_ASSET_POLICY.md`
- `skills/ADOPTION.md`
- `skills/PACKAGING.md`

## Supporting Material

The repository also contains supporting-material artifacts that preserve the extraction conversation and how it was rendered for later review or article development:

- `docs/supporting-material/portable-skills-conversation-log.html`
- `docs/supporting-material/portable-skills-transcript-part-2-reconstructed.html`
- `docs/supporting-material/portable-skills-transcript-part-3.html`
- `docs/supporting-material/portable-skills-transcript-part-4.html`
- `docs/supporting-material/conversation-log-rendering-rules.html`

These are evidence and research artifacts. They are not portable skills by themselves.
