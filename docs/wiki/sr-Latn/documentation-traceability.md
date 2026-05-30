---
title: "Sledljivost dokumentacije"
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Sledljivost dokumentacije

## Sažetak

Sledljivost dokumentacije je praksa u kojoj se važne tvrdnje, opisi tokova rada i očekivanja kvaliteta mogu pratiti nazad do stabilnih dokaza u repozitorijumu i eksplicitnih odluka.

## Zašto je važna

Bez sledljivosti dokumentaciji je teško verovati.

Čitaoci ne mogu pouzdano da znaju:

- da li je tvrdnja aktuelna
- da li je ponašanje namerno
- da li tvrdnja potiče iz proizvodne specifikacije ili iz slučajnosti implementacije
- da li javni članak odražava odobreni smer proizvoda

## Kako sledljivost izgleda

Dobra sledljivost obično uključuje:

- poznat lanac autoriteta
- stabilne reference na relevantne dokumente ili specifikacije
- jasno razdvajanje trenutnog stanja i budućih planova
- eksplicitnu razliku između kanonske dokumentacije i statusa implementacije
- beleške o izvorima ili mape dokaza za značajnije javne članke

## Jednostavan model autoriteta

Koristan model je:

1. proizvodna specifikacija
2. implementaciona uputstva
3. dokumentacija trenutnog stanja
4. demo ili ponašanje implementacije
5. testovi i rezultati validacije

## Kontekst Let Books

Repozitorijum Let Books već podržava sledljivost kroz:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- `docs/README.md`
- `docs/blog/README.md`
- `docs/sources/README.md`
- mape izvora u `docs/sources/`
