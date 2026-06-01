# Programi i lokalizimit në shkallë

## Përmbledhje

Ky doracak e përkufizon lokalizimin në shkallë në Let Books si një model afatgjatë operativ për publikim shumëgjuhësh, rishikim, validim, mirëmbajtje dhe mësim të vazhdueshëm.

Teza e tij qendrore është e thjeshtë:

> Lokalizimi në shkallë nuk është kryesisht një problem përkthimi.
>
> Ai është një problem i projektimit të sistemeve të feedback-ut dhe i një sistemi shumëgjuhësh të dijes.

## Ideja qendrore

Qëllimi nuk është vetëm të përkthehen fjalët.

Qëllimi është të ndihmohen njerëzit të mësojnë, të marrin pjesë, të kontribuojnë, të japin mësim, të ruajnë dijen dhe të kenë qasje në informacion në gjuhën që kuptojnë më mirë, duke e mbajtur njëkohësisht sistemin shumëgjuhësh të qëndrueshëm me kalimin e kohës.

## Shtresat e programit

- `docs/blog/` shpjegon pse lokalizimi ka rëndësi në praktikë.
- `docs/wiki/` përcakton rregulla, modele dhe qeverisje afatgjata.
- `docs/learning/` e kthen temën në rrjedha pune operative.
- `docs/style-guide/` përcakton rregulla për kontribuesit, terminologjinë, rishikimin dhe publikimin.
- `docs/sources/` ruan gjurmueshmërinë e pretendimeve kryesore.
- `docs/localization-audit-report.md` ndjek borxhin, klasat e defekteve dhe statusin e mbylljes.

## Lokalizimi është sistem, jo projekt

Shumë përpjekje lokalizimi trajtohen si projekte të fundme:

```text
Përkthe
Publiko
Mbaro
```

Lokalizimi në shkallë e trajton lokalizimin si një sistem operativ:

```text
Krijo
Përkthe
Valido
Përmirëso
Mirëmbaj
Përditëso
Parandalo devijimin
Përsërit
```

Vështirësia nuk është vetëm të prodhohen përkthime një herë.

Vështirësia është të operohet një sistem shumëgjuhësh i dijes me kalimin e kohës pa humbur mbulimin, plotësinë, cilësinë ose freskinë.

## AI funksionon më mirë brenda qarqeve të feedback-ut

AI është i dobishëm në lokalizim, por dobia e tij varet nga cilësia e sistemit përreth të feedback-ut.

Shtresat më të rëndësishme të feedback-ut janë:

- kontrollet në CI
- validatorët strukturorë
- kontrolluesit drejtshkrimorë
- kontrollet terminologjike
- kontrollet e barazisë semantike
- kontrollet e aksesueshmërisë
- kontrollet e paraqitjes në shfletues
- validimi i lidhjeve
- rishikimi nga folës vendas

Feedback-u i shpejtë vlen më shumë se përpjekja për një provë të parë të përsosur.

## Rishikimi dykahësh

Anglishtja mbetet gjuha burimore kanonike për publikim dhe sinkronizim.

Megjithatë, njohuri të vlefshme mund të lindin në çdo gjuhë.

Prandaj lokalizimi nuk duhet trajtuar si proces njëkahësh:

```text
Anglisht
↓
Përkthime
```

Por si sistem dykahësh:

```text
Anglisht
↕
Përkthime
```

Burim kanonik nuk do të thotë mençuri kanonike.

Nëse një ndryshim në një version të lokalizuar zbulon paqartësi, problem terminologjik, mungesë konteksti ose formulim armiqësor ndaj përkthimit në burimin anglisht, duhet të përmirësohet edhe burimi kanonik dhe të rishikohen gjuhët e tjera.

Për çdo ndryshim domethënës pyet:

- a zbulon ky ndryshim një problem në gjuhën burimore
- a duhet të përfitojnë prej tij edhe gjuhët e tjera
- a duhet të ndryshojnë udhëzimet terminologjike
- a duhet të ndryshojnë udhëzimet e rishikimit
- a duhet të ndryshojnë validatorët

## Modeli i cilësisë së lokalizimit

Cilësia e lokalizimit duhet të ndiqet në katër dimensione:

### Mbulimi

A ekziston fare përmbajtja në atë gjuhë?

### Plotësia

A është lokalizuar e gjithë përmbajtja që sheh lexuesi?

### Cilësia

A është teksti natyral, i saktë dhe i përshtatshëm për publikun e synuar?

### Freskia

A e pasqyron ende versioni i lokalizuar burimin aktual?

## Rregulli i plotësisë së lokalizimit

Një faqe nuk është e plotë vetëm pse janë lokalizuar:

- URL-ja
- titulli
- navigimi
- korniza e faqes

Duhet të lokalizohet e gjithë përmbajtja që shihet nga lexuesi, përfshirë:

- përmbledhjet
- metadatat
- etiketat tematike
- titujt dhe nëntitujt
- trupin e artikullit
- legjendat dhe tekstin alternativ
- diagramet dhe tekstin brenda tyre
- përmbajtjen e lidhur

Mbulimi pa plotësi çon në publikim me gjuhë të përziera.

## Korpusi i gjetjeve nga folësit vendas

Korpusi i detajuar i gjetjeve nga folësit vendas mbetet një deliverable i klasit të parë në doracakun kanonik `../localization-at-scale-program.md`.

Qëllimi i tij është të dokumentojë raste kur përkthimi ishte:

- teknikisht i saktë
- besnik ndaj kuptimit
- i suksesshëm në kontrollet e automatizuara
- por një folës vendas gjithsesi mund ta përmirësonte

Shembuj të tillë janë thelbësorë për mësimin e sistemit, përmirësimin e udhëzimeve dhe zhvillimin e validatorëve.

## Mësimi i vazhdueshëm

Çdo problem lokalizimi duhet ta përmirësojë sistemin.

Qarku i rekomanduar është:

```text
Gjej problemin
↓
Ndreq problemin
↓
Dokumento problemin
↓
Klasifiko problemin
↓
Përmirëso rrjedhën e punës
↓
Shto validim aty ku është praktik
↓
Parandalo përsëritjen
```

Rezultati ideal është që problemi të rregullohet:

- një herë në përmbajtje
- një herë në sistem

## Borxhi, klasat e defekteve dhe devijimi

Ndiq të dy treguesit:

```text
Localization Debt = X
Open Defect Classes = Y
```

Borxhi mat punën e mbetur në përmbajtje.

Klasat e defekteve matin pjekurinë e sistemit.

Devijimi i lokalizimit do të thotë që përmbajtja e lokalizuar ekziston, por nuk pasqyron më burimin aktual.

## Rregulli: rregullo më parë klasën, pastaj skedarin

Mos optimizo kryesisht rreth numrit të skedarëve të mbetur.

Optimizoni rreth numrit të klasave të mbetura të defekteve.

Procesi i rekomanduar:

1. identifiko klasën e problemit
2. përcakto shkakun rrënjësor
3. rregullo burimin më të lartë të mundshëm
4. përditëso validatorin
5. përditëso rrjedhën e punës
6. pastaj rregullo shfaqjet e mbetura

## Pjekuria e repositorit

Repositori duhet të përparojë nëpër këto faza:

1. përkthe përmbajtjen
2. zbulo problemet
3. krijo validatorë
4. automatizo validimin
5. parandalo rikthimin
6. menaxho devijimin e lokalizimit
7. mëso kontribuesit dhe sistemet e ardhshme AI

## Qëllimi operativ

Qëllimi më i lartë i lokalizimit në shkallë është:

**mbulim i plotë gjuhësor, plotësi e lokalizimit, barazi semantike, lexueshmëri në gjuhë natyrore, përshtatshmëri kulturore, efektivitet arsimor, përmirësim i vazhdueshëm, parandalim i defekteve, menaxhim i devijimit dhe publikim shumëgjuhësh i qëndrueshëm me qarqe të forta feedback-u.**

## Dokumente të lidhura

- `../localization-at-scale-program.md`
- `../localization-audit-report.md`
- `wiki/localization-at-scale.md`
- `wiki/translation-quality-assurance.md`
- `wiki/localization-ci-cd.md`
- `style-guide/localization/README.md`
