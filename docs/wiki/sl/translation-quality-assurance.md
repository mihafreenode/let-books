---
title: "Zagotavljanje kakovosti prevodov"
summary: >-
  Translation QA združuje samodejno preverjanje veljavnosti, preverjanje črkovanja, pregled terminologije, preverjanje dostopnosti in človeško presojo.
topics:
  - translation-quality
  - qa
  - localization
---
# Zagotavljanje kakovosti prevodov

## Povzetek

Translation QA združuje samodejno preverjanje veljavnosti, preverjanje črkovanja, pregled terminologije, preverjanje dostopnosti in človeško presojo.

## Pogosta preverjanja

- manjkajoči prevodi
- angleško uhajanje
- popolnost lokalizacije, usmerjena k bralcu
- neujemanja nadomestnih znakov
- prekinjene povezave
- premik po glosarju
- pokritost besedila dostopnosti
- pariteta posnetka zaslona in diagrama

## Obrnjeni k bralcu lokalizacijski validator

En razred validatorja bi moral izrecno zavrniti CI, ko je stran videti lokalizirana, vendar še vedno izpostavlja vsebino v izvornem jeziku, namenjeno bralcu.

Primeri, ki bi morali spodleteti:

- lokaliziran naslov z angleškim povzetkom
- lokaliziran članek z angleškimi oznakami
- lokaliziran članek z angleškimi naslovi ali seznami
- lokaliziran članek z angleškimi oblački ali napisi
- lokaliziran članek z angleškimi oznakami diagramov ali nadomestnim besedilom
- kartice s sorodno vsebino v mešanih jezikih

To je pogoj za napako, ne le opozorilo, saj bralci doživljajo takšne strani kot vidno nedokončane.

## Revizija razreda napak

QA prevajanja mora vzdrževati eksplicitne razrede napak z:

- opis
- število pojavov
- glavni vzrok
- kritje validatorja
- tveganje ponovitve
- načrt zapiranja

Zahtevane kategorije vključujejo:

- neprevedeni povzetki
- neprevedena telesa
- nadomestna objava osnutka
- neprevedeni metapodatki
- mešano jezikovno založništvo
- bodoči odkriti razredi

Razred se zapre šele, ko njegovo število doseže nič in CI prepreči, da bi se vrnil brez napake.

## Dokazi človeškega pregleda

Zagotavljanje kakovosti prevodov bi moralo ohraniti tudi kratke zapise človeških pregledov za reprezentativne popravke s pomočjo umetne inteligence.

Najmanjša polja:

- izvirno besedilo
- popravljeno besedilo
- kategorija napak
- hipoteza o vzroku
- utemeljitev recenzenta

Ugotovitve pregledov naravnih govorcev je treba ohraniti kot rastoči korpus, ne kot osamljene enkratne opombe. Ponavljajoče se ugotovitve bi se morale vrniti v zasnovo validatorja, smernice sodelujočih in prihodnja navodila agenta AI.

Pred potrditvijo pregleda prevoda, podprtega z AI, bi morali pregledovalci:

- pregledati ustrezne vnose v strukturiranem korpusu ugotovitev za ta jezik ali temo
- preveriti ponavljajoče se vzorce napak iz človeških pregledov
- potrditi, da trenutni osnutek pred potrditvijo ne uvaja znova znanih težav

Vsako prijavljeno napako naravnega govorca je treba oceniti tudi glede:

- popravka vsebine
- posodobitve smernic za pregledovanje
- posodobitve terminoloških smernic
- izboljšave poziva
- možnosti za validator
- možnosti za regresijski test

To je pomembno, ker lahko prevodi, ustvarjeni z umetno inteligenco, tudi če je ohranjen splošni pomen, zahtevajo pregled maternega govorca, da se odpravijo subtilne težave v slovnici, modalnosti, terminologiji in registru, specifičnem za domeno. Te težave je pogosto težko zaznati samo z avtomatiziranimi meritvami kakovosti.

Konkretne prijavljene napake naravnih govorcev niso zgolj svetovalne. Vsaka mora biti odpravljena, sistematizirana, namerno nerešena z utemeljitvijo ali pa še vedno izrecno spremljana v korpusu ugotovitev.

## Taksonomija pogostih napak prevoda AI

- slovnica
- modalnost
- terminologija
- registracija
- tekočnost
- dobesedni prevod
- dvoumnost
- izguba konteksta
- besedni red
- kolokacija
- pisava ali pravopis
- ubeseditev pravilnika domene
- besedilo dostopnosti

## Lahka primerjalna ocena

Za ponovljivo vrednotenje prevoda z umetno inteligenco uporabite lahkotno rubriko 0–3, namesto da se zanašate le na presojo uspešno/neuspešno.

Priporočene dimenzije:

- kar pomeni natančnost
- slovnica in tekočnost
- terminologija in domensko prileganje
- register in slog
- prizadevanje za pregled

Priporočene oznake za izdajo:

- blokator
- večja revizija
- manjša revizija
- pripravljeno s prijavo pregleda

To ustvarja podatke, ki so prijazni do kartice kazalnikov, ne da bi potrebovali težko ogrodje za lokalizacijo in merjenje.

## Sorodne strani

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../../learning/sl/how-to-run-localization-qa-in-ci.md`
