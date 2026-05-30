---
title: "Markdown U Razvoju Proizvoda"
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Markdown U Razvoju Proizvoda

## Sažetak

Markdown je praktičan format za pohranu namjere proizvoda, dokumentacije, vodiča i dokaza u obliku koji je pregledan, prenosiv, usporediv kroz diffove i lako povezan s validacijskim tijekovima rada.

## Zašto je Markdown važan

Markdown se često tretira kao praktičan format za pisanje. U radu vođenom specifikacijom korisniji je od toga.

Timovima daje lagan način da znanje o proizvodu ostane blizu repozitorija bez skrivanja u vlasničkim alatima ili teško preglednim dokumentima.

To je važno za:

- specifikacije
- implementacijske smjernice
- dokumentaciju trenutačnog stanja
- vodiče i wiki stranice
- mape izvora i bilješke o dokazima

## U čemu je Markdown dobar

Markdown dobro funkcionira kada sadržaj treba biti:

- čitljiv u sirovom obliku
- pod verzijskom kontrolom
- lak za pregled u diffovima
- poveziv među dokumentima
- prenosiv između okruženja

## Što Markdown ne radi sam od sebe

Markdown je koristan, ali sam po sebi ne osigurava ispravnost.

Ne može sam jamčiti:

- da je sadržaj aktualan
- da su tvrdnje dobro potkrijepljene izvorima
- da se implementacija podudara s dokumentacijom
- da pravila validacije ili CI-ja zaista rade

## Kontekst Let Books

Repozitorij Let Books već koristi Markdown za više slojeva memorije proizvoda, uključujući:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- područne README datoteke i vodiče
- mape izvora u `docs/sources/`
