---
title: "Proizvodna specifikacija"
topics:
  - product-specification
  - spec-writing
  - spec-driven-development
---
# Proizvodna specifikacija

## Sažetak

Proizvodna specifikacija definira čemu proizvod služi, što mora raditi, koje granice mora poštovati i koji se ishodi smatraju uspjehom.

## Uloga

Proizvodna specifikacija je najviši praktični opis željenog ponašanja proizvoda.

Treba odgovoriti na pitanja kao što su:

- zašto proizvod postoji
- kome je namijenjen
- koji su tijekovi rada prvoklasni
- što mora raditi i u uvjetima kvara
- što je izričito izvan opsega
- koji kriteriji prihvaćanja definiraju smislen demo ili izdanje

## Što pripada proizvodnoj specifikaciji

Tipičan sadržaj uključuje:

- svrhu proizvoda
- temeljnu filozofiju
- domenski model
- definicije tijekova rada
- očekivanja privatnosti i sigurnosti
- neciljeve
- smjernice redoslijeda implementacije kada utječu na opseg ili redoslijed isporuke
- kriterije prihvaćanja

Specifikacija se treba usredotočiti na proizvodnu istinu, a ne na svaki lokalni detalj implementacije.

## Što tamo obično ne pripada

To obično pripada drugdje, osim ako izravno ne utječe na obveze proizvoda:

- privremene konvencije repozitorija
- lokalno postavljanje alata
- uske odluke o vizualnom poliranju
- jednokratne smjernice za otklanjanje pogrešaka
- uredničke ili objavne mehanike koje ne mijenjaju model proizvoda

## Kontekst Let Books

U Let Books `AGENTS.md` je glavna proizvodna specifikacija.

Definira:

- svrhu projekta
- domenski i tijekovni model
- smjer višezakupničkog dizajna i lokalizacije
- načela ručnog tijeka rada i opcionalnosti AI-ja
- kriterije prihvaćanja za prvi demo
