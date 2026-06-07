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
title: Razvoj na podlagi specifikacij v Let Books
summary: Kako Let Books že uporablja specifikacije, implementacijska navodila, dokumentacijo, omejitve dema in pravila preverjanja kot sistem razvoja na podlagi specifikacij.
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
  - ../../sources/sl/spec-driven-development-in-let-books.md
status: draft
---

# Razvoj na podlagi specifikacij v Let Books

Let Books je uporaben študijski primer razvoja na podlagi specifikacij, ker repozitorij že vsebuje več plasti produktnega namena, ne le implementacijskih gradnikov.

Projekt še ni polna gostovana aplikacija. Trenutno vključuje produktno specifikacijo, implementacijska navodila, javno dokumentacijo in statični lokalni demo. Zaradi tega je dober primer, kako lahko projekt ostane usklajen, še preden obstaja končni produkcijski sklad.

## Plast specifikacije

`AGENTS.md` je jedrna produktna specifikacija. Določa namen projekta, domeni model, delovne tokove, faze obsega, lokalizacijsko smer, pravila zasebnosti, neobveznost AI in merila sprejema.

To je pomembno, ker odgovarja na vprašanja, na katera sama koda ne more jasno odgovoriti:

- zakaj produkt obstaja
- kateri delovni tokovi so prvovrstni
- kaj mora delovati brez AI
- katere funkcije so prihodnje ideje in ne sedanje zaveze
- kaj šteje kot uspešen prvi demo

To je razlika med opisom projekta in pravo specifikacijo. Prava specifikacija omejuje izbire implementacije.

## Plast taktičnih navodil

`AGENTS-Implementation.md` doda drugo plast. Ne nadomešča produktne specifikacije. Pojasnjuje, kako naj se delo v tem repozitoriju trenutno izvaja.

Primeri vključujejo:

- pravila javnega poimenovanja
- pravila implementacije dokumentacije
- pričakovanja glede metapodatkov statičnega mesta
- omejitve dema
- pričakovanja glede lokalizacije in preverjanja
- uredniško dokazno politiko za javno pisanje

To je pomembno pri AI-podprtem delu, ker vsako pravilo ne spada v dolgoročno produktno specifikacijo. Nekatera pravila so taktična, uredniška ali specifična za repozitorij. Če to razliko ohranimo jasno, zmanjšamo šum in preprečimo, da bi se produktna specifikacija spremenila v odlagališče implementacijskih podrobnosti.

## Plast trenutnega stanja

`README.md` predstavlja tretjo plast: opis trenutnega stanja.

Pojasni, kaj danes obstaja, česa še ni, čemu je namenjen statični demo in kako je objavljena javna stran. To je ključen del usklajevanja, saj projekti pogosto propadejo, ko bralci zamenjajo ambicijo z implementacijo.

V Let Books README izrecno ločuje med trenutnimi dostavljivimi rezultati in prihodnjimi načrti. To sodelavcem, institucijam in pregledovalcem pomaga razumeti zrelost projekta brez ugibanja.

## Plast dokumentacije

Območje `docs/` doda četrto plast. `docs/README.md`, `docs/Development.md`, `docs/Deployment.md` ter slogovni vodniki in območje `sources` določajo, kako naj bo znanje organizirano, validirano in objavljeno.

Tu repozitorij postane več kot le zbirka kode. Postane platforma znanja z:

- arhitekturo dokumentacije
- pravili uredniških dokazov
- večjezično založniško strukturo
- pravili objavljanja javne dokumentacije
- razvojnimi in validacijskimi navodili

To je natanko tista vrsta ogrodja, ki pomaga, da AI-podprta dostava ostane sledljiva.

## Plast dema

Statični demo je pomemben, vendar namerno ni edina avtoriteta v repozitoriju.

Pravila javne dokumentacije in bloga že ločujejo med kanoničnim dokumentacijskim dokazom in stanjem implementacije. To pomeni, da lahko demo potrjuje delovne tokove, razkriva UX-težave in pomaga zunanjim občinstvom razumeti produkt, hkrati pa ostaja podrejen dokumentiranemu produktnemu namenu, dokler se dokumentacija ne posodobi.

To je zrelo pravilo. Brez njega prototipi pogosto postanejo naključni mehanizmi upravljanja. Ekipa začne kopirati prototip zato, ker obstaja, ne pa zato, ker odraža odobreno produktno odločitev.

## Plast preverjanja

Let Books že dokumentira tudi miselnost preverjanja.

`docs/Development.md` in `docs/Deployment.md` opisujeta validacijske plasti, kot so:

- dimni testi lokalizacije
- validacija strukturiranih datotek
- generiranje metapodatkov
- preverjanje obveznih datotek
- neobvezni črkovalniki in linting
- avtomatizacija objave

To niso le podrobnosti o orodjih. So dokaz, da projekt kakovost obravnava kot ponovljiv sistem namesto kot ročno navado po najboljših močeh.

## Zakaj je to pomembno za AI-podprto dostavo

Če k Let Books prispeva AI pomočnik, mu izdelka ni treba izumiti od začetka. Repozitorij že vsebuje verigo namena:

1. produktna smer v `AGENTS.md`
2. taktična pravila dostave v `AGENTS-Implementation.md`
3. trenutno stanje v `README.md`
4. pravila znanja in objavljanja v `docs/`
5. stanje izvedljivega prototipa v statičnem demu
6. navodila za validacijo in objavo v razvojni in namestitveni dokumentaciji

Ta veriga napak ne odpravi. Jih pa naredi lažje zaznavne in lažje pregledljive.

## Glavna lekcija

Razvoj na podlagi specifikacij ne pomeni le tega, da pred začetkom kodiranja napišemo dolg dokument z zahtevami.

V praksi pomeni, da zgradimo zanesljivo verigo med:

- produktnim namenom
- taktičnimi pravili
- javno dokumentacijo
- demonstracijami
- validacijo
- objavo

Let Books že kaže, da taka veriga lahko obstaja še preden obstaja celoten zaledni produkt.

To je eden najmočnejših argumentov za razvoj na podlagi specifikacij pri AI-podprtem delu: bolj ko je veriga namena jasna, manj verjetno je, da se bo hiter izhod spremenil v hitro zmedo.

## Drugi jeziki

- [Slovenščina](../sl/spec-driven-development-in-let-books.md)
- [English](../sl/spec-driven-development-in-let-books.md)
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
