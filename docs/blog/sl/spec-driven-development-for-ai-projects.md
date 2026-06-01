---
article_id: spec-driven-development-for-ai-projects
canonical_language: en
language_variants:
  - ../en/spec-driven-development-for-ai-projects.md
  - ../sl/spec-driven-development-for-ai-projects.md
  - ../hr/spec-driven-development-for-ai-projects.md
  - ../bs/spec-driven-development-for-ai-projects.md
  - ../sr-Latn/spec-driven-development-for-ai-projects.md
  - ../sr-Cyrl/spec-driven-development-for-ai-projects.md
  - ../mk/spec-driven-development-for-ai-projects.md
  - ../sq/spec-driven-development-for-ai-projects.md
  - ../de/spec-driven-development-for-ai-projects.md
  - ../it/spec-driven-development-for-ai-projects.md
  - ../fr/spec-driven-development-for-ai-projects.md
  - ../es/spec-driven-development-for-ai-projects.md
title: Razvoj na podlagi specifikacij za AI projekte
summary: Zakaj AI-podprto razvijanje potrebuje močnejše specifikacije, jasnejšo dokumentacijo in izrecna pravila preverjanja namesto bolj ohlapnega procesa.
topics:
  - spec-driven-development
  - ai-assisted-delivery
  - documentation
  - validation
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/Development.md
  - docs/Deployment.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/sl/spec-driven-development-for-ai-projects.md
status: draft
---

# Razvoj na podlagi specifikacij za AI projekte

AI zelo olajša hitro ustvarjanje kode. Prav tako pa zelo olajša hitro ustvarjanje napačne kode. Zato je razvoj na podlagi specifikacij v AI-podprtih projektih pomembnejši, ne manj pomemben.

Ko ekipa razvija brez jasne specifikacije, se izdelek sčasoma oddalji od namena. Ko pri tem pomaga AI, se lahko ta odmik zgodi v enem samem popoldnevu. Koda se lahko prevede, vmesnik je lahko videti lepo, testi pa lahko celo uspejo. Izdelek je kljub temu lahko napačen.

## Zakaj AI spremeni profil tveganja

AI pospeši tempo interpretacije. En sam poziv lahko ustvari arhitekturo, besedilo, validacijo, poimenovanja in uporabniški tok. To je koristno, vendar nevarno, kadar vir resnice ni dovolj jasen.

V praksi AI pogosto optimizira tisto, kar je v danem trenutku najbolj vidno:

- zadnji poziv
- najbližjo datoteko
- najlažjo implementacijsko pot
- najbolj generičen znan vzorec

Nič od tega samo po sebi še ne pomeni pravilne produktne odločitve.

## Kaj naredi dobra specifikacija

Dobra specifikacija opravi vsaj štiri naloge:

- določi namen
- postavi meje
- določi merilo pregleda
- deluje kot spomin ekipe

To je v Let Books zelo jasno. `AGENTS.md` večkrat poudari, da mora ročni potek delovati tudi brez plačljivih AI storitev in da fizični izvodi knjig niso isto kot bibliografski zapisi. To nista tehnični podrobnosti, temveč produktni meji.

## Zakaj dokumentacija ne sme čakati

Če je dokumentacija zastarela ali nejasna, bodo različni ljudje in različna orodja iz istega repozitorija razbrali različne izdelke. Eden bo sledil demu, drugi staremu README-ju, tretji najbližji datoteki.

Zato dokumentacija ni le naknadna razlaga. Je del operacijskega sistema projekta. V tem repozitoriju `README.md` opisuje trenutno stanje, `AGENTS.md` produktni namen, `AGENTS-Implementation.md` taktična pravila, `docs/` pa založniške in dokazne konvencije.

## Vloga demov

Demo je uporaben, ker pokaže, kaj obstaja, in razkrije težave uporabniškega toka. Ne bi pa smel tiho postati produktna specifikacija.

Pravila repozitorija že ločijo med kanoničnimi specifikacijami in dokumentacijo na eni strani ter stanjem implementacije na drugi. Če demo pokaže boljši tok, je treba posodobiti specifikacijo in dokumentacijo, ne pa pustiti, da demo sam od sebe zmaga.

## Markdown, testi in CI tvorijo verigo

V razvoju na podlagi specifikacij te plasti ne stojijo vsaka zase.

- Markdown shrani namen v pregledljivi obliki.
- Dokumentacija razloži, kako ga je treba razumeti.
- Testi preverijo izvedljiva pričakovanja.
- Validacijska pravila lovijo strukturni odmik.
- CI pravila redno uveljavlja.

Skupaj ustvarijo produktni spomin, ki preživi hitrost razvoja.

## Kaj to pomeni za ekipe, ki uporabljajo AI

Ekipe, ki AI uporabljajo dobro, ne odstranjujejo procesa. Proces premaknejo bliže viru generiranja.

To običajno pomeni:

- da pred implementacijo napišejo jasnejše produktne specifikacije
- da ohranijo izrecna implementacijska navodila
- da posodobijo dokumentacijo, ko se vedenje izdelka spremeni
- da demoe preverjajo glede na specifikacije, namesto da predpostavljajo ujemanje
- da postopno dodajajo validacijska pravila, tako da usklajenost ni odvisna le od človeškega spomina

To ni proti AI. Tako AI postane zanesljiv.

## Trajna lekcija

AI lahko hitro ustvari kodo, vsebino in vmesnike. Sam od sebe pa ne zagotovi, da vsi ti izhodi še vedno opisujejo isti izdelek.

Razvoj na podlagi specifikacij je način, kako ekipa prepreči, da bi se hitrost spremenila v odmik.

V AI-podprtih projektih specifikacija ni birokracija za nazaj. Je meja, spomin in merilo pregleda, zaradi katerih je hitro dostavljanje vredno zaupanja.

## Drugi jeziki

- [English](../en/spec-driven-development-for-ai-projects.md)
- [Hrvatski](../hr/spec-driven-development-for-ai-projects.md)
- [Bosanski](../bs/spec-driven-development-for-ai-projects.md)
- [Srpski (latinica)](../sr-Latn/spec-driven-development-for-ai-projects.md)
- [Српски (ћирилица)](../sr-Cyrl/spec-driven-development-for-ai-projects.md)
- [Македонски](../mk/spec-driven-development-for-ai-projects.md)
- [Shqip](../sq/spec-driven-development-for-ai-projects.md)
- [Deutsch](../de/spec-driven-development-for-ai-projects.md)
- [Italiano](../it/spec-driven-development-for-ai-projects.md)
- [Français](../fr/spec-driven-development-for-ai-projects.md)
- [Español](../es/spec-driven-development-for-ai-projects.md)
