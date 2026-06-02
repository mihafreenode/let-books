---
title: "Abgleich von Demo und Spezifikation"
summary: "Warum Demos nützliche Nachweise für den Implementierungsstand sind, Spezifikationen aber nicht stillschweigend als Hauptquelle der Produktwahrheit ersetzen sollten."
topic_category: spec-driven-development
topics:
  - demo-alignment
  - spec-driven-development
  - validation
related:
  blog:
    - when-the-demo-is-evidence-and-when-it-is-not
  learning:
    - how-to-keep-spec-docs-demo-and-code-aligned
  wiki:
    - demo-spec-alignment
---

# Abgleich von Demo und Spezifikation

Eine Demo zeigt, was aktuell existiert. Eine Spezifikation beschreibt, was das Produkt sein soll. Beides ist miteinander verbunden, aber nicht austauschbar.

Teams behandeln eine funktionierende Demo oft als das überzeugendste Artefakt in einem Projekt, und das aus gutem Grund. Eine Demo macht Verhalten konkret. Sie legt Workflow-Lücken, Usability-Probleme und Implementierungsentscheidungen offen, die in einem Dokument abstrakt bleiben würden. Aber eine Demo ist auch unvollständiger Nachweis. Sie wird von allem geprägt, was bisher gebaut wurde, einschließlich Abkürzungen, Experimenten und vorübergehenden Auslassungen.

Abgleich mit der Spezifikation bedeutet, diese beiden Ebenen im Gespräch zu halten. Wenn die Demo von der Spezifikation abweicht, braucht entweder die Implementierung eine Korrektur oder die Spezifikation ein Review. Was nicht passieren sollte, ist stilles Abdriften, bei dem die Demo zur neuen Wahrheit wird, nur weil sie in einer sichtbarereren Form existiert.

Das ist besonders wichtig in Projekten, die sich schnell bewegen. Ein KI-gestützter Workflow kann Oberflächen und Verhalten schneller erzeugen, als die umgebende Dokumentation aktualisiert wird. Ohne eine explizite Gewohnheit des Abgleichs können Mitwirkende anfangen, einfach dem zu folgen, was die aktuelle Demo gerade zeigt.

Let Books nutzt diese Unterscheidung bewusst. Das Repository enthält bereits eine öffentliche statische Demo, übergeordnete Produktspezifikationen, Implementierungsleitlinien und lokalisierte Dokumentation. Die Demo ist wertvoll, weil sie Speicher-, QR- und Metadaten-Workflows greifbar macht. Sie reicht allein jedoch nicht aus, um Workflow-Regeln neu zu definieren, die weiterhin an anderer Stelle spezifiziert sind. Der Blogartikel [Wann die Demo ein Nachweis ist und wann nicht](/docs/blog/de/when-the-demo-is-evidence-and-when-it-is-not.html) untersucht diese Spannung direkt.

Die praktische Regel ist einfach: Eine Demo ist Implementierungsnachweis, keine automatische Produktautorität. Abgleich erfordert, Demos, Spezifikationen, Dokumentation und Validierungsergebnisse gemeinsam zu vergleichen, statt eines dieser Elemente versehentlich dominieren zu lassen.
