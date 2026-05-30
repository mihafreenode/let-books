---
title: "Kako postopno dodajati validacijska pravila in CI vrata"
topics:
  - validation
  - ci-cd
  - spec-driven-development
---
# Kako postopno dodajati validacijska pravila in CI vrata

## Povzetek

Ta vodič opisuje, kako postopno uvajati validacijska pravila in preverjanja v CI, ne da bi ekipo hkrati preobremenili.

## Zrelostni model

1. ročni kontrolni seznam
2. lahka lokalna preverjanja
3. vidnost v CI
4. obvezna vrata v CI

## Kaj avtomatizirati najprej

- prisotnost zahtevanih datotek
- popolnost lokalizacije
- veljavnost sintakse
- notranje povezave
- jasna uredniška pravila

## Česa ne zapreti prezgodaj

- nestabilne slogovne presoje
- večjezično črkovanje brez ustaljenih slovarjev
- vizualne primerjave, ki še niso zrele

## Praktično pravilo

Najprej dokumentiraj pravilo. Nato ga preverjaj lokalno. Nato ga naredi vidnega v CI. Šele ko je stabilno in razumljeno, naj postane obvezno.
