---
title: "Validierungsebenen"
summary: "Wie mehrere Validierungsstufen unterschiedliche Fehlerklassen in Inhalten, generiertem Output, Implementierung und Release-Workflows reduzieren."
topic_category: spec-driven-development
topics:
  - validation
  - product-quality
  - ci-cd
related:
  learning:
    - how-to-add-validation-rules-and-ci-gates-in-stages
  wiki:
    - validation-layers
    - localization-ci-cd
---

# Validierungsebenen

Validierungsebenen sind getrennte Prüfungen, die ein System aus unterschiedlichen Blickwinkeln untersuchen. Eine Ebene kann Syntax prüfen, eine andere Struktur, eine weitere Lokalisierungsqualität und noch eine andere gerenderten Output. Kein einzelner Validator kann zuverlässig jedes bedeutungsvolle Problem erkennen.

Der geschichtete Ansatz ist wichtig, weil Fehler in unterschiedlichen Phasen auftreten. Ein Quelldokument kann formal korrekt, aber semantisch schwach sein. Eine generierte HTML-Seite kann strukturell gültig sein und dennoch nicht übersetzten UI-Text enthalten. Eine Demo kann auf dem Bildschirm korrekt aussehen und sich beim Drucken dennoch schlecht verhalten. Jedes dieser Probleme braucht eine andere Art von Prüfung.

Deshalb verlassen sich ausgereifte Dokumentations- und Software-Pipelines selten auf einen einzigen Linting-Schritt. Sie kombinieren Formatvalidierung, Linkprüfungen, Paritätsprüfungen, Barrierefreiheitsprüfungen, Build-Verifikation und output-spezifisches Review. Der Learning-Guide zum [schrittweisen Hinzufügen von Validierungsregeln und CI-Gates](/docs/learning/de/how-to-add-validation-rules-and-ci-gates-in-stages.html) beschreibt, wie Teams dies schrittweise übernehmen können, statt zu versuchen, alles auf einmal zu automatisieren.

In Let Books existieren Validierungsebenen bereits über Lokalisierungs-Review, Prüfungen generierter HTML-Seiten, sprachübergreifende Vergleiche und Verifikation der Seitenstruktur hinweg. Druckausgabe als unterstützte Funktion zu behandeln, erweitert dieselbe Logik. Wenn Dokumentation als PDF oder auf Papier funktionieren soll, braucht Druckverhalten seine eigene Validierungsstufe, statt als optionale kosmetische Frage behandelt zu werden.

Die Wiki-Seite zu [Validierungsebenen](/docs/wiki/de/validation-layers.html) behandelt die Referenzsicht. Diese Themenseite betont das allgemeine Prinzip: Jeder neue Auslieferungspfad oder Dokumentationstyp sollte die bestehenden Ebenen übernehmen, die Qualität bereits an anderer Stelle schützen.
