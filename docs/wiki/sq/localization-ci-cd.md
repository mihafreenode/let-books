---
title: "Lokalizimi CI dhe CD"
summary: >-
  Lokalizimi CI/CD vërteton vazhdimisht përmbajtjen shumëgjuhëshe, kështu që asetet që mungojnë, lidhjet e prishura dhe regresionet e aksesueshmërisë kapen herët.
topics:
  - continuous-localization
  - qa
  - ci-cd
---
# Lokalizimi CI dhe CD

## Përmbledhje

Lokalizimi CI/CD vërteton vazhdimisht përmbajtjen shumëgjuhëshe, kështu që asetet që mungojnë, lidhjet e prishura dhe regresionet e aksesueshmërisë kapen herët.

## Kontrolle të dëshiruara

- Konsistenca e inventarit lokal
- gjenerim i freskët i sajtit përpara rishikimit të barazisë
- vërtetimi i lidhjes
- gjenerimi i artikujve dhe faqeve
- kontrolloni drejtshkrimin ku është e mundur
- barazia e mbajtësve të vendit
- testet e tymit të aksesueshmërisë
- kontrollet e mbulimit të pamjes së ekranit dhe diagramit

## Rregulli i gjenerimit të freskët

Rrjedhat e CI-së dhe të rishikimit të lokalizimit nuk duhet t'i bazojnë gjetjet e barazisë në artefakte të gjeneruara të vjetruara.

Rendi i kërkuar:

1. gjeneroni sajtin nga gjendja aktuale e depozitës
2. ekzekutoni vërtetuesit kundrejt daljes së sapogjeneruar
3. kur duhet, shqyrtoni HTML-në e gjeneruar
4. kur duhet, shqyrtoni daljen e paraqitur

Kjo ka rëndësi sepse Markdown-i burimor, HTML-ja e gjeneruar, dalja e publikuar dhe sjellja e paraqitur në shfletues mund të ndryshojnë përkohësisht gjatë zhvillimit.

## Përparim i klasës së defektit

CI i lokalizimit duhet të gjurmojë të dyja:

- `Localization Debt`
- `Open Defect Classes`

Masat e borxhit të mbetura punë burimore-përmbajtje.

Klasat e defekteve të hapura matin nëse sistemi mund të lejojë ende një kategori problemi të rishfaqet.

Sapo një klasë defekti arrin zero dukuri, vërtetuesi i saj duhet të kalojë nga këshillimi në bllokues aty ku është praktike.

Shembuj:

- botimi i draftit të vendmbajtësit
- përmbledhje të papërkthyera
- meta të dhëna të papërkthyera
- trupa të papërkthyer
- botim në gjuhë të përzier

CI nuk është vetëm një portier. Është mekanizmi që pengon klasat e mbyllura të defekteve të mos rihapen në heshtje.

## Rendi i gjeneratës për lundrimin e artikujve

Kontrata aktuale e lundrimit të artikujve publik është:

- `post-article-nav`
- `related-content`
- `related-topic-nav`

Gjenerimi dhe vërtetimi duhet të ndodhin në këtë rend:

1. gjeneroni HTML-në e artikullit
2. gjeneroni faqet e indeksit
3. ekzekutoni çdo paspërpunim të mbetur të navigimit vetëm nëse kërkohet ende
4. vërtetoni daljen e sapogjeneruar
5. shqyrtoni HTML-në e gjeneruar ose daljen e paraqitur nëse rrjedha e punës kërkon vlerësim njerëzor të barazisë

Nëse një vërtetues ende pret bllokun e trashëguar `topic-nav`, përditësoni verifikuesin me kontratën aktuale në vend që të korrigjoni HTML të krijuara.

## Faqe të ngjashme

- `translation-quality-assurance.md`
- `localization-roadmap.md`
- `../../learning/sq/how-to-run-localization-qa-in-ci.md`
