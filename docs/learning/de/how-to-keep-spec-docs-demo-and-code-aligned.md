---
title: "Wie man Spezifikation, Dokumentation, Demo und Code aufeinander abstimmt"
summary: >-
  Dieser Leitfaden beschreibt einen praktischen Arbeitsablauf, um Produktspezifikation, Dokumentation, Demo-Verhalten und Implementierungsarbeit im Laufe der Zeit aufeinander abgestimmt zu halten.
topics:
  - demo-alignment
  - documentation
  - spec-driven-development
---
# Wie man Spezifikation, Dokumentation, Demo und Code aufeinander abstimmt

## Zusammenfassung

Dieser Leitfaden beschreibt einen praktischen Arbeitsablauf, um Produktspezifikation, Dokumentation, Demo-Verhalten und Implementierungsarbeit im Laufe der Zeit aufeinander abgestimmt zu halten.

## Das Kernproblem

Produktdrift beginnt selten mit einem dramatischen Fehler. Meist beginnt sie mit kleinen Fehlanpassungen.

Beispiele:

- die Demo fügt einen neuen Arbeitsablauf hinzu, aber die Spezifikation wird nie aktualisiert
- die Dokumentation beschreibt eine Funktion, die sich nicht mehr so verhält
- der Code implementiert eine bequeme Abkürzung, die gegen eine Produktregel verstößt
- Validierungsprüfungen erzwingen nur Syntax, nicht Produktabsicht

KI kann all das beschleunigen, wenn der Abstimmungsablauf schwach ist.

## Das Abstimmungsmodell

Verwenden Sie diese Reihenfolge der Autorität:

1. Produktspezifikation
2. Implementierungsleitfaden
3. Dokumentation des aktuellen Zustands
4. Demo- oder App-Verhalten
5. Tests und Validierungsregeln

Die unteren Ebenen sollten die oberen Ebenen unterstützen. Wenn sie in Konflikt geraten, aktualisieren Sie die Kette bewusst, statt standardmäßig das sichtbarste Artefakt gewinnen zu lassen.

## Empfohlener Arbeitsablauf

### 1. Mit der Änderung in der Spezifikation beginnen

Wenn sich ein für Nutzer sichtbarer Arbeitsablauf oder eine Produktregel ändert, aktualisieren Sie zuerst die relevante Spezifikation oder Richtlinie.

Verwenden Sie:

- `AGENTS.md` für Regeln und Arbeitsabläufe auf Produktebene
- `AGENTS-Implementation.md` für taktische Repository- und Delivery-Regeln

### 2. Dokumentation des aktuellen Zustands aktualisieren

Wenn die Änderung betrifft, was jetzt existiert, aktualisieren Sie die Dokumentation, die den aktuellen Zustand beschreibt.

Typische Beispiele:

- `README.md`
- `docs/Development.md`
- `docs/Deployment.md`
- neue oder überarbeitete Inhalte in Learning/Wiki/Blog, wo relevant

### 3. Demo oder Implementierung aktualisieren

Erst wenn die Absicht klar ist, sollte die Demo oder App geändert werden.

Das hilft, das häufige Muster zu verhindern, bei dem ein Prototyp stillschweigend zur Quelle der Wahrheit wird.

### 4. Validierung hinzufügen oder aktualisieren

Fragen Sie dann, was automatisch geprüft werden kann.

Beispiele:

- Vollständigkeit von Lokalisierungsschlüsseln
- Vorhandensein erforderlicher Dateien
- Metadaten-Generierung
- Link-Validierung
- arbeitsablaufspezifische Tests

Nicht jede Regel kann sofort automatisiert werden, aber wichtige Regeln sollten nicht allein vom Gedächtnis abhängen.

### 5. Gegen die Spezifikation prüfen, nicht nur gegen die Ausgabe

Hören Sie beim Review von Änderungen nicht auf bei:

- läuft es
- sieht es gut aus
- bestehen die Tests

Fragen Sie auch:

- entspricht es dem dokumentierten Arbeitsablauf
- bewahrt es die erforderliche Produktgrenze
- blieb die Dokumentation und die Darstellung des aktuellen Zustands ehrlich

## Umgang mit Demo-Erkenntnissen

Manchmal lehrt die Demo dem Team etwas Besseres als die ursprüngliche Spezifikation.

Das ist nützlich. Die richtige Reaktion ist:

1. die Erkenntnis dokumentieren
2. entscheiden, ob die Änderung des Arbeitsablaufs beabsichtigt ist
3. Spezifikation und Dokumentation aktualisieren
4. die Implementierung an der aktualisierten Entscheidung ausrichten

Die falsche Reaktion ist, die Demo still gewinnen zu lassen, nur weil sie bereits existiert.

## Umgang mit KI-gestützter Implementierung

Mit KI wird dieser Arbeitsablauf noch wichtiger, weil Assistenten oft auf lokale Plausibilität optimieren.

Ein guter Abstimmungszyklus ist:

1. Spezifikation schreiben oder aktualisieren
2. Implementierung erzeugen
3. Ausgabe mit der Spezifikation vergleichen
4. Dokumentation aktualisieren, wenn sich aktuelles Verhalten geändert hat
5. Validierung hinzufügen, wo praktikabel

## Let-Books-Beispiel

Das Repository enthält bereits eine nützliche Abstimmungskette:

- `AGENTS.md` für die Produktrichtung
- `AGENTS-Implementation.md` für taktische Regeln
- `README.md` für die Darstellung des aktuellen Zustands
- `docs/` für Wissens- und Veröffentlichungsregeln
- Deployment- und Entwicklungsdokumentation für Validierungsleitlinien

Diese Struktur sollte bewusst genutzt werden, wann immer neue Funktionen, Dokumentation oder öffentliche Erklärungen hinzugefügt werden.

## Checkliste

Vor dem Mergen einer bedeutenden Änderung prüfen Sie:

1. Wurde die Produktregel oder der Arbeitsablauf klar dokumentiert?
2. Entspricht die Dokumentation des aktuellen Zustands noch der Realität?
3. Spiegelt die Demo oder Implementierung die beabsichtigte Regel wider?
4. Gibt es mindestens einen Validierungs- oder Review-Mechanismus, der die Änderung absichert?
5. Könnte ein neuer Mitwirkender die Entscheidung später verstehen?

## Weiterführende Lektüre

- `../spec-driven-content-program.md`
- `../wiki/de/demo-spec-alignment.md`
- `../wiki/de/spec-driven-development.md`
- `../blog/de/spec-driven-development-in-let-books.md`
