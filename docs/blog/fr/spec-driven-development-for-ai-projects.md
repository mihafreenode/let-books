---
article_id: spec-driven-development-for-ai-projects
canonical_language: en
language_variants:
  - ../en/spec-driven-development-for-ai-projects.md
  - ../sl/spec-driven-development-for-ai-projects.md
  - ../hr/spec-driven-development-for-ai-projects.md
  - ../bs/spec-driven-development-for-ai-projects.md
  - ../sr-Latn/spec-driven-development-for-ai-projects.md
  - ../sr-Cyrl/spec-driven-development-for-ai-projects.md
  - ../mk/spec-driven-development-for-ai-projects.md
  - ../sq/spec-driven-development-for-ai-projects.md
  - ../de/spec-driven-development-for-ai-projects.md
  - ../it/spec-driven-development-for-ai-projects.md
  - ../fr/spec-driven-development-for-ai-projects.md
  - ../es/spec-driven-development-for-ai-projects.md
title: Développement guidé par les spécifications pour les projets d'IA
summary: Pourquoi le développement assisté par l'IA a besoin de spécifications plus fortes, d'une documentation plus claire et de règles explicites de vérification plutôt que d'un processus plus lâche.
topics:
  - spec-driven-development
  - ai-assisted-delivery
  - documentation
  - validation
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/Development.md
  - docs/Deployment.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/en/spec-driven-development-for-ai-projects.md
status: draft
---

# Développement guidé par les spécifications pour les projets d'IA

L'IA rend beaucoup plus facile la production rapide de code. Elle rend tout aussi facile la production rapide du mauvais code. C'est précisément pour cela que le développement guidé par les spécifications est plus important, et non moins important, dans les projets assistés par l'IA.

Lorsqu'une équipe développe sans spécification claire, le produit dérive avec le temps loin de son objectif. Quand l'IA participe au processus, cette dérive peut apparaître en un seul après-midi. Le code peut compiler, l'interface peut sembler soignée et les tests peuvent même passer. Le produit peut pourtant rester mauvais.

## Pourquoi l'IA change le profil de risque

L'IA accélère le rythme de l'interprétation. Un seul prompt peut produire l'architecture, le texte, la validation, le nommage et le flux utilisateur. C'est utile, mais dangereux lorsque la source de vérité n'est pas assez claire.

En pratique, l'IA optimise souvent ce qui est le plus visible à l'instant donné :

- le dernier prompt
- le fichier le plus proche
- le chemin d'implémentation le plus facile
- le modèle générique le plus connu

Rien de tout cela ne signifie automatiquement la bonne décision produit.

Ce sont des raccourcis utiles pour la génération. Mais ils ne remplacent pas le jugement produit.

## Ce qu'apporte une bonne spécification

Une bonne spécification remplit au moins quatre fonctions :

- elle définit le but
- elle fixe des limites
- elle établit le standard de revue
- elle sert de mémoire à l'équipe

Premièrement, elle définit le but. L'équipe peut voir si une fonctionnalité soutient le produit réel ou se contente d'ajouter de la sortie.

Deuxièmement, elle définit des limites. Elle clarifie ce qui est dans le périmètre, ce qui est hors périmètre, ce qui est optionnel et ce qui doit fonctionner même lorsque les systèmes optionnels échouent.

Troisièmement, elle définit la norme de revue. Au lieu de demander seulement si un changement fonctionne techniquement, les relecteurs peuvent demander s'il correspond au flux de travail prévu et aux engagements produit.

Quatrièmement, elle agit comme mémoire. Les systèmes d'IA ne conservent pas d'eux-mêmes une mémoire institutionnelle stable. Une spécification dans le dépôt, oui.

Cela est très clair dans Let Books. `AGENTS.md` rappelle plusieurs fois que le flux manuel doit rester utile même sans services d'IA payants et que les exemplaires physiques ne sont pas la même chose que les notices bibliographiques. Ce ne sont pas des détails techniques, mais des limites produit.

Ce ne sont pas des détails d'implémentation. Ce sont des frontières produit. Si un assistant IA génère un flux qui bloque la saisie manuelle ou mélange les données d'exemplaire physique avec les métadonnées d'édition, le problème n'est pas le style. Le problème est la dérive produit.

## Pourquoi la documentation ne doit pas attendre

Si la documentation est ancienne ou floue, des personnes et des outils différents déduiront des produits différents à partir du même dépôt. L'un suivra la démo, un autre un ancien README, un autre encore le fichier le plus proche.

Sans documentation à jour :

- les prompts deviennent incohérents
- la revue devient subjective
- les démos commencent à redéfinir le produit par accident
- les futurs contributeurs héritent de comportements sans savoir s'ils étaient intentionnels

La documentation n'est donc pas seulement une explication après coup. Elle fait partie du système d'exploitation du projet. Dans ce dépôt, `README.md` décrit l'état actuel, `AGENTS.md` l'intention produit, `AGENTS-Implementation.md` les règles tactiques, et `docs/` les règles de publication et de preuve.

## Le rôle des démos

Une démo est utile parce qu'elle montre ce qui existe et révèle les problèmes du flux utilisateur. Mais elle ne devrait pas devenir silencieusement la spécification produit.

Les règles du dépôt distinguent déjà les spécifications et la documentation canoniques d'un côté, et le statut d'implémentation de l'autre. Si une démo révèle un meilleur flux, il faut mettre à jour la spécification et la documentation, au lieu de laisser la démo gagner seule.

Si une démo révèle un meilleur flux de travail, la bonne réponse n'est pas de la laisser gagner en silence. La bonne réponse est de mettre à jour la spécification, la documentation et la norme de revue afin que ce meilleur flux devienne intentionnel.

## Markdown, tests et CI forment une chaîne

Dans un développement guidé par les spécifications, ces couches ne tiennent pas séparément.

- Markdown stocke l'intention dans une forme révisable.
- La documentation explique comment l'interpréter.
- Les tests vérifient des attentes exécutables.
- Les règles de validation repèrent la dérive structurelle.
- La CI applique régulièrement les règles.

Ensemble, elles créent une mémoire produit qui survit à la vitesse de développement.

Chaque couche est incomplète à elle seule. Ensemble, elles créent une mémoire produit qui survit à la vitesse, à l'itération et aux changements d'équipe.

## Ce que cela signifie pour les équipes qui utilisent l'IA

Les équipes qui utilisent bien l'IA ne retirent pas le processus. Elles rapprochent le processus de la source de génération.

Concrètement, cela signifie souvent :

- rédiger des spécifications produit plus claires avant de demander l'implémentation
- garder des consignes d'implémentation explicites
- mettre à jour la documentation quand le comportement du produit change
- vérifier les démos par rapport aux spécifications au lieu de supposer la parité
- ajouter progressivement des règles de validation pour que la cohérence ne dépende pas seulement de la mémoire humaine

Ce n'est pas anti-IA. C'est ainsi que l'IA devient fiable.

## La leçon durable

L'IA peut produire rapidement du code, du contenu et des interfaces. À elle seule, elle ne peut pas garantir que toutes ces sorties décrivent encore le même produit.

Le développement guidé par les spécifications est la manière dont une équipe évite que la vitesse ne se transforme en dérive.

Dans les projets assistés par l'IA, la spécification n'est pas de la paperasserie après coup. Elle est la frontière, la mémoire et la norme de revue qui rendent une livraison rapide digne de confiance.

## Lectures liées

- `../../wiki/spec-driven-development.md`
- `../../wiki/validation-layers.md`
- `ai-as-an-oracle.md`
- `spec-driven-development-in-let-books.md`

## Autres langues

- [English](../en/spec-driven-development-for-ai-projects.md)
- [Shqip](../sq/spec-driven-development-for-ai-projects.md)
- [Deutsch](../de/spec-driven-development-for-ai-projects.md)
- [Italiano](../it/spec-driven-development-for-ai-projects.md)
- [Slovenščina](../sl/spec-driven-development-for-ai-projects.md)
- [Hrvatski](../hr/spec-driven-development-for-ai-projects.md)
- [Bosanski](../bs/spec-driven-development-for-ai-projects.md)
- [Srpski (latinica)](../sr-Latn/spec-driven-development-for-ai-projects.md)
- [Српски (ћирилица)](../sr-Cyrl/spec-driven-development-for-ai-projects.md)
- [Македонски](../mk/spec-driven-development-for-ai-projects.md)
- [Español](../es/spec-driven-development-for-ai-projects.md)
