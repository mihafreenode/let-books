---
title: "Kako Postupno Dodavati Validacijska Pravila I CI Vrata"
topics:
  - validation
  - ci-cd
  - spec-driven-development
---
# Kako Postupno Dodavati Validacijska Pravila I CI Vrata

## Sažetak

Ovaj vodič opisuje kako postupno uvoditi validacijska pravila i CI provjere bez preopterećenja tima odjednom.

## Model zrelosti

1. ručni kontrolni spisak
2. lagane lokalne provjere
3. vidljivost u CI-u
4. obavezna CI vrata

## Šta prvo automatizirati

- prisutnost obaveznih datoteka
- potpunost lokalizacije
- valjanost sintakse
- interne poveznice
- jasna urednička pravila

## Šta ne zatvarati prerano

- nestabilne stilske procjene
- višejezični pravopis bez stabilnih rječnika
- vizualne usporedbe koje još nisu zrele

## Praktično pravilo

Najprije dokumentiraj pravilo. Zatim ga provjeravaj lokalno. Potom ga učini vidljivim u CI-u. Tek kada je stabilno i razumljivo, neka postane obavezno.
