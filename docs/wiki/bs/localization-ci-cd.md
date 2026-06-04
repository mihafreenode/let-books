---
title: "Lokalizacija CI i CD"
summary: >-
  Lokalizacija CI/CD kontinuirano potvrđuje višejezični sadržaj tako da se nedostajuća sredstva, neispravne veze i regresije pristupačnosti rano otkriju.
topics:
  - continuous-localization
  - qa
  - ci-cd
---
# Lokalizacija CI i CD

## Sažetak

Lokalizacija CI/CD kontinuirano potvrđuje višejezični sadržaj tako da se nedostajuća sredstva, neispravne veze i regresije pristupačnosti rano otkriju.

## Željene provjere

- konzistentnost inventara lokaliteta
- svježe generisanje stranice prije pregleda pariteta
- validacija veze
- generiranje članaka i stranica
- provjera pravopisa gdje je dostupna
- paritet čuvara mjesta
- ispitivanje dima pristupačnosti
- provjere pokrivenosti ekrana i dijagrama

## Pravilo svježeg generisanja

Tokovi lokalizacijskog CI-ja i pregleda ne smiju zasnivati nalaze o paritetu na zastarjelim generisanim artefaktima.

Obavezni redoslijed:

1. generišite stranicu iz trenutnog stanja repozitorija
2. pokrenite validatore nad svježe generisanim izlazom
3. po potrebi pregledajte generisani HTML
4. po potrebi pregledajte prikazani izlaz

Ovo je važno zato što se izvorni Markdown, generisani HTML, objavljeni izlaz i ponašanje prikazano u pregledniku mogu privremeno razići tokom razvoja.

## Progresija klase defekata

Lokalizacijski CI bi trebao pratiti oba:

- `Localization Debt`
- `Open Defect Classes`

Mjeri duga preostali rad sa izvornim sadržajem.

Otvorene klase defekata mjere da li sistem i dalje može dozvoliti da se kategorija problema ponovo pojavi.

Čim klasa defekata dostigne nula pojavljivanja, njen validator bi trebao preći sa savjetodavnog na blokirajući gdje je to praktično.

primjeri:

- Objavljivanje nacrta
- neprevedeni sažetci
- neprevedeni metapodaci
- neprevedena tijela
- izdavaštvo na mješovitom jeziku

CI nije samo vratar. To je mehanizam koji sprečava da se zatvorene klase defekata ponovo tiho otvaraju.

## Redoslijed generiranja za navigaciju članaka

Trenutni ugovor o javnoj navigaciji članaka je:

- `post-article-nav`
- `related-content`
- `related-topic-nav`

Generisanje i validacija treba da se odvijaju ovim redoslijedom:

1. generišite HTML članka
2. generišite indeksne stranice
3. pokrenite preostalu naknadnu obradu navigacije samo ako je i dalje potrebna
4. validirajte svježe generisani izlaz
5. pregledajte generisani HTML ili prikazani izlaz ako tok rada zahtijeva ljudsku procjenu pariteta

Ako validator i dalje očekuje naslijeđeni blok `topic-nav`, ažurirajte validator na trenutni ugovor umjesto zakrpanja generisanog HTML.

## Povezane stranice

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/bs/how-to-run-localization-qa-in-ci.md`
