---
article_id: spec-driven-development-for-ai-projects
canonical_language: en
language_variants:
  - ../en/spec-driven-development-for-ai-projects.md
  - ../sl/spec-driven-development-for-ai-projects.md
  - ../hr/spec-driven-development-for-ai-projects.md
  - ../bs/spec-driven-development-for-ai-projects.md
  - ../sr-Latn/spec-driven-development-for-ai-projects.md
  - ../sr-Cyrl/spec-driven-development-for-ai-projects.md
  - ../mk/spec-driven-development-for-ai-projects.md
  - ../sq/spec-driven-development-for-ai-projects.md
  - ../de/spec-driven-development-for-ai-projects.md
  - ../it/spec-driven-development-for-ai-projects.md
  - ../fr/spec-driven-development-for-ai-projects.md
  - ../es/spec-driven-development-for-ai-projects.md
title: Spezifikationsgetriebene Entwicklung für KI-Projekte
summary: Warum KI-gestützte Entwicklung stärkere Spezifikationen, klarere Dokumentation und ausdrückliche Prüfregeln statt eines lockereren Prozesses braucht.
topics:
  - spec-driven-development
  - ai-assisted-delivery
  - documentation
  - validation
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/Development.md
  - docs/Deployment.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/en/spec-driven-development-for-ai-projects.md
status: draft
---

# Spezifikationsgetriebene Entwicklung für KI-Projekte

KI macht es sehr viel leichter, schnell Code zu erzeugen. Sie macht es aber ebenso leichter, schnell den falschen Code zu erzeugen. Genau deshalb ist spezifikationsgetriebene Entwicklung in KI-gestützten Projekten wichtiger und nicht weniger wichtig.

Wenn ein Team ohne klare Spezifikation entwickelt, driftet das Produkt mit der Zeit von seinem Zweck weg. Wenn KI dabei hilft, kann diese Drift an einem einzigen Nachmittag entstehen. Der Code kann kompilieren, die Oberfläche kann gut aussehen, und Tests können sogar bestehen. Das Produkt kann trotzdem falsch sein.

## Warum KI das Risikoprofil verändert

KI beschleunigt das Tempo der Interpretation. Ein einziger Prompt kann Architektur, Text, Validierung, Benennung und Benutzerfluss erzeugen. Das ist nützlich, aber gefährlich, wenn die Quelle der Wahrheit nicht klar genug ist.

In der Praxis optimiert KI oft das, was im Moment am sichtbarsten ist:

- den letzten Prompt
- die nächstgelegene Datei
- den einfachsten Implementierungspfad
- das generischste bekannte Muster

Nichts davon bedeutet automatisch die richtige Produktentscheidung.

## Was eine gute Spezifikation leistet

Eine gute Spezifikation erfüllt mindestens vier Aufgaben:

- sie definiert den Zweck
- sie setzt Grenzen
- sie bestimmt den Prüfmaßstab
- sie dient als Gedächtnis des Teams

Das ist bei Let Books sehr klar. `AGENTS.md` betont mehrfach, dass der manuelle Ablauf auch ohne kostenpflichtige KI-Dienste funktionieren muss und dass physische Buchexemplare nicht dasselbe sind wie bibliografische Datensätze. Das sind keine technischen Details, sondern Produktgrenzen.

## Warum Dokumentation nicht warten darf

Wenn Dokumentation veraltet oder unklar ist, leiten verschiedene Menschen und verschiedene Werkzeuge aus demselben Repository verschiedene Produkte ab. Einer folgt dem Demo, ein anderer einer alten README-Datei, ein dritter der nächstgelegenen Datei.

Deshalb ist Dokumentation nicht nur eine nachträgliche Erklärung. Sie ist Teil des Betriebssystems des Projekts. In diesem Repository beschreibt `README.md` den aktuellen Stand, `AGENTS.md` die Produktabsicht, `AGENTS-Implementation.md` die taktischen Regeln und `docs/` die Veröffentlichungs- und Nachweisregeln.

## Die Rolle von Demos

Ein Demo ist nützlich, weil es zeigt, was existiert, und Probleme im Benutzerfluss sichtbar macht. Es sollte jedoch nicht stillschweigend zur Produktspezifikation werden.

Die Regeln des Repositories unterscheiden bereits zwischen kanonischen Spezifikationen und Dokumentation einerseits und Implementierungsstatus andererseits. Wenn ein Demo einen besseren Ablauf zeigt, müssen Spezifikation und Dokumentation aktualisiert werden, statt das Demo still gewinnen zu lassen.

## Markdown, Tests und CI bilden eine Kette

In einer spezifikationsgetriebenen Entwicklung stehen diese Ebenen nicht für sich allein.

- Markdown speichert die Absicht in überprüfbarer Form.
- Dokumentation erklärt, wie sie zu verstehen ist.
- Tests prüfen ausführbare Erwartungen.
- Validierungsregeln erkennen strukturelle Drift.
- CI setzt die Regeln regelmäßig durch.

Zusammen schaffen sie ein Produktgedächtnis, das die Entwicklungsgeschwindigkeit überlebt.

## Was das für Teams bedeutet, die KI nutzen

Teams, die KI gut einsetzen, entfernen den Prozess nicht. Sie verlagern den Prozess näher an die Quelle der Generierung.

Das bedeutet in der Regel:

- vor der Implementierung klarere Produktspezifikationen zu schreiben
- Implementierungsleitlinien ausdrücklich festzuhalten
- die Dokumentation zu aktualisieren, wenn sich das Produktverhalten ändert
- Demos gegen die Spezifikation zu prüfen, statt Übereinstimmung einfach anzunehmen
- schrittweise Validierungsregeln hinzuzufügen, damit Konsistenz nicht nur vom menschlichen Gedächtnis abhängt

Das ist nicht gegen KI gerichtet. So wird KI verlässlich.

## Die dauerhafte Lehre

KI kann schnell Code, Inhalte und Oberflächen erzeugen. Sie kann aber nicht von sich aus garantieren, dass all diese Ausgaben weiterhin dasselbe Produkt beschreiben.

Spezifikationsgetriebene Entwicklung ist die Art, wie ein Team verhindert, dass aus Geschwindigkeit Drift wird.

In KI-gestützten Projekten ist die Spezifikation nicht nachträglicher Papierkram. Sie ist die Grenze, das Gedächtnis und der Prüfmaßstab, die schnelle Lieferung vertrauenswürdig machen.

## Andere Sprachen

- [English](../en/spec-driven-development-for-ai-projects.md)
- [Shqip](../sq/spec-driven-development-for-ai-projects.md)
- [Slovenščina](../sl/spec-driven-development-for-ai-projects.md)
- [Hrvatski](../hr/spec-driven-development-for-ai-projects.md)
- [Bosanski](../bs/spec-driven-development-for-ai-projects.md)
- [Srpski (latinica)](../sr-Latn/spec-driven-development-for-ai-projects.md)
- [Српски (ћирилица)](../sr-Cyrl/spec-driven-development-for-ai-projects.md)
- [Македонски](../mk/spec-driven-development-for-ai-projects.md)
- [Italiano](../it/spec-driven-development-for-ai-projects.md)
- [Français](../fr/spec-driven-development-for-ai-projects.md)
- [Español](../es/spec-driven-development-for-ai-projects.md)

Spezifikationsgetriebene Entwicklung ist die Art, wie ein Team verhindert, dass Geschwindigkeit in Drift umschlägt.
