---
title: "Implementierungsleitfaden"
summary: >-
  Die Implementierungsanleitung definiert, wie ein Team Arbeit innerhalb des aktuellen Repositorys oder der Bereitstellungsumgebung bereitstellen soll, ohne die Produktspezifikation selbst zu ersetzen.
topics:
  - implementation-planning
  - spec-driven-development
  - project-management
---
# Implementierungsleitfaden

## Zusammenfassung

Die Implementierungsanleitung definiert, wie ein Team Arbeit innerhalb des aktuellen Repositorys oder der Bereitstellungsumgebung bereitstellen soll, ohne die Produktspezifikation selbst zu ersetzen.

## Rolle

Die Implementierungsanleitung befindet sich unterhalb der Produktspezifikation.

Es hilft bei der Beantwortung von Fragen wie:

- wie öffentliche Namensgebung funktionieren sollte
- wie Dokumente strukturiert sein sollten
- welche Überprüfungserwartungen jetzt gelten
- welche Repository-spezifischen Regeln Mitwirkende befolgen sollten
- Wo taktische Regeln gelten sollten, während sich das Projekt weiterentwickelt

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
- Evidenzrichtlinien für öffentliches Schreiben

Diese Regeln funktionieren oft gut in Markdown, da sie überprüfbar, leicht zu aktualisieren und nah am Rest des Repository-Kontexts bleiben müssen.

## Warum es bei KI-gestützter Arbeit wichtig ist

KI-Assistenten folgen oft der nächstgelegenen konkreten Anweisung. Wenn Repository-spezifische Regeln implizit sind, wird die Ausgabe schnell inkonsistent.

Implementierungsleitfäden machen diese Regeln sichtbar, ohne die Produktspezifikation mit taktischen Details zu verunreinigen.

In der Praxis bedeutet das, dass eine Markdown-Leitfadendatei zwei Aufgaben gleichzeitig erledigen kann:

- Erklären Sie einem menschlichen Mitarbeiter den Arbeitsablauf
- Lenken Sie einen KI-Agenten zu den bevorzugten Werkzeugen, Abläufen und Einschränkungen

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