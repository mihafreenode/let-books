# Engineering Governance Extraction Impact

This document estimates the impact of making Engineering Governance the authoritative owner of its assigned rules.

## Affected Documents

### `AGENTS.md`

Content likely to move:

- authority-boundary guidance that separates product/spec truth from tactical implementation guidance
- general AI-suggestion and non-AI-dependency principles
- general real-device verification principle

Content likely to remain:

- Let Books product purpose
- domain model
- workflows, acceptance criteria, and architecture choices
- product-specific AI, metadata, and storage rules

Expected duplication reduction:

- High

Migration risk:

- Medium

Why:

- `AGENTS.md` mixes portable governance with product-specific philosophy; extraction must avoid draining product intent that belongs locally

### `AGENTS-Implementation.md`

Content likely to move:

- validator-first knowledge preservation
- artifact documentation norms for validators/tests/workflows
- authority and evidence boundary rules that are generic

Content likely to remain:

- branding rules
- site topology
- static demo architecture
- scanner/mobile/debugging specifics
- exact tooling contracts and local implementation conventions

Expected duplication reduction:

- Very High

Migration risk:

- Medium

Why:

- this file is the densest mix of portable governance and local implementation guidance

### `README.md`

Content likely to move:

- high-level AI-is-optional framing where expressed as a portable governance principle
- general spec vs implementation guidance references
- general real-device verification principle

Content likely to remain:

- current repo status
- public site structure
- demo description
- verification ISBNs
- local preview and debugging entry points

Expected duplication reduction:

- Medium

Migration risk:

- Low-Medium

Why:

- much of `README.md` is already adaptation-heavy and should stay local

### `docs/wiki/spec-driven-development.md`

Content likely to move:

- explicit source-of-truth ordering
- warning that visible artifacts should not become default truth

Content likely to remain:

- Let Books-specific examples if they exist
- local cross-links into repo docs

Expected duplication reduction:

- High

Migration risk:

- Low

Why:

- strongly aligned with `EG-001`

### `docs/wiki/documentation-traceability.md`

Content likely to move:

- authority-chain guidance that is generic to engineering governance

Content likely to remain:

- public-writing examples that are more naturally owned by Documentation as Product

Expected duplication reduction:

- Medium

Migration risk:

- Medium

Why:

- this page overlaps Engineering Governance and Documentation as Product

### `docs/wiki/validation-layers.md`

Content likely to move:

- layered validation model

Content likely to remain:

- repo-specific examples of current validation surfaces if retained as adaptation notes

Expected duplication reduction:

- High

Migration risk:

- Low

Why:

- near-direct source for `EG-004`

### `tools/README.md`

Content likely to move:

- keep knowledge close to tools
- validator-first governance
- documentation expectations for non-trivial tools

Content likely to remain:

- exact tool catalog
- exact validator names
- local maintenance commands and usage details

Expected duplication reduction:

- High

Migration risk:

- Low

Why:

- portable rules and local catalog content are already conceptually separable

### `tests/README.md`

Content likely to move:

- tests as executable documentation and repository memory
- validator -> test -> documentation ordering as a governance rule

Content likely to remain:

- current test families
- test commands
- local runtime guarantees

Expected duplication reduction:

- Medium-High

Migration risk:

- Low

Why:

- easy to preserve local examples while extracting generic rules

### `.github/workflows/README.md`

Content likely to move:

- workflow knowledge close to workflows
- validator-first and layered-governance framing where it is generic

Content likely to remain:

- exact workflow names
- specific orchestration order for current repo
- references to current tools/tests

Expected duplication reduction:

- Medium

Migration risk:

- Medium

Why:

- overlaps both Engineering Governance and CI/CD Governance; boundary discipline will matter

### `docs/android-debugging.md`

Content likely to move:

- almost nothing beyond the portable principle that hardware-dependent workflows need real-device evidence

Content likely to remain:

- Android debugging procedures
- ADB/CDP steps
- mobile runtime troubleshooting

Expected duplication reduction:

- Low

Migration risk:

- Low

Why:

- this is primarily an adaptation and operations document, not a portable governance document

## Repository Adaptation Review

The following guidance should remain local to Let Books even after Engineering Governance extraction:

### Repository topology

- root vs `/docs/` vs `/static-demo/`

Why it remains local:

- depends on the current public site and repository layout

### AGENTS structure

- the exact split between `AGENTS.md` and `AGENTS-Implementation.md`

Why it remains local:

- this is a local governance packaging choice, not a universal rule

### Static demo specifics

- local-only PWA behavior
- IndexedDB/ZIP transfer specifics
- demo verification examples

Why it remains local:

- product and implementation detail, not generic engineering governance

### Mobile debugging procedures

- ADB/CDP flows
- Android camera debugging steps

Why it remains local:

- operational procedure is toolchain- and platform-specific

### Exact validator names

- individual file names and commands under `tools/`

Why it remains local:

- canonical Engineering Governance should define why such artifacts exist, not the current local catalog

### Exact workflow names

- `.github/workflows/ci.yml`
- `.github/workflows/docs.yml`

Why it remains local:

- CI platform and workflow naming are repository implementation details

## Extraction Readiness Assessment

### Is Engineering Governance sufficiently defined to extract?

- Yes, as a design target.

The core of Engineering Governance is well-defined enough that extraction planning can proceed without adding new rules.

### Which rules are stable?

Clearly stable:

- `EG-001` Explicit Authority Chain
- `EG-002` Knowledge Stays Close To Governed Artifacts
- `EG-003` Validator-First Governance
- `EG-004` Layered Validation Model
- `EG-006` AI Suggestions Are Not Facts

Stable but closer to product/operations:

- `EG-005` Manual Core Workflow Must Work Without AI
- `EG-007` Real-Device Verification For Hardware Workflows

### Which rules still have ambiguous ownership?

- `EG-007` has the strongest boundary ambiguity because CI/CD Governance also consumes hardware-related verification evidence patterns
- `EG-005` can read partly like product philosophy rather than pure governance, depending on phrasing

These are not ownership failures, but they require careful wording discipline.

### What information is still missing?

- a normalized list of local examples that should accompany each canonical rule after migration
- a formal deprecation approach for stale duplicate guidance after extraction
- a local adaptation registry that explicitly records which governance examples remain intentionally Let Books-specific

## Overall Conclusion

Engineering Governance is sufficiently defined for Phase 1 extraction design.

Best extraction candidates first:

1. `EG-001` Explicit Authority Chain
2. `EG-002` Knowledge Stays Close To Governed Artifacts
3. `EG-003` Validator-First Governance
4. `EG-004` Layered Validation Model

Rules to extract with extra boundary care:

5. `EG-006` AI Suggestions Are Not Facts
6. `EG-005` Manual Core Workflow Must Work Without AI
7. `EG-007` Real-Device Verification For Hardware Workflows
