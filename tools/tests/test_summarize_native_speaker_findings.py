#!/usr/bin/env python3

from __future__ import annotations

import unittest

from summarize_native_speaker_findings import compute_summary, load_findings


class SummarizeNativeSpeakerFindingsTests(unittest.TestCase):
    def test_summary_reports_expected_metrics_shape(self) -> None:
        summary = compute_summary(load_findings())

        self.assertIn("metrics", summary)
        self.assertIn("recurrenceCoverage", summary)

        metrics = summary["metrics"]
        self.assertGreaterEqual(metrics["totalFindings"], 1)
        self.assertGreaterEqual(metrics["fixedFindings"], 1)
        self.assertEqual(metrics["findingsLinkedToContentChanges"], metrics["totalFindings"])

        recurrence = summary["recurrenceCoverage"]
        self.assertGreaterEqual(recurrence["knownFalseFriends"], 1)
        self.assertGreaterEqual(recurrence["knownLiteralTranslations"], 1)
        self.assertGreaterEqual(recurrence["knownTranslationesePatterns"], 1)


if __name__ == "__main__":
    unittest.main()
