---
title: "Specifikacija izdelka"
summary: >-
  Specifikacija izdelka določa, čemu je izdelek namenjen, kaj mora delati, katere meje mora spoštovati in kateri rezultati se štejejo za uspeh.
topics:
  - product-specification
  - spec-writing
  - spec-driven-development
---
# Specifikacija izdelka

## Povzetek

Specifikacija izdelka določa, čemu je izdelek namenjen, kaj mora delati, katere meje mora spoštovati in kateri rezultati se štejejo za uspeh.

## Vloga

Specifikacija izdelka je praktični opis predvidenega obnašanja izdelka na najvišji ravni.

Odgovoriti mora na vprašanja, kot so:

- zakaj izdelek obstaja
- za koga je
- kateri poteki dela so prvovrstni
- kaj mora delovati tudi v okvari
- kaj je izrecno izven obsega
- kateri kriteriji sprejemljivosti opredeljujejo smiselno predstavitev ali izdajo

## Kaj sodi v specifikacijo izdelka

Tipična vsebina specifikacije vključuje:

- namen izdelka
- temeljna filozofija
- model domene
- definicije poteka dela
- pričakovanja glede zasebnosti in varnosti
- necilj
- navodila za zaporedje izvajanja, kjer to vpliva na obseg ali vrstni red dostave
- merila sprejemljivosti

Specifikacija se mora osredotočiti na resničnost izdelka, ne pa na vsako podrobnost lokalne izvedbe.

## Kar običajno ne sodi tja

Ti elementi pogosto sodijo drugam, razen če neposredno vplivajo na zaveze glede izdelkov:

- konvencije o začasnih skladiščih
- nastavitev lokalnega orodja
- odločitve o ozkem poliranju uporabniškega vmesnika
- enkratna navodila za odpravljanje napak
- uredniška ali založniška mehanika, ki ne spreminja modela izdelka

## Zakaj je to pomembno pri delu s pomočjo umetne inteligence

AI lahko zelo hitro ustvari verodostojno izvedbo. Brez jasne specifikacije izdelka lahko ta izvedba optimizira za udobje namesto za namen.

Specifikacija daje recenzentom in sodelujočim stabilen standard za odločanje, ali ustvarjeni izhod še vedno pripada predvidenemu izdelku.

## Let Books kontekst

V Let Books je `AGENTS.md` osnovna specifikacija izdelka.

Določa:

- namen projekta
- model domene in poteka dela
- več najemnikov in smer lokalizacije
- ročni potek dela in izbirna načela AI
- merila sprejemljivosti za prvi demo

Zaradi tega je več kot samo pregled. Je glavna avtoriteta izdelka v skladišču.

## Sorodne strani

- `implementation-guidance.md`
- `documentation-traceability.md`
- `spec-driven-development.md`
- `../../learning/sl/how-to-write-a-spec-that-ai-can-follow.md`