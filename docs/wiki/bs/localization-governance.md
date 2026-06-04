---
title: "Upravljanje lokalizacijom"
summary: >-
  Upravljanje lokalizacijom definira ko može predložiti, pregledati, odobriti i osporiti promjene višejezičnog sadržaja.
topics:
  - governance
  - localization
  - terminology
---
# Upravljanje lokalizacijom

## Rezime

Upravljanje lokalizacijom definira ko može predložiti, pregledati, odobriti i osporiti promjene višejezičnog sadržaja.

## Područja upravljanja

- izvorno vlasništvo
- uloge održavaoca jezika
- terminološka odobrenja
- rješavanje sporova
- praćenje stanja pregleda
- praćenje primjera iz recenzija koji se mogu ponovo koristiti
- svježina artefakata pregleda
- obaveze dokumentovanja alata

## Zašto je važno

Bez upravljanja, višejezični sadržaj varira u tonu, terminologiji i očekivanjima kvaliteta.

Upravljanje pregledom bi također trebalo definirati kako se primjeri korekcije uz pomoć AI pohranjuju i ponovo koriste u obuci, tablicama rezultata i evaluaciji.

## Svježina artefakata pregleda

Upravljanje treba zahtijevati da recenzenti razlikuju:

- izvorni Markdown
- generisani HTML
- objavljeni izlaz stranice
- izlaz prikazan u pregledniku

Prije potvrde pariteta, recenzenti trebaju potvrditi da su generisani artefakti koje pregledaju ponovo generisani iz trenutnog stanja repozitorija.

## Upravljanje alatima

Nove generatore, renderere, transformatore, validatore, revizijske alate i druge alate za obradu sadržaja treba tretirati kao upravljačke artefakte, a ne samo kao detalje implementacije.

Nisu potpuni dok:

- njihova svrha i ograničenja nisu dokumentovani
- njihova neočigledna pravila i heuristike nisu objašnjeni
- relevantna dokumentacija toka rada i validacije nije ažurirana
- održavaoci ne mogu tumačiti upozorenja, neuspjehe i slijepe tačke bez rekonstruisanja namjere samo iz koda

## Povezane stranice

- `translation-memory-and-glossaries.md`
- `localization-maturity-model.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/review-workflow.md`
