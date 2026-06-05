# Translation Style Guide

## Summary

This guide defines baseline translation expectations for Let Books knowledge content.

## Rules

- preserve meaning before polish
- prefer clear and teachable wording
- keep terminology stable across related pages
- preserve native orthography and Unicode characters
- do not silently simplify script-specific distinctions

## AI-assisted review notes

- do not approve a draft only because the general meaning is understandable
- review relevant native-speaker findings before translating, updating, reviewing, or signing off localized content
- review relevant terminology guidance and localization review rules before signoff
- explicitly consider whether known defect classes apply to the content being changed
- review modal constructions carefully because they are often translated too literally
- review policy and product-spec language for domain-appropriate register
- recheck previously rejected wording patterns before marking a translation complete
- explain which findings influenced translation decisions when writing a review summary
- record representative before-and-after examples for future training and QA reference
- if a sentence sounds translated from English, rewrite it instead of preserving the source structure
- prefer natural Slovenian technical writing over literal English rhetorical phrasing, even when the literal wording is grammatically correct
- do not translate management, startup, or AI-community jargon word-for-word when a Slovenian engineer would naturally express the idea differently

## Example categories to watch

- grammar
- modality
- terminology
- register
- literal translation
- context loss

## Slovenian Engineering Translation Patterns To Avoid

When translating technical content into Slovenian, prioritize meaning, clarity, and natural Slovenian technical writing over literal fidelity to English wording.

Concrete patterns to avoid:

- `working engineer` translated literally as `delujoči inženir`
  Preferred direction: `z inženirskega vidika`, `z vidika inženirja`, or a natural sentence rewrite
- `practical oracle` translated literally as `praktični orakelj`
  Preferred direction: rewrite the sentence so it says that the model `v praksi deluje kot orakelj`
- `productivity theater` translated literally as `gledališče produktivnosti`
  Preferred direction: rewrite the sentence to express the intended meaning such as speed, visible output, or the feeling of productivity
- `non-negotiable constraints` translated literally as `nepogajalske omejitve`
  Preferred direction: `ključne omejitve`, `zahteve, od katerih ni mogoče odstopati`, or another natural formulation that expresses binding constraints

General review rule:

- if an English metaphor, idiom, management phrase, or rhetorical flourish sounds unnatural in Slovenian, simplify or rewrite it
- preserve technical meaning, but do not preserve awkward English phrasing
