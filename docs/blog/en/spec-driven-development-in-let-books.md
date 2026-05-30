---
article_id: spec-driven-development-in-let-books
canonical_language: en
language_variants:
  - ../en/spec-driven-development-in-let-books.md
  - ../sl/spec-driven-development-in-let-books.md
  - ../hr/spec-driven-development-in-let-books.md
  - ../bs/spec-driven-development-in-let-books.md
  - ../sr-Latn/spec-driven-development-in-let-books.md
  - ../sr-Cyrl/spec-driven-development-in-let-books.md
  - ../mk/spec-driven-development-in-let-books.md
  - ../sq/spec-driven-development-in-let-books.md
  - ../de/spec-driven-development-in-let-books.md
  - ../it/spec-driven-development-in-let-books.md
  - ../fr/spec-driven-development-in-let-books.md
  - ../es/spec-driven-development-in-let-books.md
title: Spec-Driven Development in Let Books
summary: How Let Books already uses specification, implementation guidance, documentation, demo constraints, and verification rules as a spec-driven delivery system.
topics:
  - spec-driven-development
  - let-books
  - documentation
  - demo-alignment
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/README.md
  - docs/Development.md
  - docs/Deployment.md
  - docs/blog/README.md
  - docs/sources/README.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/en/spec-driven-development-in-let-books.md
status: draft
---

# Spec-Driven Development in Let Books

Let Books is a useful case study for spec-driven development because the repository already contains multiple layers of product intent, not just implementation artifacts.

The project is not yet a full hosted application. It currently includes a product specification, implementation guidance, public documentation, and a static local-first demo. That makes it a good example of how a project can stay coherent before the final production stack exists.

## The specification layer

`AGENTS.md` is the core product specification. It defines the project purpose, the domain model, workflows, scope phases, localization direction, privacy rules, AI optionality, storage logic, and acceptance criteria.

This matters because it answers questions that code alone cannot answer clearly:

- Why does the product exist?
- Which workflows are first-class?
- What must work without AI?
- Which features are future ideas rather than current commitments?
- What counts as a successful first demo?

That is the difference between a project description and a real specification. A real specification constrains implementation choices.

## The tactical guidance layer

`AGENTS-Implementation.md` adds the second layer. It does not replace the product spec. It explains how delivery should happen within the repo right now.

Examples include:

- public naming rules
- documentation implementation rules
- static-site metadata expectations
- demo constraints
- localization and verification expectations
- editorial evidence policy for public writing

This is important in AI-assisted work because not every rule belongs in the long-term product specification. Some rules are tactical, editorial, or repository-specific. Keeping that distinction explicit reduces noise and avoids turning the product spec into an implementation dump.

## The current-state layer

`README.md` provides a third layer: current-state framing.

It explains what exists now, what does not exist yet, what the static demo is for, and how the published site is structured. That is a crucial piece of alignment because projects often fail when readers confuse aspiration with implementation.

In Let Books, the README explicitly separates current deliverables from future plans. That helps contributors, institutions, and reviewers understand the maturity of the project without guessing.

## The documentation layer

The docs area adds a fourth layer. `docs/README.md`, `docs/Development.md`, `docs/Deployment.md`, and the style-guide and sources areas define how knowledge should be organized, validated, and published.

This is where the repository becomes more than a codebase. It becomes a knowledge platform with:

- documentation architecture
- editorial evidence rules
- multilingual publishing structure
- deployment rules for public docs
- development and verification guidance

That is exactly the kind of scaffolding that helps AI-assisted delivery stay traceable.

## The demo layer

The static demo is important, but it is intentionally not the only authority in the repository.

The public docs and blog rules already distinguish between canonical documentation evidence and implementation status. That means the demo can validate workflows, reveal UX problems, and help external audiences understand the product, while still remaining subordinate to the documented product intent unless the documentation is updated.

This is a mature rule. Without it, prototypes often become accidental governance mechanisms. A team starts copying the prototype because it exists, not because it reflects an approved product decision.

## The verification layer

Let Books also already documents a verification mindset.

`docs/Development.md` and `docs/Deployment.md` describe validation layers such as:

- localization smoke tests
- structured file validation
- metadata generation
- required file checks
- optional spellcheck and linting
- deployment automation

Those are not just tooling details. They are evidence that the project treats quality as a repeatable system instead of a best-effort manual habit.

## Why this matters for AI-assisted delivery

If an AI assistant contributes to Let Books, it does not need to invent the product from scratch. The repository already contains a chain of intent:

1. product direction in `AGENTS.md`
2. tactical delivery rules in `AGENTS-Implementation.md`
3. current status in `README.md`
4. knowledge and publishing rules in `docs/`
5. executable prototype status in the static demo
6. validation and deployment guidance in the development and deployment docs

That chain does not eliminate mistakes. It does make them easier to detect and easier to review.

## The main lesson

Spec-driven development is not only about writing a long requirements document before coding begins.

In practice, it is about building a reliable chain between:

- product intent
- tactical rules
- public documentation
- demos
- validation
- deployment

Let Books already shows that this chain can exist before the full backend product exists.

That is one of the strongest arguments for spec-driven development in AI-assisted work: the clearer the chain of intent, the less likely fast output is to become fast confusion.

## Other Languages

- [Slovenščina](../sl/spec-driven-development-in-let-books.md)
- [Hrvatski](../hr/spec-driven-development-in-let-books.md)
- [Bosanski](../bs/spec-driven-development-in-let-books.md)
- [Srpski (latinica)](../sr-Latn/spec-driven-development-in-let-books.md)
- [Српски (ћирилица)](../sr-Cyrl/spec-driven-development-in-let-books.md)
- [Македонски](../mk/spec-driven-development-in-let-books.md)
- [Shqip](../sq/spec-driven-development-in-let-books.md)
- [Deutsch](../de/spec-driven-development-in-let-books.md)
- [Italiano](../it/spec-driven-development-in-let-books.md)
- [Français](../fr/spec-driven-development-in-let-books.md)
- [Español](../es/spec-driven-development-in-let-books.md)
