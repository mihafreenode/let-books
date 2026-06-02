---
title: "Markdown në Zhvillimin e produktit"
summary: >-
  Markdown është një format praktik për ruajtjen e qëllimit të produktit, dokumentacionit, udhëzuesve dhe provave në një formë që është e rishikueshme, e lëvizshme, e ndryshueshme dhe e lehtë për t'u lidhur me flukset e punës së vërtetimit.
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Markdown në Zhvillimin e produktit

## Përmbledhje

Markdown është një format praktik për ruajtjen e qëllimit të produktit, dokumentacionit, udhëzuesve dhe provave në një formë që është e rishikueshme, e lëvizshme, e ndryshueshme dhe e lehtë për t'u lidhur me flukset e punës së vlefshmërisë.

## Pse Markdown ka rëndësi

Markdown trajtohet shpesh si një lehtësi për të shkruar. Në punën e drejtuar nga specifikat, është më e dobishme se kaq.

Ai u jep ekipeve një mënyrë të lehtë për të mbajtur njohuritë e produktit pranë depove pa e fshehur atë brenda mjeteve të pronarit ose dokumenteve të vështira për t'u rishikuar.

Kjo ka rëndësi për:

- specifikimet
- udhëzimet për zbatimin
- Dokumentacioni i gjendjes aktuale
- mësime dhe faqe wiki
- hartat burimore dhe shënimet e provave

## Në çfarë Markdown është i mirë

Markdown funksionon mirë kur përmbajtja duhet të jetë:

- i lexueshëm në formë të papërpunuar
- i kontrolluar nga versioni
- e lehtë për t'u rishikuar në dallime
- i lidhur nëpër dokumente
- i lëvizshëm në të gjithë mjediset
- i konvertueshëm në formate të tjera botimi më vonë

Kjo e bën atë veçanërisht të dobishëm për sistemet e produkteve dhe dokumentacionit që kanë nevojë për gjurmueshmëri.

## Ajo që Markdown nuk e bën vetvetiu

Markdown është i dobishëm, por nuk e imponon korrektësinë më vete.

Në vetvete nuk mund të garantojë:

- që përmbajtja është aktuale
- që pretendimet janë me burim të mirë
- që zbatimi përputhet me dokumentacionin
- kjo terminologji mbetet e qëndrueshme
- se rregullat e vërtetimit ose CI janë në të vërtetë duke u ekzekutuar

Kjo është arsyeja pse Markdown duhet të jetë pjesë e një sistemi më të gjerë, të mos ngatërrohet me të gjithë sistemin.

## Markdown në një rrjedhë pune të drejtuar nga specifikat

Në një rrjedhë pune të drejtuar nga specifikat, Markdown është më e vlefshme kur ndodhet brenda një zinxhiri autoriteti.

Për shembull:

1. specifikimet përcaktojnë rregullat e produktit
2. udhëzimi i zbatimit përcakton rregullat taktike
3. Dokumentet e gjendjes aktuale shpjegojnë atë që ekziston tani
4. Hartat burimore gjurmojnë pretendime të konsiderueshme publike
5. validimi dhe CI përforcojnë pritshmëritë e qëndrueshme

Markdown është mediumi që i ndihmon ato shtresa të qëndrojnë të dukshme dhe të rishikueshme.

## Pse kjo ka rëndësi në punën e asistuar nga AI

Sistemet e AI përfitojnë nga një kontekst i qartë dhe i aksesueshëm.

Markdown ndihmon sepse është:

- e lehtë për tu inspektuar
- e lehtë për t'u cituar
- e lehtë për tu dalluar
- e lehtë për t'u mbajtur pranë depove të zbatimit

Kjo e bën atë një format të fortë për kujtesën e produktit.

Por AI e bën edhe një kufizim më të dukshëm: nëse Markdown është i paqartë, i ndenjur ose kontradiktor, asistenti mund të gjenerojë largim të shpejtë prej tij. Pra, vlera nuk vjen vetëm nga formati, por nga ruajtja e përmbajtjes.

## Markdown si udhëzim agjenti

Disa dokumente Markdown mund të duken si udhëzime me fytyrë njeriu, por ato gjithashtu funksionojnë si udhëzime operacionale për agjentët e AI.

Kjo është veçanërisht e dobishme kur dokumenti bën më shumë sesa shpjegon një temë dhe në vend të kësaj kap:

- Rendi i preferuar i rrjedhës së punës
- zgjedhjet e mjeteve
- kufizimet mjedisore
- shtigjet e përshkallëzimit
- anti-modele për të shmangur

Në ato raste, Markdown bëhet më shumë se shpjegim. Ai bëhet një ndërfaqe e qëndrueshme midis njohurive të depove dhe sjelljes së agjentit.

## Let Books shembuj për udhëzimin e agjentit

### Rrjedha e punës e korrigjimit të Android

`docs/android-debugging.md` është një shembull i fortë.

Është i lexueshëm si një udhëzues njerëzor, por gjithashtu i jep një agjenti drejtim konkret operacional si p.sh.

- preferoni pajisjet fizike Android mbi emulimin e desktopit për funksionimin e kamerës dhe barkodit
- preferoni Playwright CDP bashkëngjitni mbi nisjet e përsëritura të shfletuesit
- dalloni injektimin e kohës së ekzekutimit CDP nga flukset e punës së patch-it me burim real
- Krijoni infrastrukturën e rimbushjes së nxehtë fillimisht kur përdoruesi kërkon testim të drejtpërdrejtë të bazuar në telefon

Ky lloj Markdown nuk përshkruan vetëm një domen. Ai drejton në mënyrë aktive rrjedhën e punës dhe përzgjedhjen e mjeteve.

### Përgatitja e mjeteve dhe mjedisit

`docs/style-guide/publishing/ubuntu-tooling.md` është një shembull tjetër i mirë.

Ai lexon si dokumentacion i konfigurimit të kontribuesve, por gjithashtu i tregon një agjenti se cilat mjete pritet të ekzistojnë ose duhet të preferohen për klasat e punës si:

- Playwright për verifikimin e ndërfaqes së përdoruesit dhe pamjet e ekranit
- Hunspell për kontrollin e drejtshkrimit
- ImageMagick dhe OCR vegla pune për flukset e punës vizuale dhe të aseteve simuluese
- Vegla e lidhur me ADB për korrigjimin e Android

Ky lloj Markdown ndihmon një agjent të arsyetojë për zinxhirin e pritshëm të mjeteve në vend që të hamendësojë nga parazgjedhjet e përgjithshme.

## Implikime praktike

Kur shkruani Markdown për një depo që mund të përdoret nga agjentët e AI, ndihmon të shkruani me dy lexues në mendje:

- kontribuesi njerëzor që ka nevojë për shpjegim
- agjenti që ka nevojë për kufizime eksplicite të rrjedhës së punës dhe mjeteve

Dokumentet më të mira i bëjnë të dyja.

Ata mbeten mësime ose udhëzues të lexueshëm për njerëzit, ndërkohë që janë mjaft specifikë për të drejtuar sjelljen e agjentit në mënyra të përsëritshme.

## Let Books kontekst

Depoja Let Books tashmë përdor Markdown për disa shtresa të memories së produktit, duke përfshirë:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- README dhe udhëzues të zonës së dokumenteve
- hartat burimore nën `docs/sources/`

Ky është një shembull i mirë i Markdown që përdoret jo vetëm për prozë, por për koordinimin në nivel depoje, strukturën e shkrimit publik dhe gjurmimin e provave.

## Rregull praktik

Një rregull i dobishëm është i thjeshtë:

Përdorni Markdown për ta bërë qëllimin e produktit të dukshëm, të rishikueshëm dhe të lidhur. Mos supozoni se vetëm Markdown e mban atë qëllim të vërtetë.

E vërteta ende varet nga:

- autoritet i qartë
- mirëmbajtje aktive
- rishikoni disiplinën
- vërtetimi aty ku është praktik

## Faqe të ngjashme

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../../blog/sq/spec-driven-development-for-ai-projects.md`