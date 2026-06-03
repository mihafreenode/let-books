#!/usr/bin/env python3

from __future__ import annotations

import unittest
from pathlib import Path

from validate_language_quality import collect_line_warnings, collect_script_warnings, strip_frontmatter


ROOT_DIR = Path(__file__).resolve().parents[2]


class ValidateLanguageQualityTests(unittest.TestCase):
    def test_strip_frontmatter_preserves_line_numbers(self) -> None:
        text = "---\ntitle: Test\n---\nLine one\nLine two\n"
        stripped = strip_frontmatter(text)
        self.assertEqual(stripped.count("\n", 0, stripped.index("Line one")), 3)

    def test_french_spacing_before_colon_is_not_flagged(self) -> None:
        warnings = collect_line_warnings("fr", ROOT_DIR / "docs" / "blog" / "fr" / "sample.md", 1, "Titre : explication")
        self.assertEqual(warnings, [])

    def test_mixed_acronym_with_cyrillic_suffix_is_ignored(self) -> None:
        warnings = collect_script_warnings("sr-Cyrl", ROOT_DIR / "docs" / "blog" / "sr-Cyrl" / "sample.md", 1, "ISBNове су различите.")
        self.assertEqual(warnings, [])

    def test_true_mixed_script_token_is_reported(self) -> None:
        warnings = collect_script_warnings("sr-Cyrl", ROOT_DIR / "docs" / "blog" / "sr-Cyrl" / "sample.md", 1, "Ово је другорazredno решење.")
        self.assertEqual(len(warnings), 1)
        self.assertIn("mixed Latin/Cyrillic token", warnings[0]["message"])


if __name__ == "__main__":
    unittest.main()
