---
title: "Rückverfolgbarkeit der Dokumentation"
summary: >-
  Rückverfolgbarkeit in der Dokumentation bedeutet, dass sich wichtige Aussagen, Ablaufbeschreibungen und Qualitätserwartungen verlässlich mit stabilen Nachweisen im Repository und klar getroffenen Entscheidungen verbinden lassen.
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Rückverfolgbarkeit der Dokumentation

## Zusammenfassung

Rückverfolgbarkeit in der Dokumentation bedeutet, dass sich wichtige Aussagen, Ablaufbeschreibungen und Qualitätserwartungen verlässlich mit stabilen Nachweisen im Repository und klar getroffenen Entscheidungen verbinden lassen.

## Warum es wichtig ist

Ohne Rückverfolgbarkeit wird es schwierig, der Dokumentation zu vertrauen.

Leser können nicht sagen:

- ob eine Aussage aktuell ist
- ob ein Verhalten beabsichtigt ist
- ob eine Aussage auf die Produktspezifikation oder auf einen Implementierungsfehler zurückgeht
- ob ein öffentlicher Artikel die freigegebene Produktrichtung widerspiegelt

Bei KI-gestützter Arbeit ist die Rückverfolgbarkeit besonders wichtig, da generierte Inhalte auch dann zuverlässig klingen können, wenn sie nicht auf der richtigen Quelle basieren.

## Wie Rückverfolgbarkeit aussieht

Zu einer guten Rückverfolgbarkeit der Dokumentation gehören in der Regel:

- eine klar definierte Autoritätskette
- stabile Verweise auf relevante Dokumente oder Spezifikationen
- klare Trennung zwischen Ist-Zustand und künftigen Plänen
- explizite Unterscheidung zwischen kanonischer Dokumentation und Umsetzungsstatus
- Quellenkarten oder Beweisnotizen für wesentliche öffentliche Artikel

Es wird außerdem immer nützlicher, wenn die Dokumentation präzise genug ist, um KI-gestützte Arbeit zu steuern und nicht nur menschliche Interpretation zu unterstützen.

## Ein einfaches Autoritätsmodell

Ein nützliches Modell ist:

1. Produktspezifikation
2. Umsetzungsanleitung
3. Dokumentation des aktuellen Stands
4. Demo- oder Implementierungsverhalten
5. Test- und Validierungsergebnisse

Dies hilft Teams bei der Entscheidung, welches Artefakt welche Frage beantworten soll.

## Öffentliches Schreiben und Rückverfolgbarkeit

Öffentliche Artikel, Aufsätze und Lehrmaterialien sollten sich nicht auf eine gerade in der Nähe befindliche Quelldatei verlassen.

Stattdessen sollten sie stabile Dokumentation und Spezifikationsverweise bevorzugen und Quellkarten verwenden, wenn die Aussagen besonders wichtig sind.

Dadurch wird öffentliches Schreiben wartungsfreundlicher und im Laufe der Zeit weniger brüchig.

## Rückverfolgbarkeit sowohl für Agenten als auch für Menschen

Bei der Rückverfolgbarkeit geht es nicht nur darum, einer Person zu helfen, zu verstehen, woher ein Anspruch stammt. Es hilft einem KI-Agenten auch dabei, zu bestimmen, welche Repository-Artefakte die Aktion leiten sollen.

Wenn in der Dokumentation die Reihenfolge der Arbeitsabläufe, Werkzeugpräferenzen, Umgebungseinschränkungen und Autoritätsgrenzen klar angegeben sind, kann sie sowohl als Betriebskontext für Agenten als auch als erklärender Kontext für Personen verwendet werden.

Das ist wichtig, weil Agenten oft den konkretesten Anweisungen folgen, die gerade greifbar sind. Nachvollziehbares Markdown hilft dabei, die richtige Anleitung sichtbar zu machen.

## Let Books Kontext

Das Let Books-Repository unterstützt bereits die Rückverfolgbarkeit durch:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- `docs/README.md`
- `docs/blog/README.md`
- `docs/sources/README.md`
- Quellkarten gemäß `docs/sources/`

Es enthält auch Markdown-Anleitungen, die als nachvollziehbarer Betriebskontext für die Agentenarbeit fungieren, wie zum Beispiel:

- `docs/android-debugging.md` für die Auswahl des mobilen Debugging-Workflows und die Verwendung von Tools
- `docs/style-guide/publishing/ubuntu-tooling.md` für erwartete Werkzeug- und Verifizierungsfunktionen

Diese Struktur hilft dem Projekt, die Dokumentation als evidenzgestütztes System und nicht als lose Sammlung von Notizen zu behandeln.

## Verwandte Seiten

- `product-specification.md`
- `implementation-guidance.md`
- `validation-layers.md`
- `../../learning/de/how-to-keep-spec-docs-demo-and-code-aligned.md`
