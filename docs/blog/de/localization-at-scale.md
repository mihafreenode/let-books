---
article_id: localization-at-scale
canonical_language: en
language_variants:
  - ../en/localization-at-scale.md
  - ../sl/localization-at-scale.md
  - ../hr/localization-at-scale.md
  - ../bs/localization-at-scale.md
  - ../sr-Latn/localization-at-scale.md
  - ../sr-Cyrl/localization-at-scale.md
  - ../mk/localization-at-scale.md
  - ../sq/localization-at-scale.md
  - ../de/localization-at-scale.md
  - ../it/localization-at-scale.md
  - ../fr/localization-at-scale.md
  - ../es/localization-at-scale.md
title: Lokalisierung im großen Maßstab
summary: Warum Lokalisierung als technisches, barrierefreies, organisatorisches und bildungsbezogenes System behandelt werden sollte und nicht als späte Übersetzungsaufgabe.
topics:
  - localization
  - engineering-systems
  - governance
  - continuous-localization
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/README.md
  - docs/style-guide/localization/README.md
sources:
  - ../../sources/de/localization-at-scale.md
status: draft
---

# Lokalisierung im großen Maßstab

Viele Softwareprojekte behandeln Lokalisierung noch immer als den Moment, in dem fertiger englischer Text an Übersetzer weitergegeben wird. Für moderne Software im öffentlichen Interesse ist dieses Modell zu klein.

Lokalisierung im großen Maßstab ist ein System. Dazu gehören Ausgangstexte, Terminologie, Diagramme, Barrierefreiheitstexte, Sprachmetadaten, Screenshots, Review, QA, CI, Governance und langfristige Pflege.

## Der typische Fehler

Der häufigste Fehler ist zu langes Warten.

Wenn ein Projekt beschließt, mehrere Sprachen zu unterstützen, sind Informationsarchitektur, Navigation, Screenshots und Testannahmen oft schon nur für Englisch geformt. Dann wird Übersetzung teuer, weil das System nie dafür entworfen wurde, mehrere Sprachen gut zu tragen.

## Warum das Problem größer ist als Übersetzung

Mehrsprachige Nutzer lesen nicht nur Button-Beschriftungen. Sie erleben auch:

- Navigation
- Formularvalidierung
- Screenshots
- Diagramme
- Alternativtexte
- Untertitel
- Lernbeispiele
- Sprachwechsel in Screenreadern

Wenn das englisch bleibt, ist das Produkt nicht sinnvoll lokalisiert.

## Warum das für Let Books wichtig ist

Let Books ist ausdrücklich für mehrsprachige Sammlungen von Bildungs- und Fachbüchern in Slowenien, den Ländern des ehemaligen Jugoslawiens und der weiteren Region gedacht. Das Projekt nennt bereits Englisch, Slowenisch, Kroatisch, Bosnisch, Serbisch in Lateinschrift, Serbisch in Kyrillisch, Mazedonisch, Albanisch, Deutsch, Französisch, Italienisch und Spanisch als Zielsprachen.

Das bedeutet: Lokalisierung ist kein optionaler Feinschliff. Sie ist Teil der Produktdefinition.

## Ein praktisches Modell

Ein praktisches Modell für Lokalisierung im großen Maßstab hat meist fünf Ebenen.

1. einen gut übersetzbaren Quelltext schreiben
2. Terminologie und Governance festlegen
3. strukturierte Sprachvarianten erzeugen oder pflegen
4. Links, Platzhalter, Unicode und Barrierefreiheit prüfen
5. Übersetzungen schrittweise verbessern, statt sofort Perfektion zu behaupten

## Die Rolle von KI

KI hilft. Sie senkt die Kosten für erste Entwürfe, erkennt Terminologiedrift und erweitert die Dokumentationsabdeckung. Sie ersetzt aber nicht Review, Barrierefreiheitsprüfungen oder sprachliches Urteilsvermögen.

Darum sind reife Lokalisierungssysteme zunehmend KI-gestützt und nicht KI-only.

## Dauerhafte Schlussfolgerung

Wenn ein Projekt mehrsprachige Beteiligung will, muss Lokalisierung Teil des Systemdesigns sein und darf kein später Exportschritt sein.

## Related Pages

- `../../wiki/localization-at-scale.md`
- `../../wiki/localization-maturity-model.md`
- `../../learning/how-to-build-a-localization-pipeline.md`

## Other Languages

- English (../en/localization-at-scale.md)
