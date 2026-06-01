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
