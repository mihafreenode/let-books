---
title: "Language Support Matrix"
summary: >-
  The language support matrix records locale scope, script rules, orthography notes, and review expectations for supported Let Books languages.
topics:
  - localization
  - unicode
  - smaller-languages
---
# Language Support Matrix

## Summary

The language support matrix records locale scope, script rules, orthography notes, and review expectations for supported Let Books languages.

## Current supported locales

| Locale | Language | Script | Special notes |
|---|---|---|---|
| `en` | English | Latin | canonical authoring language |
| `sl` | Slovenian | Latin | preserve `č`, `š`, `ž` |
| `hr` | Croatian | Latin | keep Croatian orthography |
| `bs` | Bosnian | Latin | keep Bosnian orthography |
| `sr-Latn` | Serbian Latin | Latin | separate locale, no auto-conversion |
| `sr-Cyrl` | Serbian Cyrillic | Cyrillic | separate locale, script-specific review |
| `mk` | Macedonian | Cyrillic | preserve proper Macedonian orthography |
| `sq` | Albanian | Latin | preserve `ë`, `ç` |
| `de` | German | Latin | institutional and research relevance |
| `it` | Italian | Latin | institutional and regional relevance |
| `fr` | French | Latin | international documentation relevance |
| `es` | Spanish | Latin | broader educational reach |

## Rules

- Never assume Latin and Cyrillic are interchangeable.
- Preserve Unicode fidelity across docs, exports, screenshots, and metadata.
- Track maturity and reviewer status by locale.

## Related Pages

- `unicode-and-script-correctness.md`
- `localization-maturity-model.md`
- `../blog/en/why-every-language-matters.md`
