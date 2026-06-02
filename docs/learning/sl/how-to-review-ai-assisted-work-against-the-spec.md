---
title: "Kako pregledovati delo s pomočjo AI glede na specifikacijo"
summary: >-
  Ta vodič pojasnjuje, kako pregledovati izvedbo s pomočjo AI tako, da jo preverite glede na produktno specifikacijo, pravila poteka dela, dokumentacijo in pričakovanja validacije, namesto da presojate samo, ali je rezultat videti dodelan ali tehnično verjeten.
topics:
  - product-review
  - ai-assisted-delivery
  - spec-driven-development
---
# Kako pregledovati delo s pomočjo AI glede na specifikacijo

## Povzetek

Ta vodič pojasnjuje, kako pregledovati izvedbo s pomočjo AI tako, da jo preverite glede na produktno specifikacijo, pravila poteka dela, dokumentacijo in pričakovanja validacije, namesto da presojate samo, ali je rezultat videti dodelan ali tehnično verjeten.

## Zakaj je to pomembno

AI lahko zelo hitro ustvari kodo, besedilo, teste in spremembe vmesnika, ki delujejo popolne.

Ta hitrost ustvari tveganje pri pregledu: pregledovalci lahko nezavedno preidejo od vprašanja »Ali je to pravo vedenje produkta?« k vprašanju »Ali je to videti razumno?«.

To nista isto vprašanje.

Pri delu, ki ga vodijo specifikacije, se mora pregled začeti pri usklajenosti in se šele nato premakniti h kakovosti kode, slogu in podrobnostim izvedbe.

## Začnite pri viru resnice

Preden pregledate izhod, določite dokumente, ki opredeljujejo želeno vedenje.

V repozitoriju Let Books to običajno pomeni:

- `AGENTS.md` za produktna pravila, poteke dela in obseg
- `AGENTS-Implementation.md` za taktične omejitve dostave
- `README.md` za prikaz trenutnega stanja
- ustrezno dokumentacijo v `docs/` za objavljanje, preverjanje ali smernice za poteke dela

Brez tega koraka pregled zlahka postane subjektiven in lokalen.

## Pregledujte v pravem vrstnem redu

Pri pregledu dela s pomočjo AI uporabite ta vrstni red.

### 1. Usklajenost s produktom

Vprašajte, ali se izhod ujema z nameravanim uporabniškim potekom dela in produktno mejo.

Primeri:

- ali ročni vnos še vedno deluje tam, kjer ga specifikacija zahteva
- ali sprememba ohranja ločitev med fizičnimi izvodi in bibliografskimi zapisi
- ali dodaja vedenje, ki nikoli ni bilo odobreno
- ali napačno predstavlja neobvezne funkcije AI kot obvezne

Če je usklajenost s produktom napačna, ni velike vrednosti v tem, da najprej porabite veliko časa za dodelavo.

### 2. Usklajenost z dokumentacijo

Vprašajte, ali spremljajoča dokumentacija še vedno pošteno opisuje resničnost.

Primeri:

- ali je bil uporabniku viden potek dela spremenjen brez posodobitve dokumentacije
- ali README še vedno pravilno opisuje trenutno stanje
- ali se nove javne trditve ujemajo z dejansko dokumentiranim položajem produkta

Spremembe, ki jih ustvari AI, pogosto spremenijo vedenje, ne da bi se posodobila pripoved okoli tega vedenja.

### 3. Validacija in rezervno vedenje

Vprašajte, ali sprememba ohranja pričakovanja glede napak in rezervnega vedenja iz specifikacije.

Primeri:

- ali lahko potek dela še vedno uspe, ko neobvezen ponudnik odpove
- ali so neveljavni vhodi obravnavani izrecno
- ali so rezultati z nizko stopnjo zaupanja ali negotovi rezultati obravnavani kot predlogi namesto kot dejstva

Tu veliko verjetnih izvedb pade na resničnem produktnem preizkusu.

### 4. Tehnična kakovost

Šele po zgornjih preverjanjih bi morali večino časa nameniti:

- jasnosti
- vzdrževanosti
- poimenovanju
- podvajanju
- testom
- strukturi

Tehnična kakovost je še vedno pomembna. Le ne bi smela pretehtati produktne pravilnosti.

## Pogoste pasti pri pregledovanju

Delo s pomočjo AI pogosto ustvarja več ponovljivih pasti pri pregledovanju.

### Past dodelanega izhoda

Izhod je videti čist, zato pregledovalci predpostavijo, da je pravilen.

### Past bližnjega konteksta

Sprememba se ujema z najbližjo obstoječo izvedbo, vendar je lahko ta najbližja izvedba že odmaknjena.

### Past implicitnega obsega

Pomočnik doda funkcije, abstrakcije ali predpostavke, ki nikoli niso bile zahtevane, pregledovalec pa jih sprejme, ker niso očitno pokvarjene.

### Past uspešnih testov

Testi lahko uspejo zato, ker validirajo ustvarjeno vedenje, ne pa zato, ker validirajo nameravano vedenje produkta.

## Praktičen pregledni seznam

Za vsako večjo spremembo s pomočjo AI se vprašajte:

1. Katero produktno pravilo ali potek dela naj bi ta sprememba izvajala?
2. Katera specifikacija ali dokumentacija določa to pravilo?
3. Ali izhod ohranja zahtevane omejitve?
4. Ali ohranja rezervno vedenje nedotaknjeno?
5. Ali se dokumentacija še vedno ujema z nastalim vedenjem?
6. Katera validacija ali testi podpirajo spremembo?
7. Ali je pomočnik dodal kaj, kar bi bilo treba odstraniti kot izven obsega?

## Kako pregledovati ustvarjene teste

Ustvarjeni testi so uporabni, vendar jih je treba prav tako pregledati glede na specifikacijo.

Vprašajte:

- ali testi preverjajo nameravani potek dela
- ali pokrivajo rezervno vedenje
- ali odražajo dokumentirane robne pogoje
- ali preverjajo priročno vedenje, ki nikoli ni bilo specificirano

To je še posebej pomembno pri delu, ki ga vodijo specifikacije, ker lahko šibek testni paket utrdi odmik.

## Primeri Let Books

Primeri vprašanj na ravni specifikacije v tem repozitoriju vključujejo:

- ali potek dela ostaja uporaben tudi brez plačljivih storitev AI
- ali dokumentacija trenutnega stanja jasno ločuje stanje predstavitve od prihodnjih načrtov za zaledje
- ali se javna dokumentacija izogiba temu, da bi izvorno kodo obravnavala kot kanonični uredniški dokaz
- ali validacijski koraki ostajajo del dostavnega toka namesto neobveznega spomina

Ta vprašanja so dovolj konkretna, da usmerjajo pregled, kar je natanko to, kar bi morala omogočiti specifikacija.

## Trajna lekcija

Pregled dela s pomočjo AI ni namenjen temu, da preveri, ali je pomočnik ustvaril nekaj impresivnega. Namenjen je preverjanju, ali izhod še vedno pripada nameravanemu produktu.

Najboljše vprašanje pri pregledu običajno ni »Ali to deluje?«. Je »Ali se to ujema s specifikacijo, vključno z deli, ki jih je lahko pozabiti?«.

## Dodatno branje

- `../spec-driven-content-program.md`
- `how-to-write-a-spec-that-ai-can-follow.md`
- `how-to-turn-a-product-spec-into-an-implementation-plan.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `../wiki/sl/spec-driven-development.md`
- `../blog/sl/spec-driven-development-for-ai-projects.md`
