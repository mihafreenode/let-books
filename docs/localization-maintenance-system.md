# Localization Maintenance System

## Summary

This repository now includes a translation-maintenance toolchain that keeps localized Markdown semantically synchronized with English source content while minimizing unnecessary retranslation.

The workflow follows the principles in `docs/localization-at-scale-program.md`:

```text
Source change
→ detect affected content
→ machine translate only affected content
→ align with existing translation
→ AI review for semantic parity
→ validation
→ update localized document
```

The implementation is source-first, block-aware, and sidecar-metadata-driven so that reviewed translations can be preserved wherever alignment confidence stays high.

## Files

```text
project root
├── .venv/
├── requirements-localization.txt
├── scripts/
│   └── bootstrap-localization-tools.sh
└── tools/
    ├── localization_alignment.py
    ├── localization_mt_draft.py
    ├── localization_patch_assist.py
    ├── audit_translation_parity.py
    ├── audit_translation_warnings.py
    ├── repair_localized_internal_links.py
    ├── generate_translation_sidecars.py
    └── validate_translation_parity.py
```

## Supported Environments

- Ubuntu 24.04+
- Debian 12+
- WSL2
- GitHub Actions

The setup uses a project-local virtual environment and does not require `pip install --break-system-packages` or any global Python package installation.

## First-Time Setup

Run:

```bash
bash scripts/bootstrap-localization-tools.sh
```

The bootstrap script:

1. creates `.venv/` if needed
2. upgrades `pip` inside `.venv`
3. installs `requirements-localization.txt`
4. checks optional machine-translation backends
5. prints activation and usage instructions

Activate the environment:

```bash
source .venv/bin/activate
```

## Dependencies

Python requirements:

- `rapidfuzz`

Optional Python backend:

- `argostranslate`

Optional system tools:

- `apertium`
- `translate-shell`
- `jq`
- `hunspell`
- `aspell`
- `pandoc`

Recommended install command on Ubuntu or Debian:

```bash
sudo apt install jq hunspell aspell pandoc apertium translate-shell
```

Optional Argos backend install inside `.venv`:

```bash
INSTALL_ARGOS_TRANSLATE=1 bash scripts/bootstrap-localization-tools.sh
```

## Tooling

### `tools/localization_alignment.py`

Parses Markdown into structured blocks and maintains `.l10n.json` sidecar alignment metadata.

Covered block types:

- front matter
- headings
- paragraphs
- lists
- tables
- callouts and blockquotes
- images and captions-like image blocks
- code blocks
- Mermaid diagrams
- HTML comments

Matching strategy order:

1. sidecar metadata match
2. heading hierarchy match
3. block-type and text similarity match
4. fuzzy fallback
5. positional heuristic

Example:

```bash
python tools/localization_alignment.py \
  --source docs/wiki/localization-at-scale.md \
  --locale sl \
  --write-sidecar
```

### `tools/localization_mt_draft.py`

Creates a new machine-translated draft for a source Markdown file while preserving structure, links, code blocks, and diagrams.

Example:

```bash
python tools/localization_mt_draft.py \
  --source docs/wiki/localization-at-scale.md \
  --locale sl \
  --write \
  --write-sidecar \
  --report-file docs/.localization-review-packet.json
```

The report file is an AI review checklist for semantic parity, heading parity, terminology, examples, diagrams, metadata, and links.

Translation completion should also reference the native-speaker findings corpus at `docs/style-guide/localization/native-speaker-findings-corpus.json` so repeated human-review defects can be checked before signoff.

### `tools/localization_patch_assist.py`

Uses `git diff` against a base revision to determine changed source blocks, translates only those blocks, and patches the matching localized region.

Example:

```bash
python tools/localization_patch_assist.py \
  --source docs/wiki/localization-at-scale.md \
  --locale sl \
  --base-ref HEAD \
  --write \
  --write-sidecar \
  --report-file docs/.localization-patch-report.json
```

The JSON report includes:

- changed line ranges
- changed source blocks
- previous and next unchanged context
- low-confidence alignments
- fallback guidance for broader reconciliation

### `tools/validate_translation_parity.py`

Runs granular parity validation across docs content types or for a single source/target pair.

Checks include:

- missing headings
- missing sections
- untranslated source-language fragments
- broken internal links
- diagram parity
- metadata drift
- excessive shortening
- suspicious semantic loss

Example:

```bash
python tools/validate_translation_parity.py \
  --report-file docs/.translation-parity-report.md \
  --json-report-file docs/.translation-parity-report.json
```

### `tools/audit_translation_parity.py`

Runs a focused parity audit for one locale, then produces a compact summary with the highest-signal files and category counts.

Example:

```bash
python tools/audit_translation_parity.py \
  --locale sl \
  --summary-file docs/.translation-parity-sl-summary.md \
  --summary-json-file docs/.translation-parity-sl-summary.json \
  --report-file docs/.translation-parity-sl.md \
  --json-report-file docs/.translation-parity-sl.json
```

Optional filter:

```bash
python tools/audit_translation_parity.py --locale sl --content-type wiki
```

### `tools/audit_translation_warnings.py`

Summarizes warning-only localization debt from the parity JSON report so native-language review can focus on the most warning-heavy locales, files, and article families.

Example:

```bash
python tools/audit_translation_warnings.py \
  --json-report docs/.translation-parity-all.json \
  --summary-file docs/.translation-warning-summary.md \
  --summary-json-file docs/.translation-warning-summary.json
```

### `tools/generate_translation_sidecars.py`

Generates or refreshes `.l10n.json` sidecars for every existing source/target article pair.

Example:

```bash
python tools/generate_translation_sidecars.py
```

Optional filters:

```bash
python tools/generate_translation_sidecars.py --content-type wiki --locale sl
```

To discard stale matches and rebuild sidecars from current source/target content:

```bash
python tools/generate_translation_sidecars.py --content-type blog --locale sl --rebuild
```

### `tools/repair_localized_internal_links.py`

Repairs localized Markdown files that still point at English docs URLs or `../en/...` links when a matching localized page exists.

Examples:

```bash
python tools/repair_localized_internal_links.py --locale sl --write
python tools/repair_localized_internal_links.py --write
```

## Workflow Rules

### New Source Article

1. run `localization_mt_draft.py`
2. review the generated AI packet
3. perform semantic review
4. run `generate_translation_sidecars.py` for the new pair if needed
5. run `validate_translation_parity.py`
6. keep the `.l10n.json` sidecar with the localized file

### Existing Source Article Changed

1. run `localization_patch_assist.py`
2. inspect low-confidence blocks in the patch report
3. if needed, fall back to a full MT draft plus merge review
4. refresh the sidecar metadata with `generate_translation_sidecars.py`
5. run `validate_translation_parity.py`

### Localized Article Changed Independently

When a localized file changes independently, review whether:

1. the English source should improve too
2. terminology guidance should change
3. the same improvement should propagate to other locales

This is a required reasoning step even when no automatic propagation happens.

## Backend Notes

Preferred backend selection order is automatic:

1. Argos Translate
2. Apertium
3. Translate Shell

Argos is the preferred free offline-capable backend because it can run fully locally once language models are installed. It is optional in the default bootstrap because its current Python dependency stack is much heavier than the core alignment and validation tooling. Apertium and Translate Shell are supported when available, but may depend on installed language pairs or network connectivity.

Check backend availability:

```bash
python tools/localization_mt_draft.py --print-backends
```

## CI Usage

GitHub Actions bootstraps `.venv`, installs localization dependencies, and runs `validate_translation_parity.py` alongside the existing docs validators.

This keeps semantic drift detection in CI without relying on globally installed Python packages.

## Dependency Updates

To update localization Python dependencies:

1. edit `requirements-localization.txt`
2. rerun `bash scripts/bootstrap-localization-tools.sh`
3. rerun `python tools/validate_translation_parity.py`
4. rerun the existing docs validation pipeline if the change affects parsing or output

## Troubleshooting

### `externally-managed-environment`

Use the bootstrap script. Do not install Python packages globally.

### No translation backend available

Run:

```bash
python tools/localization_mt_draft.py --print-backends
```

If Argos is installed but unavailable, add the required language models inside `.venv`.

If you prefer system tools, install `apertium` or `translate-shell`.

### Low-confidence alignment fallback

If `localization_patch_assist.py` reports low-confidence alignments, do not replace the whole translation immediately. Generate a full draft, compare it with the current localized article, and merge only the changed source semantics while preserving reviewed target content.
