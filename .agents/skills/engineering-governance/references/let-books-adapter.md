# Let Books Adapter

This file binds the generic Engineering Governance pilot skill to the current Let Books repository.

## Local Source Files

Primary local files that apply this pilot scope:

- `AGENTS-Implementation.md`
- `tools/README.md`
- `tests/README.md`
- `docs/wiki/validation-layers.md`
- `skills/engineering-governance.md`

## Local Meanings

### Knowledge Close To Artifact

In Let Books, this currently appears through:

- README layers for tools, tests, scripts, and workflows
- validator/test/workflow explanation sections in `AGENTS-Implementation.md`

### Validator-First Governance

In Let Books, this currently appears through:

- validator-first knowledge-preservation language in `AGENTS-Implementation.md`
- tool and test README guidance about preferring automated checks for recurring objective failures

### Layered Validation

In Let Books, this currently appears through:

- `docs/wiki/validation-layers.md`
- test README ordering notes
- workflow and tooling documentation that distinguish source checks, generated-output checks, browser/runtime checks, and deployment/publish checks

## Local Boundaries

Keep these local and out of the generic skill:

- exact file names
- exact validator names
- exact workflow names
- exact commands
- Let Books repo topology
- static-demo-specific verification or operational detail

## Current Pilot Status

Phase 2.1 extraction already made `skills/engineering-governance.md` the explicit owner of the three pilot rules while keeping local bridge text in the four target documents.

Use this adapter when you need to connect the generic skill to the current Let Books repository without making Let Books the center of the skill itself.
