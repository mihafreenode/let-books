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

AI zelo olajša hitro ustvarjanje kode. Prav tako pa zelo olajša hitro ustvarjanje napačne kode. To je osrednji razlog, zakaj je razvoj na podlagi specifikacij v AI-podprtih projektih pomembnejši, ne manj pomemben.

Ko človeška ekipa razvija programsko opremo brez jasne specifikacije, se rezultat običajno sčasoma oddalji od namena. Ko programsko opremo brez jasne specifikacije piše AI pomočnik, se lahko tak odmik zgodi v enem samem popoldnevu. Koda se lahko prevede. Uporabniški vmesnik je lahko videti dovršen. Testi lahko celo uspejo, če so napisani na podlagi napačnih predpostavk. Toda produkt se lahko še vedno oddalji od svojemu resničnemu namenu.

## Zakaj AI spremeni profil tveganja

Tradicionalni razvoj programske opreme je že prej imel vrzeli v interpretaciji med produktnim namenom, zasnovo, implementacijo in dokumentacijo. AI to časovnico stisne. En sam poziv lahko hkrati ustvari arhitekturo, besedilo, validacijska pravila, poimenovanja in vzorce vmesnika.

Ta hitrost je koristna. Nevarna pa postane, ko je vir resnice nejasen.

V praksi AI pogosto optimizira tisto, kar je v danem trenutku najbolj vidno:

- zadnji poziv
- najbližjo datoteko
- najlažjo implementacijsko pot
- najpogostejši vzorec v svoji distribuciji učenja

Nič od tega samo po sebi še ne pomeni pravilne produktne odločitve.

## Kaj specifikacija naredi v AI-podprtem delovnem toku

Močna produktna specifikacija opravi vsaj štiri naloge.

Prvič, določi namen. Ekipa lahko presodi, ali neka funkcija podpira dejanski produkt ali le dodaja izhod.

Drugič, določi meje. Pojasni, kaj je v obsegu, kaj je zunaj obsega, kaj je neobvezno in kaj mora delovati tudi takrat, ko neobvezni sistemi odpovejo.

Tretjič, določi merilo pregleda. Namesto da bi se spraševali le, ali sprememba tehnično deluje, se lahko pregledovalci vprašajo, ali se ujema z nameravanim delovnim tokom in produktnimi zavezami.

Četrtič, deluje kot spomin. AI sistemi sami od sebe nimajo stabilnega institucionalnega spomina. Specifikacija v repozitoriju ga ima.

To je v Let Books še posebej vidno. Projektna specifikacija v `AGENTS.md` večkrat jasno poudari dve stvari:

- ročni delovni tok mora ostati uporaben tudi brez plačljivih AI storitev
- fizični izvodi knjig in bibliografski zapisi morajo ostati ločena pojma

To nista implementacijski podrobnosti. To sta produktni meji. Če AI pomočnik ustvari tok, ki blokira ročni vnos ali združi podatke o fizičnem izvodu z metapodatki o izdaji, težava ni v slogu. Težava je produktni odmik.

## Zakaj dokumentacija ne sme čakati

V mnogih projektih je dokumentacija obravnavana kot pozno čiščenje. Ko je AI del dostave, to postane veliko dražje.

Brez ažurne dokumentacije:

- pozivi postanejo nekonsistentni
- pregled postane subjektiven
- demonstracije začnejo po naključju redefinirati produkt
- prihodnji sodelavci podedujejo vedenje, ne da bi vedeli, ali je bilo namerno

Zato je treba dokumentacijo obravnavati kot operativno sredstvo. V tem repozitoriju `README.md` opisuje trenutno javno stanje, `AGENTS.md` določa produktni namen, `AGENTS-Implementation.md` določa taktična navodila, območje `docs/` pa določa pravila za objavljanje in dokazovanje. Ta večplastna struktura ni birokracija. Tako projekt ohranja pomen povezan z izhodom.

## Vloga demov

Demonstracije so koristne. Pokažejo, kaj obstaja, razkrijejo težave uporabnosti in pomagajo institucijam ali sodelavcem reagirati na nekaj konkretnega. Demo pa ne bi smel tiho postati produktna specifikacija.

Repozitorij to razliko že jasno vzpostavlja v svojih dokumentacijskih pravilih. Javno pisanje mora specifikacije in dokumentacijo obravnavati kot kanoničen dokaz, medtem ko se lahko implementirano vedenje dema omenja kot stanje implementacije. To je zdravo pravilo, ker preprečuje naključno upravljanje s prototipom.

Če demo razkrije boljši delovni tok, odgovor ni, da mu tiho pustimo zmagati. Odgovor je, da posodobimo specifikacijo, dokumentacijo in merilo pregleda, da boljši tok postane nameren.

## Markdown, testi in CI niso ločene skrbi

Pogosta napaka je, da pisne specifikacije, tehnično validacijo in CI/CD obravnavamo kot nepovezane plasti.

V razvoju na podlagi specifikacij tvorijo eno samo verigo.

- Markdown shrani namen v pregledljivi obliki.
- Dokumentacija razloži, kako ga je treba razumeti.
- Testi preverijo izvedljiva pričakovanja.
- Validacijska pravila lovijo strukturni odmik.
- CI pravila uveljavlja vedno znova.

Vsaka plast je sama po sebi nepopolna. Skupaj ustvarijo produktni spomin, ki preživi hitrost, iteracije in spremembe ekipe.

## Kaj to pomeni za ekipe, ki uporabljajo AI

Ekipe, ki AI uporabljajo dobro, ne odstranjujejo procesa. Proces premaknejo bliže viru generiranja.

To običajno pomeni:

- da pred implementacijo napišejo jasnejše produktne specifikacije
- da ohranijo izrecna implementacijska navodila
- da posodobijo dokumentacijo, ko se vedenje izdelka spremeni
- da demoe preverjajo glede na specifikacije, namesto da samodejno predpostavljajo enakovrednost
- da postopno dodajajo validacijska pravila, tako da usklajenost ni odvisna le od človeškega spomina

To ni proti AI. Tako AI postane zanesljiv.

## Trajna lekcija

AI lahko hitro ustvari kodo, vsebino in vmesnike. Sam od sebe pa ne zagotovi, da vsi ti izhodi še vedno opisujejo isti izdelek.

Razvoj na podlagi specifikacij je način, kako ekipa prepreči, da bi se hitrost spremenila v odmik.

V AI-podprtih projektih specifikacija ni birokracija za nazaj. Je meja, spomin in merilo pregleda, zaradi katerih je hitro dostavljanje vredno zaupanja.

## Drugi jeziki

- [Slovenščina](../sl/spec-driven-development-for-ai-projects.md)
- [English](../sl/spec-driven-development-for-ai-projects.md)
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
