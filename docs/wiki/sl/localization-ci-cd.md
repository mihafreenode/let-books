---
title: "Lokalizacija CI in CD"
summary: >-
  Lokalizacijski CI/CD neprekinjeno preverja večjezično vsebino, tako da se manjkajoča sredstva, nedelujoče povezave in regresije dostopnosti ujamejo zgodaj.
topics:
  - continuous-localization
  - qa
  - ci-cd
---
# Lokalizacija CI in CD

## Povzetek

Lokalizacijski CI/CD neprekinjeno preverja večjezično vsebino, tako da se manjkajoča sredstva, nedelujoče povezave in regresije dostopnosti ujamejo zgodaj.

## Želena preverjanja

- doslednost nabora jezikovnih različic
- sveže generiranje spletnega mesta pred pregledom paritete
- preverjanje povezav
- generiranje člankov in strani
- preverjanje črkovanja, kjer je na voljo
- pariteta nadomestnih znakov
- osnovni preizkusi dostopnosti
- preverjanje pokritosti posnetkov zaslona in diagramov

## Pravilo svežega generiranja

Poteki lokalizacijskega CI in pregledov ne smejo utemeljevati ugotovitev o pariteti na zastarelih generiranih artefaktih.

Zahtevano zaporedje:

1. generirajte spletno mesto iz trenutnega stanja repozitorija
2. zaženite validatorje nad sveže generiranim izhodom
3. po potrebi preglejte generirani HTML
4. po potrebi preglejte izrisani izhod

To je pomembno, ker se lahko izvorni Markdown, generirani HTML, objavljen izhod in v brskalniku izrisano vedenje med razvojem začasno razlikujejo.

## Prednostni vrstni red pregledov

Najstrožji pregled v maternem jeziku in pregled paritete najprej uporabite za:

- novo ustvarjeno vsebino
- nedavno razširjeno vsebino
- vsebino, ki se trenutno ureja

Nato enake standarde pregledovanja postopno razširite še na starejšo lokalizirano vsebino.

## Napredovanje razredov napak

Lokalizacijski CI bi moral slediti obema:

- `Localization Debt`
- `Open Defect Classes`

Dolg meri preostalo delo na izvorni vsebini.

Odprti razredi napak merijo, ali sistem še vedno dovoljuje, da se določena kategorija težave znova pojavi.

Takoj ko razred napak doseže nič pojavitev, se mora njegov validator, kjer je to praktično, premakniti iz svetovalnega načina v blokirnega.

Primeri:

- objava nadomestnega osnutka
- neprevedeni povzetki
- neprevedeni metapodatki
- neprevedena besedila
- objava z mešanimi jeziki

CI ni le vratar. Je mehanizem, ki preprečuje, da bi se zaprti razredi napak tiho znova odprli.

## Vrstni red generiranja za krmarjenje po člankih

Trenutna pogodba za javno krmarjenje po člankih je:

- `post-article-nav`
- `related-content`
- `related-topic-nav`

Generiranje in preverjanje morata potekati v tem vrstnem redu:

1. generirajte HTML člankov
2. generirajte indeksne strani
3. izvedite morebitno preostalo naknadno obdelavo navigacije samo, če je še vedno potrebna
4. preverite sveže generirani izhod
5. preglejte generirani HTML ali izrisani izhod, če potek dela zahteva človeško oceno paritete

Če validator še vedno pričakuje podedovani blok `topic-nav`, validator posodobite na trenutno pogodbo, namesto da popravljate generirani HTML.

## Sorodne strani

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/sl/how-to-run-localization-qa-in-ci.md`
