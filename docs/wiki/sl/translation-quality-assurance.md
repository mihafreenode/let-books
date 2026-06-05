---
title: "Zagotavljanje kakovosti prevodov"
summary: >-
  Zagotavljanje kakovosti prevodov združuje avtomatizirano preverjanje, preverjanje črkovanja, pregled terminologije, preverjanja dostopnosti in človeško presojo.
topics:
  - translation-quality
  - qa
  - localization
---
# Zagotavljanje kakovosti prevodov

## Povzetek

Zagotavljanje kakovosti prevodov združuje avtomatizirano preverjanje, preverjanje črkovanja, pregled terminologije, preverjanja dostopnosti in človeško presojo.

## Pogosta preverjanja

- manjkajoči prevodi
- uhajanje angleščine
- celovitost lokalizacije za bralce
- strukturna pariteta glede na sveže generirani izhod
- berljivost v maternem jeziku in naravno izražanje
- neujemanja nadomestnih znakov
- nedelujoče povezave
- odmik od glosarja
- pokritost besedila za dostopnost
- pariteta posnetkov zaslona in diagramov

## Zahteva po sveže ustvarjenem izhodu

Pred pregledom strukturne paritete, semantičnim pregledom ali ročno primerjavo člankov:

1. znova generirajte spletno mesto iz trenutnega stanja repozitorija
2. zaženite validatorje nad trenutnim generiranim izhodom
3. preglejte generirane artefakte HTML
4. šele nato izvedite ročno oceno paritete

To pravilo obstaja zato, ker se lahko izvorni Markdown in generirani izhod med razvojem začasno razlikujeta, ugotovitve QA pa morajo temeljiti na trenutnih artefaktih in ne na zastarelih generiranih datotekah.

## Pregled strukturne paritete

Pregled strukturne paritete mora iskati izgubo vrednosti za bralca tudi takrat, ko lokaliziran članek še vedno v grobem ohranja pomen.

Tipični znaki vključujejo:

- manjkajoče glavne razdelke
- porušeno hierarhijo naslovov
- manjkajoče primere
- stisnjena praktična navodila
- zmanjšano razpravo o upravljanju
- skrajšana navodila za pregled ali preverjanje

Opozorila validatorjev strukturne paritete so pozivi k pregledu, ne samodejni dokaz slabega prevoda. Razlagati jih je treba skupaj z generiranim HTML-jem in po potrebi z izhodom, izrisanim v brskalniku.

## Pregled izražanja v maternem jeziku

QA prevodov mora iskati tudi besedilo, ki je tehnično pravilno, vendar ga naravni govorec ne bi izbral spontano.

To vključuje:

- neposredno angleško stavčno zgradbo
- neposredni prevod angleških idiomov
- besedilo, ki zveni prevedeno namesto avtorsko napisano
- terminologijo, ki še vedno razkriva izvorni jezik

Primeri takšnih vzorcev vključujejo izraze, enakovredne:

- kandidatna vsebina
- strategija preverjanja
- artefakt poteka dela
- kurirana orodja
- kurirane veščine

To niso vedno prevajalske napake. Pogosto gre za primere, kjer bi naravni govorec stavek instinktivno preoblikoval.

## Preizkus prednosti naravnega govorca

Pri pomembnih proznih razdelkih naj se pregledovalci vprašajo:

> Če bi usposobljen naravni govorec to misel napisal iz nič, bi jo verjetno zapisal tako?

Če ne, naj pregledovalci:

- ohranijo pomen
- ohranijo semantično pariteto
- ohranijo strukturno pariteto
- izboljšajo formulacijo

Ta preizkus je posebej uporaben za:

- uvode
- povzetke
- izobraževalna pojasnila
- praktična navodila
- razprave o upravljanju
- zaključke

## Pregled naravnega izražanja

Tehnično pravilno, vendar nenaravno formulacijo obravnavajte kot težavo kakovosti.

Pregledovalci naj dajejo prednost formulacijam, ki v ciljnem jeziku zvenijo naravno napisane, tudi kadar je izvorni prevod razumljiv.

Cilj ni samo pravilen prevod. Cilj je dokument, ki deluje, kot da bi bil prvotno napisan za naravne bralce.

Izboljšave naravnega jezika ne smejo oslabiti:

- semantične paritete
- strukturne paritete
- izobraževalne pokritosti
- primerov
- praktičnih navodil
- navodil za upravljanje

## Validator lokalizacije, usmerjen k bralcu

Ena vrsta validatorja mora v CI izrecno spodleteti, kadar je stran videti lokalizirana, vendar še vedno prikazuje bralcu namenjeno vsebino v izvornem jeziku.

Primeri, ki morajo spodleteti:

- lokaliziran naslov z angleškim povzetkom
- lokaliziran članek z angleškimi oznakami
- lokaliziran članek z angleškimi naslovi ali seznami
- lokaliziran članek z angleškimi poudarki ali napisi
- lokaliziran članek z angleškimi oznakami diagramov ali nadomestnim besedilom
- kartice `related-content` z mešanimi jeziki

To je pogoj za neuspeh, ne le opozorilo, saj bralci takšne strani doživljajo kot očitno nedokončane.

## Revizija razredov napak

QA prevodov mora vzdrževati izrecne razrede napak z naslednjimi podatki:

- opis
- število pojavitev
- glavni vzrok
- pokritost validatorja
- tveganje ponovitve
- načrt zaprtja

Zahtevane kategorije vključujejo:

- neprevedene povzetke
- neprevedena besedila
- objavo nadomestnih osnutkov
- neprevedene metapodatke
- objavo z mešanimi jeziki
- prihodnje odkrite razrede

Razred je zaprt šele, ko njegovo število pojavitev doseže nič in CI prepreči, da bi se brez napake vrnil.

## Dokazi človeškega pregleda

QA prevodov mora hraniti tudi kratke zapise človeškega pregleda za reprezentativne popravke s pomočjo AI.

Najmanjša polja:

- izvorno besedilo
- popravljeno besedilo
- kategorija napake
- hipoteza o glavnem vzroku
- utemeljitev pregledovalca

Ugotovitve pregledov naravnih govorcev je treba ohranjati kot rastoči korpus, ne kot osamljene enkratne opombe. Ponavljajoče se ugotovitve se morajo vračati v zasnovo validatorjev, navodila za sodelujoče in prihodnja navodila za AI-agente.

Pred končno potrditvijo prevoda s pomočjo AI morajo pregledovalci:

- prebrati ustrezne vnose iz strukturiranega korpusa ugotovitev za ta jezik ali temo
- preveriti ponavljajoče se vzorce napak iz človeških pregledov
- potrditi, da trenutni osnutek pred potrditvijo ne uvaja znanih težav nazaj

Vsako prijavljeno napako naravnega govorca je treba oceniti tudi glede:

- popravka vsebine
- posodobitve navodil za pregled
- posodobitve terminoloških navodil
- izboljšanja poziva
- priložnosti za validator
- priložnosti za regresijski test

To je pomembno, ker lahko tudi ob ohranjenem splošnem pomenu prevodi, ustvarjeni z AI, zahtevajo pregled naravnega govorca za odpravo subtilnih težav v slovnici, modalnosti, terminologiji in domensko specifičnem registru. Takšne težave je pogosto težko zaznati samo z avtomatiziranimi meritvami kakovosti.

Konkretno prijavljene napake niso zgolj svetovalne. Vsaka mora biti popravljena, sistematizirana, namerno nerešena z utemeljitvijo ali pa še vedno izrecno sledena v korpusu ugotovitev.

## Taksonomija pogostih napak AI prevodov

- slovnica
- modalnost
- terminologija
- register
- tekočnost
- dobesedni prevod
- dvoumnost
- izguba konteksta
- besedni red
- kolokacija
- pisava ali pravopis
- formulacija domenske politike
- formulacija dostopnosti

## Lahko primerjalno ocenjevanje

Za ponovljivo vrednotenje AI-prevodov uporabite lahkotno lestvico 0-3, namesto da bi se zanašali samo na presojo uspešno/neuspešno.

Priporočene dimenzije:

- natančnost pomena
- slovnica in tekočnost
- terminologija in ustreznost domeni
- register in slog
- napor pregleda

Priporočene oznake za izdajo:

- blokator
- večja revizija
- manjša revizija
- pripravljeno s potrditvijo pregleda

Tako nastanejo podatki, primerni za preglednice rezultatov, brez potrebe po težkem okviru za merjenje lokalizacije.

## Sorodne strani

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../../learning/sl/how-to-run-localization-qa-in-ci.md`
