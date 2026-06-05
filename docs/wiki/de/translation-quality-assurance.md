---
title: "Qualitätssicherung der Übersetzung"
summary: >-
  Übersetzungs-QA kombiniert automatisierte Validierung, Rechtschreibprüfung, Terminologie-Review, Prüfungen zur Barrierefreiheit und menschliches Urteilsvermögen.
topics:
  - translation-quality
  - qa
  - localization
---
# Qualitätssicherung der Übersetzung

## Zusammenfassung

Übersetzungs-QA kombiniert automatisierte Validierung, Rechtschreibprüfung, Terminologie-Review, Prüfungen zur Barrierefreiheit und menschliches Urteilsvermögen.

## Häufige Prüfungen

- fehlende Übersetzungen
- englische Leckstellen
- leserseitige Vollständigkeit der Lokalisierung
- strukturelle Parität gegenüber frisch generierter Ausgabe
- muttersprachliche Lesbarkeit und natürlicher Ausdruck
- Platzhalter-Abweichungen
- defekte Links
- Glossardrift
- Abdeckung von Barrierefreiheits-Texten
- Parität von Screenshots und Diagrammen

## Anforderung an frisch generierte Ausgaben

Vor struktureller Paritätsprüfung, semantischem Review oder manuellem Artikelvergleich:

1. generieren Sie die Site aus dem aktuellen Zustand des Repositorys neu
2. führen Sie Validatoren gegen die aktuelle generierte Ausgabe aus
3. prüfen Sie die generierten HTML-Artefakte
4. führen Sie erst dann die manuelle Paritätsbewertung durch

Diese Regel existiert, weil Quell-Markdown und generierte Ausgabe während der Entwicklung vorübergehend auseinanderlaufen können und QA-Befunde auf aktuellen Artefakten statt auf veralteten generierten Dateien basieren sollten.

## Strukturelle Paritätsprüfung

Die strukturelle Paritätsprüfung sollte nach Verlusten an Leserwert suchen, auch wenn der lokalisierte Artikel die Bedeutung noch weitgehend bewahrt.

Typische Signale sind:

- fehlende Hauptabschnitte
- eingestürzte Überschriftenhierarchie
- fehlende Beispiele
- komprimierte praktische Anleitung
- reduzierte Governance-Diskussion
- verkürzte Review- oder Validierungsanleitung

Warnungen aus strukturellen Paritäts-Validatoren sind Prüfhinweise, kein automatischer Beweis für eine schlechte Übersetzung. Sie sollten zusammen mit dem generierten HTML und, wo nötig, mit im Browser gerenderter Ausgabe interpretiert werden.

## Review des muttersprachlichen Ausdrucks

Übersetzungs-QA sollte auch nach Text suchen, der technisch korrekt ist, aber nicht dem entspricht, was ein Muttersprachler natürlich wählen würde.

Dazu gehören:

- direkte englische Satzstruktur
- direkte Übersetzung englischer Idiome
- Formulierungen, die übersetzt statt originär verfasst klingen
- Terminologie, die die Ausgangssprache noch erkennen lässt

Beispiele für dieses Muster sind Formulierungen, die etwa Folgendem entsprechen:

- Kandidateninhalt
- Validierungsstrategie
- Workflow-Artefakt
- kuratierte Werkzeuge
- kuratierte Skills

Das sind nicht immer Übersetzungsfehler. Oft sind es Fälle, in denen ein Muttersprachler den Satz instinktiv umformulieren würde.

## Präferenztest für Muttersprachler

Bei wichtigen Prosateilen sollten Reviewer fragen:

> Würde ein kompetenter Muttersprachler diese Idee wahrscheinlich so formulieren, wenn er sie von Grund auf neu schreiben würde?

Wenn nicht, sollten Reviewer:

- die Bedeutung bewahren
- die semantische Parität bewahren
- die strukturelle Parität bewahren
- die Formulierung verbessern

Dieser Test ist besonders nützlich für:

- Einleitungen
- Zusammenfassungen
- pädagogische Erklärungen
- praktische Anleitung
- Governance-Diskussionen
- Schlussabschnitte

## Review des natürlichen Ausdrucks

Behandeln Sie technisch korrekte, aber unnatürliche Formulierungen als Qualitätsproblem.

Reviewer sollten Formulierungen bevorzugen, die in der Zielsprache natürlich verfasst klingen, auch wenn die ursprüngliche Übersetzung verständlich ist.

Das Ziel ist nicht nur eine korrekte Übersetzung. Das Ziel ist ein Dokument, das sich so anfühlt, als sei es ursprünglich für muttersprachliche Leser geschrieben worden.

Verbesserungen der natürlichen Sprache dürfen Folgendes nicht schwächen:

- semantische Parität
- strukturelle Parität
- pädagogische Abdeckung
- Beispiele
- praktische Anleitung
- Governance-Anleitung

## Lesergerichteter Lokalisierungsvalidator

Eine Validator-Klasse sollte CI ausdrücklich fehlschlagen lassen, wenn eine Seite lokalisiert wirkt, aber weiterhin leserseitige Inhalte in der Ausgangssprache zeigt.

Beispiele, die fehlschlagen sollten:

- lokalisierter Titel mit englischer Zusammenfassung
- lokalisierter Artikel mit englischen Tags
- lokalisierter Artikel mit englischen Überschriften oder Listen
- lokalisierter Artikel mit englischen Callouts oder Beschriftungen
- lokalisierter Artikel mit englischen Diagrammbeschriftungen oder Alternativtext
- `related-content`-Karten in gemischten Sprachen

Das ist eine Fehlerbedingung und nicht nur eine Warnung, weil Leser solche Seiten als sichtbar unfertig wahrnehmen.

## Prüfung der Fehlerklassen

Übersetzungs-QA sollte explizite Fehlerklassen mit folgenden Feldern pflegen:

- Beschreibung
- Vorkommenszahl
- Grundursache
- Validator-Abdeckung
- Wiederholungsrisiko
- Schließungsplan

Erforderliche Kategorien sind:

- unübersetzte Zusammenfassungen
- unübersetzte Haupttexte
- Veröffentlichung von Platzhalterentwürfen
- unübersetzte Metadaten
- gemischtsprachige Veröffentlichung
- künftig entdeckte Klassen

Eine Klasse ist erst geschlossen, wenn ihre Anzahl null erreicht und CI ihre Rückkehr nicht mehr ohne Fehler zulässt.

## Nachweise menschlicher Reviews

Übersetzungs-QA sollte außerdem kurze menschliche Review-Aufzeichnungen für repräsentative AI-gestützte Korrekturen bewahren.

Minimale Felder:

- Originaltext
- korrigierter Text
- Fehlerkategorie
- Hypothese zur Grundursache
- Begründung des Reviewers

Befunde aus Reviews durch Muttersprachler sollten als wachsendes Korpus erhalten bleiben, nicht als isolierte Einmalnotizen. Wiederkehrende Befunde sollten in Validator-Design, Mitwirkenden-Richtlinien und künftige Anweisungen für AI-Agenten zurückfließen.

Vor der Freigabe einer AI-gestützten Übersetzung sollten Reviewer:

- relevante Einträge aus dem strukturierten Befundkorpus für diese Sprache oder dieses Thema lesen
- wiederkehrende Fehlermuster aus menschlichen Reviews prüfen
- bestätigen, dass der aktuelle Entwurf bekannte Probleme vor der Freigabe nicht erneut einführt

Jeder gemeldete Muttersprachler-Defekt sollte außerdem bewertet werden im Hinblick auf:

- Inhaltskorrektur
- Aktualisierung der Review-Richtlinien
- Aktualisierung der Terminologie-Richtlinien
- Verbesserung des Prompts
- Validator-Gelegenheit
- Gelegenheit für einen Regressionstest

Das ist wichtig, weil selbst dann, wenn die Gesamtbedeutung erhalten bleibt, von AI erzeugte Übersetzungen muttersprachliche Reviews erfordern können, um feine Probleme bei Grammatik, Modalität, Terminologie und domänenspezifischem Register zu korrigieren. Solche Probleme sind allein mit automatisierten Qualitätsmetriken oft schwer zu erkennen.

Konkrete gemeldete Fehler sind nicht nur beratend. Jeder einzelne sollte entweder behoben, systematisiert, bewusst mit Begründung offengelassen oder weiterhin explizit im Befundkorpus verfolgt werden.

## Häufige Taxonomie von KI-Übersetzungsfehlern

- Grammatik
- Modalität
- Terminologie
- Register
- Flüssigkeit
- wörtliche Übersetzung
- Mehrdeutigkeit
- Kontextverlust
- Wortstellung
- Kollokation
- Schrift oder Orthografie
- Formulierung von Domänenrichtlinien
- Formulierung zur Barrierefreiheit

## Leichte Benchmark-Bewertung

Für wiederholbare Bewertung von AI-Übersetzungen sollte eine leichte 0-bis-3-Rubrik verwendet werden, statt sich nur auf ein Bestanden/Nicht-bestanden-Urteil zu verlassen.

Empfohlene Dimensionen:

- Bedeutungsgenauigkeit
- Grammatik und Flüssigkeit
- Terminologie und Domänenpassung
- Register und Stil
- Review-Aufwand

Empfohlene Freigabe-Labels:

- Blocker
- größere Überarbeitung
- kleinere Überarbeitung
- mit Review-Freigabe bereit

Das schafft scorecard-taugliche Daten, ohne ein schwergewichtiges Framework zur Lokalisierungsmessung zu benötigen.

## Verwandte Seiten

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../../learning/de/how-to-run-localization-qa-in-ci.md`
