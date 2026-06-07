# UC-003 Organize And Inspect Physical Storage

## Purpose

Maintain a useful relationship between the digital collection and the real physical containers, shelves, and boxes where books are stored.

## User Goal

Find books, understand what is inside a container, and work from real storage context instead of abstract records alone.

## Why This Exists

The product exists to make donation and preservation practical, not only to store bibliographic data.

Users need to know where books are, what is inside each storage container, and how to continue intake or retrieval from that physical context.

## Actors

- donor
- collection owner
- contributor
- picker or reviewer in later workflows

## Preconditions

- the collection contains at least one storage container or box, or the user can create one
- books may already be assigned to storage locations, or the user is in the process of assigning them

## Main Success Scenario

The user works from a physical storage context such as a box.

The user inspects the contents of that container and understands what books are present, what state they are in, and what actions may be needed next.

The user continues from that storage context to intake, editing, or later retrieval work without losing the relationship between the digital record and the physical location.

## Alternative Scenarios

- the user opens a specific box to browse covers and verify contents
- the user starts from storage first and adds new books directly into that container
- the user uses status filters to inspect only missing, ready, or exported items
- the user uses QR or other label-driven navigation later, but the underlying storage intent remains the same

## Expected Outcome

The user can meaningfully work from physical storage context and can trust that the application reflects what is inside each container well enough for ongoing inventory and retrieval work.

## Related Screens

Informational only.

- `#/boxes`
- `#/boxes/:id`
- box-linked actions into `#/books/new?boxId=...`
- box-linked actions into `#/scanner?mode=isbn&boxId=...`

## Open Questions

- how should the future implementation generalize from demo boxes to fuller location hierarchies such as room, shelf, and box
- which storage-level summaries are important enough to preserve across implementations
- how much of the current box detail screen should remain storage-centric versus workflow-centric

## Future Automation

- Playwright tutorial coverage: likely yes
- smoke-test candidate: yes
- current readiness: `Stable Candidate`
- future Blazor parity notes: compare whether a user can inspect and continue work from real storage context regardless of screen layout

## Automation Contract

### Start Route

Current best static-demo starting points are `#/boxes` and `#/boxes/:id`.

### Stable User-Facing Anchors

- `Boxes`
- `Open`
- `Show QR`
- box code and box name text
- filter chips such as `All`, `Missing Metadata`, `Ready`, and `Exported`
- box-context actions such as `Add Book Here` and `Scan ISBN`

These anchors are currently visible and meaningful to users, but they are still draft automation hints rather than permanent contracts.

### Main User Actions

- open the storage overview
- choose a storage container
- inspect the contents and current states inside that container
- continue into intake or editing from the chosen storage context

### Expected Observations

- the user can see which books belong to a specific container
- the user can distinguish items by visible status or completeness cues
- the user can continue work without needing to reconstruct the physical context manually

### Known Fragility

- seed ordering and generated ids are not stable
- exact box-card visuals and hero composition may change
- later implementations may use richer location hierarchy terminology instead of a box-only surface
