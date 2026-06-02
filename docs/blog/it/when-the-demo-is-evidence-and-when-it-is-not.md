---
article_id: when-the-demo-is-evidence-and-when-it-is-not
canonical_language: en
language_variants:
  - ../en/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sl/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../hr/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../bs/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sr-Latn/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sr-Cyrl/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../mk/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sq/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../de/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../it/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../fr/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../es/when-the-demo-is-evidence-and-when-it-is-not.md
title: Quando la demo è prova e quando non lo è
summary: Come usare demo e prototipi come prove utili di implementazione senza lasciarli diventare in silenzio la specifica di prodotto.
topics:
  - demo-alignment
  - spec-driven-development
  - product-review
  - documentation
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/blog/README.md
  - docs/sources/README.md
  - docs/style-guide/publishing/README.md
  - docs/style-guide/writing/README.md
  - docs/Development.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/en/when-the-demo-is-evidence-and-when-it-is-not.md
status: draft
---

# Quando la demo è prova e quando non lo è

Una demo è potente perché trasforma idee astratte in qualcosa a cui le persone possono reagire. Un flusso di lavoro che in una nota sembra ragionevole può mostrare subito attrito reale su un telefono o in un deposito.

Questo è il lato positivo delle demo.

Il lato pericoloso è che, una volta che un prototipo esiste, le persone iniziano spesso a trattarne il comportamento come verità di prodotto, che qualcuno abbia o meno preso ufficialmente quella decisione.

## Perché i prototipi diventano autorità accidentale

Le cose visibili sono persuasive. Uno schermo funzionante spesso ha più autorità informale di una regola scritta, anche quando quello schermo è stato costruito come esperimento.

È comprensibile. Le persone si fidano di ciò che possono vedere.

Ma nel lavoro di prodotto, soprattutto nel lavoro di prodotto assistito dall'IA, questo istinto può creare confusione.

La demo può mostrare:

- un modo rapido per testare un flusso
- un compromesso temporaneo
- un'implementazione locale semplificata
- un'interpretazione incompleta del prodotto previsto

Nulla di questo significa automaticamente che la demo debba ridefinire il prodotto.

## Quando la demo è una buona prova

La demo è una prova preziosa quando aiuta a rispondere a domande come:

- Il flusso risulta usabile?
- Il layout mobile supporta il compito reale?
- Il flusso di scansione o di inserimento è comprensibile?
- Gli utenti reagiscono positivamente o negativamente alla sequenza dei passaggi?

In questi casi la demo è prova di usabilità, fattibilità, sequenza dei passaggi e comunicazione.

Questo tipo di prova è estremamente utile.

## Quando la demo non è l'autorità

La demo non dovrebbe superare in silenzio la specifica di prodotto.

Non è la giusta autorità primaria per domande come:

- questo flusso è ufficialmente nell'ambito
- è una scorciatoia temporanea o un impegno di prodotto
- questo comportamento annulla una regola esistente
- la documentazione pubblica dovrebbe descriverlo come sistema obiettivo

Queste domande richiedono una decisione esplicita e un aggiornamento della documentazione.

## La regola di Let Books è un buon modello

Il repository contiene già una sana regola editoriale per questo. La scrittura pubblica dovrebbe trattare specifiche e documentazione come prova canonica, mentre la demo o il comportamento dell'app possono essere citati come stato di implementazione.

Questa regola conta perché impedisce una governance accidentale da parte del prototipo.

Se la demo statica rivela un flusso migliore per le scatole, un flusso mobile migliore o un'interazione di intake migliore, questo è prezioso. Ma quel flusso migliore dovrebbe diventare vera autorità solo dopo l'aggiornamento della specifica e della documentazione correlata.

## Perché questo conta ancora di più con l'IA

L'IA amplifica ciò che appare più concreto nel contesto attuale.

Se la cosa più concreta nel repository è una demo, gli assistenti e perfino i collaboratori umani possono copiarne il comportamento senza chiedersi se corrisponda al confine di prodotto previsto.

Questo può essere utile quando la demo è già allineata.
Può però diffondere rapidamente assunzioni temporanee quando non lo è.

Per questo i team hanno bisogno di un ordine visibile di autorità.

## Una catena pratica di autorità

Per un lavoro di questo tipo, un ordine utile è:

1. specifica di prodotto
2. linee guida di implementazione
3. documentazione dello stato attuale
4. demo o prototipo
5. test e validazione

La demo conta ancora. Semplicemente conta dentro un sistema documentato, invece di sostituirlo.

## Cosa fare quando la demo ti insegna qualcosa di nuovo

A volte il prototipo ha ragione e la specifica è sbagliata, incompleta o troppo astratta.

Questo non è un fallimento. È proprio uno dei motivi per cui si costruiscono demo.

La risposta giusta è:

1. registrare la scoperta
2. decidere se il nuovo comportamento debba diventare intenzionale
3. aggiornare specifica e documentazione
4. poi preservare l'allineamento anche in seguito

La risposta sbagliata è lasciare la documentazione invariata e sperare che tutti ricordino che la demo è ormai la vera fonte della verità.

## Perché questo dovrebbe interessare istituzioni e studenti

Le istituzioni devono sapere se stanno valutando un concetto, un prototipo o un modello di flusso di lavoro approvato.

Gli studenti devono imparare che i prototipi non si giustificano da soli. Una buona pratica del software include capire quando trattare l'implementazione come prova e quando come esperimento che attende ancora una decisione.

## La lezione durevole

Le demo sono preziose perché rendono testabili le idee di prodotto. Diventano pericolose quando diventano silenziosamente politica.

Il modello più sano è semplice: lasciare che le demo informino il prodotto, ma fare in modo che specifiche e documentazione registrino la decisione finale.

## Altre lingue

- [Shqip](../sq/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Deutsch](../de/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Slovenščina](../sl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Hrvatski](../hr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Bosanski](../bs/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Srpski (latinica)](../sr-Latn/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Српски (ћирилица)](../sr-Cyrl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Македонски](../mk/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Italiano](../it/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Français](../fr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Español](../es/when-the-demo-is-evidence-and-when-it-is-not.md)
