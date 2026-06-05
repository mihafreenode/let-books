---
title: "Lokalisierungs-Governance"
summary: >-
  Die Lokalisierungs-Governance definiert, wer mehrsprachige Inhaltsänderungen vorschlagen, prüfen, genehmigen und anfechten kann.
topics:
  - governance
  - localization
  - terminology
---
# Lokalisierungs-Governance

## Zusammenfassung

Die Lokalisierungs-Governance definiert, wer mehrsprachige Inhaltsänderungen vorschlagen, prüfen, genehmigen und anfechten kann.

## Governance-Bereiche

- Eigentümerschaft der Quelle
- Rollen von Sprachverantwortlichen
- Terminologiefreigaben
- Streitbeilegung
- Nachverfolgung des Review-Status
- Nachverfolgung wiederverwendbarer Review-Beispiele
- Aktualität von Review-Artefakten
- Dokumentationspflichten für Werkzeuge
- Qualität muttersprachlicher Reviews

## Warum es wichtig ist

Ohne Governance driften mehrsprachige Inhalte bei Ton, Terminologie und Qualitätserwartungen auseinander.

Review-Governance sollte außerdem festlegen, wie AI-gestützte Korrekturbeispiele gespeichert und über Schulungen, Scorecards und Evaluationsarbeit hinweg wiederverwendet werden.

## Aktualität von Review-Artefakten

Governance sollte verlangen, dass Reviewer unterscheiden zwischen:

- Quell-Markdown
- generiertem HTML
- Ausgabe der bereitgestellten Site
- im Browser gerenderter Ausgabe

Vor der Paritätsfreigabe sollten Reviewer bestätigen, dass die geprüften generierten Artefakte aus dem aktuellen Zustand des Repositorys neu erzeugt wurden.

## Tooling-Governance

Neue Generatoren, Renderer, Transformer, Validatoren, Audit-Werkzeuge und andere Werkzeuge zur Inhaltsverarbeitung sollten als Governance-Artefakte behandelt werden, nicht nur als Implementierungsdetails.

Sie sind erst vollständig, wenn:

- ihr Zweck und ihre Grenzen dokumentiert sind
- ihre nicht offensichtlichen Regeln und Heuristiken erklärt sind
- relevante Workflow- und Validierungsdokumentation aktualisiert ist
- Maintainer Warnungen, Fehler und blinde Flecken interpretieren können, ohne die Absicht allein aus dem Code rekonstruieren zu müssen

## Qualität muttersprachlicher Reviews

Lokalisierungs-Governance sollte Reviews nicht nur auf Korrektheit, sondern auch auf natürliches muttersprachliches Formulieren verlangen.

Der Maßstab ist, dass sich ein lokalisierter Text so lesen sollte, als wäre er ursprünglich in der Zielsprache verfasst worden.

Das bedeutet, dass Reviewer Folgendes als Qualitätsbefunde behandeln sollten:

- wörtliche englische Satzstruktur
- direkte Übersetzung englischer Idiome
- Governance- oder Unternehmenssprache, die übersetzt klingt
- Terminologie, die unnötig an der Quellformulierung festhält

Governance sollte diese Review außerdem zuerst priorisieren für:

- neu erstellte Inhalte
- kürzlich erweiterte Inhalte
- Inhalte, die aktuell bearbeitet werden

Ältere lokalisierte Inhalte sollten anschließend schrittweise im Laufe der Zeit verbessert werden, statt in einem einzigen repository-weiten Neuaufschlag.

## Verwandte Seiten

- `translation-memory-and-glossaries.md`
- `localization-maturity-model.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/review-workflow.md`
