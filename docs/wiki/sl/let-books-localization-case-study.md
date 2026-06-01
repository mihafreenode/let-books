---
title: "Študija primera lokalizacije Let Books"
summary: >-
  Let Books je živa študija primera gradnje večjezične platforme znanja in vizije izdelka, še preden obstaja polna zaledna aplikacija.
topics:
  - let-books
  - localization
  - public-interest-technology
---
# Študija primera lokalizacije Let Books

## Povzetek

Let Books je živa študija primera gradnje večjezične platforme znanja in vizije izdelka, še preden obstaja polna zaledna aplikacija.

Osrednji programski model je zdaj opisan v `../localization-at-scale-program.md`. Ta stran se osredotoča na dokaze iz repozitorija, ki podpirajo ta priročnik.

## Zakaj je to koristno

Prikazuje, kako lahko projekt:

- zgodaj določi obseg jezikovnih različic
- ohranja dostopnost tesno povezano z lokalizacijo
- uporablja pisanje najprej v angleščini, ne da bi zdrsnil v objavljanje samo v angleščini
- dokumentira upravljanje, še preden pride obseg

## Slovenski primer AI-pregleda

Repozitorij vsebuje konkreten slovenski pregledni primer, v katerem je osnutek AI ohranil splošni pomen, vendar je še vedno zahteval popravek naravnega govorca zaradi modalnosti, tekočnosti in jezika pravilniškega registra.

Podroben zapis je zdaj v razdelku z ugotovitvami pregledov naravnih govorcev v `../localization-at-scale-program.md` in v `../style-guide/localization/ai-translation-review-records.md`.

Ključne lekcije:

- slovnične napake lahko preživijo, tudi kadar se stavek zdi razumljiv
- modalnost je še posebej ranljiva za dobesedni prevod
- jezik pravilnikov in specifikacij izdelka pogosto potrebuje domensko ustrezen register, ne le slovarsko enakovrednost
- avtomatizirana preverjanja redko sama ujamejo subtilne težave s tekočnostjo in modalnostjo

## Primer mešanojezičnega objavljanja

Izvorni članek: `docs/blog/sl/the-cost-of-english-only-software.md`

Ta družina člankov je ponudila konkreten primer, kjer sta lokaliziran naslov in delno lokalizirana lupina sobivala z angleškimi objavnimi površinami, vidnimi bralcem.

Podrobna razlaga na ravni programa je zdaj v razdelku z ugotovitvami pregledov naravnih govorcev v `../localization-at-scale-program.md` in v `../localization-audit-report.md`.

Lekcije, značilne za repozitorij:

- pokritost ni isto kot popolnost
- izvorni metapodatki so pomembni, ker lahko povzetki uidejo na objavne površine
- lokalizacija taksonomije je pomembna, ker so angleške tematske oznake bralcem vidne napake
- ustvarjeni HTML je treba validirati in mu ne smemo slepo zaupati

## Ponovno uporabni referenčni primeri za primerjalno vrednotenje

Strukturirane primere pregledov je treba hraniti tudi kot ponovno uporabne referenčne primere za primerjalno vrednotenje, da lahko prihodnje vrednotenje LLM meri:

- slovnično zanesljivost
- obravnavo modalnosti
- terminološko natančnost
- natančnost pravilniškega registra
- kakovost zajema utemeljitev pregledovalca

## Sorodne strani

- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `let-books-localization-architecture.md`
- `let-books-localization-lessons-learned.md`
- `../blog/en/why-every-language-matters.md`
