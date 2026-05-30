---
title: "Kako ohraniti usklajenost med specifikacijo, dokumentacijo, demom in kodo"
topics:
  - demo-alignment
  - documentation
  - spec-driven-development
---
# Kako ohraniti usklajenost med specifikacijo, dokumentacijo, demom in kodo

## Povzetek

Ta vodič opisuje praktičen postopek za ohranjanje usklajenosti med produktno specifikacijo, dokumentacijo, demom in implementacijo skozi čas.

## Priporočen vrstni red avtoritete

1. produktna specifikacija
2. implementacijska navodila
3. dokumentacija trenutnega stanja
4. demo ali vedenje aplikacije
5. testi in validacija

## Priporočen delovni tok

- najprej posodobi specifikacijo ali navodila
- nato posodobi dokumentacijo trenutnega stanja
- šele nato spremeni demo ali kodo
- dodaj preverjanje ali teste, kjer je mogoče

## Kaj storiti, ko demo pokaže boljšo rešitev

Če demo pokaže boljši tok, to ni razlog, da postane nov vir resnice brez zapisa. Najprej sprejmi odločitev, nato posodobi specifikacijo in dokumentacijo, nato utrdi spremembo v implementaciji.

## Ključno pravilo

Ne preverjaj le, ali sprememba deluje. Preverjaj tudi, ali je še vedno skladna z dokumentiranim namenom izdelka.
