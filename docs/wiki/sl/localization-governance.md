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
- vloge skrbnikov jezika
- odobritve terminologije
- reševanje sporov
- sledenje stanju pregleda
- sledenje primerom pregledov za ponovno uporabo
- svežina preglednih artefaktov
- obveznosti dokumentiranja orodij
- kakovost pregleda v maternem jeziku

## Zakaj je pomembno

Brez upravljanja večjezična vsebina odstopa v tonu, terminologiji in pričakovanjih glede kakovosti.

Upravljanje pregledov mora določati tudi, kako se primeri popravkov s pomočjo AI shranjujejo in ponovno uporabljajo pri usposabljanju, preglednicah rezultatov in vrednotenju.

## Svežina preglednih artefaktov

Upravljanje mora od pregledovalcev zahtevati, da razlikujejo med:

- izvornim Markdownom
- generiranim HTML-jem
- izhodom objavljenega spletišča
- v brskalniku izrisanim izhodom

Pred potrditvijo paritete morajo pregledovalci potrditi, da so bili pregledani generirani artefakti znova ustvarjeni iz trenutnega stanja repozitorija.

## Upravljanje orodij

Nove generatorje, izrisovalnike, pretvornike, validatorje, revizijska orodja in druga orodja za obdelavo vsebine je treba obravnavati kot artefakte upravljanja, ne le kot podrobnosti izvedbe.

Niso dokončani, dokler:

- njihov namen in omejitve niso dokumentirani
- njihova neočitna pravila in hevristike niso pojasnjeni
- ustrezna dokumentacija potekov dela in preverjanja ni posodobljena
- skrbniki ne morejo razlagati opozoril, napak in slepih točk, ne da bi namero rekonstruirali samo iz kode

## Kakovost pregleda v maternem jeziku

Upravljanje lokalizacije mora zahtevati pregled ne le zaradi pravilnosti, temveč tudi zaradi naravnega izražanja v maternem jeziku.

Merilo je, da se mora lokaliziran dokument brati tako, kot da bi bil prvotno napisan v ciljnem jeziku.

To pomeni, da morajo pregledovalci naslednje obravnavati kot ugotovitve kakovosti:

- dobesedna angleška stavčna zgradba
- neposredni prevodi angleških idiomov
- jezik upravljanja ali korporativni jezik, ki zveni prevedeno
- terminologija, ki po nepotrebnem ohranja izvorno formulacijo

Upravljanje mora ta pregled najprej dati v prednost tudi za:

- novo ustvarjeno vsebino
- nedavno razširjeno vsebino
- vsebino, ki se trenutno ureja

Starejšo lokalizirano vsebino je treba nato sčasoma izboljševati postopno, ne pa z enim samim prepisom celotnega repozitorija.

## Sorodne strani

- `translation-memory-and-glossaries.md`
- `localization-maturity-model.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/review-workflow.md`
