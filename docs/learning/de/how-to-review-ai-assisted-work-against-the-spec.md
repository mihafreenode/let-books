---
title: "Wie man KI-gestützte Arbeit gegen die Spezifikation prüft"
summary: >-
  Dieser Leitfaden erklärt, wie man KI-gestützte Implementierung prüft, indem man sie mit Produktspezifikation, Arbeitsablaufregeln, Dokumentation und Validierungserwartungen abgleicht, statt nur zu beurteilen, ob die Ausgabe poliert oder technisch plausibel wirkt.
topics:
  - product-review
  - ai-assisted-delivery
  - spec-driven-development
---
# Wie man KI-gestützte Arbeit gegen die Spezifikation prüft

## Zusammenfassung

Dieser Leitfaden erklärt, wie man KI-gestützte Implementierung prüft, indem man sie mit Produktspezifikation, Arbeitsablaufregeln, Dokumentation und Validierungserwartungen abgleicht, statt nur zu beurteilen, ob das Ergebnis poliert oder technisch plausibel wirkt.

## Warum das wichtig ist

KI kann Code, Text, Tests und Interface-Änderungen sehr schnell erzeugen, die vollständig wirken.

Diese Geschwindigkeit schafft ein Review-Risiko: Prüfende wechseln möglicherweise unbewusst von der Frage „Ist das das richtige Produktverhalten?“ zu der Frage „Wirkt das plausibel?“.

Das ist nicht dieselbe Frage.

Bei spezifikationsgetriebener Arbeit sollte Review mit Abstimmung beginnen und erst dann zu Codequalität, Stil und Implementierungsdetails übergehen.

## Mit der Quelle der Wahrheit beginnen

Bevor Sie die Ausgabe prüfen, identifizieren Sie die Dokumente, die das beabsichtigte Verhalten definieren.

Im Let-Books-Repository bedeutet das in der Regel:

- `AGENTS.md` für Produktregeln, Arbeitsabläufe und Umfang
- `AGENTS-Implementation.md` für taktische Delivery-Einschränkungen
- `README.md` für die Darstellung des aktuellen Zustands
- relevante Dokumentation unter `docs/` für Veröffentlichung, Verifikation oder Arbeitsablaufleitlinien

Ohne diesen Schritt wird die Prüfung leicht subjektiv und rein lokal.

## In der richtigen Reihenfolge prüfen

Verwenden Sie diese Reihenfolge beim Prüfen von KI-gestützter Arbeit.

### 1. Produktabstimmung

Fragen Sie, ob die Ausgabe zum beabsichtigten Nutzerarbeitsablauf und zur Produktgrenze passt.

Beispiele:

- funktioniert manuelle Eingabe noch dort, wo die Spezifikation sie verlangt
- bewahrt die Änderung die Trennung zwischen physischen Exemplaren und bibliografischen Datensätzen
- fügt sie Verhalten hinzu, das nie genehmigt wurde
- stellt sie optionale KI-Funktionen fälschlich als verpflichtend dar

Wenn die Produktabstimmung falsch ist, hat es wenig Wert, zuerst viel Zeit auf Politur zu verwenden.

### 2. Dokumentationsabstimmung

Fragen Sie, ob die umgebende Dokumentation die Realität noch ehrlich beschreibt.

Beispiele:

- wurde ein für Nutzer sichtbarer Arbeitsablauf geändert, ohne die Dokumentation zu aktualisieren
- beschreibt das README noch den aktuellen Zustand korrekt
- passen neue öffentliche Aussagen zur tatsächlich dokumentierten Produktposition

KI-generierte Änderungen verändern oft Verhalten, ohne die begleitende Erzählung darüber zu aktualisieren.

### 3. Validierung und Fallback-Verhalten

Fragen Sie, ob die Änderung die Fehler- und Fallback-Erwartungen der Spezifikation bewahrt.

Beispiele:

- kann der Arbeitsablauf noch erfolgreich sein, wenn ein optionaler Anbieter ausfällt
- werden ungültige Eingaben explizit behandelt
- werden unsichere oder niedrig-konfidente Ausgaben als Vorschläge statt als Fakten behandelt

Hier scheitern viele plausible Implementierungen am echten Produkttest.

### 4. Technische Qualität

Erst nach den obigen Prüfungen sollten Sie den Großteil Ihrer Zeit verwenden auf:

- Klarheit
- Wartbarkeit
- Benennung
- Duplikation
- Tests
- Struktur

Technische Qualität ist weiterhin wichtig. Sie sollte nur Produktkorrektheit nicht überrangieren.

## Häufige Review-Fallen

KI-gestützte Arbeit erzeugt häufig mehrere wiederholbare Review-Fallen.

### Die Falle der polierten Ausgabe

Die Ausgabe sieht sauber aus, also nehmen Reviewer an, dass sie korrekt ist.

### Die Falle des nahen Kontexts

Die Änderung passt zur nächstgelegenen bestehenden Implementierung, aber diese nächstgelegene Implementierung könnte bereits abgedriftet sein.

### Die Falle des impliziten Umfangs

Der Assistent fügt Funktionen, Abstraktionen oder Annahmen hinzu, die nie angefordert wurden, und der Reviewer akzeptiert sie, weil sie nicht offensichtlich defekt wirken.

### Die Falle bestandener Tests

Tests können bestehen, weil sie das erzeugte Verhalten validieren, nicht weil sie das beabsichtigte Produktverhalten validieren.

## Eine praktische Review-Checkliste

Fragen Sie bei jeder substanziellen KI-gestützten Änderung:

1. Welche Produktregel oder welcher Arbeitsablauf soll durch diese Änderung umgesetzt werden?
2. Welche Spezifikation oder Dokumentation definiert diese Regel?
3. Bewahrt die Ausgabe die erforderlichen Einschränkungen?
4. Bleibt das Fallback-Verhalten intakt?
5. Passt die Dokumentation noch zum resultierenden Verhalten?
6. Welche Validierung oder Tests stützen die Änderung?
7. Hat der Assistent etwas hinzugefügt, das als außerhalb des Umfangs entfernt werden sollte?

## Wie man erzeugte Tests prüft

Erzeugte Tests sind nützlich, sollten aber ebenfalls gegen die Spezifikation geprüft werden.

Fragen Sie:

- prüfen die Tests den beabsichtigten Arbeitsablauf
- decken sie Fallback-Verhalten ab
- spiegeln sie die dokumentierten Randbedingungen wider
- behaupten sie ein Komfortverhalten, das nie spezifiziert wurde

Das ist besonders wichtig bei spezifikationsgetriebener Arbeit, weil eine schwache Testsuite Drift festschreiben kann.

## Let-Books-Beispiele

Beispiele für Fragen auf Spezifikationsebene in diesem Repository sind:

- bleibt der Arbeitsablauf auch ohne kostenpflichtige KI-Dienste nützlich
- trennt die Dokumentation des aktuellen Zustands klar zwischen Demo-Status und zukünftigen Backend-Plänen
- vermeiden öffentliche Dokumente, Quellcode als kanonischen redaktionellen Beleg zu behandeln
- bleiben Validierungsschritte Teil des Delivery-Ablaufs statt optionaler Erinnerung

Diese Fragen sind spezifisch genug, um Review zu leiten, und genau das sollte eine Spezifikation ermöglichen.

## Die dauerhafte Lektion

KI-gestütztes Review bedeutet nicht zu prüfen, ob der Assistent etwas Eindrucksvolles erzeugt hat. Es bedeutet zu prüfen, ob die Ausgabe noch zum beabsichtigten Produkt gehört.

Die beste Prüfungsfrage lautet meist nicht „Funktioniert das?“, sondern: „Entspricht das der Spezifikation, auch in den Teilen, die leicht vergessen werden?“

## Weiterführende Lektüre

- `../spec-driven-content-program.md`
- `how-to-write-a-spec-that-ai-can-follow.md`
- `how-to-turn-a-product-spec-into-an-implementation-plan.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `../wiki/de/spec-driven-development.md`
- `../blog/de/spec-driven-development-for-ai-projects.md`
