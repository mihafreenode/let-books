---
skill: Engineering Governance
version: 1.0.0
status: Experimental
license: Apache-2.0
origin: Let Books Skills Package
parent_skill: null
related_skills:
  - Localization Governance
  - Documentation as Product
  - CI/CD Governance
minimum_adoption: Define authority order and rationale-preservation rules
maturity_level: 2
---

# Engineering Governance

## Purpose

Create a reusable governance pattern for engineering work so that important decisions, claims, workflows, and quality expectations remain traceable, reviewable, and enforceable.

## Problem Being Solved

Repositories accumulate rules, assumptions, and decisions faster than they accumulate durable explanation. Without governance, teams drift toward:

- accidental sources of truth
- folklore instead of explicit rules
- untraceable public claims
- weak AI-assisted execution context
- validators and tests that exist without clear purpose

## Core Skill

Engineering governance is the capability of structuring a repository so that:

- authority chains are explicit
- stable evidence is preferred over nearby accidents
- rationale is preserved with artifacts
- expectations are documented before they are enforced
- validators, tests, and workflows are understandable as policy mechanisms

Another repository would want this because it lowers the cost of correct decisions, makes AI-assisted work safer, and keeps engineering intent recoverable over time.

## Repository Adaptation

Let Books currently implements this skill through:

- top-level governance documents in `AGENTS.md`, `AGENTS-Implementation.md`, and `PRINCIPLES.md`
- traceability guidance in `docs/wiki/spec-driven-development.md`, `docs/wiki/documentation-traceability.md`, and `docs/wiki/demo-spec-alignment.md`
- evidence policy for public writing in `docs/blog/README.md` and `docs/sources/README.md`
- documented knowledge-preservation layers in `tools/README.md`, `tests/README.md`, `.github/workflows/README.md`, and `scripts/README.md`
- validator and workflow rules that enforce parts of the evidence policy such as `tools/validate-blog.mjs`

## Current Repository Evidence

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `PRINCIPLES.md`
- `docs/wiki/spec-driven-development.md`
- `docs/wiki/documentation-traceability.md`
- `docs/wiki/demo-spec-alignment.md`
- `docs/wiki/ai-assisted-knowledge-work.md`
- `docs/blog/README.md`
- `docs/sources/README.md`
- `docs/supporting-material/portable-skills-conversation-log.html`
- `docs/supporting-material/conversation-log-rendering-rules.html`
- `tools/README.md`
- `tests/README.md`
- `.github/workflows/README.md`
- `scripts/README.md`
- `tools/validate-blog.mjs`
- `tests/static-demo/scenarios/README.md`

## Inputs

- product or project intent
- authority order between specs, docs, implementation, tests, and demos
- contributor and maintainer expectations
- review boundaries for human and AI-assisted work

## Expected Actions

- define source-of-truth order
- document evidence rules
- preserve rationale near tools, tests, workflows, and docs
- keep current state separate from future plans
- make validators and tests explain what guarantee they protect
- use automation to reinforce stable parts of the governance model

## Expected Artifacts

- governance docs
- traceability guides
- source maps or evidence notes for substantial public claims
- documented validator and workflow catalogs
- tests and scenarios tied to repository guarantees
- supporting-material artifacts that preserve extraction reasoning for later reuse

## Validation

### Manual Review

- review whether claims cite the right authority layer
- review whether repository docs still describe actual behavior
- review whether significant workflows preserve rationale and purpose

### Automated Validation

- policy validators such as forbidden editorial citation checks
- tests that protect critical contract shapes

### CI Enforcement

- workflow gates can enforce selected governance rules once they are objective enough to automate

### Existing Gaps

- much of the governance template is still enforced indirectly through specialized skills rather than by a dedicated governance validator set
- some traceability rules remain documentation-first rather than directly machine-checked

## Success Criteria

- contributors can identify the correct source of truth quickly
- public claims remain evidence-backed
- validators and workflows are understandable as policy mechanisms
- important reasoning is not recoverable only from git history or tribal memory

## Failure Modes

- the most visible artifact becomes the default authority
- governance docs drift away from actual workflow
- validators exist without preserved rationale
- AI agents act on concrete but non-canonical instructions

## Maturity Assessment

- Established

The repository has strong documented and repeatable governance structure with broad evidence across docs, tools, tests, and workflows. It is foundational, but less directly automated than the specialized skills built on top of it.

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

- current AGENTS split
- current source-map usage
- current public-writing evidence policy

### Reusable Parts

- authority chains
- evidence-backed claims
- rationale preservation
- traceable validation layers
- governance-aware documentation for tools, tests, and workflows

### Adaptation Requirements

- choose repository-specific authority order
- choose which claims need evidence notes
- decide which governance rules deserve automation

### Confidence Level

- High

## Future Installation Concept

A future repository could adopt this skill through:

- `AGENTS.md` or equivalent governance doc
- `CONTRIBUTING.md` rules for evidence and source-of-truth usage
- README sections describing authority order
- templates for validator headers, workflow docs, and test docs
- optional starter validators for evidence-policy checks

## Open Questions

- what is the minimum viable install footprint for this skill in a small repository?
- which parts should stay guidance-first versus validator-backed?
- should future packaging call this skill `Engineering Governance` or `Traceable Engineering Governance`?

## License

This skill definition is licensed under the Apache License 2.0.

See `skills/LICENSE` for the full license text.

## Provenance

Originally extracted from repository evidence including guidance, validators, tests, workflows, and review procedures.

See repository adaptation documentation for implementation-specific details.
