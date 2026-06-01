---
title: "Unicode and Script Correctness"
summary: >-
  Unicode fidelity and script correctness are core localization requirements, especially for Slovenian, Albanian, Macedonian, and Serbian locale support.
topics:
  - unicode
  - localization
  - smaller-languages
---
# Unicode and Script Correctness

## Summary

Unicode fidelity and script correctness are core localization requirements, especially for Slovenian, Albanian, Macedonian, and Serbian locale support.

## Core rules

- do not replace native characters with ASCII approximations
- do not auto-convert Serbian Latin and Serbian Cyrillic casually
- do not treat Macedonian Cyrillic as interchangeable with Serbian or Bulgarian
- verify font coverage for supported scripts

## Related Pages

- `language-support-matrix.md`
- `multilingual-accessibility.md`
- `../blog/en/preserving-smaller-languages-in-the-digital-age.md`
