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

## Gewünschte Prüfungen

- Konsistenz des lokalen Inventars
- frische Site-Generierung vor der Paritätsprüfung
- Linkvalidierung
- Artikel- und Seitenerstellung
- Rechtschreibprüfung, sofern verfügbar
- Platzhalterparität
- Rauchtests zur Zugänglichkeit
- Überprüfung der Screenshot- und Diagrammabdeckung

## Regel für frische Generierung

Lokalisierungs-CI- und Review-Workflows dürfen Paritätsbefunde nicht auf veraltete generierte Artefakte stützen.

Erforderliche Reihenfolge:

1. die Site aus dem aktuellen Repository-Stand generieren
2. Validatoren gegen die frisch generierte Ausgabe ausführen
3. bei Bedarf generiertes HTML prüfen
4. bei Bedarf gerenderte Ausgabe prüfen

Das ist wichtig, weil Quell-Markdown, generiertes HTML, bereitgestellte Ausgabe und im Browser gerendertes Verhalten während der Entwicklung vorübergehend auseinanderlaufen können.

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

1. Artikel-HTML generieren
2. Indexseiten generieren
3. verbleibende Navigationsnachbearbeitung nur ausführen, wenn sie noch erforderlich ist
4. frisch generierte Ausgabe validieren
5. generiertes HTML oder gerenderte Ausgabe prüfen, wenn der Workflow eine menschliche Paritätsbewertung verlangt

Wenn ein Validator immer noch den alten `topic-nav`-Block erwartet, aktualisieren Sie den Validator auf den aktuellen Vertrag, anstatt die generierten HTML zu patchen.

## Verwandte Seiten

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/de/how-to-run-localization-qa-in-ci.md`
