---
title: "Unicode und Skriptkorrektheit"
summary: >-
  Unicode Wiedergabetreue und Skriptkorrektheit sind zentrale Lokalisierungsanforderungen, insbesondere für die Unterstützung der slowenischen, albanischen, mazedonischen und serbischen Gebietsschemata.
topics:
  - unicode
  - localization
  - smaller-languages
---
# Unicode und Skriptkorrektheit

## Zusammenfassung

Unicode Wiedergabetreue und Skriptkorrektheit sind zentrale Lokalisierungsanforderungen, insbesondere für die Unterstützung der slowenischen, albanischen, mazedonischen und serbischen Gebietsschemata.

## Grundregeln

- Ersetzen Sie native Zeichen nicht durch ASCII-Annäherungen
- Konvertieren Sie Serbisch-Latein und Serbisch-Kyrillisch nicht automatisch automatisch
- Behandeln Sie das mazedonische Kyrillisch nicht als austauschbar mit Serbisch oder Bulgarisch
- Überprüfen Sie die Schriftartenabdeckung für unterstützte Skripte

## Verwandte Seiten

- `language-support-matrix.md`
- `multilingual-accessibility.md`
- `../blog/en/preserving-smaller-languages-in-the-digital-age.md`
