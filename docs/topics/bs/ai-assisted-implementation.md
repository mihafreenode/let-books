---
title: "Implementacija uz AI podršku"
summary: "Kako AI mijenja brzinu implementacije i ponašanje pri izradi nacrta, a da pritom ne uklanja potrebu za namjerom proizvoda, pregledom i eksplicitnim vratima kvaliteta."
topic_category: spec-driven-development
topics:
  - ai-assisted-delivery
  - spec-driven-development
  - product-quality
related:
  blog:
    - spec-driven-development-for-ai-projects
  learning:
    - how-to-review-ai-assisted-work-against-the-spec
  wiki:
    - implementation-guidance
---

# Implementacija uz AI podršku

Implementacija uz AI podršku odnosi se na softverski rad u kojem se kod, testovi, tekst interfejsa, dokumentacija ili konfiguracija izrađuju uz pomoć generativnih alata. Važna je činjenica da AI mijenja oblik implementacijskog rada čak i kada ne mijenja konačnu odgovornost za rezultat.

Tradicionalna uska grla implementacije često su proizlazila iz brzine tipkanja i troška prvih nacrta. AI te troškove snažno smanjuje. To ubrzava iteraciju, ali istovremeno olakšava proizvodnju uvjerljivog izlaza koji je sa stvarnim proizvodom usklađen samo djelimično. Brz nacrt nije isto što i ispravna implementacija.

Zbog toga implementacija uz AI podršku snažno ovisi o okolnoj strukturi. Specifikacije definišu namjeru. Pregled definiše prihvatanje. Validacija definiše ponovljive provjere kvaliteta. Bez tih slojeva AI teži optimizaciji za dovršenost, a ne za usklađenost.

Zato rad uz AI podršku treba tretirati kao sloj ubrzanja, a ne kao zamjenu za inženjersku prosudbu. Timovi i dalje moraju odlučiti koja su ponašanja obavezna, koji su kompromisi prihvatljivi i koji se dokaz smatra potvrdom. Vodič za učenje o [pregledu rada uz AI podršku prema specifikaciji](/docs/learning/bs/how-to-review-ai-assisted-work-against-the-spec.html) ovo načelo pretvara u praktičan tok pregleda.

U Let Books to je važno i na strani proizvoda i na strani dokumentacije. Repozitorij već sadrži strukturirane specifikacije, lokalizovanu dokumentaciju, generisane stranice i validacijske skripte. AI može pomoći u stvaranju ili ažuriranju svakog od tih slojeva, ali svaki sloj i dalje traži ljudski pregled i sljedivost. Zato Let Books i [dokumentaciju tretira kao dio proizvoda](/docs/blog/bs/documentation-is-part-of-the-product.html), a ne kao čišćenje nakon što je kod već napisan.

Implementacija uz AI podršku najbolje funkcioniše kada okolni sistem olakšava postavljanje jasnog pitanja: odgovara li ova promjena namjeravanom proizvodu ili samo izgleda razumno?
