---
title: "Proizvodna Specifikacija"
topics:
  - product-specification
  - spec-writing
  - spec-driven-development
---
# Proizvodna Specifikacija

## Sažetak

Proizvodna specifikacija definiše čemu proizvod služi, šta mora da radi, koje granice mora da poštuje i koji se ishodi smatraju uspehom.

## Uloga

Proizvodna specifikacija je najviši praktični opis željenog ponašanja proizvoda.

Treba da odgovori na pitanja kao što su:

- zašto proizvod postoji
- kome je namenjen
- koji su tokovi rada prvoklasni
- šta mora da radi i u uslovima kvara
- šta je izričito van obima
- koji kriterijumi prihvatanja definišu smislen demo ili izdanje

## Šta pripada proizvodnoj specifikaciji

Tipičan sadržaj uključuje:

- svrhu proizvoda
- osnovnu filozofiju
- domenski model
- definicije tokova rada
- očekivanja privatnosti i bezbednosti
- neciljeve
- smernice redosleda implementacije kada utiču na obim ili redosled isporuke
- kriterijume prihvatanja

Specifikacija treba da se fokusira na proizvodnu istinu, a ne na svaki lokalni detalj implementacije.

## Šta tamo obično ne pripada

To obično pripada drugde, osim ako direktno ne utiče na obaveze proizvoda:

- privremene konvencije repozitorijuma
- lokalno podešavanje alata
- uske odluke o vizuelnom poliranju
- jednokratna uputstva za otklanjanje grešaka
- uredničke ili objavne mehanike koje ne menjaju model proizvoda

## Kontekst Let Books

U Let Books `AGENTS.md` je glavna proizvodna specifikacija.

Definiše:

- svrhu projekta
- domenski i tokovni model
- smer višezakupničkog dizajna i lokalizacije
- načela ručnog toka rada i opcionosti AI-ja
- kriterijume prihvatanja za prvi demo
