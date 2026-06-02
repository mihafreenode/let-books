---
title: "Validierungsebenen"
summary: >-
  Validierungsebenen sind die verschiedenen Methoden, mit denen ein Projekt überprüft, ob Implementierungs-, Dokumentations- und Bereitstellungsartefakte noch den beabsichtigten Regeln und Qualitätserwartungen entsprechen.
topics:
  - validation
  - ci-cd
  - product-quality
---
# Validierungsebenen

## Zusammenfassung

Validierungsebenen sind die verschiedenen Methoden, mit denen ein Projekt überprüft, ob Implementierungs-, Dokumentations- und Bereitstellungsartefakte noch den beabsichtigten Regeln und Qualitätserwartungen entsprechen.

## Warum Schichten wichtig sind

Keine einzelne Validierungsmethode reicht aus.

- Dokumentation allein erzwingt kein Verhalten
- Tests allein können die falschen Annahmen bestätigen
- CI allein kann nicht die Regeln definieren, die es durchsetzen soll

Ein mehrschichtiger Ansatz ist stärker, da jede Schicht eine andere Driftklasse erfasst.

## Gemeinsame Validierungsebenen

### 1. Spezifikation und Anleitung

Die erste Ebene definiert die Regel.

Ohne diese Schicht können spätere Prüfungen streng, aber willkürlich sein.

### 2. Manuelle Überprüfung

Die menschliche Überprüfung prüft Absicht, Randfälle und Produktbedeutung, die möglicherweise noch nicht automatisiert werden kann.

### 3. Lokale Validierung

Skripte und strukturierte Prüfungen erkennen schnell wiederkehrende Probleme, bevor Änderungen CI erreichen.

### 4. Automatisierte Tests

Ausführbare Tests überprüfen das erwartete Verhalten, jedoch nur, wenn sie mit der Spezifikation übereinstimmen.

### 5. CI-Tore

CI macht Prüfungen wiederholbar und für alle Mitwirkenden und Umgebungen sichtbar.

### 6. Bereitstellungsprüfungen

Bereitstellungsworkflows bestätigen, dass die erstellten Artefakte weiterhin veröffentlichbar und strukturell einwandfrei sind.

## Wie sich die Ebenen verhalten sollten

Die Schichten sollten sich gegenseitig verstärken, um:

- Dokumente und Spezifikationen definieren Erwartungen
- Die Überprüfung interpretiert diese Erwartungen im Kontext
- Validierungsskripte und Tests automatisieren stabile Teile der Überprüfung
- CI führt diese Prüfungen konsequent durch
- Durch die Bereitstellung wird sichergestellt, dass die Ausgabe tatsächlich versendet werden kann

## Gute frühe Validierungsziele

Beispiele für starke Frühkandidaten sind:

- Vorhandensein der erforderlichen Datei
- Vollständigkeit der Lokalisierung
- Syntaxgültigkeit
- Defekte interne Links
- Verbotene redaktionelle Zitate
- Erfolg bei der Generierung von Metadaten

Diese Kontrollen sind in der Regel objektiv und kostengünstig.

## Let Books Kontext

Das Let Books-Repository dokumentiert bereits mehrere Schichten, darunter:

- Produkt- und Umsetzungsregeln in `AGENTS.md` und `AGENTS-Implementation.md`
- Entwicklungs- und Bereitstellungsvalidierung in `docs/Development.md` und `docs/Deployment.md`
- Redaktionelle Beweisregeln in `docs/blog/README.md` und `docs/sources/README.md`
- Lernanleitung für die schrittweise Einführung von CI und Validierung

Das macht die Validierung zu einem dokumentierten System und nicht nur zu einem zukünftigen Ziel.

## Verwandte Seiten

- `documentation-traceability.md`
- `implementation-guidance.md`
- `../../learning/de/how-to-add-validation-rules-and-ci-gates-in-stages.md`
- `../../blog/de/documentation-is-part-of-the-product.md`
