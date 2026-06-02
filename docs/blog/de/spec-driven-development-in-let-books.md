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

Das ist wichtig, weil sie Fragen beantwortet, auf die Code allein keine klare Antwort geben kann:

- warum das Projekt existiert
- welche Arbeitsabläufe erstklassig sind
- was ohne KI funktionieren muss
- was Zukunftsideen und nicht aktuelle Zusagen sind
- was als erfolgreiches erstes Demo gilt

Das ist der Unterschied zwischen einer allgemeinen Beschreibung und einer echten Spezifikation. Eine echte Spezifikation begrenzt Implementierungsentscheidungen.

## Die Ebene der taktischen Leitlinien

`AGENTS-Implementation.md` ergänzt die zweite Ebene. Sie ersetzt die Produktspezifikation nicht, sondern erklärt, wie die Arbeit in diesem Repository derzeit ausgeführt werden soll.

Beispiele dafür sind:

- Regeln für öffentliche Benennung
- Regeln für die Dokumentationsimplementierung
- Erwartungen an Metadaten der statischen Website
- Grenzen des Demos
- Erwartungen an Lokalisierung und Prüfung
- redaktionelle Nachweispolitik für öffentliches Schreiben

Das ist für KI-gestützte Arbeit wichtig, weil nicht jede Regel in die langfristige Produktspezifikation gehört. Manche Regeln sind taktisch, redaktionell oder repositoriespezifisch. Diese Unterscheidung klar zu halten, reduziert Rauschen und verhindert, dass die Produktspezifikation zu einer Ablage für Implementierungsdetails wird.

## Die Ebene des aktuellen Zustands

`README.md` bildet die dritte Ebene: eine Beschreibung des aktuellen Zustands.

Sie erklärt, was heute existiert, was noch fehlt, wozu das statische Demo dient und wie die öffentliche Seite veröffentlicht wird. Das ist ein zentraler Teil der Ausrichtung, weil Projekte oft scheitern, wenn Lesende Ambition mit Implementierung verwechseln.

In Let Books unterscheidet die README ausdrücklich zwischen aktuellen Ergebnissen und zukünftigen Plänen. Das hilft Mitwirkenden, Institutionen und Prüfern, die Reife des Projekts ohne Rätselraten zu verstehen.

## Die Ebene der Dokumentation

Der Bereich `docs/` fügt die vierte Ebene hinzu. `docs/README.md`, `docs/Development.md`, `docs/Deployment.md`, die Stilrichtlinien und der Bereich `sources` legen fest, wie Wissen organisiert, validiert und veröffentlicht werden soll.

Hier wird das Repository mehr als eine Sammlung von Dateien. Es wird zu einer Wissensplattform mit:

- Dokumentationsarchitektur
- redaktionellen Nachweisregeln
- mehrsprachiger Veröffentlichungsstruktur
- Veröffentlichungsregeln für öffentliche Dokumentation
- Entwicklungs- und Validierungsleitlinien

Genau diese Art von Gerüst hilft dabei, KI-gestützte Lieferung nachvollziehbar zu halten.

## Die Demo-Ebene

Das statische Demo ist wichtig, aber bewusst nicht die einzige Autorität. Die Regeln für Blog und Quellen unterscheiden bereits zwischen kanonischer Dokumentation und Implementierungsstatus.

Das bedeutet, dass das Demo Arbeitsabläufe prüfen, Nutzbarkeitsprobleme offenlegen und externen Beteiligten helfen kann, ohne von selbst zur endgültigen Produktwahrheit zu werden.

Das ist eine reife Regel. Ohne sie werden Prototypen oft zu zufälligen Governance-Mechanismen. Ein Team beginnt, den Prototyp zu kopieren, weil er existiert, nicht weil er eine freigegebene Produktentscheidung widerspiegelt.

## Die Prüfungsebene

Let Books dokumentiert bereits auch eine Prüfmentalität.

`docs/Development.md` und `docs/Deployment.md` beschreiben Validierungsebenen wie:

- Lokalisierungs-Smoketests
- Validierung strukturierter Dateien
- Metadatengenerierung
- Prüfungen auf Pflichtdateien
- optionale Rechtschreibprüfung und Linting
- Veröffentlichungsautomatisierung

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

Spezifikationsgetriebene Entwicklung bedeutet nicht nur, vor Beginn des Programmierens ein langes Anforderungsdokument zu schreiben.

In der Praxis bedeutet sie, eine verlässliche Kette aufzubauen zwischen:

- Produktabsicht
- taktischen Regeln
- öffentlicher Dokumentation
- Demos
- Validierung
- Veröffentlichung

Let Books zeigt bereits, dass eine solche Kette existieren kann, bevor das vollständige Backend-Produkt existiert.

Das ist eines der stärksten Argumente für spezifikationsgetriebene Entwicklung in KI-gestützter Arbeit: Je klarer die Kette der Absicht ist, desto unwahrscheinlicher wird schneller Output zu schneller Verwirrung.

## Andere Sprachen

- [Shqip](../sq/spec-driven-development-in-let-books.md)
- [Slovenščina](../sl/spec-driven-development-in-let-books.md)
- [Hrvatski](../hr/spec-driven-development-in-let-books.md)
- [Bosanski](../bs/spec-driven-development-in-let-books.md)
- [Srpski (latinica)](../sr-Latn/spec-driven-development-in-let-books.md)
- [Српски (ћирилица)](../sr-Cyrl/spec-driven-development-in-let-books.md)
- [Македонски](../mk/spec-driven-development-in-let-books.md)
- [Deutsch](../de/spec-driven-development-in-let-books.md)
- [Italiano](../it/spec-driven-development-in-let-books.md)
- [Français](../fr/spec-driven-development-in-let-books.md)
- [Español](../es/spec-driven-development-in-let-books.md)
