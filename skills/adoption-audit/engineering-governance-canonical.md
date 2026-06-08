# Engineering Governance Canonical Design

This document defines what `Engineering Governance` would contain if it became the authoritative owner of its assigned rules.

Scope in this phase is limited to the following owned rules:

- `EG-001` Explicit Authority Chain
- `EG-002` Knowledge Stays Close To Governed Artifacts
- `EG-003` Validator-First Governance
- `EG-004` Layered Validation Model
- `EG-005` Manual Core Workflow Must Work Without AI
- `EG-006` AI Suggestions Are Not Facts
- `EG-007` Real-Device Verification For Hardware Workflows

## Canonical Structure

### Rule Group A: Authority, Evidence, And Truth Boundaries

This group consolidates:

- `EG-001` Explicit Authority Chain
- `EG-006` AI Suggestions Are Not Facts

These rules belong together because they define how the repository decides what is true, what is merely evidence, and what still requires review.

#### EG-001 Explicit Authority Chain

Canonical wording:

Important decisions and high-impact claims should be governed by an explicit authority order. Approved specifications, governance artifacts, and current-state documentation outrank demos, generated outputs, tests, and implementation details when those sources disagree.

Rationale:

- repositories accumulate many artifacts with different authority levels
- visible or executable artifacts are often mistaken for the most authoritative ones
- migration cannot succeed unless repositories know which artifact owns truth

Examples:

- a spec says a capability is planned, but a demo prototype shows it partially working; the planned status remains authoritative until approved documentation changes
- a generated page or screenshot suggests behavior that contradicts current-state documentation; the documentation remains authoritative until the change is documented and approved
- a test encodes old behavior, but the product decision changed; the test should be updated rather than treated as permanent truth

Anti-patterns:

- using the most concrete artifact as the source of truth by default
- treating a passing test as proof that public documentation is current
- treating demo behavior as product authority without approved guidance

Validation expectations:

- contributors can explain which artifact wins when sources disagree
- public or high-impact claims can cite the right authority layer
- documentation distinguishes current state from future plans

#### EG-006 AI Suggestions Are Not Facts

Canonical wording:

AI-assisted output should be treated as suggestion, draft, or evidence of a possible answer, not as automatic truth. Important claims, conclusions, and user-visible changes still require human review, stable evidence, and appropriate provenance.

Rationale:

- AI systems can produce polished but unsupported output
- AI increases speed, which increases the risk of quickly spreading unverified claims
- repositories need a reusable rule that survives model, provider, and tooling changes

Examples:

- an AI assistant suggests a product behavior explanation; the explanation is not authoritative until checked against current-state docs and specs
- an AI-generated summary looks correct, but a reviewer still verifies the underlying evidence before publication
- an AI-assisted code change passes local checks, but still requires review and documentation update if behavior changed

Anti-patterns:

- publishing AI-written claims without checking repository evidence
- treating an AI-generated migration summary as authoritative without source verification
- presenting AI-derived assumptions as settled product decisions

Validation expectations:

- high-impact AI-assisted outputs are reviewable against stable sources
- AI-assisted changes preserve enough provenance that reviewers can verify them
- no governance path assumes “AI said so” is sufficient evidence

### Rule Group B: Knowledge Preservation In Governed Artifacts

This group consolidates:

- `EG-002` Knowledge Stays Close To Governed Artifacts
- `EG-003` Validator-First Governance
- `EG-004` Layered Validation Model

These rules belong together because they define how governance moves from prose into durable engineering practice.

#### EG-002 Knowledge Stays Close To Governed Artifacts

Canonical wording:

Rationale, assumptions, guarantees, and limitations should stay close to the artifact they govern. Tools, validators, tests, workflows, and related guidance should preserve enough explanation that future contributors do not need to reconstruct intent from code history alone.

Rationale:

- distant explanation becomes stale or invisible
- durable governance depends on making intent recoverable where work happens
- reusable skills need a rule for preserving context without requiring central over-documentation

Examples:

- a validator README explains which failure class the validator is meant to prevent
- a workflow README explains why step order matters
- a test README explains what repository promise a runtime test protects

Anti-patterns:

- relying on commit history as the primary explanation for why a validator exists
- keeping critical workflow reasoning only in an issue or chat transcript
- adding enforcement without explaining the protected guarantee

Validation expectations:

- non-trivial tools, tests, and workflows have locally discoverable explanation
- reviewers can identify what guarantee an artifact protects
- local documentation remains close enough to implementation that drift is visible

#### EG-003 Validator-First Governance

Canonical wording:

When a recurring failure can be checked objectively, governance should prefer validator or automated-check enforcement over human memory alone.

Rationale:

- repeated failures consume review capacity when they remain prose-only
- automation is the durable form of many stable governance rules
- migration should centralize the principle without requiring one enforcement mechanism for every repo

Examples:

- if editorial evidence repeatedly cites the wrong source type, create a validator instead of repeating the warning manually
- if a generated output frequently drifts from expectations, add a structural or runtime check
- if a defect class reaches zero repeatedly, consider making its detection blocking in CI

Anti-patterns:

- solving the same recurring problem only with reviewer reminders
- creating complex human checklists when an objective automated rule is possible
- adding validators without explaining what recurring risk they replace

Validation expectations:

- repeated failures are examined for automation opportunities
- validator adoption reduces reliance on informal memory
- reviewers can explain why a rule remained prose-only if it was not automated

#### EG-004 Layered Validation Model

Canonical wording:

Quality and governance should be enforced through layered validation. Guidance, review, validators, tests, CI, and deployment each answer different questions and should be used together rather than as substitutes for one another.

Rationale:

- single-layer validation misses different classes of failure
- repositories need a reusable model that explains why multiple enforcement forms coexist
- this rule stabilizes ownership boundaries across skills

Examples:

- guidance defines how public claims should be supported, validators detect obvious source misuse, tests verify behavior, and CI determines when failures block progress
- localization review checks naturalness, validators check parity, and deployment ensures only fresh validated outputs ship

Anti-patterns:

- expecting linting alone to guarantee documentation quality
- expecting tests alone to replace policy guidance
- treating deployment as a passive file copy instead of a trust boundary

Validation expectations:

- repositories can explain what each validation layer is responsible for
- enforcement ordering is explicit and purposeful
- no single layer is assumed to cover all quality questions

### Rule Group C: Product Resilience And Reality-Based Verification

This group consolidates:

- `EG-005` Manual Core Workflow Must Work Without AI
- `EG-007` Real-Device Verification For Hardware Workflows

These rules belong together because they define how repositories preserve trustworthy behavior when external dependency layers are absent or misleading.

#### EG-005 Manual Core Workflow Must Work Without AI

Canonical wording:

If a repository or product claims a core workflow, that workflow should remain useful without optional AI assistance unless the workflow is explicitly defined as AI-dependent.

Rationale:

- optional intelligence should not silently replace core usability
- resilience matters for cost control, outages, policy changes, and portability
- the repository needs a reusable rule for separating enhancement from dependency

Examples:

- manual content entry still works even when metadata enrichment is disabled
- review workflows remain possible when translation suggestions are unavailable
- guidance distinguishes required system behavior from optional assistance

Anti-patterns:

- treating fallback/manual workflows as unimportant because AI exists
- documenting an optional AI path as if it were the only operational path
- making verification impossible when the enhancement layer is unavailable

Validation expectations:

- core workflows can be described without assuming AI availability
- repository docs clearly distinguish optional assistance from required behavior
- reviewers can identify whether a claimed workflow is resilient or explicitly AI-dependent

#### EG-007 Real-Device Verification For Hardware Workflows

Canonical wording:

When user-visible behavior depends materially on physical hardware, sensors, device capabilities, or platform-specific runtime behavior, verification should include real-device evidence rather than relying solely on emulation or desktop approximations.

Rationale:

- emulation and desktop reproduction often miss real-world failure modes
- portable governance needs a principle for hardware-dependent truth, even when local debugging procedures differ by repo

Examples:

- camera-based scanning is validated on a real phone instead of only in desktop emulation
- barcode/QR behavior is checked against actual device camera streams
- device storage or offline behavior is verified on the target class of hardware when central to workflow success

Anti-patterns:

- signing off hardware-dependent behavior from emulator-only evidence
- treating browser devtools simulation as equivalent to physical device verification
- documenting real-device-dependent workflows without a real-device validation expectation

Validation expectations:

- hardware-dependent workflows identify when real-device evidence is required
- repository claims about sensors, camera, scanning, or offline behavior are backed by appropriate runtime evidence
- local debugging instructions may vary, but the verification principle remains stable

## Repository Adaptation Boundaries

The following should not become part of canonical Engineering Governance wording:

- exact AGENTS file split
- specific workflow file names
- exact validator names
- exact test commands
- specific demo architecture
- device-specific debugging procedures
- product-domain examples that only make sense for Let Books

These belong in repository adaptations and local operational guidance.

## Extraction Readiness View

Stable, extraction-ready rule groups:

- Authority, Evidence, And Truth Boundaries
- Knowledge Preservation In Governed Artifacts
- Validator-First and Layered Validation

Less stable but still extractable with care:

- Manual Core Workflow Must Work Without AI
- Real-Device Verification For Hardware Workflows

These two are portable, but they sit closer to product and operational guidance than the rest of Engineering Governance.
