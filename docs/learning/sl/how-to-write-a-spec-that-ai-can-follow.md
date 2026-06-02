---
title: "Kako napisati specifikacijo, ki ji lahko AI sledi"
summary: >-
  Ta vodič pojasnjuje, kako napisati produktno ali funkcionalno specifikacijo, ki pomaga, da izvedba s pomočjo AI ostane usklajena z resničnimi cilji produkta, namesto da odtava proti generičnim izhodom.
topics:
  - spec-writing
  - ai-assisted-delivery
  - documentation
---
# Kako napisati specifikacijo, ki ji lahko AI sledi

## Povzetek

Ta vodič pojasnjuje, kako napisati produktno ali funkcionalno specifikacijo, ki pomaga, da izvedba s pomočjo AI ostane usklajena z resničnimi cilji produkta, namesto da odtava proti generičnim izhodom.

## Zakaj je to pomembno

AI lahko hitro ustvari kodo, vendar najbolje deluje, kadar ima naloga jasne meje.

Če je specifikacija nejasna, bo AI praznine pogosto zapolnil z verjetnimi privzetimi možnostmi:

- pogostimi arhitekturnimi vzorci
- generičnimi poteki uporabniškega vmesnika
- nepotrebnimi abstrakcijami
- izmišljenimi predpostavkami o tem, kaj naj bi produkt počel

Tak izhod je lahko videti dodelan in je kljub temu napačen.

## Kaj mora vsebovati uporabna specifikacija za AI

### 1. Namen produkta

Povejte, zakaj funkcionalnost obstaja.

Slabo:

> Dodaj obrazec za knjigo.

Boljše:

> Dodaj hiter zajemni obrazec, ki donatorju omogoča, da v nekaj sekundah katalogizira en fizični izvod knjige, medtem ko stoji ob polici ali škatli.

Namen izvajalcu pove, kaj naj optimizira.

### 2. Meje obsega

Povejte, kaj je znotraj obsega in kaj je zunaj njega.

Primer:

- znotraj obsega: fotografija naslovnice, vnos ISBN, lokacija shranjevanja, shrani in nadaljuj
- zunaj obsega: OCR, sinhronizacija v oblaku, potek institucionalnega pregleda

To pomočniku prepreči, da bi majhno nalogo napihnil v mini platformo.

### 3. Zahtevano vedenje

Navedite pravila, o katerih ni pogajanja.

Primeri iz pristopa Let Books:

- ročni potek dela mora delovati brez AI
- nepopolni podatki morajo biti dovoljeni
- fizični izvodi morajo ostati ločeni od bibliografskih zapisov
- uporabniku vidno vedenje mora ostati lokalizabilno

Ta pravila so pomembnejša od sloga izvedbe.

### 4. Vedenje ob napakah in rezervno vedenje

Rešitve, ki jih ustvari AI, pogosto optimizirajo srečno pot. Dobra specifikacija pojasni, kaj se zgodi, ko neobvezni sistemi odpovejo.

Primer:

- če iskanje metapodatkov odpove, ročni vnos ostane na voljo
- če je OCR onemogočen, zajem še vedno deluje
- če validacija izvoza odpove, uporabnik prejme jasno poročilo namesto tihega delnega uvoza

### 5. Kriteriji sprejema

Pogoj uspeha zapišite v opaznih izrazih.

Primer:

1. uporabnik izbere škatlo
2. uporabnik vnese ali skenira ISBN
3. uporabnik lahko shrani, tudi če se noben ponudnik metapodatkov ne odzove
4. knjiga se prikaže na izbrani lokaciji

Kriteriji sprejema dajejo pregledovalcem in sistemom AI stabilen cilj.

## Čemu se izogniti

- nejasnim ciljem, kot je »izboljšaj UX«
- izvedbenim podrobnostim brez produktnega namena
- mešanju prihodnjih idej, predstavljenih kot trenutne zahteve
- skritim predpostavkam o uporabniških vlogah ali kakovosti podatkov
- specifikacijam, ki vsebujejo le poimenovanje in ne opisujejo poteka dela

## Praktičen vzorec pisanja

Pri pripravi specifikacije funkcionalnosti uporabite to zgoščeno strukturo.

1. težava, ki jo rešuješ
2. uporabnik in kontekst
3. potek dela znotraj obsega
4. elementi zunaj obsega
5. zahtevana pravila
6. rezervno vedenje
7. kriteriji sprejema
8. opombe za preverjanje

## Kako se to preslika na Let Books

Repozitorij ta vzorec že prikazuje na več ravneh:

- `AGENTS.md` določa namen produkta, poteke dela in kriterije sprejema
- `AGENTS-Implementation.md` določa taktične omejitve dostave
- `README.md` ločuje trenutno stanje od prihodnje smeri

Tak plasten pristop je uporaben, ker AI deluje bolje, kadar je produktni spomin izrecen in ga je mogoče pregledati.

## Vaja

Vzemite eno funkcionalnost Let Books, kot je skeniranje QR-kod škatel ali uvoz odločitev iz Excela, in napišite enostransko specifikacijo po zgornji strukturi.

Nato prosite kodirnega pomočnika, da jo izvede.

Zatem pregledajte izhod glede na specifikacijo, preden pregledate slog kode. Ta vrstni red je pomemben.

## Dodatno branje

- `../spec-driven-content-program.md`
- `../wiki/sl/spec-driven-development.md`
- `../wiki/sl/demo-spec-alignment.md`
- `../blog/sl/spec-driven-development-for-ai-projects.md`
