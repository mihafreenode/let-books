---
title: "Implementierungsleitfaden"
summary: >-
  Der Implementierungsleitfaden beschreibt, wie ein Team im aktuellen Repository oder in der bestehenden Auslieferungsumgebung arbeiten soll, ohne die Produktspezifikation selbst zu ersetzen.
topics:
  - implementation-planning
  - spec-driven-development
  - project-management
---
# Implementierungsleitfaden

## Zusammenfassung

Der Implementierungsleitfaden beschreibt, wie ein Team im aktuellen Repository oder in der vorhandenen Auslieferungsumgebung arbeiten soll, ohne die Produktspezifikation selbst zu ersetzen.

## Rolle

Die Implementierungsanleitung befindet sich unterhalb der Produktspezifikation.

Er hilft bei Fragen wie:

- wie die öffentliche Benennung funktionieren sollte
- wie Dokumente strukturiert sein sollten
- welche Prüfanforderungen aktuell gelten
- welche repository-spezifischen Regeln Mitwirkende befolgen sollten
- wo taktische Regeln festgehalten werden sollten, während sich das Projekt weiterentwickelt

## Abweichung von der Produktspezifikation

Die Produktspezifikation definiert, was das Produkt ist und was es leisten muss.

Die Implementierungsanleitung definiert, wie Mitwirkende ihre Arbeit im aktuellen Bereitstellungskontext ausführen sollen.

Diese Unterscheidung ist nützlich, da nicht jede Repository-Regel eine Produktwahrheit ist und nicht jede Produktwahrheit in taktischen Notizen vergraben werden sollte.

## Häufige Beispiele

Zu den Implementierungsleitfäden gehören häufig:

- Benennungs- und Markenregeln
- Regeln zur Implementierung der Dokumentation
- Einschränkungen für statische Sites oder Demos
- Verifizierungserwartungen
- Bearbeitungs- oder Codegenerierungsregeln
- Richtlinien für Nachweise in öffentlichen Texten

Solche Regeln funktionieren in Markdown oft besonders gut, weil sie überprüfbar, leicht zu aktualisieren und nah am übrigen Repository-Kontext bleiben müssen.

## Warum es bei KI-gestützter Arbeit wichtig ist

KI-Assistenten folgen oft der nächstgelegenen konkreten Anweisung. Wenn Repository-spezifische Regeln implizit sind, wird die Ausgabe schnell inkonsistent.

Implementierungsleitfäden machen diese Regeln sichtbar, ohne die Produktspezifikation mit taktischen Details zu verunreinigen.

In der Praxis bedeutet das, dass eine Markdown-Leitfadendatei zwei Aufgaben gleichzeitig erledigen kann:

- einem menschlichen Mitwirkenden den Arbeitsablauf erklären
- einen KI-Agenten zu den bevorzugten Werkzeugen, Abläufen und Einschränkungen führen

## Let Books Kontext

In Let Books ist `AGENTS-Implementation.md` die taktische Führungsebene.

Es umfasst Bereiche wie:

- öffentliche Namensnennung
- Dokumentationsregeln
- Aufteilung der öffentlichen Website und der Dokumente
- Metadaten- und SEO-Regeln für statische Seiten
- Statische Demo-Einschränkungen
- Lokalisierungs- und Zugänglichkeitsregeln
- Verifizierungsregeln
- Blog-Beweisrichtlinie

Damit ist es der operative Begleiter von `AGENTS.md` und kein Ersatz dafür.

Andere Markdown-Anleitungen im Repo verstärken das gleiche Muster. Zum Beispiel:

- `docs/android-debugging.md` steuert die Auswahl des Debugging-Workflows, z. B. CDP Anfügen- oder Quell-Patch-Workflows
- `docs/style-guide/publishing/ubuntu-tooling.md` dokumentiert erwartete Tools für Veröffentlichung, Überprüfung, Screenshots, Rechtschreibprüfung und Geräte-Debugging

Diese Dokumente können als menschliche Anleitung gelesen werden, aber sie helfen Agenten auch dabei, bessere Aktionen auszuwählen, anstatt anhand allgemeiner Standardvorgaben zu raten.

## Verwandte Seiten

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../../learning/de/how-to-turn-a-product-spec-into-an-implementation-plan.md`
