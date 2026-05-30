---
article_id: when-the-demo-is-evidence-and-when-it-is-not
canonical_language: hr
language_variants:
  - ../en/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sl/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../hr/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../bs/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sr-Latn/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sr-Cyrl/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../mk/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sq/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../de/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../it/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../fr/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../es/when-the-demo-is-evidence-and-when-it-is-not.md
title: Kada je demo dokaz, a kada nije
summary: Kako koristiti demo i prototipe kao korisne dokaze implementacije, a da ne postanu tiho proizvodna specifikacija.
topics:
  - demo-alignment
  - spec-driven-development
  - product-review
  - documentation
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/blog/README.md
  - docs/sources/README.md
  - docs/style-guide/publishing/README.md
  - docs/style-guide/writing/README.md
  - docs/Development.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/hr/when-the-demo-is-evidence-and-when-it-is-not.md
status: draft
---

# Kada je demo dokaz, a kada nije

Demo je snažan zato što apstraktne ideje pretvara u nešto na što ljudi mogu reagirati. Tijek rada koji se u bilješci čini razumnim može na telefonu ili u skladištu odmah pokazati stvarno trenje.

To je dobra strana demoa. Opasna je ta što ljudi, kad prototip jednom postoji, njegovo ponašanje često počnu tretirati kao proizvodnu istinu.

## Zašto prototipi postaju slučajna autoriteta

Vidljive stvari su uvjerljive. Zaslon koji radi često dobije više neformalne autoritete od zapisanog pravila, čak i kada je nastao samo kao eksperiment.

Demo može prikazivati:

- brz način testiranja toka
- privremeni kompromis
- pojednostavljenu lokalnu implementaciju
- nedovršenu interpretaciju namjeravanog proizvoda

Ništa od toga samo po sebi ne znači da demo treba redefinirati proizvod.

## Kada je demo dobar dokaz

Demo je koristan kada pomaže odgovoriti na pitanja kao što su:

- je li tok upotrebljiv
- podržava li mobilni raspored stvaran zadatak
- je li tok skeniranja razumljiv
- kako korisnici reagiraju na redoslijed koraka

Tada je demo dokaz o upotrebljivosti, izvedivosti i komunikaciji.

## Kada demo nije autoritet

Demo ne bi smio tiho nadjačati proizvodnu specifikaciju. Nije glavni odgovor na pitanja poput:

- je li ovaj tok službeno u opsegu
- je li to privremena prečica ili proizvodna obveza
- poništava li to ponašanje postojeće pravilo
- treba li ga javna dokumentacija opisati kao ciljni sustav

Na takva pitanja mora odgovoriti izričita odluka i ažuriranje dokumentacije.

## Pravilo Let Books je dobar model

Repozitorij već definira zdravo pravilo: javno pisanje treba koristiti specifikacije i dokumentaciju kao kanonični dokaz, a demo ili ponašanje aplikacije može se spominjati kao status implementacije.

To sprječava da prototip slučajno postane način upravljanja proizvodom.

## Zašto je to još važnije s AI-jem

AI pojačava ono što je trenutačno najkonkretnije. Ako je najkonkretniji artefakt demo, pomoćnici i ljudi brzo će kopirati njegovo ponašanje bez pitanja odgovara li ono proizvodnim granicama.

Zato timovi trebaju vidljiv red autoriteta:

1. proizvodna specifikacija
2. implementacijske smjernice
3. dokumentacija trenutačnog stanja
4. demo ili prototip
5. testovi i validacija

## Trajna lekcija

Demo je vrijedan jer čini proizvodne ideje provjerljivima. Opasan postaje kada tiho postane politika. Zdrav model je jednostavan: neka demo informira proizvod, ali neka specifikacije i dokumentacija zabilježe konačnu odluku.

## Drugi jezici

- [English](../en/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Slovenščina](../sl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Bosanski](../bs/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Srpski (latinica)](../sr-Latn/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Српски (ћирилица)](../sr-Cyrl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Македонски](../mk/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Shqip](../sq/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Deutsch](../de/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Italiano](../it/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Français](../fr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Español](../es/when-the-demo-is-evidence-and-when-it-is-not.md)
