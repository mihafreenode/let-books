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

Primjeri uključuju:

- pravila javnog imenovanja
- pravila implementacije dokumentacije
- očekivanja o metapodacima statičnog mjesta
- ograničenja demoa
- očekivanja o lokalizaciji i provjeri
- uredničku dokaznu politiku za javno pisanje

To je važno u radu uz pomoć AI-ja zato što svako pravilo ne pripada dugoročnoj proizvodnoj specifikaciji. Neka su pravila taktička, urednička ili specifična za repozitorij. Održavanje te razlike jasnom smanjuje šum i sprječava da se proizvodna specifikacija pretvori u odlagalište implementacijskih detalja.

## Sloj trenutačnog stanja

`README.md` predstavlja treći sloj: opis trenutačnog stanja.

Objašnjava što danas postoji, čega još nema, čemu služi statični demo i kako je javna stranica objavljena. To je ključan dio usklađivanja, jer projekti često podbace kada čitatelji pobrkaju ambiciju s implementacijom.

U Let Booksu README izričito razlikuje trenutačne isporuke od budućih planova. To suradnicima, institucijama i recenzentima pomaže razumjeti zrelost projekta bez nagađanja.

## Sloj dokumentacije

Područje `docs/` dodaje četvrti sloj. `docs/README.md`, `docs/Development.md`, `docs/Deployment.md`, vodiči za stil i područje `sources` određuju kako znanje treba biti organizirano, validirano i objavljeno.

Tu repozitorij postaje više od zbirke datoteka. Postaje platforma znanja s:

- arhitekturom dokumentacije
- pravilima uredničkih dokaza
- višejezičnom izdavačkom strukturom
- pravilima objave javne dokumentacije
- razvojnim i validacijskim smjernicama

To je upravo vrsta okvira koja pomaže da isporuka uz pomoć AI-ja ostane sljediva.

## Sloj demoa

Statični demo je važan, ali namjerno nije jedina autoriteta. Pravila za blog i izvore već razlikuju kanoničnu dokumentaciju od statusa implementacije.

To znači da demo može provjeravati tijekove rada, otkrivati probleme upotrebljivosti i pomagati u objašnjavanju vanjskim dionicima, a da pritom sam od sebe ne postane konačna proizvodna istina.

To je zrelo pravilo. Bez njega prototipi često postanu slučajni mehanizmi upravljanja. Tim počne kopirati prototip zato što postoji, a ne zato što odražava odobrenu proizvodnu odluku.

## Sloj provjere

Let Books već dokumentira i način razmišljanja o provjeri.

`docs/Development.md` i `docs/Deployment.md` opisuju validacijske slojeve kao što su:

- dimni testovi lokalizacije
- validacija strukturiranih datoteka
- generiranje metapodataka
- provjera obveznih datoteka
- opcionalne pravopisne provjere i linting
- automatizacija objave

To nisu samo detalji o alatima. To je dokaz da projekt kvalitetu tretira kao ponovljiv sustav.

## Zašto je to važno za AI-podržanu isporuku

Ako AI pomoćnik doprinosi Let Booksu, ne mora izmišljati proizvod od početka. Repozitorij već sadrži lanac namjere:

1. proizvodni smjer u `AGENTS.md`
2. taktička pravila isporuke u `AGENTS-Implementation.md`
3. trenutačno stanje u `README.md`
4. pravila znanja i objave u `docs/`
5. status izvršivog prototipa u statičnom demou
6. smjernice za validaciju i objavu u razvojnoj i implementacijskoj dokumentaciji

Taj lanac ne uklanja pogreške. Ali ih čini lakšima za otkrivanje i pregled.

## Glavna lekcija

Razvoj vođen specifikacijom ne znači samo napisati dugačak dokument sa zahtjevima prije početka kodiranja.

U praksi znači izgraditi pouzdan lanac između:

- proizvodne namjere
- taktičkih pravila
- javne dokumentacije
- demoa
- validacije
- objave

Let Books već pokazuje da takav lanac može postojati i prije pune pozadinske aplikacije.

To je jedan od najsnažnijih argumenata za razvoj vođen specifikacijom u AI-podržanom radu: što je lanac namjere jasniji, to je manja vjerojatnost da će se brz izlaz pretvoriti u brzu zbrku.

## Drugi jezici

- [Slovenščina](../sl/spec-driven-development-in-let-books.md)
- [Hrvatski](../hr/spec-driven-development-in-let-books.md)
- [Bosanski](../bs/spec-driven-development-in-let-books.md)
- [Srpski (latinica)](../sr-Latn/spec-driven-development-in-let-books.md)
- [Српски (ћирилица)](../sr-Cyrl/spec-driven-development-in-let-books.md)
- [Македонски](../mk/spec-driven-development-in-let-books.md)
- [Shqip](../sq/spec-driven-development-in-let-books.md)
- [Deutsch](../de/spec-driven-development-in-let-books.md)
- [Italiano](../it/spec-driven-development-in-let-books.md)
- [Français](../fr/spec-driven-development-in-let-books.md)
- [Español](../es/spec-driven-development-in-let-books.md)
