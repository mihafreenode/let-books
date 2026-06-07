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

Regenerate SVG output:

```bash
mmdc -i source/isbn-lookup-chain.mmd -o isbn-lookup-chain.svg -t neutral -b transparent -w 700
mmdc -i source/isbn-vs-physical-book.mmd -o isbn-vs-physical-book.svg -t neutral -b transparent -w 800
mmdc -i source/use-case-overview.mmd -o use-case-overview.svg -t neutral -b transparent -w 980
mmdc -i source/use-case-capability-relationships.mmd -o use-case-capability-relationships.svg -t neutral -b transparent -w 1180
mmdc -i source/use-case-automation-parity-chain.mmd -o use-case-automation-parity-chain.svg -t neutral -b transparent -w 1280
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
  mmdc -i blog/isbn-not-a-database/$lang/isbn-lookup-chain.mmd -o blog/isbn-not-a-database/$lang/isbn-lookup-chain.svg -t neutral -b transparent -w 700
  mmdc -i blog/isbn-not-a-database/$lang/isbn-vs-physical-book.mmd -o blog/isbn-not-a-database/$lang/isbn-vs-physical-book.svg -t neutral -b transparent -w 800
done
```

## Validation

Run docs validation:

```bash
node tools/validate-blog.mjs
```

This checks that:
- every diagram referenced by a localized article exists
- non-English pages do not reference `/en/` diagram assets
- diagram source and rendered SVG exist for each published language
- all localized diagram references are valid relative links
- relative links across `docs/`, `docs/blog/`, and related documentation areas resolve from the correct file depth

## Related Articles

- [ISBN Is Not a Database](../blog/en/isbn-not-a-database.md) — uses both diagrams

## Related Learning Guides

- `../learning/README.md`

## Related Wiki Pages

- `../wiki/README.md`

## Further Reading

- `../assets/README.md`
- `../style-guide/writing/README.md`
