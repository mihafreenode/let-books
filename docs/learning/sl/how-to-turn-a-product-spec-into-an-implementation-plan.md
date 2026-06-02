---
title: "Kako produktno specifikacijo pretvoriti v izvedbeni načrt"
summary: >-
  Ta vodič pojasnjuje, kako produktno specifikacijo prevesti v konkreten izvedbeni načrt, ne da bi pri tem izgubili namen, meje ali pravila poteka dela, zaradi katerih je bila specifikacija sploh uporabna.
topics:
  - spec-writing
  - implementation-planning
  - project-management
---
# Kako produktno specifikacijo pretvoriti v izvedbeni načrt

## Povzetek

Ta vodič pojasnjuje, kako produktno specifikacijo prevesti v konkreten izvedbeni načrt, ne da bi pri tem izgubili namen, meje ali pravila poteka dela, zaradi katerih je bila specifikacija sploh uporabna.

## Zakaj je ta korak pomemben

Specifikacija opisuje, kaj naj produkt naredi in zakaj naj to naredi.

Izvedbeni načrt opisuje, kako bo ekipa to vedenje dostavila v zaporedju, ki ga je mogoče pregledati, testirati in realno izvesti.

Veliko projektov odpove v vrzeli med tema dvema dokumentoma.

Specifikacija je lahko dobra, vendar načrt postane preveč nejasen, preveč tehničen ali preveč odmaknjen od uporabniških potekov dela. Pri delu s pomočjo AI je to še pogostejše, ker lahko ustvarjena koda daje vtis, da je načrtovanje že bilo opravljeno, čeprav v resnici ni bilo.

## Začnite z izluščenjem produktnih odločitev

Preden specifikacijo pretvorite v naloge, določite odločitve, ki dejansko omejujejo izvedbo.

Poiščite:

- namen produkta
- uporabniški potek dela
- meje obsega
- pravila, o katerih ni pogajanja
- rezervno vedenje
- kriterije sprejema

To so deli, ki morajo preživeti prehod iz specifikacije v načrt.

Če jih načrt izgubi, se običajno spremeni v tehnični seznam opravil namesto v dostavni načrt.

## Načrt ločite na plasti

Dober izvedbeni načrt ima običajno vsaj tri plasti.

### 1. Plast poteka dela

V kratkih konkretnih korakih opišite uporabniku viden tok.

Primer:

1. uporabnik izbere škatlo za shranjevanje
2. uporabnik skenira ali vnese ISBN
3. uporabnik lahko nadaljuje tudi, če iskanje odpove
4. uporabnik shrani fizični izvod na izbrano lokacijo

Ta plast varuje uporabniško pot, da se ne izgubi pod tehničnimi nalogami.

### 2. Sistemska plast

Opišite dele sistema, ki morajo podpirati ta potek dela.

Primeri:

- spremembe podatkovnega modela
- zasloni ali obrazci uporabniškega vmesnika
- validacijska pravila
- vedenje uvoza/izvoza
- posodobitve lokalizacije
- potrebe po preverjanju

Ta plast poveže vedenje produkta s tehničnim delom.

### 3. Dostavna plast

Sistemsko delo razdelite v zaporedje, ki ga je dejansko mogoče izvesti in pregledati.

Primeri:

1. določite ali posodobite domenski model
2. izvedite glavni tok uporabniškega vmesnika
3. dodajte rezervno vedenje
4. dodajte validacijo in teste
5. posodobite dokumentacijo in primere

Na tej plasti načrt postane razporeljiv.

## Načrt naj oblikujejo omejitve

Izvedbeni načrti pogosto odtavajo, ko se prepišejo v generične inženirske korake.

Da se temu izognete, naj bodo ključne produktne omejitve vidne znotraj načrta.

Pri delu v slogu Let Books to lahko vključuje omejitve, kot so:

- ročni poteki dela morajo še vedno delovati brez AI
- nepopolni podatki morajo biti dovoljeni
- fizični izvodi morajo ostati ločeni od bibliografskih zapisov
- lokalizacije ni mogoče obravnavati kot neobvezno olepšavo
- dokumentacija trenutnega stanja mora ostati poštena glede tega, kaj trenutno obstaja

Te omejitve ne bi smele živeti le v izvorni specifikaciji. Pojaviti bi se morale tudi v načrtovalnih zapiskih in merilih za pregled.

## Za oblikovanje razčlenitve nalog uporabite kriterije sprejema

Eden najlažjih načinov, kako specifikacijo pretvoriti v načrt, je, da začnete pri kriterijih sprejema.

Za vsak kriterij se vprašajte:

- kateri uporabniški vmesnik ali potek dela to podpira
- kateri podatki ali vedenje sistema to podpirajo
- kateri primer napake mora še vedno uspeti
- kako bomo to preverili

Ta metoda ohranja načrt vezan na opazne rezultate namesto na abstraktne razprave o arhitekturi.

## Načrtovanje s pomočjo AI: na kaj paziti

AI lahko pomaga hitro ustvariti izvedbeni načrt, vendar pogosto uvede ponavljajoče se težave:

- dodatne abstrakcije brez produktne potrebe
- naloge, združene po tehnologiji namesto po poteku dela
- optimistična izpustitev rezervnega vedenja
- skrite predpostavke o razpoložljivosti zaledja ali kakovosti podatkov
- načrte, ki delujejo popolni, vendar prezrejo dokumentacijo in preverjanje

Pri pregledu izvedbenega načrta, ki ga je ustvaril AI, se vprašajte, ali še vedno odraža dejanski nabor produktnih pravil.

## Praktična predloga za načrtovanje

Uporabite strukturo, kot je ta:

1. cilj funkcionalnosti
2. povzetek uporabniškega poteka dela
3. omejitve in pravila, o katerih ni pogajanja
4. dostavni rezi
5. strategija preverjanja
6. zahtevane posodobitve dokumentacije

Na primer, dostavni rez bi lahko bil:

- dodaj izbirnik lokacije shranjevanja v tok zajema
- dovoli shranjevanje tudi brez uspešnega iskanja metapodatkov
- fizični izvod shrani ločeno od bibliografskih metapodatkov
- posodobi besedilo vodnika in opombe za preverjanje

To je veliko močnejše od ravnega seznama, kot je:

- ustvari obrazec
- dodaj klic API
- dodaj teste

## Primer Let Books

Repozitorij že vsebuje surove vhodne podatke za ta slog načrtovanja:

- `AGENTS.md` za namen produkta, poteke dela in kriterije sprejema
- `AGENTS-Implementation.md` za omejitve dostave in pravila repozitorija
- `README.md` za pričakovanja trenutnega stanja
- `docs/Development.md` in `docs/Deployment.md` za kontekst validacije in dostave

To pomeni, da izvedbenemu načrtu ni treba izumljati lastne logike. Te plasti mora prevesti v omejeno dostavno zaporedje.

## Kontrolni seznam za pregled

Preden sprejmete izvedbeni načrt, preverite:

1. Ali ohranja uporabniški potek dela iz specifikacije?
2. Ali ohranja vidne produktne omejitve, o katerih ni pogajanja?
3. Ali vključuje rezervno vedenje in vedenje ob napakah?
4. Ali vključuje delo na dokumentaciji in preverjanju, ne le nalog v kodi?
5. Ali bi lahko drug sodelujoči na podlagi tega načrta izvedel delo brez ugibanja o namenu produkta?

## Dodatno branje

- `../spec-driven-content-program.md`
- `how-to-write-a-spec-that-ai-can-follow.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `../wiki/sl/spec-driven-development.md`
- `../blog/sl/spec-driven-development-in-let-books.md`
