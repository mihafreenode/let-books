---
title: "Matriz de soporte lingüístico"
summary: >-
  La matriz de soporte de idiomas registra el alcance local, las reglas de escritura, las notas ortográficas y las expectativas de revisión para los idiomas Let Books admitidos.
topics:
  - localization
  - unicode
  - smaller-languages
---
# Matriz de soporte lingüístico

## Resumen

La matriz de soporte de idiomas registra el alcance local, las reglas de escritura, las notas ortográficas y las expectativas de revisión para los idiomas Let Books admitidos.

## Configuraciones regionales soportadas actualmente

| Locale | Language | Script | Special notes |
|---|---|---|---|
| `en` | English | Latin | canonical authoring language |
| `sl` | esloveno | latín | preservar `č`, `š`, `ž` |
| `hr` | Croatian | Latin | keep Croatian orthography |
| `bs` | Bosnian | Latin | keep Bosnian orthography |
| `sr-Latn` | serbio latín | latín | configuración regional separada, sin conversión automática |
| `sr-Cyrl` | cirílico serbio | cirílico | revisión regional separada y específica del script |
| `mk` | Macedonian | Cyrillic | preserve proper Macedonian orthography |
| `sq` | albanés | latín | preservar `ë`, `ç` |
| `de` | German | Latin | institutional and research relevance |
| `it` | Italian | Latin | institutional and regional relevance |
| `fr` | French | Latin | international documentation relevance |
| `es` | Spanish | Latin | broader educational reach |

## Reglas

- Nunca asumas que el latín y el cirílico son intercambiables.
- Preservar la fidelidad Unicode en documentos, exportaciones, capturas de pantalla y metadatos.
- Seguimiento de la madurez y el estado del revisor por configuración regional.

## Páginas Relacionadas

- `unicode-and-script-correctness.md`
- `localization-maturity-model.md`
- `../blog/en/why-every-language-matters.md`
