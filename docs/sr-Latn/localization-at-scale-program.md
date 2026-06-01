# Program lokalizacije u velikom obimu

## Sažetak

Ovaj priručnik definiše lokalizaciju u velikom obimu u Let Books kao dugoročni operativni model za višejezično objavljivanje, pregled, validaciju, održavanje i kontinuirano učenje.

Njegova centralna teza je jednostavna:

> Lokalizacija u velikom obimu nije prvenstveno prevodilački problem.
>
> Ona je problem dizajna sistema povratnih informacija i višejezičnog sistema znanja.

## Centralna ideja

Cilj nije samo prevoditi reči.

Cilj je pomoći ljudima da uče, učestvuju, doprinose, podučavaju, čuvaju znanje i pristupaju informacijama na jeziku koji najbolje razumeju, uz istovremeno održavanje višejezičnog sistema održivim kroz vreme.

## Slojevi programa

- `docs/blog/` objašnjava zašto je lokalizacija važna u praksi.
- `docs/wiki/` definiše trajna pravila, modele i upravljanje.
- `docs/learning/` temu pretvara u operativne tokove rada.
- `docs/style-guide/` definiše pravila za saradnike, terminologiju, pregled i objavu.
- `docs/sources/` čuva sledljivost ključnih tvrdnji.
- `docs/localization-audit-report.md` prati dug, klase grešaka i status zatvaranja.

## Lokalizacija je sistem, a ne projekat

Mnoga lokalizaciona nastojanja tretiraju se kao jednokratni projekti:

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
Spreči odstupanje
Ponovi
```

Težina nije samo jednom napraviti prevode.

Težina je upravljati višejezičnim sistemom znanja kroz vreme bez gubitka pokrivenosti, potpunosti, kvaliteta ili svežine.

## AI najbolje radi unutar povratnih petlji

AI je koristan u lokalizaciji, ali njegova korisnost zavisi od kvaliteta okolnog sistema povratnih informacija.

Najvažniji slojevi povratnih informacija su:

- provere u CI-ju
- strukturni validatori
- provere pravopisa
- terminološke provere
- provere semantičke paritete
- provere pristupačnosti
- provere prikaza u pregledaču
- validacija linkova
- pregled izvornih govornika

Brza povratna informacija vrednija je od savršenog prvog pokušaja.

## Dvosmerni pregled

Engleski ostaje kanonski izvorni jezik za objavu i sinhronizaciju.

Ipak, korisni uvidi mogu nastati na bilo kom jeziku.

Lokalizaciju zato ne treba tretirati kao jednosmeran proces:

```text
Engleski
↓
Prevodi
```

Nego kao dvosmeran sistem:

```text
Engleski
↕
Prevodi
```

Kanonski izvor ne znači kanonsku mudrost.

Ako promena u lokalizovanoj verziji otkrije dvosmislenost, terminološki problem, nedostajući kontekst ili formulaciju neprijateljsku prema prevođenju u engleskom izvoru, treba poboljšati i kanonski izvor te pregledati ostale jezike.

Kod svake značajnije promene pitaj:

- otkriva li ova promena problem u izvornom jeziku
- treba li da koristi i drugim jezicima
- treba li promeniti terminološke smernice
- treba li promeniti smernice pregleda
- treba li promeniti validatore

## Model kvaliteta lokalizacije

Kvalitet lokalizacije treba pratiti kroz četiri dimenzije:

### Pokrivenost

Postoji li sadržaj na datom jeziku uopšte?

### Potpunost

Da li je lokalizovan sav sadržaj koji čitalac vidi?

### Kvalitet

Da li je tekst prirodan, tačan i prikladan ciljnoj publici?

### Svežina

Da li lokalizovana verzija i dalje odražava trenutni izvor?

## Pravilo potpunosti lokalizacije

Stranica nije potpuna samo zato što su lokalizovani:

- URL
- naslov
- navigacija
- omotač stranice

Mora biti lokalizovan sav sadržaj koji je vidljiv čitaocu, uključujući:

- sažetke
- metapodatke
- oznake tema
- naslove i podnaslove
- telo članka
- natpise i alternativni tekst
- dijagrame i tekst unutar dijagrama
- povezani sadržaj

Pokrivenost bez potpunosti vodi u mešanojezično objavljivanje.

## Korpus nalaza izvornih govornika

Detaljan korpus nalaza izvornih govornika ostaje prvoklasna isporuka u kanonskom priručniku `../localization-at-scale-program.md`.

Njegova svrha je da dokumentuje slučajeve u kojima je prevod bio:

- tehnički tačan
- značenjski veran
- uspešan na automatizovanim proverama
- ali ga je izvorni govornik ipak mogao poboljšati

Takvi primeri ključni su za učenje sistema, poboljšanje smernica i razvoj validatora.

## Kontinuirano učenje

Svaki lokalizacioni problem trebalo bi da poboljša sistem.

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
Dodaj validaciju gde je praktično
↓
Spreči ponavljanje
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

Dug meri preostali sadržajni posao.

Klase grešaka mere zrelost sistema.

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

## Zrelost repozitorijuma

Repozitorijum treba da napreduje kroz ove faze:

1. prevedi sadržaj
2. otkrij probleme
3. stvori validatore
4. automatizuj validaciju
5. spreči ponavljanje
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
