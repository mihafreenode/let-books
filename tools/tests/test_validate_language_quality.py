#!/usr/bin/env python3

from __future__ import annotations

import unittest
from pathlib import Path

from validate_language_quality import collect_line_warnings, collect_script_warnings, make_script_stats, strip_frontmatter


ROOT_DIR = Path(__file__).resolve().parents[2]


class ValidateLanguageQualityTests(unittest.TestCase):
    def test_strip_frontmatter_preserves_line_numbers(self) -> None:
        # Warnings are only useful if they still point at the right source lines after frontmatter
        # stripping.
        text = "---\ntitle: Test\n---\nLine one\nLine two\n"
        stripped = strip_frontmatter(text)
        self.assertEqual(stripped.count("\n", 0, stripped.index("Line one")), 3)

    def test_french_spacing_before_colon_is_not_flagged(self) -> None:
        # Protect a known locale-specific typography exception so the punctuation stage stays low-noise.
        warnings = collect_line_warnings("fr", ROOT_DIR / "docs" / "blog" / "fr" / "sample.md", 1, "Titre : explication")
        self.assertEqual(warnings, [])

    def test_whole_latin_technical_term_in_cyrillic_locale_is_accepted(self) -> None:
        # Cyrillic locales routinely embed whole Latin technical terms; warning on them would bury
        # the higher-confidence mixed-script defects.
        warnings = collect_script_warnings(
            "sr-Cyrl",
            ROOT_DIR / "docs" / "blog" / "sr-Cyrl" / "sample.md",
            1,
            "Користимо Docker за изградњу окружења.",
            make_script_stats(),
        )
        self.assertEqual(warnings, [])

    def test_mixed_acronym_with_cyrillic_suffix_is_reported(self) -> None:
        # Accepting Latin acronyms must not hide the more important case where a Cyrillic suffix is
        # fused into the same lexical token.
        warnings = collect_script_warnings(
            "sr-Cyrl",
            ROOT_DIR / "docs" / "blog" / "sr-Cyrl" / "sample.md",
            1,
            "ISBNове су различите.",
            make_script_stats(),
        )
        self.assertEqual(len(warnings), 1)
        self.assertIn("mixed Latin/Cyrillic token", warnings[0]["message"])

    def test_true_mixed_script_token_is_reported(self) -> None:
        # This is the core script-consistency defect class: one ordinary word with broken script
        # boundaries inside it.
        warnings = collect_script_warnings(
            "sr-Cyrl",
            ROOT_DIR / "docs" / "blog" / "sr-Cyrl" / "sample.md",
            1,
            "Ово је другорazredno решење.",
            make_script_stats(),
        )
        self.assertEqual(len(warnings), 1)
        self.assertIn("mixed Latin/Cyrillic token", warnings[0]["message"])


if __name__ == "__main__":
    unittest.main()
