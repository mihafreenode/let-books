# Diagrams

## Summary

`docs/diagrams/` will hold source-controlled visual explanations.

## Purpose

Use this area for architecture diagrams, workflow diagrams, mental models, and teaching visuals.

## Structure

- source files for Mermaid, D2, Graphviz, PlantUML, or Excalidraw exports
- generated SVG outputs where appropriate
- per-diagram notes about provenance and intended use

## Related Topics

- Visual learning
- Documentation
- Architecture explanation

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

## Related Articles

- [ISBN Is Not a Database](../blog/en/isbn-not-a-database.md) — uses both diagrams

## Related Learning Guides

- `../learning/README.md`

## Related Wiki Pages

- `../wiki/README.md`

## Further Reading

- `../assets/README.md`
- `../style-guide/writing/README.md`
