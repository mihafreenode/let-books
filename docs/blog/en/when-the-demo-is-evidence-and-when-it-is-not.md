---
article_id: when-the-demo-is-evidence-and-when-it-is-not
canonical_language: en
language_variants:
  - ../en/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sl/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../hr/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../bs/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sr-Latn/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sr-Cyrl/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../mk/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sq/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../de/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../it/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../fr/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../es/when-the-demo-is-evidence-and-when-it-is-not.md
title: When the Demo Is Evidence and When It Is Not
summary: How to use demos and prototypes as useful implementation evidence without letting them silently become the product specification.
topics:
  - demo-alignment
  - spec-driven-development
  - product-review
  - documentation
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/blog/README.md
  - docs/sources/README.md
  - docs/style-guide/publishing/README.md
  - docs/style-guide/writing/README.md
  - docs/Development.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/en/when-the-demo-is-evidence-and-when-it-is-not.md
status: draft
---

# When the Demo Is Evidence and When It Is Not

Demos are powerful because they turn abstract ideas into something people can react to. A workflow that sounds reasonable in a planning note may reveal real friction the moment someone tries it on a phone, in a storage room, or under time pressure.

That is the good side of demos.

The dangerous side is that once a prototype exists, people often start treating it as product truth whether or not anyone officially made that decision.

## Why prototypes become accidental authority

Visible things are persuasive. A working screen often carries more informal authority than a written rule, even when the screen was built as an experiment.

That is understandable. People trust what they can see.

But in product work, especially AI-assisted product work, that instinct can create confusion.

A demo might show:

- a fast way to test a workflow
- a temporary compromise
- a simplified local-only implementation
- an unfinished interpretation of the intended product

None of those automatically means the demo should redefine the product.

## When the demo is good evidence

A demo is valuable evidence when it helps answer questions such as:

- Does the workflow feel usable?
- Does the mobile layout support the real task?
- Is the scanning or intake flow understandable?
- Do users react positively or negatively to the sequence of steps?

In those cases, the demo is evidence about usability, feasibility, sequencing, and communication.

That kind of evidence is extremely useful.

## When the demo is not the authority

A demo should not silently outrank the product specification.

It is not the right primary authority for questions such as:

- Is this workflow officially in scope?
- Is this a temporary shortcut or a product commitment?
- Does this behavior override an existing product rule?
- Should public documentation describe this as the intended system?

Those questions require an explicit decision and a documentation update.

## The Let Books rule is a strong model

The repository already contains a healthy editorial rule for this. Public writing should treat specifications and documentation as canonical evidence, while demo or app behavior can be mentioned as implementation status.

That rule matters because it prevents accidental governance by prototype.

If the static demo reveals a better box workflow, better mobile flow, or better intake interaction, that is valuable. But the better workflow should become real authority only after the specification and related docs are updated.

## Why this matters more with AI

AI amplifies whatever looks most concrete in the current context.

If the most concrete thing in the repo is a demo, assistants and even human contributors may copy its behavior without asking whether it matches the intended product boundary.

That can be useful when the demo is already aligned.
It can also spread temporary assumptions quickly when it is not.

This is why teams need a visible authority order.

## A practical authority chain

For work like this, a useful order is:

1. product specification
2. implementation guidance
3. current-state documentation
4. demo or prototype behavior
5. tests and validation

The demo still matters. It just matters inside a documented system instead of replacing one.

## What to do when the demo teaches you something new

Sometimes the prototype is right and the spec is wrong, incomplete, or too abstract.

That is not a failure. It is exactly one of the reasons to build demos.

The right response is:

1. record the discovery
2. decide whether the new behavior should become intentional
3. update the specification and docs
4. then preserve alignment going forward

The wrong response is to leave the docs unchanged and hope everyone remembers that the demo is now the real source of truth.

## Why institutions and students should care

Institutions need to know whether they are evaluating a concept, a prototype, or an approved workflow model.

Students need to learn that prototypes are not self-justifying. A strong software practice includes knowing when to treat implementation as evidence and when to treat it as an experiment awaiting a decision.

## The durable lesson

Demos are valuable because they make product ideas testable. They become dangerous when they quietly become policy.

The healthiest model is simple: let demos inform the product, but make specifications and documentation record the final decision.

## Other Languages

- [Slovenščina](../sl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Hrvatski](../hr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Bosanski](../bs/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Srpski (latinica)](../sr-Latn/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Српски (ћирилица)](../sr-Cyrl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Македонски](../mk/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Shqip](../sq/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Deutsch](../de/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Italiano](../it/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Français](../fr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Español](../es/when-the-demo-is-evidence-and-when-it-is-not.md)
