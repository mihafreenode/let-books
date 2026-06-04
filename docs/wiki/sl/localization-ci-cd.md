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

## Želeni pregledi

- doslednost seznama jezikovnih različic
- sveže generiranje spletnega mesta pred pregledom paritete
- preverjanje povezave
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
4. po potrebi preglejte izrisan izhod

To je pomembno, ker se lahko izvorni Markdown, generirani HTML, objavljen izhod in v brskalniku izrisano vedenje med razvojem začasno razlikujejo.

## Napredovanje razreda napak

Lokalizacijski CI bi moral slediti obema:

- `Localization Debt`
- `Open Defect Classes`

Dolg meri preostalo izvorno vsebinsko delo.

Odprti razredi napak merijo, ali lahko sistem še vedno dovoli, da se kategorija težave ponovno pojavi.

Takoj, ko razred napak doseže nič pojavov, se mora njegov validator premakniti s svetovalnega na blokiranje, kjer je to praktično.

Primeri:

- nadomestna objava osnutka
- neprevedeni povzetki
- neprevedeni metapodatki
- neprevedena telesa
- mešano jezikovno založništvo

CI ni le vratar. To je mehanizem, ki preprečuje, da bi se zaprti razredi napak tiho ponovno odprli.

## Vrstni red generiranja za krmarjenje po člankih

Trenutna pogodba o krmarjenju po javnih člankih je:

- `post-article-nav`
- `related-content`
- `related-topic-nav`

Generiranje in preverjanje morata potekati v tem vrstnem redu:

1. generirajte HTML člankov
2. generirajte indeksne strani
3. zaženite morebitno preostalo naknadno obdelavo navigacije samo, če je še vedno potrebna
4. preverite sveže generiran izhod
5. preglejte generirani HTML ali izrisan izhod, če potek dela zahteva človeško oceno paritete

Če validator še vedno pričakuje podedovan blok `topic-nav`, ga posodobite na trenutno pogodbo, namesto da popravljate ustvarjene HTML.

## Sorodne strani

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/sl/how-to-run-localization-qa-in-ci.md`
