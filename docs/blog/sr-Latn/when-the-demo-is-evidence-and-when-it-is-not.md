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
summary: Kako koristiti demo i prototipe kao korisne dokaze implementacije, a da oni tiho ne postanu proizvodna specifikacija.
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
  - ../../sources/sr-Latn/when-the-demo-is-evidence-and-when-it-is-not.md
status: draft
---

# Kada je demo dokaz, a kada nije

Demo je snažan zato što apstraktne ideje pretvara u nešto na šta ljudi mogu da reaguju. Tok rada koji se u belešci čini razumnim može na telefonu ili u skladištu odmah pokazati stvarno trenje.

To je dobra strana dema.

Opasna je ta što ljudi, kada prototip jednom postoji, njegovo ponašanje često počnu da tretiraju kao proizvodnu istinu, čak i ako niko tu odluku nije formalno potvrdio.

## Zašto prototipi postaju slučajni autoritet

Vidljive stvari su ubedljive. Ekran koji radi često dobije više neformalnog autoriteta od zapisanog pravila, čak i kada je taj ekran nastao kao eksperiment.

To je razumljivo. Ljudi veruju onome što mogu da vide.

Ali u produktnom radu, naročito u radu uz podršku AI-ja, taj instinkt može da stvori zabunu.

Demo može prikazivati:

- brz način testiranja toka
- privremeni kompromis
- pojednostavljenu lokalnu implementaciju
- nedovršenu interpretaciju nameravanog proizvoda

Ništa od toga samo po sebi ne znači da demo treba da redefiniše proizvod.

## Kada je demo dobar dokaz

Demo je vredan dokaz kada pomaže da se odgovori na pitanja kao što su:

- da li je tok upotrebljiv
- da li mobilni raspored podržava stvaran zadatak
- da li je tok skeniranja ili unosa razumljiv
- reaguju li korisnici pozitivno ili negativno na redosled koraka

U tim slučajevima demo je dokaz o upotrebljivosti, izvodljivosti, redosledu koraka i komunikaciji.

Takva vrsta dokaza je izuzetno korisna.

## Kada demo nije autoritet

Demo ne bi smeo tiho da nadjača proizvodnu specifikaciju.

Nije pravi primarni autoritet za pitanja poput:

- da li je ovaj tok zvanično u obimu
- da li je to privremena prečica ili proizvodna obaveza
- poništava li to ponašanje postojeće pravilo
- da li javna dokumentacija to treba da opiše kao ciljni sistem

Na takva pitanja mora odgovoriti izričita odluka i ažuriranje dokumentacije.

## Pravilo Let Books je dobar model

Repozitorijum već sadrži zdravo uredničko pravilo za to. Javno pisanje treba da tretira specifikacije i dokumentaciju kao kanoničan dokaz, dok se demo ili ponašanje aplikacije može pominjati kao status implementacije.

To je pravilo važno zato što sprečava slučajno upravljanje prototipom.

Ako statični demo otkrije bolji tok za kutije, bolji mobilni tok ili bolju interakciju pri unosu, to je vredno. Ali takav bolji tok postaje pravi autoritet tek nakon ažuriranja specifikacije i povezane dokumentacije.

## Zašto je to još važnije sa AI-jem

AI pojačava ono što se u trenutnom kontekstu čini najkonkretnijim.

Ako je najkonkretnija stvar u repozitorijumu demo, pomoćnici pa čak i ljudski saradnici mogu početi da kopiraju njegovo ponašanje bez pitanja da li ono odgovara zamišljenoj granici proizvoda.

To može biti korisno kada je demo već usklađen.
Može takođe brzo da proširi privremene pretpostavke kada nije.

Zato timovi trebaju vidljiv red autoriteta.

## Praktičan lanac autoriteta

Za ovakav rad koristan je sledeći redosled:

1. proizvodna specifikacija
2. implementaciona uputstva
3. dokumentacija trenutnog stanja
4. demo ili prototip
5. testovi i validacija

Demo je i dalje važan. Samo je važan unutar dokumentovanog sistema, umesto da ga zameni.

## Šta uraditi kada vas demo nauči nečemu novom

Ponekad je prototip u pravu, a specifikacija je pogrešna, nepotpuna ili previše apstraktna.

To nije neuspeh. Upravo je to jedan od razloga zašto se demo gradi.

Pravi odgovor je:

1. zabeležiti otkriće
2. odlučiti da li novo ponašanje treba da postane namerno
3. ažurirati specifikaciju i dokumentaciju
4. zatim ubuduće očuvati usklađenost

Pogrešan odgovor je ostaviti dokumentaciju nepromenjenom i nadati se da će svi zapamtiti da je demo sada stvarni izvor istine.

## Zašto bi to trebalo da zanima institucije i studente

Institucije moraju znati da li procenjuju koncept, prototip ili odobren model radnog toka.

Studenti moraju naučiti da se prototipi ne opravdavaju sami od sebe. Dobra softverska praksa uključuje razumevanje kada implementaciju treba tretirati kao dokaz, a kada kao eksperiment koji još čeka odluku.

## Trajna lekcija

Demo je vredan jer čini proizvodne ideje proverljivim. Opasan postaje kada tiho postane politika.

Najzdraviji model je jednostavan: neka demo informiše proizvod, a neka specifikacije i dokumentacija zabeleže konačnu odluku.

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
