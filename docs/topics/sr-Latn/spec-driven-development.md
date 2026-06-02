---
title: "Razvoj vođen specifikacijom"
summary: "Zašto specifikacije deluju kao praktičan operativni model za implementaciju, pregled i komunikaciju, umesto kao zaseban dokumentacioni dodatak."
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

Razvoj vođen specifikacijom pristup je u kojem implementacija sledi eksplicitan opis ponašanja proizvoda, ograničenja i namere. Specifikacija nije samo dokument zahteva. Ona postaje zajednička referentna tačka za programere, pregledaoce, održavaoce i zainteresovane strane.

U praksi dobra specifikacija objašnjava šta bi sistem trebalo da radi, šta ne bi trebalo da radi, koja pravila kvaliteta važe i kako će se procenjivati uspeh. Po tome se razlikuje od stavke u backlogu, demoa ili arhitektonske skice. Takvi artefakti mogu biti korisni, ali retko nose isti nivo trajne namere.

Vrednost rada vođenog specifikacijom nije teorijska. Ona smanjuje dvosmislenost. Kada više ljudi tokom vremena dira istu funkcionalnost ili kada AI pomoćnik generiše deo implementacije, specifikacija ograničava odstupanje tako što očekivani ishod čini vidljivim pre nego što se odluke u kodiranju nagomilaju.

Ovaj pristup ne zahteva krut waterfall proces. Specifikacije mogu da se razvijaju. Mogu biti male ili velike. Važno je da implementacija može da se proveri prema nečemu stabilnijem od sećanja ili navike. Zato je rad vođen specifikacijom usko povezan sa [validacionim slojevima](/docs/topics/sr-Latn/validation-layers.html), [sledljivošću dokumentacije](/docs/topics/sr-Latn/documentation-traceability.html) i tokom rada opisanom u vodiču za učenje o [pretvaranju specifikacije proizvoda u implementacioni plan](/docs/learning/sr-Latn/how-to-turn-a-product-spec-into-an-implementation-plan.html).

U Let Books razvoj vođen specifikacijom posebno je koristan jer projekat obuhvata dizajn proizvoda, višejezičnu dokumentaciju, logistiku skladištenja, rukovanje metapodacima i buduće tokove rada uz AI podršku. Promena u jednom području lako može stvoriti pretpostavke u drugom. Specifikacija projekta u `AGENTS.md`, referentni materijal u wiki-ju i vođeni implementacioni materijal na stranicama za učenje zajedno smanjuju taj rizik.

Cilj nije dokumentacija radi same sebe. Cilj je učiniti implementaciju pouzdanijom, pregled konkretnijim, a dugoročno održavanje manje zavisnim od nenapisanog konteksta. Povezani blog članak [Razvoj vođen specifikacijom u Let Books](/docs/blog/sr-Latn/spec-driven-development-in-let-books.html) pokazuje kako to načelo već oblikuje repozitorijum.
