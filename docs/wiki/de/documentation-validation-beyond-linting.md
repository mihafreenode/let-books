---
title: "Dokumentationsvalidierung jenseits von Linting"
summary: "Warum Dokumentationsqualität mehrere Validierungsebenen erfordert, einschließlich Lokalisierung, Barrierefreiheit, generierter Ausgabe und Druckprüfung, statt nur eines einzelnen Linting-Durchlaufs."
topics:
  - validation
  - documentation
  - localization
related:
  blog:
    - documentation-is-part-of-the-product
  learning:
    - how-to-add-validation-rules-and-ci-gates-in-stages
  wiki:
    - validation-layers
    - localization-ci-cd
---

# Dokumentationsvalidierung jenseits von Linting

Linting ist nützlich, deckt aber nur einen Teil der Dokumentationsqualität ab. Es kann Formatierungsfehler, Syntaxprobleme oder einige Klassen beschädigter Struktur erkennen. Es kann jedoch nicht allein garantieren, dass generierte Seiten korrekt sind, lokalisierte Varianten abgestimmt bleiben, Navigation konsistent ist oder gedruckte Ausgaben lesbar bleiben.

Deshalb sollte Dokumentationsqualität als technische Disziplin mit mehreren Validierungsebenen behandelt werden. Unterschiedliche Validatoren beantworten unterschiedliche Fragen.

- Link-Validierung prüft, ob Verweise weiterhin korrekt aufgelöst werden.
- Lokalisierungsvalidierung prüft, ob leserrelevanter Text übersetzt und konsistent bleibt.
- Paritätsvalidierung prüft, ob wichtige Abschnitte in den Sprachvarianten weiterhin vorhanden sind.
- Barrierefreiheitsprüfungen untersuchen Überschriften, Beschriftungen und strukturelle Nutzbarkeit.
- Validierung des generierten HTML prüft, ob Quellinhalt zu korrekter Ausgabe geworden ist.
- Druckvalidierung prüft, ob unterstützte PDF- und Papierausgaben benutzbar bleiben.

Dieses mehrschichtige Modell ist in KI-gestützten Workflows noch wichtiger. Inhalte können schnell entworfen, schnell neu erzeugt und schnell lokalisiert werden. Das beschleunigt Feedbackschleifen, erhöht aber auch das Risiko, glatt wirkende Fehler auszuliefern, wenn die Pipeline nur Oberflächenformatierung testet.

Themen sind ein gutes Beispiel. Als Topics in LetBooks zu einem eigenständigen Dokumentationstyp wurden, mussten sie Navigation, Suchindexierung, Sitemap-Generierung, Lokalisierungsbehandlung, Validierung der generierten Website und Druckprüfungen erben. Ein Pfad geringerer Qualität hätte eine neue Inhaltsoberfläche mit schwächeren Garantien als der Rest der Plattform geschaffen.

Das Prinzip ist einfach: Jeder neue Dokumentationstyp muss vorhandene Validierung erben. So bleibt das Qualitätsmodell skalierbar. Statt für jeden neuen Bereich Ausnahmen zu erfinden, erweitert die Plattform dieselben Erwartungen auf jede leserorientierte Oberfläche.

Dokumentationsqualität geht über Linting hinaus, weil Leser das gesamte System erleben und nicht nur die Quelldateien.
