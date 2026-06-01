---
title: "Unicode et exactitude du script"
summary: >-
  La fidélité Unicode et l'exactitude du script sont des exigences essentielles en matière de localisation, en particulier pour la prise en charge des paramètres régionaux slovène, albanais, macédonien et serbe.
topics:
  - unicode
  - localization
  - smaller-languages
---
# Unicode et exactitude du script

## Résumé

La fidélité Unicode et l'exactitude du script sont des exigences essentielles en matière de localisation, en particulier pour la prise en charge des paramètres régionaux slovène, albanais, macédonien et serbe.

## Règles de base

- ne remplacez pas les caractères natifs par des approximations ASCII
- ne convertissez pas automatiquement le latin serbe et le cyrillique serbe avec désinvolture
- ne traitez pas le cyrillique macédonien comme interchangeable avec le serbe ou le bulgare
- vérifier la couverture des polices pour les scripts pris en charge

## Pages connexes

- `language-support-matrix.md`
- `multilingual-accessibility.md`
- `../blog/en/preserving-smaller-languages-in-the-digital-age.md`
