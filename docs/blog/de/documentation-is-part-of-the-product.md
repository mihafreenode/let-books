---
article_id: documentation-is-part-of-the-product
canonical_language: en
language_variants:
  - ../en/documentation-is-part-of-the-product.md
  - ../sl/documentation-is-part-of-the-product.md
  - ../hr/documentation-is-part-of-the-product.md
  - ../bs/documentation-is-part-of-the-product.md
  - ../sr-Latn/documentation-is-part-of-the-product.md
  - ../sr-Cyrl/documentation-is-part-of-the-product.md
  - ../mk/documentation-is-part-of-the-product.md
  - ../sq/documentation-is-part-of-the-product.md
  - ../de/documentation-is-part-of-the-product.md
  - ../it/documentation-is-part-of-the-product.md
  - ../fr/documentation-is-part-of-the-product.md
  - ../es/documentation-is-part-of-the-product.md
title: Dokumentation ist Teil des Produkts
summary: Warum Dokumentation als operatives Mittel behandelt werden sollte, das Implementierung, Review, Einarbeitung und Produktvertrauen prägt, statt als Aufräumarbeit nach dem Programmieren.
topics:
  - documentation
  - spec-driven-development
  - product-quality
  - ai-assisted-delivery
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/README.md
  - docs/Development.md
  - docs/Deployment.md
  - docs/style-guide/writing/README.md
  - docs/style-guide/publishing/README.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/en/documentation-is-part-of-the-product.md
status: draft
---

# Dokumentation ist Teil des Produkts

Viele Teams sprechen noch immer über Dokumentation, als beginne sie erst nach der eigentlichen Arbeit. Zuerst wird das Produkt gebaut, danach schreibt jemand auf, was passiert ist. Dieses Modell war schon vor KI-gestützter Entwicklung schwach. Mit KI wird es zu einem echten Risiko.

Wenn Code, Text, Oberflächen und Arbeitsabläufe sehr schnell erzeugt werden können, ist Dokumentation nicht mehr nur eine nachträgliche Schicht. Sie wird Teil des Mechanismus, der das Produkt kohärent hält.

## Warum das heute noch wichtiger ist

KI kann Implementierung aus unvollständiger Absicht erzeugen. Das wird oft als Bequemlichkeit dargestellt. In der Praxis bedeutet es, dass jede Unklarheit im Projekt zu einem Ort wird, an dem das Produkt abdriften kann.

Wenn die Dokumentation schwach oder veraltet ist, werden verschiedene Menschen und verschiedene Werkzeuge aus demselben Repository verschiedene Produkte ableiten.

## Dokumentation erfüllt vier Produktaufgaben

Dokumentation:

- trägt die Absicht
- setzt Erwartungen
- senkt Koordinationskosten
- stützt Vertrauen

Sie sagt Mitwirkenden, Institutionen, Prüfern und KI-Assistenten, was das Projekt erreichen will und was es ausdrücklich nicht werden soll.

## Let Books ist bereits so aufgebaut

Im Repository Let Books:

- definiert `AGENTS.md` die Produktabsicht und Arbeitsabläufe
- definiert `AGENTS-Implementation.md` taktische Ausführungsregeln
- beschreibt `README.md` ehrlich den aktuellen Zustand
- definiert `docs/` Regeln für Veröffentlichung, Schreiben, Lokalisierung und Nachweise

Das bedeutet: Dokumentation ist hier nicht nur Erklärung. Sie ist Teil der Arbeitsweise des Projekts.

## Veraltete Dokumentation ist Produktschuld

Veraltete Dokumentation führt zu:

- falschen Implementierungsannahmen
- Wiederholung bereits getroffener Entscheidungen
- Demos, die versehentlich zur Produktwahrheit werden
- langsamerer Einarbeitung neuer Mitwirkender
- schwierigeren Reviews, weil der Standard unklar ist

In KI-gestützten Abläufen wächst diese Schuld noch schneller, weil Assistenten sehr gut von nahegelegenen, selbst veralteten Annahmen fortsetzen.

## Dokumentation und Implementierung müssen eine Kette bilden

Das richtige Modell ist keine starre Reihenfolge „erst Dokumentation, dann Code“. Das richtige Modell ist eine gepflegte Kette:

- Spezifikationen definieren Absicht
- Dokumente zum aktuellen Zustand erklären, was jetzt existiert
- Demo und Implementierung machen den Ablauf konkret
- Tests und Validierung prüfen Erwartungen
- CI hält Drift sichtbar

Wenn sich ein Glied ändert, sollten auch die benachbarten überprüft werden.

## Die dauerhafte Lehre

Dokumentation ist nicht von Produktqualität getrennt. Sie prägt Implementierung, Review, Kommunikation, Validierung und langfristiges Vertrauen. In KI-gestützten Projekten ist Dokumentation Teil des Produkts, weil sie Teil des Systems ist, das Produktdrift verhindert.

## Andere Sprachen

- [English](../en/documentation-is-part-of-the-product.md)
- [Shqip](../sq/documentation-is-part-of-the-product.md)
- [Slovenščina](../sl/documentation-is-part-of-the-product.md)
- [Hrvatski](../hr/documentation-is-part-of-the-product.md)
- [Bosanski](../bs/documentation-is-part-of-the-product.md)
- [Srpski (latinica)](../sr-Latn/documentation-is-part-of-the-product.md)
- [Српски (ћирилица)](../sr-Cyrl/documentation-is-part-of-the-product.md)
- [Македонски](../mk/documentation-is-part-of-the-product.md)
- [Italiano](../it/documentation-is-part-of-the-product.md)
- [Français](../fr/documentation-is-part-of-the-product.md)
- [Español](../es/documentation-is-part-of-the-product.md)
