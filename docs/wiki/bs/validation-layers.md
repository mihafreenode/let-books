---
title: "Slojevi provjere"
summary: >-
  Slojevi provjere su različiti načini na koje projekat provjerava da li implementacija, dokumentacija i artefakti isporuke i dalje odgovaraju predviđenim pravilima i očekivanjima kvaliteta.
topics:
  - validation
  - ci-cd
  - product-quality
---
# Slojevi provjere

## Sažetak

Slojevi provjere su različiti načini na koje projekat provjerava da li implementacija, dokumentacija i artefakti isporuke i dalje odgovaraju predviđenim pravilima i očekivanjima kvaliteta.

## Zašto su slojevi važni

Nijedna pojedinačna metoda provjere nije dovoljna.

- dokumentacija sama po sebi ne sprovodi ponašanje
- sami testovi mogu potvrditi pogrešne pretpostavke
- CI sama ne može definisati pravila koja bi trebalo da sprovodi

Slojeviti pristup je jači jer svaki sloj hvata različitu klasu odstupanja.

## Uobičajeni slojevi provjere

### 1. Specifikacija i smjernice

Prvi sloj definira pravilo.

Bez ovog sloja, kasnije provjere mogu biti stroge, ali proizvoljne.

### 2. Ručni pregled

Ljudski pregled provjerava namjeru, rubne slučajeve i značenje proizvoda koji možda još nisu automatizirani.

### 3. Lokalna validacija

Skripte i strukturirane provjere hvataju brze, ponovljive probleme prije nego promjene dođu do CI.

### 4. Testovi

Izvršni testovi potvrđuju očekivano ponašanje, ali samo kada su usklađeni sa specifikacijom.

### 5. CI kapije

CI čini provjere ponovljivim i vidljivim među suradnicima i okruženjima.

### 6. Provjere implementacije

Tokovi rada implementacije potvrđuju da se izgrađeni artefakti i dalje mogu objaviti i da su strukturno zdravi.

## Kako bi slojevi trebali biti povezani

Slojevi bi trebali jačati jedan drugi ovim redoslijedom:

- dokumenti i specifikacije definiraju očekivanja
- pregled tumači ta očekivanja u kontekstu
- validacijske skripte i testovi automatiziraju stabilne dijelove pregleda
- CI dosljedno izvodi te provjere
- implementacija osigurava da se izlaz zaista može isporučiti

## Dobri ciljevi rane validacije

Primjeri jakih ranih kandidata uključuju:

- prisustvo obavezne datoteke
- potpunost lokalizacije
- validnost sintakse
- prekinute interne veze
- zabranjeno uredničko citiranje
- uspjeh generiranja metapodataka

Ove provjere su obično objektivne i jeftine.

## Let Books kontekst

Repozitorijum Let Books već dokumentuje nekoliko slojeva, uključujući:

- pravila o proizvodima i implementaciji u `AGENTS.md` i `AGENTS-Implementation.md`
- validacija razvoja i implementacije u `docs/Development.md` i `docs/Deployment.md`
- pravila uredničkog dokaza u `docs/blog/README.md` i `docs/sources/README.md`
- smjernice za učenje za fazni CI i uvođenje validacije

To provjeru čini dokumentovanim sistemom, a ne samo budućom željom.

## Povezane stranice

- `documentation-traceability.md`
- `implementation-guidance.md`
- `../../learning/bs/how-to-add-validation-rules-and-ci-gates-in-stages.md`
- `../../blog/bs/documentation-is-part-of-the-product.md`
