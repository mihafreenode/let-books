---
title: "Validacijske plasti"
summary: "Kako več validacijskih stopenj zmanjšuje različne razrede napak v vsebini, generiranem izhodu, implementaciji in potekih dela pri izdaji."
topic_category: spec-driven-development
topics:
  - validation
  - product-quality
  - ci-cd
related:
  learning:
    - how-to-add-validation-rules-and-ci-gates-in-stages
  wiki:
    - validation-layers
    - localization-ci-cd
---

# Validacijske plasti

Validacijske plasti so ločena preverjanja, ki sistem pregledajo z različnih zornih kotov. Ena plast lahko preverja sintakso, druga strukturo, tretja kakovost lokalizacije, četrta pa končni prikaz. Noben posamezen validator ne more zanesljivo ujeti vsake smiselne težave.

Slojevit pristop je pomemben, ker se napake pojavijo na različnih stopnjah. Izvorni dokument je lahko formalno pravilen, a semantično šibek. Generirana stran HTML je lahko strukturno veljavna, vendar še vedno prikazuje neprevedeno besedilo vmesnika. Demo je lahko na zaslonu videti pravilen, a se slabo natisne. Vsaka od teh težav zahteva drugačno vrsto preverjanja.

Zato zreli dokumentacijski in programski cevovodi le redko temeljijo na enem samem koraku lintanja. Združujejo preverjanje formatov, preverjanje povezav, preverjanje paritete, preverjanje dostopnosti, preverjanje gradnje in pregled, specifičen za izhod. Učni vodnik o [dodajanju validacijskih pravil in vrat CI po stopnjah](/docs/learning/sl/how-to-add-validation-rules-and-ci-gates-in-stages.html) opisuje, kako lahko ekipe to uvajajo postopoma, namesto da bi skušale vse avtomatizirati naenkrat.

V Let Books validacijske plasti že obstajajo pri pregledu lokalizacije, preverjanju generiranega HTML, medjezikovnih primerjavah in preverjanju strukture spletišča. Obravnava tiskanega izhoda kot podprte funkcionalnosti razširi isto logiko. Če je dokumentacija namenjena tudi uporabi kot PDF ali papir, mora imeti vedenje pri tisku svojo lastno validacijsko stopnjo, namesto da bi bilo obravnavano kot neobvezna kozmetična skrb.

Wiki stran o [validacijskih plasteh](/docs/wiki/sl/validation-layers.html) pokriva referenčni pogled. Ta tematska stran poudarja splošno načelo: vsaka nova pot dostave ali vrsta dokumentacije naj prevzame obstoječe plasti, ki drugod že varujejo kakovost.
