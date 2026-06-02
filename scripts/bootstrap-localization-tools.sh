#!/usr/bin/env bash
# Purpose:
# - Bootstrap the project-local Python environment required by
#   localization validators and localization maintenance tools.
#
# Why:
# - Localization checks depend on extra Python packages and optional MT
#   backends that are not guaranteed to exist in a contributor shell or
#   CI runner by default.
# - The repository wants one repeatable setup path instead of ad-hoc
#   global pip installs.
#
# Protects:
# - reproducible localization toolchain setup
# - alignment between local and CI localization behavior
# - isolation from system Python package drift
#
# Limitations:
# - Focused on the localization toolchain only.
# - Optional MT backends may still require separate system packages or
#   language-model installation.
#
# Related:
# - scripts/README.md
# - tools/validate_translation_parity.py
# - tools/localization_mt_draft.py
# - .github/workflows/ci.yml
# - .github/workflows/docs.yml
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VENV_DIR="$ROOT_DIR/.venv"
PYTHON_BIN="${PYTHON_BIN:-python3}"

if ! command -v "$PYTHON_BIN" >/dev/null 2>&1; then
  printf 'Missing required Python executable: %s\n' "$PYTHON_BIN" >&2
  exit 1
fi

if [ ! -d "$VENV_DIR" ]; then
  printf 'Creating project-local virtual environment at %s\n' "$VENV_DIR"
  "$PYTHON_BIN" -m venv "$VENV_DIR"
fi

# Always upgrade pip inside the repo-local environment before install.
# This reduces avoidable CI/local drift caused by older bundled pip
# versions handling dependency resolution differently.
"$VENV_DIR/bin/python" -m pip install --upgrade pip
"$VENV_DIR/bin/pip" install -r "$ROOT_DIR/requirements-localization.txt"

# Argos Translate is optional because most repository guarantees do not
# require MT locally. Keeping it opt-in avoids making heavier language
# tooling a default dependency for every contributor and CI run.
if [ "${INSTALL_ARGOS_TRANSLATE:-0}" = "1" ]; then
  "$VENV_DIR/bin/pip" install 'argostranslate>=1.9,<2'
fi

printf '\nLocalization tooling backend check\n'
"$VENV_DIR/bin/python" "$ROOT_DIR/tools/localization_mt_draft.py" --print-backends

cat <<EOF

Localization toolchain bootstrapped successfully.

Activate the environment:
  source .venv/bin/activate

Common commands:
  python tools/validate_translation_parity.py --help
  python tools/audit_translation_parity.py --help
  python tools/audit_translation_warnings.py --help
  python tools/repair_localized_internal_links.py --help
  python tools/localization_mt_draft.py --help
  python tools/localization_patch_assist.py --help
  python tools/generate_translation_sidecars.py --help

Optional machine-translation helpers:
  - Set INSTALL_ARGOS_TRANSLATE=1 to install the optional Argos Translate Python backend.
  - Argos Translate still needs language models after package installation.
  - Apertium and Translate Shell are detected automatically when installed system-wide.

Recommended Ubuntu/Debian packages:
  sudo apt install jq hunspell aspell pandoc apertium translate-shell

No global pip installation is required.
EOF
