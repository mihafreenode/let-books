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

### Authority Hierarchy

When making high-impact decisions or public claims, approved specifications, governance artifacts, and current-state documentation should outrank:

- demos and prototypes
- generated outputs
- tests and validation results
- implementation details

Why this rule exists:

- visible artifacts are often mistaken for authoritative ones
- generated or executable surfaces can lag behind approved intent

Risks prevented:

- accidental source-of-truth drift
- public claims based on implementation accidents
- AI or human reviewers following the most concrete artifact instead of the right one

Relationship to existing guidance:

- strengthens the existing authority-chain and evidence-backed-claims guidance already present in this skill

### Demo And Prototype Boundaries

Demonstrations, prototypes, and current builds provide evidence about implementation status. They do not automatically become the authoritative description of intended behavior.

Why this rule exists:

- demos are useful because they are concrete, but that concreteness can outweigh approved product intent unless boundaries are explicit

Risks prevented:

- demos silently replacing product decisions
- reviewers treating temporary behavior as approved direction

Relationship to existing guidance:

- refines the source-of-truth order already documented in this skill

### Evidence Expectations

Substantial claims should remain traceable to supporting evidence.

Portable mechanisms may include:

- source maps
- evidence notes
- stable references
- equivalent repository-specific traceability artifacts

The mechanism is implementation-specific. The rule is that important claims should be reviewable against stable supporting evidence.

Why this rule exists:

- claims are easier to publish than to verify later
- traceability matters more when content is AI-assisted, editorial, or externally consumed

Risks prevented:

- brittle or ungrounded public claims
- expensive rediscovery of why a statement was considered true

Relationship to existing guidance:

- makes the existing evidence-backed-claims expectation explicit enough for authoritative use

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
- `docs/supporting-material/portable-skills-transcript-part-2-reconstructed.html`
- `docs/supporting-material/portable-skills-transcript-part-3.html`
- `docs/supporting-material/portable-skills-transcript-part-4.html`
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
- distinguish implementation evidence from authoritative intent
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
- review whether demos or generated outputs are being treated as stronger authority than approved guidance
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
- demos and generated artifacts are interpreted as evidence, not as automatic authority
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
