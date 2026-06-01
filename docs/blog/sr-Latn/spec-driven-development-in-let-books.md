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
summary: Kako Let Books već koristi specifikaciju, implementaciona uputstva, dokumentaciju, ograničenja dema i pravila provere kao sistem razvoja vođenog specifikacijom.
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
  - ../../sources/sr-Latn/spec-driven-development-in-let-books.md
status: draft
---

# Razvoj vođen specifikacijom u Let Books

Let Books je koristan studijski primer razvoja vođenog specifikacijom jer repozitorijum već sadrži više slojeva proizvodne namere, a ne samo implementacione artefakte.

Projekat još nije puna hostovana aplikacija. Trenutno uključuje proizvodnu specifikaciju, implementaciona uputstva, javnu dokumentaciju i lokalni statični demo. Zbog toga je dobar primer kako projekat može ostati usklađen i pre nego što postoji konačni produkcioni stack.

## Sloj specifikacije

`AGENTS.md` je jezgro proizvodne specifikacije. Definiše svrhu projekta, domenu, tokove rada, granice obima, smer lokalizacije, privatnost, neobaveznost AI-ja i kriterijume prihvatanja.

Odgovara na pitanja kao što su:

- zašto projekat postoji
- koji su tokovi rada prvoklasni
- šta mora da radi bez AI-ja
- šta su buduće ideje, a ne sadašnje obaveze
- šta se računa kao uspešan prvi demo

To je razlika između opšteg opisa i prave specifikacije. Prava specifikacija ograničava implementacione izbore.

## Sloj taktičkih uputstava

`AGENTS-Implementation.md` dodaje drugi sloj. Ne zamenjuje proizvodnu specifikaciju, nego objašnjava kako rad u ovom repozitorijumu sada treba da se izvodi.

Tu spadaju pravila o javnom imenovanju, dokumentaciji, statičkom sajtu, lokalizaciji, proveri i dokaznoj politici za javno pisanje. To je važno jer nisu sva pravila proizvodna istina. Neka su taktička, urednička ili specifična za repozitorijum.

## Sloj trenutnog stanja

`README.md` predstavlja treći sloj: pošten opis trenutnog stanja.

On objašnjava šta danas postoji, čega još nema, čemu služi statični demo i kako je javni sajt objavljen. To pomaže saradnicima, institucijama i recenzentima da ne mešaju ambiciju sa implementacijom.

## Sloj dokumentacije

`docs/` dodaje četvrti sloj. `docs/README.md`, `docs/Development.md`, `docs/Deployment.md` i stilski vodiči određuju kako znanje treba da bude organizovano, objavljeno i provereno.

Tu repozitorijum postaje više od zbirke datoteka. Postaje platforma znanja sa:

- arhitekturom dokumentacije
- pravilima uredničkih dokaza
- višejezičnom izdavačkom strukturom
- pravilima objave i provere

## Sloj dema

Statični demo je važan, ali namerno nije jedina autoriteta. Pravila za blog i izvore već razlikuju kanoničnu dokumentaciju od statusa implementacije.

To znači da demo može proveravati tokove rada, otkrivati probleme upotrebljivosti i pomagati u objašnjavanju spoljnim akterima, a da pritom sam od sebe ne postane konačna proizvodna istina.

## Sloj provere

Let Books već dokumentuje i način razmišljanja o proveri. `docs/Development.md` i `docs/Deployment.md` opisuju dimne testove lokalizacije, validaciju strukturiranih datoteka, generisanje metapodataka, obavezne datoteke, pravopisne provere i automatizovanu objavu.

To nisu samo detalji o alatima. To je dokaz da projekat kvalitet tretira kao ponovljiv sistem.

## Glavna lekcija

Razvoj vođen specifikacijom ne znači samo napisati dugačak dokument pre kodiranja. U praksi znači izgraditi pouzdan lanac između proizvodne namere, taktičkih pravila, javne dokumentacije, dema, provere i objave.

Let Books pokazuje da takav lanac može postojati i pre pune backend aplikacije. Upravo je to jedna od najjačih prednosti razvoja vođenog specifikacijom u AI-podržanom radu.

## Drugi jezici

- [English](../en/spec-driven-development-in-let-books.md)
- [Slovenščina](../sl/spec-driven-development-in-let-books.md)
- [Hrvatski](../hr/spec-driven-development-in-let-books.md)
- [Bosanski](../bs/spec-driven-development-in-let-books.md)
- [Српски (ћирилица)](../sr-Cyrl/spec-driven-development-in-let-books.md)
- [Македонски](../mk/spec-driven-development-in-let-books.md)
- [Shqip](../sq/spec-driven-development-in-let-books.md)
- [Deutsch](../de/spec-driven-development-in-let-books.md)
- [Italiano](../it/spec-driven-development-in-let-books.md)
- [Français](../fr/spec-driven-development-in-let-books.md)
- [Español](../es/spec-driven-development-in-let-books.md)
