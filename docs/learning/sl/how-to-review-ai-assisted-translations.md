---
title: "Kako pregledovati AI-podprte prevode"
summary: >-
  Ta vodič pojasni, kako pregledovati prevode, ki jih ustvari AI, z vidika pomena, terminologije, dostopnosti, tona in potrebnega človeškega pregleda.
topics:
  - ai-assisted-translation
  - translation-quality
  - governance
---
# Kako pregledovati AI-podprte prevode

## Povzetek

Ta vodič pojasni, kako pregledovati prevode, ki jih ustvari AI, z vidika pomena, terminologije, dostopnosti, tona in potrebnega človeškega pregleda.

## Kontrolni seznam pregleda

- najprej preveri pomen, šele nato slog
- preveri terminologijo glede na projektni glosar
- občutljivo formulacijo preglej posebej skrbno
- potrdi, da je lokalizirano tudi besedilo za dostopnost
- pošteno označi stopnjo zrelosti pregleda

## Slovenska študija primera pregleda

### Izvorni AI-osnutek

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

### Popravljen slovenski prevod

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

## Povratne informacije človeškega pregleda

### Težava 1

- izvirnik: `morajo moči`
- popravljeno: `morajo imeti možnost, da`
- kategorije: slovnica, modalnost
- verjeten vzrok napake AI: dobeseden prevod angleške modalne konstrukcije
- utemeljitev pregledovalca: izvorna formulacija je v slovenščini neslovnična; popravljena različica uporablja naravno formulacijo za pravilnik oziroma politiko.

### Težava 2

- izvirnik: `po potrebi tudi izklopiti`
- popravljeno: `da po potrebi izklopijo`
- kategorije: tekočnost, besedni red
- verjeten vzrok napake AI: neroden besedni red iz izvornega jezika in šibko obvladovanje konteksta
- utemeljitev pregledovalca: popravljeni vrstni red je jasnejši in odstrani nepotreben poudarek.

### Težava 3

- izvirnik: `morajo biti izrecne`
- popravljeno: `morajo biti izrecno omogočene`
- kategorije: terminologija, register, formulacija domenskih pravil
- verjeten vzrok napake AI: slovarska izbira brez dovolj konteksta produkta ali politike
- utemeljitev pregledovalca: zahteva se nanaša na izrecno omogočanje plačljivih obogatitev, ne na opis, da so obogatitve same po sebi "izrecne".

## Pogoste kategorije težav

- slovnica
- modalnost
- terminologija
- register
- tekočnost
- dobesedni prevod
- dvoumnost
- izguba konteksta
- besedni red
- kolokacije
- pisava ali pravopis
- formulacija domenskih pravil
- besedilo za dostopnost

## Smernice za ocenjevanje

Za ponovljive preglede uporabi preprosto lestvico 0-3.

- `0`: nesprejemljivo
- `1`: večje težave
- `2`: uporabno po uredniških popravkih
- `3`: močno ali skoraj pripravljeno za objavo

Priporočene dimenzije ocenjevanja:

- natančnost pomena
- slovnica in tekočnost
- terminologija in domenska ustreznost
- register in slog
- potrebni pregledovalni napor

## Smernice za priporočilo izdaje

- `blocker`: ni primerno za objavo ali izpostavitev uporabnikom
- `major_revision`: pomen je lahko približno pravilen, vendar je še vedno potrebno večje preoblikovanje
- `minor_revision`: uporaben osnutek s ciljanimi popravki naravnega govorca
- `ready_with_review_signoff`: primerno po običajni potrditvi pregledovalca

## Ne dokumentiraj samo popravka, temveč tudi razlog

Za ponovno uporabno pregledovalno delo zabeleži:

- izvorno besedilo
- popravljeno besedilo
- kategorijo napake
- hipotezo o vzroku napake
- utemeljitev pregledovalca

## Ponovno uporabne lekcije iz slovenskega pregleda

Vzorec slovenske študije primera je široko ponovno uporaben tudi v drugih jezikih:

- slovnični pomen je lahko približno pravilen, pa stavek še vedno ni objavljiv za naravnega govorca
- modalne konstrukcije so posebej občutljive na dobesedni prevod
- terminologija in pravilniška formulacija pogosto potrebujeta domensko preoblikovanje
- avtomatiziran QA pomaga, vendar redko zadošča za subtilne težave registra

## Opomba Localization-at-Scale

Tudi kadar je splošni pomen ohranjen, AI-generirani prevodi pogosto zahtevajo pregled naravnega govorca, da popravi subtilne težave v slovnici, modalnosti, terminologiji in domensko specifičnem registru. Takšne težave je pogosto težko zanesljivo zaznati samo z avtomatiziranimi merili kakovosti.

## Kje znova uporabiti takšne primere

- gradiva za usposabljanje pregledovalcev lokalizacije
- podatkovni nabori za vrednotenje AI-prevajanja
- primeri v slogovnem priročniku
- dokumentacija poteka dela s človekom v zanki
- članki o lokalizaciji v velikem obsegu in vodiči dobrih praks

Takšni primeri pomagajo pregledovalcem umeriti pričakovanja in vodjem lokalizacije dajejo realističen primerjalni material.

## Povezane strani

- `../wiki/ai-assisted-translation-policy.md`
- `../wiki/translation-quality-assurance.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../blog/en/ai-will-not-replace-translators.md`
