---
title: "Regionale Sprachen"
summary: "Warum Unterstützung für regionale Sprachen mehr erfordert als breite Marktbezeichnungen und oft von Schrift, Bildung und institutionellem Kontext abhängt."
topic_category: localization-at-scale
topics:
  - smaller-languages
  - language-rights
  - localization
related:
  blog:
    - preserving-smaller-languages-in-the-digital-age
  wiki:
    - language-support-matrix
    - unicode-and-script-correctness
---

# Regionale Sprachen

Regionale Sprachen werden in der Softwareplanung oft als Randfälle behandelt, repräsentieren in der Praxis aber reale Nutzer, Institutionen und Wissensgemeinschaften. Sie gut zu unterstützen erfordert gewöhnlich mehr, als einfach eine generische Kategorie „andere Sprachen“ hinzuzufügen.

Die Herausforderung besteht nicht nur im Übersetzungsvolumen. Sie umfasst auch Schriftunterstützung, Unicode-Korrektheit, Typografie, Terminologie, Bildungsnormen und den Unterschied zwischen Sprachfamilien, die nah beieinander liegen, aber nicht austauschbar sind. Eine Region kann mehrere Schriftsysteme, mehrere Standards und mehrere unterschiedliche Erwartungen an öffentlich sichtbare Sprache enthalten.

Das ist in der Dokumentation wichtig, weil konzeptionelle Genauigkeit und Nutzervertrauen stark mit der Sprachwahl verknüpft sind. Ein Projekt, das regionale Relevanz beansprucht, aber unterschiedliche Sprachen oder Schriften in einer einzigen Bequemlichkeitsschicht zusammenzieht, wirkt oft unfertig, selbst wenn die zugrunde liegende Technologie funktioniert.

Let Books ist ein gutes Beispiel, weil sein vorgesehener Kontext Slowenisch und mehrere Sprachgemeinschaften des ehemaligen Jugoslawiens und des Balkans umfasst, einschließlich lateinischer und kyrillischer Schrift. Die Projektspezifikation behandelt diese Unterschiede als erstklassig und nicht als bloß kosmetisch. Das unterstützende Referenzmaterial zu [Unicode- und Schriftkorrektheit](/docs/wiki/de/unicode-and-script-correctness.html) und zur [Matrix der Sprachunterstützung](/docs/wiki/de/language-support-matrix.html) zeigt, warum diese Entscheidung sowohl die Implementierung als auch die Veröffentlichung beeinflusst.

Unterstützung regionaler Sprachen ist daher kein Branding-Feature. Sie ist Teil der Frage, ob das System die Communities respektiert, denen es dienen will.
