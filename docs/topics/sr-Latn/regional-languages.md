---
title: "Regionalni jezici"
summary: "Zašto podrška regionalnim jezicima zahteva više od širokih tržišnih oznaka i često zavisi od pisma, obrazovanja i institucionalnog konteksta."
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

Regionalni jezici često se tretiraju kao rubni slučajevi u planiranju softvera, ali u praksi predstavljaju stvarne korisnike, institucije i zajednice znanja. Dobra podrška obično zahteva više od dodavanja generičke kategorije "drugi jezici".

Izazov nije samo obim prevoda. Uključuje i podršku za pisma, ispravnost Unicode-a, tipografiju, terminologiju, obrazovne norme i razliku između jezičkih porodica koje su bliske, ali nisu zamenjive. Jedna regija može sadržati više sistema pisanja, više standarda i više različitih očekivanja o jeziku u javnoj upotrebi.

To je važno u dokumentaciji jer su konceptualna tačnost i poverenje korisnika snažno povezani sa izborom jezika. Projekat koji tvrdi da je regionalno relevantan, ali različite jezike ili pisma svodi na jedan sloj praktičnosti, često će delovati nedovršeno čak i ako osnovna tehnologija radi.

Let Books je dobar primer jer njegov predviđeni kontekst uključuje slovenački i nekoliko jezičkih zajednica bivše Jugoslavije i Balkana, uključujući i latinicu i ćirilicu. Specifikacija projekta te razlike tretira kao prvoklasne, a ne kao kozmetičke. Prateći referentni materijal o [Unicode-u i ispravnosti pisma](/docs/wiki/sr-Latn/unicode-and-script-correctness.html) i [matrica jezičke podrške](/docs/wiki/sr-Latn/language-support-matrix.html) pokazuje zašto ta odluka utiče i na implementaciju i na objavljivanje.

Podrška regionalnim jezicima zato nije funkcija brendiranja. Ona je deo toga da li sistem poštuje zajednice kojima tvrdi da služi.
