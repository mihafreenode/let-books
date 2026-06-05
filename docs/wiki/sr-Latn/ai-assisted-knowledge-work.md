---
title: "AI-potpomognut rad sa znanjem"
summary: >-
  Radni tokovi vođeni specifikacijama važe i izvan softvera: pomažu da se AI-potpomognuto pisanje, istraživanje, dokumentacija, rad na politikama i drugi oblici intelektualno zahtevnog rada oblikuju kroz jasno određenu nameru, proveru i uređen postupak pregleda.
topics:
  - ai-assisted-workflows
  - spec-driven-development
  - governance
  - documentation
---
# AI-potpomognut rad sa znanjem

## Rezime

Radni tokovi vođeni specifikacijama nisu ograničeni na softversko inženjerstvo. Oni takođe pomažu da se strukturiraju AI-potpomognuto akademsko pisanje, istraživanje, obrazovni sadržaj, tehnička dokumentacija, pravno i regulatorno pisanje, rad na politikama i drugi oblici rada sa znanjem.

Osnovni obrazac ostaje koristan čak i kada se pojedinačni AI-proizvodi menjaju:

- definišite cilj i ograničenja
- sačuvajte relevantan kontekst u trajnim artefaktima
- nacrte stvarajte i dorađujte iterativno
- rezultat proveravajte prema eksplicitnim standardima
- zadržite ljudsku odgovornost za procenu i odobrenje
- upravljajte automatizacijom kroz pregled, kontrolu pristupa i sledljivost

Ova stranica se usredsređuje na ta stabilna načela, a ne na bilo koji pojedinačni AI-alat.

> **Autorska napomena / koristan mentalni model:** Jedan praktičan način razmišljanja o AI-ju jeste da ga posmatramo kao savremeno proročište. U računarstvu je oracle hipotetički sistem koji odgovara na određenu klasu pitanja. U kriptografiji se oracle može upitati bez otkrivanja njegovog unutrašnjeg rada. Pitanja ulaze, odgovori izlaze, a unutrašnjost ostaje skrivena. Zato su poverenje, provera, upravljanje i odgovornost važni.

## Od interaktivnog AI-ja do agentnih radnih tokova

Mnogi ljudi se sa AI-potpomognutim radom prvi put susreću kroz interaktivne veb sisteme. To je razuman početak.

Radni tokovi vođeni specifikacijama ne zahtevaju agente za kodiranje, terminalske alate niti automatizaciju repozitorijuma. Interaktivni AI već može da pomogne u korisnom ranom radu, kao što su izrada specifikacija, pregled dokumenata, izoštravanje zahteva, priprema početnih nacrta i predloga teksta, prepoznavanje praznina i predlaganje načina provere i alternativa.

Zato je interaktivni AI prirodna ulazna tačka za ljude koji rade na jednokratnim dokumentima, ranim nacrtima ili manjim projektima. Istraživač ga može koristiti da poboljša strukturu rada. Nastavnik ga može koristiti da izoštri ishode učenja i nivo težine. Tim za politike može ga koristiti da uporedi moguće strukture dokumenta pre nego što formalno pisanje uopšte počne. Pravna ili regulatorna ekipa može ga koristiti da otkrije nedostajuće definicije, nerešene pretpostavke ili zavisnosti u pregledu.

Ključna ideja je da specifikacija nije ograničena na funkcionalnosti softvera. U širem radu sa znanjem specifikacija može da definiše:

- ciljeve
- ograničenja
- očekivanja kvaliteta
- ciljnu publiku
- terminologiju
- zahteve za dokazima
- zahteve pristupačnosti
- obaveze usklađenosti
- standarde objavljivanja

Akademski članak, na primer, mogu voditi očekivanja o stilu citiranja, nivou dokaza, doslednosti terminologije, etičkim objavama, ciljnom časopisu i jezičkom kvalitetu. Obrazovni materijal možda će morati da sledi ishode učenja, traženi nivo čitljivosti, usklađenost sa kurikulumom, zahteve pristupačnosti i pravila vrednovanja. Tehnička dokumentacija može se morati uskladiti sa stvarnim ponašanjem proizvoda, strukturom objave, pravilima za snimke ekrana i politikama verzioniranja. Pravno ili političko pisanje može tražiti tačno određenu jurisdikciju, odobrenu terminologiju, pregledne prelaze i obavezne reference.

U svim tim slučajevima specifikacija pomaže da se rad pomeri od nejasnih promptova ka eksplicitnoj nameri.

### Markdown kao trajan format za znanje

U praksi mnogi timovi specifikacije, beleške, preglede, nalaze, promptove i zapise o radnom toku čuvaju u Markdownu. Markdown nije jedini koristan format, ali je često praktičan zato što je:

- čitljiv bez specijalizovanog softvera
- dovoljno mašinski čitljiv za automatizaciju
- pogodan za verzioniranje i pregled razlika
- prenosiv između alata i platformi
- izdržljiv kroz duži vremenski period

Te osobine su važne u AI-potpomognutom radu zato što je kontekst vredan samo ako može da se sačuva, ponovo pregleda i ponovo upotrebi. Markdown olakšava čuvanje više od samog završnog dokumenta. Može sačuvati ciljeve, pretpostavke, ograničenja, nalaze pregleda, pravila objavljivanja, rezultate validacije i odluke zajedno sa njihovim obrazloženjem.

To koristi ljudima jer poboljšava sledljivost i pregled. Koristi i AI-sistemima jer važan kontekst ostaje u formatu koji je relativno lako citirati, pretraživati, sažimati i ponovo dohvatati.

Markdown ne treba tretirati kao čarobno rešenje. On sam po sebi ne garantuje tačnost, ažurnost ni dobru procenu. Ipak, često dobro služi kao trajan medij za organizaciono pamćenje.

### Iterativno usavršavanje je normalan slučaj

Stvarni AI-potpomognuti radni tokovi retko su linearni. Specifikacija je na početku često nepotpuna i postepeno se razjašnjava kroz raspravu.

Realističan ciklus često izgleda ovako:

1. definišite cilj
2. pripremite nacrt specifikacije
3. stvorite početni rezultat
4. pregledajte rezultat
5. poboljšajte specifikaciju
6. validirajte reviziju
7. ponavljajte dok rezultat ne postane prihvatljiv

To je važno zato što mnogi ljudi AI-radni tok i dalje zamišljaju kao jedan prompt posle kog dolazi gotov odgovor. U ozbiljnom radu kvalitet obično ne nastaje tako. Mnogo češće nastaje kroz uzastopno razjašnjavanje.

Ljudi ostaju centralni učesnici tokom celog tog ciklusa. AI može pomoći u generisanju, organizovanju, preoblikovanju, poređenju i pregledu, ali ljudi ostaju odgovorni za:

- ciljeve
- prioritete
- kompromise
- odluke o odobrenju
- procene kvaliteta

U tom smislu čovek nije samo pisac promptova. On deluje kao pregledalac, urednik, domenski stručnjak i donosilac odluka.

### Zašto interaktivni AI s vremenom dostiže praktične granice

Interaktivni AI ostaje koristan i u zrelijim radnim tokovima, ali veći projekti često razotkriju dva ponavljajuća ograničenja: kontekst i alate.

Kontekst je ograničen. Čak i kada savremeni sistemi mogu obraditi velike količine informacija, i dalje je nepraktično u jednom razgovoru stalno držati svaku specifikaciju, nalaz, izvor, komentar pregleda i pomoćni dokument. Kako projekat raste, problem nije samo ukupna količina. Problem je i relevantnost.

Zato mnogi agentni radni tokovi koriste ponovno dohvaćanje. Umesto da pokušavaju sve stalno držati u aktivnom vidokrugu, sistem čuva trajne zapise i po potrebi dohvaća najrelevantniji materijal. Cilj nije nužno dati više informacija odjednom, već dati prave informacije onda kada su potrebne.

Drugo ograničenje su alati. Interaktivne veb platforme obično nude pažljivo odabrane alate dizajnirane da pouzdano rade za široku publiku. Takav pristup ima stvarne prednosti:

- pouzdanost
- održavanje
- bezbednost
- doslednost

Ali specijalizovan rad često zahteva specijalizovan softver. Opšti interfejs nije uvek dovoljan za radni tok koji zavisi od provere citata, OCR-a, sistema za objavljivanje, automatizacije pregledača, statističke analize ili pregleda usklađenosti.

To je jedan od razloga zbog kojih su se pojavili agentni radni tokovi. Oni omogućavaju AI-sistemima da dohvaćaju usmeren kontekst, pozivaju odgovarajuće alate, validiraju rad i nastavljaju da iteriraju kroz veće količine materijala.

### Veštine, alati i specijalizovani sistemi

U AI-potpomognutom radu alati su često interfejsi ka specijalizovanim sistemima, a ne njihove zamene.

Primeri uključuju:

- proveru pravopisa i jezičkog kvaliteta
- OCR
- automatizaciju pregledača
- generisanje dijagrama
- validaciju citata
- statistički softver
- sisteme za objavljivanje
- sisteme za obradu dokumenata

Akademski radni tok može se oslanjati na TeX ili LaTeX alate, upravljače bibliografijom, predloške časopisa i statističke pakete. Dokumentacijski radni tok može se oslanjati na proveru poveznica, validatore pristupačnosti, procese za snimke ekrana i objavne cevovode. Pravni ili politički radni tok može zavisiti od sistema za upravljanje dokumentima, biblioteka klauzula, preglednih sistema ili regulatornih referentnih baza.

AI-sistem obezbeđuje koordinaciju i rezonovanje, a specijalizovani alati obavljaju domenski specifičan posao.

Kako radni tokovi sazrevaju, ponavljajuće upute često postaju ponovo upotrebljiva sredstva kao što su veštine, predlošci, procedure, definicije radnih tokova i pravila validacije. To je jedan od najvažnijih načina na koje organizaciono znanje s vremenom postaje trajnije. Ono što počne kao ponavljajući razgovorni savet često postane sredstvo koje se može ponovo koristiti i pregledavati.

### Validatori i institucionalni standardi

Validatori su važan deo rada sa znanjem vođenog specifikacijama jer pomažu da se proveri da li artefakt zadovoljava neki deo svoje specifikacije.

U zavisnosti od oblasti, validatori mogu uključivati:

- validatore jezičkog kvaliteta
- stilske validatore
- validatore citata
- validatore pristupačnosti
- validatore usklađenosti
- validatore objavljivanja

Validatore ne treba tretirati kao važnije od samog sadržaja. Oni ne zamenjuju autorstvo, stručnost ni prosudbu. Ali često nadžive pojedinačne projekte i pomažu da se standardi očuvaju kroz vreme.

Validator citata stvoren za jedan objavni radni tok kasnije može podržati mnoge objave. Validator terminologije može smanjiti nedoslednost među autorima i timovima. Validatori pristupačnosti i objavljivanja mogu pomoći u očuvanju institucionalnih očekivanja kvaliteta čak i kada se menjaju saradnici i alati.

Nije realno očekivati da će svaki autor sam izgraditi takve validatore. U mnogim slučajevima to zahteva tehničku stručnost, domensko znanje, infrastrukturu i održavanje. Razumno je da univerziteti, izdavači, istraživačke grupe, javne ustanove ili interni platformni timovi obezbeđuju zajedničke validatore umesto da svaki autor sve gradi od početka.

### Trajni formati izvan teksta

Iako je Markdown često praktičan za tekstualne artefakte, važni su i drugi trajni formati.

SVG je često koristan format za dijagrame zato što je tekstualan, skalabilan, relativno pogodan za verzioniranje i dostupan i za ljudsko uređivanje i za AI-potpomognutu obradu. Nije uvek pravi izbor, ali dobro funkcioniše kada dijagrame treba održavati kao žive artefakte, a ne kao neprozirne slike.

Opšte načelo je šire od bilo koje pojedinačne vrste datoteke: formati koji ostaju pregledni, prenosivi i održivi obično podržavaju AI-potpomognute radne tokove bolje od formata koji skrivaju strukturu ili nepotrebno otežavaju pregled.

### Lokalizacija i kontekst čitaoca

Radni tokovi vođeni specifikacijama važe i za višejezičan rad. Specifikacije, nalazi pregleda, primeri i artefakti radnog toka mogu svi zahtevati lokalizaciju.

Kada su dokumenti lokalizovani, praktično je lokalizovati i primere gde god je to moguće. Nepotrebni engleski citati povećavaju kognitivno opterećenje čitalaca koji inače čitaju na drugom jeziku.

Izuzeci mogu uključivati:

- nazive kompanija
- nazive proizvoda
- standarde
- komande
- kod
- nazive protokola

Cilj nije jezička čistota. Cilj je da se smanji trenje za čitaoca i da zapisi o radnom toku ostanu razumljivi na njegovom radnom jeziku.

### Sažeta studija slučaja radnog toka

Prateći transkript za ovu temu koristan je primer kako se specifikacije razvijaju kroz raspravu. Poglavlje nije počelo sa potpuno oblikovanom strukturom. Zahtevi su se pojavljivali iterativno.

Skraćeni oblik te rasprave izgledao je otprilike ovako:

- početna ideja: "proširi tekst ... dodaj praktičan uvid ... uključi akademsko, obrazovno i možda pravno pisanje"
- kritika: "Ne bih to formulisao tako direktno ... validatori imaju dugoročnu vrednost"
- proširenje obima: "prvo bih se usredsredio na interaktivni web AI"
- praktična ograničenja: "postoji granica količine konteksta koju AI može istovremeno da drži aktivnom ..."
- arhitektura radnog toka: "uloga veština ... kao interfejsa ka specijalizovanim programima"
- zabrinutosti oko upravljanja: "korišćenje veština trećih strana nosi ozbiljne bezbednosne posledice"
- zabrinutosti oko lokalizacije: "i citati bi trebalo da budu lokalizovani na svaki jezik"
- konsolidacija: "reč je o jednoj većoj temi ... bolje je imati nekoliko obimnijih članaka"

Taj sled reprezentativniji je za stvarni AI-potpomognuti rad nego uglačana priča o uspehu. Važna pouka nije da je na kraju napisan savršen prompt. Važno je da su se zahtevi, prigovori, uredničke odluke i zabrinutosti oko upravljanja postepeno pretvarali u jasniju specifikaciju.

## Upravljanje, poverenje i bezbednost

Kako AI-sistemi prelaze od pasivne pomoći pri pisanju ka korišćenju alata i izvršavanju radnih tokova, upravljanje postaje važnije, a ne manje važno.

Tradicionalna bezbednost softvera često se fokusirala na izvršni kod. U AI-potpomognutim sistemima granica je šira. Na ponašanje sistema mogu uticati same upute. Specifikacije, definicije radnih tokova, promptovi i opisi veština mogu svi uticati na to šta sistem radi i kako to radi.

To ne znači da svaku tekstualnu datoteku treba tretirati kao inherentno opasnu. Ali znači da organizacije moraju pažljivo promišljati granice poverenja. U AI-potpomognutim okruženjima neki tekstovi nisu samo opisni. Oni mogu postati operativni.

### Veštine, integracije i granice poverenja

Spoljne veštine, alati, paketi radnih tokova i integracije mogu biti korisni, ali istovremeno otvaraju pitanja upravljanja.

Organizacije mogu sasvim razumno davati prednost:

- interno razvijenim veštinama
- institucionalno pregledanim radnim tokovima
- pouzdanim dobavljačima
- integracijama pod upravljanjem

To je posebno važno kada veština ili integracija može uticati na dohvat materijala, transformaciju, objavljivanje, spoljni pristup ili pozivanje alata. Dobro upravljan radni tok obično ne prati samo šta AI može da kaže, već i čemu može pristupiti, šta može pokrenuti i šta može promeniti.

Veliki dobavljači poput OpenAI-ja, Microsofta i Oraclea mogu nuditi ekosisteme alata i integracione slojeve, ali trajno pitanje upravljanja nije koji trenutni proizvod postoji. Pitanje je razume li organizacija granicu radnog toka koji usvaja i veruje li joj.

### Zadržite autorizaciju izvan AI-zaključivanja

Korisno načelo dizajna jeste da odluke o autorizaciji, kada god je to praktično moguće, ostanu izvan AI-sistema.

AI može pomoći da se odluči koja radnja izgleda prikladno, ali stvarnu dozvolu za sprovođenje te radnje treba da obezbedi sistem izgrađen za autentikaciju, autorizaciju, reviziju i upravljanje akreditivima. U praksi to često znači oslanjanje na:

- provajdere identiteta
- kontrolu pristupa zasnovanu na ulogama
- dozvole u bazi podataka
- API prolaze
- odobrenja radnih tokova
- bezbedno rukovanje akreditivima

Akreditivi treba da ostanu u sistemima namenjenim upravljanju akreditivima, a ne da budu ugrađeni u promptove, specifikacije ili improvizovane tekstove radnog toka.

To razdvajanje je važno zato što smanjuje verovatnoću da se uverljiva generisana uputa zameni za legitimni autoritet. Odobrenja i kontrola pristupa moraju ostati usidreni u sistemima dizajniranim za njihovo sprovođenje.

### AI prolazi kao sloj upravljanja

Neke ustanove mogu odlučiti da uvedu AI kroz kontrolisane prolaze, umesto da svaki interni sistem izlože direktno.

AI prolaz može podržavati:

- reviziju
- sprovođenje politika
- autentikaciju
- autorizaciju
- nadzor
- odobren pristup alatima

To nije univerzalan zahtev i manji timovi mogu izabrati lakše kontrole. Ali to je razuman obrazac upravljanja za institucije kojima su potrebni sledljivost, centralni nadzor ili dosledno sprovođenje politika kroz više korisnika i radnih tokova.

### Zašto upravljanje dobija na vrednosti kako automatizacija raste

Više automatizacije ne uklanja potrebu za pregledom. Povećava vrednost odgovornog pregleda.

Kako AI-potpomognuti rad postaje brži, organizacije često zahtevaju snažnije, a ne slabije strukture za:

- odgovornost
- sledljivost
- validaciju
- odobravanje
- poverenje
- očuvanje institucionalnog znanja

To je jedan od razloga zašto radni tokovi vođeni specifikacijama ostaju korisni i izvan trenutnih trendova u alatima. Organizacijama daju način da sačuvaju nameru, definišu standarde, povežu rezultate sa pregledom i upravljaju automatizacijom, bez pretvaranja da automatizacija čini upravljanje nepotrebnim.

## Praktična pouka

Najtrajnija lekcija je jednostavna:

AI-potpomognut rad sa znanjem postaje pouzdaniji kada su ciljevi, ograničenja, standardi, validacija i autoritet eksplicitni.

To načelo važi za softver, ali i za istraživanje, nastavu, dokumentaciju, rad na politikama, pravno pisanje i druge ozbiljne procese pisanja i pregleda. Alati će se menjati. Potreba za specifikacijama, preglednim kontekstom, validacijom i upravljanim granicama poverenja verovatno će ostati.

## Kako raditi sa AI-jem

- tretirajte AI kao sposobnog saradnika, a ne kao autoritet
- proverite važne tvrdnje
- sačuvajte važan kontekst
- zapišite ciljeve i pretpostavke
- pregledajte rezultate
- odgovornost za odluke zadržite kod ljudi

## Prateći materijal

Prateći materijal na `docs/supporting-material/spec_driven_workflow_thread.html` dokumentuje deo rasprave i procesa dorade koji stoji iza ovog članka. To je zapis radnog toka, a ne jedini izvor svake ideje u članku.

Transkript sadrži nedovršene ideje, promenljiva mišljenja, odbačene predloge, grube formulacije, tipfelere ili greške autokorekcije i druge tragove iterativne dorade. Zaključci članka i autorska razmišljanja zato nisu isto što i transkript.

Ova stranica uključuje i kasniju sintezu, uredničko doterivanje, iskustvo iz implementacije, lokalizacijske preglede, validacioni rad i lično promišljanje. Neki zaključci pojavili su se tek nakon završetka zabeležene rasprave.

## Povezane stranice

- `spec-driven-development.md`
- `markdown-in-product-development.md`
- `validation-layers.md`
- `documentation-traceability.md`
