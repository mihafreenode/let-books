---
title: "Sprachunterstützungsmatrix"
summary: >-
  In der Sprachunterstützungsmatrix werden Gebietsschemaumfang, Skriptregeln, Hinweise zur Rechtschreibung und Überprüfungserwartungen für unterstützte Let Books Sprachen erfasst.
topics:
  - localization
  - unicode
  - smaller-languages
---
# Sprachunterstützungsmatrix

## Zusammenfassung

In der Sprachunterstützungsmatrix werden Gebietsschemaumfang, Skriptregeln, Hinweise zur Rechtschreibung und Überprüfungserwartungen für unterstützte Let Books Sprachen aufgezeichnet.

## Derzeit unterstützte Gebietsschemas

| Locale | Language | Script | Special notes |
|---|---|---|---|
| `en` | English | Latin | canonical authoring language |
| `sl` | Slowenisch | Latein | `č`, `š`, `ž` bewahren |
| `hr` | Croatian | Latin | keep Croatian orthography |
| `bs` | Bosnian | Latin | keep Bosnian orthography |
| `sr-Latn` | Serbisches Latein | Latein | separates Gebietsschema, keine automatische Konvertierung |
| `sr-Cyrl` | Serbisch-Kyrillisch | Kyrillisch | separates Gebietsschema, skriptspezifische Überprüfung |
| `mk` | Macedonian | Cyrillic | preserve proper Macedonian orthography |
| `sq` | Albanisch | Latein | `ë`, `ç` bewahren |
| `de` | German | Latin | institutional and research relevance |
| `it` | Italian | Latin | institutional and regional relevance |
| `fr` | French | Latin | international documentation relevance |
| `es` | Spanish | Latin | broader educational reach |

## Regeln

- Gehen Sie niemals davon aus, dass Latein und Kyrillisch austauschbar sind.
- Bewahren Sie die Unicode Wiedergabetreue bei Dokumenten, Exporten, Screenshots und Metadaten.
- Verfolgen Sie Reife und Prüferstatus nach Gebietsschema.

## Verwandte Seiten

- `unicode-and-script-correctness.md`
- `localization-maturity-model.md`
- `../blog/en/why-every-language-matters.md`
