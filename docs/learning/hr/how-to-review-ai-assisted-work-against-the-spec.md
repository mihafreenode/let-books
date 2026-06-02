---
title: "Kako pregledavati rad uz podršku AI-ja prema specifikaciji"
summary: >-
  Ovaj vodič objašnjava kako pregledavati implementaciju uz podršku AI-ja tako da se provjerava prema specifikaciji proizvoda, pravilima tijeka rada, dokumentaciji i očekivanjima validacije, umjesto da se procjenjuje samo izgleda li rezultat uglađeno ili tehnički uvjerljivo.
topics:
  - product-review
  - ai-assisted-delivery
  - spec-driven-development
---
# Kako pregledavati rad uz podršku AI-ja prema specifikaciji

## Sažetak

Ovaj vodič objašnjava kako pregledavati implementaciju uz podršku AI-ja tako da se provjerava prema specifikaciji proizvoda, pravilima tijeka rada, dokumentaciji i očekivanjima validacije, umjesto da se procjenjuje samo izgleda li rezultat uglađeno ili tehnički uvjerljivo.

## Zašto je to važno

AI može vrlo brzo proizvesti kod, tekst, testove i promjene sučelja koji izgledaju dovršeno.

Ta brzina stvara rizik pri pregledu: recenzenti mogu nesvjesno prijeći s pitanja "Je li ovo ispravno ponašanje proizvoda?" na pitanje "Djeluje li ovo razumno?"

To nisu ista pitanja.

U radu vođenom specifikacijom pregled treba početi usklađenošću, a tek zatim prijeći na kvalitetu koda, stil i detalje implementacije.

## Počnite od izvora istine

Prije pregleda rezultata prepoznajte dokumente koji definiraju namjeravano ponašanje.

U repozitoriju Let Books to obično znači:

- `AGENTS.md` za pravila proizvoda, tijekove rada i opseg
- `AGENTS-Implementation.md` za taktička ograničenja isporuke
- `README.md` za prikaz trenutačnog stanja
- relevantnu dokumentaciju pod `docs/` za smjernice objave, provjere ili tijeka rada

Bez ovog koraka pregled lako postaje subjektivan i lokalno ograničen.

## Pregledavajte pravim redoslijedom

Koristite ovaj redoslijed pri pregledu rada uz podršku AI-ja.

### 1. Usklađenost s proizvodom

Pitajte odgovara li rezultat namjeravanom korisničkom tijeku rada i granici proizvoda.

Primjeri:

- radi li ručni unos i dalje tamo gdje to specifikacija zahtijeva
- čuva li promjena razdvajanje fizičkih primjeraka i bibliografskih zapisa
- dodaje li ponašanje koje nikada nije bilo odobreno
- prikazuje li netočno opcionalne AI mogućnosti kao obavezne

Ako je usklađenost s proizvodom pogrešna, nema puno vrijednosti u tome da se prvo troši vrijeme na dotjerivanje.

### 2. Usklađenost dokumentacije

Pitajte opisuju li okolni dokumenti i dalje stvarnost pošteno.

Primjeri:

- je li korisniku vidljiv tijek rada promijenjen bez ažuriranja dokumentacije
- opisuje li README i dalje točno trenutačno stanje
- odgovaraju li nove javne tvrdnje stvarnom dokumentiranom položaju proizvoda

Promjene generirane AI-jem često mijenjaju ponašanje bez ažuriranja narativa koji to ponašanje objašnjava.

### 3. Validacija i rezervno ponašanje

Pitajte čuva li promjena očekivanja iz specifikacije vezana uz neuspjeh i rezervne tokove.

Primjeri:

- može li tijek rada i dalje uspjeti kada opcionalni pružatelj zakaže
- obrađuju li se neispravni ulazi izričito
- tretiraju li se izlazi niske sigurnosti ili nesigurni rezultati kao prijedlozi umjesto kao činjenice

Tu mnoge uvjerljive implementacije padnu na stvarnom testu proizvoda.

### 4. Tehnička kvaliteta

Tek nakon prethodnih provjera treba većinu vremena trošiti na:

- jasnoću
- održavanje
- imenovanje
- dupliciranje
- testove
- strukturu

Tehnička kvaliteta i dalje je važna. Samo ne smije biti važnija od ispravnosti proizvoda.

## Uobičajene zamke u pregledu

Rad uz podršku AI-ja često stvara nekoliko ponavljajućih zamki pri pregledu.

### Zamka uglađenog rezultata

Rezultat izgleda čisto pa recenzenti pretpostave da je ispravan.

### Zamka obližnjeg konteksta

Promjena odgovara najbližoj postojećoj implementaciji, ali najbliža implementacija možda je već odstupila.

### Zamka implicitnog opsega

Pomoćnik dodaje značajke, apstrakcije ili pretpostavke koje nikada nisu bile tražene, a recenzent ih prihvati jer nisu očito pokvarene.

### Zamka prolaska testova

Testovi mogu prolaziti zato što potvrđuju generirano ponašanje, a ne zato što potvrđuju namjeravano ponašanje proizvoda.

## Praktičan kontrolni popis za pregled

Za svaku značajniju promjenu uz podršku AI-ja pitajte:

1. Koje pravilo proizvoda ili tijek rada ova promjena treba implementirati?
2. Koja specifikacija ili dokumentacija definira to pravilo?
3. Čuva li rezultat potrebna ograničenja?
4. Održava li rezervno ponašanje netaknutim?
5. Odgovara li dokumentacija i dalje ponašanju koje je nastalo?
6. Koja validacija ili testovi podupiru promjenu?
7. Je li pomoćnik dodao nešto što treba ukloniti jer je izvan opsega?

## Kako pregledavati generirane testove

Generirani testovi korisni su, ali i njih treba pregledati prema specifikaciji.

Pitajte:

- provjeravaju li testovi namjeravani tijek rada
- pokrivaju li rezervno ponašanje
- odražavaju li dokumentirane rubne uvjete
- tvrde li neko pogodnije ponašanje koje nikada nije bilo specificirano

To je posebno važno u radu vođenom specifikacijom jer slab testni skup može učvrstiti odstupanje.

## Primjeri iz Let Books

Primjeri pitanja na razini specifikacije u ovom repozitoriju uključuju:

- ostaje li tijek rada i dalje koristan bez plaćenih AI usluga
- razdvaja li dokumentacija trenutačnog stanja jasno status demoa od budućih planova za pozadinski sustav
- izbjegava li javna dokumentacija tretirati izvorni kod kao kanonski urednički dokaz
- ostaju li validacijski koraci dio tijeka isporuke umjesto opcionalnog pamćenja

Ta su pitanja dovoljno konkretna da vode pregled, a to je upravo ono što bi specifikacija trebala omogućiti.

## Trajna pouka

Pregled rada uz podršku AI-ja ne svodi se na provjeru je li pomoćnik proizveo nešto impresivno. Radi se o provjeri pripada li rezultat i dalje namjeravanom proizvodu.

Najbolje pitanje pri pregledu obično nije "Radi li ovo?" nego "Odgovara li ovo specifikaciji, uključujući dijelove koje je lako zaboraviti?"

## Dodatno čitanje

- `../spec-driven-content-program.md`
- `how-to-write-a-spec-that-ai-can-follow.md`
- `how-to-turn-a-product-spec-into-an-implementation-plan.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `../wiki/hr/spec-driven-development.md`
- `../blog/hr/spec-driven-development-for-ai-projects.md`
