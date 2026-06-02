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
- validacija veze
- generiranje članaka i stranica
- provjera pravopisa gdje je dostupna
- paritet čuvara mjesta
- ispitivanje dima pristupačnosti
- provjere pokrivenosti ekrana i dijagrama

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

Generiranje i validacija treba da se odvijaju ovim redosledom:

1. generisati članak HTML
2. generirati indeksne stranice
3. pokrenite preostalu naknadnu obradu navigacije samo ako je i dalje potrebno
4. validirati izlaz

Ako validator i dalje očekuje naslijeđeni blok `topic-nav`, ažurirajte validator na trenutni ugovor umjesto zakrpanja generisanog HTML.

## Povezane stranice

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/bs/how-to-run-localization-qa-in-ci.md`