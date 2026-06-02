---
title: "Razvoj vođen specifikacijom"
summary: "Zašto specifikacije djeluju kao praktičan operativni model za implementaciju, pregled i komunikaciju, umjesto kao zasebni dokumentacijski dodatak."
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

Razvoj vođen specifikacijom pristup je u kojem implementacija slijedi eksplicitan opis ponašanja proizvoda, ograničenja i namjere. Specifikacija nije samo dokument zahtjeva. Ona postaje zajednička referentna točka za programere, pregledavatelje, održavatelje i dionike.

U praksi dobra specifikacija objašnjava što bi sustav trebao raditi, što ne bi trebao raditi, koja pravila kvalitete vrijede i kako će se procjenjivati uspjeh. Po tome se razlikuje od stavke u backlogu, demoa ili arhitektonske skice. Takvi artefakti mogu biti korisni, ali rijetko nose istu razinu trajne namjere.

Vrijednost rada vođenog specifikacijom nije teorijska. Ona smanjuje dvosmislenost. Kada više ljudi s vremenom dira istu funkcionalnost ili kada AI pomoćnik generira dio implementacije, specifikacija ograničava odstupanje tako što očekivani ishod čini vidljivim prije nego što se odluke u kodiranju nagomilaju.

Ovaj pristup ne zahtijeva krut waterfall proces. Specifikacije se mogu razvijati. Mogu biti male ili velike. Važno je da se implementacija može provjeriti prema nečemu stabilnijem od sjećanja ili navike. Zato je rad vođen specifikacijom usko povezan s [validacijskim slojevima](/docs/topics/hr/validation-layers.html), [sljedivošću dokumentacije](/docs/topics/hr/documentation-traceability.html) i tijekom rada opisanom u vodiču za učenje o [pretvaranju specifikacije proizvoda u implementacijski plan](/docs/learning/hr/how-to-turn-a-product-spec-into-an-implementation-plan.html).

U Let Books razvoj vođen specifikacijom posebno je koristan jer projekt obuhvaća dizajn proizvoda, višejezičnu dokumentaciju, logistiku pohrane, rukovanje metapodacima i buduće tijekove rada uz AI podršku. Promjena u jednom području lako može stvoriti pretpostavke u drugom. Specifikacija projekta u `AGENTS.md`, referentni materijal u wiki‑ju i vođeni implementacijski materijal na stranicama za učenje zajedno smanjuju taj rizik.

Cilj nije dokumentacija radi same sebe. Cilj je učiniti implementaciju pouzdanijom, pregled konkretnijim, a dugoročno održavanje manje ovisnim o nepisanom kontekstu. Povezani blog članak [Razvoj vođen specifikacijom u Let Books](/docs/blog/hr/spec-driven-development-in-let-books.html) pokazuje kako to načelo već oblikuje repozitorij.
