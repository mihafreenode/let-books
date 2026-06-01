---
article_id: spec-driven-development-in-let-books
canonical_language: en
language_variants:
  - ../en/spec-driven-development-in-let-books.md
  - ../sl/spec-driven-development-in-let-books.md
  - ../hr/spec-driven-development-in-let-books.md
  - ../bs/spec-driven-development-in-let-books.md
  - ../sr-Latn/spec-driven-development-in-let-books.md
  - ../sr-Cyrl/spec-driven-development-in-let-books.md
  - ../mk/spec-driven-development-in-let-books.md
  - ../sq/spec-driven-development-in-let-books.md
  - ../de/spec-driven-development-in-let-books.md
  - ../it/spec-driven-development-in-let-books.md
  - ../fr/spec-driven-development-in-let-books.md
  - ../es/spec-driven-development-in-let-books.md
title: Spezifikationsgetriebene Entwicklung in Let Books
summary: Wie Let Books bereits Spezifikation, Implementierungsleitlinien, Dokumentation, Demo-Grenzen und Prüfregeln als System der spezifikationsgetriebenen Entwicklung nutzt.
topics:
  - spec-driven-development
  - let-books
  - documentation
  - demo-alignment
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/README.md
  - docs/Development.md
  - docs/Deployment.md
  - docs/blog/README.md
  - docs/sources/README.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/en/spec-driven-development-in-let-books.md
status: draft
---

# Spezifikationsgetriebene Entwicklung in Let Books

Let Books ist ein nützliches Fallbeispiel für spezifikationsgetriebene Entwicklung, weil das Repository bereits mehrere Ebenen von Produktabsicht enthält und nicht nur Implementierungsartefakte.

Das Projekt ist noch keine vollständige gehostete Anwendung. Es umfasst derzeit eine Produktspezifikation, Implementierungsleitlinien, öffentliche Dokumentation und ein lokales statisches Demo. Dadurch ist es ein gutes Beispiel dafür, wie ein Projekt kohärent bleiben kann, bevor der endgültige Produktions-Stack existiert.

## Die Spezifikationsebene

`AGENTS.md` ist die zentrale Produktspezifikation. Sie definiert den Zweck des Projekts, das Domänenmodell, Arbeitsabläufe, Umfangsgrenzen, Lokalisierungsrichtung, Datenschutz, KI-Optionalität und Abnahmekriterien.

Sie beantwortet Fragen wie:

- warum das Projekt existiert
- welche Arbeitsabläufe erstklassig sind
- was ohne KI funktionieren muss
- was Zukunftsideen und nicht aktuelle Zusagen sind
- was als erfolgreiches erstes Demo gilt

Das ist der Unterschied zwischen einer allgemeinen Beschreibung und einer echten Spezifikation. Eine echte Spezifikation begrenzt Implementierungsentscheidungen.

## Die Ebene der taktischen Leitlinien

`AGENTS-Implementation.md` ergänzt die zweite Ebene. Sie ersetzt die Produktspezifikation nicht, sondern erklärt, wie die Arbeit in diesem Repository derzeit ausgeführt werden soll.

Dazu gehören Regeln für öffentliche Benennung, Dokumentation, statische Seiten, Lokalisierung, Prüfung und Nachweispolitik für öffentliches Schreiben. Das ist wichtig, weil nicht jede Regel Produktwahrheit ist. Manche sind taktisch, redaktionell oder repositoriespezifisch.

## Die Ebene des aktuellen Zustands

`README.md` bildet die dritte Ebene: eine ehrliche Beschreibung des aktuellen Zustands.

Sie erklärt, was heute existiert, was noch fehlt, wozu das statische Demo dient und wie die öffentliche Seite veröffentlicht wird. Das hilft Mitwirkenden, Institutionen und Prüfern, Ambition nicht mit Implementierung zu verwechseln.

## Die Ebene der Dokumentation

`docs/` fügt die vierte Ebene hinzu. `docs/README.md`, `docs/Development.md`, `docs/Deployment.md` und die Stilrichtlinien legen fest, wie Wissen organisiert, veröffentlicht und geprüft werden soll.

Hier wird das Repository mehr als eine Sammlung von Dateien. Es wird zu einer Wissensplattform mit:

- Dokumentationsarchitektur
- redaktionellen Nachweisregeln
- mehrsprachiger Veröffentlichungsstruktur
- Regeln für Veröffentlichung und Prüfung

## Die Demo-Ebene

Das statische Demo ist wichtig, aber bewusst nicht die einzige Autorität. Die Regeln für Blog und Quellen unterscheiden bereits zwischen kanonischer Dokumentation und Implementierungsstatus.

Das bedeutet, dass das Demo Arbeitsabläufe prüfen, Nutzbarkeitsprobleme offenlegen und externen Beteiligten helfen kann, ohne von selbst zur endgültigen Produktwahrheit zu werden.

## Die Prüfungsebene

Let Books dokumentiert bereits auch eine Prüfmentalität. `docs/Development.md` und `docs/Deployment.md` beschreiben Lokalisierungs-Smoketests, Validierung strukturierter Dateien, Metadatengenerierung, Pflichtdateien, Rechtschreibprüfungen und automatisierte Veröffentlichung.

Das sind nicht nur Werkzeugdetails. Es ist ein Beleg dafür, dass das Projekt Qualität als wiederholbares System behandelt.

## Warum das für KI-gestützte Lieferung wichtig ist

Wenn ein KI-Assistent zu Let Books beiträgt, muss er das Produkt nicht von Grund auf erfinden. Das Repository enthält bereits eine Kette von Absicht:

1. Produktrichtung in `AGENTS.md`
2. taktische Lieferregeln in `AGENTS-Implementation.md`
3. aktuellen Status in `README.md`
4. Wissens- und Veröffentlichungsregeln in `docs/`
5. ausführbaren Prototypstatus im statischen Demo
6. Validierungs- und Veröffentlichungsleitlinien in der Entwicklungs- und Bereitstellungsdokumentation

Diese Kette beseitigt Fehler nicht. Sie macht sie aber leichter erkennbar und leichter überprüfbar.

## Die wichtigste Lehre

Spezifikationsgetriebene Entwicklung bedeutet nicht nur, vor dem Programmieren ein langes Dokument zu schreiben. In der Praxis bedeutet sie, eine verlässliche Kette zwischen Produktabsicht, taktischen Regeln, öffentlicher Dokumentation, Demo, Prüfung und Veröffentlichung aufzubauen.

Let Books zeigt, dass eine solche Kette schon vor einer vollständigen Backend-Anwendung existieren kann. Genau das ist einer der stärksten Vorteile spezifikationsgetriebener Entwicklung in KI-gestützter Arbeit.

## Andere Sprachen

- [English](../en/spec-driven-development-in-let-books.md)
- [Shqip](../sq/spec-driven-development-in-let-books.md)
- [Slovenščina](../sl/spec-driven-development-in-let-books.md)
- [Hrvatski](../hr/spec-driven-development-in-let-books.md)
- [Bosanski](../bs/spec-driven-development-in-let-books.md)
- [Srpski (latinica)](../sr-Latn/spec-driven-development-in-let-books.md)
- [Српски (ћирилица)](../sr-Cyrl/spec-driven-development-in-let-books.md)
- [Македонски](../mk/spec-driven-development-in-let-books.md)
- [Italiano](../it/spec-driven-development-in-let-books.md)
- [Français](../fr/spec-driven-development-in-let-books.md)
- [Español](../es/spec-driven-development-in-let-books.md)
