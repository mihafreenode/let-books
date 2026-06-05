---
source_map_for: ai-as-an-oracle
language: en
status: draft
---

# Source Map - AI as an Oracle

## Claims and Evidence

| Claim | Repository evidence | External source | Notes |
|---|---|---|---|
| Let Books already treats AI output as something that must be checked against explicit repository standards | `AGENTS.md`, `AGENTS-Implementation.md`, `docs/wiki/ai-assisted-knowledge-work.md`, `docs/wiki/spec-driven-development.md` | — | Supports the article's argument that verification belongs in the workflow rather than after it |
| The repository relies on validators, generated metadata, and structural checks instead of memory alone | `tools/README.md`, `docs/wiki/validation-layers.md`, `docs/Development.md`, `docs/Deployment.md` | — | Supports the claim that verification becomes infrastructure |
| Documentation governance and traceability matter because plausible output should not silently become repository truth | `docs/wiki/documentation-traceability.md`, `docs/blog/en/documentation-is-part-of-the-product.md`, `docs/blog/en/spec-driven-development-in-let-books.md` | — | Supports the article's emphasis on preserved rationale and documented standards |
| Localization work in Let Books already demonstrates why fluent AI output still needs review for modality, terminology, and semantic parity | `docs/wiki/let-books-localization-case-study.md`, `docs/wiki/localization-governance.md`, `docs/blog/en/ai-will-not-replace-translators.md` | — | Supports the localization verification examples |
| The article uses oracle as an engineering analogy rather than a formal claim about LLM architecture | `docs/wiki/ai-assisted-knowledge-work.md` | Standard CS and cryptography usage of the word "oracle" | Keep the analogy practical and non-mystical |

## External Sources Referenced

- General computer science usage of "oracle" as a black-box question-answering mechanism
- General cryptography usage of "oracle" for queryable services with hidden internals

## Diagrams

| Diagram | Source | Rendered |
|---|---|---|
| None yet | — | — |

## Review Notes

- The article deliberately centers verification culture rather than prompt craft.
- The conclusion keeps the oracle analogy practical and avoids personifying AI.
