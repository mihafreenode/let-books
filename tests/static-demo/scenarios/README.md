# Static Demo Scenario Drafts

## Purpose

`tests/static-demo/scenarios/` contains the first non-blocking Playwright scenario layer for the static demo.

These scripts are executable tutorials first and future smoke-test candidates second.

## Relationship To Use-Case Docs

This directory follows the same chain defined in `docs/use-cases/`:

`Use Case`
`-> Automation Contract`
`-> Playwright Tutorial`
`-> future parity`

The use-case document is the durable source of intent.

The Playwright script is only the current runtime expression of that intent in the static demo.

## What These Scripts Are

- draft scenario tutorials
- readable smoke-test skeletons
- early runtime checks for durable user-facing anchors

## What These Scripts Are Not

- strict CI gates
- final parity tests
- layout regression tests
- selector contracts for the eventual Blazor implementation

## Current Coverage

- `UC-001` Receive Books Into The Collection
- `UC-002` Catalog Physical Books
- `UC-003` Organize And Inspect Physical Storage
- `UC-004` Review Collection State

`UC-005` remains documentation-first for now because the external review roundtrip is still too implementation-heavy for stable browser automation.

## Conventions

- each script references the source use-case document by identifier and filename
- scripts prefer `getByRole`, `getByLabel`, and stable visible text
- CSS selectors are avoided except for unavoidable test harness details
- each script calls out current fragility in comments
- scripts should avoid assumptions about seeded ids, exact item ordering, rotating hero copy, or specific counts

## Running The Drafts

Run from the repository root.

Draft wrapper command:

```bash
node tests/static-demo/scenarios/run-all-draft-scenarios.js
```

Single scenario:

```bash
node tests/static-demo/scenarios/uc-001-receive-books-into-the-collection.draft.js
```

Equivalent explicit sequence:

```bash
node tests/static-demo/scenarios/uc-001-receive-books-into-the-collection.draft.js && node tests/static-demo/scenarios/uc-002-catalog-physical-books.draft.js && node tests/static-demo/scenarios/uc-003-organize-and-inspect-physical-storage.draft.js && node tests/static-demo/scenarios/uc-004-review-collection-state.draft.js
```

## Limitations

- the static demo can prompt to load seed data on first run; each script handles that deliberately
- real camera behavior is not validated here
- service-worker or offline-specific behavior is intentionally out of scope for this first layer
- file download and import/export flows are intentionally deferred until the workflow contract is stronger
