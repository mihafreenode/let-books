---
title: "Specifikacija proizvoda"
summary: >-
  Specifikacija proizvoda određuje čemu proizvod služi, šta mora raditi, koje granice mora poštovati i koji se rezultati smatraju uspjehom.
topics:
  - product-specification
  - spec-writing
  - spec-driven-development
---
# Specifikacija proizvoda

## Sažetak

Specifikacija proizvoda određuje čemu proizvod služi, šta mora raditi, koje granice mora poštovati i koji se rezultati smatraju uspjehom.

## Uloga

Specifikacija proizvoda je najviši nivo praktičnog opisa planiranog ponašanja proizvoda.

Trebalo bi da odgovori na pitanja kao što su:

- zašto proizvod postoji
- za koga je
- koji su tokovi rada najvažniji
- šta mora raditi čak iu uslovima kvara
- ono što je eksplicitno van okvira
- koji kriterijumi prihvatanja definišu smisleni demo ili izdanje

## Šta spada u specifikaciju proizvoda

Uobičajeni sadržaj specifikacije uključuje:

- svrha proizvoda
- osnovna filozofija
- model domene
- definicije toka posla
- privatnost i sigurnosna očekivanja
- ono što nije cilj
- smjernice za redoslijed implementacije gdje to utiče na obim ili redosled isporuke
- kriterijumi prihvatanja

Specifikacija bi se trebala držati onoga što je suština proizvoda, a ne svakog detalja lokalne implementacije.

## Ono što obično ne pripada tamo

Ove stavke često pripadaju negdje drugdje osim ako direktno ne utječu na obaveze prema proizvodu:

- konvencije o privremenom spremištu
- lokalno postavljanje alata
- uske odluke poliranja korisničkog sučelja
- jednokratno uputstvo za otklanjanje grešaka
- uređivačka ili izdavačka mehanika koja ne mijenja model proizvoda

## Zašto je to važno u radu uz pomoć umjetne inteligencije

AI može vrlo brzo stvoriti uvjerljivu implementaciju. Bez jasne specifikacije proizvoda, ta implementacija može optimizirati za praktičnost umjesto namjere.

Specifikacija daje recenzentima i suradnicima stabilan standard za odlučivanje da li generirani izlaz još uvijek pripada namjeravanom proizvodu.

## Let Books kontekst

U Let Books, `AGENTS.md` je osnovna specifikacija proizvoda.

Definiše:

- svrha projekta
- model domena i toka posla
- smjer za rad s više zakupaca i lokalizaciju
- ručni tok rada i AI-opcijski principi
- kriteriji prihvatanja za prvi demo

Zato je to više od običnog pregleda. To je glavni izvor autoriteta za proizvod u spremištu.

## Povezane stranice

- `implementation-guidance.md`
- `documentation-traceability.md`
- `spec-driven-development.md`
- `../../learning/bs/how-to-write-a-spec-that-ai-can-follow.md`
