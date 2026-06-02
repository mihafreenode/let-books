#!/usr/bin/env python3

from __future__ import annotations

import unittest
from pathlib import Path

from localization_alignment import align_blocks, load_document


ROOT_DIR = Path(__file__).resolve().parents[2]


class LocalizationAlignmentTests(unittest.TestCase):
    def test_ai_will_not_replace_translators_rejects_wrong_heading_matches(self) -> None:
        source_doc = load_document(ROOT_DIR / "docs/blog/en/ai-will-not-replace-translators.md")
        target_doc = load_document(ROOT_DIR / "docs/blog/sl/ai-will-not-replace-translators.md")

        matches = {match.source_block_id: match for match in align_blocks(source_doc.blocks, target_doc.blocks, {})}

        technical_heading = matches[
            "ai-will-not-replace-translators/one-example-per-review-category/technical-terminology-false-friend-heading-technical-terminology-false-friend-eb4e5610-1"
        ]
        durable_heading = matches["ai-will-not-replace-translators/durable-takeaway-heading-durable-takeaway-2728ce84-1"]
        related_heading = matches["ai-will-not-replace-translators/related-pages-heading-related-pages-6fb705c8-1"]

        self.assertNotEqual(
            technical_heading.target_block_id,
            "ai-ne-bo-nadomestila-prevajalcev/trajna-ugotovitev-heading-trajna-ugotovitev-dc5833e3-1",
        )
        self.assertEqual(
            technical_heading.target_block_id,
            "ai-ne-bo-nadomestila-prevajalcev/en-primer-za-vsako-vrsto-pregleda/tehnični-termin-in-lažni-prijatelj-heading-tehnični-termin-in-lažni-prijatelj-379f2d18-1",
        )

        self.assertNotEqual(
            durable_heading.target_block_id,
            "ai-ne-bo-nadomestila-prevajalcev/sorodne-strani-heading-sorodne-strani-de8beb6b-1",
        )
        self.assertEqual(
            durable_heading.target_block_id,
            "ai-ne-bo-nadomestila-prevajalcev/trajna-ugotovitev-heading-trajna-ugotovitev-dc5833e3-1",
        )

        self.assertNotEqual(
            related_heading.target_block_id,
            "ai-ne-bo-nadomestila-prevajalcev/drugi-jeziki-heading-drugi-jeziki-69d6ffb9-1",
        )
        self.assertEqual(
            related_heading.target_block_id,
            "ai-ne-bo-nadomestila-prevajalcev/sorodne-strani-heading-sorodne-strani-de8beb6b-1",
        )

    def test_ai_will_not_replace_translators_matches_parallel_structure(self) -> None:
        source_doc = load_document(ROOT_DIR / "docs/blog/en/ai-will-not-replace-translators.md")
        target_doc = load_document(ROOT_DIR / "docs/blog/sl/ai-will-not-replace-translators.md")

        matches = {match.source_block_id: match for match in align_blocks(source_doc.blocks, target_doc.blocks, {})}

        root_heading = matches["ai-will-not-replace-translators-heading-ai-will-not-replace-translators-94aa6017-1"]
        review_heading = matches[
            "ai-will-not-replace-translators/a-concrete-slovenian-review-example-heading-a-concrete-slovenian-review-example-624240ea-1"
        ]
        lesson_label = matches[
            "ai-will-not-replace-translators/one-example-per-review-category/source-text-optimization-for-localization-paragraph-lesson-546d0343-1"
        ]

        self.assertTrue(root_heading.target_block_id.startswith("ai-ne-bo-nadomestila-prevajalcev-heading-ai-ne-bo-nadomestila-prevajalcev-"))
        self.assertEqual(review_heading.strategy, "heading-structure")
        self.assertEqual(
            lesson_label.target_block_id,
            "ai-ne-bo-nadomestila-prevajalcev/en-primer-za-vsako-vrsto-pregleda/izboljšanje-izvornega-besedila-za-lokalizacijo-paragraph-nauk-8b4fda86-1",
        )
        self.assertEqual(lesson_label.strategy, "section-order")


if __name__ == "__main__":
    unittest.main()
