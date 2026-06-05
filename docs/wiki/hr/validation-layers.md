---
title: "Slojevi provjere"
summary: >-
  Slojevi provjere različiti su načini na koje projekt provjerava odgovaraju li implementacija, dokumentacija i artefakti isporuke i dalje predviđenim pravilima i očekivanjima kvalitete.
topics:
  - validation
  - ci-cd
  - product-quality
---
# Slojevi provjere

## Sažetak

Slojevi provjere različiti su načini na koje projekt provjerava odgovaraju li implementacija, dokumentacija i artefakti isporuke i dalje predviđenim pravilima i očekivanjima kvalitete.

## Zašto su slojevi važni

Nijedna pojedinačna metoda provjere nije dovoljna.

- sama dokumentacija ne nameće ponašanje
- sami testovi mogu potvrditi pogrešne pretpostavke
- CI sama ne može definirati pravila koja bi trebala provoditi

Slojeviti pristup je jači jer svaki sloj hvata različitu klasu zanošenja.

## Uobičajeni slojevi provjere

### 1. Specifikacija i smjernice

Prvi sloj definira pravilo.

Bez ovog sloja, kasnije provjere mogu biti stroge, ali proizvoljne.

### 2. Ručni pregled

Ljudski pregled provjerava namjeru, rubne slučajeve i značenje proizvoda koji možda još nisu automatizirani.

### 3. Lokalna provjera valjanosti

Skripte i strukturirane provjere hvataju brze probleme koji se ponavljaju prije nego promjene dođu do CI-ja.

### 4. Testovi

Izvršni testovi provjeravaju očekivano ponašanje, ali samo ako su usklađeni sa specifikacijom.

### 5. CI vrata

CI čini provjere ponovljivim i vidljivim svim suradnicima i okruženjima.

### 6. Provjere implementacije

Radni tijekovi implementacije potvrđuju da se izgrađeni artefakti još uvijek mogu objaviti i da su strukturno zdravi.

## Kako bi se slojevi trebali odnositi

Slojevi bi trebali ojačati jedan drugog redom:

- dokumenti i specifikacije definiraju očekivanja
- pregled tumači ta očekivanja u kontekstu
- validacijske skripte i testovi automatiziraju stabilne dijelove pregleda
- CI dosljedno provodi te provjere
- implementacija osigurava da se rezultat zapravo može poslati

## Dobri ciljevi rane provjere valjanosti

Primjeri jakih ranih kandidata uključuju:

- potrebna prisutnost datoteke
- cjelovitost lokalizacije
- valjanost sintakse
- neispravne interne veze
- zabranjeni urednički citati
- uspješnost generiranja metapodataka

Ove provjere obično su objektivne i jeftine.

## Let Books kontekst

Repozitorij Let Books već dokumentira nekoliko slojeva, uključujući:

- pravila o proizvodu i implementaciji u `AGENTS.md` i `AGENTS-Implementation.md`
- validacija razvoja i implementacije u `docs/Development.md` i `docs/Deployment.md`
- pravila uredničkog dokaza u `docs/blog/README.md` i `docs/sources/README.md`
- smjernice za učenje za postupno uvođenje CI i validacije

To provjeru čini dokumentiranim sustavom, a ne samo željom za budućnost.

## Povezane stranice

- `documentation-traceability.md`
- `implementation-guidance.md`
- `../../learning/hr/how-to-add-validation-rules-and-ci-gates-in-stages.md`
- `../../blog/hr/documentation-is-part-of-the-product.md`
