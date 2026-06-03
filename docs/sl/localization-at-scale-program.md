# Lokalizacija v velikem obsegu

## Povzetek

Ta priročnik v Let Books opredeljuje Lokalizacijo v velikem obsegu kot dolgoročni operativni model za večjezično objavljanje, pregledovanje, validacijo, vzdrževanje in neprekinjeno učenje.

Njegova osrednja teza je preprosta:

> Lokalizacija v velikem obsegu ni predvsem prevajalski problem.
>
> Je problem zasnove povratnega sistema in večjezičnega sistema znanja.

Cilj ni zgolj prevajati besede.

Cilj je pomagati ljudem, da se učijo, sodelujejo, prispevajo, poučujejo, ohranjajo znanje in dostopajo do informacij v jeziku, ki ga najbolje razumejo, pri tem pa ohraniti večjezični sistem dolgoročno vzdržen.

## Programske plasti

- `docs/blog/` pojasnjuje, zakaj je lokalizacija v praksi pomembna.
- `docs/wiki/` določa trajna pravila, modele in upravljanje.
- `docs/learning/` temo pretvori v operativne poteke dela.
- `docs/style-guide/` določa pravila za sodelavce, terminologijo, pregledovanje in objavljanje.
- `docs/sources/` skrbi, da so ključne trditve sledljive.
- `docs/localization-audit-report.md` spremlja dolg, razrede napak in stanje odprave.

## 1. del - Zakaj je lokalizacija pomembna

Lokalizacija je pomembna, ker je jezikovna dostopnost del resničnega dostopa.

Če bralec vsebine ne more udobno razumeti, potem dostop obstaja le v ozkem tehničnem smislu.

Za Let Books je večjezično objavljanje pomembno iz praktičnih razlogov:

- izobraževalna dostopnost
- kulturna participacija
- enakost znanja
- digitalna vključenost
- tehnologija v javnem interesu
- večjezično upravljanje
- ohranjanje manjših jezikov
- podpora uradnim in regionalnim jezikom
- evropska večjezičnost v praksi
- načelo »Združeni v raznolikosti«, uporabljeno pri delujoči programski opremi in sistemih znanja

To ni argument za simbolično prevajanje.

To je argument za uporabno večjezično sodelovanje.

Bralci se ne srečajo samo z naslovi in meniji. Srečajo se z razlagami, opozorili, diagrami, pregledovalnimi poteki dela, primeri, besedili za dostopnost, metapodatki in izobraževalnim okvirom. Če to ostane samo v angleščini, sistem še vedno daje prednost angleško govorečim bralcem, tudi kadar lokalizirane lupine obstajajo.

## 2. del - Lokalizacija je sistem, ne projekt

Mnoga prizadevanja za lokalizacijo se upravljajo, kot da bi šlo za končne projekte:

```text
Prevedi
Objavi
Končaj
```

Ta model se hitro sesuje.

Vsebina se spreminja.

Terminologija se razvija.

Jeziki se razvijajo.

Sodelavci se menjajo.

Sistemi AI se izboljšujejo.

Naravni govorci po objavi odkrijejo nove težave.

Lokalizacija v velikem obsegu zato lokalizacijo obravnava kot operacijski sistem:

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

Težava ni v tem, da prevode enkrat ustvarimo.

Težava je v tem, da skozi čas upravljamo večjezični sistem znanja, ne da bi izgubili pokritost, pariteto, kakovost, svežino ali zaupanje pregledovalcev.

## 3. del - AI najbolje deluje znotraj povratnih zank

AI je pri lokalizaciji uporaben, vendar je njegova uporabnost odvisna od kakovosti okoliškega povratnega sistema.

Kent Beck je inženirsko različico tega načela jasno povzel:

> »Optimism is an occupational hazard of programming; feedback is the treatment.«

Norbert Wiener je opisal sistemsko različico:

> »Feedback is a method of controlling a system by reinserting into it the results of its past performance.«

To je pravi model tudi za večjezično objavljanje.

AI deluje najbolje, kadar je njegov izhod takoj izpostavljen povratnim informacijam, kot so:

- preverjanja CI
- strukturni validatorji
- črkovalniki
- terminološka preverjanja
- preverjanja semantične paritete
- preverjanja dostopnosti
- preverjanja v brskalniku in prikazu
- validacija povezav
- pregled naravnih govorcev

Hitra povratna informacija premaga popoln prvi poskus.

Cilj ni zahtevati popolnih osnutkov od ljudi ali od AI.

Cilj je skrajšati zanko med:

- ustvarjanjem vsebine
- odkrivanjem napak
- odpravljanjem napak
- preprečevanjem ponovitve

## 3A. del - Dvosmerni pregled

Angleščina ostaja kanonični izvorni jezik za potrebe objave in sinhronizacije.

Vendar lahko uporabni vpogledi nastanejo v katerem koli jeziku.

Primeri:

- pregled naravnega govorca prepozna nerodno izvorno formulacijo
- prevajalec odkrije dvoumnost
- pregledovalec najde manjkajoči kontekst
- lokaliziran članek dobi boljši primer
- terminologija se izboljša v neangleškem jeziku
- kulturni pregled razkrije težavo z dostopnostjo

Takšne ugotovitve lahko upravičijo spremembe samega kanoničnega vira.

### Načelo dvosmernega pregleda

Lokalizacije ne smemo obravnavati kot enosmernega procesa:

```text
Angleščina
↓
Prevedene različice
```

Ampak kot:

```text
Angleščina
↕
Prevedene različice
```

Angleščina ostaja kanonična.

Znanje lahko teče v obe smeri.

### Medjezikovni pregledni dogodek

Vsaka pomembnejša sprememba vsebine bi morala sprožiti pregled povezanih jezikov.

Če se spremeni angleščina, preglej:

- vse lokalizirane različice
- semantično pariteto
- metapodatke
- povzetke
- diagrame in posnetke zaslona, kjer je to pomembno

Če se spremeni lokalizirana različica, preglej:

- ali ugotovitev izboljšuje kanonični vir
- ali bi od nje morale imeti korist tudi druge različice
- ali je treba spremeniti terminološka navodila
- ali je treba spremeniti navodila za pregledovanje
- ali je treba spremeniti validatorje

### Izboljševanje vira prek lokalizacije

Lokalizacijski pregled lahko razkrije:

- dvoumnost
- nepotrebno zapletenost
- prevajanju sovražno formulacijo
- skrite predpostavke
- kulturno specifično besedišče
- nedostopno terminologijo

Kadar se to zgodi, je pogosto bolje izboljšati vir, kot pa v vsakem prevodu ločeno kompenzirati isto težavo.

```text
Problem discovered in Slovenian
↓
Root cause found in English
↓
English improved
↓
All languages benefit
```

### Poziv za pregled z AI-agentom

Pri spreminjanju katere koli jezikovne različice vprašaj:

```text
Does this change reveal a source-language issue?
Does this change improve other language versions?
Should terminology guidance change?
Should review guidance change?
Should validators change?
```

Odgovor je lahko:

```text
No action needed
```

ali:

```text
Open cross-language review task
```

### Osrednje načelo

Kanonični vir ne pomeni kanonične modrosti.

Angleščina je lahko vir za sinhronizacijo.

Znanje, izboljšave, pregledne ugotovitve in vpogledi v kakovost pa lahko nastanejo v katerem koli podprtem jeziku.

Večjezičen projekt mora omogočiti, da izboljšave, odkrite v enem jeziku, koristijo vsem jezikom.

## 4. del - Model kakovosti lokalizacije

Kakovost lokalizacije je treba spremljati v štirih dimenzijah.

### Pokritost

Pokritost sprašuje, ali bralec sploh lahko dostopa do vsebine v svojem jeziku.

Primeri:

- Ali članek obstaja v slovenščini?
- Ali učni vodnik obstaja v makedonščini?
- Ali stran s pravilnikom obstaja v srbski cirilici?

Pokritost je na ravni objave binarna.

Vsebina za to občinstvo bodisi obstaja bodisi ne.

### Popolnost

Popolnost sprašuje, ali so lokalizirani vsi deli strani, ki jih vidi bralec.

Primeri:

- lokaliziran naslov, vendar angleški povzetek
- lokalizirano besedilo, vendar angleške oznake
- lokaliziran članek, vendar neprevedene oznake na diagramu
- lokalizirana lupina strani, vendar angleške kartice povezanih vsebin

Pokritost brez popolnosti proizvaja mešanojezično objavljanje.

### Kakovost

Kakovost sprašuje, ali lokalizirano besedilo deluje naravno, natančno in ustrezno za svoje občinstvo.

Primeri:

- tehnično pravilen, a prevodnjaški slog
- pomen je ohranjen, retorika pa nenaravna
- besedilo pravilnika je natančno, vendar ni objavno kakovostno
- izobraževalna razlaga je pravilna, vendar se iz nje težko uči

Prav tukaj pregled naravnega govorca prinese največ edinstvene vrednosti.

### Svežina

Svežina sprašuje, ali lokalizirana različica še vedno odraža trenutni vir.

Primeri:

- v angleščini je dodano novo opozorilo, v prevodih pa manjka
- zaključek v viru se je spremenil, prevedene strani pa še vedno uporabljajo stari okvir
- posodobljen diagram ali posnetek zaslona še ni lokaliziran

Svežina je operativni obraz lokalizacijskega odmika.

## 5. del - Popolnost lokalizacije

### Pravilo lokalizacije vsega, kar vidi bralec

Stran ni popolna zgolj zato, ker je lokalizirano nekaj od naslednjega:

- URL
- naslov
- navigacija
- lupina strani
- osnutek članka

Preden stran štejemo za popolno, mora biti lokalizirana vsa vsebina, ki jo vidi bralec.

Vsebina, vidna bralcu, vključuje:

- naslove
- podnaslove
- povzetke
- opise
- oznake in nazive kategorij
- mednaslove
- besedilo člankov
- sezname
- poudarjena opozorila
- napise
- diagrame
- `alt` besedilo
- besedilo povezanih vsebin
- metapodatke, prikazane bralcem
- lokalizirane drobtinice, kjer različice obstajajo

Dovoljene izjeme so ozke:

- citati
- jasno označeno gradivo v izvornem jeziku, ki je predmet obravnave
- lastna imena
- tehnični identifikatorji
- izrecno namerna neprevedenost

### Vzorec neuspeha pri mešanojezičnem objavljanju

Ena najpomembnejših lekcij te pobude je, da je mešanojezično objavljanje pogosto na videz uspešno.

Stran ima lahko:

- lokalizirano pot
- lokaliziran naslov
- lokaliziran uvodni odstavek

in še vedno odpove pri bralcih, ker povzetki, oznake, mednaslovi ali deli besedila ostanejo v angleščini.

Zato se popolnost spremlja ločeno od pokritosti.

## 6. del - Ugotovitve pregledov naravnih govorcev

Ta razdelek je samostojen prvovrsten rezultat.

Sčasoma naj raste.

Ne smemo ga stisniti v kratke zaključke.

Njegov namen je dokumentirati primere iz prakse, kjer:

- je bil prevod tehnično pravilen
- je prevod ohranil nameravani pomen
- je prevod prestal avtomatizirano validacijo
- je prevod prestal črkovalnik
- bi prevod verjetno prestal preverjanje semantične paritete
- je naravni govorec kljub temu našel priložnost za izboljšavo

Prav tu je izobraževalna vrednost.

Tu vidimo, kaj ostane, ko sodobna orodja za lokalizacijo svoje delo že opravijo.

### Oblika zapisa v korpusu

Vsak zapis mora zajeti:

- izvorni članek
- jezik
- izvirno angleško besedilo
- izvirno lokalizirano besedilo
- izboljšano lokalizirano besedilo
- id
- razlago
- kategorijo
- status
- ali je validator mogoč
- povezane datoteke
- datum dodajanja
- ali bi avtomatizirani QA težavo verjetno zaznal
- naučene lekcije

Priporočena strojno berljiva pot korpusa:

- `docs/style-guide/localization/native-speaker-findings-corpus.json`

Korpus ni le arhiv.

Je ponovno uporabna nadzorna površina za:

- navodila za pregledovanje
- terminološka navodila
- izboljšave pozivov AI
- pravila validatorjev
- regresijsko pokritost
- medjezikovni prenos znanja

### Kazalo kategorij

Trenutne in pričakovane kategorije vključujejo:

- vzporedna struktura
- prenos angleške retorike
- konstrukcije s skritim vršilcem
- antropomorfne abstrakcije
- prevodnjaški slog
- neskladje z izobraževalnim slogom
- neskladje s slogom javnega sektorja
- nenaravna terminologija
- prenos diskurznih vzorcev
- kulturna prilagoditev
- neskladje s pričakovanji občinstva
- izboljšanje berljivosti
- izboljšanje tona
- ohranitev pomena ob izgubi tekočnosti
- mešanojezično objavljanje
- nepotrebna angleška terminologija
- nelokaliziran strokovni žargon
- optimizacija izvornega besedila za lokalizacijo
- lažni prijatelj v tehnični terminologiji

### Optimizacija izvornega besedila za lokalizacijo

Opredelitev:

Izvorni stavek je lahko tehnično pravilen, vendar je še vedno po nepotrebnem težko prevedljiv v več jezikov na naraven način.

Navodilo:

Kadar se ponavljajoče se prevajalske težave začenjajo v samem izvornem besedilu, izboljšaj izvorno besedilo, namesto da isto težavo vedno znova kompenziraš v vsakem ciljnem jeziku.

Delovno načelo:

> Boljše izvorno besedilo pogosto ustvari boljše prevode v vseh jezikih.

### Lažni prijatelj v tehnični terminologiji

Opredelitev:

Tehnični izraz je preveden z napačnim pomenom iz drugega strokovnega področja, čeprav se slovarski pomen na površini zdi verjeten.

Navodilo:

Tehnično besedišče prevajaj glede na dejavni domenski kontekst. V lokalizaciji programske opreme je treba izraze s področja testiranja, QA, primerjalnega vrednotenja in evalvacije najprej razreševati v teh domenah, ne pa z nepovezanimi fizičnimi ali vsakdanjimi pomeni.

### Ugotovitev 1 - Vzporedna struktura

- Izvorni članek: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Jezik: slovenščina
- Izvirno angleško besedilo: `what the project is trying to achieve and what it is explicitly not trying to become`
- Izvirno lokalizirano besedilo: `kaj projekt skuša doseči in česa ne sme postati`
- Izboljšano lokalizirano besedilo: `kaj projekt skuša doseči in kaj ne sme postati`
- Razlaga: Izvirni slovenski stavek je slovnično pravilen in razumljiv. Ohranja nameravani pomen. Verjetno bi prestal črkovanje, preverjanje semantične paritete in splošna preverjanja QA. Težava je slogovna in strukturna. Formulacija pretesno posnema angleško kontrastno strukturo in izgubi čistejšo vzporedno obliko, ki bi jo naravni slovenski pisec običajno izbral.
- Kategorija: vzporedna struktura; tekočnost v maternem jeziku; prevodnjaški slog
- Bi avtomatizirani QA to verjetno zaznal?: Ne.
- Naučene lekcije: Ohranjanje pomena ni dovolj za besedilo objavne kakovosti. Vzporedne strukture pogosto preživijo strojni prevod v tehnično sprejemljivih, a rahlo tujih oblikah.

### Ugotovitev 2 - Prenos angleške retorike

- Izvorni članek: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Jezik: slovenščina
- Izvirno angleško besedilo: `Institutions care because documentation affects governance, procurement confidence, onboarding, continuity, and auditability.`
- Izvirno lokalizirano besedilo: `Institucije bi morale to zanimati, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Izboljšano lokalizirano besedilo: `Institucijam je to pomembno, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Razlaga: Izvirna slovenska različica je razumljiva in pomensko usklajena, vendar preveč neposredno prenaša angleške retorične navade. `Bi morale to zanimati` ni napačno, vendar zveni bolj kot preveden argument kot pa naravno napisano slovensko razlagalno besedilo. Izboljšana različica uporablja idiomatičnejšo konstrukcijo za institucionalno prozo.
- Kategorija: prenos angleškega retoričnega vzorca; prenos diskurznega vzorca; neskladje s slogom javnega sektorja
- Bi avtomatizirani QA to verjetno zaznal?: Ne.
- Naučene lekcije: Kakovost v maternem jeziku je pogosto odvisna od prednostnih retoričnih vzorcev, ne samo od leksikalne pravilnosti. Institucionalno in javnointeresno pisanje lahko zahteva drugačne stavčne navade, kot jih nakazujejo angleški izvirniki.

### Ugotovitev 3 - Konstrukcija s skritim vršilcem

- Izvorni članek: `docs/blog/sl/spec-driven-development-for-ai-projects.md`
- Jezik: slovenščina
- Izvirno angleško besedilo: `Why documentation cannot wait until later`
- Izvirno lokalizirano besedilo: `Zakaj dokumentacija ne sme čakati`
- Izboljšano lokalizirano besedilo: `Zakaj se z dokumentacijo ne sme čakati`
- Razlaga: Angleški naslov implicira skritega človeškega vršilca: ljudje ne bi smeli odlagati dokumentacije. Dobesedna slovenska različica prenese dejanje na samo abstraktno samostalniško zvezo, kot da bi bila dokumentacija tista, ki ne sme čakati. Rezultat je razumljiv, vendar retorično zgrešen. Izboljšana različica obnovi nakazano človeško dejavnost in hkrati ohrani naslov jedrnat.
- Kategorija: konstrukcija s skritim vršilcem; antropomorfna abstrakcija; dobesedni prenos osebka
- Bi avtomatizirani QA to verjetno zaznal?: Ne.
- Naučene lekcije: Naslovi so še posebej ranljivi za napake s skritim vršilcem, ker angleščina dopušča stisnjene abstrakcije, ki se v druge jezike ne prenesejo vedno naravno.

### Ugotovitev 4 - Ohranitev pomena brez tekočnosti maternega jezika

- Izvorni članek: `docs/blog/sl/ai-will-not-replace-translators.md`
- Jezik: slovenščina
- Izvirno angleško besedilo: `Administrators must be able to disable OCR, translation, and condition assessment when needed. Paid enrichments must be explicitly enabled, traceable, and cost-controlled.`
- Izvirno lokalizirano besedilo: `Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`
- Izboljšano lokalizirano besedilo: `Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`
- Razlaga: To je eden najjasnejših primerov v repozitoriju, zakaj pregled naravnega govorca ostaja potreben tudi po avtomatiziranem QA. Osnutek ohranja splošen pomen. Sporoča usmeritev pravilnika. Verjetno bi prestal veliko preverjanj, ki jih izvajajo ne-naravni govorci. Kljub temu pa še vedno vsebuje tri ločene težave maternega jezika: neslovnično modalnost v `morajo moči`, neroden besedni red v `po potrebi tudi izklopiti` in za domeno neustrezno pravilniško formulacijo v `morajo biti izrecne`. Izboljšana različica ni le lepša. Besedilo spremeni iz razumljivega osnutka v naraven jezik pravilnika.
- Kategorija: ohranitev pomena ob izgubi tekočnosti; modalnost; formulacija pravilnika za domeno; register; izboljšanje berljivosti
- Bi avtomatizirani QA to verjetno zaznal?: Kvečjemu delno. Slovnična orodja bi morda označila `morajo moči`, avtomatizirani QA pa bi verjetno spregledal problem registra pravilnika in domensko izboljšavo iz `izrecne` v `izrecno omogočene`.
- Naučene lekcije: Prevod lahko ohrani pomen in je kljub temu neprimeren za objavo. To je eden najmočnejših argumentov za shranjevanje popravkov naravnih govorcev kot ponovno uporabnih dokazov, namesto da jih obravnavamo kot potrošne slogovne popravke.

### Ugotovitev 5 - Mešanojezično objavljanje

- Izvorni članek: `docs/blog/sl/the-cost-of-english-only-software.md`
- Jezik: slovenščina
- Izvirno angleško besedilo: `English-only defaults look cheap to builders, but they shift comprehension, participation, and maintenance costs onto everyone else.` Vidne so ostale tudi angleške tematske oznake, kot so `digital-inclusion`, `education` in `public-sector-software`.
- Izvirno lokalizirano besedilo: Slovenska stran je uporabljala lokaliziran naslov `Cena programske opreme samo v angleščini`, vendar so bralci še vedno videli angleški povzetek, angleške prikazane tematske oznake in angleške dele besedila.
- Izboljšano lokalizirano besedilo: Objavljeni slovenski članek zdaj uporablja lokaliziran povzetek `Privzete nastavitve samo v angleščini so za razvijalce lahko videti cenejše, vendar strošek razumevanja, sodelovanja in vzdrževanja prenesejo na vse druge.` Uporablja tudi lokalizirano besedilo članka in lokalizirane prikazane tematske oznake brez angleških nadomestnih delov ali mešanojezičnega uhajanja.
- Razlaga: To je primer na ravni repozitorija in ne na ravni enega samega stavka, vendar je bistven. Stran je bila na prvi pogled videti prevedena. Obstajala sta lokalizirana pot in naslov. Ta navidezni uspeh bi zlahka prestal bežen pregled. Naravni govorec pa bi stran še vedno doživel kot očitno nepopolno, ker je na površinah objave, vidnih bralcem, ostala angleščina. Tu se pogosto prvič pokažeta tudi nelokaliziran strokovni žargon in nepotrebna angleška terminologija: taksonomske oznake, povzetki, metapodatki in pomožno besedilo začnejo uhajati prej, preden so popravljeni osrednji odstavki.
- Kategorija: mešanojezično objavljanje; popolnost lokalizacije; nepotrebna angleška terminologija; nelokaliziran strokovni žargon
- Bi avtomatizirani QA to verjetno zaznal?: Da, če so vključeni validatorji popolnosti za izvorni Markdown in ustvarjeni HTML. Ne, če potek dela preverja samo obstoj datotek in ne tudi izhoda, vidnega bralcem.
- Naučene lekcije: Pokritost brez popolnosti je produkcijska napaka. Mešanojezično objavljanje je treba obravnavati kot blokirajočo napako kakovosti, ne kot kozmetično težavo.

### Ugotovitev 6 - Ujemanje z izobraževalnim in institucionalnim občinstvom

- Izvorni članek: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Jezik: slovenščina
- Izvirno angleško besedilo: `Students should care because learning to document intent is part of learning to build reliable systems, not an administrative extra.`
- Izvirno lokalizirano besedilo: `Študenti bi morali to zanimati, ker je sposobnost dokumentiranja namena del učenja gradnje zanesljivih sistemov, ne pa administrativni dodatek.`
- Izboljšano lokalizirano besedilo: `Študentom bi to moralo biti pomembno, ker je dokumentiranje namena del učenja gradnje zanesljivih sistemov in ne le administrativni dodatek.`
- Razlaga: Izvirni lokalizirani stavek je pomensko pravilen in razumljiv, vendar spet nosi angleške retorične navade in nekoliko težak nominalni slog. Izboljšana različica za izobraževalno občinstvo zveni bolj naravno, zmanjša nepotrebno abstraktnost in se bolje ujema s slovensko razlagalno prozo.
- Kategorija: neskladje z izobraževalnim slogom; neskladje s pričakovanji občinstva; izboljšanje tona
- Bi avtomatizirani QA to verjetno zaznal?: Ne.
- Naučene lekcije: Izobraževalna vrednost za bralca je del kakovosti lokalizacije. Stavek je lahko pravilen in kljub temu zgreši naravni poučevalni glas, ki ga ciljno občinstvo pričakuje.

### Ugotovitev 7 - Optimizacija izvornega besedila za lokalizacijo

- Izvorni članek: `docs/blog/en/why-every-language-matters.md` in lokalizirane različice v isti družini člankov
- Jezik: angleški vir z vplivom na lokalizacijo v več jezikih; sprožilec pregleda opažen v slovenščini
- Izvirno angleško besedilo: `The hidden exclusion of English-only systems`
- Izvirno lokalizirano besedilo: slovenščina: `Skrita izključitev angleško-izključnih sistemov`
- Izboljšano lokalizirano besedilo: angleščina: `Why English-only systems exclude people` slovenščina: `Zakaj sistemi, ki so na voljo samo v angleščini, izključujejo ljudi`
- Razlaga: Izvirni angleški naslov je tehnično pravilen, vendar preveč zgosti pomen v angleško specifičen nominalni vzorec. Zanaša se na abstraktni samostalnik `exclusion` in na stisnjeni prilastek `English-only systems`. Ta kombinacija je v angleščini učinkovita, v številnih ciljnih jezikih pa nerodna. V slovenščini je ustvarila slovnično možno, a nenaravno zvezo `angleško-izključnih sistemov`, ki od bralca zahteva dodatno razvozlavanje. To ni predvsem napaka ciljnega jezika. To je problem zasnove izvornega besedila. Če angleški naslov preoblikujemo v bolj izrecen stavek, se izboljša berljivost v angleščini, naravno prevajanje pa postane lažje v celotni družini člankov.
- Kategorija: optimizacija izvornega besedila za lokalizacijo; preprečevanje prevodnjaškega sloga; pisanje, prijazno do vira
- Bi avtomatizirani QA to verjetno zaznal?: Ne. Strukturni QA, črkovanje, preverjanje semantične paritete in preverjanje popolnosti bi vse verjetno prestali. Problem postane viden, ko naravni govorci presojajo naravnost in prevedljivost v več jezikih.
- Naučene lekcije: Nekatere lokalizacijske težave je treba rešiti na ravni vira, ne ločeno v vsakem jeziku. Če ima več jezikov težave z isto stisnjeno angleško konstrukcijo, je treba preveriti, ali je izvorno besedilo dovolj prijazno do lokalizacije.

### Ugotovitev 8 - Lažni prijatelj v tehnični terminologiji

- Izvorni članek: `docs/wiki/let-books-localization-case-study.md` in `docs/wiki/sl/let-books-localization-case-study.md`
- Jezik: slovenska pregledna ugotovitev, sprožena z angleško tehnično terminologijo
- Izvirno angleško besedilo: `Benchmark fixture direction` in `Structured review examples should also be stored as reusable benchmark fixtures so future LLM evaluation can measure:`
- Izvirno lokalizirano besedilo: `Primerjalna smer napeljave` in `Strukturirane primere pregledov je treba shraniti tudi kot primerjalne napeljave za večkratno uporabo, tako da lahko prihodnje vrednotenje LLM meri:`
- Izboljšano lokalizirano besedilo: `Referenčni primeri za primerjalno vrednotenje` in `Strukturirane primere pregledov je treba shraniti tudi kot ponovno uporabne referenčne primere za primerjalno vrednotenje, da lahko prihodnje vrednotenje LLM meri:`
- Razlaga: Težava ni v slovnici. Težava je v domeni. V kontekstu testiranja, primerjalnega vrednotenja in evalvacije `fixture` običajno pomeni ponovno uporaben referenčni primer, testni primer ali evalvacijski artefakt. Slovenski prevod je izraz razumel v fizično-infrastrukturnem pomenu, povezanem z napeljavo ali vgradnjo. To je ustvarilo semantično zavajajoče besedilo, čeprav je prevajalec morda izbral slovarsko veljaven pomen. To je klasičen lažni prijatelj v tehnični terminologiji: zmagala je napačna domena.
- Kategorija: lažni prijatelj v tehnični terminologiji; domenska terminologija; besedišče testiranja in evalvacije
- Bi avtomatizirani QA to verjetno zaznal?: Ne. Črkovanje, slovnica in groba semantična preverjanja bi lahko vse prestali, ker stavek na površini ostaja koherenten. Napaka postane očitna šele pri domensko ozaveščenem človeškem pregledu, ki preveri, ali tehnični izraz res pripada pravemu strokovnemu kontekstu.
- Naučene lekcije: Tehnično terminologijo je treba prevajati po domenskem pomenu, ne po privzetem slovarskem pomenu. Ponovno uporabni referenčni primeri za primerjalno vrednotenje, primerjalni testni primeri ali referenčni evalvacijski primeri so tukaj ustrezne razlage; infrastrukturo povezani pomeni niso.

### Operativno pravilo za korpus

Kadarkoli odkrijemo novo kategorijo:

1. popravi vsebino
2. dodaj vnos v korpus
3. razvrsti težavo
4. dodaj ali izboljšaj navodila
5. dodaj pokritost z validatorjem, če je to praktično
6. dodaj regresijsko pokritost, če je to praktično
7. novo ugotovitev navzkrižno poveži iz dokumentov o potekih dela in QA

### Strogo pravilo za prijavljene napake

Konkretne prijavljene napake naravnih govorcev niso neobvezni predlogi.

Vsaka prijavljena lokalizacijska napaka mora sčasoma biti:

- odpravljena
- pretvorjena v smernice
- kadar je praktično, pretvorjena v validator
- dokumentirana kot namerno nerešena z utemeljitvijo
- ali izrecno spremljana v korpusu ugotovitev, dokler se ne zgodi nekaj od navedenega

Repozitorij ne sme nikoli tiho pozabiti prijavljenih lokalizacijskih napak.

Naravni govorci so tu najvrednejši ne zato, ker popravljajo očitne napake.

Najvrednejši so zato, ker pravilno vsebino pretvorijo v naravno, kulturno ustrezno in objavno kakovostno komunikacijo.

## 7. del - Neprekinjeno učenje

Vsaka lokalizacijska težava mora izboljšati sistem.

Prednostno načelo:

> Vsaka lokalizacijska napaka mora izboljšati sistem.
>
> Odkrita težava ne sme le popraviti trenutnega besedila. Prav tako mora zmanjšati verjetnost, da se podobne napake pojavijo v prihodnjih prevodih.

Prednostna zanka je:

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

Idealni izid je, da se lokalizacijska težava popravi:

- enkrat v vsebini
- enkrat v sistemu

## 8. del - Razvoj validatorjev

Za vsako pomembnejšo težavo vprašaj:

> Ali lahko to zaznamo samodejno?

### Popolnoma avtomatizirano

Primeri:

- manjkajoča različica članka
- nepreveden povzetek
- neprevedeni metapodatki
- mešanojezična stran
- pokvarjeno stikalo za jezik
- manjkajoča ustvarjena navigacija

### Delno avtomatizirano

Primeri:

- sumljivo krajšanje
- verjeten semantični odmik
- manjkajoča razlaga za občinstvo
- manjkajoča pariteta povezanih vsebin
- sumljivo neskladje v diagramu

### Človeški pregled

Primeri:

- retorična naravnost
- tekočnost
- kulturna ustreznost
- izobraževalna učinkovitost
- register maternega jezika
- primernost za slog javnega sektorja

Pravo vprašanje ni, ali so ljudje ali validatorji boljši.

Pravo vprašanje je, kateri razred napak spada v kateri sloj povratnih informacij.

## Ko kakovost postane merljiva

Na začetku zaupanje večinoma izvira iz ročnega pregleda.

Razvijalci berejo strani.

Pregledovalci primerjajo prevode.

Sodelavci iščejo težave eno po eno.

Ko repozitorij dozoreva, začne zaupanje izhajati iz nakopičenih povratnih mehanizmov:

- dokumentacije
- smernic za pregledovanje
- validatorjev
- preverjanj CI
- preverjanj dostopnosti
- preverjanj semantične paritete
- preverjanj popolnosti lokalizacije
- ugotovitev pregledov naravnih govorcev
- regresijskih testov

Takrat se glavno vprašanje spremeni.

Namesto vprašanja:

> Ali smo vse ročno preverili?

se projekt začne spraševati:

> Kateri povratni sistemi bi omogočili, da težava preživi neopažena?

To je prehod od preverjanja vsebine k preverjanju sistema.

Zrel sistem lokalizacije ni sistem, ki nikoli nima napak.

Zrel sistem lokalizacije je sistem, v katerem so znani razredi napak:

- dokumentirani
- zaznavni
- ponovljivi
- spremljani
- neprekinjeno nadzorovani
- takšni, da jih je težko po nesreči znova vnesti

## 9. del - Lokalizacijski dolg

`Localization Debt` spremljaj kot preostali zaostanek vsebine.

Tipičen dolg vključuje:

- neprevedene povzetke
- neprevedene metapodatke
- neprevedena besedila
- nadomestna besedila
- neprevedene diagrame
- neprevedene oznake
- zastarele povezave med jezikovnimi različicami

Dolg meri preostalo sanacijsko delo.

Dolg ne pove, ali se sistem uči.

## 10. del - Odprti razredi napak

`Open Defect Classes` spremljaj kot število kategorij težav, ki jih pravila, poteki dela, validatorji in CI še ne preprečujejo v celoti.

Primeri:

- neprevedeni povzetki
- neprevedena besedila
- objavljanje nadomestnih besedil
- neprevedeni metapodatki
- mešanojezično objavljanje
- prihodnji odkrito novi razredi

Dolg meri količino preostalega dela.

Razredi napak merijo zrelost sistema.

## 11. del - Najprej popravi razrede, nato datoteke

Ne optimiziraj predvsem okoli:

```text
47 files remaining
```

Optimiziraj okoli:

```text
3 defect classes remaining
```

Prednostni postopek:

1. prepoznaj razred
2. določi temeljni vzrok
3. popravi najvišji možni vir
4. posodobi validator
5. posodobi potek dela
6. nato popravi preostalo vsebino

Ista napaka, ki se ponavlja v številnih datotekah, je navadno prej sistemski kot datotečni problem.

## 12. del - Zapiranje razredov napak

Ko razred napak doseže nič pojavitev:

1. dodaj pokritost z validatorjem, če je še ni
2. kjer je praktično, naj validacija postane blokirajoča
3. dodaj regresijska preverjanja
4. posodobi navodila za sodelavce
5. posodobi navodila za AI-agente
6. razred označi kot zaprt

Cilj ni:

> Danes ni pojavitev.

Cilj je:

> Težava se jutri ne more tiho vrniti.

## 13. del - Sanacija, usmerjena v vir

Privzeti vrstni red raziskave:

1. izvorni Markdown
2. lokalizacijske izvorne datoteke
3. metapodatki
4. registri
5. generatorji
6. ustvarjeni artefakti
7. ustvarjeni HTML

Popravi najvišji možni vir.

Izogibaj se popravljanju ustvarjenega HTML, kadar je napačna izvorna vsebina.

To prepreči ponavljajoče se popravilo po verigi navzdol in ohranja repozitorij razložljiv.

## 14. del - Potek dela za AI-agente

Standardni potek odpravljanja težav je:

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

Ko se ista težava pojavlja večkrat:

```text
Create defect class
↓
Create validator
↓
Create guidance
↓
Continue remediation
```

Četrta ponovitev iste težave naj praviloma sproži izboljšavo sistema in ne še enega izoliranega ročnega popravka.

## 15. del - Lokalizacijski odmik

Lokalizacijski odmik pomeni, da lokalizirana vsebina obstaja, vendar ne odraža več vira.

Tipični primeri odmika vključujejo:

- nove dele v viru
- nove primere
- nova opozorila
- spremenjene zaključke
- spremenjene diagrame
- posodobljene posnetke zaslona
- spremenjena navodila za sodelavce

Svežina je način, kako odmik postane merljiv.

Upravljanje odmika mora uporabljati:

- zavedanje o revizijah vira
- semantično primerjavo, kjer je to praktično
- opozorilni CI kot prvi korak
- blokirajoči CI tam, kjer je zaupanje visoko
- izrecno pozornost pregledovalcev pri večjih posodobitvah

## 16. del - Model zrelosti repozitorija

Repozitorij mora napredovati skozi te stopnje:

1. Prevedi vsebino.
2. Odkrij težave.
3. Ustvari validatorje.
4. Avtomatiziraj validacijo.
5. Prepreči ponovitve.
6. Upravljaj lokalizacijski odmik.
7. Uči prihodnje sodelavce in sisteme AI.

Tako se kopiči institucionalno znanje.

Zgodnejše delo preneha biti potrošno, ker ga poznejši sistemi podedujejo.

## 17. del - Vsebinski načrt

Program mora vzdrževati usklajeno večjezično pokritost med:

- blog članki, ki pojasnjujejo, zakaj je lokalizacija pomembna
- wiki stranmi, ki določajo politike in referenčna pravila
- učnimi vodniki, ki poučujejo poteke dela
- slogovnimi vodniki, ki učijo pisanje, terminologijo in prakso pregledovanja
- revizijskimi in upravljavskimi dokumenti, ki spremljajo zrelost in napake
- študijami primerov, ki ohranjajo praktične dokaze

Načrt mora dajati prednost:

1. kanonični popolnosti v angleščini
2. polni jezikovni pokritosti v vseh podprtih jezikih
3. popolnosti vsega, kar je vidno bralcu, v vsakem jeziku
4. pokritosti z validatorji za vsebine z visoko vrednostjo
5. rasti korpusa pregledov naravnih govorcev
6. spremljanju odmika za ključne vsebine

Vsi glavni dokumenti bi morali biti agresivno navzkrižno povezani, da se bralec lahko premakne od načela do poteka dela, od pravil do dokazov.

## 18. del - Merila uspeha

Bralec, ki preklaplja med podprtimi jeziki, bi moral naleteti na:

- iste osrednje pojme
- iste primere
- ista opozorila
- isto izobraževalno vrednost
- ista praktična navodila

Hkrati pa mora vsak jezik delovati, kot da je naravno napisan za svoje občinstvo.

Najvišji cilj Lokalizacije v velikem obsegu je:

**polna jezikovna pokritost, popolnost lokalizacije, semantična pariteta, berljivost v maternem jeziku, kulturna ustreznost, izobraževalna učinkovitost, neprekinjeno izboljševanje, preprečevanje napak, upravljanje odmika in vzdržno večjezično objavljanje z močnimi povratnimi zankami.**

## Operativne metrike

Neprekinjeno spremljaj te številke:

```text
Localization Debt = X
Open Defect Classes = Y
```

Dolgoročni cilj je:

```text
Localization Debt = 0
Open Defect Classes = 0
```

## Sorodni dokumenti

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
