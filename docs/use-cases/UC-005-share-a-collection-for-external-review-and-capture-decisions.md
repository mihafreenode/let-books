# UC-005 Share A Collection For External Review And Capture Decisions

## Purpose

Allow a collection owner to prepare a set of books for external review, share that set in a practical format, and bring resulting decisions back into the collection workflow.

## User Goal

Get usable external decisions about which books are wanted, maybe wanted, or not wanted without forcing all reviewers into the application.

## Why This Exists

The project is built around practical donation and review workflows.

Manual inventory only becomes operationally useful when the collection can be shared for decision-making and those decisions can drive what happens next.

## Actors

- donor
- collection owner
- external reviewer such as a library partner
- later, coordinators or contributors who process returned decisions

## Preconditions

- the collection contains books that are ready enough to share for review
- the application can prepare an external review representation and later accept returned decisions
- stable item identity is preserved well enough to match decisions back to the correct physical copies

## Main Success Scenario

The user prepares a shareable review set from the collection.

An external reviewer evaluates the shared set outside the core application workflow if necessary.

The user brings review decisions back into the collection system.

The collection now reflects which books were wanted, maybe wanted, or not wanted, enabling later retrieval and donation work.

## Alternative Scenarios

- the user shares the current review set through an export file
- the user imports returned decisions from an edited review file
- the user performs several review cycles over time as collection quality improves
- future implementations may replace file exchange with a reviewer portal while preserving the same underlying use case

## Expected Outcome

The collection contains externally informed decision state that can guide what books should be retrieved, offered, packed, or left in storage.

## Related Screens

Informational only.

- `#/export`
- `#/books/:id`
- `#/boxes/:id`
- `#/dashboard`

## Open Questions

- when should a book be considered ready enough for external review
- how much validation feedback should be visible to the user during import in future implementations
- whether future reviewer experiences should remain file-based, portal-based, or both

## Future Automation

- Playwright tutorial coverage: later
- smoke-test candidate: limited for now
- current readiness: `Not Automatable Yet`
- future Blazor parity notes: compare whether external review decisions can be prepared, captured, and reflected in collection state, regardless of transport mechanism

## Automation Contract

### Start Route

Current best static-demo starting point is `#/export`.

This route is only the current demo surface for a broader review-preparation capability.

### Stable User-Facing Anchors

- `Export`
- `Import`
- Excel-related action labels
- archive or summary labels for books, boxes, photos, and version

These anchors are visible in the current demo, but they should not be treated as a permanent contract for the eventual implementation.

### Main User Actions

- open the review-preparation surface
- export a shareable review representation
- later import returned decisions
- confirm that review state is reflected back in the collection

### Expected Observations

- the user can discover a share-and-return workflow for external review
- the collection exposes review-oriented fields such as wanted status or library comments after import
- the workflow preserves item-level identity rather than matching on loose title text alone

### Known Fragility

- the current demo expresses this use case through file actions rather than a richer workflow
- import validation and user feedback are still lightweight
- browser automation around downloads and local file roundtrips would harden implementation details too early
