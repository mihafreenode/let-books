---
title: "Metapodatki o knjigi"
summary: "Kako opisni podatki o knjigi podpirajo odkrivanje, pregled in odločitve o donacijah ter zakaj so metapodatki širši od katerega koli posameznega identifikatorja."
topic_category: book-and-library-metadata
topics:
  - isbn-metadata
  - library-systems
  - documentation
related:
  blog:
    - isbn-not-a-database
  wiki:
    - product-specification
---

# Metapodatki o knjigi

Metapodatki o knjigi so opisne informacije, ki se uporabljajo za identifikacijo, organizacijo in vrednotenje knjige. Pogosta polja vključujejo naslov, podnaslov, avtorja, založnika, leto izdaje, jezik, izdajo, ISBN in predmetne podatke. V knjižničnih in kataložnih kontekstih lahko metapodatki vključujejo tudi normativne sklice, zunanje identifikatorje, povzetke in podatke o provenienci.

Metapodatki so pomembni, ker uporabniki redko sprejemajo odločitve zgolj na podlagi identifikatorjev. Knjižnice potrebujejo dovolj informacij za presojo relevantnosti. Darovalci potrebujejo dovolj informacij, da razumejo, kaj imajo. Pregledovalci potrebujejo dovolj informacij, da fizični izvod povežejo s pravim bibliografskim zapisom. Dobri metapodatki te odločitve naredijo hitrejše in manj dvoumne.

Nobeno posamezno polje samo po sebi ne zadošča. ISBN je uporaben, vendar nepopoln. Naslovi se lahko razlikujejo v črkovanju ali prevodu. Imena avtorjev se lahko pojavijo v različnih oblikah. Datumi izdaje so lahko pri starejšem gradivu nejasni. Zato robustni poteki dela z metapodatki običajno združujejo več polj in ohranjajo vir vsake vrednosti.

V Let Books so metapodatki povezani tudi z razliko med bibliografskimi zapisi in fizičnimi izvodi. Fizični izvod lahko podeduje metapodatke na ravni izdaje, hkrati pa ima svoje stanje, lokacijo shranjevanja in status v poteku dela. Ločena tematska stran o [izdaji v primerjavi s fizičnim izvodom](/docs/topics/sl/edition-vs-physical-copy.html) ta model razloži neposredno.

Za praktičen primer, kako se iskanje na osnovi ISBN umešča v širši proces metapodatkov, glej temo [ISBN](/docs/topics/sl/isbn.html), blog članek [ISBN ni baza podatkov](/docs/blog/sl/isbn-not-a-database.html) in repozitorijsko opombo v `docs/book-metadata.md`, ki opisuje trenutno verigo iskanja, uporabljeno v alfa demu.
