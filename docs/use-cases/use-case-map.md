# Use-Case Map

## Purpose

This map tracks which capabilities are considered primary, which are supporting, how ready they are for draft automation, and where future parity tracking should attach.

## Related Diagrams

- `../diagrams/use-case-overview.svg`
- `../diagrams/use-case-capability-relationships.svg`
- `../diagrams/use-case-automation-parity-chain.svg`

## Status Meanings

- `Documented`: a dedicated use-case document exists.
- `Planned`: recognized in the inventory but not documented as a first-class use case yet.

## Automation Status Meanings

- `Not Automatable Yet`: current behavior is too unstable or too implementation-bound.
- `Draft Automatable`: useful for tutorial skeletons or smoke-test candidates, but not yet strong enough for strict regression enforcement.
- `Stable Candidate`: likely strong enough for higher-confidence browser automation once seed data and wording are stabilized.

## Inventory

| Identifier | Title | Type | Status | Automation Status | Future Parity Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `UC-001` | Receive Books Into The Collection | Primary | Documented | Draft Automatable | Not Started | Quick intake can start before full metadata. |
| `UC-002` | Catalog Physical Books | Primary | Documented | Draft Automatable | Not Started | Includes manual entry, ISBN lookup, and later enrichment review. |
| `UC-003` | Organize And Inspect Physical Storage | Primary | Documented | Stable Candidate | Not Started | Strongest storage-logistics capability in the current demo. |
| `UC-004` | Review Collection State | Primary | Documented | Draft Automatable | Not Started | Stronger and more durable than a dashboard-specific model. |
| `UC-005` | Share A Collection For External Review And Capture Decisions | Primary | Documented | Not Automatable Yet | Not Started | Excel roundtrip exists, but the durable review contract is still evolving. |
| `UC-S01` | Label Storage For Reuse | Supporting | Planned | Draft Automatable | Not Started | QR and portable box flows support storage reuse. |
| `UC-S02` | Reassign Books Between Storage Locations | Supporting | Planned | Draft Automatable | Not Started | Present as modal and scanner-assisted move paths. |
| `UC-S03` | Transfer Or Restore Local Demo Data | Supporting | Planned | Not Automatable Yet | Not Started | ZIP export and import remain implementation-heavy. |
| `UC-S04` | Maintain Demo State | Supporting | Planned | Draft Automatable | Not Started | Seed, reset, cache clear, and wipe are operational functions. |
| `UC-S05` | Troubleshoot Assisted Capture | Supporting | Planned | Not Automatable Yet | Not Started | Scanner diagnostics are important but highly device-specific. |

## Future Parity Guidance

Future parity review should compare:

- the user outcome
- the workflow intent
- the observable behavior

Future parity review should not compare:

- DOM structure
- CSS layout
- component hierarchy
- route names alone
- visual similarity alone
