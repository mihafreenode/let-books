# Spec-Driven Content Program

## Summary

This document defines the current Let Books content program for spec-driven development, AI-assisted delivery, documentation alignment, demo alignment, and validation-oriented product work.

It is the working editorial roadmap for a balanced publishing model:

- thought-leadership blog content for a broad public audience
- practical learning guides for technical contributors and students
- evergreen wiki pages for reusable reference
- source maps for traceable evidence
- short-form LinkedIn derivatives for distribution

## Purpose

The repository already contains a strong specification and documentation base in `AGENTS.md`, `AGENTS-Implementation.md`, `README.md`, `docs/Development.md`, and `docs/Deployment.md`.

This program turns that base into a coherent public knowledge track about:

- spec-driven development
- AI-assisted software delivery
- documentation as an operating asset
- demo and specification alignment
- Markdown, tests, validation rules, and CI/CD as product memory

## Audience

This program is intentionally mixed.

- Broad readers should be able to understand the main ideas without deep implementation knowledge.
- Institutions should see governance, traceability, maintainability, and long-term alignment value.
- Students and technical contributors should get practical workflows, examples, and reusable methods.

## Channel Split

### Blog

The blog should lean toward thought leadership.

- explain why spec-driven development matters
- explain why AI increases the need for explicit product intent
- use Let Books as a grounded case study
- remain readable for non-technical audiences

### Learning

Learning guides should lean technical and practical.

- show repeatable workflows
- connect product spec to implementation decisions
- explain how to review AI-assisted work
- show how to add validation and CI gates incrementally

### Wiki

Wiki pages should be compact and evergreen.

- define concepts
- explain boundaries between spec, docs, demo, and implementation
- support internal linking from articles and guides

### Sources

Every substantial public article should have a source map.

- repository evidence should come from specs and docs
- implementation status can be noted separately
- source-code paths should not be used as canonical editorial proof

### LinkedIn

LinkedIn content should be derived from flagship articles instead of developed as separate long-form originals.

Each flagship article should produce:

- one broad-audience post
- one institution/governance variant
- one student/learning variant

## Core Thesis

The default framing for this program is:

> AI makes it easier to generate code and easier to generate drift. Specs, docs, demos, tests, and CI are what keep a product coherent.

Supporting thesis options:

- AI needs specs more, not less.
- A spec is the memory of an AI-assisted product team.
- Documentation is part of the product, not just commentary around it.

## First-Wave Deliverables

### Blog articles

1. `blog/en/spec-driven-development-for-ai-projects.md`
2. `blog/en/spec-driven-development-in-let-books.md`

### Learning guides

1. `learning/how-to-write-a-spec-that-ai-can-follow.md`
2. `learning/how-to-turn-a-product-spec-into-an-implementation-plan.md`
3. `learning/how-to-keep-spec-docs-demo-and-code-aligned.md`
4. `learning/how-to-review-ai-assisted-work-against-the-spec.md`
5. `learning/how-to-add-validation-rules-and-ci-gates-in-stages.md`

### Wiki pages

1. `wiki/spec-driven-development.md`
2. `wiki/demo-spec-alignment.md`

### Source maps

1. `sources/en/spec-driven-development-for-ai-projects.md`
2. `sources/en/spec-driven-development-in-let-books.md`

## Full Program Backlog

### Blog backlog

1. `spec-driven-development-for-ai-projects`
2. `why-product-specs-still-matter-when-ai-writes-code`
3. `documentation-is-part-of-the-product`
4. `when-the-demo-is-evidence-and-when-it-is-not`
5. `spec-driven-development-in-let-books`
6. `markdown-tests-validation-and-ci-as-product-memory`

### Learning backlog

1. `how-to-write-a-spec-that-ai-can-follow`
2. `how-to-turn-a-product-spec-into-an-implementation-plan`
3. `how-to-keep-spec-docs-demo-and-code-aligned`
4. `how-to-review-ai-assisted-work-against-the-spec`
5. `how-to-add-validation-rules-and-ci-gates-in-stages`

### Wiki backlog

1. `spec-driven-development`
2. `product-specification`
3. `implementation-guidance`
4. `demo-spec-alignment`
5. `documentation-traceability`
6. `validation-layers`
7. `markdown-in-product-development`

## Article Structure Guidance

Major blog articles in this track should generally use this structure:

1. state the problem
2. describe the common failure mode
3. define the principle
4. show a practical workflow
5. ground it in a Let Books example
6. explain what it means for AI-assisted teams
7. close with a durable takeaway

## Let Books Alignment Rules

- Treat `AGENTS.md` as the canonical product and workflow specification.
- Treat `AGENTS-Implementation.md` as tactical delivery guidance.
- Treat `README.md` as current-state framing.
- Treat `docs/Development.md` and `docs/Deployment.md` as execution and verification references.
- Treat the static demo as implementation status and workflow evidence, not the primary editorial proof text for public writing.
- Keep manual workflows, traceability, and AI optionality central to the narrative.

## LinkedIn Derivative Pattern

Every flagship article should have a short derivative pack.

### Broad-audience version

- strong one-sentence thesis
- one concrete example
- one closing lesson

### Institutional version

- governance angle
- traceability angle
- maintenance and onboarding angle

### Student version

- what to learn
- common beginner mistake
- one practical exercise or takeaway

## Publication Sequence

Recommended publishing order:

1. `spec-driven-development-in-let-books`
2. `spec-driven-development-for-ai-projects`
3. `how-to-write-a-spec-that-ai-can-follow`
4. `how-to-turn-a-product-spec-into-an-implementation-plan`
5. `how-to-keep-spec-docs-demo-and-code-aligned`
6. `how-to-review-ai-assisted-work-against-the-spec`
7. `how-to-add-validation-rules-and-ci-gates-in-stages`
8. `demo-spec-alignment`

This sequence starts with a grounded case study, expands to a broader thesis, then gives readers practical workflows for writing, planning, review, and incremental enforcement before moving into alignment and reference pages.

## Further Reading

- `../README.md`
- `../AGENTS.md`
- `../AGENTS-Implementation.md`
- `README.md`
- `blog/README.md`
- `learning/README.md`
- `wiki/README.md`
- `sources/README.md`
