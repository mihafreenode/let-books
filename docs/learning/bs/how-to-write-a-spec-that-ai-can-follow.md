---
title: "Kako napisati specifikaciju koju AI može slijediti"
summary: >-
  Ovaj vodič objašnjava kako napisati specifikaciju proizvoda ili funkcionalnosti koja pomaže da implementacija uz podršku AI-ja ostane usklađena sa stvarnim ciljevima proizvoda umjesto da odluta prema generičkom rezultatu.
topics:
  - spec-writing
  - ai-assisted-delivery
  - documentation
---
# Kako napisati specifikaciju koju AI može slijediti

## Sažetak

Ovaj vodič objašnjava kako napisati specifikaciju proizvoda ili funkcionalnosti koja pomaže da implementacija uz podršku AI-ja ostane usklađena sa stvarnim ciljevima proizvoda umjesto da odluta prema generičkom rezultatu.

## Zašto je to važno

AI može brzo generisati kod, ali najbolje radi kada zadatak ima jasne granice.

Ako je specifikacija nejasna, AI će često praznine popuniti uvjerljivim podrazumijevanim obrascima:

- uobičajenim arhitektonskim obrascima
- generičkim UI tokovima
- nepotrebnim apstrakcijama
- izmišljenim pretpostavkama o tome šta bi proizvod trebao raditi

Takav rezultat može izgledati uglađeno i ipak biti pogrešan.

## Šta korisna specifikacija za AI treba sadržavati

### 1. Svrhu proizvoda

Objasnite zašto funkcionalnost postoji.

Loše:

> Dodaj formu za knjigu.

Bolje:

> Dodaj brzu formu za unos koja donatoru omogućava da katalogizira jedan fizički primjerak knjige za nekoliko sekundi dok stoji pored police ili kutije.

Svrha implementatoru govori za šta treba optimizovati.

### 2. Granice opsega

Navedite šta je unutar, a šta izvan opsega.

Primjer:

- unutar opsega: fotografija naslovnice, unos ISBN-a, lokacija pohrane, sačuvaj i nastavi
- izvan opsega: OCR, cloud sinhronizacija, institucionalni tok pregleda

To sprječava asistenta da mali zadatak napuše u mini-platformu.

### 3. Obavezno ponašanje

Navedite pravila o kojima nema pregovora.

Primjeri iz pristupa Let Books:

- ručni tok rada mora funkcionisati bez AI-ja
- nepotpuni podaci moraju biti dozvoljeni
- fizički primjerci moraju ostati odvojeni od bibliografskih zapisa
- korisniku vidljivo ponašanje mora ostati lokalizabilno

Ta pravila su važnija od stila implementacije.

### 4. Ponašanje pri neuspjehu i rezervni tokovi

Rješenja koja generiše AI često optimizuju sretni put. Dobra specifikacija objašnjava šta se dešava kada opcionalni sistemi zakažu.

Primjer:

- ako pretraga metapodataka ne uspije, ručni unos i dalje ostaje dostupan
- ako je OCR isključen, unos i dalje radi
- ako validacija izvoza ne uspije, korisnik dobija jasan izvještaj umjesto tihog djelimičnog uvoza

### 5. Kriterije prihvatanja

Uslov uspjeha napišite u opažljivim terminima.

Primjer:

1. korisnik bira kutiju
2. korisnik unosi ili skenira ISBN
3. korisnik može sačuvati čak i ako nijedan pružalac metapodataka ne odgovori
4. knjiga se pojavljuje na odabranoj lokaciji

Kriteriji prihvatanja daju recenzentima i AI sistemima stabilnu metu.

## Šta treba izbjegavati

- nejasne ciljeve poput "poboljšaj UX"
- detalje implementacije bez svrhe proizvoda
- pomiješane buduće ideje predstavljene kao trenutni zahtjevi
- skrivene pretpostavke o korisničkim ulogama ili kvalitetu podataka
- specifikacije koje se svode samo na imenovanje i ne opisuju tok rada

## Praktičan obrazac pisanja

Koristite ovu sažetu strukturu kada pišete specifikaciju funkcionalnosti.

1. opis problema
2. korisnik i kontekst
3. tok rada unutar opsega
4. stavke izvan opsega
5. obavezna pravila
6. rezervno ponašanje
7. kriteriji prihvatanja
8. bilješke za provjeru

## Kako se to preslikava na Let Books

Repozitorij već pokazuje ovaj obrazac na više nivoa:

- `AGENTS.md` definiše svrhu proizvoda, tokove rada i kriterije prihvatanja
- `AGENTS-Implementation.md` definiše taktička ograničenja isporuke
- `README.md` razdvaja trenutno stanje od budućeg smjera

Taj slojeviti pristup koristan je jer AI radi bolje kada je memorija proizvoda izričita i pregledljiva.

## Vježba

Uzmite jednu funkcionalnost Let Books, poput skeniranja QR koda kutije ili uvoza Excel odluka, i napišite jednostraničnu specifikaciju koristeći gornju strukturu.

Zatim zamolite asistenta za kodiranje da je implementira.

Nakon toga pregledajte rezultat prema specifikaciji prije pregleda stila koda. Taj redoslijed je važan.

## Dodatno čitanje

- `../spec-driven-content-program.md`
- `../wiki/bs/spec-driven-development.md`
- `../wiki/bs/demo-spec-alignment.md`
- `../blog/bs/spec-driven-development-for-ai-projects.md`
