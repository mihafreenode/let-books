# UC-004 Review Collection State

## Purpose

Provide enough collection-level visibility that the user can judge progress, spot incomplete work, and decide what to do next without depending on one specific dashboard design.

## User Goal

Understand the current state of the collection well enough to continue intake, cataloging, storage work, or review preparation.

## Why This Exists

Users need more than individual book records.

They need collection-level feedback about volume, readiness, missing information, and which parts of the collection deserve attention next.

## Actors

- donor
- collection owner
- contributor
- later, reviewers or coordinators with read access

## Preconditions

- the collection contains at least some stored books, boxes, or photos
- the application can surface collection summaries, recent items, or filtered subsets of work

## Main Success Scenario

The user opens a collection-level view.

The user reviews the current state of the collection through summaries, recent activity, visible subsets, or status-focused lists.

The user identifies what is complete, what is incomplete, and which workflow to continue next.

## Alternative Scenarios

- the user reviews a high-level overview before starting a new intake session
- the user checks which books still need metadata
- the user checks which books appear ready for export or review
- the user moves from a summary surface into box-level or book-level work

## Expected Outcome

The user leaves with a reliable sense of collection progress and clear next-step options, even if the specific overview screen later changes form.

## Related Screens

Informational only.

- `#/dashboard`
- `#/boxes`
- `#/boxes/:id?filter=...`
- `#/books/:id`
- `#/export`

## Open Questions

- which collection-level states are important enough to preserve as first-class signals across implementations
- whether future Blazor views should emphasize overview metrics, work queues, or storage context more strongly
- how much of the current recent-books and featured-boxes behavior is truly durable product behavior

## Future Automation

- Playwright tutorial coverage: likely yes
- smoke-test candidate: yes
- current readiness: `Draft Automatable`
- future Blazor parity notes: compare whether the user can assess collection progress and continue work, not whether one dashboard layout is preserved

## Automation Contract

### Start Route

Current best static-demo starting point is `#/dashboard`.

Other summary-oriented routes may later serve the same intent.

### Stable User-Facing Anchors

- `Home`
- `Scan Box QR`
- `Scan ISBN`
- `Add Book`
- `Export`
- collection summary labels such as total boxes or total books
- visible sections for recent books or collections

These anchors are current user-facing affordances, not guaranteed long-term selectors.

### Main User Actions

- open a collection overview surface
- inspect current collection summaries or highlighted work
- choose the next workflow based on visible state

### Expected Observations

- the user can tell that the collection contains books, boxes, or both
- the user can identify at least one meaningful next action from the current collection state
- the user can move from overview into more specific work

### Known Fragility

- the current dashboard hero and promotional copy are intentionally non-contractual
- exact metrics and section ordering may change
- some summary values depend on seeded demo data
