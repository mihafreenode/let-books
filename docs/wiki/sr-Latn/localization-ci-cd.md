---
title: "Lokalizacija CI i CD"
summary: >-
  Lokalizacioni CI/CD kontinuirano proverava višejezični sadržaj kako bi se nedostajuća sredstva, pokvareni linkovi i regresije pristupačnosti otkrili rano.
topics:
  - continuous-localization
  - qa
  - ci-cd
---
# Lokalizacija CI i CD

## Rezime

Lokalizacioni CI/CD kontinuirano proverava višejezični sadržaj kako bi se nedostajuća sredstva, pokvareni linkovi i regresije pristupačnosti otkrili rano.

## Željene provere

- doslednost popisa lokaliteta
- sveže generisanje sajta pre pregleda pariteta
- provera linkova
- generisanje članaka i stranica
- provera pravopisa gde je dostupna
- paritet rezervisanih mesta
- osnovni testovi pristupačnosti
- provere pokrivenosti snimaka ekrana i dijagrama

## Pravilo svežeg generisanja

Tokovi lokalizacionog CI-ja i pregleda ne smeju da zasnivaju nalaze o paritetu na zastarelim generisanim artefaktima.

Potreban redosled:

1. generišite sajt iz trenutnog stanja repozitorijuma
2. pokrenite validatore nad sveže generisanim izlazom
3. po potrebi pregledajte generisani HTML
4. po potrebi pregledajte renderovani izlaz

Ovo je važno zato što izvorni Markdown, generisani HTML, objavljeni izlaz i ponašanje renderovano u pregledaču mogu privremeno da odstupaju tokom razvoja.

## Prioritet pregleda

Najstroži pregled na maternjem jeziku i pregled pariteta prvo primenite na:

- novokreirani sadržaj
- nedavno prošireni sadržaj
- sadržaj koji se trenutno uređuje

Zatim iste standarde pregleda postepeno proširite i na stariji lokalizovani sadržaj.

## Progresija klasa defekata

Lokalizacioni CI treba da prati i jedno i drugo:

- `Localization Debt`
- `Open Defect Classes`

Dug meri preostali rad na izvornom sadržaju.

Otvorene klase defekata mere da li sistem i dalje dozvoljava da se neka kategorija problema ponovo pojavi.

Čim klasa defekata dostigne nula pojavljivanja, njen validator bi, gde je to praktično, trebalo da pređe iz savetodavnog u blokirajući režim rada.

Primeri:

- objavljivanje zamenskog nacrta
- neprevedeni rezimei
- neprevedeni metapodaci
- neprevedena tela teksta
- objavljivanje na mešovitim jezicima

CI nije samo čuvar prolaza. On je mehanizam koji sprečava da se zatvorene klase defekata tiho ponovo otvore.

## Redosled generisanja za navigaciju članaka

Trenutni ugovor javne navigacije članaka je:

- `post-article-nav`
- `related-content`
- `related-topic-nav`

Generisanje i validacija treba da se odvijaju ovim redosledom:

1. generišite HTML članaka
2. generišite indeksne stranice
3. pokrenite svaku preostalu naknadnu obradu navigacije samo ako je i dalje potrebna
4. validirajte sveže generisani izlaz
5. pregledajte generisani HTML ili renderovani izlaz ako tok rada zahteva ljudsku procenu pariteta

Ako validator i dalje očekuje nasleđeni blok `topic-nav`, ažurirajte validator na trenutni ugovor umesto da krpite generisani HTML.

## Povezane stranice

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/sr-Latn/how-to-run-localization-qa-in-ci.md`
