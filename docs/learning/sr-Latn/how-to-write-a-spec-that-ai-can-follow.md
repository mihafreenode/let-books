---
title: "Kako napisati specifikaciju koju AI može da prati"
summary: >-
  Ovaj vodič objašnjava kako da napišete specifikaciju proizvoda ili funkcionalnosti koja pomaže da implementacija uz pomoć AI ostane usklađena sa stvarnim ciljevima proizvoda umesto da odluta ka generičkom izlazu.
topics:
  - spec-writing
  - ai-assisted-delivery
  - documentation
---
# Kako napisati specifikaciju koju AI može da prati

## Sažetak

Ovaj vodič objašnjava kako da napišete specifikaciju proizvoda ili funkcionalnosti koja pomaže da implementacija uz pomoć AI ostane usklađena sa stvarnim ciljevima proizvoda umesto da odluta ka generičkom izlazu.

## Zašto je to važno

AI može brzo da generiše kod, ali najbolje radi kada zadatak ima jasne granice.

Ako je specifikacija nejasna, AI će praznine često popuniti uverljivim podrazumevanim izborima:

- uobičajenim arhitektonskim obrascima
- generičkim tokovima korisničkog interfejsa
- nepotrebnim apstrakcijama
- izmišljenim pretpostavkama o tome šta proizvod treba da radi

Takav izlaz može delovati uglađeno, a ipak biti pogrešan.

## Šta korisna specifikacija za AI treba da sadrži

### 1. Svrhu proizvoda

Recite zašto funkcionalnost postoji.

Loše:

> Dodaj formu za knjigu.

Bolje:

> Dodaj obrazac za brzi unos koji omogućava donatoru da za nekoliko sekundi katalogizuje jedan fizički primerak knjige dok stoji pored police ili kutije.

Svrha govori implementatoru šta treba da optimizuje.

### 2. Granice obima

Navedite šta je u obimu, a šta van obima.

Primer:

- u obimu: fotografija korice, unos ISBN-a, lokacija skladištenja, sačuvaj i nastavi
- van obima: OCR, sinhronizacija u oblaku, tok institucionalnog pregleda

To sprečava asistenta da mali zadatak naduva u mini platformu.

### 3. Zahtevano ponašanje

Navedite pravila o kojima nema pregovora.

Primeri iz pristupa Let Books:

- ručni tok rada mora da funkcioniše bez AI-ja
- nepotpuni podaci moraju biti dozvoljeni
- fizički primerci moraju ostati odvojeni od bibliografskih zapisa
- korisnički vidljivo ponašanje mora ostati lokalizabilno

Ova pravila su važnija od stila implementacije.

### 4. Ponašanje pri grešci i rezervno ponašanje

Rešenja koja generiše AI često optimizuju srećan put. Dobra specifikacija objašnjava šta se dešava kada opcioni sistemi zakažu.

Primer:

- ako pretraga metapodataka ne uspe, ručni unos ostaje dostupan
- ako je OCR isključen, unos i dalje radi
- ako validacija izvoza ne uspe, korisnik dobija jasan izveštaj umesto tihog delimičnog uvoza

### 5. Kriterijumi prihvatanja

Napišite uslov uspeha u vidljivim terminima.

Primer:

1. korisnik bira kutiju
2. korisnik unosi ili skenira ISBN
3. korisnik može da sačuva čak i ako nijedan provajder metapodataka ne odgovori
4. knjiga se pojavljuje na izabranoj lokaciji

Kriterijumi prihvatanja daju pregledalcima i AI sistemima stabilan cilj.

## Šta treba izbegavati

- nejasne ciljeve kao što je „poboljšaj UX“
- detalje implementacije bez svrhe proizvoda
- pomešane buduće ideje predstavljene kao trenutne zahteve
- skrivene pretpostavke o ulogama korisnika ili kvalitetu podataka
- specifikacije koje sadrže samo nazive, a ne opisuju tok rada

## Praktičan obrazac za pisanje

Koristite ovu sažetu strukturu kada pišete specifikaciju funkcionalnosti.

1. problem koji pokušavaš da rešiš
2. korisnik i kontekst
3. tok rada u obimu
4. stavke van obima
5. zahtevana pravila
6. rezervno ponašanje
7. kriterijumi prihvatanja
8. napomene za verifikaciju

## Kako se ovo mapira na Let Books

Repozitorijum već prikazuje ovaj obrazac na više nivoa:

- `AGENTS.md` definiše svrhu proizvoda, tokove rada i kriterijume prihvatanja
- `AGENTS-Implementation.md` definiše taktička ograničenja isporuke
- `README.md` razdvaja trenutno stanje od budućeg pravca

Taj slojeviti pristup je koristan, jer AI radi bolje kada je pamćenje o proizvodu eksplicitno i pregledljivo.

## Vežba

Uzmite jednu funkcionalnost Let Books, kao što je skeniranje QR koda kutije ili uvoz odluka iz Excel-a, i napišite jednoslojnu specifikaciju koristeći gornju strukturu.

Zatim zamolite pomoćnika za kodiranje da je implementira.

Posle toga pregledajte izlaz u odnosu na specifikaciju pre nego što pregledate stil koda. Taj redosled je važan.

## Dalje čitanje

- `../spec-driven-content-program.md`
- `../wiki/sr-Latn/spec-driven-development.md`
- `../wiki/sr-Latn/demo-spec-alignment.md`
- `../blog/sr-Latn/spec-driven-development-for-ai-projects.md`
