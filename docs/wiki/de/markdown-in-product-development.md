---
title: "Markdown in der Produktentwicklung"
summary: >-
  Markdown ist ein praktisches Format zum Speichern von Produktabsichten, Dokumentationen, Leitfäden und Beweisen in einer Form, die überprüfbar, portierbar, differenzierbar und einfach mit Validierungsworkflows zu verbinden ist.
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Markdown in der Produktentwicklung

## Zusammenfassung

Markdown ist ein praktisches Format zum Speichern von Produktabsichten, Dokumentationen, Leitfäden und Beweisen in einer Form, die überprüfbar, portierbar, veränderbar und leicht mit Validierungsworkflows zu verbinden ist.

## Warum Markdown wichtig ist

Markdown wird oft nur als Schreiberleichterung behandelt. Bei spezifikationsgesteuerter Arbeit ist es noch nützlicher.

Es bietet Teams eine einfache Möglichkeit, Produktwissen in der Nähe des Repositorys aufzubewahren, ohne es in proprietären Tools oder schwer zu überprüfenden Dokumenten zu verstecken.

Das ist wichtig für:

- Spezifikationen
- Umsetzungsanleitung
- Dokumentation des aktuellen Standes
- Tutorials und Wiki-Seiten
- Quellenkarten und Beweisnotizen

## Was Markdown gut kann

Markdown funktioniert gut, wenn der Inhalt sein muss:

- in Rohform lesbar
- versioniert
- Einfache Überprüfung in Diffs
- Dokumentübergreifend verlinkbar
- umgebungsübergreifend tragbar
- Später in andere Veröffentlichungsformate konvertierbar

Dies macht es besonders nützlich für Produkt- und Dokumentationssysteme, die eine Rückverfolgbarkeit erfordern.

## Was Markdown nicht alleine macht

Markdown ist nützlich, erzwingt jedoch nicht allein die Korrektheit.

Es kann nicht allein garantieren:

- dass der Inhalt aktuell ist
- dass die Behauptungen gut begründet sind
- dass die Implementierung mit der Dokumentation übereinstimmt
- Diese Terminologie bleibt konsistent
- dass Validierungs- oder CI-Regeln tatsächlich ausgeführt werden

Deshalb sollten Markdown Teil eines umfassenderen Systems sein und nicht mit dem Gesamtsystem verwechselt werden.

## Markdown in einem spezifikationsgesteuerten Workflow

In einem spezifikationsgesteuerten Workflow ist Markdown am wertvollsten, wenn es innerhalb einer Autoritätskette liegt.

Zum Beispiel:

1. Spezifikationen definieren Produktregeln
2. Umsetzungsleitfaden definiert taktische Regeln
3. Dokumente zum aktuellen Stand erklären, was jetzt existiert
4. Quellkarten zeichnen wesentliche öffentliche Ansprüche nach
5. Validierung und CI verstärken stabile Erwartungen

Markdown ist das Medium, das dazu beiträgt, dass diese Ebenen sichtbar und überprüfbar bleiben.

## Warum dies bei KI-gestützter Arbeit wichtig ist

KI-Systeme profitieren von einem klaren, zugänglichen Kontext.

Markdown hilft, weil es:

- leicht zu überprüfen
- einfach zu zitieren
- leicht zu unterscheiden
- Einfach in der Nähe des Implementierungs-Repositorys aufzubewahren

Das macht es zu einem starken Format für die Produkterinnerung.

KI macht aber auch eine Einschränkung deutlicher: Wenn die Markdown vage, veraltet oder widersprüchlich sind, kann der Assistent daraus einen schnellen Drift erzeugen. Der Wert liegt also nicht nur im Format, sondern auch in der Beibehaltung des Inhalts.

## Markdown als Agentenführung

Einige Markdown-Dokumente mögen wie Tutorials für Menschen aussehen, sie dienen aber auch als operative Anleitung für KI-Agenten.

Dies ist besonders nützlich, wenn das Dokument über die Erläuterung eines Themas hinausgeht und stattdessen Folgendes erfasst:

- bevorzugte Workflow-Reihenfolge
- Werkzeugauswahl
- Umgebungseinschränkungen
- Eskalationspfade
- Anti-Muster, die es zu vermeiden gilt

In diesen Fällen ist Markdown mehr als nur eine Erklärung. Es wird zu einer dauerhaften Schnittstelle zwischen Repository-Wissen und Agentenverhalten.

## Let Books Beispiele für Agentenführung

### Android-Debugging-Workflow

`docs/android-debugging.md` ist ein starkes Beispiel.

Es kann als menschlicher Leitfaden gelesen werden, gibt einem Agenten aber auch konkrete Handlungsanweisungen vor, wie zum Beispiel:

- Bevorzugen Sie physische Android-Geräte gegenüber der Desktop-Emulation für Kamera- und Barcode-Arbeiten
- Bevorzugen Sie das Anhängen von Playwright CDP gegenüber wiederholten Browserstarts
- Unterscheidung der Laufzeit-CDP-Injektion von echten Quell-Patch-Workflows
- Richten Sie zunächst eine Hot-Reload-Infrastruktur ein, wenn der Benutzer telefonische Live-Tests anfordert

Diese Art von Markdown beschreibt nicht nur eine Domain. Es steuert aktiv den Arbeitsablauf und die Werkzeugauswahl.

### Werkzeug- und Umgebungsvorbereitung

`docs/style-guide/publishing/ubuntu-tooling.md` ist ein weiteres gutes Beispiel.

Es liest sich wie eine Dokumentation zur Einrichtung von Mitwirkenden, teilt einem Agenten aber auch mit, welche Tools voraussichtlich vorhanden sind oder für Arbeitsklassen wie die folgenden bevorzugt werden sollten:

- Playwright für UI-Überprüfung und Screenshots
- Hunspell zur Rechtschreibprüfung
- ImageMagick und OCR Tools für visuelle und Schein-Asset-Workflows
- ADB-bezogene Tools für das Android-Debugging

Diese Art von Markdown hilft einem Agenten, über die erwartete Toolchain nachzudenken, anstatt anhand allgemeiner Standardwerte zu raten.

## Praktische Implikation

Beim Schreiben von Markdown für ein Repository, das von KI-Agenten verwendet werden kann, ist es hilfreich, beim Schreiben zwei Leser im Hinterkopf zu haben:

- der menschliche Mitwirkende, der einer Erklärung bedarf
- der Agent, der explizite Workflow- und Tool-Einschränkungen benötigt

Die besten Dokumente leisten beides.

Sie bleiben für Menschen lesbare Tutorials oder Leitfäden und sind zugleich konkret genug, um das Verhalten von Agenten auf wiederholbare und nachvollziehbare Weise zu steuern.

## Let Books Kontext

Das Let Books-Repository verwendet Markdown bereits für mehrere Produktspeicherschichten, darunter:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- READMEs und Anleitungen für den Dokumentationsbereich
- Quellkarten gemäß `docs/sources/`

Dies ist ein gutes Beispiel dafür, dass Markdown nicht nur für Prosa, sondern auch für die Koordination auf Repository-Ebene, die öffentliche Schreibstruktur und die Beweisverfolgung verwendet werden.

## Praktische Regel

Eine nützliche Regel ist einfach:

Nutzen Sie Markdown, um die Produktabsicht sichtbar, überprüfbar und verlinkbar zu machen. Gehen Sie nicht davon aus, dass Markdown allein diese Absicht wahr hält.

Die Wahrheit hängt immer noch davon ab:

- klare Autorität
- aktive Wartung
- Disziplin überprüfen
- Validierung, wo praktisch

## Verwandte Seiten

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../../blog/de/spec-driven-development-for-ai-projects.md`
