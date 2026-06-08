# Engineering Governance Source Map

This source map identifies where each Engineering Governance rule currently appears, which source is currently strongest, what is duplicated, which details are repository-specific, and how difficult the rule will be to extract cleanly.

## EG-001 Explicit Authority Chain

Current locations:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- `docs/wiki/spec-driven-development.md`
- `docs/wiki/documentation-traceability.md`
- related mirrored topic or program pages that restate the same pattern

Primary current source:

- `docs/wiki/documentation-traceability.md`

Duplicate locations:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- `docs/wiki/spec-driven-development.md`

Repository-specific adaptations:

- the exact split between `AGENTS.md` and `AGENTS-Implementation.md`
- Let Books references to public landing pages, static demo, and docs hub

Migration complexity:

- Medium

Notes:

- foundational and highly duplicated
- strong extraction candidate because its generic form is already visible through multiple documents

## EG-002 Knowledge Stays Close To Governed Artifacts

Current locations:

- `AGENTS-Implementation.md`
- `tools/README.md`
- `tests/README.md`
- `.github/workflows/README.md`

Primary current source:

- `AGENTS-Implementation.md`

Duplicate locations:

- `tools/README.md`
- `tests/README.md`
- `.github/workflows/README.md`

Repository-specific adaptations:

- exact local README layering strategy
- current directory-specific documentation conventions

Migration complexity:

- Low

Notes:

- portable and already consistently expressed
- likely easiest rule to extract cleanly without loss

## EG-003 Validator-First Governance

Current locations:

- `AGENTS-Implementation.md`
- `tools/README.md`
- `tests/README.md`
- `.github/workflows/README.md`
- `docs/wiki/validation-layers.md`
- `docs/localization-at-scale-program.md`
- `docs/localization-audit-report.md`

Primary current source:

- `tools/README.md`

Duplicate locations:

- `tests/README.md`
- `.github/workflows/README.md`
- `docs/wiki/validation-layers.md`
- `AGENTS-Implementation.md`

Repository-specific adaptations:

- exact validator catalog
- exact workflow/test structure used in Let Books

Migration complexity:

- Medium

Notes:

- strong portable principle
- needs careful separation from CI/CD-specific enforcement details

## EG-004 Layered Validation Model

Current locations:

- `docs/wiki/validation-layers.md`
- `tests/README.md`
- `.github/workflows/README.md`
- `docs/localization-maintenance-system.md`

Primary current source:

- `docs/wiki/validation-layers.md`

Duplicate locations:

- `tests/README.md`
- `.github/workflows/README.md`
- `docs/localization-maintenance-system.md`

Repository-specific adaptations:

- exact stage names and specific tool chains used by this repo

Migration complexity:

- Low

Notes:

- highly portable
- foundational for both CI/CD and documentation/localization governance

## EG-005 Manual Core Workflow Must Work Without AI

Current locations:

- `AGENTS.md`
- `README.md`
- `AGENTS-Implementation.md`

Primary current source:

- `AGENTS.md`

Duplicate locations:

- `README.md`
- `AGENTS-Implementation.md`

Repository-specific adaptations:

- Let Books-specific examples around cataloging, storage, review, and Excel workflows

Migration complexity:

- Medium

Notes:

- portable in principle, but strongly expressed through product framing
- extraction should keep the rule general and leave product examples local

## EG-006 AI Suggestions Are Not Facts

Current locations:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`

Primary current source:

- `AGENTS.md`

Duplicate locations:

- `AGENTS-Implementation.md`
- `README.md`

Repository-specific adaptations:

- current provenance and review examples tied to Let Books domain features

Migration complexity:

- Low

Notes:

- portable and concise
- should remain general enough to apply outside localization or metadata enrichment contexts

## EG-007 Real-Device Verification For Hardware Workflows

Current locations:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- `docs/android-debugging.md`

Primary current source:

- `AGENTS.md`

Duplicate locations:

- `AGENTS-Implementation.md`
- `README.md`

Repository-specific adaptations:

- Android/ADB/CDP workflow
- camera/barcode/QR-specific validation procedures
- local mobile debugging stack

Migration complexity:

- Medium-High

Notes:

- the principle is portable
- the implementation detail is strongly local and must remain outside the canonical rule

## Summary

Lowest-complexity extraction targets:

- `EG-002` Knowledge Stays Close To Governed Artifacts
- `EG-004` Layered Validation Model
- `EG-006` AI Suggestions Are Not Facts

Highest-value extraction targets:

- `EG-001` Explicit Authority Chain
- `EG-003` Validator-First Governance

Highest boundary-risk extraction target:

- `EG-007` Real-Device Verification For Hardware Workflows
