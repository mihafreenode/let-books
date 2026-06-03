#!/usr/bin/env python3
"""
Purpose:
- Validate semantic and structural parity between English Markdown and localized Markdown.

Why:
- File presence does not protect against missing sections, English leakage, or damaged code
  and diagram examples.

Detects / Enforces:
- Enforces block presence, code and diagram preservation, localized metadata, and
  suspicious-English detection.

Examples:
- Localized file keeps the English summary.
- Code block or diagram block diverges from the source.

Limitations:
- Heuristic checks may still require human review for quotations or intentionally repeated
  source text.

Related:
- tools/README.md
- tools/localization_alignment.py
- tools/audit_translation_parity.py
"""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

from localization_alignment import align_blocks, load_document, load_sidecar, similarity


ROOT_DIR = Path(__file__).resolve().parents[1]
DOCS_DIR = ROOT_DIR / "docs"
NATIVE_SPEAKER_FINDINGS_PATH = ROOT_DIR / "docs" / "style-guide" / "localization" / "native-speaker-findings-corpus.json"
CONFIG = json.loads((ROOT_DIR / "tools" / "docs-config.json").read_text(encoding="utf-8"))
# Match ASCII word-like fragments that are likely to indicate untranslated English prose.
#
# Examples matched:
# - translation
# - product-quality
# - user's
#
# Representative non-matches:
# - ISBN
# - 2026
# - локализација
WORD_RE = re.compile(r"[A-Za-z][A-Za-z'-]*")
ENGLISH_MARKERS = {
    "a", "an", "and", "are", "as", "be", "because", "but", "by", "can", "do", "does", "for",
    "from", "how", "if", "in", "into", "is", "it", "its", "not", "of", "on", "or", "that",
    "the", "their", "then", "there", "these", "they", "this", "to", "use", "when", "which",
    "who", "why", "with", "without", "workflow", "review", "draft", "issue", "example", "policy",
    "translation", "localization", "quality", "meaning", "language", "languages", "product", "system",
}
INTENTIONAL_SOURCE_SNIPPET_HEADINGS = {
    # Some articles intentionally discuss source-language text or review examples. Treating
    # those headings as leakage would create noisy parity failures and obscure real missing
    # translation problems.
    "original ai draft",
    "corrected slovenian",
    "human-review feedback",
    "issue 1",
    "issue 2",
    "issue 3",
    "slovenian review case study",
    "one example per review category",
}


def load_native_speaker_findings() -> list[dict]:
    if not NATIVE_SPEAKER_FINDINGS_PATH.exists():
        return []
    payload = json.loads(NATIVE_SPEAKER_FINDINGS_PATH.read_text(encoding="utf-8"))
    if isinstance(payload, dict):
        findings = payload.get("findings", [])
    else:
        findings = payload
    return [finding for finding in findings if isinstance(finding, dict)]


NATIVE_SPEAKER_FINDINGS = load_native_speaker_findings()
REQUIRED_FINDING_FIELDS = {
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
    "content_change_refs",
    "recurrence_tags",
    "date_added",
}


def iter_pairs(single_source: str | None, single_target: str | None):
    if single_source and single_target:
        yield Path(single_source), Path(single_target), infer_locale_from_path(single_target)
        return

    for content_type in CONFIG["contentTypes"]:
        english_dir = DOCS_DIR / content_type / "en" if content_type == "blog" else DOCS_DIR / content_type
        if not english_dir.exists():
            continue
        for source_path in sorted(english_dir.glob("*.md")):
            if source_path.name == "README.md":
                continue
            for locale in CONFIG["locales"]:
                if locale == "en":
                    continue
                target_path = DOCS_DIR / content_type / locale / source_path.name
                if target_path.exists():
                    yield source_path, target_path, locale


def infer_locale_from_path(path: str) -> str:
    normalized = path.replace("\\", "/")
    for locale in CONFIG["locales"]:
        if f"/{locale}/" in normalized:
            return locale
    return "unknown"


def extract_urls(text: str) -> list[str]:
    # Only extract Markdown inline-link targets. Parity checking cares about whether navigable
    # references survived translation, not about every bare URL-like token in prose.
    return re.findall(r"\[[^\]]+\]\(([^)]+)\)", text)


def is_acronym_like(text: str) -> bool:
    candidate = text.strip()
    # Short all-caps strings are often expected to remain identical across locales.
    # This avoids warning on metadata titles such as ISBN or CI/CD.
    return bool(candidate) and len(candidate) <= 10 and bool(re.fullmatch(r"[A-Z0-9-]+", candidate))


def extract_ascii_words(text: str) -> list[str]:
    return [match.group(0).lower() for match in WORD_RE.finditer(text)]


def contains_suspicious_english_fragment(text: str, block_type: str) -> bool:
    if block_type in {"code", "diagram", "html_comment"}:
        return False
    words = extract_ascii_words(text)
    if len(words) < 5:
        return False
    # The heuristic intentionally favors recall over precision. A few manual reviews are cheaper
    # than publishing substantial English fragments inside localized prose. Requiring multiple
    # markers plus a density threshold keeps short quotations and isolated terms from triggering.
    marker_count = sum(1 for word in words if word in ENGLISH_MARKERS)
    unique_markers = {word for word in words if word in ENGLISH_MARKERS}
    return marker_count >= 4 and len(unique_markers) >= 3 and (marker_count / max(len(words), 1)) >= 0.25


def current_heading_slug(block) -> str:
    text = block.text.strip().splitlines()[0] if block.text.strip() else ""
    if text.startswith("#"):
        text = text.lstrip("#").strip()
    return text.lower()


def is_intentional_source_snippet_block(source_block, target_block) -> bool:
    heading_candidates = [current_heading_slug(source_block), current_heading_slug(target_block)]
    if any(candidate in INTENTIONAL_SOURCE_SNIPPET_HEADINGS for candidate in heading_candidates):
        return True
    if "`Skrbniki morajo" in target_block.text or "`benchmark fixtures`" in target_block.text:
        return True
    if source_block.block_type in {"code", "diagram", "html_comment"}:
        return True
    return False


def normalize_url_for_comparison(url: str, locale: str) -> str:
    normalized = url.strip()
    # Normalize locale-bearing docs paths into a locale-agnostic template so equivalent links are
    # compared semantically instead of literally.
    #
    # Example for locale `fr`:
    # - /docs/wiki/en/page.html -> /docs/wiki/{locale}/page.html
    # - ../en/page.md -> ../{locale}/page.md
    normalized = re.sub(r"/docs/(learning|wiki|topics|blog)/(en|sl|hr|bs|sr-Latn|sr-Cyrl|mk|sq|de|it|fr|es)/", r"/docs/\1/{locale}/", normalized)
    normalized = re.sub(r"\.\./(en|sl|hr|bs|sr-Latn|sr-Cyrl|mk|sq|de|it|fr|es)/", "../{locale}/", normalized)
    # Localized articles may point at locale-specific diagram variants while the English source
    # points at the shared canonical diagram path. Compare these by diagram filename so both link
    # styles are treated as semantically equivalent.
    localized_diagram_match = re.fullmatch(
        r"\.\./\.\./diagrams/blog/[^/]+/(en|sl|hr|bs|sr-Latn|sr-Cyrl|mk|sq|de|it|fr|es)/([^/]+\.svg)",
        normalized,
    )
    if localized_diagram_match:
        return f"../../diagrams/{localized_diagram_match.group(2)}"
    return normalized


def root_relative(path: Path) -> str:
    resolved = path.resolve() if not path.is_absolute() else path
    try:
        return str(resolved.relative_to(ROOT_DIR))
    except ValueError:
        return path.as_posix()


def finding_applies_to_target(finding: dict, locale: str, target_path: Path) -> bool:
    if finding.get("language") != locale:
        return False
    related_files = finding.get("related_files") or []
    if not related_files:
        return True
    target_relative = root_relative(target_path)
    return target_relative in related_files


def iter_validator_patterns(finding: dict) -> list[str]:
    patterns = finding.get("validator_patterns")
    if isinstance(patterns, list):
        return [pattern for pattern in patterns if isinstance(pattern, str) and pattern.strip()]
    localized_text = finding.get("localized_text")
    if isinstance(localized_text, str) and localized_text.strip():
        return [localized_text]
    return []


def native_speaker_regressions(locale: str, target_path: Path, target_text: str) -> list[dict]:
    regressions = []
    for finding in NATIVE_SPEAKER_FINDINGS:
        if not finding_applies_to_target(finding, locale, target_path):
            continue
        if not finding.get("validator_possible"):
            continue
        if finding.get("status") == "intentionally_unresolved":
            continue
        for pattern in iter_validator_patterns(finding):
            if pattern in target_text:
                regressions.append(
                    issue(
                        "error",
                        "known native-speaker regression",
                        target_path,
                        target_path,
                        None,
                        None,
                        f"finding {finding.get('id', 'unknown')} reintroduced rejected wording '{pattern}'. Preferred wording: {finding.get('preferred_localized_text', 'see findings corpus')}",
                    )
                )
                break
    return regressions


def native_speaker_regressions_for_block(locale: str, target_path: Path, source_block, target_block) -> list[dict]:
    if is_intentional_source_snippet_block(source_block, target_block):
        return []
    return native_speaker_regressions(locale, target_path, target_block.text)


def validate_native_speaker_findings_corpus() -> list[dict]:
    findings: list[dict] = []
    for finding in NATIVE_SPEAKER_FINDINGS:
        finding_id = finding.get("id", "unknown")
        missing_fields = sorted(REQUIRED_FINDING_FIELDS.difference(finding.keys()))
        if missing_fields:
            findings.append(
                issue(
                    "error",
                    "invalid findings corpus",
                    NATIVE_SPEAKER_FINDINGS_PATH,
                    NATIVE_SPEAKER_FINDINGS_PATH,
                    None,
                    None,
                    f"finding {finding_id} is missing required fields: {', '.join(missing_fields)}",
                )
            )

        if not isinstance(finding.get("validator_possible"), bool):
            findings.append(
                issue(
                    "error",
                    "invalid findings corpus",
                    NATIVE_SPEAKER_FINDINGS_PATH,
                    NATIVE_SPEAKER_FINDINGS_PATH,
                    None,
                    None,
                    f"finding {finding_id} must use a boolean for validator_possible",
                )
            )

        if not isinstance(finding.get("content_change_refs"), list):
            findings.append(
                issue(
                    "error",
                    "invalid findings corpus",
                    NATIVE_SPEAKER_FINDINGS_PATH,
                    NATIVE_SPEAKER_FINDINGS_PATH,
                    None,
                    None,
                    f"finding {finding_id} must use a list for content_change_refs",
                )
            )

        if not isinstance(finding.get("recurrence_tags"), list):
            findings.append(
                issue(
                    "error",
                    "invalid findings corpus",
                    NATIVE_SPEAKER_FINDINGS_PATH,
                    NATIVE_SPEAKER_FINDINGS_PATH,
                    None,
                    None,
                    f"finding {finding_id} must use a list for recurrence_tags",
                )
            )

        if finding.get("status") == "intentionally_unresolved" and not str(finding.get("unresolved_justification", "")).strip():
            findings.append(
                issue(
                    "error",
                    "invalid findings corpus",
                    NATIVE_SPEAKER_FINDINGS_PATH,
                    NATIVE_SPEAKER_FINDINGS_PATH,
                    None,
                    None,
                    f"finding {finding_id} is intentionally unresolved but has no unresolved_justification",
                )
            )

        # A finding marked validator_possible has crossed from passive documentation into active
        # recurrence prevention. Require both machine-checkable patterns and an explicit record
        # that the finding was turned into validator-backed system behavior.
        if finding.get("validator_possible"):
            validator_patterns = iter_validator_patterns(finding)
            if not validator_patterns:
                findings.append(
                    issue(
                        "error",
                        "invalid findings corpus",
                        NATIVE_SPEAKER_FINDINGS_PATH,
                        NATIVE_SPEAKER_FINDINGS_PATH,
                        None,
                        None,
                        f"finding {finding_id} is marked validator_possible but does not define validator_patterns or localized_text",
                    )
                )

            system_actions = finding.get("system_actions") or []
            if "validator" not in system_actions:
                findings.append(
                    issue(
                        "error",
                        "invalid findings corpus",
                        NATIVE_SPEAKER_FINDINGS_PATH,
                        NATIVE_SPEAKER_FINDINGS_PATH,
                        None,
                        None,
                        f"finding {finding_id} is marked validator_possible but is not documented with a validator system action",
                    )
                )

        source_review_recommendation = finding.get("source_review_recommendation")
        if source_review_recommendation is not None:
            if not isinstance(source_review_recommendation, dict):
                findings.append(
                    issue(
                        "error",
                        "invalid findings corpus",
                        NATIVE_SPEAKER_FINDINGS_PATH,
                        NATIVE_SPEAKER_FINDINGS_PATH,
                        None,
                        None,
                        f"finding {finding_id} must use an object for source_review_recommendation",
                    )
                )
            elif source_review_recommendation.get("recommended"):
                if not str(source_review_recommendation.get("reason", "")).strip():
                    findings.append(
                        issue(
                            "error",
                            "invalid findings corpus",
                            NATIVE_SPEAKER_FINDINGS_PATH,
                            NATIVE_SPEAKER_FINDINGS_PATH,
                            None,
                            None,
                            f"finding {finding_id} recommends source review but does not include a reason",
                        )
                    )
                if not isinstance(source_review_recommendation.get("source_files"), list) or not source_review_recommendation.get("source_files"):
                    findings.append(
                        issue(
                            "error",
                            "invalid findings corpus",
                            NATIVE_SPEAKER_FINDINGS_PATH,
                            NATIVE_SPEAKER_FINDINGS_PATH,
                            None,
                            None,
                            f"finding {finding_id} recommends source review but does not include source_files",
                        )
                    )

    return findings


def validate_pair(source_path: Path, target_path: Path, locale: str) -> dict:
    source_doc = load_document(source_path)
    target_doc = load_document(target_path)
    sidecar = load_sidecar(target_path)
    matches = align_blocks(source_doc.blocks, target_doc.blocks, sidecar)
    target_by_id = {block.block_id: block for block in target_doc.blocks}

    findings: list[dict] = []

    source_title = source_doc.metadata.get("title", "")
    target_title = target_doc.metadata.get("title", "")
    if source_title and target_title and source_title == target_title and not is_acronym_like(source_title):
        findings.append(issue("warning", "metadata drift", source_path, target_path, None, None, "target title is identical to source title"))

    source_summary = source_doc.metadata.get("summary", "")
    target_summary = target_doc.metadata.get("summary", "")
    if source_summary and target_summary and source_summary == target_summary:
        findings.append(issue("warning", "metadata drift", source_path, target_path, None, None, "target summary is identical to source summary"))

    if source_doc.metadata.keys() != target_doc.metadata.keys():
        findings.append(issue("warning", "metadata drift", source_path, target_path, None, None, "frontmatter key set differs"))

    for match in matches:
        source_block = next(block for block in source_doc.blocks if block.block_id == match.source_block_id)
        target_block = target_by_id.get(match.target_block_id) if match.target_block_id else None

        if target_block is None:
            findings.append(issue("error", "missing section", source_path, target_path, source_block.start_line, None, f"no target block aligned for source {source_block.block_id}"))
            continue

        findings.extend(native_speaker_regressions_for_block(locale, target_path, source_block, target_block))

        if source_block.block_type == "heading" and target_block.block_type != "heading":
            findings.append(issue("error", "missing headings", source_path, target_path, source_block.start_line, target_block.start_line, "source heading aligned to non-heading target block"))

        if source_block.block_type in {"code", "diagram"} and source_block.text != target_block.text:
            findings.append(issue("error", "diagram parity", source_path, target_path, source_block.start_line, target_block.start_line, f"{source_block.block_type} block changed in translation"))

        source_urls = extract_urls(source_block.text)
        target_urls = extract_urls(target_block.text)
        normalized_target_urls = {normalize_url_for_comparison(url, locale) for url in target_urls}
        missing_urls = [url for url in source_urls if normalize_url_for_comparison(url, locale) not in normalized_target_urls]
        if missing_urls:
            findings.append(issue("error", "broken internal links", source_path, target_path, source_block.start_line, target_block.start_line, f"missing URLs in target: {', '.join(missing_urls)}"))

        if (
            locale != "en"
            and source_block.word_count >= 12
            and similarity(source_block.text, target_block.text) >= 0.96
            and not is_intentional_source_snippet_block(source_block, target_block)
        ):
            # Similarity is only meaningful on substantial prose. The word-count floor prevents
            # short headings or labels from looking like untranslated regressions.
            findings.append(issue("warning", "untranslated source-language fragments", source_path, target_path, source_block.start_line, target_block.start_line, "target block is too similar to source block"))

        if (
            locale != "en"
            and contains_suspicious_english_fragment(target_block.text, source_block.block_type)
            and not is_intentional_source_snippet_block(source_block, target_block)
        ):
            findings.append(issue("warning", "untranslated source-language fragments", source_path, target_path, source_block.start_line, target_block.start_line, "target block still contains a suspicious English fragment"))

        if source_block.word_count >= 12 and target_block.word_count and (target_block.word_count / source_block.word_count) < 0.45:
            findings.append(issue("warning", "excessive shortening", source_path, target_path, source_block.start_line, target_block.start_line, f"target block is much shorter than source ({target_block.word_count}/{source_block.word_count} words)"))

        if match.score < 0.40:
            findings.append(issue("warning", "suspicious semantic loss", source_path, target_path, source_block.start_line, target_block.start_line, f"low alignment confidence ({match.score:.3f})"))

    return {
        "source": root_relative(source_path),
        "target": root_relative(target_path),
        "locale": locale,
        "findings": findings,
    }


def issue(severity: str, category: str, source_path: Path, target_path: Path, source_line: int | None, target_line: int | None, message: str) -> dict:
    return {
        "severity": severity,
        "category": category,
        "sourcePath": root_relative(source_path),
        "targetPath": root_relative(target_path),
        "sourceLine": source_line,
        "targetLine": target_line,
        "message": message,
    }


def render_markdown(results: list[dict]) -> str:
    findings = [finding for result in results for finding in result["findings"]]
    errors = [finding for finding in findings if finding["severity"] == "error"]
    warnings = [finding for finding in findings if finding["severity"] == "warning"]

    lines = ["# Translation Parity Validation Report", ""]
    lines.append(f"- Files reviewed: {len(results)}")
    lines.append(f"- Errors: {len(errors)}")
    lines.append(f"- Warnings: {len(warnings)}")
    lines.append("")

    if findings:
        lines.append("## Findings")
        lines.append("")
        for finding in findings:
            location = []
            if finding["sourceLine"]:
                location.append(f"source:{finding['sourceLine']}")
            if finding["targetLine"]:
                location.append(f"target:{finding['targetLine']}")
            suffix = f" ({', '.join(location)})" if location else ""
            lines.append(f"- [{finding['severity']}] {finding['category']} {finding['targetPath']}{suffix}: {finding['message']}")
        lines.append("")
    else:
        lines.append("No translation parity issues detected.")
        lines.append("")

    return "\n".join(lines)


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate semantic and structural translation parity.")
    parser.add_argument("--source", help="Single source Markdown file")
    parser.add_argument("--target", help="Single target Markdown file")
    parser.add_argument("--report-file", help="Write Markdown report")
    parser.add_argument("--json-report-file", help="Write JSON report")
    parser.add_argument("--fail-on-errors", action="store_true", help="Exit non-zero on errors")
    parser.add_argument("--fail-on-warnings", action="store_true", help="Exit non-zero on warnings")
    args = parser.parse_args()

    results = [validate_pair(source_path, target_path, locale) for source_path, target_path, locale in iter_pairs(args.source, args.target)]
    corpus_findings = validate_native_speaker_findings_corpus()
    if corpus_findings:
        results.append(
            {
                "source": str(NATIVE_SPEAKER_FINDINGS_PATH),
                "target": str(NATIVE_SPEAKER_FINDINGS_PATH),
                "locale": "meta",
                "findings": corpus_findings,
            }
        )
    markdown = render_markdown(results)
    json_report = json.dumps(results, indent=2, ensure_ascii=False)

    if args.report_file:
        Path(args.report_file).write_text(markdown, encoding="utf-8")
    if args.json_report_file:
        Path(args.json_report_file).write_text(json_report + "\n", encoding="utf-8")

    print(markdown)

    findings = [finding for result in results for finding in result["findings"]]
    has_errors = any(finding["severity"] == "error" for finding in findings)
    has_warnings = any(finding["severity"] == "warning" for finding in findings)
    if (args.fail_on_errors and has_errors) or (args.fail_on_warnings and has_warnings):
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
