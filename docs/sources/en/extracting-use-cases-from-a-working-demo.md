---
source_map_for: extracting-use-cases-from-a-working-demo
language: en
status: draft
---

# Source Map - Extracting Use Cases From a Working Demo

## Claims and Evidence

| Claim | Repository evidence | External source | Notes |
|---|---|---|---|
| Let Books already separates product specification from implementation guidance | `AGENTS.md` and `AGENTS-Implementation.md` | — | Supports the article's distinction between durable intent and evolving implementation |
| The repository already treats the static demo as a current implementation surface rather than the whole product | `README.md` and `docs/blog/README.md` | — | Useful for framing demo behavior as evidence, not silent authority |
| The new use-case layer was intentionally extracted as durable capabilities rather than screen descriptions | `docs/use-cases/README.md` and `docs/use-cases/use-case-map.md` | — | Core evidence for the article's main move |
| The durable use cases are receive books, catalog books, organize storage, review collection state, and share for external review | `docs/use-cases/UC-001-receive-books-into-the-collection.md`, `docs/use-cases/UC-002-catalog-physical-books.md`, `docs/use-cases/UC-003-organize-and-inspect-physical-storage.md`, `docs/use-cases/UC-004-review-collection-state.md`, and `docs/use-cases/UC-005-share-a-collection-for-external-review-and-capture-decisions.md` | — | These are the concrete extracted capabilities used in the example |
| A box-centric demo surface can be reframed into a more durable storage-context use case | `docs/use-cases/UC-003-organize-and-inspect-physical-storage.md` | — | Supports the concrete UC-003 example added to the article |
| The article now shows a representative excerpt from the real UC-003 document rather than only describing the artifact | `docs/use-cases/UC-003-organize-and-inspect-physical-storage.md` | — | Supports the rendered documentation excerpt in the article example section |
| The repository now documents the chain from use case to automation contract to scenario tutorial and future parity | `docs/use-cases/README.md` and `docs/use-cases/use-case-map.md` | — | Supports the governance section of the article |
| The repository now treats use-case diagrams as durable capability and governance artifacts rather than UI maps | `docs/use-cases/README.md` and `docs/diagrams/README.md` | — | Supports the article's explanation of what the diagrams show and what they intentionally avoid |
| The evolving artifact chain is intended to preserve understanding at different levels rather than freeze one implementation | `README.md`, `docs/use-cases/README.md`, `docs/use-cases/use-case-map.md`, and `docs/diagrams/README.md` | — | Supports the section about the repository's layered evolution |
| Mermaid source is authoritative and matching SVGs should be regenerated and committed together | `docs/diagrams/README.md` | — | Supports the article's explanation of editable source and published artifact separation |
| Public blog writing should use specs and docs as canonical evidence instead of executable source | `docs/blog/README.md` and `docs/sources/README.md` | — | Supports the article's modest but explicit evidence policy |

## External Sources Referenced

- None required for the current draft

## Diagrams

| Diagram | Source | Rendered |
|---|---|---|
| Use-Case Overview | `docs/diagrams/blog/extracting-use-cases-from-a-working-demo/en/use-case-overview.mmd` | `docs/diagrams/blog/extracting-use-cases-from-a-working-demo/en/use-case-overview.svg` |
| Capability Relationships | `docs/diagrams/blog/extracting-use-cases-from-a-working-demo/en/capability-relationships.mmd` | `docs/diagrams/blog/extracting-use-cases-from-a-working-demo/en/capability-relationships.svg` |
| Automation and Parity Chain | `docs/diagrams/blog/extracting-use-cases-from-a-working-demo/en/automation-parity-chain.mmd` | `docs/diagrams/blog/extracting-use-cases-from-a-working-demo/en/automation-parity-chain.svg` |

## Review Notes

- Keep the article grounded in documentation and specification layers, not in static-demo source code.
- Demo behavior may be discussed as implementation status or practical example, but not as canonical editorial proof.
- The diagrams are conceptual models, not UI maps.
