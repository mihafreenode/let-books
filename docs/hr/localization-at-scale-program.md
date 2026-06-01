# Program lokalizacije u velikom opsegu

## Sažetak

Ovaj priručnik definira lokalizaciju u velikom opsegu u Let Books kao dugoročni operativni model za višejezično objavljivanje, pregled, validaciju, održavanje i kontinuirano učenje.

Njegova je središnja teza jednostavna:

> Lokalizacija u velikom opsegu nije prvenstveno prevoditeljski problem.
>
> Ona je problem dizajna sustava povratnih informacija i višejezičnog sustava znanja.

## Središnja ideja

Cilj nije samo prevoditi riječi.

Cilj je pomoći ljudima da uče, sudjeluju, doprinose, poučavaju, čuvaju znanje i pristupaju informacijama na jeziku koji najbolje razumiju, uz istodobno održavanje višejezičnog sustava održivim kroz vrijeme.

## Slojevi programa

- `docs/blog/` objašnjava zašto je lokalizacija važna u praksi.
- `docs/wiki/` definira trajna pravila, modele i upravljanje.
- `docs/learning/` temu pretvara u operativne tijekove rada.
- `docs/style-guide/` definira pravila za suradnike, terminologiju, pregled i objavu.
- `docs/sources/` čuva sljedivost ključnih tvrdnji.
- `docs/localization-audit-report.md` prati dug, razrede grešaka i status zatvaranja.

## Lokalizacija je sustav, a ne projekt

Mnoga se lokalizacijska nastojanja tretiraju kao jednokratni projekti:

```text
Prevedi
Objavi
Završi
```

Lokalizacija u velikom opsegu lokalizaciju tretira kao operativni sustav:

```text
Stvori
Prevedi
Validiraj
Poboljšaj
Održavaj
Ažuriraj
Spriječi odstupanje
Ponovi
```

Teškoća nije samo jednom izraditi prijevode.

Teškoća je upravljati višejezičnim sustavom znanja kroz vrijeme bez gubitka pokrivenosti, potpunosti, kvalitete ili svježine.

## AI najbolje radi unutar povratnih petlji

AI je koristan u lokalizaciji, ali njegova korisnost ovisi o kvaliteti okolnog sustava povratnih informacija.

Najvažniji slojevi povratnih informacija su:

- provjere u CI-ju
- strukturni validatori
- provjere pravopisa
- terminološke provjere
- provjere semantičke paritete
- provjere pristupačnosti
- provjere prikaza u pregledniku
- validacija poveznica
- pregled izvornih govornika

Brza povratna informacija vrjednija je od savršenog prvog pokušaja.

## Dvosmjerni pregled

Engleski ostaje kanonski izvorni jezik za objavu i sinkronizaciju.

Ipak, korisni uvidi mogu nastati u bilo kojem jeziku.

Lokalizaciju zato ne treba tretirati kao jednosmjeran proces:

```text
Engleski
↓
Prijevodi
```

Nego kao dvosmjeran sustav:

```text
Engleski
↕
Prijevodi
```

Kanonski izvor ne znači kanonsku mudrost.

Ako promjena u lokaliziranoj verziji otkrije dvosmislenost, terminološki problem, nedostajući kontekst ili formulaciju neprijateljsku prema prevođenju u engleskom izvoru, treba poboljšati i kanonski izvor te pregledati ostale jezike.

Kod svake značajnije promjene pitaj:

- otkriva li ova promjena problem u izvornom jeziku
- bi li trebala koristiti i drugim jezicima
- treba li promijeniti terminološke smjernice
- treba li promijeniti smjernice pregleda
- treba li promijeniti validatore

## Model kvalitete lokalizacije

Kvalitetu lokalizacije treba pratiti kroz četiri dimenzije:

### Pokrivenost

Postoji li sadržaj u danom jeziku uopće?

### Potpunost

Je li lokaliziran sav sadržaj koji čitatelj vidi?

### Kvaliteta

Je li tekst prirodan, točan i prikladan ciljanoj publici?

### Svježina

Odražava li lokalizirana verzija i dalje trenutačni izvor?

## Pravilo potpunosti lokalizacije

Stranica nije potpuna samo zato što su lokalizirani:

- URL
- naslov
- navigacija
- ljuska stranice

Mora biti lokaliziran sav sadržaj koji je vidljiv čitatelju, uključujući:

- sažetke
- metapodatke
- oznake tema
- naslove i podnaslove
- tijelo članka
- natpise i alternativni tekst
- dijagrame i tekst unutar dijagrama
- povezani sadržaj

Pokrivenost bez potpunosti vodi u miješanojezičnu objavu.

## Korpus nalaza izvornih govornika

Detaljan korpus nalaza izvornih govornika ostaje prvoklasna isporuka u kanonskom priručniku `../localization-at-scale-program.md`.

Njegova je svrha dokumentirati slučajeve u kojima je prijevod bio:

- tehnički točan
- značenjski vjeran
- uspješan na automatiziranim provjerama
- ali ga je izvorni govornik ipak mogao poboljšati

Takvi su primjeri ključni za učenje sustava, poboljšanje smjernica i razvoj validatora.

## Kontinuirano učenje

Svaki lokalizacijski problem trebao bi poboljšati sustav.

Preporučena petlja je:

```text
Pronađi problem
↓
Ispravi problem
↓
Dokumentiraj problem
↓
Klasificiraj problem
↓
Poboljšaj tijek rada
↓
Dodaj validaciju gdje je praktično
↓
Spriječi ponavljanje
```

Idealni je rezultat da se problem ispravi:

- jednom u sadržaju
- jednom u sustavu

## Dug, razredi grešaka i odstupanje

Prati oba pokazatelja:

```text
Localization Debt = X
Open Defect Classes = Y
```

Dug mjeri preostali sadržajni posao.

Razredi grešaka mjere zrelost sustava.

Lokalizacijsko odstupanje znači da lokalizirani sadržaj postoji, ali više ne odražava trenutačni izvor.

## Pravilo: prvo popravi razred, pa datoteku

Nemoj optimizirati prvenstveno oko broja preostalih datoteka.

Optimiziraj oko broja preostalih razreda grešaka.

Preporučeni proces:

1. prepoznaj razred problema
2. odredi temeljni uzrok
3. popravi najviši mogući izvor
4. ažuriraj validator
5. ažuriraj tijek rada
6. zatim popravi preostale pojave

## Zrelost repozitorija

Repozitorij treba napredovati kroz ove faze:

1. prevedi sadržaj
2. otkrij probleme
3. stvori validatore
4. automatiziraj validaciju
5. spriječi ponavljanje
6. upravljaj lokalizacijskim odstupanjem
7. pouči buduće suradnike i AI sustave

## Operativni cilj

Najviši cilj lokalizacije u velikom opsegu je:

**puna jezična pokrivenost, potpunost lokalizacije, semantička pariteta, čitljivost prirodnog jezika, kulturna prikladnost, obrazovna učinkovitost, kontinuirano poboljšavanje, sprječavanje grešaka, upravljanje odstupanjem i održivo višejezično objavljivanje uz snažne povratne petlje.**

## Povezani dokumenti

- `../localization-at-scale-program.md`
- `../localization-audit-report.md`
- `wiki/localization-at-scale.md`
- `wiki/translation-quality-assurance.md`
- `wiki/localization-ci-cd.md`
- `style-guide/localization/README.md`
