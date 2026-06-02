---
title: "Conseils de mise en œuvre"
summary: >-
  Les conseils de mise en œuvre définissent la manière dont une équipe doit effectuer le travail dans le référentiel ou l'environnement de livraison actuel sans remplacer la spécification du produit elle-même.
topics:
  - implementation-planning
  - spec-driven-development
  - project-management
---
# Conseils de mise en œuvre

## Résumé

Les conseils de mise en œuvre définissent la manière dont une équipe doit effectuer le travail dans le référentiel ou l'environnement de livraison actuel sans remplacer la spécification du produit elle-même.

## Rôle

Les instructions de mise en œuvre se trouvent sous les spécifications du produit.

Il permet de répondre à des questions telles que :

- comment la dénomination publique devrait fonctionner
- comment les documents doivent être structurés
- quelles attentes en matière de vérification s'appliquent actuellement
- quelles règles spécifiques au référentiel les contributeurs doivent suivre
- où les règles tactiques devraient vivre à mesure que le projet évolue

## Différence par rapport aux spécifications du produit

Le cahier des charges définit ce qu'est le produit et ce qu'il doit réaliser.

Les directives de mise en œuvre définissent la manière dont les contributeurs doivent effectuer leur travail dans le contexte de livraison actuel.

Cette distinction est utile car toutes les règles du référentiel ne constituent pas une vérité sur le produit, et toutes les vérités sur le produit ne doivent pas être enfouies dans des notes tactiques.

## Exemples courants

Les conseils de mise en œuvre comprennent souvent :

- règles de dénomination et de marque
- règles de mise en œuvre de la documentation
- contraintes de site statique ou de démo
- attentes en matière de vérification
- règles d'édition ou de génération de code
- politiques de preuve pour l'écriture publique

Ces règles s'intègrent souvent bien dans les Markdown car elles doivent rester révisables, faciles à mettre à jour et proches du reste du contexte du référentiel.

## Pourquoi c'est important dans le travail assisté par l'IA

Les assistants IA suivent souvent les instructions concrètes les plus proches. Si les règles spécifiques au référentiel sont implicites, la sortie devient rapidement incohérente.

Les conseils de mise en œuvre rendent ces règles visibles sans polluer les spécifications du produit avec des détails tactiques.

En pratique, cela signifie qu'un fichier d'orientation Markdown peut effectuer deux tâches à la fois :

- expliquer le workflow à un contributeur humain
- orienter un agent IA vers les outils, séquences et contraintes préférés

## Let Books contexte

Au Let Books, `AGENTS-Implementation.md` est la couche de guidage tactique.

Il couvre des domaines tels que :

- dénomination publique
- règles de documentation
- site public et partage de documents
- métadonnées et règles SEO pour les pages statiques
- contraintes de démonstration statique
- règles de localisation et d'accessibilité
- règles de vérification
- politique de preuve du blog

Cela en fait le compagnon opérationnel des `AGENTS.md`, et non un substitut.

D'autres directives Markdown dans le dépôt renforcent le même schéma. Par exemple :

- `docs/android-debugging.md` dirige les choix de flux de travail de débogage tels que CDP les flux de travail d'attachement par rapport aux flux de travail de correctif source
- `docs/style-guide/publishing/ubuntu-tooling.md` documente les outils attendus pour la publication, la vérification, les captures d'écran, la vérification orthographique et le débogage de l'appareil

Ces documents sont lisibles comme des conseils humains, mais ils aident également les agents à choisir de meilleures actions au lieu de deviner à partir de valeurs par défaut génériques.

## Pages connexes

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../../learning/fr/how-to-turn-a-product-spec-into-an-implementation-plan.md`