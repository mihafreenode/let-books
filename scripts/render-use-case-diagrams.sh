#!/usr/bin/env bash
set -euo pipefail

# Purpose:
# - Render the use-case governance diagrams from Mermaid source into SVG.
#
# Why:
# - The Mermaid source files under docs/diagrams/source are authoritative.
# - The SVGs are committed published artifacts for docs consumption.
#
# Requirements:
# - Mermaid CLI (`mmdc`) available on PATH.

if ! command -v mmdc >/dev/null 2>&1; then
  printf 'Missing required tool: mmdc
' >&2
  printf 'Install Mermaid CLI or use the repository docs tooling environment.
' >&2
  exit 1
fi

root_dir="$(dirname "$0")/.."
diagrams_dir="$root_dir/docs/diagrams"
source_dir="$diagrams_dir/source"
config_file="$root_dir/tools/mermaid-render-config.json"

# Use the shared Mermaid render config so committed SVGs prefer plain SVG text labels over
# foreignObject-backed HTML labels. This is safer for published diagrams embedded via <img>.
mmdc -i "$source_dir/use-case-overview.mmd" -o "$diagrams_dir/use-case-overview.svg" -t neutral -b transparent -w 980 -c "$config_file"
mmdc -i "$source_dir/use-case-capability-relationships.mmd" -o "$diagrams_dir/use-case-capability-relationships.svg" -t neutral -b transparent -w 1180 -c "$config_file"
mmdc -i "$source_dir/use-case-automation-parity-chain.mmd" -o "$diagrams_dir/use-case-automation-parity-chain.svg" -t neutral -b transparent -w 1280 -c "$config_file"

printf 'Rendered use-case diagrams into %s
' "$diagrams_dir"
