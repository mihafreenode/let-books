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

Primeri uključuju:

- pravila javnog imenovanja
- pravila implementacije dokumentacije
- očekivanja o metapodacima statičkog sajta
- ograničenja dema
- očekivanja o lokalizaciji i proveri
- uredničku dokaznu politiku za javno pisanje

To je važno u radu uz pomoć AI-ja zato što svako pravilo ne pripada dugoročnoj proizvodnoj specifikaciji. Neka su pravila taktička, urednička ili specifična za repozitorijum. Održavanje te razlike jasnom smanjuje šum i sprečava da se proizvodna specifikacija pretvori u odlagalište implementacionih detalja.

## Sloj trenutnog stanja

`README.md` predstavlja treći sloj: opis trenutnog stanja.

Objašnjava šta danas postoji, čega još nema, čemu služi statični demo i kako je javni sajt objavljen. To je ključan deo usklađivanja, jer projekti često podbace kada čitaoci pomešaju ambiciju sa implementacijom.

U Let Booksu README izričito razlikuje trenutne isporuke od budućih planova. To saradnicima, institucijama i recenzentima pomaže da razumeju zrelost projekta bez nagađanja.

## Sloj dokumentacije

Područje `docs/` dodaje četvrti sloj. `docs/README.md`, `docs/Development.md`, `docs/Deployment.md`, stilski vodiči i područje `sources` određuju kako znanje treba da bude organizovano, validirano i objavljeno.

Tu repozitorijum postaje više od zbirke datoteka. Postaje platforma znanja sa:

- arhitekturom dokumentacije
- pravilima uredničkih dokaza
- višejezičnom izdavačkom strukturom
- pravilima objave javne dokumentacije
- razvojnim i validacionim smernicama

To je upravo vrsta okvira koja pomaže da isporuka uz pomoć AI-ja ostane sledljiva.

## Sloj dema

Statični demo je važan, ali namerno nije jedina autoriteta. Pravila za blog i izvore već razlikuju kanoničnu dokumentaciju od statusa implementacije.

To znači da demo može proveravati tokove rada, otkrivati probleme upotrebljivosti i pomagati u objašnjavanju spoljnim akterima, a da pritom sam od sebe ne postane konačna proizvodna istina.

To je zrelo pravilo. Bez njega prototipi često postanu slučajni mehanizmi upravljanja. Tim počne da kopira prototip zato što postoji, a ne zato što odražava odobrenu proizvodnu odluku.

## Sloj provere

Let Books već dokumentuje i način razmišljanja o proveri.

`docs/Development.md` i `docs/Deployment.md` opisuju validacione slojeve kao što su:

- dimni testovi lokalizacije
- validacija strukturiranih datoteka
- generisanje metapodataka
- provera obaveznih datoteka
- opciona provera pravopisa i linting
- automatizacija objave

To nisu samo detalji o alatima. To je dokaz da projekat kvalitet tretira kao ponovljiv sistem.

## Zašto je to važno za AI-podržanu isporuku

Ako AI pomoćnik doprinosi Let Booksu, ne mora da izmišlja proizvod od početka. Repozitorijum već sadrži lanac namere:

1. proizvodni smer u `AGENTS.md`
2. taktička pravila isporuke u `AGENTS-Implementation.md`
3. trenutno stanje u `README.md`
4. pravila znanja i objave u `docs/`
5. status izvršivog prototipa u statičnom demou
6. smernice za validaciju i objavu u razvojnoj i implementacionoj dokumentaciji

Taj lanac ne uklanja greške. Ali ih čini lakšim za otkrivanje i pregled.

## Glavna lekcija

Razvoj vođen specifikacijom ne znači samo napisati dugačak dokument sa zahtevima pre početka kodiranja.

U praksi znači izgraditi pouzdan lanac između:

- proizvodne namere
- taktičkih pravila
- javne dokumentacije
- dema
- validacije
- objave

Let Books već pokazuje da takav lanac može postojati i pre pune pozadinske aplikacije.

To je jedan od najjačih argumenata za razvoj vođen specifikacijom u AI-podržanom radu: što je lanac namere jasniji, manja je verovatnoća da će se brz izlaz pretvoriti u brzu zbrku.

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
