---
source_map_for: spec-driven-development-for-ai-projects
language: en
status: draft
---

# Source Map - Spec-Driven Development for AI Projects

## Claims and Evidence

| Claim | Repository evidence | External source | Notes |
|---|---|---|---|
| Let Books treats product specification as a first-class artifact | `AGENTS.md` defines purpose, philosophy, domain model, workflows, and acceptance criteria | — | This supports the article's argument that explicit product intent exists outside implementation |
| Tactical delivery rules are separated from the product specification | `AGENTS-Implementation.md` explains that it complements `AGENTS.md` and should hold evolving implementation guidance | — | This shows a layered spec model rather than one undifferentiated document |
| Public writing in the repo should use specs and docs as canonical evidence | `docs/blog/README.md`, `docs/sources/README.md`, and `docs/style-guide/publishing/README.md` | — | This supports the distinction between documented truth and implementation status |
| The repository separates current-state framing from future plans | `README.md` lists what exists now and what does not exist yet | — | Useful evidence for anti-drift documentation practice |
| The repository already documents validation and deployment checks | `docs/Development.md` and `docs/Deployment.md` describe smoke tests, metadata generation, file checks, and deployment automation | — | Supports the article's discussion of validation and CI as part of product memory |
| The content program explicitly frames specs, docs, demos, tests, and CI as a coherence system | `docs/spec-driven-content-program.md` | — | Internal editorial framing for this series |

## External Sources Referenced

- None required for the current draft

## Diagrams

| Diagram | Source | Rendered |
|---|---|---|
| None yet | — | — |

## Review Notes

- The draft is intentionally grounded in repository documentation rather than executable source.
- Demo behavior may be discussed as implementation status, but not as canonical proof text.
