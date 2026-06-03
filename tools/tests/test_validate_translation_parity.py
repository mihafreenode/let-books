#!/usr/bin/env python3

from __future__ import annotations

import unittest
from pathlib import Path

from localization_alignment import load_document
from validate_translation_parity import native_speaker_regressions, native_speaker_regressions_for_block


ROOT_DIR = Path(__file__).resolve().parents[2]


class ValidateTranslationParityTests(unittest.TestCase):
    def test_known_native_speaker_regression_is_reported(self) -> None:
        target_path = ROOT_DIR / "docs" / "blog" / "sl" / "ai-will-not-replace-translators.md"
        regressions = native_speaker_regressions(
            "sl",
            target_path,
            "Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti.",
        )

        self.assertEqual(len(regressions), 1)
        self.assertEqual(regressions[0]["severity"], "error")
        self.assertEqual(regressions[0]["category"], "known native-speaker regression")
        self.assertIn("sl-modality-policy-001", regressions[0]["message"])

    def test_unrelated_file_does_not_inherit_file_scoped_finding(self) -> None:
        other_target = ROOT_DIR / "docs" / "blog" / "sl" / "documentation-is-part-of-the-product.md"
        regressions = native_speaker_regressions(
            "sl",
            other_target,
            "Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti.",
        )

        self.assertEqual(regressions, [])

    def test_intentional_review_example_is_not_treated_as_regression(self) -> None:
        source_doc = load_document(ROOT_DIR / "docs" / "blog" / "en" / "ai-will-not-replace-translators.md")
        target_doc = load_document(ROOT_DIR / "docs" / "blog" / "sl" / "ai-will-not-replace-translators.md")

        source_block = next(block for block in source_doc.blocks if block.text.strip() == "Original AI draft:")
        target_block = next(block for block in target_doc.blocks if block.text.strip() == "Izvorni AI-osnutek:")

        regressions = native_speaker_regressions_for_block(
            "sl",
            ROOT_DIR / "docs" / "blog" / "sl" / "ai-will-not-replace-translators.md",
            source_block,
            target_block,
        )

        self.assertEqual(regressions, [])


if __name__ == "__main__":
    unittest.main()
