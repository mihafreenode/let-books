---
title: "Validacijski slojevi"
summary: "Kako više validacijskih faza smanjuje različite klase grešaka u sadržaju, generisanom izlazu, implementaciji i tokovima rada pri isporuci."
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

# Validacijski slojevi

Validacijski slojevi odvojene su provjere koje sistem ispituju iz različitih uglova. Jedan sloj može provjeravati sintaksu, drugi strukturu, treći kvalitet lokalizacije, a četvrti prikazani izlaz. Nijedan pojedinačni validator ne može pouzdano uhvatiti svaki smislen problem.

Slojeviti pristup važan je zato što se kvarovi pojavljuju u različitim fazama. Izvorni dokument može biti dobro oblikovan, ali semantički slab. Generisana HTML stranica može biti strukturno valjana, a ipak prikazivati neprevedeni tekst interfejsa. Demo može na ekranu izgledati ispravno, a loše se štampati. Svaki od tih problema zahtijeva drugačiju vrstu provjere.

Zato zreli dokumentacijski i softverski cjevovodi rijetko ovise o jednom koraku lintanja. Kombinuju validaciju formata, provjere linkova, provjere pariteta, provjere pristupačnosti, provjeru builda i pregled specifičan za izlaz. Vodič za učenje o [dodavanju validacijskih pravila i CI gateova u fazama](/docs/learning/bs/how-to-add-validation-rules-and-ci-gates-in-stages.html) opisuje kako timovi to mogu usvajati postepeno, umjesto da pokušaju sve automatizovati odjednom.

U Let Books validacijski slojevi već postoje kroz pregled lokalizacije, provjere generisanog HTML‑a, međujezička poređenja i provjeru strukture stranice. Tretiranje štampanog izlaza kao podržane funkcionalnosti proširuje istu logiku. Ako je dokumentacija namijenjena radu kao PDF ili papir, ponašanje pri štampi treba imati vlastitu validacijsku fazu, umjesto da se tretira kao neobavezna kozmetička briga.

Wiki stranica o [validacijskim slojevima](/docs/wiki/bs/validation-layers.html) pokriva referentni pogled. Ova tematska stranica naglašava opće načelo: svaki novi put isporuke ili tip dokumentacije trebalo bi da naslijedi postojeće slojeve koji već štite kvalitet drugdje.
