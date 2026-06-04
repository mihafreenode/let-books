---
title: "Lokalizacija CI i CD"
summary: >-
  Lokalizacijski CI/CD kontinuirano provjerava višejezični sadržaj tako da se nedostajuća sredstva, neispravne veze i regresije pristupačnosti rano uočavaju.
topics:
  - continuous-localization
  - qa
  - ci-cd
---
# Lokalizacija CI i CD

## Sažetak

Lokalizacijski CI/CD kontinuirano provjerava višejezični sadržaj tako da se nedostajuća sredstva, neispravne veze i regresije pristupačnosti rano uočavaju.

## Željene provjere

- dosljednost inventara lokalizacije
- svježe generiranje stranice prije pregleda pariteta
- provjera valjanosti veze
- generiranje članaka i stranica
- provjera pravopisa gdje je dostupna
- paritet rezerviranog mjesta
- testovi pristupačnosti dima
- provjere pokrivenosti snimke zaslona i dijagrama

## Pravilo svježeg generiranja

CI i radni tokovi pregleda lokalizacije ne smiju temeljiti nalaze o paritetu na zastarjelim generiranim artefaktima.

Obvezni redoslijed:

1. generirajte stranicu iz trenutačnog stanja repozitorija
2. pokrenite validatore nad svježe generiranim izlazom
3. po potrebi pregledajte generirani HTML
4. po potrebi pregledajte prikazani izlaz

To je važno zato što se izvorni Markdown, generirani HTML, objavljeni izlaz i ponašanje prikazano u pregledniku mogu privremeno razilaziti tijekom razvoja.

## Progresija klase nedostataka

CI lokalizacije trebao bi pratiti oboje:

- `Localization Debt`
- `Open Defect Classes`

Dug mjeri preostali izvorni sadržaj rada.

Otvorene klase grešaka mjere može li sustav još uvijek dopustiti ponovno pojavljivanje kategorije problema.

Čim klasa grešaka dosegne nultu pojavu, njezin validator trebao bi prijeći sa savjetodavne na blokirajuću gdje je to praktično.

Primjeri:

- mjesto za objavljivanje nacrta
- neprevedeni sažeci
- neprevedeni metapodaci
- neprevedena tijela
- mješovito jezično izdavaštvo

CI nije samo vratar. To je mehanizam koji sprječava tiho ponovno otvaranje zatvorenih klasa grešaka.

## Redoslijed generiranja za navigaciju članaka

Trenutačni javni ugovor o kretanju člankom je:

- `post-article-nav`
- `related-content`
- `related-topic-nav`

Generiranje i provjera valjanosti trebaju se odvijati ovim redoslijedom:

1. generirajte HTML članka
2. generirajte indeksne stranice
3. pokrenite preostalu naknadnu obradu navigacije samo ako je još potrebna
4. validirajte svježe generirani izlaz
5. pregledajte generirani HTML ili prikazani izlaz ako radni tok zahtijeva ljudsku procjenu pariteta

Ako validator i dalje očekuje naslijeđeni blok `topic-nav`, ažurirajte validator na trenutni ugovor umjesto krpanja generiranog HTML.

## Povezane stranice

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/hr/how-to-run-localization-qa-in-ci.md`
