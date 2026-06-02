---
title: "Razvoj, voden s specifikacijo"
summary: "Zakaj specifikacije delujejo kot praktični operativni model za implementacijo, pregledovanje in komunikacijo, namesto kot ločen dokumentacijski dodatek."
topic_category: spec-driven-development
topics:
  - spec-driven-development
  - documentation
  - product-specification
related:
  blog:
    - spec-driven-development-in-let-books
  learning:
    - how-to-write-a-spec-that-ai-can-follow
  wiki:
    - spec-driven-development
---

# Razvoj, voden s specifikacijo

Razvoj, voden s specifikacijo, je pristop, pri katerem implementacija sledi eksplicitnemu opisu obnašanja izdelka, omejitev in namena. Specifikacija ni samo dokument z zahtevami. Postane skupna referenčna točka za razvijalce, pregledovalce, vzdrževalce in deležnike.

V praksi dobra specifikacija razloži, kaj bi moral sistem narediti, česa ne bi smel narediti, katera pravila kakovosti veljajo in kako bo ocenjen uspeh. Po tem se razlikuje od elementa v zaostanku, demoposnetka ali arhitekturne skice. Taki artefakti so lahko koristni, vendar redko nosijo enako raven trajnega namena.

Vrednost dela, vodenega s specifikacijo, ni teoretična. Zmanjšuje dvoumnost. Ko več ljudi skozi čas posega v isto funkcionalnost ali ko AI-pomočnik ustvari del implementacije, specifikacija omejuje odmik tako, da pričakovani izid postane viden, še preden se nakopičijo odločitve pri kodiranju.

Ta pristop ne zahteva togega slapovnega procesa. Specifikacije se lahko razvijajo. Lahko so majhne ali velike. Pomembno je, da je implementacijo mogoče preveriti glede na nekaj bolj stabilnega od spomina ali navade. Zato je delo, vodeno s specifikacijo, tesno povezano z [validacijskimi plastmi](/docs/topics/sl/validation-layers.html), [sledljivostjo dokumentacije](/docs/topics/sl/documentation-traceability.html) in potekom dela, obravnavanim v učnem vodniku o [pretvorbi specifikacije izdelka v izvedbeni načrt](/docs/learning/sl/how-to-turn-a-product-spec-into-an-implementation-plan.html).

V Let Books je razvoj, voden s specifikacijo, še posebej uporaben, ker projekt zajema zasnovo izdelka, večjezično dokumentacijo, logistiko shranjevanja, obdelavo metapodatkov in prihodnje poteke dela z AI-podporo. Sprememba na enem področju lahko hitro ustvari predpostavke na drugem. Specifikacija projekta v `AGENTS.md`, referenčno gradivo v wiki in vodeno izvedbeno gradivo na učnih straneh skupaj zmanjšujejo to tveganje.

Cilj ni dokumentacija sama zaradi sebe. Cilj je narediti implementacijo zanesljivejšo, pregled bolj konkreten in dolgoročno vzdrževanje manj odvisno od nenapisanega konteksta. Sorodni blog članek [Razvoj, voden s specifikacijo, v Let Books](/docs/blog/sl/spec-driven-development-in-let-books.html) prikazuje, kako to načelo že oblikuje repozitorij.
