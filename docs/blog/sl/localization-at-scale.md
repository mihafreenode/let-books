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
title: Lokalizacija v velikem obsegu
summary: Zakaj je treba lokalizacijo obravnavati kot inženirski, dostopnostni, upravljavski in izobraževalni sistem, ne kot pozno prevajalsko opravilo.
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
  - ../../sources/sl/localization-at-scale.md
status: draft
---

# Lokalizacija v velikem obsegu

Številni programski projekti lokalizacijo še vedno razumejo kot trenutek, ko se končno angleško besedilo pošlje prevajalcem. Za sodobno javno-koristno programsko opremo je tak model preozek.

Lokalizacija v velikem obsegu je sistem. Vključuje izvorno pisanje, terminologijo, diagrame, besedila za dostopnost, jezikovne metapodatke, posnetke zaslona, pregledovanje, preverjanje kakovosti, CI, upravljanje in dolgoročno vzdrževanje.

## Pogosta napaka

Najpogostejša napaka je čakanje predolgo.

Ko projekt ugotovi, da želi podpirati več jezikov, so informacijska arhitektura, navigacija, posnetki zaslona in testne predpostavke pogosto že oblikovani samo za angleščino. Takrat postane prevajanje drago, ker sistem nikoli ni bil zasnovan za dobro podporo več jezikom.

## Zakaj problem ni samo prevajanje

Večjezični uporabnik ne bere samo gumbov. Doživlja tudi:

- navigacijo
- validacijo obrazcev
- posnetke zaslona
- diagrame
- nadomestna besedila
- podnapise
- izobraževalne primere
- preklapljanje jezika pri bralnikih zaslona

Če to ostane samo v angleščini, izdelek ni zares lokaliziran.

## Zakaj je to pomembno za Let Books

Let Books je izrecno zasnovan za večjezične zbirke izobraževalnih in akademskih knjig v Sloveniji, državah nekdanje Jugoslavije in širši regiji. Projekt že navaja angleščino, slovenščino, hrvaščino, bosanščino, srbščino v latinici, srbščino v cirilici, makedonščino, albanščino, nemščino, francoščino, italijanščino in španščino kot ciljne jezike.

To pomeni, da lokalizacija ni neobvezni zaključni sloj. Je del definicije izdelka.

## Praktičen model

Praktičen model lokalizacije v velikem obsegu ima običajno pet plasti.

1. napiši izvorno besedilo, primerno za prevajanje
2. določi terminologijo in pravila upravljanja
3. ustvari ali vzdržuj strukturirane jezikovne različice
4. preverjaj povezave, nadomestne oznake, Unicode in dostopnost
5. izboljšuj prevode po stopnjah namesto pretvarjanja, da so takoj popolni

## Vloga AI

AI pomaga. Znižuje strošek prvih osnutkov, odkrivanja terminološkega odnašanja in širjenja pokritosti dokumentacije. Ne odstrani pa potrebe po pregledu, dostopnostnih preverjanjih in jezikovni presoji.

Zato so zreli lokalizacijski sistemi vse bolj podprti z AI, ne pa popolnoma prepuščeni AI.

## Trajna ugotovitev

Če projekt želi večjezično sodelovanje, mora biti lokalizacija del zasnove sistema, ne pozni izvozni korak.

## Related Pages

- `../../wiki/localization-at-scale.md`
- `../../wiki/localization-maturity-model.md`
- `../../learning/how-to-build-a-localization-pipeline.md`

## Other Languages

- English (../en/localization-at-scale.md)
