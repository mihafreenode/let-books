# Programm für Lokalisierung im großen Maßstab

## Zusammenfassung

Dieses Handbuch definiert Lokalisierung im großen Maßstab bei Let Books als langfristiges Betriebsmodell für mehrsprachige Veröffentlichung, Review, Validierung, Pflege und kontinuierliches Lernen.

Seine zentrale These ist einfach:

> Lokalisierung im großen Maßstab ist nicht in erster Linie ein Übersetzungsproblem.
>
> Sie ist ein Problem des Feedback-System-Designs und eines mehrsprachigen Wissenssystems.

## Grundidee

Das Ziel ist nicht nur, Wörter zu übersetzen.

Das Ziel ist, Menschen dabei zu helfen, zu lernen, teilzunehmen, beizutragen, zu lehren, Wissen zu bewahren und auf Informationen in der Sprache zuzugreifen, die sie am besten verstehen, während das mehrsprachige System gleichzeitig über die Zeit hinweg tragfähig bleibt.

## Programmebenen

- `docs/blog/` erklärt, warum Lokalisierung in der Praxis wichtig ist.
- `docs/wiki/` definiert dauerhafte Regeln, Modelle und Governance.
- `docs/learning/` übersetzt das Thema in operative Arbeitsabläufe.
- `docs/style-guide/` definiert Regeln für Mitwirkende, Terminologie, Review und Veröffentlichung.
- `docs/sources/` hält wichtige Aussagen nachvollziehbar.
- `docs/localization-audit-report.md` verfolgt Schulden, Fehlerklassen und Schließungsstatus.

## Lokalisierung ist ein System, kein Projekt

Viele Lokalisierungsbemühungen werden wie endliche Projekte behandelt:

```text
Übersetzen
Veröffentlichen
Fertig
```

Lokalisierung im großen Maßstab behandelt Lokalisierung stattdessen als Betriebssystem:

```text
Erstellen
Übersetzen
Validieren
Verbessern
Pflegen
Aktualisieren
Drift verhindern
Wiederholen
```

Die Schwierigkeit besteht nicht nur darin, einmal Übersetzungen zu erzeugen.

Die Schwierigkeit besteht darin, ein mehrsprachiges Wissenssystem über die Zeit zu betreiben, ohne Abdeckung, Vollständigkeit, Qualität oder Aktualität zu verlieren.

## KI funktioniert am besten in Feedback-Schleifen

KI ist in der Lokalisierung nützlich, aber ihr Nutzen hängt von der Qualität des umgebenden Feedback-Systems ab.

Die wichtigsten Feedback-Ebenen sind:

- CI-Prüfungen
- strukturelle Validatoren
- Rechtschreibprüfungen
- Terminologieprüfungen
- semantische Paritätsprüfungen
- Barrierefreiheitsprüfungen
- Browser- und Rendering-Prüfungen
- Linkvalidierung
- Review durch Muttersprachler

Schnelles Feedback ist wertvoller als der perfekte erste Versuch.

## Bidirektionales Review

Englisch bleibt die kanonische Ausgangssprache für Veröffentlichung und Synchronisierung.

Nützliche Erkenntnisse können jedoch aus jeder Sprache kommen.

Lokalisierung sollte daher nicht als Einbahnstraße behandelt werden:

```text
Englisch
↓
Übersetzungen
```

Sondern als bidirektionales System:

```text
Englisch
↕
Übersetzungen
```

Kanonische Quelle bedeutet nicht kanonische Weisheit.

Wenn eine Änderung in einer lokalisierten Version eine Mehrdeutigkeit, ein Terminologieproblem, fehlenden Kontext oder übersetzungsfeindliche Formulierungen im englischen Ursprung offenlegt, sollte auch die kanonische Quelle verbessert und andere Sprachen überprüft werden.

Frage bei jeder wesentlichen Änderung:

- offenbart diese Änderung ein Problem in der Ausgangssprache
- sollten auch andere Sprachen davon profitieren
- sollten Terminologierichtlinien geändert werden
- sollten Review-Richtlinien geändert werden
- sollten Validatoren geändert werden

## Qualitätsmodell für Lokalisierung

Lokalisierungsqualität sollte über vier Dimensionen verfolgt werden:

### Abdeckung

Existiert der Inhalt in dieser Sprache überhaupt?

### Vollständigkeit

Ist aller für Leser sichtbarer Inhalt lokalisiert?

### Qualität

Ist der Text natürlich, präzise und für das Zielpublikum angemessen?

### Aktualität

Spiegelt die lokalisierte Version die aktuelle Quelle noch wider?

## Regel für Lokalisierungsvollständigkeit

Eine Seite ist nicht vollständig, nur weil Folgendes lokalisiert ist:

- URL
- Titel
- Navigation
- Seitengerüst

Lokalisiert werden muss aller für Leser sichtbarer Inhalt, einschließlich:

- Zusammenfassungen
- Metadaten
- Themenlabels
- Überschriften und Zwischenüberschriften
- Artikeltext
- Beschriftungen und Alt-Text
- Diagramme und Text in Diagrammen
- verwandte Inhalte

Abdeckung ohne Vollständigkeit führt zu gemischtsprachiger Veröffentlichung.

## Korpus der Muttersprachler-Befunde

Der detaillierte Korpus mit Befunden von Muttersprachlern bleibt ein erstklassiges Deliverable im kanonischen Handbuch `../localization-at-scale-program.md`.

Sein Zweck ist es, Fälle zu dokumentieren, in denen eine Übersetzung:

- technisch korrekt war
- die Bedeutung bewahrte
- automatisierte Prüfungen bestand
- aber von Muttersprachlern trotzdem verbessert werden konnte

Solche Beispiele sind zentral für Systemlernen, Richtlinienverbesserung und Validatorentwicklung.

## Kontinuierliches Lernen

Jedes Lokalisierungsproblem sollte das System verbessern.

Die empfohlene Schleife ist:

```text
Problem finden
↓
Problem beheben
↓
Problem dokumentieren
↓
Problem klassifizieren
↓
Arbeitsablauf verbessern
↓
Validierung hinzufügen, wo sinnvoll
↓
Wiederholung verhindern
```

Das ideale Ergebnis ist, dass ein Problem korrigiert wird:

- einmal im Inhalt
- einmal im System

## Schuld, Fehlerklassen und Drift

Verfolge beide Kennzahlen:

```text
Localization Debt = X
Open Defect Classes = Y
```

Schuld misst verbleibende Inhaltsarbeit.

Fehlerklassen messen die Reife des Systems.

Lokalisierungsdrift bedeutet, dass lokalisierter Inhalt existiert, aber die aktuelle Quelle nicht mehr widerspiegelt.

## Regel: zuerst die Klasse beheben, dann die Datei

Optimiere nicht primär nach der Anzahl verbleibender Dateien.

Optimiere nach der Anzahl verbleibender Fehlerklassen.

Empfohlener Prozess:

1. Problemklasse identifizieren
2. Grundursache bestimmen
3. höchste mögliche Quelle beheben
4. Validator aktualisieren
5. Arbeitsablauf aktualisieren
6. dann verbleibende Vorkommen beheben

## Repositoriumsreife

Das Repositorium sollte diese Phasen durchlaufen:

1. Inhalt übersetzen
2. Probleme erkennen
3. Validatoren erstellen
4. Validierung automatisieren
5. Wiederkehr verhindern
6. Lokalisierungsdrift steuern
7. zukünftige Mitwirkende und KI-Systeme lehren

## Operatives Ziel

Das höchste Ziel der Lokalisierung im großen Maßstab ist:

**vollständige Sprachabdeckung, Lokalisierungsvollständigkeit, semantische Parität, natürlichsprachliche Lesbarkeit, kulturelle Angemessenheit, pädagogische Wirksamkeit, kontinuierliche Verbesserung, Fehlervermeidung, Drift-Management und nachhaltige mehrsprachige Veröffentlichung durch starke Feedback-Schleifen.**

## Zugehörige Dokumente

- `../localization-at-scale-program.md`
- `../localization-audit-report.md`
- `wiki/localization-at-scale.md`
- `wiki/translation-quality-assurance.md`
- `wiki/localization-ci-cd.md`
- `style-guide/localization/README.md`
