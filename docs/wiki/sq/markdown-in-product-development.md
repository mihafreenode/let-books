---
title: "Markdown Në Zhvillimin E Produktit"
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Markdown Në Zhvillimin E Produktit

## Përmbledhje

Markdown është një format praktik për ruajtjen e qëllimit të produktit, dokumentacionit, udhëzuesve dhe provave në një formë që rishikohet, transportohet, krahasohet me diff dhe lidhet lehtë me rrjedhat e validimit.

## Pse Markdown ka rëndësi

Markdown shpesh trajtohet si lehtësi për shkrim. Në punën e udhëhequr nga specifikimi, ai është më i dobishëm se kaq.

Ai u jep ekipeve një mënyrë të lehtë për ta mbajtur dijen e produktit pranë depos pa e fshehur brenda mjeteve pronësore ose dokumenteve të vështira për t'u rishikuar.

Kjo ka rëndësi për:

- specifikimet
- udhëzimet e implementimit
- dokumentimin e gjendjes aktuale
- tutorialet dhe faqet wiki
- hartat e burimeve dhe shënimet e provave

## Për çfarë është i mirë Markdown

Markdown funksionon mirë kur përmbajtja duhet të jetë:

- e lexueshme në formë të papërpunuar
- nën kontroll versionesh
- e lehtë për rishikim në diff
- e lidhshme ndërmjet dokumenteve
- e transportueshme ndërmjet mjediseve
- e konvertueshme më vonë në formate të tjera botimi

Kjo e bën veçanërisht të dobishëm për sisteme produkti dhe dokumentacioni që kanë nevojë për gjurmueshmëri.

## Çfarë Markdown nuk bën vetë

Markdown është i dobishëm, por nuk e garanton korrektësinë vetvetiu.

Ai nuk mund të garantojë vetëm:

- që përmbajtja është aktuale
- që pretendimet janë të mbështetura mirë
- që implementimi përputhet me dokumentacionin
- që terminologjia mbetet e qëndrueshme
- që rregullat e validimit ose CI-së po ekzekutohen realisht

Prandaj Markdown duhet të jetë pjesë e një sistemi më të gjerë, jo të ngatërrohet me të gjithë sistemin.

## Markdown në një rrjedhë pune të udhëhequr nga specifikimi

Në një rrjedhë pune të tillë, Markdown ka më shumë vlerë kur qëndron brenda një zinxhiri autoriteti.

Për shembull:

1. specifikimet përcaktojnë rregullat e produktit
2. udhëzimet e implementimit përcaktojnë rregullat taktike
3. dokumentet e gjendjes aktuale shpjegojnë çfarë ekziston tani
4. hartat e burimeve gjurmojnë pretendime publike thelbësore
5. validimi dhe CI përforcojnë pritjet e qëndrueshme

Markdown është mediumi që i ndihmon këto shtresa të mbeten të dukshme dhe të rishikueshme.

## Konteksti Let Books

Depoja Let Books tashmë përdor Markdown për disa shtresa të kujtesës së produktit, duke përfshirë:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- README-t dhe udhëzuesit në zonën `docs`
- hartat e burimeve nën `docs/sources/`

Ky është shembull i mirë i përdorimit të Markdown jo vetëm për prozë, por edhe për koordinim në nivel depoje, strukturë të shkrimit publik dhe gjurmim provash.

## Rregull praktik

Një rregull i dobishëm është i thjeshtë:

Përdorni Markdown për ta bërë qëllimin e produktit të dukshëm, të rishikueshëm dhe të lidhshëm. Mos supozoni se vetëm Markdown e mban atë qëllim të vërtetë.

## Faqe Të Lidhura

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../blog/en/spec-driven-development-for-ai-projects.md`
