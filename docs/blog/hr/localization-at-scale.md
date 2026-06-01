---
article_id: localization-at-scale
canonical_language: en
language_variants:
  - ../en/localization-at-scale.md
  - ../sl/localization-at-scale.md
  - ../hr/localization-at-scale.md
  - ../bs/localization-at-scale.md
  - ../sr-Latn/localization-at-scale.md
  - ../sr-Cyrl/localization-at-scale.md
  - ../mk/localization-at-scale.md
  - ../sq/localization-at-scale.md
  - ../de/localization-at-scale.md
  - ../it/localization-at-scale.md
  - ../fr/localization-at-scale.md
  - ../es/localization-at-scale.md
title: Lokalizacija u velikom opsegu
summary: Zašto lokalizaciju treba tretirati kao inženjerski, pristupačni, upravljački i obrazovni sustav, a ne kao kasni prevoditeljski zadatak.
topics:
  - localization
  - engineering-systems
  - governance
  - continuous-localization
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/README.md
  - docs/style-guide/localization/README.md
sources:
  - ../../sources/hr/localization-at-scale.md
status: draft
---

# Lokalizacija u velikom opsegu

Mnogi softverski projekti još uvijek tretiraju lokalizaciju kao trenutak kada se završeni engleski tekst šalje prevoditeljima. Za suvremeni softver od javnog interesa taj je model premalen.

Lokalizacija u velikom opsegu sustav je. Uključuje izvorno pisanje, terminologiju, dijagrame, tekstove pristupačnosti, jezične metapodatke, snimke zaslona, pregled, QA, CI, upravljanje i dugoročno održavanje.

## Uobičajen neuspjeh

Najčešća je pogreška čekati predugo.

Kad projekt odluči podržati više jezika, informacijska arhitektura, navigacija, snimke zaslona i pretpostavke testiranja često su već oblikovane samo za engleski. Tada prevođenje postaje skupo jer sustav nikad nije bio dizajniran za kvalitetno nošenje više jezika.

## Zašto problem nije samo prevođenje

Višejezični korisnik ne čita samo oznake gumba. Doživljava i:

- navigaciju
- validaciju obrazaca
- snimke zaslona
- dijagrame
- alternativni tekst
- titlove
- obrazovne primjere
- prebacivanje jezika u čitačima zaslona

Ako to ostane samo na engleskom, proizvod nije smisleno lokaliziran.

## Zašto je to važno za Let Books

Let Books je izričito osmišljen za višejezične zbirke obrazovnih i akademskih knjiga u Sloveniji, zemljama bivše Jugoslavije i široj regiji. Projekt već navodi engleski, slovenski, hrvatski, bosanski, srpski latinicu, srpski ćirilicu, makedonski, albanski, njemački, francuski, talijanski i španjolski kao ciljne jezike.

To znači da lokalizacija nije izborni završni sloj. Ona je dio definicije proizvoda.

## Praktičan model

Praktičan model lokalizacije u velikom opsegu obično ima pet slojeva.

1. napiši izvorni sadržaj pogodan za prijevod
2. definiraj terminologiju i pravila upravljanja
3. generiraj ili održavaj strukturirane jezične varijante
4. provjeravaj poveznice, rezervirana mjesta, Unicode i pristupačnost
5. poboljšavaj prijevode u fazama umjesto da se pretvaraš da su odmah savršeni

## Uloga AI-ja

AI pomaže. Smanjuje trošak prvih nacrta, otkrivanja terminološkog odvajanja i širenja pokrivenosti dokumentacije. Ali ne uklanja potrebu za pregledom, provjerom pristupačnosti i jezičnom prosudbom.

Zato su zreli lokalizacijski sustavi sve više AI-potpomognuti, a ne AI-only.

## Trajni zaključak

Ako projekt želi višejezično sudjelovanje, lokalizacija mora biti dio dizajna sustava, a ne kasni izvozni korak.

## Povezane stranice

- `../../wiki/localization-at-scale.md`
- `../../wiki/localization-maturity-model.md`
- `../../learning/how-to-build-a-localization-pipeline.md`

## Drugi jezici

- English (../en/localization-at-scale.md)
