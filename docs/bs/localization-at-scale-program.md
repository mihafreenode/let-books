# Program lokalizacije u velikom obimu

## Sažetak

Ovaj priručnik definiše lokalizaciju u velikom obimu u Let Books kao dugoročni operativni model za višejezično objavljivanje, pregled, validaciju, održavanje i kontinuirano učenje.

Njegova centralna teza je jednostavna:

> Lokalizacija u velikom obimu nije prvenstveno prevodilački problem.
>
> Ona je problem dizajna sistema povratnih informacija i višejezičnog sistema znanja.

## Centralna ideja

Cilj nije samo prevoditi riječi.

Cilj je pomoći ljudima da uče, učestvuju, doprinose, podučavaju, čuvaju znanje i pristupaju informacijama na jeziku koji najbolje razumiju, uz istovremeno održavanje višejezičnog sistema održivim kroz vrijeme.

## Slojevi programa

- `docs/blog/` objašnjava zašto je lokalizacija važna u praksi.
- `docs/wiki/` definiše trajna pravila, modele i upravljanje.
- `docs/learning/` temu pretvara u operativne tokove rada.
- `docs/style-guide/` definiše pravila za saradnike, terminologiju, pregled i objavu.
- `docs/sources/` čuva sljedivost ključnih tvrdnji.
- `docs/localization-audit-report.md` prati dug, klase grešaka i status zatvaranja.

## Lokalizacija je sistem, a ne projekat

Mnoga lokalizacijska nastojanja tretiraju se kao jednokratni projekti:

```text
Prevedi
Objavi
Završi
```

Lokalizacija u velikom obimu tretira lokalizaciju kao operativni sistem:

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

Težina nije samo jednom napraviti prevode.

Težina je upravljati višejezičnim sistemom znanja kroz vrijeme bez gubitka pokrivenosti, potpunosti, kvaliteta ili svježine.

## AI najbolje radi unutar povratnih petlji

AI je koristan u lokalizaciji, ali njegova korisnost zavisi od kvaliteta okolnog sistema povratnih informacija.

Najvažniji slojevi povratnih informacija su:

- provjere u CI-ju
- strukturni validatori
- provjere pravopisa
- terminološke provjere
- provjere semantičke paritete
- provjere pristupačnosti
- provjere prikaza u pregledniku
- validacija linkova
- pregled izvornih govornika

Brza povratna informacija vrjednija je od savršenog prvog pokušaja.

## Dvosmjerni pregled

Engleski ostaje kanonski izvorni jezik za objavu i sinhronizaciju.

Ipak, korisni uvidi mogu nastati u bilo kojem jeziku.

Lokalizaciju zato ne treba tretirati kao jednosmjeran proces:

```text
Engleski
↓
Prijevodi
```

Nego kao dvosmjeran sistem:

```text
Engleski
↕
Prijevodi
```

Kanonski izvor ne znači kanonsku mudrost.

Ako promjena u lokalizovanoj verziji otkrije dvosmislenost, terminološki problem, nedostajući kontekst ili formulaciju neprijateljsku prema prevođenju u engleskom izvoru, treba poboljšati i kanonski izvor te pregledati ostale jezike.

Kod svake značajnije promjene pitaj:

- otkriva li ova promjena problem u izvornom jeziku
- treba li koristiti i drugim jezicima
- treba li promijeniti terminološke smjernice
- treba li promijeniti smjernice pregleda
- treba li promijeniti validatore

## Model kvaliteta lokalizacije

Kvalitet lokalizacije treba pratiti kroz četiri dimenzije:

### Pokrivenost

Postoji li sadržaj na datom jeziku uopšte?

### Potpunost

Je li lokalizovan sav sadržaj koji čitalac vidi?

### Kvalitet

Je li tekst prirodan, tačan i prikladan ciljanoj publici?

### Svježina

Odražava li lokalizovana verzija i dalje trenutni izvor?

## Pravilo potpunosti lokalizacije

Stranica nije potpuna samo zato što su lokalizovani:

- URL
- naslov
- navigacija
- ljuska stranice

Mora biti lokalizovan sav sadržaj koji je vidljiv čitaocu, uključujući:

- sažetke
- metapodatke
- oznake tema
- naslove i podnaslove
- tijelo članka
- natpise i alternativni tekst
- dijagrame i tekst unutar dijagrama
- povezani sadržaj

Pokrivenost bez potpunosti vodi u miješanojezično objavljivanje.

## Korpus nalaza izvornih govornika

Detaljan korpus nalaza izvornih govornika ostaje prvoklasna isporuka u kanonskom priručniku `../localization-at-scale-program.md`.

Njegova svrha je dokumentovati slučajeve u kojima je prevod bio:

- tehnički tačan
- značenjski vjeran
- uspješan na automatizovanim provjerama
- ali ga je izvorni govornik ipak mogao poboljšati

Takvi primjeri ključni su za učenje sistema, poboljšanje smjernica i razvoj validatora.

## Kontinuirano učenje

Svaki lokalizacijski problem trebao bi poboljšati sistem.

Preporučena petlja je:

```text
Pronađi problem
↓
Ispravi problem
↓
Dokumentuj problem
↓
Klasifikuj problem
↓
Poboljšaj tok rada
↓
Dodaj validaciju gdje je praktično
↓
Spriječi ponavljanje
```

Idealan rezultat je da se problem ispravi:

- jednom u sadržaju
- jednom u sistemu

## Dug, klase grešaka i odstupanje

Prati oba pokazatelja:

```text
Localization Debt = X
Open Defect Classes = Y
```

Dug mjeri preostali sadržajni posao.

Klase grešaka mjere zrelost sistema.

Lokalizaciono odstupanje znači da lokalizovani sadržaj postoji, ali više ne odražava trenutni izvor.

## Pravilo: prvo popravi klasu, pa datoteku

Nemoj optimizovati prvenstveno oko broja preostalih datoteka.

Optimizuj oko broja preostalih klasa grešaka.

Preporučeni proces:

1. prepoznaj klasu problema
2. odredi temeljni uzrok
3. popravi najviši mogući izvor
4. ažuriraj validator
5. ažuriraj tok rada
6. zatim popravi preostale pojave

## Zrelost repozitorija

Repozitorij treba napredovati kroz ove faze:

1. prevedi sadržaj
2. otkrij probleme
3. stvori validatore
4. automatizuj validaciju
5. spriječi ponavljanje
6. upravljaj lokalizacionim odstupanjem
7. poduči buduće saradnike i AI sisteme

## Operativni cilj

Najviši cilj lokalizacije u velikom obimu je:

**puna jezička pokrivenost, potpunost lokalizacije, semantička pariteta, čitljivost prirodnog jezika, kulturna prikladnost, obrazovna efikasnost, kontinuirano poboljšavanje, sprečavanje grešaka, upravljanje odstupanjem i održivo višejezično objavljivanje uz snažne povratne petlje.**

## Povezani dokumenti

- `../localization-at-scale-program.md`
- `../localization-audit-report.md`
- `wiki/localization-at-scale.md`
- `wiki/translation-quality-assurance.md`
- `wiki/localization-ci-cd.md`
- `style-guide/localization/README.md`
