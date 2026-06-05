---
title: "Lokalizimi CI dhe CD"
summary: >-
  CI/CD i lokalizimit vërteton vazhdimisht përmbajtjen shumëgjuhëshe që burimet që mungojnë, lidhjet e prishura dhe regresionet e aksesueshmërisë të kapen herët.
topics:
  - continuous-localization
  - qa
  - ci-cd
---
# Lokalizimi CI dhe CD

## Përmbledhje

CI/CD i lokalizimit vërteton vazhdimisht përmbajtjen shumëgjuhëshe që burimet që mungojnë, lidhjet e prishura dhe regresionet e aksesueshmërisë të kapen herët.

## Kontrolle të dëshiruara

- qëndrueshmëria e inventarit të lokaleve
- gjenerim i freskët i sajtit para rishikimit të paritetit
- vërtetim i lidhjeve
- gjenerim i artikujve dhe faqeve
- kontroll drejtshkrimor aty ku është i disponueshëm
- paritet i placeholder-ëve
- teste të shpejta të aksesueshmërisë
- kontrolle të mbulimit për pamjet e ekranit dhe diagramet

## Rregulli i gjenerimit të freskët

Flukset e CI-së dhe të rishikimit të lokalizimit nuk duhet t'i mbështesin gjetjet e paritetit te artefakte të gjeneruara të vjetruara.

Rendi i kërkuar:

1. gjeneroni sajtin nga gjendja aktuale e depozitës
2. ekzekutoni validuesit mbi daljen e sapogjeneruar
3. inspektoni HTML-in e gjeneruar kur është e nevojshme
4. inspektoni daljen e renderuar kur është e nevojshme

Kjo ka rëndësi sepse Markdown-i burimor, HTML-i i gjeneruar, dalja e publikuar dhe sjellja e renderuar në shfletues mund të ndryshojnë përkohësisht gjatë zhvillimit.

## Prioriteti i rishikimit

Zbatoni së pari rishikimin më të fortë në gjuhën amtare dhe rishikimin e paritetit për:

- përmbajtje të krijuar rishtazi
- përmbajtje të zgjeruar së fundmi
- përmbajtje që po redaktohet aktualisht

Pastaj shtrijini të njëjtat standarde rishikimi në mënyrë progresive edhe te përmbajtja më e vjetër e lokalizuar.

## Përparimi i klasave të defekteve

CI-ja e lokalizimit duhet të ndjekë të dyja:

- `Localization Debt`
- `Open Defect Classes`

Borxhi mat punën e mbetur mbi përmbajtjen burimore.

Klasat e hapura të defekteve matin nëse sistemi ende mund të lejojë që një kategori problemi të rishfaqet.

Sapo një klasë defekti të arrijë zero shfaqje, validuesi i saj duhet, kur është praktike, të kalojë nga këshillues në bllokues.

Shembuj:

- publikim skice placeholder
- përmbledhje të papërkthyera
- metadata të papërkthyera
- trupa tekstesh të papërkthyer
- publikim me gjuhë të përziera

CI-ja nuk është vetëm portier. Ajo është mekanizmi që mban klasat e mbyllura të defekteve të mos rihapen në heshtje.

## Rendi i gjenerimit për navigimin e artikujve

Kontrata aktuale e navigimit publik të artikujve është:

- `post-article-nav`
- `related-content`
- `related-topic-nav`

Gjenerimi dhe validimi duhet të ndodhin në këtë rend:

1. gjeneroni HTML-në e artikujve
2. gjeneroni faqet indeks
3. ekzekutoni çdo paspërpunim të mbetur të navigimit vetëm nëse është ende i nevojshëm
4. validoni daljen e sapogjeneruar
5. rishikoni HTML-në e gjeneruar ose daljen e renderuar nëse fluksi i punës kërkon vlerësim njerëzor të paritetit

Nëse një validues ende pret bllokun e trashëguar `topic-nav`, përditësojeni validuesin sipas kontratës aktuale në vend që të arnoni HTML-në e gjeneruar.

## Faqe të ngjashme

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/sq/how-to-run-localization-qa-in-ci.md`
