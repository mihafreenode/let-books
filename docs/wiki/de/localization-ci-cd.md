---
title: "Lokalisierung CI und CD"
summary: >-
  Lokalisierung CI/CD validiert kontinuierlich mehrsprachige Inhalte, sodass fehlende Assets, fehlerhafte Links und Rückschritte bei der Zugänglichkeit frühzeitig erkannt werden.
topics:
  - continuous-localization
  - qa
  - ci-cd
---
# Lokalisierung CI und CD

## Zusammenfassung

Lokalisierung CI/CD validiert kontinuierlich mehrsprachige Inhalte, sodass fehlende Assets, fehlerhafte Links und Rückschritte bei der Zugänglichkeit frühzeitig erkannt werden.

## Gewünschte Schecks

- Konsistenz des lokalen Inventars
- Linkvalidierung
- Artikel- und Seitenerstellung
- Rechtschreibprüfung, sofern verfügbar
- Platzhalterparität
- Rauchtests zur Zugänglichkeit
- Überprüfung der Screenshot- und Diagrammabdeckung

## Fortschritt der Fehlerklasse

Lokalisierungs-CI sollte beides verfolgen:

- `Localization Debt`
- `Open Defect Classes`

Die Verschuldung misst die verbleibende Quelleninhaltsarbeit.

Offene Fehlerklassen messen, ob das System das erneute Auftreten einer Problemkategorie noch zulassen kann.

Sobald eine Fehlerklasse null Vorkommnisse erreicht, sollte ihr Validator, soweit möglich, von der Empfehlung zur Blockierung übergehen.

Beispiele:

- Platzhalter-Entwurfsveröffentlichung
- unübersetzte Zusammenfassungen
- unübersetzte Metadaten
- unübersetzte Körper
- Veröffentlichung in gemischten Sprachen

CI ist nicht nur ein Gatekeeper. Es handelt sich um den Mechanismus, der verhindert, dass geschlossene Fehlerklassen stillschweigend erneut geöffnet werden.

## Generierungsreihenfolge für die Artikelnavigation

Der aktuelle Vertrag zur Navigation öffentlicher Artikel lautet:

- `post-article-nav`
- `related-content`
- `related-topic-nav`

Generierung und Validierung sollten in dieser Reihenfolge erfolgen:

1. Artikel HTML generieren
2. Indexseiten generieren
3. Führen Sie die verbleibende Navigationsnachbearbeitung nur aus, wenn dies noch erforderlich ist
4. Validieren Sie die Ausgabe

Wenn ein Validator immer noch den alten `topic-nav`-Block erwartet, aktualisieren Sie den Validator auf den aktuellen Vertrag, anstatt die generierten HTML zu patchen.

## Verwandte Seiten

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/de/how-to-run-localization-qa-in-ci.md`