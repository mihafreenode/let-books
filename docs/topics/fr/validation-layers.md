---
title: "Couches de validation"
summary: "Comment plusieurs étapes de validation réduisent différentes classes d'erreur dans le contenu, la sortie générée, l'implémentation et les workflows de livraison."
topic_category: spec-driven-development
topics:
  - validation
  - product-quality
  - ci-cd
related:
  learning:
    - how-to-add-validation-rules-and-ci-gates-in-stages
  wiki:
    - validation-layers
    - localization-ci-cd
---

# Couches de validation

Les couches de validation sont des contrôles distincts qui examinent un système sous différents angles. Une couche peut vérifier la syntaxe, une autre la structure, une autre la qualité de la localisation et une autre encore la sortie rendue. Aucun validateur unique ne peut détecter de manière fiable tous les problèmes significatifs.

L'approche en couches compte parce que les défaillances apparaissent à différentes étapes. Un document source peut être bien formé mais sémantiquement faible. Une page HTML générée peut être structurellement valide tout en affichant encore un texte d'interface non traduit. Une démo peut sembler correcte à l'écran tout en s'imprimant mal. Chacun de ces problèmes exige un type de contrôle différent.

C'est pourquoi les pipelines de documentation et de logiciel matures s'appuient rarement sur une seule étape de linting. Ils combinent validation de format, contrôles de liens, contrôles de parité, contrôles d'accessibilité, vérification de build et relecture spécifique à la sortie. Le guide d'apprentissage sur [l'ajout progressif de règles de validation et de gates CI](/docs/learning/fr/how-to-add-validation-rules-and-ci-gates-in-stages.html) décrit comment les équipes peuvent adopter cela progressivement au lieu d'essayer de tout automatiser d'un seul coup.

Dans Let Books, des couches de validation existent déjà à travers la relecture de localisation, les contrôles d'HTML généré, les comparaisons interlangues et la vérification de la structure du site. Traiter la sortie imprimée comme une fonctionnalité prise en charge prolonge cette même logique. Si la documentation doit fonctionner en PDF ou sur papier, le comportement d'impression a besoin de sa propre étape de validation au lieu d'être traité comme une préoccupation cosmétique facultative.

La page wiki sur les [Couches de validation](/docs/wiki/fr/validation-layers.html) couvre la vue de référence. Cette page thématique insiste sur le principe général : chaque nouveau canal de livraison ou type de documentation doit hériter des couches existantes qui protègent déjà la qualité ailleurs.
