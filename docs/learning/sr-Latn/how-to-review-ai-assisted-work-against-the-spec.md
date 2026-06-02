---
title: "Kako pregledati rad uz pomoć AI u odnosu na specifikaciju"
summary: >-
  Ovaj vodič objašnjava kako pregledati implementaciju uz pomoć AI tako što se proverava u odnosu na specifikaciju proizvoda, pravila toka rada, dokumentaciju i očekivanja validacije, umesto da se procenjuje samo da li izlaz deluje uglađeno ili tehnički uverljivo.
topics:
  - product-review
  - ai-assisted-delivery
  - spec-driven-development
---
# Kako pregledati rad uz pomoć AI u odnosu na specifikaciju

## Sažetak

Ovaj vodič objašnjava kako pregledati implementaciju uz pomoć AI tako što se proverava u odnosu na specifikaciju proizvoda, pravila toka rada, dokumentaciju i očekivanja validacije, umesto da se procenjuje samo da li izlaz deluje uglađeno ili tehnički uverljivo.

## Zašto je to važno

AI može veoma brzo da proizvede kod, tekst, testove i izmene interfejsa koje deluju potpuno.

Ta brzina stvara rizik pri pregledu: osobe koje pregledaju mogu nesvesno preći sa pitanja „Da li je ovo ispravno ponašanje proizvoda?“ na pitanje „Da li ovo deluje razumno?“.

To nisu ista pitanja.

U radu vođenom specifikacijama pregled bi trebalo da počne od usklađenosti, a tek zatim da pređe na kvalitet koda, stil i detalje implementacije.

## Počnite od izvora istine

Pre nego što pregledate izlaz, identifikujte dokumente koji definišu željeno ponašanje.

U Let Books repozitorijumu to obično znači:

- `AGENTS.md` za pravila proizvoda, tokove rada i obim
- `AGENTS-Implementation.md` za taktička ograničenja isporuke
- `README.md` za prikaz trenutnog stanja
- relevantnu dokumentaciju pod `docs/` za objavljivanje, verifikaciju ili smernice toka rada

Bez ovog koraka pregled lako postaje subjektivan i lokalan.

## Pregledajte pravim redosledom

Koristite ovaj redosled kada pregledate rad uz pomoć AI.

### 1. Usklađenost sa proizvodom

Pitajte da li izlaz odgovara nameravanom korisničkom toku rada i granici proizvoda.

Primeri:

- da li ručni unos i dalje radi tamo gde ga specifikacija zahteva
- da li promena čuva razdvajanje između fizičkih primeraka i bibliografskih zapisa
- da li dodaje ponašanje koje nikada nije odobreno
- da li pogrešno predstavlja opcione AI funkcije kao obavezne

Ako je usklađenost sa proizvodom pogrešna, nema mnogo vrednosti u tome da se prvo troši mnogo vremena na doterivanje.

### 2. Usklađenost sa dokumentacijom

Pitajte da li okolna dokumentacija i dalje pošteno opisuje stvarnost.

Primeri:

- da li je korisniku vidljiv tok rada promenjen bez ažuriranja dokumentacije
- da li README i dalje ispravno opisuje trenutno stanje
- da li se nove javne tvrdnje poklapaju sa stvarno dokumentovanom pozicijom proizvoda

Promene koje generiše AI često promene ponašanje, a da se ne ažurira narativ oko tog ponašanja.

### 3. Validacija i rezervno ponašanje

Pitajte da li promena čuva očekivanja o greškama i rezervnom ponašanju iz specifikacije.

Primeri:

- da li tok rada i dalje može da uspe kada opcioni provajder zakaže
- da li se neispravni ulazi obrađuju eksplicitno
- da li se rezultati sa niskim poverenjem ili neizvesni rezultati tretiraju kao predlozi umesto kao činjenice

Ovde mnoge uverljive implementacije padaju na stvarnom testu proizvoda.

### 4. Tehnički kvalitet

Tek nakon prethodnih provera treba posvetiti najveći deo vremena:

- jasnoći
- održivosti
- imenovanju
- dupliranju
- testovima
- strukturi

Tehnički kvalitet je i dalje važan. Samo ne bi trebalo da bude važniji od ispravnosti proizvoda.

## Česte zamke pri pregledu

Rad uz pomoć AI ima tendenciju da stvara nekoliko ponovljivih zamki pri pregledu.

### Zamka uglađenog izlaza

Izlaz izgleda čisto, pa osobe koje pregledaju pretpostave da je ispravan.

### Zamka obližnjeg konteksta

Promena se poklapa sa najbližom postojećom implementacijom, ali je moguće da je ta najbliža implementacija već odstupila.

### Zamka implicitnog obima

Asistent doda funkcije, apstrakcije ili pretpostavke koje nikada nisu tražene, a pregledalac ih prihvati jer ne deluju očigledno pokvareno.

### Zamka prolaznih testova

Testovi mogu prolaziti zato što validiraju generisano ponašanje, a ne zato što validiraju nameravano ponašanje proizvoda.

## Praktična kontrolna lista za pregled

Za svaku značajniju promenu uz pomoć AI pitajte:

1. Koje pravilo proizvoda ili koji tok rada ova promena treba da implementira?
2. Koja specifikacija ili dokumentacija definiše to pravilo?
3. Da li izlaz čuva tražena ograničenja?
4. Da li zadržava rezervno ponašanje netaknutim?
5. Da li se dokumentacija i dalje poklapa sa rezultujućim ponašanjem?
6. Koja validacija ili testovi podržavaju promenu?
7. Da li je asistent dodao nešto što bi trebalo ukloniti kao van obima?

## Kako pregledati generisane testove

Generisani testovi su korisni, ali i njih treba pregledati u odnosu na specifikaciju.

Pitajte:

- da li testovi proveravaju nameravani tok rada
- da li pokrivaju rezervno ponašanje
- da li odražavaju dokumentovane granične uslove
- da li tvrde neko zgodno ponašanje koje nikada nije bilo specificirano

To je posebno važno u radu vođenom specifikacijama, jer slab testni skup može da učvrsti odstupanje.

## Primeri iz Let Books

Primeri pitanja na nivou specifikacije u ovom repozitorijumu uključuju:

- da li tok rada ostaje koristan bez plaćenih AI servisa
- da li dokumentacija trenutnog stanja jasno odvaja status demonstracije od budućih planova za backend
- da li javna dokumentacija izbegava da izvorni kod tretira kao kanonski urednički dokaz
- da li validacioni koraci ostaju deo toka isporuke umesto opcionalnog pamćenja

Ta pitanja su dovoljno konkretna da usmeravaju pregled, što je upravo ono što specifikacija treba da omogući.

## Trajna lekcija

Pregled uz pomoć AI nije u tome da proverite da li je asistent proizveo nešto impresivno. Radi se o tome da proverite da li izlaz i dalje pripada nameravanom proizvodu.

Najbolje pitanje pri pregledu obično nije „Da li ovo radi?“. Ono je „Da li se ovo poklapa sa specifikacijom, uključujući delove koje je lako zaboraviti?“.

## Dalje čitanje

- `../spec-driven-content-program.md`
- `how-to-write-a-spec-that-ai-can-follow.md`
- `how-to-turn-a-product-spec-into-an-implementation-plan.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `../wiki/sr-Latn/spec-driven-development.md`
- `../blog/sr-Latn/spec-driven-development-for-ai-projects.md`
