# Lokalizacija u velikom obimu

## Sažetak

Ovaj priručnik u Let Books definiše Lokalizaciju u velikom obimu kao dugoročni operativni model za višejezično objavljivanje, pregledanje, validaciju, održavanje i kontinuirano učenje.

Njegova centralna teza je jednostavna:

> Lokalizacija u velikom obimu nije prvenstveno prevodilački problem.
>
> Ona je problem dizajna sistema povratnih informacija i višejezičnog sistema znanja.

Cilj nije samo prevoditi reči.

Cilj je pomoći ljudima da uče, učestvuju, doprinose, podučavaju, čuvaju znanje i pristupaju informacijama na jeziku koji najbolje razumeju, a da pritom višejezični sistem ostane održiv kroz vreme.

## Slojevi programa

- `docs/blog/` objašnjava zašto je lokalizacija važna u praksi.
- `docs/wiki/` definiše trajna pravila, modele i upravljanje.
- `docs/learning/` pretvara temu u operativne tokove rada.
- `docs/style-guide/` definiše pravila za saradnike, terminologiju, pregled i objavljivanje.
- `docs/sources/` održava sledljivost ključnih tvrdnji.
- `docs/localization-audit-report.md` prati dug, klase grešaka i status zatvaranja.

## 1. deo - Zašto je lokalizacija važna

Lokalizacija je važna zato što je jezička pristupačnost deo stvarnog pristupa.

Ako čitalac ne može udobno da razume sadržaj, pristup postoji samo u uskom tehničkom smislu.

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
- princip "Ujedinjeni u različitosti" primenjen na funkcionalan softver i sisteme znanja

Ovo nije argument za simbolično prevođenje.

Ovo je argument za upotrebljivo višejezično učešće.

Čitaoci se ne susreću samo sa naslovima i menijima. Susreću se sa objašnjenjima, upozorenjima, dijagramima, tokovima pregleda, primerima, tekstovima pristupačnosti, metapodacima i obrazovnim okvirom. Ako sve to ostane samo na engleskom, sistem i dalje privileguje čitaoce engleskog čak i kada lokalizovane ljušture postoje.

## 2. deo - Lokalizacija je sistem, a ne projekat

Mnoga lokalizaciona nastojanja vode se kao da su konačni projekti:

```text
Prevedi
Objavi
Završi
```

Taj model se brzo raspada.

Sadržaj se menja.

Terminologija se razvija.

Jezici se razvijaju.

Saradnici se menjaju.

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
Spreči odstupanje
Ponovi
```

Težak problem nije jednom napraviti prevode.

Težak problem je upravljati višejezičnim sistemom znanja kroz vreme bez gubitka pokrivenosti, pariteta, kvaliteta, svežine ili poverenja recenzenata.

## 3. deo - AI najbolje radi unutar povratnih petlji

AI je koristan u lokalizaciji, ali njegova korisnost zavisi od kvaliteta okolnog sistema povratnih informacija.

Kent Beck je jasno sažeo inženjersku verziju ovog principa:

> "Optimism is an occupational hazard of programming; feedback is the treatment."

Norbert Wiener opisao je sistemsku verziju:

> "Feedback is a method of controlling a system by reinserting into it the results of its past performance."

To je ispravan model i za višejezično objavljivanje.

AI najbolje radi kada je njegov izlaz odmah izložen povratnim informacijama kao što su:

- CI provere
- strukturni validatori
- provere pravopisa
- terminološke provere
- provere semantičke paritete
- provere pristupačnosti
- provere u pregledaču i prikazu
- validacija linkova
- pregled izvornih govornika

Brza povratna informacija bolja je od savršenog prvog pokušaja.

Cilj nije zahtevati savršene nacrte od ljudi ili od AI-ja.

Cilj je skratiti petlju između:

- stvaranja sadržaja
- otkrivanja nedostataka
- ispravljanja nedostataka
- sprečavanja ponavljanja

## 3A. deo - Dvosmerni pregled

Engleski ostaje kanonski izvorni jezik za potrebe objave i sinhronizacije.

Međutim, korisni uvidi mogu nastati na bilo kom jeziku.

Primeri:

- pregled izvornog govornika prepoznaje nezgrapnu izvornu formulaciju
- prevodilac otkrije dvosmislenost
- recenzent pronađe nedostajući kontekst
- lokalizovani članak dobije bolji primer
- terminologija se poboljša na neengleskom jeziku
- kulturni pregled otkrije problem pristupačnosti

Takvi nalazi mogu opravdati promene u samom kanonskom izvoru.

### Princip dvosmernog pregleda

Lokalizaciju ne treba tretirati kao jednosmeran proces:

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

Znanje može teći u oba smera.

### Događaj međujezičkog pregleda

Svaka značajnija promena sadržaja trebalo bi da pokrene pregled povezanih jezika.

Ako se promeni engleski, pregledaj:

- sve lokalizovane verzije
- semantičku paritetu
- metapodatke
- sažetke
- dijagrame i snimke ekrana gde je relevantno

Ako se promeni lokalizovana verzija, pregledaj:

- da li taj nalaz poboljšava kanonski izvor
- da li bi i drugi jezici trebalo da imaju korist od njega
- da li treba promeniti terminološke smernice
- da li treba promeniti smernice pregleda
- da li treba promeniti validatore

### Poboljšavanje izvora kroz lokalizaciju

Lokalizacioni pregled može otkriti:

- dvosmislenost
- nepotrebnu složenost
- formulaciju neprijateljsku prema prevođenju
- skrivene pretpostavke
- kulturno specifičnu formulaciju
- nepristupačnu terminologiju

Kada se to dogodi, često je bolje poboljšati izvor nego odvojeno kompenzovati isti problem u svakom prevodu.

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

Pri izmeni bilo koje jezičke verzije pitaj:

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

Znanje, poboljšanja, nalazi pregleda i uvidi u kvalitet mogu nastati iz bilo kog podržanog jezika.

Višejezični projekat treba da omogući da poboljšanja otkrivena u jednom jeziku koriste svim jezicima.

## 4. deo - Model kvaliteta lokalizacije

Kvalitet lokalizacije treba pratiti kroz četiri dimenzije.

### Pokrivenost

Pokrivenost pita može li čitalac uopšte pristupiti sadržaju na svom jeziku.

Primeri:

- Postoji li članak na srpskom latinici?
- Postoji li vodič za učenje na makedonskom?
- Postoji li stranica sa pravilima na srpskoj ćirilici?

Pokrivenost je na nivou objave binarna.

Sadržaj za tu publiku ili postoji ili ne postoji.

### Potpunost

Potpunost pita da li su lokalizovani svi delovi stranice koje čitalac vidi.

Primeri:

- lokalizovan naslov, ali engleski sažetak
- lokalizovano telo, ali engleske oznake
- lokalizovan članak, ali neprevedene oznake na dijagramu
- lokalizovana ljuštura stranice, ali engleske kartice povezanog sadržaja

Pokrivenost bez potpunosti proizvodi mešanojezično objavljivanje.

### Kvalitet

Kvalitet pita da li lokalizovani tekst zvuči prirodno, tačno i prikladno svojoj publici.

Primeri:

- tehnički tačan, ali prevodilački ukočen izraz
- značenje je sačuvano, ali retorika je neprirodna
- tekst pravila je tačan, ali nije objavne kvalitete
- obrazovno objašnjenje je ispravno, ali se iz njega teško uči

Upravo ovde pregled izvornog govornika donosi najviše jedinstvene vrednosti.

### Svežina

Svežina pita odražava li lokalizovana verzija još uvek trenutni izvor.

Primeri:

- u engleskom je dodato novo upozorenje, ali nedostaje u prevodima
- zaključak u izvoru se promenio, a prevedene stranice i dalje koriste stari okvir
- ažurirani dijagram ili snimak ekrana još nisu lokalizovani

Svežina je operativno lice lokalizacionog odstupanja.

## 5. deo - Potpunost lokalizacije

### Pravilo lokalizacije svega što čitalac vidi

Stranica nije potpuna samo zato što je lokalizovano bilo šta od sledećeg:

- URL
- naslov
- navigacija
- ljuštura stranice
- kostur članka

Sav sadržaj koji čitalac vidi mora biti lokalizovan pre nego što se stranica smatra potpunom.

Sadržaj vidljiv čitaocu uključuje:

- naslove
- podnaslove
- sažetke
- opise
- oznake i nazive kategorija
- naslove odeljaka
- tela članaka
- liste
- istaknute napomene
- natpise
- dijagrame
- `alt` tekst
- tekst povezanog sadržaja
- metapodatke prikazane čitaocima
- lokalizovane mrvice navigacije gde varijante postoje

Dozvoljeni izuzeci su uski:

- citati
- jasno označen materijal na izvornom jeziku o kojem se raspravlja
- vlastita imena
- tehnički identifikatori
- izričito namerno neprevođenje

### Obrazac neuspeha mešanojezičnog objavljivanja

Jedna od najvažnijih lekcija ove inicijative jeste da mešanojezično objavljivanje često na površini izgleda uspešno.

Stranica može imati:

- lokalizovanu putanju
- lokalizovan naslov
- lokalizovan uvodni pasus

i svejedno zakazati kod čitalaca jer sažeci, oznake, naslovi odeljaka ili delovi tela ostaju na engleskom.

Zato se potpunost prati odvojeno od pokrivenosti.

## 6. deo - Nalazi pregleda izvornih govornika

Ovaj odeljak je prvoklasna isporuka.

Trebalo bi da raste vremenom.

Ne treba ga sažimati u kratke zaključke.

Njegova svrha je da dokumentuje stvarne slučajeve u kojima je:

- prevod bio tehnički tačan
- prevod sačuvao nameravano značenje
- prevod prošao automatizovanu validaciju
- prevod prošao proveru pravopisa
- prevod verovatno prošao provere semantičke paritete
- izvorni govornik ipak pronašao priliku za poboljšanje

Tu se nalazi obrazovna vrednost.

To pokazuje šta ostaje nakon što moderna lokalizaciona alatka već odradi svoj posao.

### Format zapisa u korpusu

Svaki zapis treba da obuhvati:

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
- da li bi automatizovani QA verovatno otkrio problem
- naučene lekcije

Preporučena mašinski čitljiva putanja korpusa:

- `docs/style-guide/localization/native-speaker-findings-corpus.json`

Korpus nije samo arhiva.

To je ponovo upotrebljiva kontrolna površina za:

- smernice za pregled
- terminološke smernice
- poboljšanja AI promptova
- pravila validatora
- regresionu pokrivenost
- međujezični prenos znanja

### Indeks kategorija

Trenutne i očekivane kategorije uključuju:

- paralelna struktura
- prenos engleske retorike
- konstrukcije sa skrivenim vršiocem
- antropomorfne apstrakcije
- prevodilački ton
- nesklad sa obrazovnim stilom
- nesklad sa stilom javnog sektora
- neprirodna terminologija
- prenos diskurzivnih obrazaca
- kulturna prilagodba
- nesklad sa očekivanjima publike
- poboljšanje čitljivosti
- poboljšanje tona
- očuvanje značenja uz gubitak tečnosti
- mešanojezično objavljivanje
- nepotrebna engleska terminologija
- nelokalizovani stručni žargon
- optimizacija izvornog teksta za lokalizaciju
- lažni prijatelj u tehničkoj terminologiji

### Optimizacija izvornog teksta za lokalizaciju

Definicija:

Izvorna rečenica može biti tehnički tačna, a ipak nepotrebno teška za prirodno prevođenje na više jezika.

Smernica:

Kada se ponavljani prevodilački problemi javljaju zbog same izvorne formulacije, poboljšaj izvorni tekst umesto da isti problem stalno kompenzuješ u svakom ciljnom jeziku.

Radni princip:

> Bolji izvorni tekst često daje bolje prevode na svakom jeziku.

### Lažni prijatelj u tehničkoj terminologiji

Definicija:

Tehnički pojam preveden je pogrešnim značenjem iz druge struke, iako se površinski rečnički smisao čini uverljivim.

Smernica:

Tehnički vokabular prevodi prema aktivnom domenskom kontekstu. U lokalizaciji softvera termine iz testiranja, QA-a, benchmarkinga i evaluacije treba prvo rešavati u tim domenima, a ne pomoću nepovezanih fizičkih ili svakodnevnih značenja.

### Nalaz 1 - Paralelna struktura

- Izvorni članak: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Jezik: slovenački
- Izvorni engleski tekst: `what the project is trying to achieve and what it is explicitly not trying to become`
- Izvorni lokalizovani tekst: `kaj projekt skuša doseči in česa ne sme postati`
- Poboljšani lokalizovani tekst: `kaj projekt skuša doseči in kaj ne sme postati`
- Objašnjenje: Izvorna slovenačka rečenica gramatički je tačna i razumljiva. Čuva nameravano značenje. Verovatno bi prošla pravopis, semantičku paritetu i opšte QA provere. Problem je stilski i strukturni. Formulacija previše verno preslikava englesku kontrastnu strukturu i gubi čistiji paralelni oblik koji bi izvorni slovenački pisac obično izabrao.
- Kategorija: paralelna struktura; tečnost maternjeg jezika; prevodilački ton
- Da li bi automatizovani QA to verovatno otkrio?: Ne.
- Naučene lekcije: Očuvanje značenja nije dovoljno za prozu objavne kvalitete. Paralelne strukture često prežive mašinski prevod u tehnički prihvatljivim, ali pomalo stranozvučnim oblicima.

### Nalaz 2 - Prenos engleske retorike

- Izvorni članak: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Jezik: slovenački
- Izvorni engleski tekst: `Institutions care because documentation affects governance, procurement confidence, onboarding, continuity, and auditability.`
- Izvorni lokalizovani tekst: `Institucije bi morale to zanimati, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Poboljšani lokalizovani tekst: `Institucijam je to pomembno, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Objašnjenje: Izvorna slovenačka verzija je razumljiva i semantički usklađena, ali previše direktno prenosi engleske retoričke navike. `Bi morale to zanimati` nije pogrešno, ali zvuči više kao preveden argument nego kao prirodno napisana slovenačka objašnjavajuća proza. Poboljšana verzija koristi idiomatičniju konstrukciju za institucionalnu prozu.
- Kategorija: prenos engleskog retoričkog obrasca; prenos diskurzivnog obrasca; nesklad sa stilom javnog sektora
- Da li bi automatizovani QA to verovatno otkrio?: Ne.
- Naučene lekcije: Kvalitet maternjeg jezika često zavisi od preferiranih retoričkih obrazaca, a ne samo od leksičke tačnosti. Institucionalno i javnointeresno pisanje može zahtevati drugačije rečenične navike nego što sugerišu engleski izvornici.

### Nalaz 3 - Konstrukcija sa skrivenim vršiocem

- Izvorni članak: `docs/blog/sl/spec-driven-development-for-ai-projects.md`
- Jezik: slovenački
- Izvorni engleski tekst: `Why documentation cannot wait until later`
- Izvorni lokalizovani tekst: `Zakaj dokumentacija ne sme čakati`
- Poboljšani lokalizovani tekst: `Zakaj se z dokumentacijo ne sme čakati`
- Objašnjenje: Engleski naslov podrazumeva skrivenog ljudskog vršioca: ljudi ne bi trebalo da odlažu dokumentaciju. Doslovna slovenačka verzija prenosi radnju na samu apstraktnu imenicu, kao da je dokumentacija ta koja ne sme da čeka. Rezultat je razumljiv, ali retorički promašen. Poboljšana verzija vraća podrazumevanu ljudsku agenciju i pritom zadržava naslov sažetim.
- Kategorija: konstrukcija sa skrivenim vršiocem; antropomorfna apstrakcija; doslovni prenos subjekta
- Da li bi automatizovani QA to verovatno otkrio?: Ne.
- Naučene lekcije: Naslovi su posebno ranjivi na greške sa skrivenim vršiocem jer engleski podnosi sažete apstrakcije koje se ne prenose uvek prirodno u druge jezike.

### Nalaz 4 - Očuvanje značenja bez tečnosti izvornog jezika

- Izvorni članak: `docs/blog/sl/ai-will-not-replace-translators.md`
- Jezik: slovenački
- Izvorni engleski tekst: `Administrators must be able to disable OCR, translation, and condition assessment when needed. Paid enrichments must be explicitly enabled, traceable, and cost-controlled.`
- Izvorni lokalizovani tekst: `Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`
- Poboljšani lokalizovani tekst: `Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`
- Objašnjenje: Ovo je jedan od najjasnijih primera u repozitorijumu zašto pregled izvornog govornika ostaje potreban i nakon automatizovanog QA-a. Nacrt čuva opšte značenje. Prenosi smer politike. Verovatno bi prošao mnoga nenativna proveravanja. Ipak, još uvek sadrži tri odvojena problema maternjeg jezika: negramatičnu modalnost u `morajo moči`, nezgrapan red reči u `po potrebi tudi izklopiti` i za domen neprikladnu formulaciju politike u `morajo biti izrecne`. Poboljšana verzija nije samo lepša. Ona tekst pretvara iz razumljivog nacrta u prirodan jezik politike.
- Kategorija: očuvanje značenja uz gubitak tečnosti; modalnost; formulacija politike za domen; registar; poboljšanje čitljivosti
- Da li bi automatizovani QA to verovatno otkrio?: Delimično, u najboljem slučaju. Gramatički alati možda bi označili `morajo moči`, ali automatizovani QA verovatno bi propustio problem registra politike i domensko poboljšanje od `izrecne` do `izrecno omogočene`.
- Naučene lekcije: Prevod može očuvati značenje, a ipak biti neobjavljiv. Ovo je jedan od najsnažnijih argumenata za čuvanje ispravki izvornih govornika kao ponovo upotrebljivih dokaza, umesto da ih tretiramo kao potrošne lektorske izmene.

### Nalaz 5 - Mešanojezično objavljivanje

- Izvorni članak: `docs/blog/sl/the-cost-of-english-only-software.md`
- Jezik: slovenački
- Izvorni engleski tekst: `English-only defaults look cheap to builders, but they shift comprehension, participation, and maintenance costs onto everyone else.` Vidljive su ostale i engleske oznake tema kao što su `digital-inclusion`, `education` i `public-sector-software`.
- Izvorni lokalizovani tekst: Slovenačka stranica koristila je lokalizovan naslov `Cena programske opreme samo v angleščini`, ali su čitaocima i dalje bili vidljivi engleski sažetak, engleske prikazane oznake tema i engleski delovi tela.
- Poboljšani lokalizovani tekst: Objavljeni slovenački članak sada koristi lokalizovan sažetak `Privzete nastavitve samo v angleščini so za razvijalce lahko videti cenejše, vendar strošek razumevanja, sodelovanja in vzdrževanja prenesejo na vse druge.` Takođe koristi lokalizovano telo i lokalizovane prikazane oznake tema bez engleskih placeholdera ili mešanojezičnog curenja.
- Objašnjenje: Ovo je primer na nivou repozitorijuma, a ne na nivou jedne rečenice, ali je ključan. Stranica je na prvi pogled izgledala prevedeno. Postojali su lokalizovana putanja i naslov. Taj površinski uspeh lako bi prošao brzinski pregled. Međutim, izvorni govornik bi stranicu i dalje doživeo kao vidljivo nepotpunu jer je engleski ostao na objavnim površinama koje čitalac vidi. Tu se često prvi put pojavljuju i nelokalizovani stručni žargon te nepotrebna engleska terminologija: taksonomske oznake, sažeci, metapodaci i pomoćni tekst cure pre nego što se poprave glavni pasusi.
- Kategorija: mešanojezično objavljivanje; potpunost lokalizacije; nepotrebna engleska terminologija; nelokalizovani stručni žargon
- Da li bi automatizovani QA to verovatno otkrio?: Da, ako su uključeni validatori potpunosti za izvorni Markdown i generisani HTML. Ne, ako tok rada proverava samo postojanje datoteka, a ne izlaz koji vidi čitalac.
- Naučene lekcije: Pokrivenost bez potpunosti je produkcijska greška. Mešanojezično objavljivanje treba tretirati kao blokirajući kvar kvaliteta, a ne kao kozmetički problem.

### Nalaz 6 - Prikladnost obrazovnoj i institucionalnoj publici

- Izvorni članak: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Jezik: slovenački
- Izvorni engleski tekst: `Students should care because learning to document intent is part of learning to build reliable systems, not an administrative extra.`
- Izvorni lokalizovani tekst: `Študenti bi morali to zanimati, ker je sposobnost dokumentiranja namena del učenja gradnje zanesljivih sistemov, ne pa administrativni dodatek.`
- Poboljšani lokalizovani tekst: `Študentom bi to moralo biti pomembno, ker je dokumentiranje namena del učenja gradnje zanesljivih sistemov in ne le administrativni dodatek.`
- Objašnjenje: Izvorna lokalizovana rečenica smislena je i razumljiva, ali opet nosi engleske retoričke navike i pomalo težak nominalni stil. Poboljšana verzija prirodnije zvuči za obrazovnu publiku, smanjuje nepotrebnu apstraktnost i bolje odgovara slovenačkoj objašnjavajućoj prozi.
- Kategorija: nesklad sa obrazovnim stilom; nesklad sa očekivanjima publike; poboljšanje tona
- Da li bi automatizovani QA to verovatno otkrio?: Ne.
- Naučene lekcije: Obrazovna vrednost za čitaoca deo je kvaliteta lokalizacije. Rečenica može biti tačna, a ipak promašiti prirodan nastavnički glas koji ciljna publika očekuje.

### Nalaz 7 - Optimizacija izvornog teksta za lokalizaciju

- Izvorni članak: `docs/blog/en/why-every-language-matters.md` i lokalizovane varijante u istoj porodici članaka
- Jezik: engleski izvor sa međulokalnim uticajem na lokalizaciju; okidač pregleda opažen u slovenačkom
- Izvorni engleski tekst: `The hidden exclusion of English-only systems`
- Izvorni lokalizovani tekst: slovenački: `Skrita izključitev angleško-izključnih sistemov`
- Poboljšani lokalizovani tekst: engleski: `Why English-only systems exclude people` slovenački: `Zakaj sistemi, ki so na voljo samo v angleščini, izključujejo ljudi`
- Objašnjenje: Izvorni engleski naslov tehnički je tačan, ali previše sabija značenje u engleski nominalni obrazac. Oslanja se na apstraktnu imenicu `exclusion` i na zbijeni modifikator `English-only systems`. Ta kombinacija je efikasna na engleskom, ali nezgrapna u mnogim ciljnim jezicima. U slovenačkom je proizvela gramatički moguć, ali neprirodan izraz `angleško-izključnih sistemov`, koji od čitaoca traži dodatno dekodiranje. To nije prvenstveno neuspeh ciljnog jezika. To je problem dizajna izvornog teksta. Preoblikovanje engleskog naslova u eksplicitniju rečenicu poboljšava čitljivost na engleskom i olakšava prirodan prevod kroz celu porodicu članaka.
- Kategorija: optimizacija izvornog teksta za lokalizaciju; sprečavanje prevodilačkog tona; pisanje prilagođeno lokalizaciji
- Da li bi automatizovani QA to verovatno otkrio?: Ne. Strukturni QA, pravopis, provere semantičke paritete i provere potpunosti verovatno bi sve prošle. Problem se pojavljuje kada izvorni govornici procenjuju prirodnost i prevodivost kroz jezike.
- Naučene lekcije: Neke lokalizacione probleme treba rešavati na nivou izvora, a ne odvojeno u svakom jeziku. Ako se više jezika muči sa istom zbijenom engleskom konstrukcijom, izvorni tekst treba pregledati s obzirom na pogodnost za lokalizaciju.

### Nalaz 8 - Lažni prijatelj u tehničkoj terminologiji

- Izvorni članak: `docs/wiki/let-books-localization-case-study.md` i `docs/wiki/sl/let-books-localization-case-study.md`
- Jezik: slovenački pregledni nalaz podstaknut engleskom tehničkom terminologijom
- Izvorni engleski tekst: `Benchmark fixture direction` i `Structured review examples should also be stored as reusable benchmark fixtures so future LLM evaluation can measure:`
- Izvorni lokalizovani tekst: `Primerjalna smer napeljave` i `Strukturirane primere pregledov je treba shraniti tudi kot primerjalne napeljave za večkratno uporabo, tako da lahko prihodnje vrednotenje LLM meri:`
- Poboljšani lokalizovani tekst: `Referenčni primeri za primerjalno vrednotenje` i `Strukturirane primere pregledov je treba shraniti tudi kot ponovno uporabne referenčne primere za primerjalno vrednotenje, da lahko prihodnje vrednotenje LLM meri:`
- Objašnjenje: Problem nije gramatika. Problem je domen. U kontekstu testiranja, benchmarkinga i evaluacije `fixture` obično znači ponovo upotrebljiv referentni primer, test slučaj ili evaluacioni artefakt. Slovenački prevod protumačio je pojam u fizičko-infrastrukturnom značenju povezanom sa instalacijom ili ožičenjem. To je proizvelo semantički pogrešan tekst, iako je prevodilac možda odabrao rečnički valjano značenje. To je klasičan lažni prijatelj u tehničkoj terminologiji: pobedio je pogrešan domen.
- Kategorija: lažni prijatelj u tehničkoj terminologiji; domenska terminologija; vokabular testiranja i evaluacije
- Da li bi automatizovani QA to verovatno otkrio?: Ne. Pravopis, gramatika i opšte semantičke provere mogu sve proći jer rečenica ostaje površinski koherentna. Kvar se pojavljuje kada domenski upućen ljudski pregled proveri pripada li tehnički pojam pravom profesionalnom kontekstu.
- Naučene lekcije: Tehničku terminologiju treba prevoditi prema domenskom značenju, a ne prema podrazumevanom rečničkom značenju. Ponovo upotrebljivi referentni primeri za benchmarking, benchmark test slučajevi ili referentni evaluacioni primeri ovde su prikladna tumačenja; infrastrukturna značenja nisu.

### Operativno pravilo za korpus

Kad god se otkrije nova kategorija:

1. popravi sadržaj
2. dodaj zapis u korpus
3. klasifikuj problem
4. dodaj ili doradi smernice
5. dodaj pokrivenost validatorom ako je praktično
6. dodaj regresionu pokrivenost ako je praktično
7. uputi na novi nalaz iz dokumenata o toku rada i QA-u

### Strogo pravilo za prijavljene greške

Konkretno prijavljene greške izvornih govornika nisu neobavezni predlozi.

Svaki prijavljeni lokalizacioni kvar mora na kraju biti:

- ispravljen
- pretvoren u smernice
- pretvoren u validator kada je to praktično
- dokumentovan kao namerno nerešen uz obrazloženje
- ili izričito praćen u korpusu nalaza dok se ne dogodi nešto od navedenog

Repozitorijum nikada ne bi smeo tiho da zaboravi prijavljene lokalizacione kvarove.

Izvorni govornici su ovde najvredniji ne zato što ispravljaju očigledne greške.

Najvredniji su zato što tačan sadržaj pretvaraju u prirodnu, kulturno prikladnu komunikaciju objavne kvalitete.

## 7. deo - Kontinuirano učenje

Svaki lokalizacioni problem trebalo bi da poboljša sistem.

Poželjni princip:

> Svaki lokalizacioni kvar trebalo bi da poboljša sistem.
>
> Otkriveni problem ne bi trebalo samo da ispravi trenutni tekst. Trebalo bi i da smanji verovatnoću da se slični kvarovi pojave u budućim prevodima.

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

Idealan ishod je da se lokalizacioni problem ispravi:

- jednom u sadržaju
- jednom u sistemu

## 8. deo - Evolucija validatora

Za svaki značajan problem pitaj:

> Može li se ovo automatski otkriti?

### Potpuno automatizovano

Primeri:

- nedostaje varijanta članka
- nepreveden sažetak
- neprevedeni metapodaci
- mešanojezična stranica
- pokvaren jezički prekidač
- nedostaje generisana navigacija

### Delimično automatizovano

Primeri:

- sumnjivo skraćivanje
- verovatno semantičko odstupanje
- nedostaje objašnjenje za publiku
- nedostaje paritet povezanog sadržaja
- sumnjivo nepodudaranje dijagrama

### Ljudski pregled

Primeri:

- retorička prirodnost
- tečnost
- kulturna prikladnost
- obrazovna efikasnost
- registar maternjem jezika
- prikladnost za stil javnog sektora

Pravo pitanje nije jesu li ljudi ili validatori bolji.

Pravo pitanje je kom sloju povratnih informacija pripada koji razred greške.

## Kada kvalitet postane merljiv

Na početku poverenje uglavnom dolazi iz ručnog pregleda.

Programeri čitaju stranice.

Recenzenti porede prevode.

Saradnici traže probleme jedan po jedan.

Kako repozitorijum sazreva, poverenje počinje da dolazi iz nagomilanih mehanizama povratnih informacija:

- dokumentacije
- smernica pregleda
- validatora
- CI provera
- provera pristupačnosti
- provera semantičke paritete
- provera potpunosti lokalizacije
- nalaza pregleda izvornih govornika
- regresionih testova

Tada se glavno pitanje menja.

Umesto pitanja:

> Jesmo li sve ručno proverili?

projekat počinje da pita:

> Koji bi sistemi povratnih informacija omogućili da problem preživi neprimećen?

To je prelaz sa provere sadržaja na proveru sistema.

Zreo sistem lokalizacije nije onaj koji nikada nema nedostataka.

Zreo sistem lokalizacije jeste onaj u kojem su poznate klase grešaka:

- dokumentovane
- otkrivljive
- ponovljive
- praćene
- kontinuirano nadzirane
- teško ih je slučajno ponovo uvesti

## 9. deo - Lokalizacioni dug

Prati `Localization Debt` kao preostali zaostatak sadržaja.

Tipičan dug uključuje:

- neprevedene sažetke
- neprevedene metapodatke
- neprevedena tela
- placeholdere
- neprevedene dijagrame
- neprevedene oznake
- zastarele linkove jezičkih varijanti

Dug meri preostali posao sanacije.

Dug ne govori da li sistem uči.

## 10. deo - Otvorene klase grešaka

Prati `Open Defect Classes` kao broj kategorija problema koje politika, tok rada, validatori i CI još ne sprečavaju u potpunosti.

Primeri:

- neprevedeni sažeci
- neprevedena tela
- objavljivanje placeholdera
- neprevedeni metapodaci
- mešanojezično objavljivanje
- buduće novootkrivene klase

Dug meri preostali posao.

Klase grešaka mere zrelost sistema.

## 11. deo - Prvo popravljaj klase, pa datoteke

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
2. utvrdi korenski uzrok
3. popravi izvor na najvišem nivou
4. ažuriraj validator
5. ažuriraj tok rada
6. zatim popravi preostali sadržaj

Ista greška koja se ponavlja u mnogim datotekama obično je pre svega sistemski problem, a tek onda problem datoteke.

## 12. deo - Zatvaranje klasa grešaka

Kada klasa grešaka dostigne nula pojavljivanja:

1. dodaj pokrivenost validatorom ako nedostaje
2. učini validaciju blokirajućom kada je to praktično
3. dodaj regresione provere
4. ažuriraj smernice za saradnike
5. ažuriraj smernice za AI-agente
6. označi klasu kao zatvorenu

Cilj nije:

> Danas nema pojavljivanja.

Cilj je:

> Problem se sutra ne može tiho vratiti.

## 13. deo - Sanacija sa izvorom na prvom mestu

Podrazumevani redosled istraživanja:

1. izvorni Markdown
2. lokalizacione izvorne datoteke
3. metapodaci
4. registri
5. generatori
6. generisani artefakti
7. generisani HTML

Popravi najviši mogući izvor.

Izbegavaj krpljenje generisanog HTML-a kada je izvorni sadržaj pogrešan.

To sprečava ponavljani nizvodni popravak i održava repozitorijum objašnjivim.

## 14. deo - Tok rada za AI-agente

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

Četvrto pojavljivanje istog problema obično treba da pokrene poboljšanje sistema, a ne još jedan izolovan ručni popravak.

## 15. deo - Lokalizaciono odstupanje

Lokalizaciono odstupanje znači da lokalizovani sadržaj postoji, ali više ne odražava izvor.

Tipični slučajevi odstupanja uključuju:

- nove odeljke u izvoru
- nove primere
- nova upozorenja
- promenjene zaključke
- promenjene dijagrame
- ažurirane snimke ekrana
- promenjene smernice za saradnike

Svežina je način na koji odstupanje postaje merljivo.

Upravljanje odstupanjem treba da koristi:

- svest o revizijama izvora
- semantičko poređenje gde je to praktično
- CI zasnovan na upozorenjima kao prvi korak
- blokirajući CI tamo gde je poverenje visoko
- izričitu pažnju recenzenata tokom velikih ažuriranja

## 16. deo - Model zrelosti repozitorijuma

Repozitorijum treba da prolazi kroz ove faze:

1. Prevedi sadržaj.
2. Otkrij probleme.
3. Stvori validatore.
4. Automatizuj validaciju.
5. Spreči ponavljanje.
6. Upravljaj lokalizacionim odstupanjem.
7. Poduči buduće saradnike i AI sisteme.

Tako se akumulira institucionalno znanje.

Rani rad prestaje da bude potrošan jer ga kasniji sistemi nasleđuju.

## 17. deo - Plan sadržaja

Program treba da održava koherentnu višejezičnu pokrivenost kroz:

- blog članke koji objašnjavaju zašto je lokalizacija važna
- wiki stranice koje definišu politike i referentna pravila
- vodiče za učenje koji podučavaju tokovima rada
- stilske vodiče koji podučavaju pisanju, terminologiji i praksi pregleda
- revizijske i upravljačke dokumente koji prate zrelost i greške
- studije slučaja koje čuvaju praktične dokaze

Plan treba da daje prednost:

1. kanonskoj potpunosti na engleskom
2. punoj jezičkoj pokrivenosti u svim podržanim lokalima
3. potpunosti svega što čitalac vidi u svakom lokalitetu
4. pokrivenosti validatorima visoke vrednosti
5. rastu korpusa izvornih govornika
6. praćenju odstupanja za ključni sadržaj

Svi glavni dokumenti treba da budu snažno međusobno povezani kako bi čitalac mogao da prelazi od principa do toka rada, od politike do dokaza.

## 18. deo - Kriterijumi uspeha

Čitalac koji prelazi između podržanih jezika treba da nailazi na:

- iste ključne koncepte
- iste primere
- ista upozorenja
- istu obrazovnu vrednost
- iste praktične smernice

Istovremeno, svaki jezik treba da deluje kao da je prirodno napisan za svoju publiku.

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
