---
title: "Kako postopno dodajati validacijska pravila in vrata v CI"
summary: >-
  Ta vodič pojasnjuje, kako postopno dodajati validacijska pravila in preverjanja v CI, da lahko projekt izboljšuje doslednost in zmanjšuje odmik brez poskusa, da bi vse avtomatiziral naenkrat.
topics:
  - validation
  - ci-cd
  - spec-driven-development
---
# Kako postopno dodajati validacijska pravila in vrata v CI

## Povzetek

Ta vodič pojasnjuje, kako postopno dodajati validacijska pravila in preverjanja v CI, da lahko projekt izboljšuje doslednost in zmanjšuje odmik brez poskusa, da bi vse avtomatiziral naenkrat.

## Zakaj je postopno uveljavljanje pomembno

Ekipe pogosto vedo, da potrebujejo močnejšo validacijo, vendar naredijo eno od dveh napak.

Ali predolgo puščajo preverjanje kakovosti neformalno, ali pa poskušajo naenkrat uvesti velik tog sistem CI in s tem povzročijo nezadovoljstvo.

Postopen pristop deluje bolje.

Projektu omogoča, da ponavljajoča se pričakovanja pri pregledih sčasoma pretvori v ponovljiva preverjanja.

## Začnite pri ponavljajočih se napakah

Najboljša validacijska pravila se običajno začnejo kot ponavljajoče se ugotovitve pri človeških pregledih.

Vprašajte se:

- katere napake se stalno ponavljajo
- katera pravila je lahko pozabiti
- katera struktura mora ostati dosledna po celotnem repozitoriju
- katera preverjanja kakovosti bi prihranila čas pregledovalcem

Če se ista težava pojavi večkrat, je dober kandidat za avtomatizacijo.

## Validacija naj sledi verigi avtoritete

Validacijska pravila naj utrjujejo dokumentirana pričakovanja, ne pa jih nadomeščajo.

To pomeni:

- specifikacija določa pravilo
- dokumentacija pravilo razloži
- validacija pravilo preveri, kjer je to praktično
- CI validacijo izvaja dosledno

Tako projekt ne začne uveljavljati pravil, o katerih se v resnici nikoli ni odločilo.

## Uporaben model zrelosti

### Stopnja 1: ročni pregledni seznam

Začnite tako, da pravilo izrecno poimenujete.

Primeri:

- vse novo besedilo, vidno uporabniku, mora biti lokalizabilno
- dokumentacija mora ločevati trenutno stanje od prihodnjih načrtov
- novi javni članki morajo navajati specifikacije in dokumentacijo, ne izvornih datotek

Na tej stopnji je pravilo resnično, vendar ga še vedno uveljavljajo ljudje.

### Stopnja 2: lahka lokalna validacija

Dodajte majhen skript ali strukturirano preverjanje, ki ga lahko sodelujoči zaženejo lokalno.

Primeri:

- zaznavanje manjkajočih ključev področne nastavitve
- preverjanje prisotnosti zahtevanih datotek
- validacija ustvarjanja metapodatkov
- preverjanje razreševanja povezav

Ta stopnja zmanjša izogibljive napake, še preden se CI sploh zažene.

### Stopnja 3: vidnost v CI

Preverjanje zaženite v CI, tudi če sprva ni blokirajoče.

To ekipi omogoči vpogled v to, kako pogosto pravilo odpove in ali samo preverjanje potrebuje izboljšave.

### Stopnja 4: blokirajoča vrata v CI

Ko je pravilo stabilno in razumljeno, ga naredite obveznega.

Na tej točki se je projekt premaknil od neformalnega pričakovanja do uveljavljivega standarda.

## Kaj najprej avtomatizirati

Dobri zgodnji kandidati so običajno:

- strukturna doslednost
- zahtevane datoteke
- popolnost lokalizacije
- veljavnost oblikovanja ali sintakse
- pokvarjene notranje povezave
- prepovedani uredniški sklici

Pri večjezičnem objavljanju obravnavajte uporabniku namenjeno vsebino v mešanih jezikih kot ena od prvih visoko vrednih vrat CI. Stran z lokaliziranim naslovom, vendar angleškim povzetkom ali angleškimi oznakami ni delno uspešna. Nepopolna je.

Ta preverjanja so običajno poceni, objektivna in zelo koristna.

## Česa ne vsiliti prezgodaj

Nekatera preverjanja so dragocena, vendar morda potrebujejo čas, preden postanejo stroga vrata.

Primeri:

- preverjanje črkovanja v mnogih jezikih
- preverjanja posnetkov zaslona ali vizualnih regresij
- preverjanja dostopnosti, pri katerih prilagajanje še poteka
- slogovna ali jezikovna pravila, ki še niso stabilna

Ta se lahko začnejo kot opozorilni signali, preden postanejo obvezna.

## Primeri Let Books

Repozitorij že dokumentira več vzorcev validacije, med drugim:

- osnovno testiranje lokalizacije
- validacijo sintakse JSON
- preverjanje zahtevanih datotek
- ustvarjanje metapodatkov SEO
- neobvezno preverjanje črkovanja in linting
- avtomatizacijo nameščanja

Dokumentacija in slogovni vodniki določajo tudi uredniška pravila, ki lahko sčasoma postanejo cilji validacije, na primer uporaba specifikacij in dokumentacije kot kanoničnih dokazov za javne članke.

Zato je Let Books dober primer postopnega uveljavljanja namesto procesa vse naenkrat.

## Praktičen potek pretvarjanja pravil

Pri dodajanju novega validacijskega pravila uporabite ta vzorec:

1. prepoznajte ponavljajočo se težavo pri pregledih
2. pravilo jasno zapišite v dokumentaciji ali smernicah
3. če je praktično, dodajte lokalni skript ali preverjanje
4. zaženite ga v CI kot vidno povratno informacijo
5. blokirajoče naj postane šele, ko je stabilno

To povzroči manj trenja kot uvedba strogih vrat, preden ekipa pravilo razume.

## Vprašanja pred dodajanjem vrat

1. Ali je pravilo jasno dokumentirano?
2. Ali je preverjanje dovolj zanesljivo, da mu lahko zaupamo?
3. Ali bodo sodelujoči razumeli, kako odpraviti napake?
4. Ali vrednost preverjanja upraviči trenje?
5. Ali naj se začne le kot opozorilo, preden postane obvezno?

## Projekti z uporabo AI to potrebujejo še bolj

AI poveča količino sprememb in hitrost spreminjanja. To pomeni več priložnosti za nedoslednost.

Hitre povratne informacije so zato še vrednejše. Praktično vprašanje pogosto ni, ali lahko AI ustvari popoln prvi poskus. Uporabnejše vprašanje je, ali lahko okolje zanesljivo prepozna naslednjo težavo, ki jo je treba rešiti.

Validacija in CI nista tam zato, da bi ekipe upočasnila. Tam sta zato, da hitrost ne izbriše pomembnih meja.

Pri delu, ki ga vodijo specifikacije, cilj ni največja možna avtomatizacija. Cilj je zanesljivo utrjevanje pravil, ki so najpomembnejša.

## Trajna lekcija

Najmočnejši validacijski sistemi se običajno ne pojavijo v popolnoma oblikovani obliki. Zrastejo tako, da ponavljajočo se človeško presojo pretvorijo v dokumentirana, pregledljiva in uveljavljiva preverjanja.

Ta postopna pot je pogosto najbolj realističen način, da projekt postane strožji, ne da bi postal krhek.

## Kontrolni seznam za odpravljanje napak iz izvora

Ko validacijsko pravilo odpove:

1. najprej preglejte izvorni Markdown
2. nato preglejte lokalizirane metapodatke
3. preglejte vhodne podatke za ustvarjanje in registre
4. ponovno ustvarite artefakte
5. ustvarjeni HTML preglejte šele po preverjanjih na ravni izvora

Ne popravljajte ustvarjenega izhoda, če je izvorna lokalizacija nepopolna.

## Dodatno branje

- `../spec-driven-content-program.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `how-to-review-ai-assisted-work-against-the-spec.md`
- `../wiki/sl/spec-driven-development.md`
- `../blog/sl/documentation-is-part-of-the-product.md`
