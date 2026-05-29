---
article_id: isbn-not-a-database
canonical_language: en
title: ISBN Is Not a Database
summary: Why ISBN helps identify books but does not replace metadata systems, and how the Let Books metadata lookup chain works.
topics:
  - isbn-metadata
  - library-systems
  - book-donation
evidence:
  - docs/book-metadata.md
  - static-demo/app.js
  - AGENTS.md
sources:
  - sources/en/isbn-agency-reference.md
status: draft
---

# ISBN Is Not a Database

When you hold a printed book, the barcode on the back cover is the most visible identifier it carries. That identifier is an ISBN — International Standard Book Number. It looks like a database key, and it often works like one in library catalogs, online stores, and metadata systems. But an ISBN is not a database, and treating it like one leads to real problems in book donation workflows.

## What an ISBN actually is

An ISBN is a unique identifier assigned to a specific edition of a published book. The current standard, ISBN-13, uses 13 digits with a check digit for error detection. The older ISBN-10 format is still found on books published before 2007.

The ISBN identifies the edition, not the work. For example, the 2nd and 3rd editions of the same textbook have different ISBNs. A hardcover and a paperback of the same book have different ISBNs. An English translation and the original French edition have different ISBNs.

This is useful precision — but it comes with important limitations.

## What ISBN cannot do

### Not every book has one

Books published before 1970, self-published works, limited-run academic materials, and books from smaller publishers often lack ISBNs entirely. In academic heritage collections — the kind this project focuses on — pre-1970 textbooks, lecture notes, and locally printed materials are common and valuable.

### ISBN does not describe condition

A library wants to know whether a copy is water-damaged, annotated, or missing pages. ISBN gives none of this information. The identifier is the same for a pristine copy and one that has been stored in a damp basement for twenty years.

### ISBN does not describe provenance

Whose copy was this? Was it recommended by a professor? Does it have a previous owner's signature or a library stamp? Which institution held it? ISBN is silent on all of this.

### ISBN does not describe location

For a book donation project, the second most important question after "what is it?" is "where is it?". ISBN has no answer. The location is a physical logistics concern, tracked separately in the storage hierarchy.

### ISBN can be wrong or reused

Mispressed ISBNs exist. A single ISBN can be accidentally reused by different publishers. OCR can misread digits. The checksum catches single-digit errors but not all of them.

## How Let Books handles ISBN

The metadata lookup chain in the Let Books static demo follows a practical fallback strategy, implemented in `static-demo/app.js:2269`:

1. Normalize and validate the ISBN. Strip spaces and hyphens, uppercase X, validate the checksum.
2. Query Open Library first, using its public API.
3. If Open Library returns no useful data, query the Let Books metadata API.
4. If neither provider has data, fall back to manual entry.

Manual entry is never blocked. If all providers fail — whether because of a network error, rate limiting, or genuine absence of data — the user can enter the title, author, publisher, and year by hand and continue cataloging.

The fallback chain is deliberately simple. There is no single point of failure because no single provider is mandatory. Each provider is optional and independently replaceable.

Repository evidence for this chain is in `static-demo/app.js` (the `lookupMetadataByIsbn` function at line 2316 and the two provider fetch functions that follow it) and `docs/book-metadata.md` (the architecture documentation).

## Why this matters for book donations

When a donor catalogs a collection of academic books, some will have ISBNs and some will not. The books without ISBNs are often the most interesting — older editions, locally published materials, course-specific compilations, or books from former Yugoslav publishers whose identifiers never made it into global databases.

The cataloging workflow must not punish the donor for missing ISBNs. Every feature that works with ISBN lookup must also work without it: location tracking, photo upload, Excel export, batch review. The ISBN is a convenience, not a requirement.

This principle is stated directly in the project specification at `AGENTS.md:642`:

> The model should allow incomplete data. Do not require ISBN.

## What the future looks like

The current fallback chain will grow as new providers are added. Crossref, Wikidata, OpenAlex, and COBISS are candidates. Each will enter the same chain: try in order, cache aggressively, fall back gracefully.

But the chain itself is not the goal. The goal is to get from a physical book to enough metadata that a library can decide whether it wants the book. ISBN helps, but the system must work when ISBN does not.

ISBN is a useful identifier. It is not a database.
