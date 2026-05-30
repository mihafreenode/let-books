---
title: "Validierungsebenen"
topics:
  - validation
  - ci-cd
  - product-quality
---
# Validierungsebenen

## Zusammenfassung

Validierungsebenen sind die verschiedenen Wege, auf denen ein Projekt prüft, ob Implementierung, Dokumentation und Lieferartefakte noch den beabsichtigten Regeln und Qualitätserwartungen entsprechen.

## Warum Ebenen wichtig sind

Keine einzelne Validierungsmethode reicht aus.

- Dokumentation allein erzwingt kein Verhalten
- Tests allein können die falschen Annahmen validieren
- CI allein kann die Regeln, die es durchsetzen soll, nicht definieren

Ein geschichteter Ansatz ist stärker, weil jede Ebene eine andere Art von Drift auffängt.

## Häufige Validierungsebenen

### 1. Spezifikation und Leitlinien

Die erste Ebene definiert die Regel.

Ohne diese Ebene können spätere Prüfungen streng, aber willkürlich sein.

### 2. Manuelles Review

Menschliches Review prüft Absicht, Randfälle und Produktbedeutung, die noch nicht automatisiert sind.

### 3. Lokale Validierung

Skripte und strukturierte Prüfungen erkennen schnelle, wiederholbare Probleme, bevor Änderungen CI erreichen.

### 4. Tests

Ausführbare Tests verifizieren erwartetes Verhalten, aber nur dann, wenn sie mit der Spezifikation ausgerichtet sind.

### 5. CI-Gates

CI macht Prüfungen über Beitragende und Umgebungen hinweg wiederholbar und sichtbar.

### 6. Deployment-Prüfungen

Deployment-Workflows bestätigen, dass die gebauten Artefakte weiterhin veröffentlichbar und strukturell tragfähig sind.

## Wie die Ebenen zusammenhängen sollten

Die Ebenen sollten sich in dieser Reihenfolge gegenseitig verstärken:

- Dokumente und Spezifikationen definieren Erwartungen
- Review interpretiert diese Erwartungen im Kontext
- Validierungsskripte und Tests automatisieren stabile Teile des Reviews
- CI führt diese Prüfungen konsistent aus
- Deployment stellt sicher, dass das Ergebnis tatsächlich ausgeliefert werden kann

## Gute frühe Validierungsziele

Beispiele für starke frühe Kandidaten sind:

- Vorhandensein erforderlicher Dateien
- Vollständigkeit der Lokalisierung
- Syntaxgültigkeit
- defekte interne Links
- verbotene redaktionelle Zitate
- erfolgreiche Metadatengenerierung

Diese Prüfungen sind meist objektiv und kostengünstig.

## Let-Books-Kontext

Das Let-Books-Repository dokumentiert bereits mehrere Ebenen, darunter:

- Produkt- und Implementierungsregeln in `AGENTS.md` und `AGENTS-Implementation.md`
- Entwicklungs- und Deployment-Validierung in `docs/Development.md` und `docs/Deployment.md`
- redaktionelle Evidenzregeln in `docs/blog/README.md` und `docs/sources/README.md`

Damit wird Validierung zu einem dokumentierten System und nicht nur zu einem zukünftigen Wunsch.

## Verwandte Seiten

- `documentation-traceability.md`
- `implementation-guidance.md`
- `../learning/how-to-add-validation-rules-and-ci-gates-in-stages.md`
- `../blog/en/documentation-is-part-of-the-product.md`
