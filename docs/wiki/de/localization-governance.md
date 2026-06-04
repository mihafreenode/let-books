---
title: "Lokalisierungs-Governance"
summary: >-
  Die Lokalisierungsgovernance definiert, wer mehrsprachige Inhaltsänderungen vorschlagen, prüfen, genehmigen und anfechten kann.
topics:
  - governance
  - localization
  - terminology
---
# Lokalisierungs-Governance

## Zusammenfassung

Die Lokalisierungsgovernance definiert, wer mehrsprachige Inhaltsänderungen vorschlagen, prüfen, genehmigen und anfechten kann.

## Governance-Bereiche

- Quelleneigentum
- Rollen des Sprachbetreuers
- Terminologiegenehmigungen
- Streitbeilegung
- Nachverfolgung des Überprüfungsstatus
- wiederverwendbares Bewertungsbeispiel-Tracking
- Aktualität von Review-Artefakten
- Dokumentationspflichten für Werkzeuge

## Warum es wichtig ist

Ohne Governance weichen Ton, Terminologie und Qualitätserwartungen bei mehrsprachigen Inhalten ab.

Die Review-Governance sollte auch definieren, wie AI-unterstützte Korrekturbeispiele gespeichert und für Schulungen, Scorecards und Bewertungsarbeiten wiederverwendet werden.

## Aktualität von Review-Artefakten

Die Governance sollte verlangen, dass Reviewer zwischen Folgendem unterscheiden:

- Quell-Markdown
- generiertem HTML
- bereitgestellter Site-Ausgabe
- im Browser gerenderter Ausgabe

Vor der Paritätsfreigabe sollten Reviewer bestätigen, dass die geprüften generierten Artefakte aus dem aktuellen Repository-Stand neu erzeugt wurden.

## Tooling-Governance

Neue Generatoren, Renderer, Transformer, Validatoren, Audit-Werkzeuge und andere Werkzeuge zur Inhaltsverarbeitung sollten als Governance-Artefakte behandelt werden, nicht nur als Implementierungsdetails.

Sie sind nicht vollständig, bis:

- ihr Zweck und ihre Grenzen dokumentiert sind
- ihre nicht offensichtlichen Regeln und Heuristiken erklärt sind
- relevante Workflow- und Validierungsdokumentation aktualisiert ist
- Maintainer Warnungen, Fehler und blinde Flecken interpretieren können, ohne die Absicht allein aus dem Code rekonstruieren zu müssen

## Verwandte Seiten

- `translation-memory-and-glossaries.md`
- `localization-maturity-model.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/review-workflow.md`
