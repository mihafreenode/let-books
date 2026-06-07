---
source_map_for: ai-technical-debt-is-not-about-ai-generated-code
language: en
status: draft
---

# Source Map - AI Technical Debt Is Not About AI-Generated Code

## Claims and Evidence

| Claim | Repository evidence | External source | Notes |
|---|---|---|---|
| The repo already treats preserved rationale, assumptions, and validation layers as part of dependable AI-assisted work | `AGENTS.md`, `AGENTS-Implementation.md`, `docs/wiki/ai-assisted-knowledge-work.md`, `docs/wiki/spec-driven-development.md`, `docs/wiki/documentation-traceability.md` | — | Supports the article's argument that code is not the only artifact worth preserving |
| Validators and documented workflow layers reduce dependence on memory and tribal knowledge | `tools/README.md`, `docs/wiki/validation-layers.md`, `docs/blog/en/documentation-is-part-of-the-product.md` | — | Supports the article's framing of understanding preservation as engineering infrastructure |
| Public editorial content in this repo already distinguishes canonical docs and specs from volatile implementation details | `docs/style-guide/publishing/README.md`, `AGENTS-Implementation.md` | — | Supports the article's argument that reviewable understanding should be a first-class artifact |
| AI-assisted work is useful when outputs remain reviewable rather than authoritative | `docs/blog/en/ai-as-an-oracle.md`, `docs/wiki/ai-assisted-knowledge-work.md` | — | Reinforces the article's non-hype position |

## External Sources Referenced

- General software engineering experience with maintainability, business-rule drift, and knowledge loss
- Common SaaS billing and access-control workflows used as a realistic example rather than as a product-specific claim

## Diagrams

| Diagram | Source | Rendered |
|---|---|---|
| Review loops | `../../diagrams/blog/ai-technical-debt-is-not-about-ai-generated-code/en/review-loops.mmd` | `../../diagrams/blog/ai-technical-debt-is-not-about-ai-generated-code/en/review-loops.svg` |
| Code only vs preserved understanding | `../../diagrams/blog/ai-technical-debt-is-not-about-ai-generated-code/en/code-only-vs-preserved-understanding.mmd` | `../../diagrams/blog/ai-technical-debt-is-not-about-ai-generated-code/en/code-only-vs-preserved-understanding.svg` |

## Review Notes

- The article deliberately attacks the common comparison against perfect human documentation and replaces it with the more realistic comparison against missing context.
- The billing-suspension example exists to demonstrate reviewability of visible assumptions, not to imply that AI-generated understanding is self-validating.
- The diagrams use color semantically rather than decoratively: blue for source-of-truth requests, orange for preserved understanding, green for implementation, purple for review, and red for missing-understanding risk.
