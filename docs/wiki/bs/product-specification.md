---
title: "Proizvodna specifikacija"
topics:
  - product-specification
  - spec-writing
  - spec-driven-development
---
# Proizvodna specifikacija

## Sažetak

Proizvodna specifikacija definiše čemu proizvod služi, šta mora raditi, koje granice mora poštovati i koji se ishodi smatraju uspjehom.

## Uloga

Proizvodna specifikacija je najviši praktični opis željenog ponašanja proizvoda.

Treba odgovoriti na pitanja kao što su:

- zašto proizvod postoji
- kome je namijenjen
- koji su tokovi rada prvoklasni
- šta mora raditi i u uslovima kvara
- šta je izričito izvan obima
- koji kriteriji prihvatanja definišu smislen demo ili izdanje

## Šta pripada proizvodnoj specifikaciji

Tipičan sadržaj uključuje:

- svrhu proizvoda
- temeljnu filozofiju
- domenski model
- definicije tokova rada
- očekivanja privatnosti i sigurnosti
- neciljeve
- smjernice redoslijeda implementacije kada utiču na obim ili redoslijed isporuke
- kriterije prihvatanja

Specifikacija se treba fokusirati na proizvodnu istinu, a ne na svaki lokalni detalj implementacije.

## Šta tamo obično ne pripada

To obično pripada drugdje, osim ako direktno ne utiče na obaveze proizvoda:

- privremene konvencije repozitorija
- lokalno postavljanje alata
- uske odluke o vizuelnom poliranju
- jednokratne smjernice za otklanjanje grešaka
- uredničke ili objavne mehanike koje ne mijenjaju model proizvoda

## Kontekst Let Books

U Let Books `AGENTS.md` je glavna proizvodna specifikacija.

Definiše:

- svrhu projekta
- domenski i tokovni model
- smjer višezakupničkog dizajna i lokalizacije
- načela ručnog toka rada i opcionalnosti AI-ja
- kriterije prihvatanja za prvi demo
