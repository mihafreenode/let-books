# Let Books Adaptation: CI/CD Governance

This note records how the portable CI/CD governance skill is implemented specifically in Let Books.

## Repository-Specific Platform

- GitHub Actions based CI and deployment
- GitHub Pages deployment for the docs site

## Repository-Specific Workflows

- `.github/workflows/ci.yml`
- `.github/workflows/docs.yml`
- workflow rationale documented in `.github/workflows/README.md`

## Repository-Specific Enforcement Pattern

- validate workflow correctness first
- regenerate docs and derived artifacts
- run source-level and rendered-output checks
- run browser-facing docs validation
- deploy only from a fresh validated build

## Repository-Specific Tooling

- `actionlint`
- `yamllint`
- docs generators and validators under `tools/`
- browser validation via `tests/docs/*`

## Repository-Specific Risks Managed

- stale artifact publication to Pages
- drift between CI assumptions and deployment assumptions
- workflow syntax or YAML decay
