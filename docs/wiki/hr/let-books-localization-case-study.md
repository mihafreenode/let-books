---
title: "Studija slučaja lokalizacije Let Books"
summary: >-
  Let Books je živa studija slučaja izgradnje višejezične platforme znanja i vizije proizvoda prije nego što postoji puna pozadinska aplikacija.
topics:
  - let-books
  - localization
  - public-interest-technology
---
# Studija slučaja lokalizacije Let Books

## Sažetak

Let Books je živa studija slučaja izgradnje višejezične platforme znanja i vizije proizvoda prije nego što postoji puna pozadinska aplikacija.

Središnji programski model sada se nalazi u `../localization-at-scale-program.md`. Ova se stranica usredotočuje na dokaze iz repozitorija koji podupiru taj priručnik.

## Zašto je korisna

Pokazuje kako projekt može:

- rano definirati opseg lokaliteta
- držati pristupačnost usko povezanom s lokalizacijom
- koristiti pisanje najprije na engleskom bez urušavanja u objavljivanje samo na engleskom
- dokumentirati upravljanje prije nego što stigne veći opseg

## Slovenski primjer AI pregleda

Repozitorij uključuje konkretan slovenski primjer pregleda u kojem je AI nacrt sačuvao opće značenje, ali je i dalje zahtijevao ispravak izvornog govornika zbog modalnosti, tečnosti i jezika registra politike.

Detaljan zapis sada se nalazi u odjeljku Nalazi pregleda izvornih govornika u `../localization-at-scale-program.md` i u `../style-guide/localization/ai-translation-review-records.md`.

Ključne lekcije:

- gramatičke pogreške mogu preživjeti čak i kada se rečenica čini razumljivom
- modalnost je posebno ranjiva na doslovan prijevod
- jezik politika i specifikacija proizvoda često traži domenski prikladan registar, a ne samo rječničku ekvivalenciju
- automatizirane provjere rijetko same uhvate suptilne probleme tečnosti i modalnosti

## Primjer miješanojezičnog objavljivanja

Izvorni članak: `docs/blog/sl/the-cost-of-english-only-software.md`

Ova obitelj članaka pružila je konkretan primjer lokaliziranog naslova i djelomično lokalizirane ljuske koje su koegzistirale s engleskim objavnim površinama vidljivima čitatelju.

Detaljno tumačenje na razini programa sada se nalazi u odjeljku Nalazi pregleda izvornih govornika u `../localization-at-scale-program.md` i u `../localization-audit-report.md`.

Lekcije specifične za repozitorij:

- pokrivenost nije isto što i potpunost
- izvorni metapodaci važni su jer sažeci mogu procuriti na objavne površine
- lokalizacija taksonomije važna je jer su engleske oznake tema čitatelju vidljivi nedostaci
- generirani HTML treba validirati, a ne mu slijepo vjerovati

## Ponovno upotrebljivi referentni primjeri za benchmarking

Strukturirane primjere pregleda treba pohranjivati i kao ponovno upotrebljive referentne primjere za benchmarking kako bi buduća LLM evaluacija mogla mjeriti:

- gramatičku pouzdanost
- rukovanje modalnošću
- terminološku preciznost
- točnost registra politike
- kvalitetu bilježenja obrazloženja pregledavatelja

## Povezane stranice

- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `let-books-localization-architecture.md`
- `let-books-localization-lessons-learned.md`
- `../blog/en/why-every-language-matters.md`
