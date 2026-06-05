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

Ovaj vodič objašnjava kako napisati specifikaciju proizvoda ili funkcionalnosti tako da implementacija uz podršku AI-ja ostane usklađena sa stvarnim ciljevima proizvoda, umjesto da sklizne prema generičkom rezultatu.

## Zašto je to važno

AI može brzo generirati kod, ali najbolje radi kada zadatak ima jasne granice.

Ako je specifikacija nejasna, AI će često praznine popuniti uvjerljivim zadanim obrascima:

- uobičajenim arhitekturnim obrascima
- generičkim tokovima korisničkog sučelja
- nepotrebnim apstrakcijama
- izmišljenim pretpostavkama o tome što bi proizvod trebao raditi

Takav rezultat može izgledati uglađeno i svejedno biti pogrešan.

## Što korisna specifikacija za AI treba sadržavati

### 1. Svrhu proizvoda

Objasnite zašto funkcionalnost postoji.

Loše:

> Dodaj obrazac za knjigu.

Bolje:

> Dodaj brzi obrazac za unos koji donatoru omogućuje da katalogizira jedan fizički primjerak knjige u nekoliko sekundi dok stoji pokraj police ili kutije.

Svrha implementatoru jasno pokazuje što treba optimizirati.

### 2. Granice opsega

Navedite što je unutar, a što izvan opsega.

Primjer:

- unutar opsega: fotografija naslovnice, unos ISBN-a, lokacija pohrane, spremi i nastavi
- izvan opsega: OCR, sinkronizacija s oblakom, institucionalni tijek pregleda

To sprječava pomoćnika da mali zadatak nepotrebno pretvori u mini-platformu.

### 3. Obavezno ponašanje

Navedite pravila o kojima nema pregovora.

Primjeri iz pristupa Let Books:

- ručni tijek rada mora funkcionirati bez AI-ja
- nepotpuni podaci moraju biti dopušteni
- fizički primjerci moraju ostati odvojeni od bibliografskih zapisa
- korisniku vidljivo ponašanje mora ostati lokalizabilno

Ta su pravila važnija od stila implementacije.

### 4. Ponašanje pri neuspjehu i rezervni tokovi

Rješenja koja generira AI često optimiziraju sretni put. Dobra specifikacija objašnjava što se događa kada opcionalni sustavi zakažu.

Primjer:

- ako pretraga metapodataka ne uspije, ručni unos i dalje ostaje dostupan
- ako je OCR isključen, unos i dalje radi
- ako validacija izvoza ne uspije, korisnik dobiva jasan izvještaj umjesto tihog djelomičnog uvoza

### 5. Kriterije prihvaćanja

Uvjet uspjeha napišite u opažljivim terminima.

Primjer:

1. korisnik odabire kutiju
2. korisnik unosi ili skenira ISBN
3. korisnik može spremiti čak i ako nijedan pružatelj metapodataka ne odgovori
4. knjiga se pojavljuje na odabranoj lokaciji

Kriteriji prihvaćanja daju recenzentima i AI sustavima stabilnu metu.

## Što treba izbjegavati

- nejasne ciljeve poput "poboljšaj UX"
- detalje implementacije bez svrhe proizvoda
- pomiješane buduće ideje predstavljene kao trenutačni zahtjevi
- skrivene pretpostavke o korisničkim ulogama ili kvaliteti podataka
- specifikacije koje se svode samo na imenovanje i ne opisuju tijek rada

## Praktičan obrazac pisanja

Koristite ovu sažetu strukturu kada pišete specifikaciju funkcionalnosti.

1. opis problema
2. korisnik i kontekst
3. tijek rada unutar opsega
4. stavke izvan opsega
5. obavezna pravila
6. rezervno ponašanje
7. kriteriji prihvaćanja
8. bilješke za provjeru

## Kako se to preslikava na Let Books

Repozitorij već pokazuje taj obrazac na više razina:

- `AGENTS.md` definira svrhu proizvoda, tijekove rada i kriterije prihvaćanja
- `AGENTS-Implementation.md` definira taktička ograničenja isporuke
- `README.md` razdvaja trenutačno stanje od budućeg smjera

Taj slojeviti pristup koristan je jer AI radi bolje kada su pravila i pamćenje proizvoda zapisani jasno i pregledno.

## Vježba

Uzmite jednu funkcionalnost Let Books, poput skeniranja QR koda kutije ili uvoza Excel odluka, i napišite jednoslojnu specifikaciju koristeći gornju strukturu.

Zatim zamolite pomoćnika za kodiranje da je implementira.

Nakon toga pregledajte rezultat prema specifikaciji prije pregleda stila koda. Taj redoslijed je važan.

## Dodatno čitanje

- `../spec-driven-content-program.md`
- `../wiki/hr/spec-driven-development.md`
- `../wiki/hr/demo-spec-alignment.md`
- `../blog/hr/spec-driven-development-for-ai-projects.md`
