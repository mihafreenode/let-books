---
article_id: when-the-demo-is-evidence-and-when-it-is-not
canonical_language: en
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

To je dobra strana demoa.

Opasna je ta što ljudi, kad prototip jednom postoji, njegovo ponašanje često počnu tretirati kao proizvodnu istinu, čak i ako nitko tu odluku nije formalno potvrdio.

## Zašto prototipi postaju slučajna autoriteta

Vidljive stvari su uvjerljive. Zaslon koji radi često dobije više neformalnog autoriteta od zapisanog pravila, čak i kada je taj zaslon nastao kao eksperiment.

To je razumljivo. Ljudi vjeruju onome što mogu vidjeti.

Ali u proizvodnom radu, osobito u radu uz pomoć AI-ja, taj instinkt može stvoriti zabunu.

Demo može prikazivati:

- brz način testiranja toka
- privremeni kompromis
- pojednostavljenu lokalnu implementaciju
- nedovršenu interpretaciju namjeravanog proizvoda

Ništa od toga samo po sebi ne znači da demo treba redefinirati proizvod.

## Kada je demo dobar dokaz

Demo je vrijedan dokaz kada pomaže odgovoriti na pitanja kao što su:

- je li tok upotrebljiv
- podržava li mobilni raspored stvaran zadatak
- je li tok skeniranja ili unosa razumljiv
- reagiraju li korisnici pozitivno ili negativno na redoslijed koraka

U tim slučajevima demo je dokaz o upotrebljivosti, izvedivosti, redoslijedu koraka i komunikaciji.

Takva je vrsta dokaza iznimno korisna.

## Kada demo nije autoritet

Demo ne bi smio tiho nadjačati proizvodnu specifikaciju.

Nije pravi primarni autoritet za pitanja poput:

- je li ovaj tok službeno u opsegu
- je li to privremena prečica ili proizvodna obveza
- poništava li to ponašanje postojeće pravilo
- treba li ga javna dokumentacija opisati kao ciljni sustav

Na takva pitanja mora odgovoriti izričita odluka i ažuriranje dokumentacije.

## Pravilo Let Books je dobar model

Repozitorij već sadrži zdravo uredničko pravilo za to. Javno pisanje treba tretirati specifikacije i dokumentaciju kao kanonični dokaz, dok se demo ili ponašanje aplikacije može spominjati kao status implementacije.

To je pravilo važno zato što sprječava slučajno upravljanje prototipom.

Ako statični demo otkrije bolji tok za kutije, bolji mobilni tok ili bolju interakciju pri unosu, to je vrijedno. Ali takav bolji tok postaje pravi autoritet tek nakon ažuriranja specifikacije i povezane dokumentacije.

## Zašto je to još važnije s AI-jem

AI pojačava ono što se u trenutačnom kontekstu čini najkonkretnijim.

Ako je najkonkretnija stvar u repozitoriju demo, pomoćnici pa čak i ljudski suradnici mogu početi kopirati njegovo ponašanje bez pitanja odgovara li ono zamišljenoj granici proizvoda.

To može biti korisno kada je demo već usklađen.
Može također brzo proširiti privremene pretpostavke kada nije.

Zato timovi trebaju vidljiv red autoriteta.

## Praktičan lanac autoriteta

Za ovakav rad koristan je sljedeći redoslijed:

1. proizvodna specifikacija
2. implementacijske smjernice
3. dokumentacija trenutačnog stanja
4. demo ili prototip
5. testovi i validacija

Demo je i dalje važan. Samo je važan unutar dokumentiranog sustava, umjesto da ga zamijeni.

## Što učiniti kada vas demo nauči nečemu novom

Ponekad je prototip u pravu, a specifikacija je pogrešna, nepotpuna ili previše apstraktna.

To nije neuspjeh. Upravo je to jedan od razloga zašto se demo gradi.

Pravi odgovor je:

1. zabilježiti otkriće
2. odlučiti treba li novo ponašanje postati namjerno
3. ažurirati specifikaciju i dokumentaciju
4. zatim ubuduće očuvati usklađenost

Pogrešan odgovor je ostaviti dokumentaciju nepromijenjenom i nadati se da će svi zapamtiti da je demo sada stvarni izvor istine.

## Zašto bi to trebalo zanimati institucije i studente

Institucije moraju znati procjenjuju li koncept, prototip ili odobreni model radnog toka.

Studenti moraju naučiti da se prototipi ne opravdavaju sami od sebe. Dobra softverska praksa uključuje razumijevanje kada implementaciju treba tretirati kao dokaz, a kada kao eksperiment koji još čeka odluku.

## Trajna lekcija

Demo je vrijedan jer čini proizvodne ideje provjerljivima. Opasan postaje kada tiho postane politika.

Najzdraviji model je jednostavan: neka demo informira proizvod, a neka specifikacije i dokumentacija zabilježe konačnu odluku.

## Drugi jezici

- [Slovenščina](../sl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Hrvatski](../hr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Bosanski](../bs/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Srpski (latinica)](../sr-Latn/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Српски (ћирилица)](../sr-Cyrl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Македонски](../mk/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Shqip](../sq/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Deutsch](../de/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Italiano](../it/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Français](../fr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Español](../es/when-the-demo-is-evidence-and-when-it-is-not.md)
