---
title: "Markdown U Razvoju Proizvoda"
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Markdown U Razvoju Proizvoda

## Sažetak

Markdown je praktičan format za čuvanje namere proizvoda, dokumentacije, vodiča i dokaza u obliku koji je pregledan, prenosiv, uporediv kroz diffove i lako povezan sa validacionim tokovima rada.

## Zašto je Markdown važan

Markdown se često tretira kao praktičan format za pisanje. U radu vođenom specifikacijom korisniji je od toga.

Timovima daje lak način da znanje o proizvodu ostane blizu repozitorijuma bez skrivanja u vlasničkim alatima ili teško preglednim dokumentima.

To je važno za:

- specifikacije
- implementaciona uputstva
- dokumentaciju trenutnog stanja
- vodiče i wiki stranice
- mape izvora i beleške o dokazima

## U čemu je Markdown dobar

Markdown dobro funkcioniše kada sadržaj treba da bude:

- čitljiv u sirovom obliku
- pod kontrolom verzija
- lak za pregled u diffovima
- poveziv među dokumentima
- prenosiv između okruženja

## Šta Markdown ne radi sam od sebe

Markdown je koristan, ali sam po sebi ne obezbeđuje ispravnost.

Ne može sam da garantuje:

- da je sadržaj aktuelan
- da su tvrdnje dobro potkrepljene izvorima
- da se implementacija podudara sa dokumentacijom
- da pravila validacije ili CI-ja zaista rade

## Kontekst Let Books

Repozitorijum Let Books već koristi Markdown za više slojeva memorije proizvoda, uključujući:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- područne README datoteke i vodiče
- mape izvora u `docs/sources/`
