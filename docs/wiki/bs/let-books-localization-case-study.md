---
title: "Studija slučaja lokalizacije Let Books"
summary: >-
  Let Books je živa studija slučaja izgradnje višejezične platforme znanja i vizije proizvoda prije nego što postoji potpuna pozadinska aplikacija.
topics:
  - let-books
  - localization
  - public-interest-technology
---
# Studija slučaja lokalizacije Let Books

## Rezime

Let Books je živa studija slučaja izgradnje višejezične platforme znanja i vizije proizvoda prije nego što postoji potpuna pozadinska aplikacija.

Centralni programski model sada se nalazi u `../localization-at-scale-program.md`. Ova stranica fokusira se na dokaze iz repozitorija koji podržavaju taj priručnik.

## Zašto je korisna

Pokazuje kako projekat može:

- rano definisati opseg lokaliteta
- držati pristupačnost usko vezanom za lokalizaciju
- koristiti pisanje prvo na engleskom bez urušavanja u objavljivanje samo na engleskom
- dokumentovati upravljanje prije nego što stigne veći obim

## Slovenski primjer AI pregleda

Repozitorij uključuje konkretan slovenski primjer pregleda u kojem je AI nacrt sačuvao opće značenje, ali je i dalje zahtijevao ispravku izvornog govornika zbog modalnosti, tečnosti i jezika registra politike.

Detaljan zapis sada se nalazi u odjeljku Nalazi pregleda izvornih govornika u `../localization-at-scale-program.md` i u `../style-guide/localization/ai-translation-review-records.md`.

Ključne lekcije:

- gramatičke greške mogu preživjeti čak i kada rečenica djeluje razumljivo
- modalnost je posebno ranjiva na doslovan prevod
- jezik politika i specifikacija proizvoda često traži domenski prikladan registar, a ne samo rječničku ekvivalenciju
- automatizovane provjere rijetko same uhvate suptilne probleme tečnosti i modalnosti

## Primjer miješanojezičnog objavljivanja

Izvorni članak: `docs/blog/sl/the-cost-of-english-only-software.md`

Ova porodica članaka pružila je konkretan primjer lokalizovanog naslova i djelimično lokalizovane ljuske koje su koegzistirale s engleskim objavnim površinama vidljivim čitaocu.

Detaljno tumačenje na nivou programa sada se nalazi u odjeljku Nalazi pregleda izvornih govornika u `../localization-at-scale-program.md` i u `../localization-audit-report.md`.

Lekcije specifične za repozitorij:

- pokrivenost nije isto što i potpunost
- izvorni metapodaci su važni jer sažeci mogu procuriti na objavne površine
- lokalizacija taksonomije je važna jer su engleske oznake tema čitaocu vidljivi nedostaci
- generisani HTML treba validirati, a ne mu slijepo vjerovati

## Ponovo upotrebljivi referentni primjeri za benchmarking

Strukturirane primjere pregleda treba čuvati i kao ponovo upotrebljive referentne primjere za benchmarking kako bi buduća LLM evaluacija mogla mjeriti:

- gramatičku pouzdanost
- rukovanje modalnošću
- terminološku preciznost
- tačnost registra politike
- kvalitet bilježenja obrazloženja recenzenta

## Povezane stranice

- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `let-books-localization-architecture.md`
- `let-books-localization-lessons-learned.md`
- `../blog/en/why-every-language-matters.md`
