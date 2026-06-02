---
article_id: when-the-demo-is-evidence-and-when-it-is-not
canonical_language: en
language_variants:
  - ../en/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sl/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../hr/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../bs/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sr-Latn/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sr-Cyrl/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../mk/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sq/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../de/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../it/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../fr/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../es/when-the-demo-is-evidence-and-when-it-is-not.md
title: Wann das Demo ein Beleg ist und wann nicht
summary: Wie Demos und Prototypen als nützliche Implementierungsbelege verwendet werden können, ohne stillschweigend zur Produktspezifikation zu werden.
topics:
  - demo-alignment
  - spec-driven-development
  - product-review
  - documentation
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/blog/README.md
  - docs/sources/README.md
  - docs/style-guide/publishing/README.md
  - docs/style-guide/writing/README.md
  - docs/Development.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/en/when-the-demo-is-evidence-and-when-it-is-not.md
status: draft
---

# Wann das Demo ein Beleg ist und wann nicht

Ein Demo ist stark, weil es abstrakte Ideen in etwas verwandelt, auf das Menschen reagieren können. Ein Ablauf, der in einer Notiz vernünftig klingt, kann auf einem Telefon oder in einem Lagerraum sofort echtes Reibungspotenzial zeigen.

Das ist die gute Seite von Demos.

Die gefährliche Seite ist, dass Menschen, sobald ein Prototyp einmal existiert, sein Verhalten oft als Produktwahrheit behandeln, auch wenn nie jemand diese Entscheidung offiziell getroffen hat.

## Warum Prototypen zufällige Autorität werden

Sichtbare Dinge sind überzeugend. Ein funktionierender Bildschirm erhält oft mehr informelle Autorität als eine geschriebene Regel, selbst wenn er nur als Experiment gebaut wurde.

Das ist verständlich. Menschen vertrauen dem, was sie sehen können.

Aber in Produktarbeit, besonders in KI-unterstützter Produktarbeit, kann dieser Instinkt schnell Verwirrung erzeugen.

Ein Demo kann zeigen:

- eine schnelle Art, einen Ablauf zu testen
- einen vorübergehenden Kompromiss
- eine vereinfachte lokale Implementierung
- eine unfertige Interpretation des beabsichtigten Produkts

Nichts davon bedeutet automatisch, dass das Demo das Produkt neu definieren sollte.

## Wann das Demo ein guter Beleg ist

Ein Demo ist wertvoller Beleg, wenn es hilft, Fragen zu beantworten wie:

- fühlt sich der Ablauf benutzbar an
- unterstützt das mobile Layout die reale Aufgabe
- ist der Scan- oder Intake-Ablauf verständlich
- reagieren Nutzer positiv oder negativ auf die Reihenfolge der Schritte

In diesen Fällen ist das Demo ein Beleg für Nutzbarkeit, Machbarkeit, Schrittfolge und Kommunikation.

Diese Art von Beleg ist äußerst wertvoll.

## Wann das Demo keine Autorität ist

Ein Demo sollte die Produktspezifikation nicht stillschweigend überstimmen.

Es ist nicht die richtige primäre Autorität für Fragen wie:

- ist dieser Ablauf offiziell im Umfang
- ist das eine vorübergehende Abkürzung oder eine Produktzusage
- überschreibt dieses Verhalten eine bestehende Regel
- sollte öffentliche Dokumentation das als Zielsystem beschreiben

Solche Fragen verlangen eine ausdrückliche Entscheidung und eine Dokumentationsaktualisierung.

## Die Let-Books-Regel ist ein gutes Modell

Das Repository enthält bereits eine gesunde redaktionelle Regel dafür. Öffentliches Schreiben sollte Spezifikationen und Dokumentation als kanonischen Beleg behandeln, während Demo- oder App-Verhalten als Implementierungsstatus erwähnt werden kann.

Diese Regel ist wichtig, weil sie versehentliche Steuerung durch Prototypen verhindert.

Wenn das statische Demo einen besseren Box-Workflow, einen besseren mobilen Ablauf oder eine bessere Intake-Interaktion sichtbar macht, ist das wertvoll. Aber dieser bessere Ablauf wird erst dann zur wirklichen Autorität, wenn Spezifikation und zugehörige Dokumentation aktualisiert wurden.

## Warum das mit KI noch wichtiger ist

KI verstärkt das, was im aktuellen Kontext am konkretesten wirkt. Wenn der konkreteste Artefakt ein Demo ist, werden Assistenten und Menschen sein Verhalten schnell kopieren, ohne zu fragen, ob es zu den Produktgrenzen passt.

Das kann nützlich sein, wenn das Demo bereits an der beabsichtigten Produktgrenze ausgerichtet ist.

Es kann aber auch vorübergehende Annahmen schnell verbreiten, wenn das nicht der Fall ist.

Deshalb brauchen Teams eine sichtbare Autoritätsreihenfolge.

## Eine praktische Autoritätskette

Für Arbeit dieser Art ist folgende Reihenfolge nützlich:

1. Produktspezifikation
2. Implementierungsleitlinien
3. Dokumentation des aktuellen Zustands
4. Demo oder Prototyp
5. Tests und Validierung

Das Demo bleibt weiterhin wichtig. Es ist nur innerhalb eines dokumentierten Systems wichtig, statt eines zu ersetzen.

## Was zu tun ist, wenn das Demo etwas Neues lehrt

Manchmal hat der Prototyp recht und die Spezifikation ist falsch, unvollständig oder zu abstrakt.

Das ist kein Scheitern. Genau deshalb baut man Demos.

Die richtige Reaktion ist:

1. die Erkenntnis festhalten
2. entscheiden, ob das neue Verhalten absichtlich werden soll
3. Spezifikation und Dokumentation aktualisieren
4. danach die Ausrichtung auch künftig bewahren

Die falsche Reaktion ist, die Dokumentation unverändert zu lassen und darauf zu hoffen, dass alle sich merken, dass das Demo jetzt die eigentliche Quelle der Wahrheit ist.

## Warum Institutionen und Studierende das interessieren sollte

Institutionen müssen wissen, ob sie ein Konzept, einen Prototyp oder ein freigegebenes Workflow-Modell bewerten.

Studierende müssen lernen, dass Prototypen sich nicht selbst rechtfertigen. Gute Softwarepraxis bedeutet auch zu verstehen, wann Implementierung als Beleg und wann sie als Experiment behandelt werden sollte, das noch auf eine Entscheidung wartet.

## Die dauerhafte Lehre

Demos sind wertvoll, weil sie Produktideen überprüfbar machen. Gefährlich werden sie, wenn sie stillschweigend zur Politik werden.

Das gesündeste Modell ist einfach: Demos sollen das Produkt informieren, aber Spezifikationen und Dokumentation sollen die endgültige Entscheidung festhalten.

## Andere Sprachen

- [Shqip](../sq/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Slovenščina](../sl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Hrvatski](../hr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Bosanski](../bs/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Srpski (latinica)](../sr-Latn/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Српски (ћирилица)](../sr-Cyrl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Македонски](../mk/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Italiano](../it/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Français](../fr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Español](../es/when-the-demo-is-evidence-and-when-it-is-not.md)
