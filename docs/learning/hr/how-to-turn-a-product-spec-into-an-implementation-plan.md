---
title: "Kako pretvoriti specifikaciju proizvoda u plan implementacije"
summary: >-
  Ovaj vodič objašnjava kako prevesti specifikaciju proizvoda u konkretan plan implementacije bez gubitka namjere, granica ili pravila tijeka rada koji su specifikaciju uopće učinili korisnom.
topics:
  - spec-writing
  - implementation-planning
  - project-management
---
# Kako pretvoriti specifikaciju proizvoda u plan implementacije

## Sažetak

Ovaj vodič objašnjava kako prevesti specifikaciju proizvoda u konkretan plan implementacije bez gubitka namjere, granica ili pravila tijeka rada koji su specifikaciju uopće učinili korisnom.

## Zašto je ovaj korak važan

Specifikacija opisuje što proizvod treba raditi i zašto to treba raditi.

Plan implementacije opisuje kako će tim isporučiti to ponašanje u slijedu koji je pregledljiv, testabilan i realističan.

Mnogi projekti propadnu upravo u razmaku između ta dva dokumenta.

Specifikacija može biti dobra, ali plan postane previše neodređen, previše tehnički ili previše odvojen od korisničkih tijekova rada. U radu uz podršku AI-ja to je još češće jer generirani kod može stvoriti dojam da se planiranje već dogodilo, iako zapravo nije.

## Počnite izdvajanjem odluka o proizvodu

Prije nego što specifikaciju pretvorite u zadatke, prepoznajte odluke koje doista ograničavaju implementaciju.

Tražite:

- svrhu proizvoda
- korisnički tijek rada
- granice opsega
- pravila o kojima nema pregovora
- rezervno ponašanje
- kriterije prihvaćanja

To su dijelovi koji trebaju preživjeti prijelaz iz specifikacije u plan.

Ako ih plan izgubi, obično postane tehnički popis obaveza umjesto plana isporuke.

## Podijelite plan na slojeve

Dobar plan implementacije obično ima barem tri sloja.

### 1. Sloj tijeka rada

Opišite korisniku vidljiv tok u kratkim konkretnim koracima.

Primjer:

1. korisnik odabire kutiju za pohranu
2. korisnik skenira ili unosi ISBN
3. korisnik i dalje može nastaviti ako pretraga ne uspije
4. korisnik sprema fizički primjerak na odabranu lokaciju

Ovaj sloj štiti korisničko putovanje od toga da bude zatrpano tehničkim zadacima.

### 2. Sustavski sloj

Opišite dijelove sustava koji moraju podržati taj tijek rada.

Primjeri:

- promjene modela podataka
- UI zasloni ili obrasci
- validacijska pravila
- ponašanje importa/eksporta
- ažuriranja lokalizacije
- potrebe provjere

Ovaj sloj povezuje ponašanje proizvoda s tehničkim radom.

### 3. Sloj isporuke

Razlomite sustavski rad u slijed koji se stvarno može implementirati i pregledati.

Primjeri:

1. definirati ili ažurirati model domene
2. implementirati osnovni UI tok
3. dodati rezervno ponašanje
4. dodati validaciju i testove
5. ažurirati dokumentaciju i primjere

To je sloj u kojem plan postaje rasporediv.

## Neka plan oblikuju ograničenja

Planovi implementacije često odstupaju kada se prepišu kao generički inženjerski koraci.

Kako biste to izbjegli, ključna ograničenja proizvoda držite vidljivima unutar plana.

Za rad u stilu Let Books to može uključivati ograničenja kao što su:

- ručni tijekovi rada i dalje moraju funkcionirati bez AI-ja
- nepotpuni podaci moraju biti dopušteni
- fizički primjerci moraju ostati odvojeni od bibliografskih zapisa
- lokalizacija se ne smije tretirati kao opcionalni završni sloj
- dokumentacija trenutačnog stanja mora ostati poštena o onome što sada postoji

Ta ograničenja ne bi trebala živjeti samo u izvornoj specifikaciji. Trebaju se pojavljivati i u bilješkama planiranja i kriterijima pregleda.

## Koristite kriterije prihvaćanja za oblikovanje razrade zadataka

Jedan od najlakših načina za pretvaranje specifikacije u plan jest krenuti od kriterija prihvaćanja.

Za svaki kriterij pitajte:

- koji UI ili tijek rada to podržava
- koje podatkovno ili sustavsko ponašanje to podržava
- koji slučaj neuspjeha i dalje mora uspjeti
- kako ćemo to provjeriti

Ta metoda drži plan vezanim uz opažljive ishode umjesto uz apstraktne rasprave o arhitekturi.

## Planiranje uz podršku AI-ja: na što paziti

AI može pomoći da se plan implementacije proizvede brzo, ali često uvodi ponavljajuće probleme:

- dodatne apstrakcije bez potrebe proizvoda
- zadatke grupirane po tehnologiji umjesto po tijeku rada
- optimistično izostavljanje rezervnog ponašanja
- skrivene pretpostavke o dostupnosti pozadinskog sustava ili kvaliteti podataka
- planove koji izgledaju potpuno, ali zanemaruju dokumentaciju i provjeru

Kada pregledavate plan implementacije koji je generirao AI, pitajte odražava li on i dalje stvarni skup pravila proizvoda.

## Praktičan predložak planiranja

Koristite strukturu poput ove:

1. cilj značajke
2. sažetak korisničkog tijeka rada
3. ograničenja i pravila o kojima nema pregovora
4. isporučivi segmenti
5. strategija provjere
6. potrebna ažuriranja dokumentacije

Na primjer, isporučivi segment mogao bi biti:

- dodati odabir lokacije pohrane u tok unosa
- dopustiti spremanje bez uspješnog pretraživanja metapodataka
- spremiti fizički primjerak odvojeno od bibliografskih metapodataka
- ažurirati tekst vodiča i bilješke za provjeru

To je mnogo snažnije od ravnog popisa poput:

- izraditi obrazac
- dodati API poziv
- dodati testove

## Primjer iz Let Books

Repozitorij već sadrži sirove ulaze za ovakav stil planiranja:

- `AGENTS.md` za svrhu proizvoda, tijekove rada i kriterije prihvaćanja
- `AGENTS-Implementation.md` za ograničenja isporuke i pravila repozitorija
- `README.md` za očekivanja trenutačnog stanja
- `docs/Development.md` i `docs/Deployment.md` za kontekst validacije i isporuke

To znači da plan implementacije ne mora izmišljati vlastitu logiku. On treba te slojeve prevesti u ograničen slijed isporuke.

## Kontrolni popis za pregled

Prije prihvaćanja plana implementacije provjerite:

1. Čuva li korisnički tijek rada iz specifikacije?
2. Drži li vidljivima pravila proizvoda o kojima nema pregovora?
3. Uključuje li rezervno i neuspješno ponašanje?
4. Uključuje li dokumentaciju i provjeru, a ne samo zadatke koda?
5. Može li drugi suradnik implementirati prema ovom planu bez nagađanja o namjeri proizvoda?

## Dodatno čitanje

- `../spec-driven-content-program.md`
- `how-to-write-a-spec-that-ai-can-follow.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `../wiki/hr/spec-driven-development.md`
- `../blog/hr/spec-driven-development-in-let-books.md`
