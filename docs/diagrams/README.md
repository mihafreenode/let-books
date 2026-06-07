# Diagrams

## Summary

`docs/diagrams/` will hold source-controlled visual explanations.

## Purpose

Use this area for architecture diagrams, workflow diagrams, mental models, and teaching visuals.

## Structure

- `source/` — canonical English diagram sources (Mermaid `.mmd` format)
- `blog/<article-id>/<lang>/` — localized diagram sources and SVGs per article and language
- generated SVG outputs where appropriate
- per-diagram notes about provenance and intended use

The repository currently uses Mermaid source plus rendered SVG output.

Prefer Mermaid for new diagrams unless the repository standard changes.

## Maintenance Rule

The Mermaid `.mmd` source file is authoritative.

If a diagram `.mmd` file changes, regenerate and commit the matching `.svg` in the same change.

Do not leave Mermaid source and published SVG artifacts out of sync.

## Localization

Each blog article has its own diagram directory under `blog/<article-id>/`.

Structure:

```
blog/<article-id>/
  en/
    diagram-name.mmd      # source
    diagram-name.svg      # rendered
  sl/
    diagram-name.mmd
    diagram-name.svg
  ...
```

English diagram sources are in `source/`. English SVGs remain at the flat `docs/diagrams/` level for backwards compatibility.

Localized articles reference diagrams from their language-specific subdirectory.

### Native SVG Text Rule

Published Mermaid diagrams must be rendered with:

- `htmlLabels: false`

unless there is a documented and justified exception.

Reason:

- native SVG text is generally more predictable across localization, browser rendering, responsive layouts, print/PDF generation, and static-site publishing
- `foreignObject`-based HTML labels have historically introduced clipping, wrapping inconsistencies, browser-specific behavior, localization regressions, and difficult-to-detect rendering defects

When diagram labels appear clipped despite sufficient node space, investigate the Mermaid rendering mode first.

Check:

- Mermaid render configuration
- `htmlLabels` usage
- generated SVG structure
- `foreignObject` usage
- browser rendering differences

Do not immediately solve the issue by shortening labels, shrinking fonts, widening diagrams, or patching SVG output by hand.

First determine whether the rendering mode itself is responsible.

### Rendered Review Rule

Successful Mermaid rendering is not enough.

A localized diagram is only healthy when the final rendered SVG remains readable and visually intact in the published page.

Reviewers must check that:

- text is not clipped or truncated
- labels do not overlap
- labels do not extend outside nodes or SVG bounds
- the diagram does not force horizontal scrolling in common page layouts
- the rendered diagram remains understandable on desktop, tablet, mobile, and print/PDF layouts where practical
- the diagram is not visually crowded
- the diagram is not scaled down so aggressively that it becomes awkward to read
- the diagram feels appropriately sized and balanced for article publication

Prefer these fixes in order:

1. improve label wording
2. add line breaks
3. improve structure or layout direction
4. adjust spacing
5. increase render width only when necessary

Diagram localization is a separate discipline from body-text translation.

Optimize diagram labels for:

- clarity
- readability
- visual fit
- concept preservation
- quick comprehension

Prefer article-friendly dimensions, clear hierarchy, grouped layouts, and vertical structure where appropriate.

Avoid:

- sentence-length labels
- excessive node text
- extremely wide diagrams
- layouts that rely on browser scaling
- diagrams that require readers to zoom

Prefer shorter natural wording, better line breaks, and structural simplification over literal wording parity or continuous SVG expansion.

Do not patch generated SVGs by hand.
Fix the Mermaid source, regenerate the SVG, and review the rendered output again.

When a diagram is translated or materially updated, perform both:

1. automated rendered audit
2. manual spot review of the published page

The automated audit helps catch overflow and some node-internal clipping, but it is not a complete substitute for human review.

The audit also emits informational publication-quality warnings for diagrams that are technically valid but may still be visually weak, for example when they are:

- unusually wide
- scaled down aggressively in article layout
- text-heavy compared to neighboring diagrams
- structurally dense
- likely to need redesign rather than width growth

These warnings are review candidates, not automatic failures.

The `htmlLabels: false` rule fixes a rendering-mode problem.

It does not replace diagram-quality review.

Diagrams should still be:

- simple
- readable
- not overly wide
- not text-heavy
- not dependent on aggressive browser scaling
- suitable for desktop, mobile, and print

## Related Topics

- Visual learning
- Documentation
- Architecture explanation
- Diagram localization

## Available Diagrams

| File | Description |
|---|---|
| [isbn-lookup-chain.svg](isbn-lookup-chain.svg) | ISBN metadata lookup fallback chain |
| [isbn-vs-physical-book.svg](isbn-vs-physical-book.svg) | Edition-level identifier vs instance-level tracking |
| [use-case-overview.svg](use-case-overview.svg) | Primary use-case overview for durable workflow intent |
| [use-case-capability-relationships.svg](use-case-capability-relationships.svg) | Relationship map between intake, storage, oversight, and external review |
| [use-case-automation-parity-chain.svg](use-case-automation-parity-chain.svg) | Governance chain from use case to automation and future parity |

Source files are in `source/` (Mermaid `.mmd` format).

Shared Mermaid render config:

- `../../tools/mermaid-render-config.json`

This enforces the repository standard that published Mermaid SVGs use native SVG text labels instead of `foreignObject` HTML labels.

Any intentional deviation from this rule must be documented near the diagram-generation command or script that requires it, together with the reason for the exception.

Regenerate SVG output:

```bash
mmdc -i source/isbn-lookup-chain.mmd -o isbn-lookup-chain.svg -t neutral -b transparent -w 700 -c ../../tools/mermaid-render-config.json
mmdc -i source/isbn-vs-physical-book.mmd -o isbn-vs-physical-book.svg -t neutral -b transparent -w 800 -c ../../tools/mermaid-render-config.json
mmdc -i source/use-case-overview.mmd -o use-case-overview.svg -t neutral -b transparent -w 980 -c ../../tools/mermaid-render-config.json
mmdc -i source/use-case-capability-relationships.mmd -o use-case-capability-relationships.svg -t neutral -b transparent -w 1180 -c ../../tools/mermaid-render-config.json
mmdc -i source/use-case-automation-parity-chain.mmd -o use-case-automation-parity-chain.svg -t neutral -b transparent -w 1280 -c ../../tools/mermaid-render-config.json
```

Or render the current use-case governance set with:

```bash
bash scripts/render-use-case-diagrams.sh
```

### Ubuntu Tooling

These diagrams render on Ubuntu with Mermaid CLI available as `mmdc`.

If `mmdc` is not already installed in your environment, install Mermaid CLI before regeneration.

The repository does not yet wire use-case diagram regeneration into CI, so local regeneration remains a contributor responsibility when diagram sources change.

### Localized Diagrams

```bash
# Regenerate all localized SVGs for an article
for lang in en sl hr bs sr-Latn sr-Cyrl mk sq de it fr es; do
  mmdc -i blog/isbn-not-a-database/$lang/isbn-lookup-chain.mmd -o blog/isbn-not-a-database/$lang/isbn-lookup-chain.svg -t neutral -b transparent -w 700 -c ../../tools/mermaid-render-config.json
  mmdc -i blog/isbn-not-a-database/$lang/isbn-vs-physical-book.mmd -o blog/isbn-not-a-database/$lang/isbn-vs-physical-book.svg -t neutral -b transparent -w 800 -c ../../tools/mermaid-render-config.json
done
```

## Validation

Run docs validation:

```bash
node tools/validate-blog.mjs
```

Run the rendered localized-diagram audit:

```bash
node tools/audit-localized-diagrams.mjs
```

Report Mermaid render modes in committed SVGs:

```bash
node tools/report-mermaid-render-modes.mjs
```

This audit also generates screenshot artifacts in:

```text
output/playwright/localized-diagram-audit/
```

including desktop, tablet, mobile, and print-layout captures for article pages that embed localized diagrams.

This checks that:
- every diagram referenced by a localized article exists
- non-English pages do not reference `/en/` diagram assets
- diagram source and rendered SVG exist for each published language
- all localized diagram references are valid relative links
- relative links across `docs/`, `docs/blog/`, and related documentation areas resolve from the correct file depth

These checks do not prove that the final rendered diagram is visually healthy.

Rendered review is still required for translated diagrams, especially when labels are long, scripts differ from English, or article-specific diagrams were recently added or updated.

Manual review remains required because some visual clipping issues are only obvious when a human inspects the published result.

A diagram is not accepted merely because:

- Mermaid renders successfully
- SVG generation succeeds
- automated audits pass
- CI passes

It should also be readable, understandable, appropriately sized, visually balanced, and suitable for publication.

## Related Articles

- [ISBN Is Not a Database](../blog/en/isbn-not-a-database.md) — uses both diagrams

## Related Learning Guides

- `../learning/README.md`

## Related Wiki Pages

- `../wiki/README.md`

## Further Reading

- `../assets/README.md`
- `../style-guide/writing/README.md`
