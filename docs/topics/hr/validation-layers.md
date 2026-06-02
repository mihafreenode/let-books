---
title: "Validacijski slojevi"
summary: "Kako više validacijskih faza smanjuje različite klase pogrešaka u sadržaju, generiranom izlazu, implementaciji i tijekovima rada pri isporuci."
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

Validacijski slojevi odvojene su provjere koje sustav ispituju iz različitih kutova. Jedan sloj može provjeravati sintaksu, drugi strukturu, treći kvalitetu lokalizacije, a četvrti prikazani izlaz. Nijedan pojedinačni validator ne može pouzdano uhvatiti svaki smisleni problem.

Slojeviti pristup važan je zato što se kvarovi pojavljuju u različitim fazama. Izvorni dokument može biti dobro oblikovan, ali semantički slab. Generirana HTML stranica može biti strukturno valjana, a ipak prikazivati neprevedeni tekst sučelja. Demo može na zaslonu izgledati ispravno, a loše se ispisivati. Svaki od tih problema zahtijeva drukčiju vrstu provjere.

Zato zreli dokumentacijski i softverski cjevovodi rijetko ovise o jednom koraku lintanja. Kombiniraju validaciju formata, provjere poveznica, provjere pariteta, provjere pristupačnosti, provjeru builda i pregled specifičan za izlaz. Vodič za učenje o [dodavanju validacijskih pravila i CI gateova u fazama](/docs/learning/hr/how-to-add-validation-rules-and-ci-gates-in-stages.html) opisuje kako timovi to mogu usvajati postupno, umjesto da pokušaju sve automatizirati odjednom.

U Let Books validacijski slojevi već postoje kroz pregled lokalizacije, provjere generiranog HTML‑a, međujezične usporedbe i provjeru strukture stranice. Tretiranje ispisnog izlaza kao podržane funkcionalnosti proširuje istu logiku. Ako je dokumentacija namijenjena radu kao PDF ili papir, ponašanje pri ispisu treba imati vlastitu validacijsku fazu, umjesto da se tretira kao neobvezna kozmetička briga.

Wiki stranica o [validacijskim slojevima](/docs/wiki/hr/validation-layers.html) pokriva referentni pogled. Ova tematska stranica naglašava opće načelo: svaki novi put isporuke ili tip dokumentacije trebao bi naslijediti postojeće slojeve koji već štite kvalitetu drugdje.
