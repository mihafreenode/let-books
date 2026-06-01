---
title: "Kako pregledati AI-potpomognute prevode"
summary: >-
  Ovaj vodič objašnjava kako pregledati prevode koje je generisao AI s obzirom na značenje, terminologiju, pristupačnost, ton i potreban ljudski pregled.
topics:
  - ai-assisted-translation
  - translation-quality
  - governance
---
# Kako pregledati AI-potpomognute prevode

## Sažetak

Ovaj vodič objašnjava kako pregledati prevode koje je generisao AI s obzirom na značenje, terminologiju, pristupačnost, ton i potreban ljudski pregled.

## Kontrolna lista pregleda

- prvo provjeri značenje, a tek zatim stil
- provjeri terminologiju prema projektnom glosaru
- osjetljivu formulaciju pregledaj posebno pažljivo
- potvrdi da je lokalizovan i tekst pristupačnosti
- pošteno označi stepen zrelosti pregleda

## Slovenska studija slučaja pregleda

### Izvorni AI nacrt

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

### Ispravljena slovenska verzija

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

## Povratne informacije ljudskog pregleda

### Problem 1

- izvorno: `morajo moči`
- ispravljeno: `morajo imeti možnost, da`
- kategorije: gramatika, modalnost
- vjerovatan uzrok AI greške: doslovan prevod engleske modalne konstrukcije
- obrazloženje recenzenta: izvorna formulacija je negramatična na slovenskom; ispravljena verzija koristi prirodnu konstrukciju za pravilnik ili policy tekst.

### Problem 2

- izvorno: `po potrebi tudi izklopiti`
- ispravljeno: `da po potrebi izklopijo`
- kategorije: tečnost, red riječi
- vjerovatan uzrok AI greške: neprirodan red riječi iz izvornog jezika i slaba kontrola diskursa
- obrazloženje recenzenta: ispravljeni red je jasniji i uklanja nepotreban naglasak.

### Problem 3

- izvorno: `morajo biti izrecne`
- ispravljeno: `morajo biti izrecno omogočene`
- kategorije: terminologija, registar, formulacija domenskih pravila
- vjerovatan uzrok AI greške: rječnička riječ izabrana bez dovoljno konteksta proizvoda ili politike
- obrazloženje recenzenta: zahtjev se odnosi na izričito omogućavanje plaćenih obogaćivanja, a ne na opis da su obogaćivanja sama po sebi "izrecna".

## Uobičajene kategorije problema

- gramatika
- modalnost
- terminologija
- registar
- tečnost
- doslovan prevod
- dvosmislenost
- gubitak konteksta
- red riječi
- kolokacije
- pismo ili pravopis
- formulacija domenskih pravila
- tekst pristupačnosti

## Smjernice za ocjenjivanje

Za ponovljive preglede koristi jednostavnu skalu 0-3.

- `0`: neprihvatljivo
- `1`: veliki problemi
- `2`: upotrebljivo uz uredničke ispravke
- `3`: snažno ili skoro spremno za objavu

Preporučene dimenzije ocjenjivanja:

- tačnost značenja
- gramatika i tečnost
- terminologija i domenska usklađenost
- registar i stil
- potreban recenzentski napor

## Smjernice za preporuku objave

- `blocker`: nije prikladno za objavu ili izlaganje korisnicima
- `major_revision`: značenje može biti približno tačno, ali je i dalje potrebno veće preoblikovanje
- `minor_revision`: upotrebljiv nacrt uz ciljane ispravke izvornog govornika
- `ready_with_review_signoff`: prikladno nakon uobičajenog odobrenja recenzenta

## Ne dokumentuj samo ispravku nego i razlog

Za ponovno upotrebljiv pregled zabilježi:

- izvorni tekst
- ispravljeni tekst
- kategoriju greške
- hipotezu o uzroku greške
- obrazloženje recenzenta

## Ponovno upotrebljive lekcije iz slovenskog pregleda

- gramatičko značenje može biti približno tačno, a rečenica i dalje neobjavljiva izvornom govorniku
- modalne konstrukcije posebno su osjetljive na doslovan prevod
- terminologija i policy formulacija često trebaju domenski prilagođeno preoblikovanje
- automatizovani QA pomaže, ali rijetko je dovoljan za suptilne probleme registra

## Localization-at-Scale napomena

Čak i kada je opće značenje očuvano, prevodi generisani pomoću AI-ja mogu zahtijevati pregled izvornog govornika kako bi se ispravili suptilni problemi u gramatici, modalnosti, terminologiji i domenski specifičnom registru. Takve probleme je često teško pouzdano otkriti samo automatizovanim metrikama kvaliteta.

## Gdje ponovo koristiti ovakve primjere

- materijali za obuku lokalizacijskih recenzenata
- skupovi podataka za evaluaciju AI prevođenja
- primjeri u stilskom vodiču
- dokumentacija ljudskog pregleda u petlji
- članci o lokalizaciji u velikom obimu i vodiči dobre prakse

Takvi primjeri pomažu recenzentima da kalibrišu očekivanja i voditeljima lokalizacije daju realističan referentni materijal.

## Povezane stranice

- `../wiki/ai-assisted-translation-policy.md`
- `../wiki/translation-quality-assurance.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../blog/en/ai-will-not-replace-translators.md`
