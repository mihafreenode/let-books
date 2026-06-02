---
title: "Validation Layers"
summary: "How multiple validation stages reduce different classes of error across content, generated output, implementation, and release workflows."
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

# Validation Layers

Validation layers are separate checks that examine a system from different angles. One layer may verify syntax, another may verify structure, another may verify localization quality, and another may verify rendered output. No single validator can reliably catch every meaningful problem.

The layered approach matters because failures appear at different stages. A source document can be well formed but semantically weak. A generated HTML page can be structurally valid but still expose untranslated UI text. A demo can look correct on screen while printing badly. Each of those problems requires a different kind of check.

This is why mature documentation and software pipelines rarely rely on one linting step. They combine format validation, link checks, parity checks, accessibility checks, build verification, and output-specific review. The learning guide on [adding validation rules and CI gates in stages](/docs/learning/en/how-to-add-validation-rules-and-ci-gates-in-stages.html) describes how teams can adopt this gradually instead of trying to automate everything at once.

In LetBooks, validation layers already exist across localization review, generated HTML checks, cross-language comparisons, and site structure verification. Treating print output as a supported feature extends that same logic. If documentation is meant to work as PDF or paper, print behavior needs its own validation stage rather than being treated as an optional cosmetic concern.

The wiki page on [Validation Layers](/docs/wiki/en/validation-layers.html) covers the reference view. This topic page emphasizes the general principle: each new delivery path or documentation type should inherit the existing layers that already protect quality elsewhere.
