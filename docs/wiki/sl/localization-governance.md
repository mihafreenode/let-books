---
title: "Upravljanje lokalizacije"
summary: >-
  Upravljanje lokalizacije določa, kdo lahko predlaga, pregleda, odobri in izpodbija večjezične spremembe vsebine.
topics:
  - governance
  - localization
  - terminology
---
# Upravljanje lokalizacije

## Povzetek

Upravljanje lokalizacije določa, kdo lahko predlaga, pregleda, odobri in izpodbija večjezične spremembe vsebine.

## Področja upravljanja

- lastništvo vira
- vloge vzdrževalcev jezika
- terminološke odobritve
- reševanje sporov
- spremljanje stanja pregleda
- ponovno uporabno sledenje pregledov-primerov
- svežina revizijskih artefaktov
- obveznosti dokumentiranja orodij

## Zakaj je pomembno

Brez upravljanja se večjezična vsebina spreminja v tonu, terminologiji in pričakovanjih glede kakovosti.

Upravljanje pregleda bi moralo tudi opredeliti, kako se primeri popravljanja s pomočjo AI shranjujejo in ponovno uporabljajo pri izobraževanju, kartah rezultatov in ocenjevanju.

## Svežina revizijskih artefaktov

Upravljanje mora od pregledovalcev zahtevati, da razlikujejo med:

- izvornim Markdownom
- generiranim HTML
- objavljenim izhodom spletnega mesta
- v brskalniku izrisanim izhodom

Pred potrditvijo paritete morajo pregledovalci potrditi, da so bili pregledovani generirani artefakti ponovno ustvarjeni iz trenutnega stanja repozitorija.

## Upravljanje orodij

Novi generatorji, izrisovalniki, pretvorniki, validatorji, revizijska orodja in druga orodja za obdelavo vsebine morajo biti obravnavani kot upravljavski artefakti, ne le kot podrobnosti implementacije.

Niso popolni, dokler:

- njihov namen in omejitve niso dokumentirani
- njihova neočitna pravila in hevristike niso pojasnjeni
- ustrezna dokumentacija delovnih tokov in validacije ni posodobljena
- vzdrževalci ne morejo razlagati opozoril, napak in slepih peg brez rekonstruiranja namena zgolj iz kode

## Sorodne strani

- `translation-memory-and-glossaries.md`
- `localization-maturity-model.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/review-workflow.md`
