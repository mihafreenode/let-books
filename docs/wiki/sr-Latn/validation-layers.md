---
title: "Slojevi za validaciju"
summary: >-
  Slojevi validacije su različiti načini na koje projekat proverava da li se implementacija, dokumentacija i artefakti isporuke i dalje podudaraju sa predviđenim pravilima i očekivanjima kvaliteta.
topics:
  - validation
  - ci-cd
  - product-quality
---
# Slojevi za validaciju

## Rezime

Slojevi validacije su različiti načini na koje projekat proverava da li se implementacija, dokumentacija i artefakti isporuke i dalje podudaraju sa predviđenim pravilima i očekivanjima kvaliteta.

## Zašto su slojevi važni

Nijedan metod validacije nije dovoljan.

- dokumentacija sama po sebi ne sprovodi ponašanje
- sami testovi mogu potvrditi pogrešne pretpostavke
- CI sama ne može da definiše pravila koja bi trebalo da sprovodi

Slojeviti pristup je jači jer svaki sloj hvata različitu klasu odstupanja.

## Uobičajeni slojevi validacije

### 1. Specifikacija i uputstva

Prvi sloj definiše pravilo.

Bez ovog sloja, kasnije provere mogu biti stroge, ali proizvoljne.

### 2. Ručni pregled

Ljudski pregled proverava nameru, ivice slučajeva i značenje proizvoda koji možda još nisu automatizovani.

### 3. Lokalna validacija

Skripte i strukturirane provere otkrivaju brze, ponovljive probleme pre nego što promene stignu do CI.

### 4. Testovi

Izvršni testovi potvrđuju očekivano ponašanje, ali samo kada su usklađeni sa specifikacijom.

### 5. CI kapije

CI čini provere ponovljivim i vidljivim među saradnicima i okruženjima.

### 6. Provere primene

Radni tokovi primene potvrđuju da su izgrađeni artefakti i dalje objavljeni i da su strukturalno zdravi.

## Kako slojevi treba da se odnose

Slojevi bi trebalo da ojačavaju jedan drugog po redosledu:

- dokumenti i specifikacije definišu očekivanja
- pregled tumači ta očekivanja u kontekstu
- validacijske skripte i testovi automatizuju stabilne delove pregleda
- CI dosledno sprovodi te provere
- implementacija osigurava da se izlaz zaista može isporučiti

## Dobri ciljevi rane validacije

Primeri jakih ranih kandidata uključuju:

- prisustvo obavezne datoteke
- potpunost lokalizacije
- validnost sintakse
- prekinute interne veze
- zabranjeno uredničko citiranje
- uspeh generisanja metapodataka

Ove provere su obično objektivne i jeftine.

## Let Books kontekst

Repozitorijum Let Books već dokumentuje nekoliko slojeva, uključujući:

- pravila proizvoda i implementacije u `AGENTS.md` i `AGENTS-Implementation.md`
- validacija razvoja i primene u `docs/Development.md` i `docs/Deployment.md`
- pravila uredničkog dokaza u `docs/blog/README.md` i `docs/sources/README.md`
- uputstvo za učenje za postepeni CI i uvođenje validacije

To čini validaciju dokumentovanim sistemom, a ne samo budućom težnjom.

## Povezane stranice

- `documentation-traceability.md`
- `implementation-guidance.md`
- `../../learning/sr-Latn/how-to-add-validation-rules-and-ci-gates-in-stages.md`
- `../../blog/sr-Latn/documentation-is-part-of-the-product.md`