---
title: "Upravljanje lokalizacijom"
summary: >-
  Upravljanje lokalizacijom definiše ko može predlagati, pregledati, odobravati i osporavati višejezične promjene sadržaja.
topics:
  - governance
  - localization
  - terminology
---
# Upravljanje lokalizacijom

## Rezime

Upravljanje lokalizacijom definiše ko može predlagati, pregledati, odobravati i osporavati višejezične promjene sadržaja.

## Područja upravljanja

- vlasništvo nad izvorom
- uloge jezičkih održavalaca
- odobrenja terminologije
- rješavanje sporova
- praćenje stanja pregleda
- praćenje primjera pregleda za ponovnu upotrebu
- svježina artefakata pregleda
- obaveze dokumentovanja alata
- kvalitet pregleda na maternjem jeziku

## Zašto je važno

Bez upravljanja višejezični sadržaj odluta u tonu, terminologiji i očekivanjima kvaliteta.

Upravljanje pregledom takođe treba definisati kako se primjeri korekcija uz pomoć AI-ja čuvaju i ponovo koriste u obuci, tablicama rezultata i evaluacijskom radu.

## Svježina artefakata pregleda

Upravljanje treba zahtijevati da recenzenti razlikuju:

- izvorni Markdown
- generisani HTML
- izlaz objavljenog web-mjesta
- izlaz renderovan u pregledniku

Prije potvrde pariteta recenzenti treba da potvrde da su pregledani generisani artefakti ponovo generisani iz trenutnog stanja repozitorija.

## Upravljanje alatima

Nove generatore, renderere, transformatore, validatore, audit alate i druge alate za obradu sadržaja treba tretirati kao artefakte upravljanja, a ne samo kao implementacijske detalje.

Oni nisu potpuni dok:

- njihova svrha i ograničenja nisu dokumentovani
- njihova neočigledna pravila i heuristike nisu objašnjeni
- relevantna dokumentacija o toku rada i validaciji nije ažurirana
- održavaoci ne mogu tumačiti upozorenja, greške i slijepe tačke bez rekonstruisanja namjere samo iz koda

## Kvalitet pregleda na maternjem jeziku

Upravljanje lokalizacijom treba zahtijevati pregled ne samo zbog tačnosti nego i zbog prirodnog izražavanja na maternjem jeziku.

Standard je da lokalizirani dokument treba zvučati kao da je izvorno napisan na ciljnom jeziku.

To znači da recenzenti sljedeće treba da tretiraju kao nalaze kvaliteta:

- doslovnu englesku rečeničnu strukturu
- direktan prevod engleskih idioma
- upravljački ili korporativni jezik koji zvuči prevedeno
- terminologiju koja nepotrebno zadržava izvornu formulaciju

Upravljanje treba taj pregled takođe da prioritetno primijeni na:

- novokreirani sadržaj
- nedavno prošireni sadržaj
- sadržaj koji se trenutno uređuje

Stariji lokalizirani sadržaj zatim treba unapređivati postepeno tokom vremena, a ne jednim cjelovitim prepisivanjem cijelog repozitorija.

## Povezane stranice

- `translation-memory-and-glossaries.md`
- `localization-maturity-model.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/review-workflow.md`
