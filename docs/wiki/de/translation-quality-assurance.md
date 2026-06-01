---
title: "Qualitätssicherung von Übersetzungen"
summary: >-
  Übersetzung QA kombiniert automatische Validierung, Rechtschreibprüfung, Terminologieprüfung, Barrierefreiheitsprüfungen und menschliches Urteilsvermögen.
topics:
  - translation-quality
  - qa
  - localization
---
# Qualitätssicherung von Übersetzungen

## Zusammenfassung

Übersetzung QA kombiniert automatische Validierung, Rechtschreibprüfung, Terminologieprüfung, Barrierefreiheitsprüfungen und menschliches Urteilsvermögen.

## Gemeinsame Schecks

- fehlende Übersetzungen
- Englisches Leck
- Nichtübereinstimmung der Platzhalter
- defekte Links
- Glossardrift
- Barrierefreie Textabdeckung
- Screenshot- und Diagrammparität

## Beweise aus menschlicher Überprüfung

Bei der Übersetzung QA sollten auch kurze Aufzeichnungen der menschlichen Überprüfung für repräsentative AI-unterstützte Korrekturen gespeichert werden.

Mindestfelder:

- Originaltext
- Text korrigiert
- Fehlerkategorie
- Ursachenhypothese
- Begründung des Rezensenten

Dies ist wichtig, denn selbst wenn die Gesamtbedeutung erhalten bleibt, erfordern AI-generierte Übersetzungen möglicherweise eine Überprüfung durch einen Muttersprachler, um subtile Probleme in Grammatik, Modalität, Terminologie und domänenspezifischem Register zu korrigieren. Diese Probleme lassen sich allein durch automatisierte Qualitätsmetriken oft nur schwer erkennen.

## Häufige AI-Übersetzungsfehlertaxonomie

- Grammatik
- Modalität
- Terminologie
- Registrieren
- Geläufigkeit
- wörtliche Übersetzung
- Mehrdeutigkeit
- Kontextverlust
- Wortreihenfolge
- Kollokation
- Schrift oder Rechtschreibung
- Formulierung der Domänenrichtlinien
- Formulierung zur Barrierefreiheit

## Verwandte Seiten

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../learning/how-to-run-localization-qa-in-ci.md`
