---
title: "Upravljanje lokalizacijom"
summary: >-
  Upravljanje lokalizacijom definira tko može predložiti, pregledati, odobriti i osporavati izmjene višejezičnog sadržaja.
topics:
  - governance
  - localization
  - terminology
---
# Upravljanje lokalizacijom

## Sažetak

Upravljanje lokalizacijom definira tko može predložiti, pregledati, odobriti i osporavati izmjene višejezičnog sadržaja.

## Područja upravljanja

- izvorno vlasništvo
- uloge održavatelja jezika
- terminološka odobrenja
- rješavanje sporova
- praćenje stanja pregleda
- praćenje primjera iz pregleda koji se mogu ponovno koristiti
- svježina artefakata pregleda
- obveze dokumentiranja alata

## Zašto je to važno

Bez upravljanja višejezični sadržaj mijenja se u tonu, terminologiji i očekivanjima kvalitete.

Upravljanje pregledom također treba definirati kako se primjeri ispravljanja potpomognuti AI pohranjuju i ponovno koriste u obuci, tablicama rezultata i radu na evaluaciji.

## Svježina artefakata pregleda

Upravljanje treba zahtijevati da recenzenti razlikuju:

- izvorni Markdown
- generirani HTML
- objavljeni izlaz stranice
- u pregledniku prikazani izlaz

Prije potvrde pariteta, recenzenti trebaju potvrditi da su generirani artefakti koje pregledavaju ponovno generirani iz trenutačnog stanja repozitorija.

## Upravljanje alatima

Nove generatore, renderere, transformere, validatore, revizijske alate i druge alate za obradu sadržaja treba tretirati kao artefakte upravljanja, a ne samo kao detalje implementacije.

Nisu potpuni dok:

- njihova svrha i ograničenja nisu dokumentirani
- njihova neočita pravila i heuristike nisu objašnjeni
- relevantna dokumentacija o tijeku rada i validaciji nije ažurirana
- održavatelji ne mogu tumačiti upozorenja, neuspjehe i slijepe točke bez rekonstruiranja namjere samo iz koda

## Povezane stranice

- `translation-memory-and-glossaries.md`
- `localization-maturity-model.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/review-workflow.md`
