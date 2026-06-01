---
article_id: spec-driven-development-in-let-books
canonical_language: en
language_variants:
  - ../en/spec-driven-development-in-let-books.md
  - ../sl/spec-driven-development-in-let-books.md
  - ../hr/spec-driven-development-in-let-books.md
  - ../bs/spec-driven-development-in-let-books.md
  - ../sr-Latn/spec-driven-development-in-let-books.md
  - ../sr-Cyrl/spec-driven-development-in-let-books.md
  - ../mk/spec-driven-development-in-let-books.md
  - ../sq/spec-driven-development-in-let-books.md
  - ../de/spec-driven-development-in-let-books.md
  - ../it/spec-driven-development-in-let-books.md
  - ../fr/spec-driven-development-in-let-books.md
  - ../es/spec-driven-development-in-let-books.md
title: Razvoj vođen specifikacijom u Let Books
summary: Kako Let Books već koristi specifikaciju, implementacijske smjernice, dokumentaciju, ograničenja demoa i pravila provjere kao sustav razvoja vođenog specifikacijom.
topics:
  - spec-driven-development
  - let-books
  - documentation
  - demo-alignment
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/README.md
  - docs/Development.md
  - docs/Deployment.md
  - docs/blog/README.md
  - docs/sources/README.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/hr/spec-driven-development-in-let-books.md
status: draft
---

# Razvoj vođen specifikacijom u Let Books

Let Books je koristan studijski primjer razvoja vođenog specifikacijom jer repozitorij već sadrži više slojeva proizvodne namjere, a ne samo implementacijske artefakte.

Projekt još nije puna hostana aplikacija. Trenutačno uključuje proizvodnu specifikaciju, implementacijske smjernice, javnu dokumentaciju i lokalni statični demo. Zbog toga je dobar primjer kako projekt može ostati usklađen i prije nego što postoji konačni produkcijski stack.

## Sloj specifikacije

`AGENTS.md` je jezgrena proizvodna specifikacija. Definira svrhu projekta, domenu, tijekove rada, granice opsega, smjer lokalizacije, privatnost, neobveznost AI-ja i kriterije prihvaćanja.

Odgovara na pitanja kao što su:

- zašto projekt postoji
- koji su tijekovi rada prvoklasni
- što mora raditi bez AI-ja
- što su buduće ideje, a ne sadašnje obveze
- što se računa kao uspješan prvi demo

To je razlika između općeg opisa i prave specifikacije. Prava specifikacija ograničava implementacijske izbore.

## Sloj taktičkih smjernica

`AGENTS-Implementation.md` dodaje drugi sloj. Ne zamjenjuje proizvodnu specifikaciju, nego objašnjava kako se rad u ovom repozitoriju sada treba izvoditi.

Tu spadaju pravila o javnom imenovanju, dokumentaciji, statičnom mjestu, lokalizaciji, provjeri i dokaznoj politici za javno pisanje. To je važno jer nisu sva pravila proizvodna istina. Neka su taktička, urednička ili specifična za repozitorij.

## Sloj trenutačnog stanja

`README.md` predstavlja treći sloj: pošten opis trenutačnog stanja.

On objašnjava što danas postoji, čega još nema, čemu služi statični demo i kako je javna stranica objavljena. To pomaže suradnicima, institucijama i recenzentima da ne brkaju ambiciju s implementacijom.

## Sloj dokumentacije

`docs/` dodaje četvrti sloj. `docs/README.md`, `docs/Development.md`, `docs/Deployment.md` i vodiči za stil određuju kako znanje treba biti organizirano, objavljeno i provjereno.

Tu repozitorij postaje više od zbirke datoteka. Postaje platforma znanja s:

- arhitekturom dokumentacije
- pravilima uredničkih dokaza
- višejezičnom izdavačkom strukturom
- pravilima objave i provjere

## Sloj demoa

Statični demo je važan, ali namjerno nije jedina autoriteta. Pravila za blog i izvore već razlikuju kanoničnu dokumentaciju od statusa implementacije.

To znači da demo može provjeravati tijekove rada, otkrivati probleme upotrebljivosti i pomagati u objašnjavanju vanjskim dionicima, a da pritom sam od sebe ne postane konačna proizvodna istina.

## Sloj provjere

Let Books već dokumentira i način razmišljanja o provjeri. `docs/Development.md` i `docs/Deployment.md` opisuju dimne testove lokalizacije, validaciju strukturiranih datoteka, generiranje metapodataka, obvezne datoteke, pravopisne provjere i automatiziranu objavu.

To nisu samo detalji o alatima. To je dokaz da projekt kvalitetu tretira kao ponovljiv sustav.

## Glavna lekcija

Razvoj vođen specifikacijom ne znači samo napisati dugačak dokument prije kodiranja. U praksi znači izgraditi pouzdan lanac između proizvodne namjere, taktičkih pravila, javne dokumentacije, demoa, provjere i objave.

Let Books pokazuje da takav lanac može postojati i prije pune backend aplikacije. Upravo je to jedna od najjačih prednosti razvoja vođenog specifikacijom u AI-podržanom radu.

## Drugi jezici

- [English](../en/spec-driven-development-in-let-books.md)
- [Slovenščina](../sl/spec-driven-development-in-let-books.md)
- [Bosanski](../bs/spec-driven-development-in-let-books.md)
- [Srpski (latinica)](../sr-Latn/spec-driven-development-in-let-books.md)
- [Српски (ћирилица)](../sr-Cyrl/spec-driven-development-in-let-books.md)
- [Македонски](../mk/spec-driven-development-in-let-books.md)
- [Shqip](../sq/spec-driven-development-in-let-books.md)
- [Deutsch](../de/spec-driven-development-in-let-books.md)
- [Italiano](../it/spec-driven-development-in-let-books.md)
- [Français](../fr/spec-driven-development-in-let-books.md)
- [Español](../es/spec-driven-development-in-let-books.md)
