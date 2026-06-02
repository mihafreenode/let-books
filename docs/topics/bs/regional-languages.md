---
title: "Regionalni jezici"
summary: "Zašto podrška regionalnim jezicima zahtijeva više od širokih tržišnih oznaka i često ovisi o pismu, obrazovanju i institucionalnom kontekstu."
topic_category: localization-at-scale
topics:
  - smaller-languages
  - language-rights
  - localization
related:
  blog:
    - preserving-smaller-languages-in-the-digital-age
  wiki:
    - language-support-matrix
    - unicode-and-script-correctness
---

# Regionalni jezici

Regionalni jezici često se tretiraju kao rubni slučajevi u planiranju softvera, ali u praksi predstavljaju stvarne korisnike, institucije i zajednice znanja. Dobra podrška obično zahtijeva više od dodavanja generičke kategorije "drugi jezici".

Izazov nije samo obim prevoda. Uključuje i podršku za pisma, ispravnost Unicodea, tipografiju, terminologiju, obrazovne norme i razliku između jezičkih porodica koje su bliske, ali nisu zamjenjive. Jedna regija može sadržavati više sistema pisanja, više standarda i više različitih očekivanja o jeziku u javnoj upotrebi.

To je važno u dokumentaciji jer su konceptualna tačnost i povjerenje korisnika snažno povezani s izborom jezika. Projekat koji tvrdi da je regionalno relevantan, ali različite jezike ili pisma svodi na jedan sloj praktičnosti, često će djelovati nedovršeno čak i ako temeljna tehnologija radi.

Let Books je dobar primjer jer njegov predviđeni kontekst uključuje slovenski i nekoliko jezičkih zajednica bivše Jugoslavije i Balkana, uključujući i latinicu i ćirilicu. Specifikacija projekta te razlike tretira kao prvoklasne, a ne kao kozmetičke. Prateći referentni materijal o [Unicodeu i ispravnosti pisma](/docs/wiki/bs/unicode-and-script-correctness.html) i [matrica jezičke podrške](/docs/wiki/bs/language-support-matrix.html) pokazuje zašto ta odluka utiče i na implementaciju i na objavljivanje.

Podrška regionalnim jezicima zato nije funkcija brendiranja. Ona je dio toga poštuje li sistem zajednice kojima tvrdi da služi.
