---
title: "Produktspezifikation"
summary: >-
  Eine Produktspezifikation definiert, wofür ein Produkt gedacht ist, was es tun muss, welche Grenzen es einhalten muss und welche Ergebnisse als Erfolg gelten.
topics:
  - product-specification
  - spec-writing
  - spec-driven-development
---
# Produktspezifikation

## Zusammenfassung

Eine Produktspezifikation definiert, wofür ein Produkt gedacht ist, was es tun muss, welche Grenzen es einhalten muss und welche Ergebnisse als Erfolg gelten.

## Rolle

Die Produktspezifikation ist die übergeordnete praktische Beschreibung des beabsichtigten Produktverhaltens.

Es sollte Fragen beantworten wie:

- warum das Produkt existiert
- für wen es ist
- welche Arbeitsabläufe im Mittelpunkt stehen
- was auch unter Fehlerbedingungen funktionieren muss
- was explizit außerhalb des Geltungsbereichs liegt
- welche Akzeptanzkriterien eine sinnvolle Demo oder Veröffentlichung definieren

## Was in eine Produktspezifikation gehört

Typische Spezifikationsinhalte umfassen:

- Produktzweck
- Kernphilosophie
- Domänenmodell
- Workflow-Definitionen
- Erwartungen an Privatsphäre und Sicherheit
- was ausdrücklich nicht Ziel des Produkts ist
- Anleitung zur Implementierungssequenz, sofern diese Auswirkungen auf den Umfang oder die Lieferreihenfolge hat
- Akzeptanzkriterien

Die Spezifikation sollte sich auf das Wesentliche am Produkt konzentrieren, nicht auf jedes lokale Implementierungsdetail.

## Was dort normalerweise nicht hingehört

Diese Elemente gehören oft woanders hin, es sei denn, sie wirken sich direkt auf Produktverpflichtungen aus:

- Konventionen für temporäre Repositorys
- Einrichtung lokaler Werkzeuge
- Enge Entscheidungen zur Politur der Benutzeroberfläche
- einmalige Debugging-Anleitung
- Redaktions- oder Veröffentlichungsmechanismen, die das Produktmodell nicht verändern

## Warum es bei KI-gestützter Arbeit wichtig ist

KI kann sehr schnell eine plausible Umsetzung generieren. Ohne eine klare Produktspezifikation kann diese Implementierung eher auf Bequemlichkeit als auf Absicht ausgerichtet sein.

Die Spezifikation gibt Prüfern und Mitwirkenden einen stabilen Standard für die Entscheidung, ob die generierte Ausgabe noch zum beabsichtigten Produkt gehört.

## Let Books Kontext

In Let Books ist `AGENTS.md` die Kernproduktspezifikation.

Es definiert:

- Projektzweck
- Domänen- und Workflow-Modell
- Mandantenfähigkeit und Lokalisierungsrichtung
- Manueller Workflow und AI-optionale Prinzipien
- Akzeptanzkriterien für die erste Demo

Darum ist es mehr als nur ein Überblick. Es ist die wichtigste Produktreferenz im Repository.

## Verwandte Seiten

- `implementation-guidance.md`
- `documentation-traceability.md`
- `spec-driven-development.md`
- `../../learning/de/how-to-write-a-spec-that-ai-can-follow.md`
