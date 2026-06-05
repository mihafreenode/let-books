---
title: "Upravljanje lokalizacijom"
summary: >-
  Upravljanje lokalizacijom definiše ko može da predlaže, pregleda, odobrava i osporava višejezične promene sadržaja.
topics:
  - governance
  - localization
  - terminology
---
# Upravljanje lokalizacijom

## Rezime

Upravljanje lokalizacijom definiše ko može da predlaže, pregleda, odobrava i osporava višejezične promene sadržaja.

## Oblasti upravljanja

- vlasništvo nad izvorom
- uloge jezičkih održavalaca
- odobrenja terminologije
- rešavanje sporova
- praćenje stanja pregleda
- praćenje primera pregleda za ponovnu upotrebu
- svežina artefakata pregleda
- obaveze dokumentovanja alata
- kvalitet pregleda na maternjem jeziku

## Zašto je važno

Bez upravljanja višejezični sadržaj odluta u tonu, terminologiji i očekivanjima kvaliteta.

Upravljanje pregledom takođe treba da definiše kako se primeri korekcija uz pomoć AI-ja čuvaju i ponovo koriste u obuci, karticama rezultata i evaluacionom radu.

## Svežina artefakata pregleda

Upravljanje treba da zahteva da recenzenti razlikuju:

- izvorni Markdown
- generisani HTML
- izlaz objavljenog sajta
- izlaz renderovan u pregledaču

Pre potvrde pariteta recenzenti treba da potvrde da su pregledani generisani artefakti ponovo generisani iz trenutnog stanja repozitorijuma.

## Upravljanje alatima

Nove generatore, rendere, transformatore, validatore, audit alate i druge alate za obradu sadržaja treba tretirati kao artefakte upravljanja, a ne samo kao detalje implementacije.

Nisu potpuni dok:

- njihova svrha i ograničenja nisu dokumentovani
- njihova neočigledna pravila i heuristike nisu objašnjeni
- relevantna dokumentacija o toku rada i validaciji nije ažurirana
- održavaoci ne mogu da tumače upozorenja, greške i slepe tačke bez rekonstruisanja namere samo iz koda

## Kvalitet pregleda na maternjem jeziku

Upravljanje lokalizacijom treba da zahteva pregled ne samo zbog tačnosti, već i zbog prirodnog izražavanja na maternjem jeziku.

Standard je da lokalizovani dokument treba da zvuči kao da je izvorno napisan na ciljnom jeziku.

To znači da recenzenti sledeće treba da tretiraju kao nalaze kvaliteta:

- doslovnu englesku rečeničnu strukturu
- direktan prevod engleskih idioma
- upravljački ili korporativni jezik koji zvuči prevedeno
- terminologiju koja nepotrebno zadržava izvornu formulaciju

Upravljanje treba ovaj pregled takođe da postavi kao prioritet za:

- novokreirani sadržaj
- nedavno prošireni sadržaj
- sadržaj koji se trenutno uređuje

Stariji lokalizovani sadržaj zatim treba unapređivati postepeno tokom vremena, a ne jednim celim prepisivanjem čitavog repozitorijuma.

## Povezane stranice

- `translation-memory-and-glossaries.md`
- `localization-maturity-model.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/review-workflow.md`
