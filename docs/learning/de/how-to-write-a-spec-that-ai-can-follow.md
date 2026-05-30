---
title: "Wie Man Eine Spezifikation Schreibt, Der KI Folgen Kann"
topics:
  - spec-writing
  - ai-assisted-delivery
  - documentation
---
# Wie Man Eine Spezifikation Schreibt, Der KI Folgen Kann

## Zusammenfassung

Dieser Leitfaden erklärt, wie man eine Produkt- oder Funktionsspezifikation schreibt, die einer KI-gestützten Implementierung hilft, an den tatsächlichen Produktzielen ausgerichtet zu bleiben.

## Warum das wichtig ist

KI kann schnell Code erzeugen, arbeitet aber am besten mit klaren Grenzen. Wenn die Spezifikation vage ist, füllt sie Lücken oft mit generischen Annahmen.

## Was eine gute Spezifikation enthalten sollte

- den Zweck der Funktion
- die Grenzen des Umfangs
- nicht verhandelbare Regeln
- Fehlerverhalten und Fallback-Pfad
- Abnahmekriterien

## Was vermieden werden sollte

- vage Ziele wie „UX verbessern“
- Implementierungsdetails ohne Produktzweck
- Vermischung künftiger Ideen mit aktuellen Anforderungen
- versteckte Annahmen über Nutzer oder Daten

## Praktisches Muster

Verwende diese Reihenfolge:

1. Problem
2. Nutzer und Kontext
3. Ablauf im Umfang
4. Dinge außerhalb des Umfangs
5. erforderliche Regeln
6. Fallback-Verhalten
7. Abnahmekriterien
8. Prüfnotizen

## Let-Books-Kontext

`AGENTS.md`, `AGENTS-Implementation.md` und `README.md` zeigen bereits, wie eine solche geschichtete Spezifikation auch KI-Assistenten hilft.
