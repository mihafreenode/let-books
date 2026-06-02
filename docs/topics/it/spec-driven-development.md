---
title: "Sviluppo guidato dalle specifiche"
summary: "Perché le specifiche agiscono come modello operativo pratico per implementazione, revisione e comunicazione invece che come una documentazione separata aggiunta in ritardo."
topic_category: spec-driven-development
topics:
  - spec-driven-development
  - documentation
  - product-specification
related:
  blog:
    - spec-driven-development-in-let-books
  learning:
    - how-to-write-a-spec-that-ai-can-follow
  wiki:
    - spec-driven-development
---

# Sviluppo guidato dalle specifiche

Lo sviluppo guidato dalle specifiche è un approccio in cui l'implementazione segue una descrizione esplicita del comportamento del prodotto, dei vincoli e dell'intento. La specifica non è solo un documento di requisiti. Diventa un punto di riferimento condiviso per sviluppatori, revisori, manutentori e stakeholder.

In pratica, una buona specifica spiega che cosa un sistema dovrebbe fare, che cosa non dovrebbe fare, quali regole di qualità si applicano e come verrà giudicato il successo. Questo la rende diversa da un elemento di backlog, una demo o uno schizzo architetturale. Questi artefatti possono essere utili, ma raramente portano lo stesso livello di intento durevole.

Il valore del lavoro guidato dalle specifiche non è teorico. Riduce l'ambiguità. Quando più persone toccano la stessa funzionalità nel tempo, o quando un assistente IA genera parte dell'implementazione, la specifica limita la deriva rendendo visibile il risultato atteso prima che si accumulino decisioni di codifica.

Questo approccio non richiede un processo waterfall rigido. Le specifiche possono evolvere. Possono essere piccole o grandi. Ciò che conta è che l'implementazione possa essere verificata rispetto a qualcosa di più stabile della memoria o dell'abitudine. Per questo il lavoro guidato dalle specifiche è strettamente collegato ai [livelli di validazione](/docs/topics/it/validation-layers.html), alla [tracciabilità della documentazione](/docs/topics/it/documentation-traceability.html) e al workflow discusso nella guida di learning su [trasformare una specifica di prodotto in un piano di implementazione](/docs/learning/it/how-to-turn-a-product-spec-into-an-implementation-plan.html).

In Let Books, lo sviluppo guidato dalle specifiche è particolarmente utile perché il progetto abbraccia progettazione del prodotto, documentazione multilingue, logistica di stoccaggio, gestione dei metadati e futuri workflow assistiti dall'IA. Un cambiamento in un'area può facilmente creare assunzioni in un'altra. La specifica del progetto in `AGENTS.md`, il materiale di riferimento nel wiki e il materiale guidato di implementazione nelle pagine di learning lavorano insieme per ridurre questo rischio.

L'obiettivo non è la documentazione fine a se stessa. L'obiettivo è rendere l'implementazione più affidabile, la revisione più concreta e la manutenzione a lungo termine meno dipendente da contesto non scritto. Il relativo articolo del blog [Sviluppo guidato dalle specifiche in Let Books](/docs/blog/it/spec-driven-development-in-let-books.html) mostra come questo principio stia già plasmando il repository.
