# Lokalizacija u velikom obimu

## Sažetak

Ovaj priručnik u Let Books definiše Lokalizaciju u velikom obimu kao dugoročni operativni model za višejezično objavljivanje, pregledanje, validaciju, održavanje i kontinuirano učenje.

Njegova centralna teza je jednostavna:

> Lokalizacija u velikom obimu nije prvenstveno prevodilački problem.
>
> Ona je problem dizajna sistema povratnih informacija i višejezičnog sistema znanja.

Cilj nije samo prevoditi riječi.

Cilj je pomoći ljudima da uče, učestvuju, doprinose, podučavaju, čuvaju znanje i pristupaju informacijama na jeziku koji najbolje razumiju, a da pritom višejezični sistem ostane održiv kroz vrijeme.

## Slojevi programa

- `docs/blog/` objašnjava zašto je lokalizacija važna u praksi.
- `docs/wiki/` definiše trajna pravila, modele i upravljanje.
- `docs/learning/` pretvara temu u operativne tokove rada.
- `docs/style-guide/` definiše pravila za saradnike, terminologiju, pregled i objavljivanje.
- `docs/sources/` održava sljedivost ključnih tvrdnji.
- `docs/localization-audit-report.md` prati dug, klase grešaka i status zatvaranja.

## 1. dio - Zašto je lokalizacija važna

Lokalizacija je važna zato što je jezička pristupačnost dio stvarnog pristupa.

Ako čitalac ne može udobno razumjeti sadržaj, pristup postoji samo u uskom tehničkom smislu.

Za Let Books višejezično objavljivanje važno je iz praktičnih razloga:

- obrazovna pristupačnost
- kulturno učešće
- jednakost znanja
- digitalna uključenost
- tehnologija u javnom interesu
- višejezično upravljanje
- očuvanje manjih jezika
- podrška službenim i regionalnim jezicima
- evropska višejezičnost u praksi
- princip "Ujedinjeni u različitosti" primijenjen na funkcionalan softver i sisteme znanja

Ovo nije argument za simbolično prevođenje.

Ovo je argument za upotrebljivo višejezično učešće.

Čitaoci se ne susreću samo s naslovima i menijima. Susreću se s objašnjenjima, upozorenjima, dijagramima, tokovima pregleda, primjerima, tekstovima pristupačnosti, metapodacima i obrazovnim okvirom. Ako sve to ostane samo na engleskom, sistem i dalje privileguje čitaoce engleskog čak i kada lokalizovane ljuske postoje.

## 2. dio - Lokalizacija je sistem, a ne projekat

Mnoga lokalizacijska nastojanja vode se kao da su konačni projekti:

```text
Prevedi
Objavi
Završi
```

Taj model se brzo raspada.

Sadržaj se mijenja.

Terminologija se razvija.

Jezici se razvijaju.

Saradnici se mijenjaju.

AI sistemi se poboljšavaju.

Izvorni govornici nakon objave otkrivaju nove probleme.

Lokalizacija u velikom obimu zato tretira lokalizaciju kao operativni sistem:

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

Teški problem nije jednom napraviti prevode.

Teški problem je upravljati višejezičnim sistemom znanja kroz vrijeme bez gubitka pokrivenosti, pariteta, kvaliteta, svježine ili povjerenja recenzenata.

## 3. dio - AI najbolje radi unutar povratnih petlji

AI je koristan u lokalizaciji, ali njegova korisnost zavisi od kvaliteta okolnog sistema povratnih informacija.

Kent Beck je jasno sažeo inženjersku verziju ovog principa:

> "Optimism is an occupational hazard of programming; feedback is the treatment."

Norbert Wiener opisao je sistemsku verziju:

> "Feedback is a method of controlling a system by reinserting into it the results of its past performance."

To je ispravan model i za višejezično objavljivanje.

AI najbolje radi kada je njegov izlaz odmah izložen povratnim informacijama kao što su:

- CI provjere
- strukturni validatori
- provjere pravopisa
- terminološke provjere
- provjere semantičke paritete
- provjere pristupačnosti
- provjere u pregledniku i prikazu
- validacija linkova
- pregled izvornih govornika

Brza povratna informacija bolja je od savršenog prvog pokušaja.

Cilj nije zahtijevati savršene nacrte od ljudi ili od AI-ja.

Cilj je skratiti petlju između:

- stvaranja sadržaja
- otkrivanja nedostataka
- ispravljanja nedostataka
- sprečavanja ponavljanja

## 3A. dio - Dvosmjerni pregled

Engleski ostaje kanonski izvorni jezik za potrebe objave i sinhronizacije.

Međutim, korisni uvidi mogu nastati na bilo kojem jeziku.

Primjeri:

- pregled izvornog govornika prepoznaje nezgrapnu izvornu formulaciju
- prevodilac otkrije dvosmislenost
- recenzent pronađe nedostajući kontekst
- lokalizovani članak dobije bolji primjer
- terminologija se poboljša na neengleskom jeziku
- kulturni pregled otkrije problem pristupačnosti

Takvi nalazi mogu opravdati promjene u samom kanonskom izvoru.

### Princip dvosmjernog pregleda

Lokalizaciju ne treba tretirati kao jednosmjeran proces:

```text
English
↓
Translations
```

Nego kao:

```text
English
↕
Translations
```

Engleski ostaje kanonski.

Znanje može teći u oba smjera.

### Događaj međujezičnog pregleda

Svaka značajnija promjena sadržaja trebala bi pokrenuti pregled povezanih jezika.

Ako se promijeni engleski, pregledaj:

- sve lokalizovane verzije
- semantičku paritetu
- metapodatke
- sažetke
- dijagrame i snimke ekrana gdje je relevantno

Ako se promijeni lokalizovana verzija, pregledaj:

- da li taj nalaz poboljšava kanonski izvor
- da li bi i drugi jezici trebali imati korist od njega
- da li treba promijeniti terminološke smjernice
- da li treba promijeniti smjernice pregleda
- da li treba promijeniti validatore

### Poboljšavanje izvora kroz lokalizaciju

Lokalizacijski pregled može otkriti:

- dvosmislenost
- nepotrebnu složenost
- formulaciju neprijateljsku prema prevođenju
- skrivene pretpostavke
- kulturno specifičnu formulaciju
- nepristupačnu terminologiju

Kada se to dogodi, često je bolje poboljšati izvor nego odvojeno kompenzirati isti problem u svakom prevodu.

```text
Problem discovered in Slovenian
↓
Root cause found in English
↓
English improved
↓
All languages benefit
```

### Upit za pregled AI-agentom

Pri izmjeni bilo koje jezičke verzije pitaj:

```text
Does this change reveal a source-language issue?
Does this change improve other language versions?
Should terminology guidance change?
Should review guidance change?
Should validators change?
```

Odgovor može biti:

```text
No action needed
```

ili:

```text
Open cross-language review task
```

### Temeljni princip

Kanonski izvor ne znači kanonsku mudrost.

Engleski može biti izvor za sinhronizaciju.

Znanje, poboljšanja, nalazi pregleda i uvidi u kvalitet mogu nastati iz bilo kojeg podržanog jezika.

Višejezični projekat treba omogućiti da poboljšanja otkrivena u jednom jeziku koriste svim jezicima.

## 4. dio - Model kvaliteta lokalizacije

Kvalitet lokalizacije treba pratiti kroz četiri dimenzije.

### Pokrivenost

Pokrivenost pita može li čitalac uopće pristupiti sadržaju na svom jeziku.

Primjeri:

- Postoji li članak na bosanskom?
- Postoji li vodič za učenje na makedonskom?
- Postoji li stranica s pravilima na srpskoj ćirilici?

Pokrivenost je na nivou objave binarna.

Sadržaj za tu publiku ili postoji ili ne postoji.

### Potpunost

Potpunost pita jesu li lokalizovani svi dijelovi stranice koje čitalac vidi.

Primjeri:

- lokalizovan naslov, ali engleski sažetak
- lokalizovano tijelo, ali engleske oznake
- lokalizovan članak, ali neprevedene oznake na dijagramu
- lokalizovana ljuska stranice, ali engleske kartice povezanog sadržaja

Pokrivenost bez potpunosti proizvodi miješanojezično objavljivanje.

### Kvalitet

Kvalitet pita da li lokalizovani tekst zvuči prirodno, tačno i prikladno svojoj publici.

Primjeri:

- tehnički tačan, ali prevodilački ukočen izraz
- značenje je sačuvano, ali retorika je neprirodna
- tekst pravila je tačan, ali nije objavne kvalitete
- obrazovno objašnjenje je ispravno, ali se iz njega teško uči

Upravo ovdje pregled izvornog govornika donosi najviše jedinstvene vrijednosti.

### Svježina

Svježina pita odražava li lokalizovana verzija još uvijek trenutni izvor.

Primjeri:

- u engleskom je dodano novo upozorenje, ali nedostaje u prevodima
- zaključak u izvoru se promijenio, a prevedene stranice i dalje koriste stari okvir
- ažurirani dijagram ili snimak ekrana još nisu lokalizovani

Svježina je operativno lice lokalizacijskog odstupanja.

## 5. dio - Potpunost lokalizacije

### Pravilo lokalizacije svega što čitalac vidi

Stranica nije potpuna samo zato što je lokalizovano bilo šta od sljedećeg:

- URL
- naslov
- navigacija
- ljuska stranice
- kostur članka

Sav sadržaj koji čitalac vidi mora biti lokalizovan prije nego što se stranica smatra potpunom.

Sadržaj vidljiv čitaocu uključuje:

- naslove
- podnaslove
- sažetke
- opise
- oznake i nazive kategorija
- naslove odjeljaka
- tijela članaka
- liste
- istaknute napomene
- natpise
- dijagrame
- `alt` tekst
- tekst povezanog sadržaja
- metapodatke prikazane čitaocima
- lokalizovane mrvice navigacije gdje varijante postoje

Dopušteni izuzeci su uski:

- citati
- jasno označen materijal na izvornom jeziku o kojem se raspravlja
- vlastita imena
- tehnički identifikatori
- izričito namjerno neprevođenje

### Obrazac neuspjeha miješanojezičnog objavljivanja

Jedna od najvažnijih lekcija ove inicijative jeste da miješanojezično objavljivanje često na površini izgleda uspješno.

Stranica može imati:

- lokalizovanu putanju
- lokalizovan naslov
- lokalizovan uvodni pasus

i svejedno zakazati kod čitalaca jer sažeci, oznake, naslovi odjeljaka ili dijelovi tijela ostaju na engleskom.

Zato se potpunost prati odvojeno od pokrivenosti.

## 6. dio - Nalazi pregleda izvornih govornika

Ovaj odjeljak je prvoklasna isporuka.

Trebalo bi da raste s vremenom.

Ne treba ga sažimati u kratke zaključke.

Njegova svrha je dokumentovati stvarne slučajeve u kojima je:

- prevod bio tehnički tačan
- prevod sačuvao namjeravano značenje
- prevod prošao automatizovanu validaciju
- prevod prošao provjeru pravopisa
- prevod vjerovatno prošao provjere semantičke paritete
- izvorni govornik ipak pronašao priliku za poboljšanje

Tu se nalazi obrazovna vrijednost.

To pokazuje šta ostaje nakon što moderna lokalizacijska alatka već odradi svoj posao.

### Format zapisa u korpusu

Svaki zapis treba obuhvatiti:

- izvorni članak
- jezik
- izvorni engleski tekst
- izvorni lokalizovani tekst
- poboljšani lokalizovani tekst
- id
- objašnjenje
- kategoriju
- status
- da li je validator moguć
- povezane datoteke
- datum dodavanja
- da li bi automatizovani QA vjerovatno otkrio problem
- naučene lekcije

Preporučena mašinski čitljiva putanja korpusa:

- `docs/style-guide/localization/native-speaker-findings-corpus.json`

Korpus nije samo arhiva.

To je ponovo upotrebljiva kontrolna površina za:

- smjernice za pregled
- terminološke smjernice
- poboljšanja AI promptova
- pravila validatora
- regresijsku pokrivenost
- međujezični prijenos znanja

### Indeks kategorija

Trenutne i očekivane kategorije uključuju:

- paralelna struktura
- prenos engleske retorike
- konstrukcije sa skrivenim vršiocem
- antropomorfne apstrakcije
- prevodilački ton
- nesklad s obrazovnim stilom
- nesklad sa stilom javnog sektora
- neprirodna terminologija
- prenos diskurzivnih obrazaca
- kulturna prilagodba
- nesklad s očekivanjima publike
- poboljšanje čitljivosti
- poboljšanje tona
- očuvanje značenja uz gubitak tečnosti
- miješanojezično objavljivanje
- nepotrebna engleska terminologija
- nelokalizovani stručni žargon
- optimizacija izvornog teksta za lokalizaciju
- lažni prijatelj u tehničkoj terminologiji

### Optimizacija izvornog teksta za lokalizaciju

Definicija:

Izvorna rečenica može biti tehnički tačna, a ipak nepotrebno teška za prirodno prevođenje na više jezika.

Smjernica:

Kada se ponavljani prevodilački problemi javljaju zbog same izvorne formulacije, poboljšaj izvorni tekst umjesto da isti problem stalno kompenziraš u svakom ciljnom jeziku.

Radni princip:

> Bolji izvorni tekst često daje bolje prevode na svakom jeziku.

### Lažni prijatelj u tehničkoj terminologiji

Definicija:

Tehnički pojam preveden je pogrešnim značenjem iz druge struke, iako se površinski rječnički smisao čini uvjerljivim.

Smjernica:

Tehnički vokabular prevodi prema aktivnom domenskom kontekstu. U lokalizaciji softvera termine iz testiranja, QA-a, benchmarkinga i evaluacije treba prvo rješavati u tim domenama, a ne pomoću nepovezanih fizičkih ili svakodnevnih značenja.

### Nalaz 1 - Paralelna struktura

- Izvorni članak: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Jezik: slovenski
- Izvorni engleski tekst: `what the project is trying to achieve and what it is explicitly not trying to become`
- Izvorni lokalizovani tekst: `kaj projekt skuša doseči in česa ne sme postati`
- Poboljšani lokalizovani tekst: `kaj projekt skuša doseči in kaj ne sme postati`
- Objašnjenje: Izvorna slovenska rečenica gramatički je tačna i razumljiva. Čuva namjeravano značenje. Vjerovatno bi prošla pravopis, semantičku paritetu i opće QA provjere. Problem je stilski i strukturni. Formulacija previše vjerno preslikava englesku kontrastnu strukturu i gubi čišći paralelni oblik koji bi izvorni slovenski pisac obično izabrao.
- Kategorija: paralelna struktura; tečnost maternijeg jezika; prevodilački ton
- Da li bi automatizovani QA to vjerovatno otkrio?: Ne.
- Naučene lekcije: Očuvanje značenja nije dovoljno za prozu objavne kvalitete. Paralelne strukture često prežive mašinski prevod u tehnički prihvatljivim, ali pomalo stranozvučnim oblicima.

### Nalaz 2 - Prenos engleske retorike

- Izvorni članak: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Jezik: slovenski
- Izvorni engleski tekst: `Institutions care because documentation affects governance, procurement confidence, onboarding, continuity, and auditability.`
- Izvorni lokalizovani tekst: `Institucije bi morale to zanimati, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Poboljšani lokalizovani tekst: `Institucijam je to pomembno, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Objašnjenje: Izvorna slovenska verzija je razumljiva i semantički usklađena, ali previše direktno prenosi engleske retoričke navike. `Bi morale to zanimati` nije pogrešno, ali zvuči više kao preveden argument nego kao prirodno napisana slovenska objašnjavajuća proza. Poboljšana verzija koristi idiomatičniju konstrukciju za institucionalnu prozu.
- Kategorija: prenos engleskog retoričkog obrasca; prenos diskurzivnog obrasca; nesklad sa stilom javnog sektora
- Da li bi automatizovani QA to vjerovatno otkrio?: Ne.
- Naučene lekcije: Kvalitet maternijeg jezika često zavisi od preferiranih retoričkih obrazaca, a ne samo od leksičke tačnosti. Institucionalno i javnointeresno pisanje može zahtijevati drugačije rečenične navike nego što sugerišu engleski izvornici.

### Nalaz 3 - Konstrukcija sa skrivenim vršiocem

- Izvorni članak: `docs/blog/sl/spec-driven-development-for-ai-projects.md`
- Jezik: slovenski
- Izvorni engleski tekst: `Why documentation cannot wait until later`
- Izvorni lokalizovani tekst: `Zakaj dokumentacija ne sme čakati`
- Poboljšani lokalizovani tekst: `Zakaj se z dokumentacijo ne sme čakati`
- Objašnjenje: Engleski naslov podrazumijeva skrivenog ljudskog vršioca: ljudi ne bi trebali odgađati dokumentaciju. Doslovna slovenska verzija prenosi radnju na samu apstraktnu imenicu, kao da je dokumentacija ta koja ne smije čekati. Rezultat je razumljiv, ali retorički promašen. Poboljšana verzija vraća podrazumijevanu ljudsku agenciju i pritom zadržava naslov sažetim.
- Kategorija: konstrukcija sa skrivenim vršiocem; antropomorfna apstrakcija; doslovni prenos subjekta
- Da li bi automatizovani QA to vjerovatno otkrio?: Ne.
- Naučene lekcije: Naslovi su posebno ranjivi na greške sa skrivenim vršiocem jer engleski podnosi sažete apstrakcije koje se ne prenose uvijek prirodno u druge jezike.

### Nalaz 4 - Očuvanje značenja bez tečnosti izvornog jezika

- Izvorni članak: `docs/blog/sl/ai-will-not-replace-translators.md`
- Jezik: slovenski
- Izvorni engleski tekst: `Administrators must be able to disable OCR, translation, and condition assessment when needed. Paid enrichments must be explicitly enabled, traceable, and cost-controlled.`
- Izvorni lokalizovani tekst: `Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`
- Poboljšani lokalizovani tekst: `Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`
- Objašnjenje: Ovo je jedan od najjasnijih primjera u repozitoriju zašto pregled izvornog govornika ostaje potreban i nakon automatizovanog QA-a. Nacrt čuva opće značenje. Prenosi smjer politike. Vjerovatno bi prošao mnoga nenativna provjeravanja. Ipak, još uvijek sadrži tri odvojena problema maternijeg jezika: negramatičnu modalnost u `morajo moči`, nezgrapan red riječi u `po potrebi tudi izklopiti` i za domenu neprikladnu formulaciju politike u `morajo biti izrecne`. Poboljšana verzija nije samo ljepša. Ona tekst pretvara iz razumljivog nacrta u prirodan jezik politike.
- Kategorija: očuvanje značenja uz gubitak tečnosti; modalnost; formulacija politike za domenu; registar; poboljšanje čitljivosti
- Da li bi automatizovani QA to vjerovatno otkrio?: Djelimično, u najboljem slučaju. Gramatički alati možda bi označili `morajo moči`, ali automatizovani QA vjerovatno bi propustio problem registra politike i domensko poboljšanje od `izrecne` do `izrecno omogočene`.
- Naučene lekcije: Prevod može očuvati značenje, a ipak biti neobjavljiv. Ovo je jedan od najsnažnijih argumenata za pohranu ispravki izvornih govornika kao ponovno upotrebljivih dokaza, umjesto da ih tretiramo kao potrošne lektorske izmjene.

### Nalaz 5 - Miješanojezično objavljivanje

- Izvorni članak: `docs/blog/sl/the-cost-of-english-only-software.md`
- Jezik: slovenski
- Izvorni engleski tekst: `English-only defaults look cheap to builders, but they shift comprehension, participation, and maintenance costs onto everyone else.` Vidljive su ostale i engleske oznake tema kao što su `digital-inclusion`, `education` i `public-sector-software`.
- Izvorni lokalizovani tekst: Slovenska stranica koristila je lokalizovan naslov `Cena programske opreme samo v angleščini`, ali su čitaocima i dalje bili vidljivi engleski sažetak, engleske prikazane oznake tema i engleski dijelovi tijela.
- Poboljšani lokalizovani tekst: Objavljeni slovenski članak sada koristi lokalizovan sažetak `Privzete nastavitve samo v angleščini so za razvijalce lahko videti cenejše, vendar strošek razumevanja, sodelovanja in vzdrževanja prenesejo na vse druge.` Također koristi lokalizovano tijelo i lokalizovane prikazane oznake tema bez engleskih placeholdera ili miješanojezičnog curenja.
- Objašnjenje: Ovo je primjer na nivou repozitorija, a ne na nivou jedne rečenice, ali je ključan. Stranica je na prvi pogled izgledala prevedeno. Postojali su lokalizovana putanja i naslov. Taj površinski uspjeh lako bi prošao brzinski pregled. Međutim, izvorni govornik bi stranicu i dalje doživio kao vidljivo nepotpunu jer je engleski ostao na objavnim površinama koje čitalac vidi. Tu se često prvi put pojavljuju i nelokalizovani stručni žargon te nepotrebna engleska terminologija: taksonomske oznake, sažeci, metapodaci i pomoćni tekst cure prije nego što se poprave glavni pasusi.
- Kategorija: miješanojezično objavljivanje; potpunost lokalizacije; nepotrebna engleska terminologija; nelokalizovani stručni žargon
- Da li bi automatizovani QA to vjerovatno otkrio?: Da, ako su uključeni validatori potpunosti za izvorni Markdown i generisani HTML. Ne, ako tok rada provjerava samo postojanje datoteka, a ne izlaz koji vidi čitalac.
- Naučene lekcije: Pokrivenost bez potpunosti je produkcijska greška. Miješanojezično objavljivanje treba tretirati kao blokirajući kvar kvaliteta, a ne kao kozmetički problem.

### Nalaz 6 - Prikladnost obrazovnoj i institucionalnoj publici

- Izvorni članak: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Jezik: slovenski
- Izvorni engleski tekst: `Students should care because learning to document intent is part of learning to build reliable systems, not an administrative extra.`
- Izvorni lokalizovani tekst: `Študenti bi morali to zanimati, ker je sposobnost dokumentiranja namena del učenja gradnje zanesljivih sistemov, ne pa administrativni dodatek.`
- Poboljšani lokalizovani tekst: `Študentom bi to moralo biti pomembno, ker je dokumentiranje namena del učenja gradnje zanesljivih sistemov in ne le administrativni dodatek.`
- Objašnjenje: Izvorna lokalizovana rečenica smislena je i razumljiva, ali opet nosi engleske retoričke navike i pomalo težak nominalni stil. Poboljšana verzija prirodnije zvuči za obrazovnu publiku, smanjuje nepotrebnu apstraktnost i bolje odgovara slovenskoj objašnjavajućoj prozi.
- Kategorija: nesklad s obrazovnim stilom; nesklad s očekivanjima publike; poboljšanje tona
- Da li bi automatizovani QA to vjerovatno otkrio?: Ne.
- Naučene lekcije: Obrazovna vrijednost za čitaoca dio je kvaliteta lokalizacije. Rečenica može biti tačna, a ipak promašiti prirodan nastavnički glas koji ciljna publika očekuje.

### Nalaz 7 - Optimizacija izvornog teksta za lokalizaciju

- Izvorni članak: `docs/blog/en/why-every-language-matters.md` i lokalizovane varijante u istoj porodici članaka
- Jezik: engleski izvor s međulokalnim utjecajem na lokalizaciju; okidač pregleda opažen u slovenskom
- Izvorni engleski tekst: `The hidden exclusion of English-only systems`
- Izvorni lokalizovani tekst: slovenski: `Skrita izključitev angleško-izključnih sistemov`
- Poboljšani lokalizovani tekst: engleski: `Why English-only systems exclude people` slovenski: `Zakaj sistemi, ki so na voljo samo v angleščini, izključujejo ljudi`
- Objašnjenje: Izvorni engleski naslov tehnički je tačan, ali previše sažima značenje u engleski nominalni obrazac. Oslanja se na apstraktnu imenicu `exclusion` i na zbijeni modifikator `English-only systems`. Ta kombinacija je efikasna na engleskom, ali nezgrapna u mnogim ciljnim jezicima. U slovenskom je proizvela gramatički moguć, ali neprirodan izraz `angleško-izključnih sistemov`, koji od čitaoca traži dodatno dekodiranje. To nije prvenstveno neuspjeh ciljnog jezika. To je problem dizajna izvornog teksta. Preoblikovanje engleskog naslova u eksplicitniju rečenicu poboljšava čitljivost na engleskom i olakšava prirodan prevod kroz cijelu porodicu članaka.
- Kategorija: optimizacija izvornog teksta za lokalizaciju; sprečavanje prevodilačkog tona; pisanje prilagođeno lokalizaciji
- Da li bi automatizovani QA to vjerovatno otkrio?: Ne. Strukturni QA, pravopis, provjere semantičke paritete i provjere potpunosti vjerovatno bi sve prošle. Problem se pojavljuje kada izvorni govornici procjenjuju prirodnost i prevodivost kroz jezike.
- Naučene lekcije: Neke lokalizacijske probleme treba rješavati na nivou izvora, a ne odvojeno u svakom jeziku. Ako se više jezika muči s istom zbijenom engleskom konstrukcijom, izvorni tekst treba pregledati s obzirom na pogodnost za lokalizaciju.

### Nalaz 8 - Lažni prijatelj u tehničkoj terminologiji

- Izvorni članak: `docs/wiki/let-books-localization-case-study.md` i `docs/wiki/sl/let-books-localization-case-study.md`
- Jezik: slovenski pregledni nalaz potaknut engleskom tehničkom terminologijom
- Izvorni engleski tekst: `Benchmark fixture direction` i `Structured review examples should also be stored as reusable benchmark fixtures so future LLM evaluation can measure:`
- Izvorni lokalizovani tekst: `Primerjalna smer napeljave` i `Strukturirane primere pregledov je treba shraniti tudi kot primerjalne napeljave za večkratno uporabo, tako da lahko prihodnje vrednotenje LLM meri:`
- Poboljšani lokalizovani tekst: `Referenčni primeri za primerjalno vrednotenje` i `Strukturirane primere pregledov je treba shraniti tudi kot ponovno uporabne referenčne primere za primerjalno vrednotenje, da lahko prihodnje vrednotenje LLM meri:`
- Objašnjenje: Problem nije gramatika. Problem je domena. U kontekstu testiranja, benchmarkinga i evaluacije `fixture` obično znači ponovno upotrebljiv referentni primjer, testni slučaj ili evaluacijski artefakt. Slovenski prevod protumačio je pojam u fizičko-infrastrukturnom značenju povezanom s instalacijom ili ožičenjem. To je proizvelo semantički pogrešan tekst, iako je prevodilac možda odabrao rječnički valjano značenje. To je klasičan lažni prijatelj u tehničkoj terminologiji: pobijedila je pogrešna domena.
- Kategorija: lažni prijatelj u tehničkoj terminologiji; domenska terminologija; vokabular testiranja i evaluacije
- Da li bi automatizovani QA to vjerovatno otkrio?: Ne. Pravopis, gramatika i opće semantičke provjere mogu sve proći jer rečenica ostaje površinski koherentna. Kvar se pojavljuje kada domeni upućen ljudski pregled provjeri pripada li tehnički pojam pravom profesionalnom kontekstu.
- Naučene lekcije: Tehničku terminologiju treba prevoditi prema domenskom značenju, a ne prema zadanom rječničkom značenju. Ponovno upotrebljivi referentni primjeri za benchmarking, benchmark testni slučajevi ili referentni evaluacijski primjeri ovdje su prikladna tumačenja; infrastrukturna značenja nisu.

### Operativno pravilo za korpus

Kad god se otkrije nova kategorija:

1. popravi sadržaj
2. dodaj zapis u korpus
3. klasifikuj problem
4. dodaj ili doradi smjernice
5. dodaj pokrivenost validatorom ako je praktično
6. dodaj regresijsku pokrivenost ako je praktično
7. uputi na novi nalaz iz dokumenata o toku rada i QA-u

### Strogo pravilo za prijavljene greške

Konkretno prijavljene greške izvornih govornika nisu neobavezni prijedlozi.

Svaki prijavljeni lokalizacijski kvar mora na kraju biti:

- ispravljen
- pretvoren u smjernice
- pretvoren u validator kada je to praktično
- dokumentiran kao namjerno neriješen uz obrazloženje
- ili izričito praćen u korpusu nalaza dok se ne desi nešto od navedenog

Repozitorij nikada ne bi smio tiho zaboraviti prijavljene lokalizacijske kvarove.

Izvorni govornici su ovdje najvrjedniji ne zato što ispravljaju očite greške.

Najvrjedniji su zato što tačan sadržaj pretvaraju u prirodnu, kulturno prikladnu komunikaciju objavne kvalitete.

## 7. dio - Kontinuirano učenje

Svaki lokalizacijski problem trebao bi poboljšati sistem.

Poželjni princip:

> Svaki lokalizacijski kvar trebao bi poboljšati sistem.
>
> Otkriveni problem ne bi trebao samo ispraviti trenutni tekst. Trebao bi i smanjiti vjerovatnoću da se slični kvarovi pojave u budućim prijevodima.

Poželjna petlja je:

```text
Find issue
↓
Fix issue
↓
Document issue
↓
Classify issue
↓
Improve workflow
↓
Add validation where practical
↓
Prevent recurrence
```

Idealan ishod je da se lokalizacijski problem ispravi:

- jednom u sadržaju
- jednom u sistemu

## 8. dio - Evolucija validatora

Za svaki značajan problem pitaj:

> Može li se ovo automatski otkriti?

### Potpuno automatizovano

Primjeri:

- nedostaje varijanta članka
- nepreveden sažetak
- neprevedeni metapodaci
- miješanojezična stranica
- pokvaren jezički prekidač
- nedostaje generisana navigacija

### Djelimično automatizovano

Primjeri:

- sumnjivo skraćivanje
- vjerovatno semantičko odstupanje
- nedostaje objašnjenje za publiku
- nedostaje paritet povezanog sadržaja
- sumnjivo nepodudaranje dijagrama

### Ljudski pregled

Primjeri:

- retorička prirodnost
- tečnost
- kulturna prikladnost
- obrazovna efikasnost
- registar maternijeg jezika
- prikladnost za stil javnog sektora

Pravo pitanje nije jesu li ljudi ili validatori bolji.

Pravo pitanje je kojem sloju povratnih informacija pripada koji razred greške.

## Kada kvalitet postane mjerljiv

Na početku povjerenje uglavnom dolazi iz ručnog pregleda.

Programeri čitaju stranice.

Recenzenti porede prevode.

Saradnici traže probleme jedan po jedan.

Kako repozitorij sazrijeva, povjerenje počinje dolaziti iz nakupljenih mehanizama povratnih informacija:

- dokumentacije
- smjernica pregleda
- validatora
- CI provjera
- provjera pristupačnosti
- provjera semantičke paritete
- provjera potpunosti lokalizacije
- nalaza pregleda izvornih govornika
- regresijskih testova

Tada se glavno pitanje mijenja.

Umjesto pitanja:

> Jesmo li sve ručno provjerili?

projekat počinje pitati:

> Koji bi sistemi povratnih informacija omogućili da problem preživi neprimijećen?

To je prijelaz s provjere sadržaja na provjeru sistema.

Zreo sistem lokalizacije nije onaj koji nikada nema nedostataka.

Zreo sistem lokalizacije jeste onaj u kojem su poznate klase grešaka:

- dokumentovane
- otkrivljive
- ponovljive
- praćene
- kontinuirano nadzirane
- teško ih je slučajno ponovo uvesti

## 9. dio - Lokalizacijski dug

Prati `Localization Debt` kao preostali zaostatak sadržaja.

Tipičan dug uključuje:

- neprevedene sažetke
- neprevedene metapodatke
- neprevedena tijela
- placeholdere
- neprevedene dijagrame
- neprevedene oznake
- zastarjele linkove jezičkih varijanti

Dug mjeri preostali posao sanacije.

Dug ne govori da li sistem uči.

## 10. dio - Otvorene klase grešaka

Prati `Open Defect Classes` kao broj kategorija problema koje politika, tok rada, validatori i CI još ne sprečavaju u potpunosti.

Primjeri:

- neprevedeni sažeci
- neprevedena tijela
- objavljivanje placeholdera
- neprevedeni metapodaci
- miješanojezično objavljivanje
- buduće novootkrivene klase

Dug mjeri preostali posao.

Klase grešaka mjere zrelost sistema.

## 11. dio - Prvo popravljaj klase, pa datoteke

Nemoj optimizovati prvenstveno oko:

```text
47 files remaining
```

Optimizuj oko:

```text
3 defect classes remaining
```

Poželjan proces:

1. identifikuj klasu
2. utvrdi korijenski uzrok
3. popravi izvor na najvišem nivou
4. ažuriraj validator
5. ažuriraj tok rada
6. zatim popravi preostali sadržaj

Ista greška koja se ponavlja u mnogim datotekama obično je prije svega sistemski problem, a tek onda problem datoteke.

## 12. dio - Zatvaranje klasa grešaka

Kada klasa grešaka dosegne nula pojavljivanja:

1. dodaj pokrivenost validatorom ako nedostaje
2. učini validaciju blokirajućom kada je to praktično
3. dodaj regresijske provjere
4. ažuriraj smjernice za saradnike
5. ažuriraj smjernice za AI-agente
6. označi klasu kao zatvorenu

Cilj nije:

> Danas nema pojavljivanja.

Cilj je:

> Problem se sutra ne može tiho vratiti.

## 13. dio - Sanacija s izvorom na prvom mjestu

Zadani redoslijed istraživanja:

1. izvorni Markdown
2. lokalizacijske izvorne datoteke
3. metapodaci
4. registri
5. generatori
6. generisani artefakti
7. generisani HTML

Popravi najviši mogući izvor.

Izbjegavaj krpljenje generisanog HTML-a kada je izvorni sadržaj pogrešan.

To sprječava ponavljani nizvodni popravak i održava repozitorij objašnjivim.

## 14. dio - Tok rada za AI-agente

Standardni tok otklanjanja problema je:

```text
Find issue
↓
Find source of truth
↓
Fix source
↓
Regenerate
↓
Validate
↓
Repeat
```

Kada se isti problem pojavljuje više puta:

```text
Create defect class
↓
Create validator
↓
Create guidance
↓
Continue remediation
```

Četvrto pojavljivanje istog problema obično treba pokrenuti poboljšanje sistema, a ne još jedan izolovan ručni popravak.

## 15. dio - Lokalizacijsko odstupanje

Lokalizacijsko odstupanje znači da lokalizovani sadržaj postoji, ali više ne odražava izvor.

Tipični slučajevi odstupanja uključuju:

- nove odjeljke u izvoru
- nove primjere
- nova upozorenja
- promijenjene zaključke
- promijenjene dijagrame
- ažurirane snimke ekrana
- promijenjene smjernice za saradnike

Svježina je način na koji odstupanje postaje mjerljivo.

Upravljanje odstupanjem treba koristiti:

- svijest o revizijama izvora
- semantičko poređenje gdje je to praktično
- CI zasnovan na upozorenjima kao prvi korak
- blokirajući CI tamo gdje je povjerenje visoko
- izričitu pažnju recenzenata tokom velikih ažuriranja

## 16. dio - Model zrelosti repozitorija

Repozitorij treba prolaziti kroz ove faze:

1. Prevedi sadržaj.
2. Otkrij probleme.
3. Stvori validatore.
4. Automatizuj validaciju.
5. Spriječi ponavljanje.
6. Upravljaj lokalizacijskim odstupanjem.
7. Poduči buduće saradnike i AI sisteme.

Tako se akumulira institucionalno znanje.

Rani rad prestaje biti potrošan jer ga kasniji sistemi nasljeđuju.

## 17. dio - Plan sadržaja

Program treba održavati koherentnu višejezičnu pokrivenost kroz:

- blog članke koji objašnjavaju zašto je lokalizacija važna
- wiki stranice koje definišu politike i referentna pravila
- vodiče za učenje koji podučavaju tokovima rada
- stilske vodiče koji podučavaju pisanju, terminologiji i praksi pregleda
- revizijske i upravljačke dokumente koji prate zrelost i greške
- studije slučaja koje čuvaju praktične dokaze

Plan treba davati prednost:

1. kanonskoj potpunosti na engleskom
2. punoj jezičkoj pokrivenosti u svim podržanim lokalima
3. potpunosti svega što čitalac vidi u svakom lokalitetu
4. pokrivenosti validatorima visoke vrijednosti
5. rastu korpusa izvornih govornika
6. praćenju odstupanja za ključni sadržaj

Svi glavni dokumenti trebaju biti snažno međusobno povezani kako bi čitalac mogao prelaziti od principa do toka rada, od politike do dokaza.

## 18. dio - Kriteriji uspjeha

Čitalac koji prelazi između podržanih jezika treba nailaziti na:

- iste ključne koncepte
- iste primjere
- ista upozorenja
- istu obrazovnu vrijednost
- iste praktične smjernice

Istovremeno, svaki jezik treba djelovati kao da je prirodno napisan za svoju publiku.

Najviši cilj Lokalizacije u velikom obimu je:

**puna jezička pokrivenost, potpunost lokalizacije, semantička pariteta, čitljivost na maternjem jeziku, kulturna prikladnost, obrazovna efikasnost, kontinuirano poboljšavanje, sprečavanje grešaka, upravljanje odstupanjem i održivo višejezično objavljivanje kroz snažne povratne petlje.**

## Operativne metrike

Kontinuirano prati ove brojeve:

```text
Localization Debt = X
Open Defect Classes = Y
```

Dugoročni cilj je:

```text
Localization Debt = 0
Open Defect Classes = 0
```

## Povezani dokumenti

- `wiki/localization-at-scale.md`
- `wiki/translation-quality-assurance.md`
- `wiki/localization-ci-cd.md`
- `wiki/localization-governance.md`
- `wiki/localization-maturity-model.md`
- `wiki/let-books-localization-case-study.md`
- `style-guide/localization/README.md`
- `style-guide/localization/ai-translation-review-records.md`
- `learning/how-to-build-a-localization-pipeline.md`
- `learning/how-to-review-ai-assisted-translations.md`
- `learning/how-to-run-localization-qa-in-ci.md`
- `localization-audit-report.md`
