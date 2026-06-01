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

Let Books je uporaben študijski primer razvoja na podlagi specifikacij, ker repozitorij že vsebuje več plasti produktnega namena, ne le implementacijskih artefaktov.

Projekt še ni polna gostovana aplikacija. Trenutno vključuje produktno specifikacijo, implementacijska navodila, javno dokumentacijo in lokalni statični demo. Zaradi tega je dober primer, kako lahko projekt ostane usklajen, še preden obstaja končni produkcijski sklad.

## Plast specifikacije

`AGENTS.md` je jedrna produktna specifikacija. Določa namen projekta, domeno, delovne tokove, meje obsega, lokalizacijsko smer, zasebnost, neobveznost AI in merila sprejema.

Odgovarja na vprašanja, kot so:

- zakaj projekt obstaja
- kateri delovni tokovi so prvovrstni
- kaj mora delovati brez AI
- kaj so prihodnje ideje in ne sedanje zaveze
- kaj šteje kot uspešen prvi demo

To je razlika med splošnim opisom in pravo specifikacijo. Prava specifikacija omejuje izbire implementacije.

## Plast taktičnih navodil

`AGENTS-Implementation.md` doda drugo plast. Ne nadomešča produktne specifikacije, ampak pojasnjuje, kako naj se delo v tem repozitoriju trenutno izvaja.

Sem sodijo pravila o javnem poimenovanju, dokumentaciji, statičnem mestu, lokalizaciji, preverjanju in dokazni politiki za javno pisanje. To je pomembno, ker niso vsa pravila produktne resnice. Nekatera so taktična, uredniška ali repozitorijsko specifična.

## Plast trenutnega stanja

`README.md` predstavlja tretjo plast: pošten opis trenutnega stanja.

Pojasni, kaj danes obstaja, česa še ni, čemu je namenjen statični demo in kako je javna stran objavljena. To pomaga, da sodelavci, institucije in pregledovalci ne zamenjujejo ambicije z implementacijo.

## Plast dokumentacije

`docs/` doda četrto plast. `docs/README.md`, `docs/Development.md`, `docs/Deployment.md` in slogovni vodniki določajo, kako naj bo znanje organizirano, objavljeno in preverjeno.

Tu repozitorij postane več kot le zbirka datotek. Postane platforma znanja s:

- arhitekturo dokumentacije
- pravili uredniških dokazov
- večjezično založniško strukturo
- pravili objave in preverjanja

## Plast dema

Statični demo je pomemben, vendar namerno ni edina avtoriteta. Pravila za bloge in vire že ločujejo med kanonično dokumentacijo in stanjem implementacije.

To pomeni, da lahko demo preverja delovne tokove, razkriva težave uporabnosti in pomaga pri razlagi zunanjim deležnikom, ne da bi sam od sebe postal dokončna produktna resnica.

## Plast preverjanja

Let Books že dokumentira tudi miselnost preverjanja. `docs/Development.md` in `docs/Deployment.md` opisujeta dimne teste lokalizacije, validacijo strukturiranih datotek, generiranje metapodatkov, zahtevane datoteke, črkovalne preglede in avtomatizirano objavo.

To niso le podrobnosti o orodjih. So dokaz, da projekt kakovost obravnava kot ponovljiv sistem.

## Glavna lekcija

Razvoj na podlagi specifikacij ne pomeni le tega, da pred kodiranjem napišemo dolg dokument. V praksi pomeni, da zgradimo zanesljivo verigo med produktnim namenom, taktičnimi pravili, javno dokumentacijo, demom, preverjanjem in objavo.

Let Books pokaže, da takšna veriga lahko obstaja še preden obstaja celotna zaledna aplikacija. Prav to je ena najmočnejših prednosti razvoja na podlagi specifikacij v AI-podprtem delu.

## Drugi jeziki

- [English](../en/spec-driven-development-in-let-books.md)
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
