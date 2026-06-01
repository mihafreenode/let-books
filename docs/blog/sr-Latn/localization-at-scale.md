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
title: Lokalizacija u velikom obimu
summary: Zašto lokalizaciju treba tretirati kao inženjerski, pristupačni, upravljački i obrazovni sistem, a ne kao kasni prevodilački zadatak.
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
  - ../../sources/sr-Latn/localization-at-scale.md
status: draft
---

# Lokalizacija u velikom obimu

Mnogi softverski projekti i dalje tretiraju lokalizaciju kao trenutak kada se završeni engleski tekst pošalje prevodiocima. Za savremeni softver od javnog interesa taj model je premalen.

Lokalizacija u velikom obimu je sistem. Uključuje izvorno pisanje, terminologiju, dijagrame, tekstove pristupačnosti, jezičke metapodatke, snimke ekrana, pregled, QA, CI, upravljanje i dugoročno održavanje.

## Uobičajeni neuspeh

Najčešća greška je čekati predugo.

Kada projekat odluči da podrži više jezika, informaciona arhitektura, navigacija, snimci ekrana i pretpostavke testiranja često su već oblikovani samo za engleski. Tada prevođenje postaje skupo jer sistem nikada nije bio dizajniran da dobro nosi više jezika.

## Zašto problem nije samo prevođenje

Višejezični korisnik ne čita samo oznake dugmadi. Doživljava i:

- navigaciju
- validaciju obrazaca
- snimke ekrana
- dijagrame
- alternativni tekst
- titlove
- obrazovne primere
- prebacivanje jezika u čitačima ekrana

Ako to ostane samo na engleskom, proizvod nije smisleno lokalizovan.

## Zašto je to važno za Let Books

Let Books je izričito osmišljen za višejezične zbirke obrazovnih i akademskih knjiga u Sloveniji, zemljama bivše Jugoslavije i široj regiji. Projekat već navodi engleski, slovenački, hrvatski, bosanski, srpski latinicu, srpski ćirilicu, makedonski, albanski, nemački, francuski, italijanski i španski kao ciljne jezike.

To znači da lokalizacija nije izborni završni sloj. Ona je deo definicije proizvoda.

## Praktičan model

Praktičan model lokalizacije u velikom obimu obično ima pet slojeva.

1. napiši izvorni sadržaj pogodan za prevođenje
2. definiši terminologiju i pravila upravljanja
3. generiši ili održavaj strukturirane jezičke varijante
4. proveravaj linkove, rezervisana mesta, Unicode i pristupačnost
5. poboljšavaj prevode u fazama umesto da se pretvaraš da su odmah savršeni

## Uloga AI-ja

AI pomaže. Smanjuje trošak prvih nacrta, otkrivanja terminološkog razilaženja i širenja pokrivenosti dokumentacije. Ali ne uklanja potrebu za pregledom, proverom pristupačnosti i jezičkom procenom.

Zato su zreli lokalizacijski sistemi sve više AI-potpomognuti, a ne AI-only.

## Trajni zaključak

Ako projekat želi višejezično učešće, lokalizacija mora biti deo dizajna sistema, a ne kasni izvozni korak.

## Related Pages

- `../../wiki/localization-at-scale.md`
- `../../wiki/localization-maturity-model.md`
- `../../learning/how-to-build-a-localization-pipeline.md`

## Other Languages

- English (../en/localization-at-scale.md)
