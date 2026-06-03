# Programi i Lokalizimit në Shkallë

## Përmbledhje

Ky doracak e përkufizon Lokalizimin në Shkallë në Let Books si një model operativ afatgjatë për botim shumëgjuhësh, rishikim, validim, mirëmbajtje dhe mësim të vazhdueshëm.

Teza e tij qendrore është e thjeshtë:

> Lokalizimi në Shkallë nuk është kryesisht problem përkthimi.
>
> Ai është problem i projektimit të sistemit të feedback-ut dhe problem i një sistemi shumëgjuhësh dijesh.

Qëllimi nuk është vetëm përkthimi i fjalëve.

Qëllimi është t'i ndihmojë njerëzit të mësojnë, të marrin pjesë, të kontribuojnë, të japin mësim, të ruajnë dijen dhe të kenë qasje në informacion në gjuhën që e kuptojnë më mirë, duke e mbajtur njëkohësisht këtë sistem shumëgjuhësh të mirëmbajtshëm me kalimin e kohës.

## Shtresat e Programit

- `docs/blog/` shpjegon pse lokalizimi ka rëndësi në praktikë.
- `docs/wiki/` përcakton rregulla, modele dhe qeverisje afatgjata.
- `docs/learning/` e kthen temën në rrjedha pune operative.
- `docs/style-guide/` përcakton rregullat për kontribuesit, terminologjinë, rishikimin dhe botimin.
- `docs/sources/` i mban pretendimet kryesore të gjurmueshme.
- `docs/localization-audit-report.md` ndjek borxhin, klasat e defekteve dhe statusin e mbylljes.

## Pjesa 1 - Pse Lokalizimi Ka Rëndësi

Lokalizimi ka rëndësi sepse qasshmëria gjuhësore është pjesë e qasjes reale.

Nëse një lexues nuk mund ta kuptojë përmbajtjen me rehati, atëherë qasja ekziston vetëm në një kuptim të ngushtë teknik.

Për Let Books, botimi shumëgjuhësh ka rëndësi për arsye praktike:

- qasshmëria arsimore
- pjesëmarrja kulturore
- barazia e dijes
- përfshirja digjitale
- teknologjia në interes publik
- qeverisja shumëgjuhëshe
- ruajtja e gjuhëve më të vogla
- mbështetja për gjuhët zyrtare dhe rajonale
- shumëgjuhësia evropiane në praktikë
- parimi i "United in Diversity" i zbatuar në softuer funksional dhe në sisteme dijesh

Ky nuk është argument për përkthim simbolik.

Është argument për pjesëmarrje shumëgjuhëshe të përdorshme.

Lexuesit nuk ndeshen vetëm me tituj dhe menu. Ata ndeshen me shpjegime, paralajmërime, diagrame, rrjedha pune rishikimi, shembuj, tekst për aksesueshmëri, metadata dhe kornizim arsimor. Nëse këto mbeten vetëm në anglisht, sistemi prapëseprapë u jep përparësi lexuesve të anglishtes edhe kur ekzistojnë mbështjellësa të lokalizuara.

## Pjesa 2 - Lokalizimi Është Sistem, Jo Projekt

Shumë përpjekje lokalizimi menaxhohen sikur të ishin projekte të fundme:

```text
Përkthe
Publiko
Përfundo
```

Ky model prishet shpejt.

Përmbajtja ndryshon.

Terminologjia evoluon.

Gjuhët evoluojnë.

Kontribuesit ndryshojnë.

Sistemet e AI përmirësohen.

Folësit amtarë zbulojnë çështje të reja pas botimit.

Prandaj, Lokalizimi në Shkallë e trajton lokalizimin si një sistem operativ:

```text
Krijo
Përkthe
Valido
Përmirëso
Mirëmbaj
Përditëso
Parandalo Devijimin
Përsërit
```

Problemi i vështirë nuk është krijimi i përkthimeve një herë.

Problemi i vështirë është të operosh me kalimin e kohës një sistem shumëgjuhësh dijesh pa humbur mbulimin, barazinë, cilësinë, përditësinë ose besimin e rishikuesve.

## Pjesa 3 - AI Funksionon Më Mirë Brenda Qarqeve të Feedback-ut

AI është i dobishëm në lokalizim, por dobishmëria e tij varet nga cilësia e sistemit të feedback-ut që e rrethon.

Kent Beck e përmblodhi qartë versionin inxhinierik të këtij parimi:

> "Optimism is an occupational hazard of programming; feedback is the treatment."

Norbert Wiener përshkroi versionin sistemor:

> "Feedback is a method of controlling a system by reinserting into it the results of its past performance."

Ky është modeli i duhur edhe për botimin shumëgjuhësh.

AI funksionon më mirë kur rezultati i tij ekspozohet menjëherë ndaj feedback-ut, si p.sh.:

- kontrolle CI
- validatorë strukturorë
- kontrollues drejtshkrimi
- kontrolle terminologjike
- kontrolle të barazisë semantike
- kontrolle të aksesueshmërisë
- kontrolle shfletuesi dhe renderimi
- validim lidhjesh
- rishikim nga folës amtarë

Feedback-u i shpejtë vlen më shumë se përpjekjet e para të përsosura.

Qëllimi nuk është të kërkohen draft-e të përsosura nga njerëzit ose nga AI.

Qëllimi është të shkurtohet qarku mes:

- krijimit të përmbajtjes
- zbulimit të defekteve
- korrigjimit të defekteve
- parandalimit të përsëritjes së tyre

## Pjesa 3A - Rishikimi Dykahësh

Anglishtja mbetet gjuha burimore kanonike për qëllime botimi dhe sinkronizimi.

Megjithatë, njohuri të dobishme mund të lindin në çdo gjuhë.

Shembuj:

- një rishikim nga folës amtar identifikon formulim të sikletshëm në burim
- një përkthyes zbulon paqartësi
- një rishikues gjen kontekst që mungon
- një artikull i lokalizuar fiton një shembull më të mirë
- terminologjia përmirësohet në një gjuhë joanglisht
- rishikimi kulturor zbulon një çështje aksesueshmërie

Këto gjetje mund të justifikojnë ndryshime në vetë burimin kanonik.

### Parimi i Rishikimit Dykahësh

Lokalizimi nuk duhet trajtuar si proces njëkahësh:

```text
Anglisht
↓
Përkthime
```

Përkundrazi:

```text
Anglisht
↕
Përkthime
```

Anglishtja mbetet kanonike.

Dija mund të rrjedhë në të dy drejtimet.

### Ngjarja e Rishikimit Ndërgjuhësor

Çdo ndryshim thelbësor në përmbajtje duhet të nxisë rishikimin e gjuhëve përkatëse.

Nëse ndryshon anglishtja, rishiko:

- të gjitha versionet e lokalizuara
- barazinë semantike
- metadatat
- përmbledhjet
- diagramet dhe pamjet e ekranit kur janë relevante

Nëse ndryshon një version i lokalizuar, rishiko:

- nëse gjetja e përmirëson burimin kanonik
- nëse duhet të përfitojnë edhe gjuhë të tjera
- nëse udhëzimi terminologjik duhet të ndryshojë
- nëse udhëzimi i rishikimit duhet të ndryshojë
- nëse validatorët duhet të ndryshojnë

### Përmirësimi i Burimit përmes Lokalizimit

Rishikimi i lokalizimit mund të zbulojë:

- paqartësi
- kompleksitet të panevojshëm
- formulim armiqësor ndaj përkthimit
- supozime të fshehura
- formulim kulturorisht specifik
- terminologji të paaksesueshme

Kur ndodh kjo, përmirësimi i burimit mund të jetë më i mirë sesa kompensimi i veçantë në secilin përkthim.

```text
Problemi u zbulua në sllovenisht
↓
Shkaku rrënjësor u gjet në anglisht
↓
Anglishtja u përmirësua
↓
Të gjitha gjuhët përfitojnë
```

### Prompt për Rishikim nga Agjenti AI

Kur modifikon cilindo version gjuhësor, pyet:

```text
A zbulon ky ndryshim një problem në gjuhën burimore?
A i përmirëson ky ndryshim versionet në gjuhë të tjera?
A duhet të ndryshojë udhëzimi terminologjik?
A duhet të ndryshojë udhëzimi i rishikimit?
A duhet të ndryshojnë validatorët?
```

Përgjigjja mund të jetë:

```text
Nuk nevojitet veprim
```

ose:

```text
Hap detyrë rishikimi ndërgjuhësor
```

### Parimi Themelor

Burim kanonik nuk do të thotë urtësi kanonike.

Anglishtja mund të jetë burimi i sinkronizimit.

Dija, përmirësimet, gjetjet nga rishikimi dhe njohuritë për cilësinë mund të lindin nga çdo gjuhë e mbështetur.

Një projekt shumëgjuhësh duhet të lejojë që përmirësimet e zbuluara në një gjuhë t'u sjellin dobi të gjitha gjuhëve.

## Pjesa 4 - Modeli i Cilësisë së Lokalizimit

Cilësia e lokalizimit duhet të ndiqet në katër dimensione.

### Mbulimi

Mbulimi pyet nëse lexuesi mund të ketë fare qasje në përmbajtje në gjuhën e tij.

Shembuj:

- A ekziston artikulli në sllovenisht?
- A ekziston udhëzuesi mësimor në maqedonisht?
- A ekziston faqja e politikave në serbisht cirilike?

Mbulimi është binar në nivel botimi.

Ose përmbajtja ekziston për atë audiencë, ose nuk ekziston.

### Plotësia

Plotësia pyet nëse të gjitha pjesët e faqes që i shihen lexuesit janë të lokalizuara.

Shembuj:

- titull i lokalizuar, por përmbledhje në anglisht
- trup i lokalizuar, por etiketa në anglisht
- artikull i lokalizuar, por etiketa të papërkthyera në diagrame
- mbështjellës faqeje i lokalizuar, por karta të përmbajtjes së lidhur në anglisht

Mbulimi pa plotësi prodhon botim me gjuhë të përziera.

### Cilësia

Cilësia pyet nëse teksti i lokalizuar lexohet natyrshëm, saktë dhe në mënyrë të përshtatshme për audiencën e tij.

Shembuj:

- formulim teknikisht i saktë, por me tingëllim përkthimor
- kuptim i ruajtur, por retorikë jo natyrore
- tekst politikash i saktë, por jo me cilësi botimi
- shpjegim arsimor i saktë, por i vështirë për t'u mësuar prej tij

Cilësia është vendi ku rishikimi nga folësit amtarë sjell vlerën më unike.

### Përditësia

Përditësia pyet nëse versioni i lokalizuar ende e pasqyron burimin aktual.

Shembuj:

- paralajmërim i ri i shtuar në anglisht, por që mungon në përkthime
- përfundim i ndryshuar në burim, por faqet e përkthyera ende përdorin kornizimin e vjetër
- diagram ose pamje e përditësuar e ekranit ende e palokalizuar

Përditësia është fytyra operative e devijimit të lokalizimit.

## Pjesa 5 - Plotësia e Lokalizimit

### Rregulli i Lokalizimit për Përmbajtjen që i Shfaqet Lexuesit

Një faqe nuk është e plotë vetëm sepse ndonjëra nga sa vijon është lokalizuar:

- URL-ja
- titulli
- navigimi
- mbështjellësi i faqes
- përmbledhja e shkurtër e artikullit

E gjithë përmbajtja që i shfaqet lexuesit duhet të lokalizohet përpara se faqja të konsiderohet e plotë.

Përmbajtja që i shfaqet lexuesit përfshin:

- titujt
- nëntitujt
- përmbledhjet
- përshkrimet
- etiketat dhe etiketat e kategorive
- kryetitujt
- trupin e artikullit
- listat
- kutitë theksuese
- titrat
- diagramet
- tekstin alternativ
- tekstin e përmbajtjes së lidhur
- metadatat që u shfaqen lexuesve
- breadcrumbs të lokalizuara aty ku ekzistojnë variante

Përjashtimet e lejuara janë të ngushta:

- citimet
- material i shënuar qartë në gjuhën burimore që po diskutohet
- emrat e përveçëm
- identifikuesit teknikë
- mospërkthim që është shprehimisht i qëllimshëm

### Modeli i Dështimit nga Botimi me Gjuhë të Përziera

Një nga mësimet më të rëndësishme nga kjo nismë është se botimi me gjuhë të përziera shpesh duket sipërfaqësisht i suksesshëm.

Faqja mund të ketë:

- një shteg të lokalizuar
- një titull të lokalizuar
- një paragraf hyrës të lokalizuar

dhe prapëseprapë të dështojë për lexuesit sepse përmbledhjet, etiketat, kryetitujt ose pjesët e trupit mbeten në anglisht.

Pikërisht për këtë arsye plotësia ndiqet veçmas nga mbulimi.

## Pjesa 6 - Gjetjet nga Rishikimi i Folësve Amtarë

Ky seksion është një deliverable i klasit të parë.

Ai duhet të zgjerohet me kalimin e kohës.

Ai nuk duhet të kondensohet në përfundime të shkurtra.

Qëllimi i tij është të dokumentojë raste reale ku:

- përkthimi ishte teknikisht i saktë
- përkthimi ruante kuptimin e synuar
- përkthimi e kalonte validimin e automatizuar
- përkthimi e kalonte kontrollin drejtshkrimor
- përkthimi me gjasë do t'i kalonte kontrollet e barazisë semantike
- një folës amtar prapëseprapë gjente mundësi për ta përmirësuar

Këtu qëndron vlera arsimore.

Tregon çfarë mbetet pasi mjetet moderne të lokalizimit e kanë kryer tashmë punën e tyre.

### Formati i Regjistrimit në Korpus

Çdo regjistrim duhet të kapë:

- artikullin burimor
- gjuhën
- tekstin origjinal në anglisht
- tekstin origjinal të lokalizuar
- tekstin e përmirësuar të lokalizuar
- id
- shpjegimin
- kategorinë
- statusin
- nëse një validator është i mundur
- skedarët përkatës
- datën e shtimit
- nëse QA e automatizuar ka gjasa ta zbulojë çështjen
- mësimet e nxjerra

Shtegu i rekomanduar i korpusit në format të lexueshëm nga makina:

- `docs/style-guide/localization/native-speaker-findings-corpus.json`

Korpusi nuk është vetëm një arkivë.

Është një sipërfaqe kontrolli e ripërdorshme për:

- udhëzimet e rishikimit
- udhëzimet terminologjike
- përmirësimet e prompt-eve të AI
- rregullat e validatorëve
- mbulimin e regresionit
- transferimin ndërgjuhësor të njohurive

### Indeksi i Kategorive

Kategoritë aktuale dhe të pritshme përfshijnë:

- strukturë paralele
- transferim i retorikës angleze
- ndërtime me agjent të fshehur
- abstraksione antropomorfike
- tingëllim përkthimor
- mospërputhje me stilin arsimor
- mospërputhje me stilin e sektorit publik
- terminologji jo natyrore
- transferim i modeleve të ligjërimit
- përshtatje kulturore
- mospërputhje me pritshmëritë e audiencës
- përmirësim i lexueshmërisë
- përmirësim i tonit
- ruajtje semantike me humbje të rrjedhshmërisë
- botim me gjuhë të përziera
- terminologji angleze e panevojshme
- zhargon profesional i palokalizuar
- optimizim i tekstit burimor për lokalizim
- mik i rremë në terminologjinë teknike

### Optimizimi i Tekstit Burimor për Lokalizim

Përkufizim:

Një fjali burimore mund të jetë teknikisht e saktë, por gjithsesi në mënyrë të panevojshme e vështirë për t'u përkthyer natyrshëm në shumë gjuhë.

Udhëzim:

Kur problemet e përsëritura të përkthimit burojnë nga vetë formulimi i burimit, përmirëso tekstin burimor në vend që të kompensosh vazhdimisht në secilën gjuhë të synuar.

Parim pune:

> Teksti burimor më i mirë shpesh prodhon përkthime më të mira në çdo gjuhë.

### Mik i Rremë në Terminologjinë Teknike

Përkufizim:

Një term teknik përkthehet duke përdorur kuptimin e gabuar të domenit profesional, edhe pse kuptimi sipërfaqësor i fjalorit duket i besueshëm.

Udhëzim:

Përkthe fjalorin teknik sipas kontekstit aktiv të domenit. Në lokalizimin e softuerit, termat e testimit, QA-së, benchmarking-ut dhe vlerësimit duhet të zgjidhen fillimisht sipas këtyre domeneve, jo sipas kuptimeve fizike ose të përditshme pa lidhje.

### Gjetja 1 - Strukturë Paralele

- Artikulli burimor: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Gjuha: sllovenisht
- Teksti origjinal në anglisht: `what the project is trying to achieve and what it is explicitly not trying to become`
- Teksti origjinal i lokalizuar: `kaj projekt skuša doseči in česa ne sme postati`
- Teksti i përmirësuar i lokalizuar: `kaj projekt skuša doseči in kaj ne sme postati`
- Shpjegim: Fjalia origjinale në sllovenisht është gramatikisht e saktë dhe e kuptueshme. Ajo ruan kuptimin e synuar. Me shumë gjasë do t'i kalonte kontrollet e drejtshkrimit, të barazisë semantike dhe të QA-së së përgjithshme. Problemi është stilistik dhe strukturor. Formulimi pasqyron shumë nga afër strukturën kontrastuese të anglishtes dhe humbet formën më të pastër paralele që një autor vendas slloven zakonisht do ta zgjidhte.
- Kategoria: strukturë paralele; rrjedhshmëri e gjuhës amtare; tingëllim përkthimor
- A do ta zbulonte me gjasë QA e automatizuar?: Jo.
- Mësimet e nxjerra: Ruajtja e kuptimit nuk mjafton për prozë me cilësi botimi. Strukturat paralele shpesh mbijetojnë në përkthimin makinerik në forma teknikisht të pranueshme, por paksa me tingëllim të huaj.

### Gjetja 2 - Transferim i Retorikës Angleze

- Artikulli burimor: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Gjuha: sllovenisht
- Teksti origjinal në anglisht: `Institutions care because documentation affects governance, procurement confidence, onboarding, continuity, and auditability.`
- Teksti origjinal i lokalizuar: `Institucije bi morale to zanimati, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Teksti i përmirësuar i lokalizuar: `Institucijam je to pomembno, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Shpjegim: Versioni origjinal në sllovenisht është i kuptueshëm dhe semantikisht i përputhur, por i transferon shumë drejtpërdrejt zakonet retorike të anglishtes. `Bi morale to zanimati` nuk është e gabuar, por tingëllon më shumë si argument i përkthyer sesa si prozë shpjeguese e shkruar natyrshëm në sllovenisht. Versioni i përmirësuar përdor një ndërtim më idiomatik për prozë institucionale.
- Kategoria: transferim i modelit retorik anglez; transferim i modelit të ligjërimit; mospërputhje me stilin e sektorit publik
- A do ta zbulonte me gjasë QA e automatizuar?: Jo.
- Mësimet e nxjerra: Cilësia e gjuhës amtare shpesh varet nga modelet retorike të preferuara, jo vetëm nga saktësia leksikore. Shkrimi institucional dhe ai me interes publik mund të kërkojnë zakone të ndryshme fjalie nga ato që sugjerojnë origjinalet në anglisht.

### Gjetja 3 - Ndërtim me Agjent të Fshehur

- Artikulli burimor: `docs/blog/sl/spec-driven-development-for-ai-projects.md`
- Gjuha: sllovenisht
- Teksti origjinal në anglisht: `Why documentation cannot wait until later`
- Teksti origjinal i lokalizuar: `Zakaj dokumentacija ne sme čakati`
- Teksti i përmirësuar i lokalizuar: `Zakaj se z dokumentacijo ne sme čakati`
- Shpjegim: Titulli në anglisht nënkupton një agjent njerëzor të fshehur: njerëzit nuk duhet ta shtyjnë dokumentimin për më vonë. Versioni fjalë për fjalë në sllovenisht e transferon veprimin te vetë emri abstrakt, sikur dokumentimi të ishte aktori që nuk duhet të presë. Rezultati është i kuptueshëm, por retorikisht jo i qëlluar. Versioni i përmirësuar rikthen agjencinë njerëzore të nënkuptuar duke e mbajtur njëkohësisht titullin kompakt.
- Kategoria: ndërtim me agjent të fshehur; abstraksion antropomorfik; transferim fjalë për fjalë i kryefjalës
- A do ta zbulonte me gjasë QA e automatizuar?: Jo.
- Mësimet e nxjerra: Titujt janë veçanërisht të cenueshëm ndaj gabimeve me agjent të fshehur, sepse anglishtja toleron abstraksione të ngjeshura që jo gjithmonë kalojnë natyrshëm në gjuhë të tjera.

### Gjetja 4 - Ruajtje Semantike pa Rrjedhshmëri Amtare

- Artikulli burimor: `docs/blog/sl/ai-will-not-replace-translators.md`
- Gjuha: sllovenisht
- Teksti origjinal në anglisht: `Administrators must be able to disable OCR, translation, and condition assessment when needed. Paid enrichments must be explicitly enabled, traceable, and cost-controlled.`
- Teksti origjinal i lokalizuar: `Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`
- Teksti i përmirësuar i lokalizuar: `Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`
- Shpjegim: Ky është një nga shembujt më të qartë në depo se pse rishikimi nga folësit amtarë mbetet i nevojshëm edhe pas QA-së së automatizuar. Draft-i ruan kuptimin e përgjithshëm. Ai komunikon drejtimin e politikës. Me shumë gjasë do t'i kalonte shumë kontrolle joamtare. Megjithatë, ende përmban tri probleme të dallueshme të gjuhës amtare: modalitet jo gramatikor në `morajo moči`, renditje të sikletshme fjalësh në `po potrebi tudi izklopiti` dhe formulim politikash të papërshtatshëm për domenin në `morajo biti izrecne`. Versioni i përmirësuar nuk është thjesht më i bukur. Ai e shndërron tekstin nga një draft i kuptueshëm në gjuhë natyrore politikash.
- Kategoria: ruajtje semantike me humbje të rrjedhshmërisë; modalitet; formulim politikash i domenit; regjistër; përmirësim i lexueshmërisë
- A do ta zbulonte me gjasë QA e automatizuar?: Pjesërisht, në rastin më të mirë. Mjetet gramatikore mund të shënonin `morajo moči`, por QA e automatizuar me gjasë do të humbiste problemin e regjistrit të politikës dhe përmirësimin specifik të domenit nga `izrecne` në `izrecno omogočene`.
- Mësimet e nxjerra: Një përkthim mund ta ruajë kuptimin dhe prapëseprapë të jetë i papërshtatshëm për botim. Ky është një nga argumentet më të forta për ruajtjen e korrigjimeve nga folësit amtarë si provë e ripërdorshme, në vend që të trajtohen si redaktime kalimtare.

### Gjetja 5 - Botim me Gjuhë të Përziera

- Artikulli burimor: `docs/blog/sl/the-cost-of-english-only-software.md`
- Gjuha: sllovenisht
- Teksti origjinal në anglisht: `English-only defaults look cheap to builders, but they shift comprehension, participation, and maintenance costs onto everyone else.` Rendered English topic labels such as `digital-inclusion`, `education`, and `public-sector-software` also remained visible in publication surfaces.
- Teksti origjinal i lokalizuar: Faqja në sllovenisht përdorte titullin e lokalizuar `Cena programske opreme samo v angleščini`, por lexuesve ende u shfaqeshin tekst përmbledhës në anglisht, etiketa temash të renderuara në anglisht dhe seksione të trupit në anglisht.
- Teksti i përmirësuar i lokalizuar: Artikulli i botuar në sllovenisht tani përdor përmbledhjen e lokalizuar `Privzete nastavitve samo v angleščini so za razvijalce lahko videti cenejše, vendar strošek razumevanja, sodelovanja in vzdrževanja prenesejo na vse druge.` Ai përdor gjithashtu përmbajtje trupi të lokalizuar dhe etiketa temash të renderuara të lokalizuara, pa asnjë placeholder në anglisht ose rrjedhje të gjuhëve të përziera.
- Shpjegim: Ky është një shembull në nivel depoje dhe jo shembull i një fjalie të vetme, por është thelbësor. Faqja dukej e përkthyer në shikim të parë. Ekzistonin një shteg dhe një titull i lokalizuar. Ky sukses sipërfaqësor mund ta kishte kaluar lehtësisht një rishikim të shkujdesur. Megjithatë, një folës amtar do ta përjetonte faqen si dukshëm jo të plotë, sepse anglishtja mbetej e pranishme në sipërfaqet e botimit që i shfaqen lexuesit. Pikërisht këtu shpesh dalin së pari në pah edhe zhargoni profesional i palokalizuar dhe terminologjia angleze e panevojshme: etiketat e taksonomisë, përmbledhjet, metadatat dhe teksti ndihmës rrjedhin përpara se të rregullohen paragrafët kryesorë.
- Kategoria: botim me gjuhë të përziera; plotësi e lokalizimit; terminologji angleze e panevojshme; zhargon profesional i palokalizuar
- A do ta zbulonte me gjasë QA e automatizuar?: Po, nëse janë aktivizuar validatorët e plotësisë për markdown-in burimor dhe HTML-në e gjeneruar. Jo, nëse rrjedha e punës kontrollon vetëm ekzistencën e skedarëve dhe jo rezultatin që i shfaqet lexuesit.
- Mësimet e nxjerra: Mbulimi pa plotësi është defekt prodhimi. Botimi me gjuhë të përziera duhet trajtuar si dështim bllokues i cilësisë, jo si çështje kozmetike.

### Gjetja 6 - Përshtatja me Audiencën Arsimore dhe Institucionale

- Artikulli burimor: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Gjuha: sllovenisht
- Teksti origjinal në anglisht: `Students should care because learning to document intent is part of learning to build reliable systems, not an administrative extra.`
- Teksti origjinal i lokalizuar: `Študenti bi morali to zanimati, ker je sposobnost dokumentiranja namena del učenja gradnje zanesljivih sistemov, ne pa administrativni dodatek.`
- Teksti i përmirësuar i lokalizuar: `Študentom bi to moralo biti pomembno, ker je dokumentiranje namena del učenja gradnje zanesljivih sistemov in ne le administrativni dodatek.`
- Shpjegim: Fjalia origjinale e lokalizuar ka kuptim dhe është e kuptueshme, por sërish bart zakone retorike të anglishtes dhe një stil emëror disi të rëndë. Versioni i përmirësuar lexohet më natyrshëm për një audiencë arsimore, zvogëlon abstraksionin e panevojshëm dhe përputhet më mirë me prozën shpjeguese sllovene.
- Kategoria: mospërputhje me stilin arsimor; mospërputhje me pritshmëritë e audiencës; përmirësim i tonit
- A do ta zbulonte me gjasë QA e automatizuar?: Jo.
- Mësimet e nxjerra: Edukimi i lexuesit është pjesë e cilësisë së lokalizimit. Një fjali mund të jetë e saktë dhe prapëseprapë të humbasë zërin natyror pedagogjik që pret audienca e synuar.

### Gjetja 7 - Optimizimi i Tekstit Burimor për Lokalizim

- Artikulli burimor: `docs/blog/en/why-every-language-matters.md` dhe variantet e lokalizuara në të njëjtën familje artikujsh
- Gjuha: burim anglisht me ndikim ndërgjuhësor në lokalizim; shkaktari i rishikimit u vërejt në sllovenisht
- Teksti origjinal në anglisht: `The hidden exclusion of English-only systems`
- Teksti origjinal i lokalizuar: Sllovenisht: `Skrita izključitev angleško-izključnih sistemov`
- Teksti i përmirësuar i lokalizuar: Anglisht: `Why English-only systems exclude people` Sllovenisht: `Zakaj sistemi, ki so na voljo samo v angleščini, izključujejo ljudi`
- Shpjegim: Titulli origjinal në anglisht është teknikisht i saktë, por ngjesh tepër shumë në një model emëror specifik të anglishtes. Ai mbështetet te emri abstrakt `exclusion` dhe te përcaktori i ngjeshur `English-only systems`. Ky kombinim është efikas në anglisht, por i sikletshëm në shumë gjuhë të synuara. Në sllovenisht ai prodhoi një frazë gramatikisht të mundshme, por jo natyrore, `angleško-izključnih sistemov`, e cila kërkon përpjekje shtesë deshifrimi nga lexuesi. Ky nuk është kryesisht dështim i gjuhës së synuar. Është problem projektimi i tekstit burimor. Rishkrimi i titullit në anglisht në një fjali më të qartë përmirëson lexueshmërinë në anglisht dhe e bën përkthimin natyror më të lehtë në të gjithë familjen e artikujve.
- Kategoria: optimizim i tekstit burimor për lokalizim; parandalim i tingëllimit përkthimor; shkrim miqësor ndaj lokalizimit në burim
- A do ta zbulonte me gjasë QA e automatizuar?: Jo. QA strukturore, kontrolli drejtshkrimor, kontrollet e barazisë semantike dhe kontrollet e plotësisë me gjasë do të kalonin. Problemi shfaqet kur folësit amtarë vlerësojnë natyrshmërinë dhe përkthyeshmërinë ndërgjuhësore.
- Mësimet e nxjerra: Disa probleme lokalizimi duhen zgjidhur në nivel burimi, jo veçmas në çdo lokalizim. Nëse shumë gjuhë hasin vështirësi me të njëjtin ndërtim të ngjeshur në anglisht, formulimi në burim duhet rishikuar për sa miqësor është ndaj lokalizimit.

### Gjetja 8 - Mik i Rremë në Terminologjinë Teknike

- Artikulli burimor: `docs/wiki/let-books-localization-case-study.md` dhe `docs/wiki/sl/let-books-localization-case-study.md`
- Gjuha: gjetje rishikimi në sllovenisht e shkaktuar nga terminologjia teknike në anglisht
- Teksti origjinal në anglisht: `Benchmark fixture direction` dhe `Structured review examples should also be stored as reusable benchmark fixtures so future LLM evaluation can measure:`
- Teksti origjinal i lokalizuar: `Primerjalna smer napeljave` dhe `Strukturirane primere pregledov je treba shraniti tudi kot primerjalne napeljave za večkratno uporabo, tako da lahko prihodnje vrednotenje LLM meri:`
- Teksti i përmirësuar i lokalizuar: `Referenčni primeri za primerjalno vrednotenje` dhe `Strukturirane primere pregledov je treba shraniti tudi kot ponovno uporabne referenčne primere za primerjalno vrednotenje, da lahko prihodnje vrednotenje LLM meri:`
- Shpjegim: Problemi nuk është gramatika. Është interpretimi i domenit. Në kontekste testimi, benchmarking-u dhe vlerësimi, `fixture` zakonisht do të thotë shembull reference i ripërdorshëm, rast testimi ose artefakt vlerësimi. Përkthimi në sllovenisht e interpretoi termin sipas një kuptimi të infrastrukturës fizike që lidhet me instalime ose kabllime. Kjo prodhoi tekst semantikisht mashtrues, edhe pse përkthyesi mund të ketë zgjedhur një kuptim të vlefshëm në fjalor. Ky është një mik i rremë klasik në terminologjinë teknike: fitoi domeni i gabuar.
- Kategoria: mik i rremë në terminologjinë teknike; terminologji domeni; fjalor testimi dhe vlerësimi
- A do ta zbulonte me gjasë QA e automatizuar?: Jo. Drejtshkrimi, gramatika dhe kontrollet e gjera semantike mund të kalojnë të gjitha, sepse fjalia mbetet sipërfaqësisht koherente. Dështimi shfaqet kur rishikimi njerëzor me njohuri domeni kontrollon nëse termi teknik i përket kontekstit të duhur profesional.
- Mësimet e nxjerra: Terminologjia teknike duhet përkthyer sipas kuptimit në domen, jo sipas kuptimit standard të fjalorit. Shembuj referencë të ripërdorshëm për benchmark, raste testimi benchmark ose shembuj reference për vlerësim janë interpretime të përshtatshme këtu; kuptimet që lidhen me infrastrukturën nuk janë.

### Rregulli Operativ për Korpusin

Sa herë që zbulohet një kategori e re:

1. rregullo përmbajtjen
2. shto një hyrje në korpus
3. klasifiko çështjen
4. shto ose rafino udhëzimin
5. shto mbulim me validator nëse është praktik
6. shto mbulim regresioni nëse është praktik
7. referenco gjetjen e re nga dokumentet e rrjedhës së punës dhe të QA-së

### Rregull i Fortë për Gabimet e Raportuara

Gabimet konkrete të raportuara nga folësit amtarë nuk janë sugjerime opsionale.

Çdo defekt i raportuar i lokalizimit duhet përfundimisht të jetë:

- i rregulluar
- i kthyer në udhëzim
- i kthyer në validator kur është praktike
- i dokumentuar si i pazgjidhur qëllimisht me arsyetim
- ose i ndjekur shprehimisht në korpusin e gjetjeve derisa të ndodhë njëra nga sa më sipër

Depoja nuk duhet të harrojë kurrë në heshtje defektet e raportuara të lokalizimit.

Folësit amtarë janë më të vlefshëm këtu jo sepse rregullojnë gabime të dukshme.

Ata janë më të vlefshëm sepse e shndërrojnë përmbajtjen e saktë në komunikim natyror, kulturorisht të përshtatshëm dhe me cilësi botimi.

## Pjesa 7 - Mësimi i Vazhdueshëm

Çdo çështje lokalizimi duhet ta përmirësojë sistemin.

Parimi i preferuar:

> Çdo defekt lokalizimi duhet ta përmirësojë sistemin.
>
> Një çështje e zbuluar nuk duhet vetëm të rregullojë tekstin aktual. Ajo duhet gjithashtu të ulë gjasat që defekte të ngjashme të shfaqen në përkthimet e ardhshme.

Qarku i preferuar është:

```text
Gjej çështjen
↓
Rregullo çështjen
↓
Dokumento çështjen
↓
Klasifiko çështjen
↓
Përmirëso rrjedhën e punës
↓
Shto validim aty ku është praktik
↓
Parandalo përsëritjen
```

Rezultati ideal është që një problem lokalizimi të rregullohet:

- një herë në përmbajtje
- një herë në sistem

## Pjesa 8 - Evolucioni i Validatorëve

Për çdo çështje të rëndësishme, pyet:

> A mund të zbulohet kjo automatikisht?

### Plotësisht e Automatizueshme

Shembuj:

- variant artikulli që mungon
- përmbledhje e papërkthyer
- metadata të papërkthyera
- faqe me gjuhë të përziera
- ndërrues gjuhe i prishur
- navigim i gjeneruar që mungon

### Pjesërisht e Automatizueshme

Shembuj:

- shkurtim i dyshimtë
- devijim semantik i mundshëm
- shpjegim për audiencën që mungon
- barazi e munguar e përmbajtjes së lidhur
- mospërputhje e dyshimtë në diagram

### Rishikim Njerëzor

Shembuj:

- natyrshmëri retorike
- rrjedhshmëri
- përshtatshmëri kulturore
- efektivitet arsimor
- regjistër i gjuhës amtare
- përshtatshmëri me stilin e sektorit publik

Pyetja e duhur nuk është nëse njerëzit apo validatorët janë më të mirë.

Pyetja e duhur është se cilës shtresë feedback-u i përket secila klasë defekti.

## Kur Cilësia Bëhet e Matshme

Në fillim, besimi vjen kryesisht nga kontrolli manual.

Zhvilluesit lexojnë faqet.

Rishikuesit krahasojnë përkthimet.

Kontribuesit kërkojnë probleme një nga një.

Sa më shumë piqet depoja, aq më shumë besimi fillon të vijë nga mekanizmat e akumuluar të feedback-ut:

- dokumentacioni
- udhëzimet e rishikimit
- validatorët
- kontrollet CI
- kontrollet e aksesueshmërisë
- kontrollet e barazisë semantike
- kontrollet e plotësisë së lokalizimit
- gjetjet nga rishikimi i folësve amtarë
- testet e regresionit

Në atë pikë, pyetja kryesore ndryshon.

Në vend që të pyetet:

> A e kontrolluam manualisht gjithçka?

projekti fillon të pyesë:

> Cilat sisteme feedback-u do t'i lejonin një problemi të mbijetonte pa u vënë re?

Ky është kalimi nga verifikimi i përmbajtjes te verifikimi i sistemit.

Një sistem i pjekur lokalizimi nuk është ai që nuk përmban kurrë defekte.

Një sistem i pjekur lokalizimi është ai ku klasat e njohura të defekteve janë:

- të dokumentuara
- të zbulueshme
- të riprodhueshme
- të ndjekura
- të monitoruara vazhdimisht
- të vështira për t'u rifutur pa dashje

## Pjesa 9 - Borxhi i Lokalizimit

Ndiqe `Localization Debt` si backlog-un e mbetur të përmbajtjes.

Borxhi tipik përfshin:

- përmbledhje të papërkthyera
- metadata të papërkthyera
- trupa të papërkthyer
- placeholders
- diagrame të papërkthyera
- etiketa të papërkthyera
- lidhje të vjetruara të varianteve gjuhësore

Borxhi mat punën e mbetur të remediimit.

Borxhi nuk të tregon nëse sistemi po mëson.

## Pjesa 10 - Klasat e Hapura të Defekteve

Ndiq `Open Defect Classes` si numrin e kategorive të problemeve që ende nuk parandalohen plotësisht nga politikat, rrjedhat e punës, validatorët dhe CI.

Shembuj:

- përmbledhje të papërkthyera
- trupa të papërkthyer
- botim me placeholder
- metadata të papërkthyera
- botim me gjuhë të përziera
- klasa të ardhshme të zbuluara

Borxhi mat punën që mbetet për t'u bërë.

Klasat e defekteve matin pjekurinë e sistemit.

## Pjesa 11 - Rregullo Klasat Përpara Skedarëve

Mos optimizo kryesisht rreth:

```text
47 skedarë të mbetur
```

Optimizimi duhet të bëhet rreth:

```text
3 klasa defektesh të mbetura
```

Procesi i preferuar:

1. identifiko klasën
2. përcakto shkakun rrënjësor
3. rregullo burimin në nivelin më të lartë
4. përditëso validatorin
5. përditëso rrjedhën e punës
6. pastaj rregullo përmbajtjen e mbetur

I njëjti gabim i përsëritur në shumë skedarë zakonisht është problem sistemi përpara se të jetë problem skedari.

## Pjesa 12 - Mbyllja e Klasave të Defekteve

Kur një klasë defektesh arrin në zero raste:

1. shto mbulim me validator nëse mungon
2. bëje validimin bllokues kur është praktik
3. shto kontrolle regresioni
4. përditëso udhëzimin për kontribuesit
5. përditëso udhëzimin për agjentët AI
6. shënoje klasën si të mbyllur

Objektivi nuk është:

> Sot nuk ka raste.

Objektivi është:

> Çështja nuk mund të rikthehet nesër në heshtje.

## Pjesa 13 - Remediim me Burimin në Fillim

Rendi standard i hetimit:

1. markdown-i burimor
2. skedarët burimorë të lokalizimit
3. metadata
4. regjistrat
5. gjeneratorët
6. artefaktet e gjeneruara
7. HTML-ja e gjeneruar

Rregullo burimin në nivelin më të lartë të mundshëm.

Shmang rregullimin e HTML-së së gjeneruar kur përmbajtja burimore është e gabuar.

Kjo parandalon punën e përsëritur të riparimit në rrjedhën poshtë dhe e mban depon të shpjegueshme.

## Pjesa 14 - Rrjedha e Punës së Agjentit AI

Rrjedha standarde e zgjidhjes së problemeve është:

```text
Gjej çështjen
↓
Gjej burimin e së vërtetës
↓
Rregullo burimin
↓
Rigjenero
↓
Valido
↓
Përsërit
```

Kur e njëjta çështje shfaqet vazhdimisht:

```text
Krijo klasë defekti
↓
Krijo validator
↓
Krijo udhëzim
↓
Vazhdo remediimin
```

Shfaqja e katërt e të njëjtit problem zakonisht duhet të shkaktojë përmirësim sistemi, jo një rregullim tjetër manual të izoluar.

## Pjesa 15 - Devijimi i Lokalizimit

Devijimi i lokalizimit do të thotë që përmbajtja e lokalizuar ekziston, por nuk e pasqyron më burimin.

Rastet tipike të devijimit përfshijnë:

- seksione të reja në burim
- shembuj të rinj
- paralajmërime të reja
- përfundime të ndryshuara
- diagrame të ndryshuara
- pamje të përditësuara të ekranit
- udhëzim të ndryshuar për kontribuesit

Përditësia është mënyra si devijimi bëhet i matshëm.

Menaxhimi i devijimit duhet të përdorë:

- ndërgjegjësim për rishikimet e burimit
- krahasim semantik aty ku është praktik
- fillimisht CI me paralajmërime
- CI bllokuese kur besueshmëria është e lartë
- vëmendje të qartë të rishikuesve gjatë përditësimeve të mëdha

## Pjesa 16 - Modeli i Pjekurisë së Depos

Depoja duhet të kalojë nëpër këto faza:

1. Përkthe përmbajtjen.
2. Zbulo problemet.
3. Krijo validatorë.
4. Automatizo validimin.
5. Parandalo përsëritjen.
6. Menaxho devijimin e lokalizimit.
7. Mëso kontribuesit e ardhshëm dhe sistemet AI.

Kështu akumulohet dija institucionale.

Puna e mëhershme pushon së qeni e harxhueshme, sepse sistemet e mëvonshme e trashëgojnë atë.

## Pjesa 17 - Harta Rrugore e Përmbajtjes

Programi duhet të ruajë mbulim shumëgjuhësh koherent nëpër:

- artikuj blogu që shpjegojnë pse lokalizimi ka rëndësi
- faqe wiki që përcaktojnë politikat dhe rregullat referuese
- udhëzues mësimorë që mësojnë rrjedhat e punës
- udhëzues stili që mësojnë shkrimin, terminologjinë dhe praktikën e rishikimit
- dokumente auditimi dhe qeverisjeje që ndjekin pjekurinë dhe defektet
- raste studimore që ruajnë prova praktike

Harta rrugore duhet t'u japë përparësi:

1. plotësisë kanonike në anglisht
2. mbulimit të plotë gjuhësor në të gjitha gjuhët e mbështetura
3. plotësisë së përmbajtjes që i shfaqet lexuesit në çdo lokalizim
4. mbulimit me validatorë me vlerë të lartë
5. rritjes së korpusit të folësve amtarë
6. monitorimit të devijimit për përmbajtjen kryesore

Të gjitha dokumentet kryesore duhet të lidhen mes tyre në mënyrë agresive, në mënyrë që lexuesit të kalojnë nga parimi te rrjedha e punës, te politika dhe te prova.

## Pjesa 18 - Kriteret e Suksesit

Një lexues që kalon mes gjuhëve të mbështetura duhet të ndeshë:

- të njëjtat koncepte themelore
- të njëjtët shembuj
- të njëjtat paralajmërime
- të njëjtën vlerë arsimore
- të njëjtin udhëzim praktik

Në të njëjtën kohë, secila gjuhë duhet të duket sikur është shkruar natyrshëm për audiencën e saj.

Qëllimi më i lartë i Lokalizimit në Shkallë është:

**mbulim i plotë gjuhësor, plotësi e lokalizimit, barazi semantike, lexueshmëri në gjuhën amtare, përshtatshmëri kulturore, efektivitet arsimor, përmirësim i vazhdueshëm, parandalim i defekteve, menaxhim i devijimit dhe botim shumëgjuhësh i qëndrueshëm përmes qarqeve të forta të feedback-ut.**

## Metrikat Operative

Ndiqi vazhdimisht këto numra:

```text
Localization Debt = X
Open Defect Classes = Y
```

Objektivi afatgjatë është:

```text
Localization Debt = 0
Open Defect Classes = 0
```

## Dokumente të Ndërlidhura

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
