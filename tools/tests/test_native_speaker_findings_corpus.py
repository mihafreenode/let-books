#!/usr/bin/env python3

from __future__ import annotations

import json
import unittest
from pathlib import Path

from validate_translation_parity import validate_native_speaker_findings_corpus


ROOT_DIR = Path(__file__).resolve().parents[2]
CORPUS_PATH = ROOT_DIR / "docs" / "style-guide" / "localization" / "native-speaker-findings-corpus.json"
REQUIRED_FIELDS = {
    "id",
    "language",
    "category",
    "source_text",
    "localized_text",
    "preferred_localized_text",
    "explanation",
    "status",
    "validator_possible",
    "related_files",
    "date_added",
}


class NativeSpeakerFindingsCorpusTests(unittest.TestCase):
    def test_corpus_has_required_fields(self) -> None:
        payload = json.loads(CORPUS_PATH.read_text(encoding="utf-8"))
        self.assertIn("findings", payload)
        self.assertIsInstance(payload["findings"], list)
        self.assertGreater(len(payload["findings"]), 0)

        for finding in payload["findings"]:
            self.assertTrue(REQUIRED_FIELDS.issubset(finding.keys()), finding.get("id", "missing-id"))
            self.assertIsInstance(finding["related_files"], list)
            self.assertIsInstance(finding["validator_possible"], bool)
            if finding["status"] == "intentionally_unresolved":
                self.assertTrue(str(finding.get("unresolved_justification", "")).strip(), finding["id"])
            if finding["validator_possible"]:
                self.assertIn("validator", finding.get("system_actions", []), finding["id"])

    def test_corpus_passes_validator_checks(self) -> None:
        self.assertEqual(validate_native_speaker_findings_corpus(), [])


if __name__ == "__main__":
    unittest.main()
