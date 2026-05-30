---
title: "Sljedivost Dokumentacije"
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Sljedivost Dokumentacije

## Sažetak

Sljedivost dokumentacije je praksa u kojoj se važne tvrdnje, opisi tokova rada i očekivanja kvaliteta mogu pratiti nazad do stabilnih dokaza u repozitoriju i eksplicitnih odluka.

## Zašto je važna

Bez sljedivosti dokumentaciji je teško vjerovati.

Čitaoci ne mogu pouzdano znati:

- da li je tvrdnja aktuelna
- da li je ponašanje namjerno
- dolazi li tvrdnja iz proizvodne specifikacije ili iz slučajnosti implementacije
- odražava li javni članak odobreni smjer proizvoda

## Kako sljedivost izgleda

Dobra sljedivost obično uključuje:

- poznat lanac autoriteta
- stabilne reference na relevantne dokumente ili specifikacije
- jasno razdvajanje trenutnog stanja i budućih planova
- eksplicitnu razliku između kanonske dokumentacije i statusa implementacije
- bilješke o izvorima ili mape dokaza za značajnije javne članke

## Jednostavan model autoriteta

Koristan model je:

1. proizvodna specifikacija
2. implementacijske smjernice
3. dokumentacija trenutnog stanja
4. demo ili ponašanje implementacije
5. testovi i rezultati validacije

## Kontekst Let Books

Repozitorij Let Books već podržava sljedivost kroz:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- `docs/README.md`
- `docs/blog/README.md`
- `docs/sources/README.md`
- mape izvora u `docs/sources/`
