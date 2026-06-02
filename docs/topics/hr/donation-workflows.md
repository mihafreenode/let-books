---
title: "Tijekovi rada za donacije"
summary: "Kako sustavi za donacije knjiga prelaze od inventara do pregleda, odabira, preuzimanja i dostave, umjesto da se zaustave na jednostavnom stvaranju kataloga."
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

# Tijekovi rada za donacije

Tijekovi rada za donacije opisuju praktičan put koji knjiga prolazi od privatne pohrane prema pregledu, odabiru, preuzimanju i dostavi. U mnogim projektima taj je tijek rada jednako važan kao i sami metapodaci jer glavni problem nije samo znati što knjiga jest, nego i učiniti prijenos izvedivim.

Potpun donacijski tok obično uključuje unos, identifikaciju, praćenje pohrane, odluke pregledavatelja, popise za preuzimanje i završna ažuriranja statusa. Ako je bilo koja od tih faza slaba, proces postaje teži i za donatore i za institucije. Knjige mogu biti katalogizirane, ali nikada pregledane, odabrane, ali ne i pronađene, ili zapakirane bez jasnog revizijskog traga.

Zato tijekove rada za donacije treba modelirati eksplicitno, umjesto da ih se tretira kao naknadnu misao uz katalogizaciju. Sloj metapodataka podržava pregled, a sloj tijeka rada podržava djelovanje. On sustavu govori koje su knjige dostupne, koje su tražene, koje su zapakirane i koje su još neriješene.

U Let Books to je jedna od definicijskih ideja projekta. Platforma nije predstavljena samo kao skener ili alat za metapodatke. Namijenjena je tome da ljudima pomogne izbjeći gubitak vrijednih obrazovnih knjiga tako da stvarni proces donacije učini praktičnim. To uključuje mobilno snimanje, pregled u Excelu, preuzimanje po kutijama i sljedive promjene statusa.

Specifikacija u `AGENTS.md` i postojeći materijal o tijekovima rada u dokumentaciji pokazuju da je ovaj operativni sloj prvoklasan. Donacija nije samo mogući ishod katalogizacije. Ona je jedan od glavnih razloga zbog kojih katalog postoji.
