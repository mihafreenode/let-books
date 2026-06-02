---
title: "Allineamento tra demo e specifica"
summary: "Perché le demo sono prove utili dello stato dell'implementazione ma non dovrebbero sostituire silenziosamente le specifiche come fonte principale di verità del prodotto."
topic_category: spec-driven-development
topics:
  - demo-alignment
  - spec-driven-development
  - validation
related:
  blog:
    - when-the-demo-is-evidence-and-when-it-is-not
  learning:
    - how-to-keep-spec-docs-demo-and-code-aligned
  wiki:
    - demo-spec-alignment
---

# Allineamento tra demo e specifica

Una demo mostra ciò che esiste attualmente. Una specifica descrive ciò che il prodotto dovrebbe essere. Le due cose sono collegate, ma non sono intercambiabili.

I team spesso trattano una demo funzionante come l'artefatto più persuasivo di un progetto, e per buone ragioni. Una demo rende concreto il comportamento. Espone lacune di workflow, problemi di usabilità e scelte di implementazione che resterebbero astratti in un documento. Ma una demo è anche una prova incompleta. È plasmata da tutto ciò che è stato costruito finora, comprese scorciatoie, esperimenti e omissioni temporanee.

Allineamento con la specifica significa tenere questi due livelli in dialogo. Se la demo diverge dalla specifica, o l'implementazione ha bisogno di correzione oppure la specifica ha bisogno di revisione. Ciò che non dovrebbe accadere è la deriva silenziosa, in cui la demo diventa la nuova verità semplicemente perché esiste in una forma più visibile.

Questo conta soprattutto nei progetti che si muovono rapidamente. Un workflow assistito dall'IA può generare interfacce e comportamenti più velocemente di quanto venga aggiornata la documentazione circostante. Senza un'abitudine esplicita di allineamento, i collaboratori possono iniziare a seguire semplicemente ciò che la demo corrente mostra in quel momento.

Let Books usa questa distinzione con attenzione. Il repository contiene già una demo statica pubblica, specifiche di prodotto di alto livello, linee guida di implementazione e documentazione localizzata. La demo è preziosa perché rende tangibili i workflow di stoccaggio, QR e metadati. Non è sufficiente da sola per ridefinire regole di workflow che sono ancora specificate altrove. L'articolo del blog [Quando la demo è una prova e quando non lo è](/docs/blog/it/when-the-demo-is-evidence-and-when-it-is-not.html) esplora direttamente questa tensione.

La regola pratica è semplice: una demo è una prova di implementazione, non un'autorità automatica di prodotto. L'allineamento richiede di confrontare insieme demo, specifiche, documentazione e risultati di validazione invece di lasciare che uno qualunque di essi domini per caso.
