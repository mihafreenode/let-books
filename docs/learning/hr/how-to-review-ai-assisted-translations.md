---
title: "Kako pregledavati prijevode uz pomoć AI-ja"
summary: >-
  Ovaj vodič objašnjava kako pregledavati prijevode koje je generirao AI s obzirom na značenje, terminologiju, pristupačnost, ton i potreban ljudski pregled.
topics:
  - ai-assisted-translation
  - translation-quality
  - governance
---
# Kako pregledavati prijevode uz pomoć AI-ja

## Sažetak

Ovaj vodič objašnjava kako pregledavati prijevode koje je generirao AI s obzirom na značenje, terminologiju, pristupačnost, ton i potreban ljudski pregled.

## Kontrolni popis pregleda

- prvo provjeri značenje, a tek zatim stil
- provjeri terminologiju prema projektnom glosaru
- osjetljivu formulaciju pregledaj posebno pažljivo
- potvrdi da je lokaliziran i tekst pristupačnosti
- pošteno označi razinu zrelosti pregleda

## Slovenska studija slučaja

### Izvorni AI nacrt

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

### Ispravljena slovenska verzija

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

## Povratne informacije ljudskog pregleda

### Problem 1

- izvorno: `morajo moči`
- ispravljeno: `morajo imeti možnost, da`
- kategorije: gramatika, modalnost
- vjerojatan uzrok AI pogreške: doslovan prijevod engleske modalne konstrukcije
- obrazloženje recenzenta: izvorna formulacija je negramatična na slovenskom; ispravljena verzija koristi prirodnu konstrukciju za pravilnički ili policy tekst.

### Problem 2

- izvorno: `po potrebi tudi izklopiti`
- ispravljeno: `da po potrebi izklopijo`
- kategorije: tečnost, red riječi
- vjerojatan uzrok AI pogreške: neprirodan red riječi iz izvornog jezika i slaba kontrola diskursa
- obrazloženje recenzenta: ispravljeni red jasniji je i uklanja nepotreban naglasak.

### Problem 3

- izvorno: `morajo biti izrecne`
- ispravljeno: `morajo biti izrecno omogočene`
- kategorije: terminologija, registar, formulacija domenskih pravila
- vjerojatan uzrok AI pogreške: rječnička riječ odabrana bez dovoljno konteksta proizvoda ili politike
- obrazloženje recenzenta: zahtjev se odnosi na izričito omogućavanje plaćenih obogaćivanja, a ne na opis obogaćivanja kao "izričitih".

## Uobičajene kategorije problema

- gramatika
- modalnost
- terminologija
- registar
- tečnost
- doslovan prijevod
- dvosmislenost
- gubitak konteksta
- red riječi
- kolokacije
- pismo ili pravopis
- formulacija domenskih pravila
- tekst pristupačnosti

## Smjernice za bodovanje

Za ponovljive preglede koristi jednostavnu ljestvicu 0-3.

- `0`: neprihvatljivo
- `1`: veliki problemi
- `2`: upotrebljivo uz uredničke ispravke
- `3`: snažno ili gotovo spremno za objavu

Preporučene dimenzije ocjenjivanja:

- točnost značenja
- gramatika i tečnost
- terminologija i domenska usklađenost
- registar i stil
- potreban recenzentski napor

## Smjernice za preporuku objave

- `blocker`: nije prikladno za objavu ili izlaganje korisnicima
- `major_revision`: značenje može biti približno točno, ali i dalje je potrebno znatno preoblikovanje
- `minor_revision`: upotrebljiv nacrt uz ciljane ispravke izvornog govornika
- `ready_with_review_signoff`: prikladno nakon uobičajenog odobrenja recenzenta

## Ne dokumentiraj samo ispravak nego i razlog

Za ponovno upotrebljiv pregled zabilježi:

- izvorni tekst
- ispravljeni tekst
- kategoriju pogreške
- hipotezu o uzroku pogreške
- obrazloženje recenzenta

## Ponovno upotrebljive pouke iz slovenskog pregleda

- gramatičko značenje može biti približno točno, a rečenica i dalje neobjavljiva izvornom govorniku
- modalne konstrukcije posebno su osjetljive na doslovan prijevod
- terminologija i policy formulacija često trebaju domenski prilagođeno preoblikovanje
- automatizirani QA pomaže, ali rijetko je dovoljan za suptilne probleme registra

## Localization-at-Scale napomena

Čak i kada je opće značenje očuvano, prijevodi generirani pomoću AI-ja mogu zahtijevati pregled izvornog govornika kako bi se ispravili suptilni problemi u gramatici, modalnosti, terminologiji i domenski specifičnom registru. Takve je probleme često teško pouzdano otkriti samo automatiziranim metrikama kvalitete.

## Gdje ponovno koristiti ovakve primjere

- materijali za obuku lokalizacijskih recenzenata
- skupovi podataka za evaluaciju AI prevođenja
- primjeri u stilskom vodiču
- dokumentacija ljudskog pregleda u petlji
- članci o lokalizaciji u velikom opsegu i vodiči dobre prakse

Takvi primjeri pomažu recenzentima kalibrirati očekivanja i voditeljima lokalizacije daju realističan referentni materijal.

## Povezane stranice

- `../wiki/ai-assisted-translation-policy.md`
- `../wiki/translation-quality-assurance.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../blog/en/ai-will-not-replace-translators.md`
