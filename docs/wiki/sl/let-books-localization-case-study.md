---
title: "Let Books Študija primera lokalizacije"
summary: >-
  Let Books je živa študija primera pri izgradnji večjezične platforme znanja in vizije izdelka, preden obstaja popolna zaledna aplikacija.
topics:
  - let-books
  - localization
  - public-interest-technology
---
# Let Books Študija primera lokalizacije

## Povzetek

Let Books je živa študija primera pri izgradnji večjezične platforme znanja in vizije izdelka, preden obstaja popolna zaledna aplikacija.

Osrednji programski model zdaj živi v `../localization-at-scale-program.md`. Ta stran se osredotoča na dokaze, specifične za skladišča, ki podpirajo ta priročnik.

## Zakaj je koristno

Prikazuje, kako lahko projekt:

- zgodaj določite obseg lokalne nastavitve
- naj bo dostopnost povezana z lokalizacijo
- uporabite prvotno avtorstvo v angleščini, ne da bi padli v objavljanje samo v angleščini
- dokumentirajte vodenje pred prihodom tehtnice

## Slovenski AI-review primer

Repozitorij vključuje konkreten primer slovenskega pregleda, kjer je osnutek AI ohranil širok pomen, vendar je še vedno zahteval popravke maternega govorca glede modalnosti, tekočnosti in besedila v registru pravilnika.

Podroben zapis je zdaj v razdelku Ugotovitve pregleda naravnih govorcev v `../localization-at-scale-program.md` in v `../../style-guide/localization/ai-translation-review-records.md`.

Ključne lekcije:

- slovnične napake lahko preživijo tudi, ko se stavek zdi razumljiv
- modalnost je še posebej občutljiva na dobesedni prevod
- jezik pravilnika in specifikacije izdelka pogosto potrebuje register, specifičen za domeno, namesto enakovrednosti na ravni slovarja
- avtomatizirana preverjanja redko sama odkrijejo subtilne težave s tekočnostjo in modalnostjo

## Primer objavljanja v mešanih jezikih

Izvorni članek: `docs/blog/sl/the-cost-of-english-only-software.md`

Ta družina člankov je zagotovila konkreten primer lokaliziranega naslova in delno lokalizirane lupine, ki sobivata z angleškimi površinami publikacij, obrnjenimi k bralcu.

Podrobna razlaga na ravni programa je zdaj v razdelku Ugotovitve pregleda naravnih govorcev v `../localization-at-scale-program.md` in v `../localization-audit-report.md`.

Lekcije, specifične za skladišče:

- pokritost ni isto kot popolnost
- izvorni metapodatki so pomembni, ker lahko povzetki uhajajo na površine objave
- lokalizacija taksonomije je pomembna, ker so oznake tem v angleškem jeziku vidne napake, s katerimi se sooča bralec
- ustvarjene HTML je treba potrditi, ne pa jim slepo zaupati

## Primeri meril uspešnosti za večkratno uporabo

Primere strukturiranih pregledov je treba shraniti tudi kot primere primerjalnih vrednosti za večkratno uporabo, tako da lahko prihodnje vrednotenje LLM meri:

- slovnična zanesljivost
- ravnanje z načini
- terminološka natančnost
- natančnost registra politik
- kakovost zajema utemeljitve recenzentov

## Sorodne strani

- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `let-books-localization-architecture.md`
- `let-books-localization-lessons-learned.md`
- `../../blog/sl/why-every-language-matters.md`