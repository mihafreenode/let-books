---
title: "Slojevi Validacije"
topics:
  - validation
  - ci-cd
  - product-quality
---
# Slojevi Validacije

## Sažetak

Slojevi validacije različiti su načini na koje projekt provjerava podudaraju li se implementacija, dokumentacija i artefakti isporuke i dalje s namjeravanim pravilima i očekivanjima kvalitete.

## Zašto su slojevi važni

Nijedna pojedinačna metoda validacije nije dovoljna.

- sama dokumentacija ne provodi ponašanje
- sami testovi mogu validirati pogrešne pretpostavke
- sam CI ne može definirati pravila koja bi trebao provoditi

Slojeviti pristup je jači jer svaki sloj hvata drukčiju vrstu odstupanja.

## Uobičajeni slojevi validacije

### 1. Specifikacija i smjernice

Prvi sloj definira pravilo.

### 2. Ručni pregled

Ljudski pregled provjerava namjeru, rubne slučajeve i značenje proizvoda koje još nije automatizirano.

### 3. Lokalna validacija

Skripte i strukturirane provjere brzo hvataju ponovljive probleme prije nego što promjene dođu do CI-ja.

### 4. Testovi

Izvršni testovi provjeravaju očekivano ponašanje, ali samo kada su usklađeni sa specifikacijom.

### 5. CI zapreke

CI čini provjere ponovljivima i vidljivima među suradnicima i okruženjima.

### 6. Provjere isporuke

Tijekovi isporuke potvrđuju da su izgrađeni artefakti i dalje spremni za objavu i strukturno ispravni.

## Kontekst Let Books

Repozitorij Let Books već dokumentira više slojeva, uključujući:

- proizvodna i implementacijska pravila u `AGENTS.md` i `AGENTS-Implementation.md`
- razvojne i isporučne provjere u `docs/Development.md` i `docs/Deployment.md`
- urednička pravila dokaza u `docs/blog/README.md` i `docs/sources/README.md`
