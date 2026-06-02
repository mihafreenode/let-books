---
title: "Spezifikationsgesteuerte Entwicklung"
summary: "Warum Spezifikationen als praktisches Betriebsmodell für Implementierung, Review und Kommunikation dienen statt als nachträgliche separate Dokumentation."
topic_category: spec-driven-development
topics:
  - spec-driven-development
  - documentation
  - product-specification
related:
  blog:
    - spec-driven-development-in-let-books
  learning:
    - how-to-write-a-spec-that-ai-can-follow
  wiki:
    - spec-driven-development
---

# Spezifikationsgesteuerte Entwicklung

Spezifikationsgesteuerte Entwicklung ist ein Ansatz, bei dem die Implementierung einer expliziten Beschreibung von Produktverhalten, Einschränkungen und Intention folgt. Die Spezifikation ist nicht nur ein Anforderungsdokument. Sie wird zu einem gemeinsamen Bezugspunkt für Entwickler, Reviewer, Maintainer und Stakeholder.

In der Praxis erklärt eine gute Spezifikation, was ein System tun soll, was es nicht tun soll, welche Qualitätsregeln gelten und wie Erfolg beurteilt wird. Das unterscheidet sie von einem Backlog-Eintrag, einer Demo oder einer Architekturskizze. Diese Artefakte können nützlich sein, tragen aber selten dasselbe Maß an dauerhafter Intention.

Der Wert spezifikationsgesteuerter Arbeit ist nicht theoretisch. Sie reduziert Mehrdeutigkeit. Wenn mehrere Menschen im Lauf der Zeit dieselbe Funktion anfassen oder wenn ein KI-Assistent einen Teil der Implementierung erzeugt, begrenzt die Spezifikation den Drift, indem sie das erwartete Ergebnis sichtbar macht, bevor sich Coding-Entscheidungen ansammeln.

Dieser Ansatz erfordert keinen starren Wasserfallprozess. Spezifikationen können sich weiterentwickeln. Sie können klein oder groß sein. Entscheidend ist, dass die Implementierung gegen etwas Stabileres geprüft werden kann als Erinnerung oder Gewohnheit. Deshalb ist spezifikationsgesteuerte Arbeit eng mit [Validierungsebenen](/docs/topics/de/validation-layers.html), [Rückverfolgbarkeit der Dokumentation](/docs/topics/de/documentation-traceability.html) und dem im Learning-Guide beschriebenen Workflow zur [Umwandlung einer Produktspezifikation in einen Implementierungsplan](/docs/learning/de/how-to-turn-a-product-spec-into-an-implementation-plan.html) verbunden.

In Let Books ist spezifikationsgesteuerte Entwicklung besonders nützlich, weil das Projekt Produktdesign, mehrsprachige Dokumentation, Lagerlogistik, Metadatenverarbeitung und zukünftige KI-gestützte Workflows umfasst. Eine Änderung in einem Bereich kann leicht Annahmen in einem anderen erzeugen. Die Projektspezifikation in `AGENTS.md`, das Referenzmaterial im Wiki und das angeleitete Implementierungsmaterial in den Learning-Seiten wirken gemeinsam, um dieses Risiko zu verringern.

Das Ziel ist nicht Dokumentation um ihrer selbst willen. Das Ziel ist, Implementierung verlässlicher, Review konkreter und langfristige Wartung weniger abhängig von unausgesprochenem Kontext zu machen. Der zugehörige Blogartikel [Spezifikationsgesteuerte Entwicklung in Let Books](/docs/blog/de/spec-driven-development-in-let-books.html) zeigt, wie dieses Prinzip das Repository bereits prägt.
