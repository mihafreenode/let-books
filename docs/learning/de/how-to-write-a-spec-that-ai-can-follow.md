---
title: "Wie man eine Spezifikation schreibt, der KI folgen kann"
summary: >-
  Dieser Leitfaden erklärt, wie man eine Produkt- oder Funktionsspezifikation schreibt, die dabei hilft, dass KI-gestützte Implementierung an echten Produktzielen ausgerichtet bleibt, statt in generische Ausgaben abzudriften.
topics:
  - spec-writing
  - ai-assisted-delivery
  - documentation
---
# Wie man eine Spezifikation schreibt, der KI folgen kann

## Zusammenfassung

Dieser Leitfaden erklärt, wie man eine Produkt- oder Funktionsspezifikation so formuliert, dass eine KI-gestützte Implementierung an echten Produktzielen ausgerichtet bleibt, statt in generische Ergebnisse abzudriften.

## Warum das wichtig ist

KI kann schnell Code generieren, arbeitet aber am besten, wenn die Aufgabe klare Grenzen hat.

Wenn eine Spezifikation vage ist, füllt KI Lücken oft mit plausiblen Standards:

- gängigen Architekturmustern
- generischen UI-Abläufen
- unnötigen Abstraktionen
- erfundenen Annahmen darüber, was das Produkt tun soll

Das Ergebnis kann ausgearbeitet wirken und trotzdem am Ziel vorbeigehen.

## Was eine nützliche KI-orientierte Spezifikation enthalten sollte

### 1. Produktzweck

Beschreiben Sie, warum die Funktion existiert.

Schlecht:

> Ein Buchformular hinzufügen.

Besser:

> Ein schnelles Intake-Formular hinzufügen, mit dem ein Spender ein physisches Buchexemplar in Sekunden katalogisieren kann, während er an einem Regal oder einer Box steht.

Der Zweck zeigt der implementierenden Person, worauf sie optimieren soll.

### 2. Umfangsgrenzen

Beschreiben Sie, was im Umfang liegt und was außerhalb des Umfangs liegt.

Beispiel:

- im Umfang: Cover-Foto, ISBN-Eingabe, Speicherort, speichern und fortfahren
- außerhalb des Umfangs: OCR, Cloud-Synchronisierung, institutioneller Review-Arbeitsablauf

Das verhindert, dass der Assistent eine kleine Aufgabe zu einer Mini-Plattform aufbläht.

### 3. Erforderliches Verhalten

Listen Sie nicht verhandelbare Regeln auf.

Beispiele aus dem Let-Books-Ansatz:

- manueller Arbeitsablauf muss ohne KI funktionieren
- unvollständige Daten müssen erlaubt sein
- physische Exemplare müssen von bibliografischen Datensätzen getrennt bleiben
- nutzerseitiges Verhalten muss lokalisierbar bleiben

Diese Regeln sind wichtiger als Implementierungsstil.

### 4. Fehler- und Fallback-Verhalten

KI-generierte Lösungen optimieren oft den Happy Path. Eine gute Spezifikation erklärt, was passiert, wenn optionale Systeme ausfallen.

Beispiel:

- wenn die Metadatensuche fehlschlägt, bleibt manuelle Eingabe verfügbar
- wenn OCR deaktiviert ist, funktioniert der Intake weiterhin
- wenn Export-Validierung fehlschlägt, erhält der Nutzer einen klaren Bericht statt eines stillen Teilimports

### 5. Akzeptanzkriterien

Formulieren Sie die Erfolgsbedingung in beobachtbaren Begriffen.

Beispiel:

1. Nutzer wählt eine Box aus
2. Nutzer gibt ISBN ein oder scannt sie
3. Nutzer kann speichern, auch wenn kein Metadatenanbieter antwortet
4. Buch erscheint am gewählten Ort

Akzeptanzkriterien geben Reviewern und KI-Systemen ein stabiles Ziel.

## Was man vermeiden sollte

- vage Ziele wie „UX verbessern“
- Implementierungsdetails ohne Produktzweck
- vermischte Zukunftsideen, die als aktuelle Anforderungen präsentiert werden
- versteckte Annahmen über Nutzerrollen oder Datenqualität
- reine Benennungs-Spezifikationen, die keinen Arbeitsablauf beschreiben

## Ein praktisches Schreibmuster

Verwenden Sie beim Entwurf einer Funktionsspezifikation diese kompakte Struktur.

1. Problem
2. Nutzer und Kontext
3. Arbeitsablauf im Umfang
4. Elemente außerhalb des Umfangs
5. erforderliche Regeln
6. Fallback-Verhalten
7. Akzeptanzkriterien
8. Verifikationshinweise

## Wie das auf Let Books abgebildet wird

Das Repository demonstriert dieses Muster bereits auf mehreren Ebenen:

- `AGENTS.md` definiert Produktzweck, Arbeitsabläufe und Akzeptanzkriterien
- `AGENTS-Implementation.md` definiert taktische Delivery-Einschränkungen
- `README.md` trennt aktuellen Zustand von zukünftiger Richtung

Dieser mehrschichtige Ansatz ist nützlich, weil KI besser arbeitet, wenn Wissen über das Produkt klar festgehalten und überprüfbar bleibt.

## Übung

Nehmen Sie eine Let-Books-Funktion wie Box-QR-Scannen oder Excel-Entscheidungsimport und schreiben Sie eine einseitige Spezifikation mit der obigen Struktur.

Bitten Sie danach einen Coding-Assistenten, sie zu implementieren.

Prüfen Sie anschließend die Ausgabe gegen die Spezifikation, bevor Sie den Codestil prüfen. Diese Reihenfolge ist wichtig.

## Weiterführende Lektüre

- `../spec-driven-content-program.md`
- `../wiki/de/spec-driven-development.md`
- `../wiki/de/demo-spec-alignment.md`
- `../blog/de/spec-driven-development-for-ai-projects.md`
