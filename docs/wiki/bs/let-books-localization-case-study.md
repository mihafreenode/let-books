---
title: "Let Books Studija slučaja lokalizacije"
summary: >-
  Let Books je živa studija slučaja u izgradnji višejezične platforme znanja i vizije proizvoda prije nego što postoji potpuna pozadinska aplikacija.
topics:
  - let-books
  - localization
  - public-interest-technology
---
# Let Books Studija slučaja lokalizacije

## Sažetak

Let Books je živa studija slučaja u izgradnji višejezične platforme znanja i vizije proizvoda prije nego što postoji potpuna pozadinska aplikacija.

Centralni programski model sada živi u `../localization-at-scale-program.md`. Ova stranica se fokusira na dokaze specifične za spremište koji podržavaju taj priručnik.

## Zašto je korisno

Pokazuje kako projekat može:

- rano definirati opseg lokalizacije
- držati dostupnost vezanu za lokalizaciju
- koristite prvo pisanje na engleskom bez urušavanja u izdavanje samo na engleskom
- upravljanje dokumentima prije nego što vaga stigne

## Slovenački primjer AI-recenzije

Repozitorijum uključuje konkretan slovenački primer recenzije gde je AI nacrt sačuvao široko značenje, ali je i dalje zahtevao korekciju izvornog govornika zbog modaliteta, tečnosti i formulacije u registru politike.

Detaljan zapis sada se nalazi u odjeljku Nalaza revizije izvornih govornika u `../localization-at-scale-program.md` i u `../../style-guide/localization/ai-translation-review-records.md`.

Ključne lekcije:

- gramatičke greške mogu opstati čak i kada se rečenica čini razumljivom
- modalitet je posebno osjetljiv na doslovni prijevod
- jeziku politike i specifikacije proizvoda često je potreban registar specifičan za domen, a ne ekvivalentnost na nivou rječnika
- automatizirane provjere rijetko same otkrivaju suptilne probleme tečnosti i modaliteta

## Primjer objavljivanja na mješovitom jeziku

Izvorni članak: `docs/blog/bs/the-cost-of-english-only-software.md`

Ova porodica članaka pružila je konkretan primjer lokaliziranog naslova i djelomične lokalizirane ljuske koji koegzistiraju s engleskim stranicama za publikacije okrenute čitatelju.

Detaljno tumačenje na nivou programa sada se nalazi u odeljku o nalazima pregleda izvornih govornika u `../localization-at-scale-program.md` i u `../localization-audit-report.md`.

Lekcije specifične za spremište:

- pokrivenost nije isto što i potpunost
- izvorni metapodaci su važni jer sažetci mogu procuriti na površine publikacija
- lokalizacija taksonomije je bitna jer su oznake tema na engleskom vidljive nedostatke okrenute čitaocu
- generisani HTML treba potvrditi, a ne verovati slepo

## Primeri za višekratnu upotrebu

Strukturirani primjeri pregleda također bi trebali biti pohranjeni kao višekratni referentni primjeri kako bi buduća LLM evaluacija mogla mjeriti:

- gramatička pouzdanost
- rukovanje modalitetima
- preciznost terminologije
- tačnost registra politike
- kvalitet hvatanja obrazloženja recenzenta

## Povezane stranice

- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `let-books-localization-architecture.md`
- `let-books-localization-lessons-learned.md`
- `../../blog/bs/why-every-language-matters.md`