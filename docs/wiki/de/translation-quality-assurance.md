---
title: "Qualitätssicherung der Übersetzung"
summary: >-
  Die Übersetzungsqualitätssicherung kombiniert automatisierte Validierung, Rechtschreibprüfung, Terminologieprüfung, Barrierefreiheitsprüfungen und menschliches Urteilsvermögen.
topics:
  - translation-quality
  - qa
  - localization
---
# Qualitätssicherung der Übersetzung

## Zusammenfassung

Die Übersetzungsqualitätssicherung kombiniert automatisierte Validierung, Rechtschreibprüfung, Terminologieprüfung, Barrierefreiheitsprüfungen und menschliches Urteilsvermögen.

## Gemeinsame Schecks

- fehlende Übersetzungen
- Englisches Leck
- Vollständigkeit der leserorientierten Lokalisierung
- Nichtübereinstimmung der Platzhalter
- defekte Links
- Glossardrift
- Barrierefreie Textabdeckung
- Screenshot- und Diagrammparität

## Lesergerichteter Lokalisierungsvalidator

Eine Validatorklasse sollte CI explizit ausfallen lassen, wenn eine Seite lokalisiert erscheint, aber dennoch für den Leser sichtbare Inhalte in der Quellsprache bereitstellt.

Beispiele, die scheitern sollten:

- Lokalisierter Titel mit englischer Zusammenfassung
- Lokalisierter Artikel mit englischen Tags
- lokalisierter Artikel mit englischen Überschriften oder Listen
- Lokalisierter Artikel mit englischen Legenden oder Bildunterschriften
- Lokalisierter Artikel mit englischen Diagrammbeschriftungen oder Alternativtext
- Karten mit verwandten Inhalten in verschiedenen Sprachen

Hierbei handelt es sich um einen Fehlerzustand und nicht nur um eine Warnung, da Leser solche Seiten als sichtbar unvollendet empfinden.

## Prüfung der Fehlerklasse

Die Übersetzungsqualitätssicherung sollte explizite Fehlerklassen pflegen mit:

- Beschreibung
- Anzahl der Vorkommnisse
- Grundursache
- Validator-Abdeckung
- Wiederholungsrisiko
- Schließungsplan

Zu den erforderlichen Kategorien gehören:

- unübersetzte Zusammenfassungen
- unübersetzte Körper
- Platzhalter-Entwurfsveröffentlichung
- unübersetzte Metadaten
- Veröffentlichung in gemischten Sprachen
- Zukünftig entdeckte Klassen

Eine Klasse wird nur geschlossen, wenn ihre Anzahl Null erreicht und CI verhindert, dass sie ohne Fehler zurückkehrt.

## Menschliche Überprüfungsbeweise

Die Übersetzungsqualitätssicherung sollte auch kurze Aufzeichnungen menschlicher Überprüfungen für repräsentative KI-gestützte Korrekturen aufbewahren.

Mindestfelder:

- Originaltext
- Text korrigiert
- Fehlerkategorie
- Ursachenhypothese
- Begründung des Rezensenten

Die Ergebnisse der Überprüfung durch Muttersprachler sollten als wachsender Korpus und nicht als isolierte, einmalige Notizen aufbewahrt werden. Wiederholte Erkenntnisse sollten in das Design des Validators, die Anleitung der Mitwirkenden und zukünftige Anweisungen für KI-Agenten einfließen.

Vor der Freigabe einer KI-gestützten Übersetzung sollten Reviewer:

- relevante Einträge im strukturierten Erkenntniskorpus für diese Sprache oder dieses Thema prüfen
- wiederkehrende Fehlermuster aus menschlichen Reviews prüfen
- bestätigen, dass der aktuelle Entwurf vor der Freigabe keine bekannten Probleme erneut einführt

Jeder gemeldete muttersprachliche Defekt sollte außerdem im Hinblick auf Folgendes bewertet werden:

- Korrektur des Inhalts
- Aktualisierung der Review-Leitlinien
- Aktualisierung der Terminologie-Leitlinien
- Verbesserung des Prompts
- Möglichkeit für einen Validator
- Möglichkeit für einen Regressionstest

Dies ist wichtig, denn selbst wenn die Gesamtbedeutung erhalten bleibt, erfordern KI-generierte Übersetzungen möglicherweise eine Überprüfung durch einen Muttersprachler, um subtile Probleme in Grammatik, Modalität, Terminologie und domänenspezifischem Register zu korrigieren. Diese Probleme lassen sich allein durch automatisierte Qualitätsmetriken oft nur schwer erkennen.

Konkrete gemeldete Fehler von Muttersprachlern sind nicht nur beratend. Jeder einzelne sollte behoben, systematisiert, mit Begründung absichtlich ungelöst gelassen oder weiterhin ausdrücklich im Erkenntniskorpus nachverfolgt werden.

## Häufige Taxonomie von KI-Übersetzungsfehlern

- Grammatik
- Modalität
- Terminologie
- Registrieren
- Geläufigkeit
- wörtliche Übersetzung
- Mehrdeutigkeit
- Kontextverlust
- Wortreihenfolge
- Kollokation
- Schrift oder Rechtschreibung
- Formulierung der Domänenrichtlinien
- Formulierung zur Barrierefreiheit

## Leichte Benchmark-Bewertung

Für eine wiederholbare KI-Übersetzungsbewertung verwenden Sie eine einfache 0-3-Rubrik, anstatt sich nur auf die Beurteilung „Bestanden/Nicht bestanden“ zu verlassen.

Empfohlene Abmessungen:

- was Genauigkeit bedeutet
- Grammatik und Sprachkompetenz
- Terminologie und Domänenanpassung
- registrieren und stylen
- Überprüfungsaufwand

Empfohlene Veröffentlichungsetiketten:

- Blocker
- große Überarbeitung
- kleinere Überarbeitung
- Bereit mit Freigabe der Überprüfung

Dadurch werden Scorecard-freundliche Daten erstellt, ohne dass ein umfangreiches Lokalisierungs-Mess-Framework erforderlich ist.

## Verwandte Seiten

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../../learning/de/how-to-run-localization-qa-in-ci.md`
