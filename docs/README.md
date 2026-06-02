# LetBooks Knowledge Platform

## Summary

`docs/` is the home of the LetBooks knowledge platform, including the Localization at Scale initiative.

It should gradually support public documentation, technical writing, learning material, terminology work, source maps, diagrams, and multilingual publishing.

## Purpose

This area exists to turn the repository into a traceable, reusable knowledge base rather than a loose collection of pages and notes.

## Program Status

The main handbook for the Localization at Scale initiative lives in `localization-at-scale-program.md`.

The current operational audit lives in `localization-audit-report.md`.

Current tracked status after the latest full docs verification pass:

```text
Localization Debt = 0
Open Defect Classes = 0
```

This status means the currently tracked localization defect classes are closed in the audited set and are backed by validation and CI coverage.

The metric should be read as a generated snapshot, not as a permanent claim. If new content types or locale families are introduced before their localized Markdown sources are completed, the tracked status must be updated to reflect the new debt until parity and semantic validation are restored.

New findings should still be treated as new defect classes, documented in the audit, and added to the Native-Speaker Review Findings corpus when relevant.

## Structure

- `knowledge-platform-bootstrap.md` records the first platform analysis pass
- `blog/` will hold future articles
- `learning/` will hold study guides and teaching material
- `topics/` will hold conceptual orientation pages between blog, wiki, and learning material
- `wiki/` will hold evergreen reference pages
- `diagrams/` will hold diagram sources and conventions
- `assets/` will hold reusable knowledge-platform assets
- `sources/` will hold source maps and evidence records
- `style-guide/` will hold writing, localization, publishing, and terminology rules
- `localization-at-scale-program.md` defines the current multilingual knowledge and governance initiative
- `localization-maintenance-system.md` documents the source-synchronized translation maintenance workflow and local Python tooling
- `localization-audit-report.md` tracks localization debt, open defect classes, and closure status
- `sl/`, `hr/`, `bs/`, `sr-Latn/`, `sr-Cyrl/`, `mk/`, `sq/`, `de/`, `it/`, `fr/`, and `es/` hold locale-scoped Markdown copies for pages that are ready for localized rendering and linking
- `spec-driven-content-program.md` defines the current spec-driven editorial program and publishing sequence
- existing localized HTML pages under locale folders remain the current public docs surface

## Related Topics

- Documentation architecture
- Multilingual publishing
- Localization
- Accessibility
- Public-interest technology
- Human-AI collaboration
- Public-interest technology

## Related Articles

- None yet

## Related Learning Guides

- `learning/how-to-write-a-spec-that-ai-can-follow.md`
- `learning/how-to-keep-spec-docs-demo-and-code-aligned.md`

## Related Wiki Pages

- `wiki/spec-driven-development.md`
- `wiki/demo-spec-alignment.md`

## Further Reading

- `../README.md`
- `localization-at-scale-program.md`
- `sl/localization-at-scale-program.md`
- `hr/localization-at-scale-program.md`
- `bs/localization-at-scale-program.md`
- `sr-Latn/localization-at-scale-program.md`
- `sr-Cyrl/localization-at-scale-program.md`
- `mk/localization-at-scale-program.md`
- `sq/localization-at-scale-program.md`
- `de/localization-at-scale-program.md`
- `it/localization-at-scale-program.md`
- `fr/localization-at-scale-program.md`
- `es/localization-at-scale-program.md`
- `knowledge-platform-bootstrap.md`
- `spec-driven-content-program.md`
- `../AGENTS.md`
- `../AGENTS-Implementation.md`
