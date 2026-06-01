# Benchmark primeri za prevođenje pomoću LLM-a

## Sažetak

Ovaj vodič definiše mali strukturirani format za čuvanje pregledanih primera AI prevoda kao ponovo upotrebljivih benchmark primera.

## Svrha

Benchmark primeri omogućavaju projektu da ponovo koristi stvarne primere pregleda u:

- obuci recenzenata
- scorecardima kvaliteta
- člancima o lokalizaciji u većem obimu
- dokumentaciji toka rada sa čovekom u petlji
- LLM benchmark evaluacijama

## Preporučena polja primera

Svaki primer treba da uključi:

- `fixture_id`
- `source_language`
- `target_language`
- `content_type`
- `domain`
- `source_text`
- `ai_draft`
- `corrected_text`
- `issues`
- `scoring_rubric`
- `example_scorecard`
- `overall_lesson`
- `recommended_uses`

Svaki problem treba da uključi:

- `original_segment`
- `corrected_segment`
- `error_categories`
- `root_cause_hypothesis`
- `reviewer_rationale`

## Ponovo upotrebljiva taksonomija

Preporučene vrednosti za `error_categories`:

- `grammar`
- `modality`
- `terminology`
- `register`
- `fluency`
- `literal_translation`
- `ambiguity`
- `context_loss`
- `word_order`
- `collocation`
- `script_or_orthography`
- `domain_policy_phrasing`
- `accessibility_wording`

## Upotreba ocenjivanja

Primeri poput ovoga mogu da podrže internu evaluaciju sledećeg:

- da li AI nacrt može da se objavi bez izmena
- koje kategorije grešaka se najčešće pojavljuju po jeziku
- da li promptovi smanjuju ponavljajuće obrasce neuspeha
- koliko često pregled izvornog govornika menja jezik politika

## Lagana rubrika ocenjivanja

Koristite jednostavnu ocenu 0-3 za svaku dimenziju.

- `0`: unacceptable
- `1`: major problems
- `2`: usable with review edits
- `3`: strong / near-publishable

Preporučene dimenzije:

- `meaning_accuracy`
  Does the draft preserve the intended meaning?
- `grammar_and_fluency`
  Does it read as correct and natural target-language text?
- `terminology_and_domain_fit`
  Does it use the right terminology and domain phrasing?
- `register_and_style`
  Does the tone fit policy, product, educational, or accessibility context?
- `review_effort`
  How close is the draft to approval from a native-speaker reviewer?

## Oznake preporuka za izdanje

Nakon ocenjivanja dodelite jednu preporuku za izdanje:

- `blocker`
  Not suitable for publication or user exposure.
- `major_revision`
  Meaning may be close, but substantial rewriting is still needed.
- `minor_revision`
  Usable draft with targeted native-speaker edits.
- `ready_with_review_signoff`
  Suitable once normal reviewer signoff is complete.

## Smernice za ozbiljnost zapisa problema

Svaki problem može dodatno da bude označen nivoom ozbiljnosti:

- `critical`
  Changes meaning, policy intent, safety, or legal/compliance interpretation.
- `major`
  Strongly reduces native-speaker quality, domain accuracy, or usability.
- `minor`
  Mostly stylistic or local fluency issue.

## Kako koristiti rubriku

1. ocenite AI nacrt pre uređivanja
2. zabeležite kategorije i ozbiljnosti na nivou problema
3. napišite ispravljeni tekst
4. dodelite preporuku za izdanje
5. po potrebi zabeležite pouzdanost recenzenta

Ovo je namerno lakše od punog MQM programa. Namenjeno je praktičnoj ponovljenoj evaluaciji unutar open-source toka rada lokalizacije.

## Ideje za agregaciju scorecarda

Kroz više primera pratite:

- average score by dimension
- average score by language
- average score by content type
- most frequent issue categories
- share of drafts rated `minor_revision` or better
- share of drafts blocked by terminology or modality errors

## Predloženo proširenje primera

Svaki primer treba da uključi:

```json
{
  "scoring_rubric": {
    "scale": "0-3",
    "dimensions": [
      "meaning_accuracy",
      "grammar_and_fluency",
      "terminology_and_domain_fit",
      "register_and_style",
      "review_effort"
    ],
    "release_recommendations": [
      "blocker",
      "major_revision",
      "minor_revision",
      "ready_with_review_signoff"
    ]
  }
}
```

## Prvi primer

Prvi primer je slovenački primer AI pregleda modalnosti i terminologije:

- `../../samples/localization-benchmarks/slovenian-ai-review-modality-terminology.json`

## Povezane stranice

- `ai-translation-review-records.md`
- `review-workflow.md`
- `../../wiki/translation-quality-assurance.md`
