#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parents[1]
CORPUS_PATH = ROOT_DIR / "docs" / "style-guide" / "localization" / "native-speaker-findings-corpus.json"


def load_findings() -> list[dict]:
    payload = json.loads(CORPUS_PATH.read_text(encoding="utf-8"))
    return payload.get("findings", [])


def has_action(finding: dict, action: str) -> bool:
    return action in (finding.get("system_actions") or [])


def has_tag(finding: dict, tag: str) -> bool:
    return tag in (finding.get("recurrence_tags") or [])


def compute_summary(findings: list[dict]) -> dict:
    total = len(findings)
    fixed = sum(1 for finding in findings if has_action(finding, "fixed") or finding.get("status") == "fixed")
    intentionally_unresolved = sum(1 for finding in findings if finding.get("status") == "intentionally_unresolved")
    open_findings = total - fixed - intentionally_unresolved
    validator_backed = sum(1 for finding in findings if finding.get("validator_possible") and has_action(finding, "validator"))
    terminology_guidance = sum(1 for finding in findings if has_action(finding, "terminology") or bool(str(finding.get("terminology_guidance", "")).strip()))
    review_guidance = sum(1 for finding in findings if has_action(finding, "guidance") or bool(str(finding.get("review_guidance", "")).strip()))
    content_linked = sum(1 for finding in findings if finding.get("content_change_refs"))
    source_review_recommended = sum(
        1
        for finding in findings
        if isinstance(finding.get("source_review_recommendation"), dict)
        and finding["source_review_recommendation"].get("recommended")
    )

    recurrence = {
        "knownRejectedTerminology": sum(1 for finding in findings if has_tag(finding, "rejected_terminology")),
        "knownFalseFriends": sum(1 for finding in findings if has_tag(finding, "false_friend")),
        "knownLiteralTranslations": sum(1 for finding in findings if has_tag(finding, "literal_translation")),
        "knownTranslationesePatterns": sum(1 for finding in findings if has_tag(finding, "translationese_pattern")),
        "previouslyReportedNativeSpeakerDefects": sum(1 for finding in findings if has_tag(finding, "previously_reported_defect")),
    }

    return {
        "metrics": {
            "totalFindings": total,
            "fixedFindings": fixed,
            "openFindings": open_findings,
            "intentionallyUnresolvedFindings": intentionally_unresolved,
            "validatorBackedFindings": validator_backed,
            "findingsConvertedIntoTerminologyGuidance": terminology_guidance,
            "findingsConvertedIntoReviewGuidance": review_guidance,
            "findingsLinkedToContentChanges": content_linked,
            "sourceEnglishReviewRecommendations": source_review_recommended,
        },
        "recurrenceCoverage": recurrence,
    }


def render_markdown(summary: dict) -> str:
    metrics = summary["metrics"]
    recurrence = summary["recurrenceCoverage"]

    lines = ["# Native-Speaker Findings Summary", ""]
    lines.append("## Metrics")
    lines.append("")
    lines.append(f"- total findings: {metrics['totalFindings']}")
    lines.append(f"- fixed findings: {metrics['fixedFindings']}")
    lines.append(f"- open findings: {metrics['openFindings']}")
    lines.append(f"- intentionally unresolved findings: {metrics['intentionallyUnresolvedFindings']}")
    lines.append(f"- validator-backed findings: {metrics['validatorBackedFindings']}")
    lines.append(f"- findings converted into terminology guidance: {metrics['findingsConvertedIntoTerminologyGuidance']}")
    lines.append(f"- findings converted into review guidance: {metrics['findingsConvertedIntoReviewGuidance']}")
    lines.append(f"- findings linked to content changes: {metrics['findingsLinkedToContentChanges']}")
    lines.append(f"- source-English review recommendations: {metrics['sourceEnglishReviewRecommendations']}")
    lines.append("")
    lines.append("## Recurrence Coverage")
    lines.append("")
    lines.append(f"- known rejected terminology: {recurrence['knownRejectedTerminology']}")
    lines.append(f"- known false friends: {recurrence['knownFalseFriends']}")
    lines.append(f"- known literal translations: {recurrence['knownLiteralTranslations']}")
    lines.append(f"- known translationese patterns: {recurrence['knownTranslationesePatterns']}")
    lines.append(f"- previously reported native-speaker defects: {recurrence['previouslyReportedNativeSpeakerDefects']}")
    lines.append("")
    return "\n".join(lines)


def main() -> int:
    parser = argparse.ArgumentParser(description="Summarize the native-speaker findings corpus.")
    parser.add_argument("--json-out", help="Write JSON summary")
    parser.add_argument("--markdown-out", help="Write Markdown summary")
    args = parser.parse_args()

    summary = compute_summary(load_findings())
    markdown = render_markdown(summary)
    print(markdown)

    if args.json_out:
        Path(args.json_out).write_text(json.dumps(summary, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    if args.markdown_out:
        Path(args.markdown_out).write_text(markdown + "\n", encoding="utf-8")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
