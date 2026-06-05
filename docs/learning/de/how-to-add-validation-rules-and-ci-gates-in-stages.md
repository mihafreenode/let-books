---
title: "Wie man Validierungsregeln und CI-Gates schrittweise hinzufügt"
summary: >-
  Dieser Leitfaden erklärt, wie man Validierungsregeln und CI-Prüfungen schrittweise hinzufügt, damit ein Projekt Konsistenz verbessern und Abweichungen reduzieren kann, ohne zu versuchen, alles auf einmal zu automatisieren.
topics:
  - validation
  - ci-cd
  - spec-driven-development
---
# Wie man Validierungsregeln und CI-Gates schrittweise hinzufügt

## Zusammenfassung

Dieser Leitfaden erklärt, wie man Validierungsregeln und CI-Prüfungen schrittweise hinzufügt, damit ein Projekt Konsistenz verbessern und Abweichungen reduzieren kann, ohne zu versuchen, alles auf einmal zu automatisieren.

## Warum schrittweise Durchsetzung wichtig ist

Teams wissen oft, dass sie stärkere Validierung brauchen, machen aber einen von zwei Fehlern.

Entweder lassen sie Qualitätsprüfungen zu lange informell, oder sie versuchen, auf einmal ein großes starres CI-System einzuführen, und erzeugen Frustration.

Ein schrittweiser Ansatz funktioniert in der Regel besser.

So kann ein Projekt wiederkehrende Erwartungen aus Reviews nach und nach in wiederholbare Prüfungen überführen.

## Von wiederkehrenden Fehlern ausgehen

Die besten Validierungsregeln beginnen meist als wiederkehrende Befunde in menschlichen Reviews.

Fragen Sie:

- welche Fehler immer wieder auftreten
- welche Regeln leicht vergessen werden
- welche Struktur im gesamten Repository konsistent bleiben muss
- welche Qualitätsprüfungen Reviewer-Zeit sparen würden

Wenn dasselbe Problem mehrfach auftaucht, ist es ein guter Kandidat für Automatisierung.

## Validierung sollte der Autoritätskette folgen

Validierungsregeln sollten dokumentierte Erwartungen verstärken, nicht ersetzen.

Das bedeutet:

- die Spezifikation definiert die Regel
- die Dokumentation erklärt die Regel
- die Validierung prüft die Regel, wo das praktikabel ist
- CI führt die Validierung konsistent aus

So wird verhindert, dass das Projekt Regeln erzwingt, die nie wirklich entschieden wurden.

## Ein hilfreiches Reifegradmodell

### Stufe 1: manuelle Review-Checkliste

Beginnen Sie damit, die Regel ausdrücklich zu benennen.

Beispiele:

- aller neuer für Nutzer sichtbarer Text muss lokalisierbar sein
- Dokumentation muss den aktuellen Zustand von Zukunftsplänen trennen
- neue öffentliche Artikel müssen Spezifikationen und Dokumentation zitieren, nicht Quelldateien

In dieser Phase ist die Regel real, wird aber noch von Menschen durchgesetzt.

### Stufe 2: leichte lokale Validierung

Fügen Sie ein kleines Skript oder eine strukturierte Prüfung hinzu, die Mitwirkende lokal ausführen können.

Beispiele:

- Erkennung fehlender Locale-Schlüssel
- Prüfungen auf erforderliche Dateien
- Validierung der Metadaten-Generierung
- Prüfungen der Link-Auflösung

Diese Stufe reduziert vermeidbare Fehler, noch bevor CI überhaupt läuft.

### Stufe 3: Sichtbarkeit in CI

Führen Sie die Prüfung in CI aus, auch wenn sie anfangs noch nicht blockierend ist.

So bekommt das Team Sichtbarkeit darauf, wie oft die Regel fehlschlägt und ob die Prüfung selbst noch verfeinert werden muss.

### Stufe 4: blockierendes CI-Gate

Sobald die Regel stabil und verstanden ist, machen Sie sie verpflichtend.

An diesem Punkt hat sich das Projekt von einer informellen Erwartung zu einem durchsetzbaren Standard entwickelt.

## Was zuerst automatisiert werden sollte

Gute frühe Kandidaten sind meist:

- strukturelle Konsistenz
- erforderliche Dateien
- Vollständigkeit der Lokalisierung
- Gültigkeit von Formatierung oder Syntax
- defekte interne Links
- verbotene redaktionelle Verweise

Bei mehrsprachiger Veröffentlichung sollte gemischtsprachiger leserseitiger Inhalt als eines der ersten CI-Gates mit hohem Wert behandelt werden. Eine Seite mit lokalisiertem Titel, aber englischer Zusammenfassung oder englischen Tags ist nicht teilweise erfolgreich. Sie ist unvollständig.

Diese Prüfungen sind meist günstig, objektiv und wertvoll.

## Was man nicht zu früh erzwingen sollte

Einige Prüfungen sind wertvoll, brauchen aber möglicherweise Zeit, bevor sie zu harten Gates werden.

Beispiele:

- Rechtschreibprüfung in vielen Sprachen
- Screenshot- oder visuelle Regressionsprüfungen
- Barrierefreiheitsprüfungen, bei denen die Feinabstimmung noch läuft
- Stil- oder Formulierungsregeln, die noch nicht stabil sind

Sie können als Hinweis-Signale beginnen, bevor sie verpflichtend werden.

## Let-Books-Beispiele

Das Repository dokumentiert bereits mehrere Validierungsmuster, darunter:

- grundlegende Lokalisierungs-Smoketests
- JSON-Syntaxvalidierung
- Prüfungen auf erforderliche Dateien
- SEO-Metadaten-Generierung
- optionale Rechtschreibprüfung und Linting
- Deployment-Automatisierung

Die Dokumentation und Stilrichtlinien definieren außerdem redaktionelle Regeln, die im Laufe der Zeit zu Validierungszielen werden können, zum Beispiel die Nutzung von Spezifikationen und Dokumentation als kanonische Belege für öffentliche Artikel.

Damit ist Let Books ein gutes Beispiel für schrittweise Durchsetzung statt eines Alles-auf-einmal-Prozesses.

## Ein praktischer Ablauf zur Regelumwandlung

Verwenden Sie dieses Muster, wenn Sie eine neue Validierungsregel hinzufügen:

1. identifizieren Sie das wiederkehrende Review-Problem
2. schreiben Sie die Regel klar in die Dokumentation oder Richtlinie
3. fügen Sie, wenn praktikabel, ein lokales Skript oder eine Prüfung hinzu
4. lassen Sie sie in CI als sichtbares Feedback laufen
5. machen Sie sie erst dann blockierend, wenn sie stabil ist

Das erzeugt weniger Reibung, als ein hartes Gate einzuführen, bevor das Team die Regel versteht.

## Fragen vor dem Hinzufügen eines Gates

1. Ist die Regel klar dokumentiert?
2. Ist die Prüfung zuverlässig genug, um ihr zu vertrauen?
3. Werden Mitwirkende verstehen, wie sie Fehler beheben?
4. Rechtfertigt der Wert der Prüfung die Reibung?
5. Sollte sie zunächst nur als Warnung starten, bevor sie verpflichtend wird?

## KI-gestützte Projekte brauchen das noch mehr

KI erhöht die Menge der Änderungen und die Geschwindigkeit der Veränderung. Das bedeutet mehr Gelegenheiten für Inkonsistenz.

Außerdem macht sie schnelles Feedback wertvoller. Die praktische Frage ist oft nicht, ob KI einen perfekten ersten Versuch erzeugen kann. Die nützlichere Frage ist, ob die Umgebung das nächste zu lösende Problem zuverlässig erkennen kann.

Validierung und CI sind nicht dazu da, Teams zu verlangsamen. Sie sind dazu da, zu verhindern, dass Geschwindigkeit wichtige Grenzen auslöscht.

Bei spezifikationsgetriebener Arbeit ist das Ziel nicht maximale Automatisierung. Das Ziel ist die verlässliche Verstärkung der Regeln, die am wichtigsten sind.

## Die dauerhafte Lektion

Die stärksten Validierungssysteme erscheinen meist nicht vollständig ausgeformt. Sie wachsen, indem sie wiederkehrendes menschliches Urteil in dokumentierte, überprüfbare und durchsetzbare Prüfungen verwandeln.

Dieser schrittweise Weg ist oft der realistischste Weg, ein Projekt strenger zu machen, ohne es spröde zu machen.

## Checkliste für source-first remediation

Wenn eine Validierungsregel fehlschlägt:

1. prüfen Sie zuerst das Quell-Markdown
2. prüfen Sie als Nächstes lokalisierte Metadaten
3. prüfen Sie Generierungs-Eingaben und Register
4. generieren Sie Artefakte neu
5. prüfen Sie generiertes HTML erst nach den Prüfungen auf Quell-Ebene

Patchen Sie keine generierte Ausgabe, wenn die Quelllokalisierung unvollständig ist.

## Weiterführende Lektüre

- `../spec-driven-content-program.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `how-to-review-ai-assisted-work-against-the-spec.md`
- `../wiki/de/spec-driven-development.md`
- `../blog/de/documentation-is-part-of-the-product.md`
