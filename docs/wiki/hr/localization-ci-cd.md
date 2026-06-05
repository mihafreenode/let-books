---
title: "Lokalizacija CI i CD"
summary: >-
  Lokalizacijski CI/CD kontinuirano provjerava višejezični sadržaj kako bi se nedostajuća sredstva, pokvarene poveznice i regresije pristupačnosti otkrile rano.
topics:
  - continuous-localization
  - qa
  - ci-cd
---
# Lokalizacija CI i CD

## Sažetak

Lokalizacijski CI/CD kontinuirano provjerava višejezični sadržaj kako bi se nedostajuća sredstva, pokvarene poveznice i regresije pristupačnosti otkrile rano.

## Željene provjere

- dosljednost popisa lokaliteta
- svježe generiranje web-mjesta prije pregleda pariteta
- provjera poveznica
- generiranje članaka i stranica
- provjera pravopisa gdje je dostupna
- paritet rezerviranih mjesta
- osnovni testovi pristupačnosti
- provjere pokrivenosti snimaka zaslona i dijagrama

## Pravilo svježeg generiranja

Tijekovi lokalizacijskog CI-ja i pregleda ne smiju temeljiti nalaze o paritetu na zastarjelim generiranim artefaktima.

Potreban redoslijed:

1. generirajte web-mjesto iz trenutačnog stanja repozitorija
2. pokrenite validatore nad svježe generiranim izlazom
3. po potrebi pregledajte generirani HTML
4. po potrebi pregledajte renderirani izlaz

To je važno jer izvorni Markdown, generirani HTML, objavljeni izlaz i ponašanje renderirano u pregledniku mogu privremeno odstupati tijekom razvoja.

## Prioritet pregleda

Najstroži pregled izvornog jezika i pariteta najprije primijenite na:

- novostvoreni sadržaj
- nedavno prošireni sadržaj
- sadržaj koji se trenutačno uređuje

Zatim iste standarde pregleda postupno proširite i na stariji lokalizirani sadržaj.

## Progresija klasa nedostataka

Lokalizacijski CI treba pratiti i jedno i drugo:

- `Localization Debt`
- `Open Defect Classes`

Dug mjeri preostali posao na izvornom sadržaju.

Otvorene klase nedostataka mjere dopušta li sustav i dalje da se neka kategorija problema ponovno pojavi.

Čim klasa nedostataka dosegne nula pojavljivanja, njezin validator bi se, gdje je to praktično, trebao prebaciti iz savjetodavnog u blokirajući način rada.

Primjeri:

- objava zamjenskog nacrta
- neprevedeni sažeci
- neprevedeni metapodaci
- neprevedena tijela teksta
- objava na miješanim jezicima

CI nije samo čuvar prolaza. On je mehanizam koji sprječava da se zatvorene klase nedostataka tiho ponovno otvore.

## Redoslijed generiranja za navigaciju članaka

Trenutačni ugovor javne navigacije članaka jest:

- `post-article-nav`
- `related-content`
- `related-topic-nav`

Generiranje i validacija trebaju se odvijati ovim redoslijedom:

1. generirajte HTML članaka
2. generirajte indeksne stranice
3. pokrenite svaku preostalu naknadnu obradu navigacije samo ako je još potrebna
4. validirajte svježe generirani izlaz
5. pregledajte generirani HTML ili renderirani izlaz ako tijek rada zahtijeva ljudsku procjenu pariteta

Ako validator još očekuje naslijeđeni blok `topic-nav`, ažurirajte validator na trenutačni ugovor umjesto da krpate generirani HTML.

## Povezane stranice

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/hr/how-to-run-localization-qa-in-ci.md`
