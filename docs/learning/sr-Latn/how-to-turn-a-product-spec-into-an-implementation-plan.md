---
title: "Kako pretvoriti specifikaciju proizvoda u implementacioni plan"
summary: >-
  Ovaj vodič objašnjava kako da specifikaciju proizvoda prevedete u konkretan implementacioni plan, a da pri tome ne izgubite nameru, granice ili pravila toka rada koja su specifikaciju uopšte činila korisnom.
topics:
  - spec-writing
  - implementation-planning
  - project-management
---
# Kako pretvoriti specifikaciju proizvoda u implementacioni plan

## Sažetak

Ovaj vodič objašnjava kako da specifikaciju proizvoda prevedete u konkretan implementacioni plan, a da pri tome ne izgubite nameru, granice ili pravila toka rada koja su specifikaciju uopšte činila korisnom.

## Zašto je ovaj korak važan

Specifikacija opisuje šta proizvod treba da radi i zašto to treba da radi.

Implementacioni plan opisuje kako će tim isporučiti to ponašanje u redosledu koji može da se pregleda, testira i realno sprovede.

Mnogi projekti ne uspeju upravo u praznini između ta dva dokumenta.

Specifikacija može biti dobra, ali plan postane previše nejasan, previše tehnički ili previše odvojen od korisničkih tokova rada. U radu uz pomoć AI to je još češće, jer generisani kod može da stvori utisak da se planiranje već dogodilo, iako zapravo nije.

## Počnite izdvajanjem odluka o proizvodu

Pre nego što specifikaciju pretvorite u zadatke, identifikujte odluke koje zaista ograničavaju implementaciju.

Tražite:

- svrhu proizvoda
- korisnički tok rada
- granice obima
- pravila o kojima nema pregovora
- rezervno ponašanje
- kriterijume prihvatanja

To su delovi koji treba da prežive prelazak iz specifikacije u plan.

Ako ih plan izgubi, obično postaje tehnička lista obaveza umesto plana isporuke.

## Podelite plan na slojeve

Dobar implementacioni plan obično ima najmanje tri sloja.

### 1. Sloj toka rada

Opišite korisnički tok kratkim i konkretnim koracima.

Primer:

1. korisnik bira skladišnu kutiju
2. korisnik skenira ili unosi ISBN
3. korisnik može da nastavi i ako pretraga ne uspe
4. korisnik čuva fizički primerak na izabranoj lokaciji

Ovaj sloj štiti korisničko iskustvo od toga da bude zatrpano tehničkim zadacima.

### 2. Sistemski sloj

Opišite delove sistema koji moraju da podrže taj tok rada.

Primeri:

- promene modela podataka
- ekrani ili forme korisničkog interfejsa
- validaciona pravila
- ponašanje uvoza/izvoza
- ažuriranja lokalizacije
- potrebe za verifikacijom

Ovaj sloj povezuje ponašanje proizvoda sa tehničkim radom.

### 3. Sloj isporuke

Razložite sistemski rad na redosled koji zaista može da se implementira i pregleda.

Primeri:

1. definišite ili ažurirajte domen model
2. implementirajte osnovni tok korisničkog interfejsa
3. dodajte rezervno ponašanje
4. dodajte validaciju i testove
5. ažurirajte dokumentaciju i primere

Na ovom sloju plan postaje rasporediv.

## Neka ograničenja oblikuju plan

Implementacioni planovi često odstupaju kada se prepišu kao generički inženjerski koraci.

Da biste to izbegli, držite ključna ograničenja proizvoda vidljivim unutar plana.

Za rad u stilu Let Books to može uključivati ograničenja kao što su:

- ručni tokovi rada moraju i dalje da funkcionišu bez AI-ja
- nepotpuni podaci moraju biti dozvoljeni
- fizički primerci moraju ostati odvojeni od bibliografskih zapisa
- lokalizacija ne može da se tretira kao opciono doterivanje
- dokumentacija trenutnog stanja mora ostati poštena o tome šta trenutno postoji

Ova ograničenja ne bi trebalo da žive samo u originalnoj specifikaciji. Trebalo bi da se pojavljuju i u beleškama za planiranje i kriterijumima za pregled.

## Koristite kriterijume prihvatanja da oblikujete razlaganje zadataka

Jedan od najlakših načina da specifikaciju pretvorite u plan jeste da krenete od kriterijuma prihvatanja.

Za svaki kriterijum pitajte:

- koji interfejs ili tok rada ovo podržava
- koji podaci ili ponašanje sistema ovo podržavaju
- koji slučaj greške i dalje mora da uspe
- kako ćemo to verifikovati

Ta metoda drži plan vezanim za vidljive ishode umesto za apstraktne arhitektonske rasprave.

## Planiranje uz pomoć AI: na šta treba paziti

AI može pomoći da se brzo napravi implementacioni plan, ali često uvodi ponavljane probleme:

- dodatne apstrakcije bez potrebe proizvoda
- zadatke grupisane po tehnologiji umesto po toku rada
- optimistično izostavljanje rezervnog ponašanja
- skrivene pretpostavke o dostupnosti backend-a ili kvalitetu podataka
- planove koji deluju potpuno, ali ignorišu dokumentaciju i verifikaciju

Kada pregledate implementacioni plan koji je generisao AI, pitajte da li on i dalje odražava stvarni skup pravila proizvoda.

## Praktičan šablon za planiranje

Koristite strukturu kao što je ova:

1. cilj funkcionalnosti
2. sažetak korisničkog toka rada
3. ograničenja i pravila o kojima nema pregovora
4. isporučive celine
5. strategija verifikacije
6. potrebna ažuriranja dokumentacije

Na primer, jedna isporučiva celina mogla bi biti:

- dodaj birač lokacije skladištenja u tok unosa
- dozvoli čuvanje i bez uspešne pretrage metapodataka
- sačuvaj fizički primerak odvojeno od bibliografskih metapodataka
- ažuriraj tekst vodiča i napomene za verifikaciju

To je mnogo jače od ravne liste kao što je:

- napravi formu
- dodaj API poziv
- dodaj testove

## Primer Let Books

Repozitorijum već sadrži sirove ulaze za ovakav stil planiranja:

- `AGENTS.md` za svrhu proizvoda, tokove rada i kriterijume prihvatanja
- `AGENTS-Implementation.md` za ograničenja isporuke i pravila repozitorijuma
- `README.md` za očekivanja trenutnog stanja
- `docs/Development.md` i `docs/Deployment.md` za kontekst validacije i isporuke

To znači da implementacioni plan ne mora da izmišlja sopstvenu logiku. Treba da prevede te slojeve u ograničen redosled isporuke.

## Kontrolna lista za pregled

Pre nego što prihvatite implementacioni plan, proverite:

1. Da li čuva korisnički tok rada iz specifikacije?
2. Da li održava vidljivim neophodna ograničenja proizvoda?
3. Da li uključuje rezervno ponašanje i ponašanje pri greškama?
4. Da li uključuje rad na dokumentaciji i verifikaciji, a ne samo zadatke u kodu?
5. Da li bi drugi saradnik mogao da implementira po ovom planu bez nagađanja o nameri proizvoda?

## Dalje čitanje

- `../spec-driven-content-program.md`
- `how-to-write-a-spec-that-ai-can-follow.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `../wiki/sr-Latn/spec-driven-development.md`
- `../blog/sr-Latn/spec-driven-development-in-let-books.md`
