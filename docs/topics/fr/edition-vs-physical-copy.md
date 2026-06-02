---
title: "Édition vs exemplaire physique"
summary: "Pourquoi une édition bibliographique et un livre individuel stocké sont des entités liées mais ne devraient pas être traitées comme le même enregistrement."
topic_category: book-and-library-metadata
topics:
  - isbn-metadata
  - book-donation
  - library-systems
related:
  blog:
    - isbn-not-a-database
  wiki:
    - product-specification
---

# Édition vs exemplaire physique

Une édition est un concept bibliographique. Un exemplaire physique est un objet réel. Les deux sont liés, mais ils répondent à des questions différentes.

Une édition décrit la forme publiée d'un livre : titre, éditeur, année, langue, ISBN et autres métadonnées partagées. Un exemplaire physique décrit un objet réel en stockage ou en circulation : son état, ses marques de possession, son emplacement dans la boîte, ses photos, son statut de don et son historique de manipulation.

De nombreux problèmes de bibliothèque et d'inventaire viennent du fait d'écraser ces deux niveaux ensemble. Si un projet ne modélise que les éditions, il ne peut pas suivre de façon fiable quel exemplaire est endommagé, demandé, livré ou encore dans une boîte au sous-sol. S'il ne modélise que les exemplaires physiques, il peut dupliquer inutilement les métadonnées bibliographiques et rendre l'appariement plus difficile.

C'est pourquoi les systèmes modernes de gestion des livres traitent souvent l'édition et l'exemplaire comme des entités séparées mais liées. L'édition soutient l'identification et la découverte. L'exemplaire soutient la logistique et la prise de décision.

Cette distinction est centrale dans Let Books parce que le projet est construit autour de workflows réels de don et de récupération. Un donateur peut posséder cinq exemplaires du même manuel, chacun avec un état ou un lieu de stockage différent. Une bibliothèque peut n'en vouloir qu'un seul. Sans la séparation entre édition et exemplaire, ces workflows deviennent très vite confus.

L'article existant [ISBN n'est pas une base de données](/docs/blog/fr/isbn-not-a-database.html) renforce ce point sous l'angle de l'identifiant. Cette page thématique énonce directement le modèle : la similitude bibliographique n'efface pas la différence physique.
