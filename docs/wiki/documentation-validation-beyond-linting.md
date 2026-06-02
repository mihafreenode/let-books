---
title: "Documentation Validation Beyond Linting"
summary: "Why documentation quality requires multiple validation layers, including localization, accessibility, generated output, and print checks, rather than a single linting pass."
topics:
  - validation
  - documentation
  - localization
related:
  blog:
    - documentation-is-part-of-the-product
  learning:
    - how-to-add-validation-rules-and-ci-gates-in-stages
  wiki:
    - validation-layers
    - localization-ci-cd
---

# Documentation Validation Beyond Linting

Linting is useful, but it only covers part of documentation quality. It can catch formatting mistakes, syntax problems, or some classes of broken structure. It cannot on its own guarantee that generated pages are correct, that localized variants remain aligned, that navigation is consistent, or that printed output is readable.

That is why documentation quality should be treated as an engineering discipline with several validation layers. Different validators answer different questions.

- Link validation checks whether references still resolve.
- Localization validation checks whether reader-facing text remains translated and consistent.
- Parity validation checks whether important sections still exist across language variants.
- Accessibility checks examine headings, labels, and structural usability.
- Generated HTML validation checks whether source content became correct output.
- Print validation checks whether supported PDF and paper output remains usable.

This layered model matters even more in AI-assisted workflows. Content can be drafted quickly, regenerated quickly, and localized quickly. That makes feedback loops faster, but it also increases the risk of shipping polished-looking errors unless the pipeline tests more than surface formatting.

Topics are a good example. Once Topics became a first-class documentation type in LetBooks, they needed to inherit navigation, search indexing, sitemap generation, localization handling, generated-site validation, and print checks. A reduced-quality path would have created a new content surface with weaker guarantees than the rest of the platform.

The principle is straightforward: every new documentation type should inherit existing validation. That keeps the quality model scalable. Instead of inventing exceptions for each new section, the platform extends the same expectations to every reader-facing surface.

Documentation quality goes beyond linting because readers experience the entire system, not only the source files.
