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

## Localization

Each blog article has its own diagram directory under `blog/<article-id>/`.

Structure:

```
blog/<article-id>/
  en/
    diagram-name.d2       # source
    diagram-name.svg      # rendered
  sl/
    diagram-name.d2
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

Source files are in `source/` (Mermaid `.mmd` format).

Regenerate SVG output:

```bash
mmdc -i source/isbn-lookup-chain.mmd -o isbn-lookup-chain.svg -t neutral -b transparent -w 700
mmdc -i source/isbn-vs-physical-book.mmd -o isbn-vs-physical-book.svg -t neutral -b transparent -w 800
```

### Localized Diagrams

```bash
# Regenerate all localized SVGs for an article
for lang in en sl hr bs sr-Latn sr-Cyrl mk sq de it fr es; do
  mmdc -i blog/isbn-not-a-database/$lang/isbn-lookup-chain.mmd -o blog/isbn-not-a-database/$lang/isbn-lookup-chain.svg -t neutral -b transparent -w 700
  mmdc -i blog/isbn-not-a-database/$lang/isbn-vs-physical-book.mmd -o blog/isbn-not-a-database/$lang/isbn-vs-physical-book.svg -t neutral -b transparent -w 800
done
```

## Validation

Run diagram validation:

```bash
node tools/validate-blog.mjs
```

This checks that:
- every diagram referenced by a localized article exists
- non-English pages do not reference `/en/` diagram assets
- diagram source and rendered SVG exist for each published language
- all localized diagram references are valid relative links

## Related Articles

- [ISBN Is Not a Database](../blog/en/isbn-not-a-database.md) — uses both diagrams

## Related Learning Guides

- `../learning/README.md`

## Related Wiki Pages

- `../wiki/README.md`

## Further Reading

- `../assets/README.md`
- `../style-guide/writing/README.md`
