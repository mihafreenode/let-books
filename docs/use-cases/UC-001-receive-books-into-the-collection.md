# UC-001 Receive Books Into The Collection

## Purpose

Capture the fact that physical books have entered the collection and associate them with a storage context quickly enough that the user can continue working through real boxes and shelves.

## User Goal

Record newly received books without needing to finish full cataloging first.

## Why This Exists

The product must remain useful during fast, real-world intake sessions where users may only have time to assign books to a box, capture a minimal identifier, and move on.

## Actors

- donor
- collection owner
- contributor

## Preconditions

- the user can access the collection workspace on the current device
- at least one storage location or box can be chosen or created during intake
- the user has one or more physical books in hand

## Main Success Scenario

The user begins an intake session for a physical box or loose group of books.

The user records each book as present in the collection with enough information to avoid losing track of it.

The user associates each received book with a storage context so the book can be found again later even if metadata is still incomplete.

The user continues to the next book without being blocked by missing metadata.

## Alternative Scenarios

- the user creates the book entry before choosing a box and assigns the storage context later
- the user starts from a box context and receives several books into that container in sequence
- the user captures a photo or ISBN during intake, but leaves full metadata review for later
- the user receives books offline and relies on local persistence until later review

## Expected Outcome

The collection now contains a traceable record for each received physical copy, and each recorded copy can be tied back to a storage context or follow-up review queue.

## Related Screens

Informational only.

- `#/books/new`
- `#/books/new?boxId=...`
- `#/boxes/:id`
- `#/scanner?mode=isbn&boxId=...`

## Open Questions

- should quick intake remain a distinct mode later, or simply a lightweight path within cataloging
- how much information should be considered the minimum acceptable received state for a physical copy
- should future Blazor flows separate receiving from richer book editing more explicitly

## Future Automation

- Playwright tutorial coverage: likely yes
- smoke-test candidate: yes
- current readiness: `Draft Automatable`
- future Blazor parity notes: compare whether a user can register a physical copy quickly without full metadata

## Automation Contract

### Start Route

Current best static-demo starting points are `#/books/new` and `#/books/new?boxId=...`.

This may later move behind a different entry surface without changing the use case.

### Stable User-Facing Anchors

- `Add Book`
- new-book title text
- labeled fields for local code, title, author, ISBN, and box assignment
- `Save`
- `Save & Add Next`

These anchors are inferred from the current demo and are not permanent selector contracts.

### Main User Actions

- begin a new book entry
- optionally assign the current box
- enter minimal identifying information
- save the current book
- optionally continue directly to the next book

### Expected Observations

- a new physical book record can be saved without full metadata completion
- the saved book can later be reopened for fuller cataloging
- when the user saves and continues, the workflow remains in intake mode for the next book

### Known Fragility

- exact title copy for the new-book screen may change
- generated book ids are not stable across sessions
- current intake and richer editing still share one form, which may evolve
- camera and photo behavior is device-specific and should not be treated as required for the core intake contract
