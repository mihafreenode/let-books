---
title: "Lokalizacija CI i CD"
summary: >-
  Lokalizacijski CI/CD kontinuirano provjerava višejezični sadržaj kako bi se nedostajuća sredstva, pokvareni linkovi i regresije pristupačnosti otkrili rano.
topics:
  - continuous-localization
  - qa
  - ci-cd
---
# Lokalizacija CI i CD

## Sažetak

Lokalizacijski CI/CD kontinuirano provjerava višejezični sadržaj kako bi se nedostajuća sredstva, pokvareni linkovi i regresije pristupačnosti otkrili rano.

## Željene provjere

- dosljednost popisa lokaliteta
- svježe generisanje web-mjesta prije pregleda pariteta
- provjera linkova
- generisanje članaka i stranica
- provjera pravopisa gdje je dostupna
- paritet rezervisanih mjesta
- osnovni testovi pristupačnosti
- provjere pokrivenosti snimaka ekrana i dijagrama

## Pravilo svježeg generisanja

Tokovi lokalizacijskog CI-ja i pregleda ne smiju zasnivati nalaze o paritetu na zastarjelim generisanim artefaktima.

Potreban redoslijed:

1. generišite web-mjesto iz trenutnog stanja repozitorija
2. pokrenite validatore nad svježe generisanim izlazom
3. po potrebi pregledajte generisani HTML
4. po potrebi pregledajte renderovani izlaz

Ovo je važno zato što izvorni Markdown, generisani HTML, objavljeni izlaz i ponašanje renderovano u pregledniku mogu privremeno odstupati tokom razvoja.

## Prioritet pregleda

Najstroži pregled na maternjem jeziku i pregled pariteta prvo primijenite na:

- novokreirani sadržaj
- nedavno prošireni sadržaj
- sadržaj koji se trenutno uređuje

Zatim iste standarde pregleda postepeno proširite i na stariji lokalizirani sadržaj.

## Progresija klasa defekata

Lokalizacijski CI treba pratiti i jedno i drugo:

- `Localization Debt`
- `Open Defect Classes`

Dug mjeri preostali rad na izvornom sadržaju.

Otvorene klase defekata mjere da li sistem i dalje dopušta da se neka kategorija problema ponovo pojavi.

Čim klasa defekata dosegne nula pojavljivanja, njen validator bi se, gdje je to praktično, trebao prebaciti iz savjetodavnog u blokirajući režim rada.

Primjeri:

- objava zamjenskog nacrta
- neprevedeni sažeci
- neprevedeni metapodaci
- neprevedena tijela teksta
- objava na miješanim jezicima

CI nije samo čuvar prolaza. On je mehanizam koji sprečava da se zatvorene klase defekata tiho ponovo otvore.

## Redoslijed generisanja za navigaciju članaka

Trenutni ugovor javne navigacije članaka jeste:

- `post-article-nav`
- `related-content`
- `related-topic-nav`

Generisanje i validacija trebaju se odvijati ovim redoslijedom:

1. generišite HTML članaka
2. generišite indeksne stranice
3. pokrenite svaku preostalu naknadnu obradu navigacije samo ako je još potrebna
4. validirajte svježe generisani izlaz
5. pregledajte generisani HTML ili renderovani izlaz ako tok rada zahtijeva ljudsku procjenu pariteta

Ako validator još očekuje naslijeđeni blok `topic-nav`, ažurirajte validator na trenutni ugovor umjesto da krpite generisani HTML.

## Povezane stranice

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/bs/how-to-run-localization-qa-in-ci.md`
