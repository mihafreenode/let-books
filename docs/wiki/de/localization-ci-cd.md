---
title: "Lokalisierung CI und CD"
summary: >-
  Lokalisierungs-CI/CD validiert mehrsprachige Inhalte kontinuierlich, damit fehlende Assets, defekte Links und Regressionen bei der Barrierefreiheit früh erkannt werden.
topics:
  - continuous-localization
  - qa
  - ci-cd
---
# Lokalisierung CI und CD

## Zusammenfassung

Lokalisierungs-CI/CD validiert mehrsprachige Inhalte kontinuierlich, damit fehlende Assets, defekte Links und Regressionen bei der Barrierefreiheit früh erkannt werden.

## Gewünschte Prüfungen

- Konsistenz des Locale-Inventars
- frische Site-Generierung vor der Paritätsprüfung
- Link-Validierung
- Generierung von Artikeln und Seiten
- Rechtschreibprüfung, wo verfügbar
- Platzhalter-Parität
- einfache Barrierefreiheits-Tests
- Prüfungen zur Abdeckung von Screenshots und Diagrammen

## Regel für frische Generierung

Lokalisierungs-CI- und Review-Workflows dürfen Paritätsbefunde nicht auf veraltete generierte Artefakte stützen.

Erforderliche Reihenfolge:

1. generieren Sie die Site aus dem aktuellen Zustand des Repositorys
2. führen Sie Validatoren gegen die frisch generierte Ausgabe aus
3. prüfen Sie bei Bedarf generiertes HTML
4. prüfen Sie bei Bedarf gerenderte Ausgabe

Das ist wichtig, weil Quell-Markdown, generiertes HTML, bereitgestellte Ausgabe und im Browser gerendertes Verhalten während der Entwicklung vorübergehend auseinanderlaufen können.

## Prüfpriorität

Wenden Sie die strengste muttersprachliche und Paritätsprüfung zuerst an auf:

- neu erstellte Inhalte
- kürzlich erweiterte Inhalte
- Inhalte, die aktuell bearbeitet werden

Erweitern Sie dieselben Review-Standards anschließend schrittweise auf ältere lokalisierte Inhalte.

## Fortschritt von Fehlerklassen

Lokalisierungs-CI sollte beides nachverfolgen:

- `Localization Debt`
- `Open Defect Classes`

Der Schuldenstand misst die verbleibende Arbeit an Quellinhalten.

Offene Fehlerklassen messen, ob das System eine Problemkategorie weiterhin wieder auftreten lassen kann.

Sobald eine Fehlerklasse null Vorkommen erreicht, sollte ihr Validator, wo praktikabel, von beratend auf blockierend umgestellt werden.

Beispiele:

- Veröffentlichung von Platzhalterentwürfen
- unübersetzte Zusammenfassungen
- unübersetzte Metadaten
- unübersetzte Haupttexte
- gemischtsprachige Veröffentlichung

CI ist nicht nur ein Torwächter. Es ist der Mechanismus, der verhindert, dass geschlossene Fehlerklassen stillschweigend wieder geöffnet werden.

## Generierungsreihenfolge für die Artikelnavigation

Der aktuelle Vertrag für die öffentliche Artikelnavigation lautet:

- `post-article-nav`
- `related-content`
- `related-topic-nav`

Generierung und Validierung sollten in dieser Reihenfolge erfolgen:

1. generieren Sie Artikel-HTML
2. generieren Sie Indexseiten
3. führen Sie verbleibende Navigations-Nachverarbeitung nur dann aus, wenn sie weiterhin erforderlich ist
4. validieren Sie die frisch generierte Ausgabe
5. prüfen Sie generiertes HTML oder gerenderte Ausgabe, wenn der Workflow eine menschliche Paritätsbewertung verlangt

Wenn ein Validator noch den veralteten Block `topic-nav` erwartet, aktualisieren Sie den Validator auf den aktuellen Vertrag, anstatt generiertes HTML zu flicken.

## Verwandte Seiten

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/de/how-to-run-localization-qa-in-ci.md`
