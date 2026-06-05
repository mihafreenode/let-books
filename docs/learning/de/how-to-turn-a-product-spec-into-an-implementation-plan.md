---
title: "Wie man eine Produktspezifikation in einen Implementierungsplan umsetzt"
summary: >-
  Dieser Leitfaden erklärt, wie man eine Produktspezifikation in einen konkreten Implementierungsplan übersetzt, ohne die Absicht, Grenzen oder Arbeitsablaufregeln zu verlieren, die die Spezifikation überhaupt erst nützlich gemacht haben.
topics:
  - spec-writing
  - implementation-planning
  - project-management
---
# Wie man eine Produktspezifikation in einen Implementierungsplan umsetzt

## Zusammenfassung

Dieser Leitfaden erklärt, wie sich eine Produktspezifikation in einen konkreten Implementierungsplan überführen lässt, ohne die Absicht, Grenzen oder Arbeitsablaufregeln zu verlieren, die die Spezifikation überhaupt erst nützlich machen.

## Warum dieser Schritt wichtig ist

Eine Spezifikation beschreibt, was das Produkt tun soll und warum es das tun soll.

Ein Implementierungsplan beschreibt, wie das Team dieses Verhalten in einer Reihenfolge umsetzt, die überprüfbar, testbar und realistisch ist.

Viele Projekte scheitern in der Lücke zwischen diesen beiden Dokumenten.

Die Spezifikation kann gut sein, aber der Plan wird zu vage, zu technisch oder zu losgelöst von Nutzerarbeitsabläufen. Bei KI-gestützter Arbeit ist das noch häufiger, weil generierter Code so wirken kann, als hätte die Planung bereits stattgefunden, obwohl das nicht der Fall war.

## Beginnen Sie damit, die Produktentscheidungen zu extrahieren

Bevor Sie eine Spezifikation in Aufgaben überführen, identifizieren Sie die Entscheidungen, die die Implementierung tatsächlich einschränken.

Suchen Sie nach:

- Produktzweck
- Nutzerarbeitsablauf
- Umfangsgrenzen
- nicht verhandelbaren Regeln
- Fallback-Verhalten
- Akzeptanzkriterien

Das sind die Teile, die den Übergang von der Spezifikation zum Plan überleben sollten.

Wenn der Plan sie verliert, wird daraus meist eher eine technische Aufgabenliste als ein wirklicher Lieferplan.

## Den Plan in Ebenen gliedern

Ein guter Implementierungsplan hat in der Regel mindestens drei Ebenen.

### 1. Arbeitsablaufebene

Beschreiben Sie den nutzerseitigen Ablauf in kurzen, konkreten Schritten.

Beispiel:

1. Nutzer wählt eine Lagerbox aus
2. Nutzer scannt oder gibt eine ISBN ein
3. Nutzer kann auch dann fortfahren, wenn die Suche fehlschlägt
4. Nutzer speichert das physische Exemplar am ausgewählten Ort

Diese Ebene schützt die Nutzerreise davor, unter technischen Aufgaben begraben zu werden.

### 2. Systemebene

Beschreiben Sie die Teile des Systems, die diesen Arbeitsablauf unterstützen müssen.

Beispiele:

- Änderungen am Datenmodell
- UI-Bildschirme oder Formulare
- Validierungsregeln
- Import-/Export-Verhalten
- Lokalisierungsaktualisierungen
- Verifikationsbedarf

Diese Ebene verbindet Produktverhalten mit technischer Arbeit.

### 3. Delivery-Ebene

Zerlegen Sie die Systemarbeit in eine Reihenfolge, die tatsächlich implementiert und geprüft werden kann.

Beispiele:

1. Domänenmodell definieren oder aktualisieren
2. zentralen UI-Ablauf implementieren
3. Fallback-Verhalten hinzufügen
4. Validierung und Tests hinzufügen
5. Dokumentation und Beispiele aktualisieren

Auf dieser Ebene wird der Plan planbar.

## Den Plan durch Einschränkungen formen lassen

Implementierungspläne driften oft ab, wenn sie als generische Engineering-Schritte umgeschrieben werden.

Um das zu vermeiden, halten Sie zentrale Produkteinschränkungen im Plan sichtbar.

Für Arbeit im Stil von Let Books kann das Einschränkungen enthalten wie:

- manuelle Arbeitsabläufe müssen weiterhin ohne KI funktionieren
- unvollständige Daten müssen erlaubt sein
- physische Exemplare müssen von bibliografischen Datensätzen getrennt bleiben
- Lokalisierung darf nicht als optionale Politur behandelt werden
- Dokumentation des aktuellen Zustands muss ehrlich bleiben, was jetzt existiert

Diese Punkte sollten nicht nur in der ursprünglichen Spezifikation stehen. Sie sollten auch in Planungsnotizen und Review-Kriterien auftauchen.

## Akzeptanzkriterien zur Gestaltung des Task-Zuschnitts nutzen

Eine der einfachsten Methoden, eine Spezifikation in einen Plan umzusetzen, ist, bei den Akzeptanzkriterien zu beginnen.

Fragen Sie für jedes Kriterium:

- welche UI oder welcher Arbeitsablauf das unterstützt
- welche Daten oder welches Systemverhalten das unterstützt
- welcher Fehlerfall trotzdem erfolgreich sein muss
- wie wir es verifizieren werden

Diese Methode hält den Plan an beobachtbare Ergebnisse gebunden statt an abstrakte Architekturdiskussionen.

## KI-gestützte Planung: worauf zu achten ist

KI kann helfen, schnell einen Implementierungsplan zu erzeugen, führt aber oft wiederkehrende Probleme ein:

- zusätzliche Abstraktionen ohne Produktbedarf
- nach Technologie statt nach Arbeitsablauf gruppierte Aufgaben
- optimistische Auslassung von Fallback-Verhalten
- versteckte Annahmen über Backend-Verfügbarkeit oder Datenqualität
- Pläne, die vollständig wirken, aber Dokumentation und Verifikation ignorieren

Fragen Sie bei der Prüfung eines KI-generierten Implementierungsplans, ob er noch das tatsächliche Regelwerk des Produkts widerspiegelt.

## Eine praktische Planungsvorlage

Verwenden Sie eine Struktur wie diese:

1. Funktionsziel
2. Zusammenfassung des Nutzerarbeitsablaufs
3. Einschränkungen und nicht verhandelbare Regeln
4. Delivery-Slices
5. Verifikationsstrategie
6. erforderliche Dokumentationsaktualisierungen

Ein Lieferabschnitt könnte zum Beispiel so aussehen:

- Speicherort-Auswahl zum Intake-Ablauf hinzufügen
- Speichern auch ohne erfolgreiche Metadatensuche erlauben
- physisches Exemplar getrennt von bibliografischen Metadaten persistieren
- Hilfetext und Verifikationshinweise aktualisieren

Das ist deutlich stärker als eine flache Liste wie:

- Formular erstellen
- API-Aufruf hinzufügen
- Tests hinzufügen

## Let-Books-Beispiel

Das Repository enthält bereits die grundlegenden Bausteine für diesen Planungsstil:

- `AGENTS.md` für Produktzweck, Arbeitsabläufe und Akzeptanzkriterien
- `AGENTS-Implementation.md` für Delivery-Einschränkungen und Repository-Regeln
- `README.md` für Erwartungen an den aktuellen Zustand
- `docs/Development.md` und `docs/Deployment.md` für Validierungs- und Delivery-Kontext

Das bedeutet, der Implementierungsplan muss seine eigene Logik nicht erfinden. Er sollte diese Ebenen in eine abgegrenzte Delivery-Sequenz übersetzen.

## Review-Checkliste

Bevor Sie einen Implementierungsplan akzeptieren, prüfen Sie:

1. Bewahrt er den Nutzerarbeitsablauf aus der Spezifikation?
2. Hält er die nicht verhandelbaren Produkteinschränkungen sichtbar?
3. Enthält er Fallback- und Fehlerverhalten?
4. Enthält er Dokumentations- und Verifikationsarbeit, nicht nur Code-Aufgaben?
5. Könnte ein anderer Mitwirkender auf dieser Grundlage implementieren, ohne die Produktabsicht erraten zu müssen?

## Weiterführende Lektüre

- `../spec-driven-content-program.md`
- `how-to-write-a-spec-that-ai-can-follow.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `../wiki/de/spec-driven-development.md`
- `../blog/de/spec-driven-development-in-let-books.md`
