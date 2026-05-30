---
title: "Produktspezifikation"
topics:
  - product-specification
  - spec-writing
  - spec-driven-development
---
# Produktspezifikation

## Zusammenfassung

Eine Produktspezifikation definiert, wofür ein Produkt da ist, was es leisten muss, welche Grenzen es einhalten muss und welche Ergebnisse als Erfolg gelten.

## Rolle

Die Produktspezifikation ist die praktische Beschreibung auf höchster Ebene des beabsichtigten Produktverhaltens.

Sie sollte Fragen beantworten wie:

- warum das Produkt existiert
- für wen es gedacht ist
- welche Arbeitsabläufe erstklassig sind
- was auch unter Ausfallbedingungen funktionieren muss
- was ausdrücklich außerhalb des Umfangs liegt
- welche Abnahmekriterien eine sinnvolle Demo oder ein sinnvolles Release definieren

## Was in eine Produktspezifikation gehört

Typischer Inhalt umfasst:

- Produktzweck
- Kernphilosophie
- Domänenmodell
- Workflow-Definitionen
- Erwartungen an Datenschutz und Sicherheit
- Nicht-Ziele
- Leitlinien zur Implementierungsreihenfolge, wenn sie Umfang oder Lieferreihenfolge beeinflussen
- Abnahmekriterien

Die Spezifikation sollte sich auf die Produktwahrheit konzentrieren, nicht auf jedes lokale Implementierungsdetail.

## Was dort meist nicht hingehört

Diese Punkte gehören oft woanders hin, sofern sie keine direkten Produktzusagen beeinflussen:

- temporäre Repository-Konventionen
- lokale Tooling-Einrichtung
- enge Entscheidungen zur UI-Politur
- einmalige Debugging-Hinweise
- redaktionelle oder Publishing-Mechaniken, die das Produktmodell nicht verändern

## Warum das in KI-gestützter Arbeit wichtig ist

KI kann sehr schnell plausibel wirkende Implementierungen erzeugen. Ohne klare Produktspezifikation kann diese Implementierung Bequemlichkeit statt Absicht optimieren.

Die Spezifikation gibt Reviewern und Beitragenden einen stabilen Maßstab, um zu entscheiden, ob generierte Ergebnisse noch zum beabsichtigten Produkt gehören.

## Let-Books-Kontext

In Let Books ist `AGENTS.md` die zentrale Produktspezifikation.

Sie definiert:

- den Projektzweck
- das Domänen- und Workflow-Modell
- die Richtung für Multi-Tenancy und Lokalisierung
- Prinzipien für manuelle Abläufe und optionale KI
- Abnahmekriterien für die erste Demo

Damit ist sie mehr als ein Überblick. Sie ist die wichtigste Produktautorität im Repository.

## Verwandte Seiten

- `implementation-guidance.md`
- `documentation-traceability.md`
- `spec-driven-development.md`
- `../learning/how-to-write-a-spec-that-ai-can-follow.md`
