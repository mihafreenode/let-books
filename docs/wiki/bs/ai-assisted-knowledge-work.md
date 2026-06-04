---
title: "AI-potpomognut rad sa znanjem"
summary: >-
  Radni tokovi vođeni specifikacijama važe i izvan softvera: pomažu strukturirati AI-potpomognuto pisanje, istraživanje, dokumentaciju, rad na politikama i druge oblike intelektualno zahtjevnog rada kroz eksplicitnu namjeru, validaciju i upravljani pregled.
topics:
  - ai-assisted-workflows
  - spec-driven-development
  - governance
  - documentation
---
# AI-potpomognut rad sa znanjem

## Rezime

Radni tokovi vođeni specifikacijama nisu ograničeni na softversko inženjerstvo. Oni također pomažu strukturirati AI-potpomognuto akademsko pisanje, istraživanje, obrazovne sadržaje, tehničku dokumentaciju, pravno i regulatorno pisanje, rad na politikama te druge oblike rada sa znanjem.

Osnovni obrazac ostaje koristan čak i kada se pojedini AI-proizvodi mijenjaju:

- definišite cilj i ograničenja
- sačuvajte relevantan kontekst u trajnim artefaktima
- nacrte stvarajte i dorađujte iterativno
- rezultat provjeravajte prema eksplicitnim standardima
- zadržite ljudsku odgovornost za procjenu i odobrenje
- automatizacijom upravljajte kroz pregled, kontrolu pristupa i sljedivost

Ova stranica fokusira se na ta stabilna načela, a ne na bilo koji pojedinačni AI-alat.

## Od interaktivnog AI-ja do agentnih radnih tokova

Mnogi ljudi se s AI-potpomognutim radom prvi put susreću kroz interaktivne web sisteme. To je razuman početak.

Radni tokovi vođeni specifikacijama ne zahtijevaju agente za kodiranje, terminalske alate ni automatizaciju repozitorija. Interaktivni AI već može pomoći u korisnom ranom radu, poput izrade specifikacija, pregleda dokumenata, izoštravanja zahtjeva, stvaranja kandidatskih sadržaja, prepoznavanja praznina, predlaganja strategija validacije i istraživanja alternativa.

Zato je interaktivni AI prirodna ulazna tačka za ljude koji rade na jednokratnim dokumentima, ranim nacrtima ili manjim projektima. Istraživač ga može koristiti da poboljša strukturu rada. Nastavnik ga može koristiti da izoštri ishode učenja i nivo težine. Tim za politike može ga koristiti da uporedi moguće strukture dokumenta prije nego što formalno pisanje uopće počne. Pravna ili regulatorna ekipa može ga koristiti da otkrije nedostajuće definicije, neriješene pretpostavke ili zavisnosti u pregledu.

Ključna ideja je da specifikacija nije ograničena na funkcionalnosti softvera. U širem radu sa znanjem specifikacija može definisati:

- ciljeve
- ograničenja
- očekivanja kvaliteta
- ciljnu publiku
- terminologiju
- zahtjeve za dokazima
- zahtjeve pristupačnosti
- obaveze usklađenosti
- standarde objavljivanja

Akademski članak, na primjer, mogu voditi očekivanja o stilu citiranja, nivou dokaza, dosljednosti terminologije, etičkim objavama, ciljnom časopisu i jezičkom kvalitetu. Obrazovni materijal možda će morati slijediti ishode učenja, traženi nivo čitljivosti, usklađenost s kurikulumom, zahtjeve pristupačnosti i pravila vrednovanja. Tehnička dokumentacija može se morati uskladiti sa stvarnim ponašanjem proizvoda, strukturom objave, pravilima za snimke ekrana i politikama verzioniranja. Pravno ili političko pisanje može tražiti tačno određenu jurisdikciju, odobrenu terminologiju, pregledne prijelaze i obavezne reference.

U svim tim slučajevima specifikacija pomaže pomjeriti rad od nejasnih promptova prema eksplicitnoj namjeri.

### Markdown kao trajan format za znanje

U praksi mnogi timovi specifikacije, bilješke, preglede, nalaze, promptove i artefakte radnog toka pohranjuju u Markdownu. Markdown nije jedini koristan format, ali je često praktičan jer je:

- čitljiv bez specijaliziranog softvera
- dovoljno strojno čitljiv za automatizaciju
- pogodan za verzioniranje i pregled razlika
- prenosiv između alata i platformi
- izdržljiv kroz duži vremenski period

Te osobine su važne u AI-potpomognutom radu jer je kontekst vrijedan samo ako se može sačuvati, ponovo pregledati i ponovo upotrijebiti. Markdown olakšava čuvanje više od samog završnog isporučivog artefakta. Može sačuvati ciljeve, pretpostavke, ograničenja, nalaze pregleda, pravila objavljivanja, rezultate validacije i odluke zajedno s njihovim obrazloženjem.

To koristi ljudima jer poboljšava sljedivost i pregled. Koristi i AI-sistemima jer važan kontekst ostaje u formatu koji je razmjerno lako citirati, pretraživati, sažimati i ponovo dohvaćati.

Markdown ne treba tretirati kao čarobno rješenje. On sam po sebi ne garantuje tačnost, ažurnost ni dobru prosudbu. Ipak, često dobro služi kao trajan medij za organizacijsko pamćenje.

### Iterativno usavršavanje je normalan slučaj

Stvarni AI-potpomognuti radni tokovi rijetko su linearni. Specifikacija je na početku često nepotpuna i postepeno se razjašnjava kroz raspravu.

Realističan ciklus često izgleda ovako:

1. definišite cilj
2. pripremite nacrt specifikacije
3. stvorite početni rezultat
4. pregledajte rezultat
5. poboljšajte specifikaciju
6. validirajte reviziju
7. ponavljajte dok rezultat ne bude prihvatljiv

To je važno jer mnogi ljudi AI-radni tok još uvijek zamišljaju kao jedan prompt iza kojeg slijedi gotov odgovor. U ozbiljnom radu kvalitet obično ne nastaje tako. Mnogo češće nastaje kroz uzastopno razjašnjavanje.

Ljudi ostaju središnji učesnici tokom cijelog tog ciklusa. AI može pomoći u generisanju, organizovanju, preoblikovanju, poređenju i pregledu, ali ljudi ostaju odgovorni za:

- ciljeve
- prioritete
- kompromise
- odluke o odobrenju
- procjenu kvaliteta

U tom smislu čovjek nije samo pisac promptova. On djeluje kao pregledalac, urednik, domenski stručnjak i donosilac odluka.

### Zašto interaktivni AI s vremenom doseže praktične granice

Interaktivni AI ostaje koristan i u zrelijim radnim tokovima, ali veći projekti često razotkriju dva ponavljajuća ograničenja: kontekst i alate.

Kontekst je ograničen. Čak i kada savremeni sistemi mogu obraditi velike količine informacija, i dalje je nepraktično u jednom razgovoru stalno držati svaku specifikaciju, nalaz, izvor, komentar pregleda i pomoćni dokument. Kako projekt raste, problem nije samo ukupna količina. Problem je i relevantnost.

Zato mnogi agentni radni tokovi koriste ponovno dohvaćanje. Umjesto da pokušavaju sve stalno držati u aktivnom vidokrugu, sistem pohranjuje trajne artefakte i po potrebi dohvaća najrelevantniji materijal. Cilj nije nužno dati više informacija odjednom, nego dati prave informacije onda kada su potrebne.

Drugo ograničenje su alati. Interaktivne web platforme obično nude kurirane alate dizajnirane da pouzdano rade za široku publiku. Takav kurirani pristup ima stvarne prednosti:

- pouzdanost
- održavanje
- sigurnost
- dosljednost

Ali specijaliziran rad često traži specijaliziran softver. Opći interfejs nije uvijek dovoljan za radni tok koji zavisi od provjere citata, OCR-a, sistema za objavu, automatizacije preglednika, statističke analize ili pregleda usklađenosti.

To je jedan od razloga zbog kojih su se pojavili agentni radni tokovi. Oni omogućavaju AI-sistemima da dohvaćaju usmjeren kontekst, pozivaju odgovarajuće alate, validiraju rad i nastavljaju iterirati kroz veće količine materijala.

### Vještine, alati i specijalizirani sistemi

U AI-potpomognutom radu alati su često interfejsi prema specijaliziranim sistemima, a ne njihove zamjene.

Primjeri uključuju:

- provjeru pravopisa i jezičkog kvaliteta
- OCR
- automatizaciju preglednika
- izradu dijagrama
- validaciju citata
- statistički softver
- sisteme za objavu
- sisteme za obradu dokumenata

Akademski radni tok može se oslanjati na TeX ili LaTeX alate, upravitelje bibliografije, predloške časopisa i statističke pakete. Dokumentacijski radni tok može se oslanjati na provjeru poveznica, validatore pristupačnosti, procese za snimke ekrana i objavne cjevovode. Pravni ili politički radni tok može zavisiti od sistema za upravljanje dokumentima, biblioteka klauzula, preglednih sistema ili regulatornih referentnih baza.

AI-sistem pruža koordinaciju i rezonovanje, a specijalizirani alati obavljaju domenski specifičan posao.

Kako radni tokovi sazrijevaju, ponavljajuće upute često postaju ponovo upotrebljiva sredstva kao što su vještine, predlošci, procedure, definicije radnih tokova i pravila validacije. To je jedan od najvažnijih načina na koje organizacijsko znanje s vremenom postaje trajnije. Ono što započne kao ponavljajući razgovorni savjet često postane sredstvo koje se može ponovo koristiti i pregledavati.

### Validatori i institucionalni standardi

Validatori su važan dio rada sa znanjem vođenog specifikacijama jer pomažu provjeriti zadovoljava li artefakt neki dio svoje specifikacije.

Ovisno o području, validatori mogu uključivati:

- validatore jezičkog kvaliteta
- stilske validatore
- validatore citata
- validatore pristupačnosti
- validatore usklađenosti
- validatore objave

Validatore ne treba tretirati kao važnije od samog sadržaja. Oni ne zamjenjuju autorstvo, stručnost ni prosudbu. No često nadžive pojedine projekte i pomažu očuvati standarde kroz vrijeme.

Validator citata stvoren za jedan objavni radni tok kasnije može podržati mnoge objave. Validator terminologije može smanjiti nedosljednost među autorima i timovima. Validatori pristupačnosti i objave mogu pomoći u očuvanju institucionalnih očekivanja kvaliteta čak i kada se mijenjaju saradnici i alati.

Nije realno očekivati da će svaki autor sam izgraditi takve validatore. U mnogim slučajevima to zahtijeva tehničku stručnost, domensko znanje, infrastrukturu i održavanje. Razumno je da univerziteti, izdavači, istraživačke grupe, javne ustanove ili interni platformni timovi osiguravaju zajedničke validatore umjesto da svaki autor sve gradi od početka.

### Trajni formati izvan teksta

Iako je Markdown često praktičan za tekstualne artefakte, važni su i drugi trajni formati.

SVG je često koristan format za dijagrame jer je tekstualan, skalabilan, razmjerno pogodan za verzioniranje te dostupan i za ljudsko uređivanje i za AI-potpomognutu obradu. Nije uvijek pravi izbor, ali dobro funkcioniše kada dijagrame treba održavati kao žive artefakte, a ne kao neprozirne slike.

Opće načelo je šire od bilo koje pojedinačne vrste datoteke: formati koji ostaju pregledni, prenosivi i održivi obično podržavaju AI-potpomognute radne tokove bolje od formata koji skrivaju strukturu ili nepotrebno otežavaju pregled.

### Lokalizacija i čitaočeva perspektiva

Radni tokovi vođeni specifikacijama važe i za višejezičan rad. Specifikacije, nalazi pregleda, primjeri i artefakti radnog toka mogu svi trebati lokalizaciju.

Kada su dokumenti lokalizovani, praktično je lokalizovati i primjere gdje god je to moguće. Nepotrebni engleski citati povećavaju kognitivno opterećenje čitalaca koji inače čitaju na drugom jeziku.

Izuzeci mogu uključivati:

- nazive kompanija
- nazive proizvoda
- standarde
- naredbe
- kod
- nazive protokola

Cilj nije jezička čistota. Cilj je smanjiti trenje za čitaoca i artefakte radnog toka zadržati razumljivima na njegovom radnom jeziku.

### Sažeta studija slučaja radnog toka

Prateći transkript za ovu temu koristan je primjer kako se specifikacije razvijaju kroz raspravu. Poglavlje nije počelo s potpuno oblikovanom strukturom. Zahtjevi su se pojavljivali iterativno.

Skraćeni oblik te rasprave izgledao je otprilike ovako:

- početna ideja: "extend the doc ... practical insight ... academic, educational and possibly legal writing"
- kritika: "I would not make it so direct ... validators have long term uses"
- proširenje opsega: "first I'd focus on interactive web AI"
- praktična ograničenja: "there's limit how much context AI can hold at once ..."
- arhitektura radnog toka: "role of skills ... interface to specialised programs"
- zabrinutosti oko upravljanja: "serious security implications of using third party skills"
- zabrinutosti oko lokalizacije: "quotes should also be localized to each language"
- konsolidacija: "one big topic ... prefer few larger articles"

Taj slijed reprezentativniji je za stvarni AI-potpomognuti rad nego uglačana priča o uspjehu. Važna lekcija nije da je na kraju napisan savršen prompt. Važno je da su se zahtjevi, prigovori, uredničke odluke i zabrinutosti oko upravljanja postepeno pretvarali u jasniju specifikaciju.

## Upravljanje, povjerenje i sigurnost

Kako AI-sistemi prelaze od pasivne pomoći pri pisanju prema korištenju alata i izvršavanju radnih tokova, upravljanje postaje važnije, a ne manje važno.

Tradicionalna sigurnost softvera često se fokusirala na izvršni kod. U AI-potpomognutim sistemima granica je šira. Na ponašanje sistema mogu uticati same upute. Specifikacije, definicije radnih tokova, promptovi i opisi vještina mogu svi uticati na to šta sistem radi i kako to radi.

To ne znači da svaku tekstualnu datoteku treba tretirati kao inherentno opasnu. Ali znači da organizacije moraju pažljivo promišljati granice povjerenja. U AI-potpomognutim okruženjima neki tekstovi nisu samo opisni. Mogu postati operativni.

### Vještine, integracije i granice povjerenja

Vanjske vještine, alati, paketi radnih tokova i integracije mogu biti korisni, ali istovremeno otvaraju pitanja upravljanja.

Organizacije mogu sasvim razumno davati prednost:

- interno razvijenim vještinama
- institucionalno pregledanim radnim tokovima
- pouzdanim dobavljačima
- upravljanim integracijama

To je posebno važno kada vještina ili integracija može uticati na dohvat materijala, transformaciju, objavu, vanjski pristup ili pozivanje alata. Dobro upravljan radni tok obično ne prati samo šta AI može reći, nego i čemu može pristupiti, šta može pokrenuti i šta može promijeniti.

Veliki dobavljači poput OpenAI-ja, Microsofta i Oraclea mogu nuditi ekosisteme alata i integracijske slojeve, ali trajno pitanje upravljanja nije koji trenutni proizvod postoji. Pitanje je razumije li organizacija granicu radnog toka koji usvaja i vjeruje li joj.

### Zadržite autorizaciju izvan AI-zaključivanja

Korisno načelo dizajna jeste da odluke o autorizaciji, kada god je to praktično moguće, ostanu izvan AI-sistema.

AI može pomoći odlučiti koja radnja izgleda prikladno, ali stvarnu dozvolu za provedbu te radnje treba osigurati sistem izgrađen za autentikaciju, autorizaciju, reviziju i upravljanje vjerodajnicama. U praksi to često znači oslanjanje na:

- pružaoce identiteta
- kontrolu pristupa prema ulogama
- dozvole u bazama podataka
- API prolaze
- odobrenja radnih tokova
- sigurno rukovanje vjerodajnicama

Vjerodajnice trebaju ostati u sistemima namijenjenim upravljanju vjerodajnicama, a ne biti ugrađene u promptove, specifikacije ili improvizovane tekstove radnog toka.

To razdvajanje je važno jer smanjuje vjerovatnoću da se uvjerljiva generisana uputa zamijeni za legitimni autoritet. Odobrenja i kontrola pristupa moraju ostati usidreni u sistemima dizajniranim za njihovu provedbu.

### AI prolazi kao sloj upravljanja

Neke se ustanove mogu odlučiti da uvedu AI kroz kontrolisane prolaze, umjesto da svaki interni sistem izlože direktno.

AI prolaz može podržavati:

- reviziju
- provedbu politika
- autentikaciju
- autorizaciju
- nadzor
- odobren pristup alatima

To nije univerzalan zahtjev i manji timovi mogu odabrati lakše kontrole. No to je razuman obrazac upravljanja za institucije kojima su potrebni sljedivost, centralni nadzor ili dosljedna provedba politika kroz više korisnika i radnih tokova.

### Zašto upravljanje dobija na vrijednosti kako automatizacija raste

Više automatizacije ne uklanja potrebu za pregledom. Povećava vrijednost odgovornog pregleda.

Kako AI-potpomognuti rad postaje brži, organizacije često trebaju snažnije, a ne slabije strukture za:

- odgovornost
- sljedivost
- validaciju
- odobravanje
- povjerenje
- očuvanje institucionalnog znanja

To je jedan od razloga zašto radni tokovi vođeni specifikacijama ostaju korisni i izvan trenutnih trendova u alatima. Organizacijama daju način da sačuvaju namjeru, definišu standarde, povežu rezultate s pregledom i upravljaju automatizacijom, bez pretvaranja da automatizacija čini upravljanje nepotrebnim.

## Praktični naglasak

Najtrajnija lekcija je jednostavna:

AI-potpomognut rad sa znanjem postaje pouzdaniji kada su ciljevi, ograničenja, standardi, validacija i autoritet eksplicitni.

To načelo važi za softver, ali i za istraživanje, podučavanje, dokumentaciju, rad na politikama, pravno pisanje i druge ozbiljne procese pisanja i pregleda. Alati će se mijenjati. Potreba za specifikacijama, preglednim kontekstom, validacijom i upravljanim granicama povjerenja vjerovatno će ostati.

## Povezane stranice

- `spec-driven-development.md`
- `markdown-in-product-development.md`
- `validation-layers.md`
- `documentation-traceability.md`
- `../../supporting-material/spec_driven_workflow_thread.html`
