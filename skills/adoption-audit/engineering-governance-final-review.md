# Engineering Governance Final Review

## Scope

Reviewed:

- `skills/adoption-audit/engineering-governance-canonical.md`
- `skills/adoption-audit/engineering-governance-source-map.md`
- `skills/adoption-audit/engineering-governance-extraction-impact.md`

Reference context:

- `skills/engineering-governance.md`
- prior ownership and dependency decisions established during the migration audit and rule-registry work

This review is intentionally conservative and focused on pre-extraction risk.

## Ownership Findings

### Stable ownership

The following rules have clear long-term ownership in `Engineering Governance`.

#### `EG-001` Explicit Authority Chain

Why ownership is clear:

- it is a foundational cross-skill rule
- it governs how specs, docs, implementation, tests, demos, and generated artifacts relate
- all other skills consume this rule rather than redefining it

Assessment:

- strong fit
- no meaningful ownership ambiguity

#### `EG-002` Knowledge Stays Close To Governed Artifacts

Why ownership is clear:

- it is a cross-cutting governance rule applying equally to tools, tests, workflows, and docs
- it is not specific to localization, publication, or CI mechanics

Assessment:

- strong fit
- should remain owned here

#### `EG-003` Validator-First Governance

Why ownership is clear:

- it is a foundational principle about when recurring failures should graduate into enforcement
- CI/CD consumes it, but does not define it
- localization uses it heavily, but only as a specialization

Assessment:

- strong fit
- no ownership change recommended

#### `EG-004` Layered Validation Model

Why ownership is clear:

- it defines the architecture of validation across guidance, review, validators, tests, CI, and deployment
- all other skills consume this model

Assessment:

- strong fit
- should remain authoritative here

#### `EG-006` AI Suggestions Are Not Facts

Why ownership is clear:

- it is a generic AI-governance rule
- localization has a specialized `draft-only until review` version, but the broad principle belongs in Engineering Governance

Assessment:

- strong fit
- specialization split is healthy

### Ownership is valid but should be treated carefully

#### `EG-005` Manual Core Workflow Must Work Without AI

Why it is still acceptable here:

- it is a reusable resilience principle
- it provides a governance-level distinction between enhancement and dependency

Why ownership is somewhat ambiguous:

- it reads partly as product philosophy
- in some repositories it might be framed under product resilience or operational resilience rather than governance

Assessment:

- acceptable current owner: `Engineering Governance`
- wording discipline is required to keep it portable and non-domain-specific

#### `EG-007` Real-Device Verification For Hardware Workflows

Why it can remain here:

- it is a broad verification principle about what counts as trustworthy evidence
- it is not inherently a CI/CD or mobile-debugging implementation rule

Why ownership is ambiguous:

- it has a strong pull toward future domains such as:
  - Product Resilience
  - Reality-Based Verification
  - Operational Governance
  - Mobile/Device Debugging Governance
- concrete examples are very implementation-heavy

Assessment:

- acceptable current owner: `Engineering Governance`
- this is the rule most likely to be reassigned if a future specialized skill family emerges

## Completeness Findings

### Canonically represented well

The package already captures these concepts strongly enough for extraction design:

- authority ordering across artifact types
- demos as evidence, not automatic authority
- evidence-backed claims
- rationale preservation close to governed artifacts
- validator-first enforcement
- layered validation
- AI output requiring review and provenance
- optional AI versus core workflow resilience
- real-device evidence for hardware-dependent workflows

### Concepts referenced elsewhere but only partially represented

These are not severe gaps, but they are thinner than ideal in the Engineering Governance package.

#### 1. Artifact ownership and stewardship

Observed in repo patterns:

- many docs imply that governance artifacts need maintainers or clear owners
- stale governance is treated as harmful in practice

Current status:

- implicit
- not explicitly canonicalized in Engineering Governance

Why it matters:

- once rules move into skills, ownership clarity matters more

Assessment:

- not a blocker
- useful future refinement

#### 2. Governance drift as a defect class

Observed in:

- repeated concern about stale docs, stale workflows, and stale duplicated guidance

Current status:

- implied through failure modes and migration-risk analysis
- not expressed as a canonical rule

Why it matters:

- extraction will increase the importance of detecting stale references and obsolete local copies

Assessment:

- not a blocker
- should eventually be made explicit, probably as a sub-rule under knowledge preservation or authority maintenance

#### 3. Local examples versus canonical rules

Observed need:

- extraction-impact analysis assumes local examples remain after generic rules move
- canonical docs do not yet state a rule about how local examples should relate to portable authority

Current status:

- implicit in adaptation boundaries
- not explicit in canonical wording

Assessment:

- moderately useful
- not required before extraction, but helpful to avoid over-thinning local docs

### Rules implicit in repo materials but not strongly canonicalized

These are present indirectly in validators, workflows, or guide structure:

- stale duplicate guidance should eventually be deprecated or removed after authoritative extraction
- governance references should point to a single owner, not parallel local restatements
- supporting evidence should remain stable enough to survive generated-output churn

These are more migration-governance concerns than missing Engineering Governance core rules.

## Extraction Safety Findings

### Safe areas

These parts look safe to extract and reference authoritatively.

#### `EG-001` Explicit Authority Chain

Why safe:

- already repeated in several places with mostly consistent meaning
- repository-specific content can remain as examples and local adaptations

Risk level:

- Low-Medium

#### `EG-002` Knowledge Stays Close To Governed Artifacts

Why safe:

- clearly portable
- local catalogs can remain while generic rationale moves out

Risk level:

- Low

#### `EG-003` Validator-First Governance

Why safe:

- already normalized conceptually across tools, tests, and workflows
- strong duplication reduction with low meaning loss

Risk level:

- Medium

Note:

- extraction must avoid pulling CI/CD-specific orchestration details into the canonical rule

#### `EG-004` Layered Validation Model

Why safe:

- near-direct portable rule
- local stage and tool examples can stay local

Risk level:

- Low

#### `EG-006` AI Suggestions Are Not Facts

Why safe:

- concise and portable
- current repo-specific provenance examples can remain local

Risk level:

- Low

### Areas requiring caution

#### `EG-005` Manual Core Workflow Must Work Without AI

Extraction risk:

- if moved too aggressively, local product philosophy may get flattened into generic wording
- some Let Books-specific examples may still be needed in repo docs to preserve practical meaning

Recommended caution:

- extract the principle
- retain local workflow examples and product rationale in the repository

#### `EG-007` Real-Device Verification For Hardware Workflows

Extraction risk:

- portable principle is clear
- local procedures are deeply implementation-specific
- too much movement could strip useful operational context from Let Books docs

Recommended caution:

- extract only the evidence principle
- retain all procedural and debugging specifics locally

### Additional migration risks not yet emphasized enough

#### 1. Boundary drift between Engineering Governance and Documentation as Product

Risk:

- authority and evidence language overlaps heavily with docs/publication traceability

Potential failure:

- local docs may not know whether to reference Engineering Governance or Documentation as Product for claim-support rules

Recommendation:

- keep the distinction explicit:
  - Engineering Governance owns general evidence and authority
  - Documentation as Product owns publication-facing application of those rules

#### 2. Boundary drift between Engineering Governance and CI/CD Governance

Risk:

- validator-first and layered validation are foundational, but workflow README material may blur into CI/CD specifics

Potential failure:

- migration could move too much orchestration detail into Engineering Governance

Recommendation:

- keep Engineering Governance at the principle and architecture layer
- keep freshness, ordering, and deploy-trust specifics in CI/CD Governance

#### 3. Over-thinning `AGENTS.md` and `AGENTS-Implementation.md`

Risk:

- those files contain both portable rules and local operating context
- removing too much generic wording could make them harder to use without enough local bridge text

Recommendation:

- extraction should leave short repository-facing summaries and explicit skill references
- do not turn core local documents into bare link stubs

#### 4. Missing adaptation registry

Risk:

- after extraction, contributors may not know which guidance intentionally remains local

Recommendation:

- not required before Phase 1 extraction begins
- but should exist before later cleanup phases

## Recommended Adjustments

### Minor adjustment 1

Clarify in the eventual extracted form that:

- `Engineering Governance` owns general evidence and authority rules
- `Documentation as Product` owns the public-documentation application of those rules

Reason:

- reduces future overlap disputes

### Minor adjustment 2

Keep `EG-005` framed as a governance principle about enhancement versus dependency, not as Let Books product philosophy.

Reason:

- preserves portability
- avoids accidental domain lock-in

### Minor adjustment 3

Keep `EG-007` framed as an evidence-quality rule, not a debugging-method rule.

Reason:

- preserves long-term fit under Engineering Governance
- prevents accidental migration of device procedure details

### Minor adjustment 4

When extraction happens, require repository-facing references to preserve:

- local examples
- local exceptions
- local file, path, and tool names

Reason:

- prevents maintainability loss from over-abstraction

## Final Readiness Verdict

### Ready with minor adjustments

Reasoning:

- Engineering Governance is sufficiently defined for authoritative extraction design
- the core rules are stable and clearly owned
- the main risks are boundary and phrasing risks, not missing-rule risks
- no major additional design work is required before extraction planning proceeds

## Stable Rules

Most stable:

- `EG-001` Explicit Authority Chain
- `EG-002` Knowledge Stays Close To Governed Artifacts
- `EG-003` Validator-First Governance
- `EG-004` Layered Validation Model
- `EG-006` AI Suggestions Are Not Facts

Stable with careful framing:

- `EG-005` Manual Core Workflow Must Work Without AI
- `EG-007` Real-Device Verification For Hardware Workflows

## Ambiguous Ownership Summary

Most ambiguous:

- `EG-007` Real-Device Verification For Hardware Workflows

Mildly ambiguous:

- `EG-005` Manual Core Workflow Must Work Without AI

Not ambiguous:

- `EG-001`
- `EG-002`
- `EG-003`
- `EG-004`
- `EG-006`

## Bottom Line

Engineering Governance is ready to serve as the authoritative owner of its assigned rules if extraction remains conservative:

- move principles, not procedures
- preserve local examples and operating context
- keep overlap boundaries explicit with Documentation as Product and CI/CD Governance
