---
title: "Edition vs Physical Copy"
summary: "Why a bibliographic edition and an individual stored book are related entities but should not be treated as the same record."
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

# Edition vs Physical Copy

An edition is a bibliographic concept. A physical copy is a real object. The two are connected, but they answer different questions.

An edition describes the published form of a book: title, publisher, year, language, ISBN, and other shared metadata. A physical copy describes one actual item in storage or circulation: its condition, ownership marks, box location, photos, donation status, and handling history.

Many library and inventory problems come from collapsing those two levels together. If a project only models editions, it cannot reliably track which copy is damaged, requested, delivered, or still sitting in a basement box. If it only models physical copies, it may duplicate bibliographic metadata unnecessarily and make matching harder.

That is why modern book-handling systems often treat the edition and the copy as separate but linked entities. The edition supports identification and discovery. The copy supports logistics and decision-making.

This distinction is central in LetBooks because the project is built around real donation and retrieval workflows. A donor may hold five copies of the same textbook, each with a different condition or storage location. A library may want only one of them. Without the edition-versus-copy split, those workflows become confusing very quickly.

The existing article [ISBN Is Not a Database](/docs/blog/en/isbn-not-a-database.html) reinforces this point from the identifier angle. This topic page states the model directly: bibliographic sameness does not erase physical difference.
