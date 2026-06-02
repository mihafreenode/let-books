---
title: "Let Books Studim rasti i lokalizimit"
summary: >-
  Let Books është një rast studimor i gjallë në ndërtimin e një platforme njohurish shumëgjuhëshe dhe një vizion produkti përpara se të ekzistojë një aplikacion i plotë mbështetës.
topics:
  - let-books
  - localization
  - public-interest-technology
---
# Let Books Studim rasti i lokalizimit

## Përmbledhje

Let Books është një rast studimor i gjallë në ndërtimin e një platforme njohurish shumëgjuhëshe dhe vizionit të produktit përpara se të ekzistojë një aplikacion i plotë mbështetës.

Modeli qendror i programit tani jeton në `../localization-at-scale-program.md`. Kjo faqe fokusohet në dëshmi specifike të depove që mbështesin atë manual.

## Pse është e dobishme

Ai tregon se si një projekt mund të:

- të përcaktojë më herët shtrirjen e vendndodhjes
- mbani aksesueshmërinë të lidhur me lokalizimin
- përdorni shkrimin e parë në anglisht pa u shembur në botim vetëm në anglisht
- Dokumentoni qeverisjen përpara se të arrijë shkalla

## Shembull i rishikimit të AI-së sllovene

Depoja përfshin një shembull konkret të rishikimit slloven ku drafti i AI ruante kuptimin e gjerë, por kërkonte ende korrigjim të gjuhës amtare për modalitetin, rrjedhshmërinë dhe formulimin e regjistrit të politikave.

Regjistrimi i detajuar tani gjendet në seksionin Gjetjet e rishikimit të folësit vendas të `../localization-at-scale-program.md` dhe në `../../style-guide/localization/ai-translation-review-records.md`.

Mësimet kryesore:

- Gabimet gramatikore mund të mbijetojnë edhe kur fjalia duket e kuptueshme
- modaliteti është veçanërisht i prekshëm ndaj përkthimit fjalë për fjalë
- Gjuha e politikave dhe specifikave të produktit shpesh ka nevojë për regjistër specifik për domenin sesa për ekuivalencën e nivelit të fjalorit
- Kontrollet e automatizuara rrallë kapin më vete çështje delikate të rrjedhshmërisë dhe modalitetit

## Shembull botimi në gjuhë të përzier

Artikulli burim: `docs/blog/sq/the-cost-of-english-only-software.md`

Kjo familje artikujsh ofroi një shembull konkret të një titulli të lokalizuar dhe një guaskë të pjesshme të lokalizuar që bashkëjetojnë me sipërfaqet e botimit në anglisht me pamje nga lexuesi.

Interpretimi i detajuar i nivelit të programit tani gjendet në seksionin Gjetjet e Rishikimit të Gjuha amtare të `../localization-at-scale-program.md` dhe në `../localization-audit-report.md`.

Mësime specifike për depo:

- mbulimi nuk është i njëjtë me plotësinë
- Meta të dhënat burimore kanë rëndësi sepse përmbledhjet mund të rrjedhin në sipërfaqet e botimit
- Lokalizimi i taksonomisë ka rëndësi sepse etiketat e temave në anglisht janë defekte të dukshme që përballen me lexuesin
- HTML i krijuar duhet të vërtetohet, jo t'i besohet verbërisht

## Shembuj standard të ripërdorshëm

Shembujt e rishikimit të strukturuar duhet të ruhen gjithashtu si shembuj standard të ripërdorshëm, në mënyrë që vlerësimi i ardhshëm LLM të mund të masë:

- besueshmëria gramatikore
- trajtimi i modalitetit
- saktësi terminologjike
- saktësia e regjistrit të politikave
- cilësia e kapjes së arsyetimit të recensuesit

## Faqe të ngjashme

- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `let-books-localization-architecture.md`
- `let-books-localization-lessons-learned.md`
- `../../blog/sq/why-every-language-matters.md`