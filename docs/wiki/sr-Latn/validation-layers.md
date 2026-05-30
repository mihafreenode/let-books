---
title: "Slojevi validacije"
topics:
  - validation
  - ci-cd
  - product-quality
---
# Slojevi validacije

## Sažetak

Slojevi validacije su različiti načini na koje projekat proverava da li se implementacija, dokumentacija i artefakti isporuke i dalje podudaraju sa nameravanim pravilima i očekivanjima kvaliteta.

## Zašto su slojevi važni

Nijedan pojedinačni metod validacije nije dovoljan.

- sama dokumentacija ne sprovodi ponašanje
- sami testovi mogu da validiraju pogrešne pretpostavke
- sam CI ne može da definiše pravila koja bi trebalo da sprovodi

Slojeviti pristup je jači jer svaki sloj hvata drugačiju vrstu odstupanja.

## Uobičajeni slojevi validacije

### 1. Specifikacija i uputstva

Prvi sloj definiše pravilo.

### 2. Ručni pregled

Ljudski pregled proverava nameru, rubne slučajeve i značenje proizvoda koje još nije automatizovano.

### 3. Lokalna validacija

Skripte i strukturirane provere brzo hvataju ponovljive probleme pre nego što promene stignu do CI-ja.

### 4. Testovi

Izvršni testovi proveravaju očekivano ponašanje, ali samo kada su usklađeni sa specifikacijom.

### 5. CI kapije

CI čini provere ponovljivim i vidljivim među saradnicima i okruženjima.

### 6. Provere isporuke

Tokovi isporuke potvrđuju da su izgrađeni artefakti i dalje spremni za objavu i strukturno ispravni.

## Kontekst Let Books

Repozitorijum Let Books već dokumentuje više slojeva, uključujući:

- proizvodna i implementaciona pravila u `AGENTS.md` i `AGENTS-Implementation.md`
- razvojne i isporučne provere u `docs/Development.md` i `docs/Deployment.md`
- urednička pravila dokaza u `docs/blog/README.md` i `docs/sources/README.md`
