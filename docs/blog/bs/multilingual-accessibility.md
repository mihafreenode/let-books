---
article_id: multilingual-accessibility
canonical_language: en
language_variants:
  - ../en/multilingual-accessibility.md
  - ../sl/multilingual-accessibility.md
  - ../hr/multilingual-accessibility.md
  - ../bs/multilingual-accessibility.md
  - ../sr-Latn/multilingual-accessibility.md
  - ../sr-Cyrl/multilingual-accessibility.md
  - ../mk/multilingual-accessibility.md
  - ../sq/multilingual-accessibility.md
  - ../de/multilingual-accessibility.md
  - ../it/multilingual-accessibility.md
  - ../fr/multilingual-accessibility.md
  - ../es/multilingual-accessibility.md
title: Višejezična pristupačnost
summary: Why accessibility and localization should be designed together across language metadata, screen readers, plain language, captions, and alt text.
topics:
  - accessibility
  - screen-readers
  - localized-alt-text
  - plain-language
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - docs/style-guide/localization/README.md
sources:
  - ../../sources/bs/multilingual-accessibility.md
status: draft
---


# Višejezična pristupačnost

Ova lokalizirana objava je nacrt za potpunu jezičku pokrivenost. Kanonski engleski sadržaj je trenutno zadržan u nastavku dok se ne završi prirodna jezička revizija.

Accessibility and localization are often split into separate workstreams. In practice they overlap constantly.

If a page is translated but the `lang` metadata, alt text, captions, or screen-reader labels remain in another language, the experience is not fully accessible.

## What multilingual accessibility includes

It includes more than translated UI strings.

- correct language metadata
- localized form labels and validation messages
- localized alt text and captions
- plain-language wording where needed
- script-correct rendering
- testing with assistive technologies across languages

## Why this matters for smaller languages

Smaller languages are often the first to lose accessibility polish. That creates a second-class experience for exactly the users who may already face more language barriers.

## Let Books context

Let Books already treats localized ARIA text, alt text, status messages, and script correctness as product requirements. That is the right direction because accessibility metadata is part of the meaning of the interface.

## Durable takeaway

A multilingual product is not accessible by default, and an accessible product is not multilingual by default. Good systems design both together.

## Povezane stranice

- `../../wiki/multilingual-accessibility.md`
- `../../wiki/unicode-and-script-correctness.md`
- `../../learning/how-to-localize-accessibility-content.md`

## Drugi jezici

- [English](../en/multilingual-accessibility.md)
- [Slovenščina](../sl/multilingual-accessibility.md)
- [Hrvatski](../hr/multilingual-accessibility.md)
- [Srpski (latinica)](../sr-Latn/multilingual-accessibility.md)
- [Српски (ћирилица)](../sr-Cyrl/multilingual-accessibility.md)
- [Македонски](../mk/multilingual-accessibility.md)
- [Shqip](../sq/multilingual-accessibility.md)
- [Deutsch](../de/multilingual-accessibility.md)
- [Italiano](../it/multilingual-accessibility.md)
- [Français](../fr/multilingual-accessibility.md)
- [Español](../es/multilingual-accessibility.md)
