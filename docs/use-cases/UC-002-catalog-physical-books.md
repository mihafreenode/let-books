# UC-002 Catalog Physical Books

## Purpose

Create, complete, correct, and enrich records for physical book copies so the collection becomes useful for review, retrieval, and donation workflows.

## User Goal

Turn a physical book in hand into a usable collection record with trustworthy metadata.

## Why This Exists

The application is not only a storage tracker.

It must preserve enough metadata about each physical copy that later review, export, matching, and retrieval remain practical.

## Actors

- donor
- collection owner
- contributor
- metadata reviewer

## Preconditions

- the physical book already exists in the collection or is being recorded now
- the user can open or create a book record
- the user has enough information to enter metadata manually or trigger assisted capture

## Main Success Scenario

The user opens a physical book record that needs cataloging or correction.

The user enters or confirms the core metadata needed to make the book identifiable and useful.

The user supplements the record with photos, notes, language, or provider-sourced metadata when useful.

The user saves the record in a state that is more complete, more trustworthy, or more review-ready than before.

## Alternative Scenarios

- the user catalogs the book entirely by hand
- the user starts with only minimal metadata and improves the record later
- the user uses ISBN lookup to populate fields and then corrects or supplements the result
- the user edits an existing record because earlier intake was intentionally incomplete
- the user keeps uncertain information visible as tentative rather than pretending it is final

## Expected Outcome

The physical copy has a usable record that is identifiable enough for later browsing, export, review, and retrieval.

## Related Screens

Informational only.

- `#/books/new`
- `#/books/:id`
- `#/books/:id/edit`
- `#/scanner?mode=isbn`

## Open Questions

- how should the future implementation represent confidence or provenance for assisted metadata in the main editing flow
- should detailed cataloging and quick intake become more visibly separate workflows later
- which fields are truly required for a book to be considered review-ready

## Future Automation

- Playwright tutorial coverage: likely yes
- smoke-test candidate: yes
- current readiness: `Draft Automatable`
- future Blazor parity notes: compare whether the user can create and improve a physical book record without depending on one exact form layout

## Automation Contract

### Start Route

Current best static-demo starting points are `#/books/new`, `#/books/:id`, and `#/books/:id/edit`.

### Stable User-Facing Anchors

- `Add Book`
- `Edit`
- labeled metadata fields such as title, authors, publisher, year, ISBN, language, and notes
- `Save`
- photo actions such as capture, upload, or remove

These anchors are inferred from current user-facing copy and may change as the demo evolves.

### Main User Actions

- open a book record
- enter or revise metadata
- optionally add or replace photos
- optionally use assisted metadata capture
- save the updated record

### Expected Observations

- the record shows updated metadata after save
- the saved book remains accessible as an individual item
- the cataloged book becomes more understandable in lists, box views, and review exports

### Known Fragility

- exact field labels and grouping may evolve
- photo capture depends on device capabilities
- saved book ids are generated locally
- the current demo does not yet expose the full provenance and confidence model described in the broader project specification
