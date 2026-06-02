---
title: "Auflage vs. physisches Exemplar"
summary: "Warum eine bibliografische Auflage und ein einzelnes gelagertes Buch miteinander verbundene Einheiten sind, aber nicht als derselbe Datensatz behandelt werden sollten."
topic_category: book-and-library-metadata
topics:
  - isbn-metadata
  - book-donation
  - library-systems
related:
  blog:
    - isbn-not-a-database
  wiki:
    - product-specification
---

# Auflage vs. physisches Exemplar

Eine Auflage ist ein bibliografisches Konzept. Ein physisches Exemplar ist ein reales Objekt. Beide sind miteinander verbunden, beantworten aber unterschiedliche Fragen.

Eine Auflage beschreibt die veröffentlichte Form eines Buchs: Titel, Verlag, Jahr, Sprache, ISBN und andere gemeinsame Metadaten. Ein physisches Exemplar beschreibt einen tatsächlichen Gegenstand in Lagerung oder Zirkulation: seinen Zustand, Eigentumsmerkmale, Box-Standort, Fotos, Spendenstatus und Bearbeitungshistorie.

Viele Bibliotheks- und Inventarprobleme entstehen dadurch, dass diese beiden Ebenen zusammengezogen werden. Wenn ein Projekt nur Auflagen modelliert, kann es nicht zuverlässig verfolgen, welches Exemplar beschädigt, angefragt, ausgeliefert oder noch in einer Kellerbox liegt. Wenn es nur physische Exemplare modelliert, kann es bibliografische Metadaten unnötig duplizieren und das Matching erschweren.

Deshalb behandeln moderne Systeme für den Umgang mit Büchern Auflage und Exemplar oft als getrennte, aber verknüpfte Entitäten. Die Auflage unterstützt Identifikation und Auffindbarkeit. Das Exemplar unterstützt Logistik und Entscheidungsfindung.

Diese Unterscheidung ist für Let Books zentral, weil das Projekt um reale Spenden- und Entnahme-Workflows herum gebaut ist. Ein Spender kann fünf Exemplare desselben Lehrbuchs besitzen, jeweils mit anderem Zustand oder Lagerort. Eine Bibliothek möchte möglicherweise nur eines davon. Ohne die Trennung zwischen Auflage und Exemplar werden diese Workflows sehr schnell verwirrend.

Der bestehende Artikel [ISBN ist keine Datenbank](/docs/blog/de/isbn-not-a-database.html) bekräftigt diesen Punkt aus der Perspektive der Kennung. Diese Themenseite formuliert das Modell direkt: bibliografische Gleichheit hebt physischen Unterschied nicht auf.
