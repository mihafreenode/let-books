# Publishing

## Summary

`docs/style-guide/publishing/` defines the weekly editorial workflow and supporting tooling.

## Purpose

Use this area to standardize how topics move from repository evidence to approved and localized published content.

## Editorial Validation Rules

- Blog and source-map evidence must come from specs and docs.
- Treat `docs/**`, `AGENTS.md`, and related top-level documentation as canonical editorial references.
- Do not use `static-demo/`, future app source files, or test code as quoted repository evidence in public articles.
- CI validation in `tools/validate-blog.mjs` should fail when editorial content cites app/source paths instead of docs/specs.
- Semantic localization validation should warn on likely parity drift and fail only when a localized article appears to have lost a major concept or conclusion from the English source.
- Publication review should include rendered output checks for diagrams and other generated visual assets where practical.
- Do not approve localized publication work solely because the source text was translated. Review the final published result.
- Meaning parity and natural language usage matter more than literal word-by-word correspondence.
- Document structure is not merely formatting. Publication review should reject accidental drift in list nesting, blockquotes, code examples, or heading structure between the canonical source and localized Markdown unless there is an explicit localization reason.
- Review high-visibility localized text more aggressively because awkward wording is more exposed in titles, headings, summaries, labels, and navigation.
- Treat translated-sounding wording as a review signal even when the wording is technically correct.
- Published Mermaid diagrams should follow the repository rendering standard: `htmlLabels: false`, unless a documented exception explains why HTML labels are required.
- Publication review should reject avoidable micro-section fragmentation when it weakens explanation or obscures the reasoning chain.
- Review article structure for durable teaching value, not only scanability.
- If a sequence of short sections is really one argument, prefer merging them into a more coherent section before publication.
- Lists are acceptable when they improve clarity, but explanatory reasoning should remain in prose when the article is teaching how a conclusion was reached.

## Structure

- publishing workflow rules
- approval rules
- tooling notes
- Ubuntu environment setup

## Related Topics

- Article workflow
- Source maps
- Contributor tooling

## Related Articles

- `../../blog/README.md`

## Related Learning Guides

- `../../learning/README.md`

## Related Wiki Pages

- `../../wiki/README.md`

## Further Reading

- `ubuntu-tooling.md`
- `../writing/README.md`
- `../../sources/README.md`
- `../localization/semantic-parity.md`
