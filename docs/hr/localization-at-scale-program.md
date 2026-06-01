# Lokalizacija u velikom opsegu

## Sažetak

Ovaj priručnik u Let Books definira Lokalizaciju u velikom opsegu kao dugoročni operativni model za višejezično objavljivanje, pregledavanje, validaciju, održavanje i kontinuirano učenje.

Njegova središnja teza je jednostavna:

> Lokalizacija u velikom opsegu nije prvenstveno prevoditeljski problem.
>
> Ona je problem dizajna sustava povratnih informacija i višejezičnog sustava znanja.

Cilj nije samo prevoditi riječi.

Cilj je pomoći ljudima da uče, sudjeluju, doprinose, poučavaju, čuvaju znanje i pristupaju informacijama na jeziku koji najbolje razumiju, a da taj višejezični sustav pritom ostane održiv kroz vrijeme.

## Slojevi programa

- `docs/blog/` objašnjava zašto je lokalizacija važna u praksi.
- `docs/wiki/` definira trajna pravila, modele i upravljanje.
- `docs/learning/` pretvara temu u operativne tijekove rada.
- `docs/style-guide/` definira pravila za suradnike, terminologiju, pregled i objavljivanje.
- `docs/sources/` održava sljedivost ključnih tvrdnji.
- `docs/localization-audit-report.md` prati dug, razrede grešaka i status zatvaranja.

## 1. dio - Zašto je lokalizacija važna

Lokalizacija je važna zato što je jezična pristupačnost dio stvarnog pristupa.

Ako čitatelj ne može udobno razumjeti sadržaj, pristup postoji samo u uskom tehničkom smislu.

Za Let Books višejezično objavljivanje važno je iz praktičnih razloga:

- obrazovna pristupačnost
- kulturno sudjelovanje
- jednakost znanja
- digitalna uključenost
- tehnologija u javnom interesu
- višejezično upravljanje
- očuvanje manjih jezika
- podrška službenim i regionalnim jezicima
- europska višejezičnost u praksi
- načelo "Ujedinjeni u različitosti" primijenjeno na radni softver i sustave znanja

To nije argument za simbolično prevođenje.

To je argument za upotrebljivo višejezično sudjelovanje.

Čitatelji se ne susreću samo s naslovima i izbornicima. Susreću se s objašnjenjima, upozorenjima, dijagramima, tijekovima pregleda, primjerima, tekstovima pristupačnosti, metapodacima i obrazovnim okvirom. Ako sve to ostane samo na engleskom, sustav i dalje privilegira čitatelje engleskog čak i kada lokalizirane ljuske postoje.

## 2. dio - Lokalizacija je sustav, a ne projekt

Mnogi se lokalizacijski napori vode kao da su konačni projekti:

```text
Prevedi
Objavi
Završi
```

Taj se model brzo raspada.

Sadržaj se mijenja.

Terminologija se razvija.

Jezici se razvijaju.

Suradnici se mijenjaju.

AI sustavi se poboljšavaju.

Izvorni govornici nakon objave otkrivaju nove probleme.

Lokalizacija u velikom opsegu zato lokalizaciju tretira kao operativni sustav:

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

Teški problem nije jednom izraditi prijevode.

Teški problem je upravljati višejezičnim sustavom znanja kroz vrijeme bez gubitka pokrivenosti, pariteta, kvalitete, svježine ili povjerenja pregledavatelja.

## 3. dio - AI najbolje radi unutar povratnih petlji

AI je koristan u lokalizaciji, ali njegova korisnost ovisi o kvaliteti okolnog sustava povratnih informacija.

Kent Beck sažeo je inženjersku verziju ovog načela vrlo jasno:

> "Optimism is an occupational hazard of programming; feedback is the treatment."

Norbert Wiener opisao je sistemsku verziju:

> "Feedback is a method of controlling a system by reinserting into it the results of its past performance."

To je ispravan model i za višejezično objavljivanje.

AI najbolje radi kada je njegov izlaz odmah izložen povratnim informacijama kao što su:

- CI provjere
- strukturni validatori
- provjera pravopisa
- terminološke provjere
- provjere semantičke paritete
- provjere pristupačnosti
- provjere u pregledniku i prikazu
- validacija poveznica
- pregled izvornih govornika

Brza povratna informacija bolja je od savršenog prvog pokušaja.

Cilj nije zahtijevati savršene nacrte od ljudi ili od AI-ja.

Cilj je skratiti petlju između:

- stvaranja sadržaja
- otkrivanja nedostataka
- ispravljanja nedostataka
- sprečavanja ponavljanja

## 3A. dio - Dvosmjerni pregled

Engleski ostaje kanonski izvorni jezik za potrebe objave i sinkronizacije.

Međutim, korisni uvidi mogu nastati na bilo kojem jeziku.

Primjeri:

- pregled izvornog govornika otkriva nespretnu izvornu formulaciju
- prevoditelj otkrije dvosmislenost
- pregledavatelj pronađe nedostajući kontekst
- lokalizirani članak dobije bolji primjer
- terminologija se poboljša na neengleskom jeziku
- kulturni pregled otkrije problem pristupačnosti

Takvi nalazi mogu opravdati promjene u samom kanonskom izvoru.

### Načelo dvosmjernog pregleda

Lokalizaciju ne treba tretirati kao jednosmjeran proces:

```text
Engleski
↓
Prijevodi
```

Nego kao:

```text
Engleski
↕
Prijevodi
```

Engleski ostaje kanonski.

Znanje može teći u oba smjera.

### Događaj međujezičnog pregleda

Svaka značajnija promjena sadržaja trebala bi pokrenuti pregled povezanih jezika.

Ako se promijeni engleski, pregledaj:

- sve lokalizirane verzije
- semantičku paritetu
- metapodatke
- sažetke
- dijagrame i snimke zaslona gdje je relevantno

Ako se promijeni lokalizirana verzija, pregledaj:

- poboljšava li taj nalaz kanonski izvor
- trebaju li i drugi jezici imati korist od njega
- trebaju li se promijeniti terminološke smjernice
- trebaju li se promijeniti smjernice pregleda
- trebaju li se promijeniti validatori

### Poboljšavanje izvora kroz lokalizaciju

Lokalizacijski pregled može otkriti:

- dvosmislenost
- nepotrebnu složenost
- formulaciju neprijateljsku prema prevođenju
- skrivene pretpostavke
- kulturno specifičan izraz
- nepristupačnu terminologiju

Kad se to dogodi, često je bolje poboljšati izvor nego zasebno kompenzirati isti problem u svakom prijevodu.

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

Pri izmjeni bilo koje jezične verzije pitaj:

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

### Temeljno načelo

Kanonski izvor ne znači kanonsku mudrost.

Engleski može biti izvor za sinkronizaciju.

Znanje, poboljšanja, nalazi pregleda i uvidi u kvalitetu mogu nastati iz bilo kojeg podržanog jezika.

Višejezični projekt trebao bi omogućiti da poboljšanja otkrivena u jednom jeziku koriste svim jezicima.

## 4. dio - Model kvalitete lokalizacije

Kvalitetu lokalizacije treba pratiti kroz četiri dimenzije.

### Pokrivenost

Pokrivenost pita može li čitatelj uopće pristupiti sadržaju na svojem jeziku.

Primjeri:

- Postoji li članak na hrvatskom?
- Postoji li vodič za učenje na makedonskom?
- Postoji li stranica s politikama na srpskoj ćirilici?

Pokrivenost je na razini objave binarna.

Sadržaj za tu publiku ili postoji ili ne postoji.

### Potpunost

Potpunost pita jesu li lokalizirani svi dijelovi stranice koje čitatelj vidi.

Primjeri:

- lokaliziran naslov, ali engleski sažetak
- lokalizirano tijelo, ali engleske oznake
- lokaliziran članak, ali neprevedene oznake na dijagramu
- lokalizirana ljuska stranice, ali engleske kartice povezanog sadržaja

Pokrivenost bez potpunosti proizvodi miješanojezično objavljivanje.

### Kvaliteta

Kvaliteta pita čita li se lokalizirani tekst prirodno, točno i primjereno svojoj publici.

Primjeri:

- tehnički točan, ali prijevodno ukočen izraz
- značenje je sačuvano, ali retorika je neprirodna
- tekst politike je točan, ali nije objavne kvalitete
- obrazovno objašnjenje je ispravno, ali iz njega je teško učiti

Upravo tu pregled izvornog govornika donosi najviše jedinstvene vrijednosti.

### Svježina

Svježina pita odražava li lokalizirana verzija još uvijek trenutačni izvor.

Primjeri:

- u engleskom je dodano novo upozorenje, ali ono nedostaje u prijevodima
- izvorni zaključak se promijenio, ali prevedene stranice i dalje koriste staro uokvirivanje
- ažurirani dijagram ili snimka zaslona još nisu lokalizirani

Svježina je operativno lice lokalizacijskog odstupanja.

## 5. dio - Potpunost lokalizacije

### Pravilo lokalizacije svega što čitatelj vidi

Stranica nije potpuna samo zato što je lokalizirano bilo što od sljedećega:

- URL
- naslov
- navigacija
- ljuska stranice
- kostur članka

Sav sadržaj koji čitatelj vidi mora biti lokaliziran prije nego što se stranica smatra potpunom.

Sadržaj koji je vidljiv čitatelju uključuje:

- naslove
- podnaslove
- sažetke
- opise
- oznake i nazive kategorija
- zaglavlja odjeljaka
- tijela članaka
- popise
- istaknute napomene
- natpise
- dijagrame
- `alt` tekst
- tekst povezanog sadržaja
- metapodatke prikazane čitateljima
- lokalizirane krušne mrvice gdje varijante postoje

Dopuštene iznimke su uske:

- citati
- jasno označen izvorni jezik o kojem se raspravlja
- vlastita imena
- tehnički identifikatori
- izričito namjerno neprevođenje

### Obrazac neuspjeha miješanojezičnog objavljivanja

Jedna od najvažnijih lekcija ove inicijative jest da miješanojezično objavljivanje često na površini izgleda uspješno.

Stranica može imati:

- lokaliziranu putanju
- lokaliziran naslov
- lokaliziran uvodni odlomak

i svejedno zakazati za čitatelje jer sažeci, oznake, zaglavlja ili odjeljci tijela ostaju na engleskom.

Zato se potpunost prati odvojeno od pokrivenosti.

## 6. dio - Nalazi pregleda izvornih govornika

Ovaj odjeljak je prvoklasna isporuka.

Trebao bi rasti s vremenom.

Ne bi se smio sažimati u kratke zaključke.

Njegova je svrha dokumentirati stvarne slučajeve u kojima je:

- prijevod bio tehnički točan
- prijevod očuvao namjeravano značenje
- prijevod prošao automatiziranu validaciju
- prijevod prošao provjeru pravopisa
- prijevod vjerojatno prošao provjere semantičke paritete
- izvorni govornik ipak pronašao priliku za poboljšanje

Tu leži obrazovna vrijednost.

Pokazuje što ostaje nakon što je moderna lokalizacijska alatka već odradila svoj posao.

### Format zapisa u korpusu

Svaki zapis treba obuhvatiti:

- izvorni članak
- jezik
- izvorni engleski tekst
- izvorni lokalizirani tekst
- poboljšani lokalizirani tekst
- objašnjenje
- kategoriju
- bi li automatizirani QA vjerojatno otkrio problem
- naučene lekcije

### Kazalo kategorija

Trenutačne i očekivane kategorije uključuju:

- paralelna struktura
- prijenos engleske retorike
- konstrukcije sa skrivenim vršiteljem
- antropomorfne apstrakcije
- prijevodni štih
- nesklad s obrazovnim stilom
- nesklad sa stilom javnog sektora
- neprirodna terminologija
- prijenos diskurzivnih obrazaca
- kulturna prilagodba
- nesklad s očekivanjima publike
- poboljšanje čitljivosti
- poboljšanje tona
- očuvanje značenja uz gubitak tečnosti
- miješanojezično objavljivanje
- nepotrebna engleska terminologija
- nelokalizirani stručni žargon
- optimizacija izvornog teksta za lokalizaciju
- lažni prijatelj u tehničkoj terminologiji

### Optimizacija izvornog teksta za lokalizaciju

Definicija:

Izvorna rečenica može biti tehnički točna, a ipak nepotrebno teška za prirodno prevođenje na više jezika.

Smjernica:

Kad se ponavljani prevoditeljski problemi pojavljuju zbog same izvorne formulacije, poboljšaj izvorni tekst umjesto da isti problem stalno kompenziraš u svakom ciljnom jeziku.

Radno načelo:

> Bolji izvorni tekst često proizvodi bolje prijevode na svakom jeziku.

### Lažni prijatelj u tehničkoj terminologiji

Definicija:

Tehnički pojam preveden je pogrešnim značenjem iz druge struke, iako se površinski rječnički smisao čini uvjerljivim.

Smjernica:

Tehnički vokabular prevodi prema aktivnom domenskom kontekstu. U lokalizaciji softvera pojmove iz testiranja, QA-a, benchmarkinga i evaluacije treba prvo rješavati u tim domenama, a ne pomoću nepovezanih fizičkih ili svakodnevnih značenja.

### Nalaz 1 - Paralelna struktura

- Izvorni članak: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Jezik: slovenski
- Izvorni engleski tekst: `what the project is trying to achieve and what it is explicitly not trying to become`
- Izvorni lokalizirani tekst: `kaj projekt skuša doseči in česa ne sme postati`
- Poboljšani lokalizirani tekst: `kaj projekt skuša doseči in kaj ne sme postati`
- Objašnjenje: Izvorna slovenska rečenica gramatički je ispravna i razumljiva. Očuva namjeravano značenje. Vjerojatno bi prošla pravopis, semantičku paritetu i opće QA provjere. Problem je stilski i strukturni. Formulacija previše vjerno preslikava englesku kontrastnu strukturu i gubi čišći paralelni oblik koji bi izvorni slovenski pisac obično odabrao.
- Kategorija: paralelna struktura; tečnost materinskog jezika; prijevodni štih
- Bi li automatizirani QA to vjerojatno otkrio?: Ne.
- Naučene lekcije: Očuvanje značenja nije dovoljno za prozu objavne kvalitete. Paralelne strukture često prežive strojni prijevod u tehnički prihvatljivim, ali pomalo stranozvučnim oblicima.

### Nalaz 2 - Prijenos engleske retorike

- Izvorni članak: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Jezik: slovenski
- Izvorni engleski tekst: `Institutions care because documentation affects governance, procurement confidence, onboarding, continuity, and auditability.`
- Izvorni lokalizirani tekst: `Institucije bi morale to zanimati, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Poboljšani lokalizirani tekst: `Institucijam je to pomembno, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Objašnjenje: Izvorna slovenska verzija razumljiva je i semantički usklađena, ali previše izravno prenosi engleske retoričke navike. `Bi morale to zanimati` nije pogrešno, ali zvuči više kao preveden argument nego kao prirodno napisana slovenska objašnjavajuća proza. Poboljšana verzija koristi idiomatičniju konstrukciju za institucionalnu prozu.
- Kategorija: prijenos engleskog retoričkog obrasca; prijenos diskurzivnog obrasca; nesklad sa stilom javnog sektora
- Bi li automatizirani QA to vjerojatno otkrio?: Ne.
- Naučene lekcije: Kvaliteta materinskog jezika često ovisi o preferiranim retoričkim obrascima, a ne samo o leksičkoj točnosti. Institucionalno i javnointeresno pisanje može zahtijevati drukčije rečenične navike nego što sugeriraju engleski izvornici.

### Nalaz 3 - Konstrukcija sa skrivenim vršiteljem

- Izvorni članak: `docs/blog/sl/spec-driven-development-for-ai-projects.md`
- Jezik: slovenski
- Izvorni engleski tekst: `Why documentation cannot wait until later`
- Izvorni lokalizirani tekst: `Zakaj dokumentacija ne sme čakati`
- Poboljšani lokalizirani tekst: `Zakaj se z dokumentacijo ne sme čakati`
- Objašnjenje: Engleski naslov podrazumijeva skrivenog ljudskog vršitelja: ljudi ne bi smjeli odgađati dokumentaciju. Doslovna slovenska verzija prebacuje radnju na samu apstraktnu imenicu, kao da je dokumentacija ta koja ne bi smjela čekati. Rezultat je razumljiv, ali retorički promašen. Poboljšana verzija vraća podrazumijevanu ljudsku agenciju, a naslov ostavlja sažetim.
- Kategorija: konstrukcija sa skrivenim vršiteljem; antropomorfna apstrakcija; doslovni prijenos subjekta
- Bi li automatizirani QA to vjerojatno otkrio?: Ne.
- Naučene lekcije: Naslovi su posebno ranjivi na pogreške sa skrivenim vršiteljem jer engleski podnosi sažete apstrakcije koje se ne prenose uvijek prirodno u druge jezike.

### Nalaz 4 - Očuvanje značenja bez tečnosti izvornog jezika

- Izvorni članak: `docs/blog/sl/ai-will-not-replace-translators.md`
- Jezik: slovenski
- Izvorni engleski tekst: `Administrators must be able to disable OCR, translation, and condition assessment when needed. Paid enrichments must be explicitly enabled, traceable, and cost-controlled.`
- Izvorni lokalizirani tekst: `Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`
- Poboljšani lokalizirani tekst: `Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`
- Objašnjenje: Ovo je jedan od najjasnijih primjera u repozitoriju zašto je pregled izvornog govornika i dalje nužan nakon automatiziranog QA-a. Nacrt čuva opće značenje. Prenosi smjer politike. Vjerojatno bi prošao mnoge provjere koje rade neizvorni govornici. Ipak, još uvijek sadrži tri odvojena problema materinskog jezika: negramatičnu modalnost u `morajo moči`, nespretan red riječi u `po potrebi tudi izklopiti` i za domenu neprikladnu formulaciju politike u `morajo biti izrecne`. Poboljšana verzija nije samo ljepša. Ona tekst mijenja iz razumljivog nacrta u prirodan jezik politike.
- Kategorija: očuvanje značenja uz gubitak tečnosti; modalnost; formulacija politike za domenu; registar; poboljšanje čitljivosti
- Bi li automatizirani QA to vjerojatno otkrio?: Djelomično, u najboljem slučaju. Gramatički alati možda bi označili `morajo moči`, ali automatizirani QA vjerojatno bi propustio problem registra politike i domensko poboljšanje od `izrecne` do `izrecno omogočene`.
- Naučene lekcije: Prijevod može očuvati značenje i svejedno biti neobjavljiv. Ovo je jedan od najsnažnijih argumenata za pohranu ispravaka izvornih govornika kao ponovno upotrebljivih dokaza, umjesto da ih tretiramo kao potrošne lektorske izmjene.

### Nalaz 5 - Miješanojezično objavljivanje

- Izvorni članak: `docs/blog/sl/the-cost-of-english-only-software.md`
- Jezik: slovenski
- Izvorni engleski tekst: `English-only defaults look cheap to builders, but they shift comprehension, participation, and maintenance costs onto everyone else.` Vidljive su ostale i engleske oznake tema kao što su `digital-inclusion`, `education` i `public-sector-software`.
- Izvorni lokalizirani tekst: Slovenska je stranica koristila lokalizirani naslov `Cena programske opreme samo v angleščini`, ali čitateljima su i dalje bili vidljivi engleski sažetak, engleske prikazane oznake tema i engleski dijelovi tijela.
- Poboljšani lokalizirani tekst: Objavljeni slovenski članak sada koristi lokalizirani sažetak `Privzete nastavitve samo v angleščini so za razvijalce lahko videti cenejše, vendar strošek razumevanja, sodelovanja in vzdrževanja prenesejo na vse druge.` Također koristi lokalizirano tijelo i lokalizirane prikazane oznake tema bez engleskih placeholdera ili miješanojezičnog curenja.
- Objašnjenje: Ovo je primjer na razini repozitorija, a ne jedne rečenice, ali je ključan. Stranica je na prvi pogled izgledala prevedeno. Postojali su lokalizirana putanja i naslov. Taj površinski uspjeh lako bi prošao brzinski pregled. Međutim, izvorni govornik i dalje bi stranicu doživio kao vidljivo nepotpunu jer je engleski ostao na objavnim površinama koje čitatelj vidi. Tu se često prvi put pojavljuju i nelokalizirani stručni žargon te nepotrebna engleska terminologija: taksonomske oznake, sažeci, metapodaci i pomoćni tekst cure prije nego što se poprave glavni odlomci.
- Kategorija: miješanojezično objavljivanje; potpunost lokalizacije; nepotrebna engleska terminologija; nelokalizirani stručni žargon
- Bi li automatizirani QA to vjerojatno otkrio?: Da, ako su uključeni validatori potpunosti za izvorni Markdown i generirani HTML. Ne, ako tijek rada provjerava samo postojanje datoteka, a ne izlaz koji vidi čitatelj.
- Naučene lekcije: Pokrivenost bez potpunosti je produkcijska greška. Miješanojezično objavljivanje treba tretirati kao blokirajući kvar kvalitete, a ne kao kozmetički problem.

### Nalaz 6 - Prilagođenost obrazovnoj i institucionalnoj publici

- Izvorni članak: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Jezik: slovenski
- Izvorni engleski tekst: `Students should care because learning to document intent is part of learning to build reliable systems, not an administrative extra.`
- Izvorni lokalizirani tekst: `Študenti bi morali to zanimati, ker je sposobnost dokumentiranja namena del učenja gradnje zanesljivih sistemov, ne pa administrativni dodatek.`
- Poboljšani lokalizirani tekst: `Študentom bi to moralo biti pomembno, ker je dokumentiranje namena del učenja gradnje zanesljivih sistemov in ne le administrativni dodatek.`
- Objašnjenje: Izvorna lokalizirana rečenica smislena je i razumljiva, ali opet nosi engleske retoričke navike i pomalo težak nominalni stil. Poboljšana verzija prirodnije zvuči za obrazovnu publiku, smanjuje nepotrebnu apstraktnost i bolje odgovara slovenskoj objašnjavajućoj prozi.
- Kategorija: nesklad s obrazovnim stilom; nesklad s očekivanjima publike; poboljšanje tona
- Bi li automatizirani QA to vjerojatno otkrio?: Ne.
- Naučene lekcije: Obrazovna vrijednost za čitatelja dio je kvalitete lokalizacije. Rečenica može biti točna, a ipak promašiti prirodan nastavnički glas koji ciljna publika očekuje.

### Nalaz 7 - Optimizacija izvornog teksta za lokalizaciju

- Izvorni članak: `docs/blog/en/why-every-language-matters.md` i lokalizirane varijante u istoj obitelji članaka
- Jezik: engleski izvor s međulokalnim utjecajem na lokalizaciju; okidač pregleda opažen u slovenskom
- Izvorni engleski tekst: `The hidden exclusion of English-only systems`
- Izvorni lokalizirani tekst: slovenski: `Skrita izključitev angleško-izključnih sistemov`
- Poboljšani lokalizirani tekst: engleski: `Why English-only systems exclude people` slovenski: `Zakaj sistemi, ki so na voljo samo v angleščini, izključujejo ljudi`
- Objašnjenje: Izvorni engleski naslov tehnički je točan, ali previše sabija značenje u engleski nominalni obrazac. Oslanja se na apstraktnu imenicu `exclusion` i na zbijeni modifikator `English-only systems`. Ta je kombinacija učinkovita na engleskom, ali nespretna u mnogim ciljnim jezicima. U slovenskom je proizvela gramatički moguć, ali neprirodan izraz `angleško-izključnih sistemov`, koji od čitatelja traži dodatno dekodiranje. To nije prvenstveno neuspjeh ciljnog jezika. To je problem dizajna izvornog teksta. Preoblikovanje engleskog naslova u izričitiju rečenicu poboljšava čitljivost na engleskom i olakšava prirodan prijevod kroz cijelu obitelj članaka.
- Kategorija: optimizacija izvornog teksta za lokalizaciju; sprečavanje prijevodnog štih; pisanje prilagođeno lokalizaciji
- Bi li automatizirani QA to vjerojatno otkrio?: Ne. Strukturni QA, pravopis, provjere semantičke paritete i provjere potpunosti vjerojatno bi sve prošle. Problem se pojavljuje kada izvorni govornici procjenjuju prirodnost i prevodivost kroz jezike.
- Naučene lekcije: Neke lokalizacijske probleme treba rješavati na razini izvora, a ne zasebno u svakom jeziku. Ako se više jezika muči s istom zbijenom engleskom konstrukcijom, izvorni tekst treba pregledati s obzirom na pogodnost za lokalizaciju.

### Nalaz 8 - Lažni prijatelj u tehničkoj terminologiji

- Izvorni članak: `docs/wiki/let-books-localization-case-study.md` i `docs/wiki/sl/let-books-localization-case-study.md`
- Jezik: slovenski pregledni nalaz potaknut engleskom tehničkom terminologijom
- Izvorni engleski tekst: `Benchmark fixture direction` i `Structured review examples should also be stored as reusable benchmark fixtures so future LLM evaluation can measure:`
- Izvorni lokalizirani tekst: `Primerjalna smer napeljave` i `Strukturirane primere pregledov je treba shraniti tudi kot primerjalne napeljave za večkratno uporabo, tako da lahko prihodnje vrednotenje LLM meri:`
- Poboljšani lokalizirani tekst: `Referenčni primeri za primerjalno vrednotenje` i `Strukturirane primere pregledov je treba shraniti tudi kot ponovno uporabne referenčne primere za primerjalno vrednotenje, da lahko prihodnje vrednotenje LLM meri:`
- Objašnjenje: Problem nije gramatika. Problem je domena. U kontekstu testiranja, benchmarkinga i evaluacije `fixture` obično znači ponovno upotrebljiv referentni primjer, testni slučaj ili evaluacijski artefakt. Slovenski prijevod protumačio je pojam u fizičko-infrastrukturnom značenju povezanom s instalacijom ili ožičenjem. To je proizvelo semantički pogrešan tekst, iako je prevoditelj možda odabrao rječnički valjano značenje. To je klasičan lažni prijatelj u tehničkoj terminologiji: pobijedila je pogrešna domena.
- Kategorija: lažni prijatelj u tehničkoj terminologiji; domenska terminologija; vokabular testiranja i evaluacije
- Bi li automatizirani QA to vjerojatno otkrio?: Ne. Pravopis, gramatika i opće semantičke provjere mogu sve proći jer rečenica ostaje površinski koherentna. Kvar se pojavljuje kada domenski upućen ljudski pregled provjeri pripada li tehnički pojam pravom profesionalnom kontekstu.
- Naučene lekcije: Tehničku terminologiju treba prevoditi prema domenskom značenju, a ne prema zadanom rječničkom značenju. Ponovno upotrebljivi referentni primjeri za benchmarking, benchmark testni slučajevi ili referentni evaluacijski primjeri ovdje su prikladna tumačenja; infrastrukturna značenja nisu.

### Operativno pravilo za korpus

Kad god se otkrije nova kategorija:

1. popravi sadržaj
2. dodaj zapis u korpus
3. klasificiraj problem
4. dodaj ili doradi smjernice
5. dodaj pokrivenost validatorom ako je praktično
6. dodaj regresijsku pokrivenost ako je praktično
7. uputi na novi nalaz iz dokumenata o tijeku rada i QA-u

Izvorni govornici ovdje su najvrjedniji ne zato što ispravljaju očite greške.

Najvrjedniji su zato što točan sadržaj pretvaraju u prirodnu, kulturno prikladnu komunikaciju objavne kvalitete.

## 7. dio - Kontinuirano učenje

Svaki lokalizacijski problem trebao bi poboljšati sustav.

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
- jednom u sustavu

## 8. dio - Evolucija validatora

Za svaki značajan problem pitaj:

> Može li se ovo otkriti automatski?

### Potpuno automatizirano

Primjeri:

- nedostaje varijanta članka
- nepreveden sažetak
- neprevedeni metapodaci
- miješanojezična stranica
- pokvareno prebacivanje jezika
- nedostaje generirana navigacija

### Djelomično automatizirano

Primjeri:

- sumnjivo skraćivanje
- vjerojatno semantičko odstupanje
- nedostaje objašnjenje za publiku
- nedostaje paritet povezanog sadržaja
- sumnjivo nepodudaranje dijagrama

### Ljudski pregled

Primjeri:

- retorička prirodnost
- tečnost
- kulturna prikladnost
- obrazovna učinkovitost
- registar materinskog jezika
- prikladnost za stil javnog sektora

Pravo pitanje nije jesu li ljudi ili validatori bolji.

Pravo pitanje je kojem sloju povratnih informacija pripada koji razred greške.

## Kad kvaliteta postane mjerljiva

Na početku povjerenje uglavnom dolazi iz ručnog pregleda.

Razvojni inženjeri čitaju stranice.

Pregledavatelji uspoređuju prijevode.

Suradnici traže probleme jedan po jedan.

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

U tom se trenutku glavno pitanje mijenja.

Umjesto pitanja:

> Jesmo li sve ručno provjerili?

projekt počinje pitati:

> Koji bi sustavi povratnih informacija omogućili da problem preživi neopaženo?

To je prijelaz s provjere sadržaja na provjeru sustava.

Zreo lokalizacijski sustav nije onaj koji nikada nema nedostataka.

Zreo lokalizacijski sustav jest onaj u kojem su poznati razredi grešaka:

- dokumentirani
- otkrivi
- ponovljivi
- praćeni
- kontinuirano nadzirani
- teško ih je slučajno ponovno uvesti

## 9. dio - Lokalizacijski dug

Prati `Localization Debt` kao preostali zaostatak sadržaja.

Tipičan dug uključuje:

- neprevedene sažetke
- neprevedene metapodatke
- neprevedena tijela
- placeholdere
- neprevedene dijagrame
- neprevedene oznake
- zastarjele poveznice jezičnih varijanti

Dug mjeri preostali posao sanacije.

Dug ne govori uči li sustav.

## 10. dio - Otvoreni razredi grešaka

Prati `Open Defect Classes` kao broj kategorija problema koje politika, tijek rada, validatori i CI još ne sprječavaju u potpunosti.

Primjeri:

- neprevedeni sažeci
- neprevedena tijela
- objavljivanje placeholdera
- neprevedeni metapodaci
- miješanojezično objavljivanje
- budući novootkriveni razredi

Dug mjeri preostali posao.

Razredi grešaka mjere zrelost sustava.

## 11. dio - Popravljaj razrede prije datoteka

Nemoj optimizirati prvenstveno oko:

```text
47 files remaining
```

Optimiziraj oko:

```text
3 defect classes remaining
```

Poželjan proces:

1. identificiraj razred
2. utvrdi korijenski uzrok
3. popravi izvor na najvišoj razini
4. ažuriraj validator
5. ažuriraj tijek rada
6. zatim popravi preostali sadržaj

Ista greška koja se ponavlja u mnogim datotekama obično je prije svega sustavni problem, a tek onda problem datoteke.

## 12. dio - Zatvaranje razreda grešaka

Kad razred grešaka dosegne nula pojavnosti:

1. dodaj pokrivenost validatorom ako nedostaje
2. učini validaciju blokirajućom kad je to praktično
3. dodaj regresijske provjere
4. ažuriraj smjernice za suradnike
5. ažuriraj smjernice za AI-agente
6. označi razred kao zatvoren

Cilj nije:

> Danas nema pojavnosti.

Cilj je:

> Problem se sutra ne može neprimjetno vratiti.

## 13. dio - Sanacija s izvorom na prvom mjestu

Zadani redoslijed istraživanja:

1. izvorni Markdown
2. lokalizacijske izvorne datoteke
3. metapodaci
4. registri
5. generatori
6. generirani artefakti
7. generirani HTML

Popravi najviši mogući izvor.

Izbjegavaj krpanje generiranog HTML-a kada je izvorni sadržaj pogrešan.

To sprječava ponavljani nizvodni popravak i održava repozitorij objašnjivim.

## 14. dio - Tijek rada za AI-agente

Standardni tijek otklanjanja problema je:

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

Četvrta pojava istog problema obično bi trebala pokrenuti poboljšanje sustava, a ne još jedan izolirani ručni popravak.

## 15. dio - Lokalizacijsko odstupanje

Lokalizacijsko odstupanje znači da lokalizirani sadržaj postoji, ali više ne odražava izvor.

Tipični slučajevi odstupanja uključuju:

- nove odjeljke u izvoru
- nove primjere
- nova upozorenja
- promijenjene zaključke
- promijenjene dijagrame
- ažurirane snimke zaslona
- promijenjene smjernice za suradnike

Svježina je način na koji odstupanje postaje mjerljivo.

Upravljanje odstupanjem treba koristiti:

- svijest o revizijama izvora
- semantičku usporedbu gdje je to praktično
- CI temeljen na upozorenjima kao prvi korak
- blokirajući CI tamo gdje je povjerenje visoko
- izričitu pažnju pregledavatelja tijekom velikih ažuriranja

## 16. dio - Model zrelosti repozitorija

Repozitorij bi trebao prolaziti kroz ove faze:

1. Prevedi sadržaj.
2. Otkrij probleme.
3. Stvori validatore.
4. Automatiziraj validaciju.
5. Spriječi ponavljanje.
6. Upravljaj lokalizacijskim odstupanjem.
7. Poduči buduće suradnike i AI sustave.

Tako se akumulira institucionalno znanje.

Rani rad prestaje biti potrošan jer ga kasniji sustavi nasljeđuju.

## 17. dio - Plan sadržaja

Program bi trebao održavati koherentnu višejezičnu pokrivenost kroz:

- blog članke koji objašnjavaju zašto je lokalizacija važna
- wiki stranice koje definiraju politike i referentna pravila
- vodiče za učenje koji poučavaju tijekove rada
- stilske vodiče koji poučavaju pisanje, terminologiju i praksu pregleda
- revizijske i upravljačke dokumente koji prate zrelost i greške
- studije slučaja koje čuvaju praktične dokaze

Plan bi trebao davati prednost:

1. kanonskoj potpunosti na engleskom
2. punoj jezičnoj pokrivenosti u svim podržanim lokalitetima
3. potpunosti svega što čitatelj vidi u svakom lokalitetu
4. pokrivenosti validatorima visoke vrijednosti
5. rastu korpusa izvornih govornika
6. praćenju odstupanja za ključni sadržaj

Svi glavni dokumenti trebali bi biti agresivno međusobno povezani kako bi čitatelji mogli prelaziti od načela do tijeka rada, od politike do dokaza.

## 18. dio - Kriteriji uspjeha

Čitatelj koji prelazi između podržanih jezika trebao bi nailaziti na:

- iste ključne koncepte
- iste primjere
- ista upozorenja
- istu obrazovnu vrijednost
- iste praktične smjernice

Istodobno, svaki bi jezik trebao djelovati kao da je prirodno napisan za svoju publiku.

Najviši cilj Lokalizacije u velikom opsegu je:

**puna jezična pokrivenost, potpunost lokalizacije, semantička pariteta, čitljivost na materinskom jeziku, kulturna prikladnost, obrazovna učinkovitost, kontinuirano poboljšavanje, sprječavanje grešaka, upravljanje odstupanjem i održivo višejezično objavljivanje kroz snažne povratne petlje.**

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
