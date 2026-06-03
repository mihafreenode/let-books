---
title: "Osiguranje kvaliteta prijevoda"
summary: >-
  QA prijevoda kombinuje automatsku validaciju, provjeru pravopisa, pregled terminologije, provjere pristupačnosti i ljudsko prosuđivanje.
topics:
  - translation-quality
  - qa
  - localization
---
# Osiguranje kvaliteta prijevoda

## Sažetak

QA prijevoda kombinuje automatsku validaciju, provjeru pravopisa, pregled terminologije, provjere pristupačnosti i ljudsko prosuđivanje.

## Uobičajene provjere

- nedostaju prijevodi
- Englesko curenje
- potpunost lokalizacije okrenute čitatelju
- nepodudaranja čuvara mjesta
- pokvarene veze
- glosar drift
- pokrivenost teksta pristupačnosti
- paritet snimka ekrana i dijagrama

## Validator lokalizacije okrenut čitaču

Jedna klasa validatora bi trebala eksplicitno otkazati CI kada se stranica čini lokaliziranom, ali još uvijek izlaže sadržaj na izvornom jeziku okrenut čitaču.

Primjeri koji bi trebali propasti:

- lokalizirani naslov sa sažetkom na engleskom
- lokalizirani članak s engleskim oznakama
- lokalizirani članak s engleskim naslovima ili listama
- lokalizirani članak s engleskim oblačićima ili natpisima
- lokalizirani članak s engleskim oznakama dijagrama ili zamjenskim tekstom
- kartice povezane sa sadržajem na mješovitim jezicima

Ovo je kvar, a ne samo upozorenje, jer čitaoci doživljavaju takve stranice kao vidljivo nedovršene.

## Revizija klase defekata

QA prijevoda bi trebao održavati eksplicitne klase defekata sa:

- opis
- broj pojavljivanja
- osnovni uzrok
- pokrivenost validatorom
- rizik recidiva
- plan zatvaranja

Obavezne kategorije uključuju:

- neprevedeni sažetci
- neprevedena tijela
- Objavljivanje nacrta
- neprevedeni metapodaci
- izdavaštvo na mješovitom jeziku
- buduće otkrivene klase

Klasa se zatvara samo kada njen broj dostigne nulu i CI je spriječi da se vrati bez greške.

## Ljudski pregled dokaza

QA prijevoda također treba sačuvati kratke zapise o ljudskim pregledima za reprezentativne ispravke uz pomoć umjetne inteligencije.

Minimalni broj polja:

- originalni tekst
- ispravljen tekst
- kategorija greške
- hipoteza o osnovnom uzroku
- obrazloženje recenzenta

Recenzije izvornih govornika trebale bi biti sačuvane kao rastući korpus, a ne kao izolirane jednokratne bilješke. Ponovljeni nalazi trebali bi se vratiti u dizajn validatora, smjernice za saradnike i buduće upute AI agenta.

Prije odobrenja pregleda AI-potpomognutog prijevoda, recenzenti bi trebali:

- pregledati relevantne zapise u strukturiranom korpusu nalaza za taj jezik ili temu
- provjeriti ponavljajuće obrasce grešaka iz ljudskih pregleda
- potvrditi da trenutni nacrt prije odobrenja ponovo ne uvodi poznate probleme

Svaku prijavljenu grešku koju je uočio izvorni govornik treba također procijeniti s obzirom na:

- ispravku sadržaja
- ažuriranje smjernica za pregled
- ažuriranje terminoloških smjernica
- poboljšanje prompta
- priliku za validator
- priliku za regresijski test

Ovo je važno jer čak i kada je cjelokupno značenje očuvano, prijevodi generirani AI mogu zahtijevati pregled izvornog govornika kako bi se ispravili suptilni problemi u gramatici, modalitetu, terminologiji i registru specifičnom za domenu. Ove probleme je često teško otkriti samo pomoću automatiziranih metrika kvaliteta.

Konkretno prijavljene greške izvornih govornika nisu samo savjetodavne. Svaka od njih treba završiti ispravljena, sistematizirana, namjerno neriješena uz obrazloženje ili i dalje izričito praćena u korpusu nalaza.

## Uobičajena taksonomija grešaka u AI prijevodu

- gramatika
- modalitet
- terminologija
- registar
- tečnost
- doslovan prevod
- dvosmislenost
- gubitak konteksta
- red riječi
- kolokacija
- pismo ili pravopis
- fraziranje politike domena
- formulacije pristupačnosti

## Lagano benchmark bodovanje

Za ponovljivu evaluaciju AI-prevoda, koristite laganu rubriku 0-3 umjesto da se oslanjate samo na procjenu prošao/neuspjeo.

Preporučene dimenzije:

- tačnost značenja
- gramatika i tečnost
- terminologija i uklapanje domena
- registar i stil
- revizija napora

Preporučene oznake izdanja:

- bloker
- velika revizija
- manja revizija
- spreman sa potpisom pregleda

Ovo stvara podatke prilagođene kartici rezultata bez potrebe za teškim okvirom za mjerenje lokalizacije.

## Povezane stranice

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../../learning/bs/how-to-run-localization-qa-in-ci.md`
