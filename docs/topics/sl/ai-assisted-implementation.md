---
title: "Implementacija z AI-podporo"
summary: "Kako AI spreminja hitrost implementacije in vedenje pri pripravi osnutkov, ne da bi odpravil potrebo po namenu izdelka, pregledu in eksplicitnih vratih kakovosti."
topic_category: spec-driven-development
topics:
  - ai-assisted-delivery
  - spec-driven-development
  - product-quality
related:
  blog:
    - spec-driven-development-for-ai-projects
  learning:
    - how-to-review-ai-assisted-work-against-the-spec
  wiki:
    - implementation-guidance
---

# Implementacija z AI-podporo

Implementacija z AI-podporo označuje programsko delo, pri katerem so koda, testi, besedilo vmesnika, dokumentacija ali konfiguracija pripravljeni s pomočjo generativnih orodij. Pomembno je, da AI spreminja obliko implementacijskega dela tudi takrat, ko ne spremeni končne odgovornosti za rezultat.

Tradicionalna ozka grla pri implementaciji so pogosto izhajala iz hitrosti tipkanja in stroška prvih osnutkov. AI te stroške močno zmanjša. To iteracije pospeši, vendar hkrati olajša nastajanje verjetno zvenečih rezultatov, ki so z resničnim izdelkom usklajeni le delno. Hiter osnutek ni isto kot pravilna implementacija.

Zato je implementacija z AI-podporo močno odvisna od okoliške strukture. Specifikacije določajo namen. Pregled določa sprejemljivost. Validacija določa ponovljive preglede kakovosti. Brez teh plasti se AI nagiba k optimizaciji za dokončanje, ne za usklajenost.

Prav zato je treba delo z AI-podporo obravnavati kot pospešitveno plast, ne kot nadomestek za inženirsko presojo. Ekipe morajo še vedno odločiti, katera vedenja so obvezna, kateri kompromisi so sprejemljivi in kateri dokazi štejejo kot potrditev. Učni vodnik o [pregledovanju dela z AI-podporo glede na specifikacijo](/docs/learning/sl/how-to-review-ai-assisted-work-against-the-spec.html) to načelo pretvori v praktičen pregledni tok.

V Let Books je to pomembno tako na strani izdelka kot na strani dokumentacije. Repozitorij že vsebuje strukturirane specifikacije, lokalizirano dokumentacijo, generirane strani in validacijske skripte. AI lahko pomaga ustvariti ali posodobiti vsako od teh plasti, vendar vsaka plast še vedno potrebuje človeški pregled in sledljivost. Zato Let Books tudi [dokumentacijo obravnava kot del izdelka](/docs/blog/sl/documentation-is-part-of-the-product.html), ne kot čiščenje po tem, ko je koda že napisana.

Implementacija z AI-podporo deluje najbolje takrat, ko okoliški sistem omogoča preprosto postaviti jasno vprašanje: ali se ta sprememba ujema z nameravanim izdelkom ali pa je samo videti razumna?
