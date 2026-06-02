---
title: "Plasti za preverjanje veljavnosti"
summary: >-
  Validacijski sloji so različni načini, na katere projekt preverja, ali artefakti implementacije, dokumentacije in dostave še vedno ustrezajo predvidenim pravilom in pričakovanjem kakovosti.
topics:
  - validation
  - ci-cd
  - product-quality
---
# Plasti za preverjanje veljavnosti

## Povzetek

Validacijski sloji so različni načini, na katere projekt preverja, ali artefakti implementacije, dokumentacije in dostave še vedno ustrezajo predvidenim pravilom in pričakovanjem kakovosti.

## Zakaj so plasti pomembne

Nobena ena metoda potrjevanja ni dovolj.

- samo dokumentacija ne uveljavlja vedenja
- sami testi lahko potrdijo napačne predpostavke
- CI sama ne more določiti pravil, ki naj bi jih uveljavljala

Večplastni pristop je močnejši, ker vsak sloj ujame drugačen razred zanašanja.

## Skupne plasti preverjanja veljavnosti

### 1. Specifikacija in navodila

Prva plast določa pravilo.

Brez tega sloja so kasnejša preverjanja lahko stroga, a poljubna.

### 2. Ročni pregled

Človeški pregled preveri namero, robne primere in pomen izdelka, ki morda še ni avtomatiziran.

### 3. Lokalno preverjanje

Skripti in strukturirana preverjanja hitro odkrijejo ponovljive težave, preden spremembe dosežejo CI.

### 4. Testi

Izvedljivi testi preverijo pričakovano vedenje, vendar le, če so usklajeni s specifikacijo.

### 5. CI vrata

CI naredi preverjanja ponovljiva in vidna med sodelavci in okolji.

### 6. Preverjanja uvajanja

Delovni tokovi uvajanja potrjujejo, da je zgrajene artefakte še vedno mogoče objaviti in so strukturno trdni.

## Kako naj se plasti povezujejo

Plasti naj se medsebojno krepijo v naslednjem vrstnem redu:

- dokumenti in specifikacije določajo pričakovanja
- pregled razlaga ta pričakovanja v kontekstu
- validacijski skripti in testi avtomatizirajo stabilne dele pregleda
- CI te preglede izvaja dosledno
- uvedba zagotavlja, da se izhod lahko dejansko pošlje

## Dobri zgodnji cilji validacije

Primeri močnih zgodnjih kandidatov vključujejo:

- zahtevana prisotnost datoteke
- popolnost lokalizacije
- veljavnost sintakse
- nedelujoče notranje povezave
- prepovedano uredniško citiranje
- uspešnost ustvarjanja metapodatkov

Ti pregledi so ponavadi objektivni in poceni.

## Let Books kontekst

Repozitorij Let Books že dokumentira več plasti, vključno z:

- pravila o izdelkih in izvajanju v `AGENTS.md` in `AGENTS-Implementation.md`
- validacija razvoja in uvajanja v `docs/Development.md` in `docs/Deployment.md`
- pravila o uredniških dokazih v `docs/blog/README.md` in `docs/sources/README.md`
- učne smernice za postopno uvedbo CI in validacije

Zaradi tega veljavnost postane dokumentiran sistem in ne le prihodnost.

## Sorodne strani

- `documentation-traceability.md`
- `implementation-guidance.md`
- `../../learning/sl/how-to-add-validation-rules-and-ci-gates-in-stages.md`
- `../../blog/sl/documentation-is-part-of-the-product.md`