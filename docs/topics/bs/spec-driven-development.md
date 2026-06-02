---
title: "Razvoj vođen specifikacijom"
summary: "Zašto specifikacije djeluju kao praktičan operativni model za implementaciju, pregled i komunikaciju, umjesto kao zaseban dokumentacijski dodatak."
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

# Razvoj vođen specifikacijom

Razvoj vođen specifikacijom pristup je u kojem implementacija slijedi eksplicitan opis ponašanja proizvoda, ograničenja i namjere. Specifikacija nije samo dokument zahtjeva. Ona postaje zajednička referentna tačka za programere, pregledaoce, održavaoce i zainteresovane strane.

U praksi dobra specifikacija objašnjava šta bi sistem trebalo da radi, šta ne bi trebalo da radi, koja pravila kvaliteta važe i kako će se procjenjivati uspjeh. Po tome se razlikuje od stavke u backlogu, demoa ili arhitektonske skice. Takvi artefakti mogu biti korisni, ali rijetko nose isti nivo trajne namjere.

Vrijednost rada vođenog specifikacijom nije teorijska. Ona smanjuje dvosmislenost. Kada više ljudi tokom vremena dira istu funkcionalnost ili kada AI pomoćnik generiše dio implementacije, specifikacija ograničava odstupanje tako što očekivani ishod čini vidljivim prije nego što se odluke u kodiranju nagomilaju.

Ovaj pristup ne zahtijeva krut waterfall proces. Specifikacije se mogu razvijati. Mogu biti male ili velike. Važno je da se implementacija može provjeriti prema nečemu stabilnijem od sjećanja ili navike. Zato je rad vođen specifikacijom usko povezan s [validacijskim slojevima](/docs/topics/bs/validation-layers.html), [sljedivošću dokumentacije](/docs/topics/bs/documentation-traceability.html) i tokom rada opisanom u vodiču za učenje o [pretvaranju specifikacije proizvoda u implementacijski plan](/docs/learning/bs/how-to-turn-a-product-spec-into-an-implementation-plan.html).

U Let Books razvoj vođen specifikacijom posebno je koristan jer projekat obuhvata dizajn proizvoda, višejezičnu dokumentaciju, logistiku pohrane, rukovanje metapodacima i buduće tokove rada uz AI podršku. Promjena u jednom području lako može stvoriti pretpostavke u drugom. Specifikacija projekta u `AGENTS.md`, referentni materijal u wiki‑ju i vođeni implementacijski materijal na stranicama za učenje zajedno smanjuju taj rizik.

Cilj nije dokumentacija radi same sebe. Cilj je učiniti implementaciju pouzdanijom, pregled konkretnijim, a dugoročno održavanje manje ovisnim o nenapisanom kontekstu. Povezani blog članak [Razvoj vođen specifikacijom u Let Books](/docs/blog/bs/spec-driven-development-in-let-books.html) pokazuje kako to načelo već oblikuje repozitorij.
