---
title: "Studija slučaja lokalizacije Let Books"
summary: >-
  Let Books je živa studija slučaja izgradnje višejezične platforme znanja i vizije proizvoda pre nego što postoji potpuna pozadinska aplikacija.
topics:
  - let-books
  - localization
  - public-interest-technology
---
# Studija slučaja lokalizacije Let Books

## Rezime

Let Books je živa studija slučaja izgradnje višejezične platforme znanja i vizije proizvoda pre nego što postoji potpuna pozadinska aplikacija.

Centralni programski model sada se nalazi u `../localization-at-scale-program.md`. Ova stranica fokusira se na dokaze iz repozitorijuma koji podržavaju taj priručnik.

## Zašto je korisna

Pokazuje kako projekat može:

- rano definisati opseg lokala
- držati pristupačnost usko vezanom za lokalizaciju
- koristiti pisanje prvo na engleskom bez urušavanja u objavljivanje samo na engleskom
- dokumentovati upravljanje pre nego što stigne veći obim

## Slovenački primer AI pregleda

Repozitorijum uključuje konkretan slovenački primer pregleda u kojem je AI nacrt sačuvao opšte značenje, ali je i dalje zahtevao ispravku izvornog govornika zbog modalnosti, tečnosti i jezika registra politike.

Detaljan zapis sada se nalazi u odeljku Nalazi pregleda izvornih govornika u `../localization-at-scale-program.md` i u `../style-guide/localization/ai-translation-review-records.md`.

Ključne lekcije:

- gramatičke greške mogu preživeti čak i kada rečenica deluje razumljivo
- modalnost je posebno ranjiva na doslovan prevod
- jezik politika i specifikacija proizvoda često traži domenski prikladan registar, a ne samo rečničku ekvivalenciju
- automatizovane provere retko same uhvate suptilne probleme tečnosti i modalnosti

## Primer mešanojezičnog objavljivanja

Izvorni članak: `docs/blog/sl/the-cost-of-english-only-software.md`

Ova porodica članaka pružila je konkretan primer lokalizovanog naslova i delimično lokalizovane ljušture koje su koegzistirale sa engleskim objavnim površinama vidljivim čitaocu.

Detaljno tumačenje na nivou programa sada se nalazi u odeljku Nalazi pregleda izvornih govornika u `../localization-at-scale-program.md` i u `../localization-audit-report.md`.

Lekcije specifične za repozitorijum:

- pokrivenost nije isto što i potpunost
- izvorni metapodaci su važni jer sažeci mogu procureti na objavne površine
- lokalizacija taksonomije je važna jer su engleske oznake tema čitaocu vidljivi nedostaci
- generisani HTML treba validirati, a ne mu slepo verovati

## Ponovo upotrebljivi referentni primeri za benchmarking

Strukturirane primere pregleda treba čuvati i kao ponovo upotrebljive referentne primere za benchmarking kako bi buduća LLM evaluacija mogla da meri:

- gramatičku pouzdanost
- rukovanje modalnošću
- terminološku preciznost
- tačnost registra politike
- kvalitet beleženja obrazloženja recenzenta

## Povezane stranice

- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `let-books-localization-architecture.md`
- `let-books-localization-lessons-learned.md`
- `../blog/en/why-every-language-matters.md`
