---
title: "Lokalizacija CI i CD"
summary: >-
  Lokalizacija CI/CD kontinuirano potvrđuje višejezični sadržaj tako da se nedostajuća sredstva, pokvarene veze i regresije pristupačnosti rano uočavaju.
topics:
  - continuous-localization
  - qa
  - ci-cd
---
# Lokalizacija CI i CD

## Rezime

Lokalizacija CI/CD kontinuirano potvrđuje višejezični sadržaj tako da se nedostajuća sredstva, pokvarene veze i regresije pristupačnosti rano uočavaju.

## Željeni čekovi

- doslednost inventara lokaliteta
- sveže generisanje sajta pre pregleda pariteta
- validacija veze
- generisanje članaka i stranica
- provera pravopisa tamo gde je dostupno
- paritet čuvara mesta
- ispitivanje dima pristupačnosti
- provere snimaka ekrana i dijagrama

## Pravilo svežeg generisanja

CI i tokovi pregleda lokalizacije ne smeju da zasnivaju nalaze o paritetu na zastarelim generisanim artefaktima.

Obavezni redosled:

1. generišite sajt iz trenutnog stanja repozitorijuma
2. pokrenite validatore nad sveže generisanim izlazom
3. po potrebi pregledajte generisani HTML
4. po potrebi pregledajte prikazani izlaz

Ovo je važno zato što izvorni Markdown, generisani HTML, objavljeni izlaz i ponašanje prikazano u pregledaču mogu privremeno da se raziđu tokom razvoja.

## Progresija klase defekata

CI lokalizacije treba da prati oba:

- `Localization Debt`
- `Open Defect Classes`

Mjeri duga preostali rad sa izvornim sadržajem.

Otvorene klase defekata mere da li sistem još uvek može da dozvoli da se kategorija problema ponovo pojavi.

Čim klasa defekta dostigne nula pojavljivanja, njen validator bi trebalo da pređe sa savetodavnog na blokiranje gde je to praktično.

Primeri:

- objavljivanje nacrta za čuvare mesta
- neprevedeni rezimei
- neprevedeni metapodaci
- neprevedena tela
- izdavaštvo na mešovitom jeziku

CI nije samo čuvar kapije. To je mehanizam koji sprečava da se zatvorene klase defekata ponovo tiho otvaraju.

## Redosled generisanja za navigaciju po članku

Trenutni ugovor o javnoj navigaciji članaka je:

- `post-article-nav`
- `related-content`
- `related-topic-nav`

Generisanje i validacija treba da se odvijaju ovim redosledom:

1. generišite HTML članka
2. generišite indeksne stranice
3. pokrenite preostalu naknadnu obradu navigacije samo ako je i dalje potrebna
4. validirajte sveže generisani izlaz
5. pregledajte generisani HTML ili prikazani izlaz ako tok rada zahteva ljudsku procenu pariteta

Ako validator i dalje očekuje zastareli blok `topic-nav`, ažurirajte validator na trenutni ugovor umesto zakrpanja generisanog HTML.

## Povezane stranice

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/sr-Latn/how-to-run-localization-qa-in-ci.md`
