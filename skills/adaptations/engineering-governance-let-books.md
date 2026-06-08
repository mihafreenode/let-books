# Let Books Adaptation: Engineering Governance

This note records how the portable engineering governance skill is implemented specifically in Let Books.

## Repository-Specific Guidance

- `AGENTS.md` holds product purpose, philosophy, workflows, and scope.
- `AGENTS-Implementation.md` holds tactical implementation and governance rules.
- `PRINCIPLES.md` captures maintainer philosophy and knowledge-preservation values.

## Repository-Specific Evidence Rules

- public blog posts and source maps must cite docs and specs rather than `src/`, `static-demo/`, or test/tool source as primary editorial evidence
- demo behavior is explicitly lower in authority than spec, implementation guidance, and current-state docs

## Repository-Specific Validation

- `tools/validate-blog.mjs` enforces parts of the editorial evidence policy
- tool, workflow, script, and test READMEs preserve rationale close to their implementation layers

## Repository-Specific Conventions

- source maps under `docs/sources/`
- scenario README under `tests/static-demo/scenarios/README.md`
- layered documentation of tools, tests, scripts, and workflows
- supporting-material HTML logs under `docs/supporting-material/` that preserve extraction reasoning, reconstructed transcript material, later planning-phase transcripts, and rendering rules for future reuse

## Repository-Specific Risks Managed

- public articles accidentally citing implementation source as canonical evidence
- demo behavior silently becoming product truth
- AI agents acting on concrete but non-canonical instructions
