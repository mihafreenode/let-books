---
title: "Implementation Guidance"
summary: >-
  Implementation guidance defines how a team should deliver work inside the current repository or delivery environment without replacing the product specification itself.
topics:
  - implementation-planning
  - spec-driven-development
  - project-management
---
# Implementation Guidance

## Summary

Implementation guidance defines how a team should deliver work inside the current repository or delivery environment without replacing the product specification itself.

## Role

Implementation guidance sits below the product specification.

It helps answer questions such as:

- how public naming should work
- how docs should be structured
- which verification expectations apply now
- which repository-specific rules contributors should follow
- where tactical rules should live as the project evolves

## Difference from product specification

The product specification defines what the product is and what it must achieve.

Implementation guidance defines how contributors should carry out work within the current delivery context.

This distinction is useful because not every repository rule is a product truth, and not every product truth should be buried in tactical notes.

## Common examples

Implementation guidance often includes:

- naming and branding rules
- documentation implementation rules
- static-site or demo constraints
- verification expectations
- editing or code-generation rules
- evidence policies for public writing

These rules often live well in Markdown because they need to stay reviewable, easy to update, and close to the rest of the repository context.

## Why it matters in AI-assisted work

AI assistants often follow the nearest concrete instruction. If repository-specific rules are implicit, output becomes inconsistent quickly.

Implementation guidance makes those rules visible without polluting the product specification with tactical detail.

In practice, that means a Markdown guidance file can do two jobs at once:

- explain the workflow to a human contributor
- steer an AI agent toward the preferred tools, sequence, and constraints

## Let Books context

In Let Books, `AGENTS-Implementation.md` is the tactical guidance layer.

It covers areas such as:

- public naming
- documentation rules
- public site and docs split
- metadata and SEO rules for static pages
- static demo constraints
- localization and accessibility rules
- verification rules
- blog evidence policy

That makes it the operational companion to `AGENTS.md`, not a replacement for it.

Other Markdown guidance in the repo reinforces the same pattern. For example:

- `docs/android-debugging.md` directs debugging workflow choices such as CDP attach versus source-patch workflows
- `docs/style-guide/publishing/ubuntu-tooling.md` documents expected tools for publishing, verification, screenshots, spellcheck, and device debugging

These documents are readable as human guidance, but they also help agents choose better actions instead of guessing from generic defaults.

## Related Pages

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../learning/how-to-turn-a-product-spec-into-an-implementation-plan.md`
