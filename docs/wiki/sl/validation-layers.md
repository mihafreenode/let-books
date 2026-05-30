---
title: "Plasti validacije"
topics:
  - validation
  - ci-cd
  - product-quality
---
# Plasti validacije

## Povzetek

Plasti validacije so različni načini, s katerimi projekt preverja, ali se implementacija, dokumentacija in dostavni artefakti še vedno ujemajo z nameravanimi pravili in pričakovanji glede kakovosti.

## Zakaj so plasti pomembne

Nobena posamezna metoda validacije ni dovolj.

- sama dokumentacija ne uveljavlja vedenja
- sami testi lahko validirajo napačne predpostavke
- sam CI ne more določiti pravil, ki naj bi jih uveljavljal

Večplastni pristop je močnejši, ker vsaka plast zazna drugačen razred odstopanj.

## Pogoste plasti validacije

### 1. Specifikacija in navodila

Prva plast določi pravilo.

### 2. Ročni pregled

Človeški pregled preveri namen, robne primere in produktni pomen, ki še niso avtomatizirani.

### 3. Lokalna validacija

Skripte in strukturirana preverjanja hitro ujamejo ponovljive težave, preden spremembe dosežejo CI.

### 4. Testi

Izvedljivi testi preverjajo pričakovano vedenje, vendar le, če so usklajeni s specifikacijo.

### 5. CI zapore

CI naredi preverjanja ponovljiva in vidna med prispevajočimi ter okolji.

### 6. Preverjanja ob dostavi

Poteki dostave potrjujejo, da so zgrajeni artefakti še vedno objavljivi in strukturno smiselni.

## Kontekst Let Books

Repozitorij Let Books že dokumentira več plasti, vključno z:

- produktnimi in implementacijskimi pravili v `AGENTS.md` in `AGENTS-Implementation.md`
- razvojnimi in dostavnimi preverjanji v `docs/Development.md` in `docs/Deployment.md`
- uredniškimi pravili dokazov v `docs/blog/README.md` in `docs/sources/README.md`
