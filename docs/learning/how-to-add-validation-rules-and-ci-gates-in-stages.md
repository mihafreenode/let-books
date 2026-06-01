---
title: "How to Add Validation Rules and CI Gates in Stages"
summary: >-
  This guide explains how to add validation rules and CI checks incrementally so a project can improve consistency and reduce drift without trying to automate everything at once.
topics:
  - validation
  - ci-cd
  - spec-driven-development
---
# How to Add Validation Rules and CI Gates in Stages

## Summary

This guide explains how to add validation rules and CI checks incrementally so a project can improve consistency and reduce drift without trying to automate everything at once.

## Why staged enforcement matters

Teams often know they need stronger validation, but they make one of two mistakes.

Either they leave quality checks informal for too long, or they try to introduce a large rigid CI system all at once and create frustration.

A staged approach works better.

It lets the project turn repeated review expectations into repeatable checks over time.

## Start from recurring mistakes

The best validation rules usually begin as repeated human review findings.

Ask:

- what mistakes keep happening
- what rules are easy to forget
- what structure must stay consistent across the repo
- what quality checks would save reviewer time

If the same issue appears several times, it is a good candidate for automation.

## Validation should follow the authority chain

Validation rules should reinforce documented expectations, not replace them.

That means:

- spec defines the rule
- docs explain the rule
- validation checks the rule where practical
- CI runs the validation consistently

This keeps the project from enforcing rules that were never actually decided.

## A useful maturity model

### Stage 1: manual review checklist

Start by naming the rule explicitly.

Examples:

- all new user-visible text must be localizable
- docs must separate current state from future plans
- new public articles must cite specs and docs, not source files

At this stage, the rule is real, but still enforced by humans.

### Stage 2: lightweight local validation

Add a small script or structured check that contributors can run locally.

Examples:

- missing locale-key detection
- required-file presence checks
- metadata-generation validation
- link resolution checks

This stage reduces avoidable errors before CI even runs.

### Stage 3: CI visibility

Run the check in CI, even if it is initially non-blocking.

This gives the team visibility into how often the rule fails and whether the check itself needs refinement.

### Stage 4: blocking CI gate

Once the rule is stable and understood, make it required.

At this point, the project has moved from informal expectation to enforceable standard.

## What to automate first

Good early candidates are usually:

- structural consistency
- required files
- localization completeness
- formatting or syntax validity
- broken internal links
- forbidden editorial citations

For multilingual publishing, treat mixed-language reader-facing content as one of the earliest high-value CI gates. A page with a localized title but an English summary or English tags is not partially successful. It is incomplete.

These checks are usually cheap, objective, and high-value.

## What not to force too early

Some checks are valuable but may need time before becoming hard gates.

Examples:

- spellcheck in many languages
- screenshot or visual regression checks
- accessibility checks with tuning still in progress
- style or wording rules that are not yet stable

These can begin as advisory signals before becoming mandatory.

## Let Books examples

The repository already documents several validation patterns, including:

- localization smoke testing
- JSON syntax validation
- required file checks
- SEO metadata generation
- optional spellcheck and linting
- deployment automation

The docs and style guides also define editorial rules that can become validation targets over time, such as using specs and docs as canonical evidence for public articles.

That makes Let Books a good example of incremental enforcement rather than all-at-once process.

## A practical rule-conversion workflow

Use this pattern when adding a new validation rule:

1. identify the repeated review problem
2. write the rule clearly in docs or guidance
3. add a local script or check if practical
4. run it in CI as visible feedback
5. make it blocking only when stable

This creates less friction than introducing a hard gate before the team understands the rule.

## Questions to ask before adding a gate

1. Is the rule clearly documented?
2. Is the check reliable enough to trust?
3. Will contributors understand how to fix failures?
4. Does the value of the check justify the friction?
5. Should it start as warning-only before becoming required?

## AI-assisted projects need this even more

AI increases the volume of changes and the speed of change. That means more opportunities for inconsistency.

It also makes fast feedback more valuable. The practical question is often not whether AI can produce a perfect first attempt. The more useful question is whether the environment can reliably identify the next problem to solve.

Validation and CI are not there to slow teams down. They are there to keep speed from erasing important boundaries.

In spec-driven work, the goal is not maximum automation. The goal is reliable reinforcement of the rules that matter most.

## The durable lesson

The strongest validation systems usually do not appear fully formed. They grow by turning repeated human judgment into documented, reviewable, enforceable checks.

That staged path is often the most realistic way to make a project stricter without making it brittle.

## Source-first remediation checklist

When a validation rule fails:

1. inspect source markdown first
2. inspect localized metadata next
3. inspect generation inputs and registries
4. regenerate artifacts
5. inspect generated HTML only after source-level checks

Do not patch generated output if the source localization is incomplete.

## Further Reading

- `../spec-driven-content-program.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `how-to-review-ai-assisted-work-against-the-spec.md`
- `../wiki/spec-driven-development.md`
- `../blog/en/documentation-is-part-of-the-product.md`
