# Program lokalizacije v obsegu

## Povzetek

Ta priročnik opredeljuje lokalizacijo v obsegu v Let Books kot dolgoročni operativni model za večjezično objavljanje, pregledovanje, validacijo, vzdrževanje in neprekinjeno učenje.

Njegova osrednja teza je preprosta:

> Lokalizacija v obsegu ni predvsem prevajalski problem.
>
> Je problem zasnove povratnih sistemov in večjezičnega sistema znanja.

## Osrednja zamisel

Cilj ni samo prevajati besede.

Cilj je pomagati ljudem, da se učijo, sodelujejo, prispevajo, poučujejo, ohranjajo znanje in dostopajo do informacij v jeziku, ki ga najbolje razumejo, ob tem pa ohranjati večjezični sistem vzdržen skozi čas.

## Programske plasti

- `docs/blog/` pojasnjuje, zakaj je lokalizacija pomembna v praksi.
- `docs/wiki/` določa trajna pravila, modele in upravljanje.
- `docs/learning/` temo prevaja v operativne poteke dela.
- `docs/style-guide/` določa pravila za sodelavce, terminologijo, pregled in objavo.
- `docs/sources/` ohranja sledljivost ključnih trditev.
- `docs/localization-audit-report.md` sledi dolgu, razredom napak in statusu zaprtja.

## Lokalizacija je sistem, ne projekt

Številna lokalizacijska prizadevanja so obravnavana kot enkratni projekti:

```text
Prevedi
Objavi
Končaj
```

Lokalizacija v obsegu pa lokalizacijo obravnava kot operacijski sistem:

```text
Ustvari
Prevedi
Validiraj
Izboljšaj
Vzdržuj
Posodobi
Prepreči odmik
Ponovi
```

Težava ni samo ustvariti prevode enkrat.

Težava je upravljati večjezični sistem znanja skozi čas, ne da bi izgubili pokritost, popolnost, kakovost ali svežino.

## AI najbolje deluje v povratnih zankah

AI je uporaben pri lokalizaciji, vendar je njegova uporabnost odvisna od kakovosti okolnega sistema povratnih informacij.

Najpomembnejše povratne plasti so:

- preverjanja v CI
- strukturni validatorji
- črkovalniki
- terminološka preverjanja
- preverjanja semantične paritete
- preverjanja dostopnosti
- preverjanja brskalniškega prikaza
- validacija povezav
- pregled naravnih govorcev

Hitre povratne informacije premagajo popoln prvi poskus.

## Dvosmerno pregledovanje

Angleščina ostaja kanonični izvorni jezik za objavo in sinhronizacijo.

Koristni vpogledi pa lahko izvirajo iz katerega koli jezika.

Lokalizacije zato ne smemo obravnavati kot enosmernega procesa:

```text
Angleščina
↓
Prevedene različice
```

Temveč kot dvosmeren sistem:

```text
Angleščina
↕
Prevedene različice
```

Kanonični vir ne pomeni kanonične modrosti.

Če sprememba v lokaliziranem jeziku razkrije dvoumnost, terminološki problem, manjkajoči kontekst ali prevajanju sovražno formulacijo v angleščini, je treba izboljšati tudi kanonični vir in preveriti druge jezike.

Pri vsaki pomembnejši spremembi vprašaj:

- ali ta sprememba razkrije težavo v izvornem jeziku
- ali bi morala koristiti tudi drugim jezikom
- ali je treba posodobiti terminološka pravila
- ali je treba posodobiti navodila za pregled
- ali je treba posodobiti validatorje

## Model kakovosti lokalizacije

Kakovost lokalizacije je treba spremljati v štirih dimenzijah:

### Pokritost

Ali vsebina v danem jeziku sploh obstaja?

### Popolnost

Ali je lokalizirana vsa vsebina, ki jo vidi bralec?

### Kakovost

Ali besedilo deluje naravno, natančno in ustrezno za ciljno občinstvo?

### Svežina

Ali lokalizirana različica še vedno odraža trenutno izvorno vsebino?

## Pravilo popolnosti lokalizacije

Stran ni popolna že zato, ker so lokalizirani:

- URL
- naslov
- navigacija
- lupina strani

Lokalizirana mora biti vsa vsebina, ki jo vidi bralec, vključno z:

- povzetki
- metapodatki
- oznakami tem
- naslovi in podnaslovi
- telesom članka
- napisi in alternativnim besedilom
- diagrami in besedilom na diagramih
- povezanimi vsebinami

Pokritost brez popolnosti vodi v mešanojezično objavljanje.

## Korpus ugotovitev naravnih govorcev

Podroben korpus pregledov naravnih govorcev ostaja prvovrstna deliverable v kanoničnem priročniku `../localization-at-scale-program.md`.

Njegov namen je dokumentirati primere, kjer je bil prevod:

- tehnično pravilen
- pomensko zvest
- uspešen na avtomatiziranih preverjanjih
- vseeno pa ga je naravni govorec lahko izboljšal

Takšni primeri so ključni za učenje sistema, izboljšanje navodil in razvoj validatorjev.

## Neprekinjeno učenje

Vsaka lokalizacijska težava naj izboljša sistem.

Priporočena zanka je:

```text
Najdi težavo
↓
Odpravi težavo
↓
Dokumentiraj težavo
↓
Razvrsti težavo
↓
Izboljšaj potek dela
↓
Dodaj validacijo, kjer je smiselno
↓
Prepreči ponovitev
```

Idealni rezultat je, da se težava odpravi:

- enkrat v vsebini
- enkrat v sistemu

## Dolg, razredi napak in odmik

Spremljaj oba kazalnika:

```text
Localization Debt = X
Open Defect Classes = Y
```

Dolg meri preostalo vsebinsko delo.

Razredi napak merijo zrelost sistema.

Lokalizacijski odmik pomeni, da lokalizirana vsebina obstaja, vendar ne odraža več trenutnega vira.

## Pravilo: najprej popravi razred, potem datoteko

Ne optimiziraj predvsem okoli števila preostalih datotek.

Optimiziraj okoli števila preostalih razredov napak.

Priporočen proces:

1. prepoznaj razred težave
2. določi temeljni vzrok
3. popravi najvišji možni vir
4. posodobi validator
5. posodobi potek dela
6. nato popravi preostale pojavitve

## Zrelost repozitorija

Repozitorij naj napreduje skozi te stopnje:

1. prevedi vsebino
2. zaznaj težave
3. ustvari validatorje
4. avtomatiziraj validacijo
5. prepreči ponovitve
6. upravljaj odmik lokalizacije
7. nauči prihodnje sodelavce in AI-sisteme

## Operativni cilj

Najvišji cilj lokalizacije v obsegu je:

**polna jezikovna pokritost, popolnost lokalizacije, semantična pariteta, berljivost naravnega jezika, kulturna ustreznost, izobraževalna učinkovitost, neprekinjeno izboljševanje, preprečevanje napak, upravljanje odmika in vzdržno večjezično objavljanje z močnimi povratnimi zankami.**

## Sorodni dokumenti

- `../localization-at-scale-program.md`
- `../localization-audit-report.md`
- `wiki/localization-at-scale.md`
- `wiki/translation-quality-assurance.md`
- `wiki/localization-ci-cd.md`
- `style-guide/localization/README.md`
