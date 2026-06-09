# Engineering Governance

Use this skill when work touches repository-wide rules about:

- where authoritative truth lives
- how rationale stays close to tools, tests, workflows, or docs
- when recurring failures should become automated checks
- how validation layers should relate to each other

This pilot covers only:

- knowledge close to governed artifacts
- validator-first governance
- layered validation

It does not yet own:

- authority hierarchy extraction
- AI-governance rules
- manual-without-AI resilience
- real-device verification

## How To Act

1. Identify whether the request is about a portable governance rule or a repository-specific adaptation.
2. Keep the portable rule wording in the skill layer.
3. Keep local examples, commands, workflow names, file names, and operating procedures in repository-local docs.
4. When editing local docs, replace duplicated portable rule text with:
   - a short ownership statement
   - a pointer to this skill
   - enough local bridge text that the document still works on its own
5. Do not turn local docs into link-only shells.
6. Preserve contributor usability: local docs should still explain what to do in the current repository.

## Decision Tests

Treat content as portable when it answers questions like:

- How should teams preserve rationale near engineering artifacts?
- When should a recurring failure become a validator or automated check?
- Why are multiple validation layers needed?

Treat content as local when it depends on:

- exact file paths
- exact validator names
- exact workflow names
- current toolchain commands
- current repository layout

## Minimum Output Standard

When applying this skill, ensure:

- one clear owner for the portable rule
- local docs keep examples and operating context
- boundaries with CI/CD and documentation/publication guidance remain explicit

## References

- `references/knowledge-close-to-artifact.md`
- `references/validator-first-governance.md`
- `references/layered-validation.md`
- `references/let-books-adapter.md`
