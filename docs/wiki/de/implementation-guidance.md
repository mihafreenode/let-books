---
title: "Implementierungsleitlinien"
topics:
  - implementation-planning
  - spec-driven-development
  - project-management
---
# Implementierungsleitlinien

## Zusammenfassung

Implementierungsleitlinien definieren, wie ein Team Arbeit innerhalb des aktuellen Repositorys oder Lieferumfelds umsetzen soll, ohne die Produktspezifikation selbst zu ersetzen.

## Rolle

Implementierungsleitlinien stehen unterhalb der Produktspezifikation.

Sie helfen bei Fragen wie:

- wie öffentliche Benennung funktionieren soll
- wie Dokumentation strukturiert sein soll
- welche Verifikationserwartungen jetzt gelten
- welche repository-spezifischen Regeln Beitragende befolgen sollen
- wo taktische Regeln im Verlauf des Projekts leben sollen

## Unterschied zur Produktspezifikation

Die Produktspezifikation definiert, was das Produkt ist und was es erreichen muss.

Implementierungsleitlinien definieren, wie Beitragende Arbeit im aktuellen Lieferkontext ausführen sollen.

Diese Unterscheidung ist nützlich, weil nicht jede Repository-Regel eine Produktwahrheit ist und nicht jede Produktwahrheit in taktischen Notizen versteckt werden sollte.

## Häufige Beispiele

Implementierungsleitlinien enthalten oft:

- Benennungs- und Branding-Regeln
- Regeln für die Dokumentationsumsetzung
- Einschränkungen für statische Sites oder Demos
- Verifikationserwartungen
- Regeln für Bearbeitung oder Codegenerierung
- Evidenzrichtlinien für öffentliche Texte

Solche Regeln funktionieren oft gut in Markdown, weil sie überprüfbar, leicht aktualisierbar und nah am übrigen Repository-Kontext bleiben sollen.

## Warum das in KI-gestützter Arbeit wichtig ist

KI-Assistenten folgen oft der nächstgelegenen konkreten Anweisung. Wenn repository-spezifische Regeln nur implizit sind, wird die Ausgabe schnell inkonsistent.

Implementierungsleitlinien machen diese Regeln sichtbar, ohne die Produktspezifikation mit taktischen Details zu überladen.

In der Praxis kann eine Markdown-Leitdatei damit zwei Aufgaben zugleich erfüllen:

- den Ablauf für menschliche Beitragende erklären
- einen KI-Agenten zu bevorzugten Werkzeugen, Reihenfolgen und Einschränkungen lenken

## Let-Books-Kontext

In Let Books ist `AGENTS-Implementation.md` die taktische Leitlinie.

Sie deckt Bereiche ab wie:

- öffentliche Benennung
- Dokumentationsregeln
- Trennung zwischen öffentlicher Site und Docs
- Metadaten- und SEO-Regeln für statische Seiten
- Einschränkungen für statische Demos
- Regeln für Lokalisierung und Barrierefreiheit
- Verifikationsregeln
- Blog-Evidenzrichtlinie

Damit ist sie das operative Gegenstück zu `AGENTS.md`, nicht dessen Ersatz.

## Verwandte Seiten

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../learning/how-to-turn-a-product-spec-into-an-implementation-plan.md`
