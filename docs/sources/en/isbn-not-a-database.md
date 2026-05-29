---
source_map_for: isbn-not-a-database
language: en
status: draft
---

# Source Map — ISBN Is Not a Database

## Claims and Evidence

| Claim | Repository evidence | External source | Notes |
|---|---|---|---|
| ISBN identifies edition, not work | `AGENTS.md:642` — "Do not require ISBN" | ISBN agency specs | Different editions have different ISBNs |
| Not every book has an ISBN | Project scope in `AGENTS.md` (pre-1970, former Yugoslav, self-published) | UNESCO ISBN manual | Pre-1970 books have no ISBN |
| ISBN does not describe condition or provenance | `AGENTS.md:2.7` Preserve Provenance | — | Condition and provenance are separate domain models |
| ISBN does not describe location | `AGENTS.md:2.8` Optimize for Storage Logistics | — | StorageLocation is a separate entity |
| ISBN can be mispressed, misread, or reused | `static-demo/app.js` — `normalizeIsbn` validates checksum | — | Checksum validation catches single-digit errors only |
| Let Books uses a fallback chain: OL first, then Let Books API, then manual | `static-demo/app.js:2269-2435` (`lookupMetadataByIsbn`, `fetchOpenLibraryMetadata`, `fetchLetBooksMetadata`) | — | Full implementation in the static demo |
| No single provider is mandatory | `static-demo/app.js` — each provider returns an `outcome` string, manual entry is always available | — | Provider outcome types: found, not_found, provider_unavailable, rate_limited, skipped |
| Let Books metadata API is the fallback for the Slovenian ISBN `9789610167525` | `README.md:79-81` — test ISBNs documentation | `https://api.letbooks.org/isbn/9789610167525` | Regression test case |
| Manual entry is the permanent fallback | `docs/book-metadata.md:152-159` — Manual Entry Fallback section | — | "Do not block the user when enrichment fails" |

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

- All claims about the codebase were verified against the current `main` branch (commit `2ca927c`)
- The Open Library API returns author references (`/authors/OL...A`) that require a second API call to resolve; the static demo handles this in `fetchOpenLibraryMetadata` at line 2396
- The Let Books metadata API endpoint is configurable via a `<meta>` tag or query parameter, documented in `docs/book-metadata.md:175-177`
