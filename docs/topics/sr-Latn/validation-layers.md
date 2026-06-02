---
title: "Validacioni slojevi"
summary: "Kako više validacionih faza smanjuje različite klase grešaka u sadržaju, generisanom izlazu, implementaciji i tokovima rada pri isporuci."
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

# Validacioni slojevi

Validacioni slojevi su odvojene provere koje sistem ispituju iz različitih uglova. Jedan sloj može proveravati sintaksu, drugi strukturu, treći kvalitet lokalizacije, a četvrti prikazani izlaz. Nijedan pojedinačni validator ne može pouzdano uhvatiti svaki smislen problem.

Slojeviti pristup važan je zato što se kvarovi pojavljuju u različitim fazama. Izvorni dokument može biti dobro oblikovan, ali semantički slab. Generisana HTML stranica može biti strukturno valjana, a ipak prikazivati neprevedeni tekst interfejsa. Demo može na ekranu izgledati ispravno, a loše se štampati. Svaki od tih problema zahteva drugačiju vrstu provere.

Zato zreli dokumentacioni i softverski cevovodi retko zavise od jednog koraka lintanja. Kombinuju validaciju formata, provere linkova, provere pariteta, provere pristupačnosti, proveru builda i pregled specifičan za izlaz. Vodič za učenje o [dodavanju validacionih pravila i CI gateova u fazama](/docs/learning/sr-Latn/how-to-add-validation-rules-and-ci-gates-in-stages.html) opisuje kako timovi to mogu usvajati postepeno, umesto da pokušaju sve automatizovati odjednom.

U Let Books validacioni slojevi već postoje kroz pregled lokalizacije, provere generisanog HTML-a, međujezička poređenja i proveru strukture stranice. Tretiranje štampanog izlaza kao podržane funkcionalnosti proširuje istu logiku. Ako je dokumentacija namenjena radu kao PDF ili papir, ponašanje pri štampi treba da ima sopstvenu validacionu fazu, umesto da se tretira kao neobavezna kozmetička briga.

Wiki stranica o [validacionim slojevima](/docs/wiki/sr-Latn/validation-layers.html) pokriva referentni pogled. Ova tematska stranica naglašava opšte načelo: svaki novi put isporuke ili tip dokumentacije trebalo bi da nasledi postojeće slojeve koji već štite kvalitet drugde.
