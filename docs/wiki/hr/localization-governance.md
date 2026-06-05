---
title: "Upravljanje lokalizacijom"
summary: >-
  Upravljanje lokalizacijom definira tko može predlagati, pregledavati, odobravati i osporavati višejezične promjene sadržaja.
topics:
  - governance
  - localization
  - terminology
---
# Upravljanje lokalizacijom

## Sažetak

Upravljanje lokalizacijom definira tko može predlagati, pregledavati, odobravati i osporavati višejezične promjene sadržaja.

## Područja upravljanja

- vlasništvo nad izvorom
- uloge jezičnih održavatelja
- odobrenja terminologije
- rješavanje sporova
- praćenje stanja pregleda
- praćenje primjera pregleda za ponovnu uporabu
- svježina artefakata pregleda
- obveze dokumentiranja alata
- kvaliteta pregleda na materinskom jeziku

## Zašto je to važno

Bez upravljanja višejezični sadržaj odluta u tonu, terminologiji i očekivanjima kvalitete.

Upravljanje pregledom također bi trebalo definirati kako se primjeri korekcija uz pomoć AI-ja pohranjuju i ponovno koriste u obuci, tablicama rezultata i evaluacijskom radu.

## Svježina artefakata pregleda

Upravljanje bi trebalo zahtijevati da recenzenti razlikuju:

- izvorni Markdown
- generirani HTML
- izlaz objavljenog web-mjesta
- izlaz renderiran u pregledniku

Prije potvrde pariteta recenzenti bi trebali potvrditi da su pregledani generirani artefakti ponovno generirani iz trenutačnog stanja repozitorija.

## Upravljanje alatima

Nove generatore, renderere, transformatore, validatore, auditne alate i druge alate za obradu sadržaja treba tretirati kao artefakte upravljanja, a ne samo kao detalje implementacije.

Oni nisu potpuni dok:

- njihova svrha i ograničenja nisu dokumentirani
- njihova neočita pravila i heuristike nisu objašnjene
- relevantna dokumentacija o tijeku rada i validaciji nije ažurirana
- održavatelji ne mogu tumačiti upozorenja, pogreške i slijepe točke bez rekonstruiranja namjere samo iz koda

## Kvaliteta pregleda na materinskom jeziku

Upravljanje lokalizacijom trebalo bi zahtijevati pregled ne samo zbog točnosti nego i zbog prirodnog izražavanja na materinskom jeziku.

Standard je da lokalizirani dokument treba zvučati kao da je izvorno napisan na ciljnom jeziku.

To znači da bi recenzenti sljedeće trebali tretirati kao nalaze kvalitete:

- doslovnu englesku rečeničnu strukturu
- izravan prijevod engleskih idioma
- upravljački ili korporativni jezik koji zvuči prevedeno
- terminologiju koja nepotrebno zadržava izvorni izraz

Upravljanje bi taj pregled također trebalo dati kao prioritet za:

- novostvoreni sadržaj
- nedavno prošireni sadržaj
- sadržaj koji se trenutačno uređuje

Stariji lokalizirani sadržaj zatim bi trebalo poboljšavati postupno kroz vrijeme, a ne jednim cjelovitim prepisivanjem cijelog repozitorija.

## Povezane stranice

- `translation-memory-and-glossaries.md`
- `localization-maturity-model.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/review-workflow.md`
