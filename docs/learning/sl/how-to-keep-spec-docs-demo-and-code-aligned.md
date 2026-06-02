---
title: "Kako ohranjati usklajenost specifikacije, dokumentacije, predstavitve in kode"
summary: >-
  Ta vodič opisuje praktičen potek dela za dolgoročno usklajevanje produktne specifikacije, dokumentacije, vedenja predstavitve in izvedbenega dela.
topics:
  - demo-alignment
  - documentation
  - spec-driven-development
---
# Kako ohranjati usklajenost specifikacije, dokumentacije, predstavitve in kode

## Povzetek

Ta vodič opisuje praktičen potek dela za dolgoročno usklajevanje produktne specifikacije, dokumentacije, vedenja predstavitve in izvedbenega dela.

## Osrednji problem

Odmik produkta se redko začne z dramatično napako. Običajno se začne z majhnimi neusklajenostmi.

Primeri:

- predstavitev doda nov potek dela, vendar se specifikacija nikoli ne posodobi
- dokumentacija opisuje funkcionalnost, ki se ne vede več tako
- koda uvede priročno bližnjico, ki krši produktno pravilo
- validacijska preverjanja uveljavljajo le sintakso, ne pa namena produkta

AI lahko vse to pospeši, če je potek usklajevanja šibek.

## Model usklajevanja

Uporabite ta vrstni red avtoritete:

1. produktna specifikacija
2. izvedbene smernice
3. dokumentacija trenutnega stanja
4. vedenje predstavitve ali aplikacije
5. testi in validacijska pravila

Nižje ravni naj podpirajo višje ravni. Če si nasprotujejo, verigo posodobite namenoma, namesto da po privzetem zmaga najbolj viden artefakt.

## Priporočen potek dela

### 1. Začnite s spremembo v specifikaciji

Če se spremeni uporabniku viden potek dela ali produktno pravilo, najprej posodobite ustrezno specifikacijo ali smernice.

Uporabite:

- `AGENTS.md` za pravila in poteke dela na ravni produkta
- `AGENTS-Implementation.md` za taktična pravila repozitorija in dostave

### 2. Posodobite dokumentacijo trenutnega stanja

Če sprememba vpliva na to, kar zdaj obstaja, posodobite dokumentacijo, ki opisuje trenutno stanje.

Tipični primeri:

- `README.md`
- `docs/Development.md`
- `docs/Deployment.md`
- nova ali posodobljena vsebina za learning/wiki/blog, kjer je to pomembno

### 3. Posodobite predstavitev ali izvedbo

Šele ko je namen jasen, naj se spremeni predstavitev ali aplikacija.

To pomaga preprečiti pogost vzorec, pri katerem prototip tiho postane vir resnice.

### 4. Dodajte ali posodobite validacijo

Nato se vprašajte, kaj je mogoče preveriti samodejno.

Primeri:

- popolnost lokalizacijskih ključev
- prisotnost zahtevanih datotek
- ustvarjanje metapodatkov
- validacija povezav
- testi, značilni za določen potek dela

Vsakega pravila ni mogoče avtomatizirati takoj, vendar pomembna pravila ne bi smela ostati odvisna samo od spomina.

### 5. Pregledujte glede na specifikacijo, ne le na izhod

Pri pregledovanju sprememb se ne ustavite pri vprašanjih:

- ali se zažene
- ali je videti dobro
- ali testi uspejo

Vprašajte tudi:

- ali se ujema z dokumentiranim potekom dela
- ali ohranja zahtevano produktno mejo
- ali so dokumentacija in prikaz trenutnega stanja ostali pošteni

## Obravnava odkritij iz predstavitve

Včasih predstavitev ekipo nauči nekaj boljšega od prvotne specifikacije.

To je koristno. Pravilen odziv je:

1. dokumentirajte odkritje
2. odločite se, ali je sprememba poteka dela namerna
3. posodobite specifikacijo in dokumentacijo
4. ohranite izvedbo usklajeno s posodobljeno odločitvijo

Napačen odziv je, da predstavitev tiho zmaga samo zato, ker že obstaja.

## Obravnava izvedbe s pomočjo AI

Pri AI postane ta potek dela še pomembnejši, ker pomočniki pogosto optimizirajo lokalno verjetnost.

Dobra zanka usklajevanja je:

1. napišite ali posodobite specifikacijo
2. ustvarite izvedbo
3. primerjajte izhod s specifikacijo
4. posodobite dokumentacijo, če se je trenutno vedenje spremenilo
5. kjer je praktično, dodajte validacijo

## Primer Let Books

Repozitorij že vsebuje uporabno verigo usklajevanja:

- `AGENTS.md` za smer produkta
- `AGENTS-Implementation.md` za taktična pravila
- `README.md` za prikaz trenutnega stanja
- `docs/` za pravila znanja in objavljanja
- dokumentacija o nameščanju in razvoju za smernice validacije

To strukturo je treba uporabljati namenoma vsakič, ko se dodajajo nove funkcionalnosti, dokumentacija ali javna pojasnila.

## Kontrolni seznam

Pred združitvijo pomembne spremembe preverite:

1. Ali je bilo produktno pravilo ali potek dela jasno dokumentirano?
2. Ali se dokumentacija trenutnega stanja še vedno ujema z resničnostjo?
3. Ali predstavitev ali izvedba odraža nameravano pravilo?
4. Ali spremembo varuje vsaj en mehanizem validacije ali pregleda?
5. Ali bi lahko nov sodelujoči kasneje razumel to odločitev?

## Dodatno branje

- `../spec-driven-content-program.md`
- `../wiki/sl/demo-spec-alignment.md`
- `../wiki/sl/spec-driven-development.md`
- `../blog/sl/spec-driven-development-in-let-books.md`
