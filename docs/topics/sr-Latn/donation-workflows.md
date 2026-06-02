---
title: "Tokovi rada za donacije"
summary: "Kako sistemi za donacije knjiga prelaze od inventara do pregleda, odabira, preuzimanja i isporuke, umesto da se zaustave na jednostavnom pravljenju kataloga."
topic_category: book-and-library-metadata
topics:
  - book-donation
  - library-systems
  - validation
related:
  learning:
    - how-to-keep-spec-docs-demo-and-code-aligned
  wiki:
    - product-specification
  blog:
    - spec-driven-development-in-let-books
---

# Tokovi rada za donacije

Tokovi rada za donacije opisuju praktičan put koji knjiga prolazi od privatnog skladištenja ka pregledu, odabiru, preuzimanju i isporuci. U mnogim projektima ovaj tok rada jednako je važan kao i sami metapodaci, jer glavni problem nije samo znati šta knjiga jeste, nego i učiniti prenos izvodljivim.

Potpun tok donacije obično uključuje unos, identifikaciju, praćenje skladištenja, odluke pregledalaca, liste za preuzimanje i završna ažuriranja statusa. Ako je bilo koja od tih faza slaba, proces postaje teži i za donatore i za institucije. Knjige mogu biti katalogizovane, ali nikada pregledane, odabrane ali ne i pronađene, ili zapakovane bez jasnog revizionog traga.

Zato tokove rada za donacije treba modelovati eksplicitno, umesto da se tretiraju kao naknadna misao uz katalogizaciju. Sloj metapodataka podržava pregled, a sloj toka rada podržava delovanje. On sistemu govori koje su knjige dostupne, koje su tražene, koje su zapakovane i koje su još nerešene.

U Let Books to je jedna od definicionih ideja projekta. Platforma nije predstavljena samo kao skener ili alat za metapodatke. Namenjena je tome da ljudima pomogne da izbegnu gubitak vrednih obrazovnih knjiga tako što stvarni proces donacije čini praktičnim. To uključuje mobilno snimanje, pregled u Excelu, preuzimanje po kutijama i sledljive promene statusa.

Specifikacija u `AGENTS.md` i postojeći materijal o tokovima rada u dokumentaciji pokazuju da je ovaj operativni sloj prvoklasan. Donacija nije samo mogući ishod katalogizacije. Ona je jedan od glavnih razloga zbog kojih katalog postoji.
