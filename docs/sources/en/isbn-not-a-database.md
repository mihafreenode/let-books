---
source_map_for: isbn-not-a-database
language: en
status: draft
---

# Source Map — ISBN Is Not a Database

## Claims and Evidence

| Claim | Repository evidence | External source | Notes |
|---|---|---|---|
| ISBN identifies edition, not work | `AGENTS.md` and `docs/book-metadata.md` describe an ISBN-first workflow without making ISBN mandatory | ISBN agency specs | ISBN helps identify editions, but it does not replace a complete book record |
| Not every book has an ISBN | Project scope in `AGENTS.md` emphasizes older academic materials and incomplete data | UNESCO ISBN manual | Pre-1970 books have no ISBN |
| ISBN does not describe condition or provenance | `AGENTS.md` separates provenance and condition from ISBN-based lookup concerns | — | Condition and provenance are separate domain models |
| ISBN does not describe location | `AGENTS.md` treats storage logistics as a separate first-class concern | — | `StorageLocation` is separate from bibliographic identifiers |
| ISBN can be mispressed, misread, or reused | `docs/book-metadata.md` requires normalization and checksum validation before lookup | — | Validation helps, but ISBN alone is not enough |
| Let Books uses a fallback chain: Open Library first, then Let Books metadata API, then manual entry | `docs/book-metadata.md` Lookup Order section | — | This is the canonical documented lookup order |
| No single provider is mandatory | `docs/book-metadata.md` says lookup failures must never block cataloging and manual entry must remain available | — | Provider failures fall back to manual entry |
| Let Books metadata API is part of the documented lookup chain | `docs/book-metadata.md` lists `https://api.letbooks.org/isbn/{isbn}` as the second lookup step | `https://api.letbooks.org/isbn/{isbn}` | Documented endpoint, not a guarantee of every build state |
| Manual entry is the permanent fallback | `docs/book-metadata.md` Manual Entry Fallback section | — | "Do not block the user when enrichment fails" |

## External Sources Referenced

- ISBN Agency — official ISBN user manual
- UNESCO guidelines for ISBN assignment in developing countries
- Open Library API documentation — `https://openlibrary.org/isbn/{isbn}.json`
- Let Books metadata API — `https://api.letbooks.org/isbn/{isbn}`

## Diagrams

| Diagram | Source | Rendered |
|---|---|---|
| ISBN Metadata Lookup Chain | `docs/diagrams/source/isbn-lookup-chain.mmd` | `docs/diagrams/isbn-lookup-chain.svg` |
| ISBN vs Physical Book Copy | `docs/diagrams/source/isbn-vs-physical-book.mmd` | `docs/diagrams/isbn-vs-physical-book.svg` |

Both diagrams were rendered with Mermaid CLI 11.12.0, neutral theme, transparent background.

## Review Notes

- All repository claims were aligned to current specs and docs rather than executable source files.
- If a feature already exists in a current demo or app build, mention that only as implementation status.
- The Let Books metadata API endpoint is documented in `docs/book-metadata.md`.
