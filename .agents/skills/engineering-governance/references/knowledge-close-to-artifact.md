# Knowledge Close To Artifact

## Rule

Rationale, assumptions, guarantees, and limitations should stay close to the artifact they govern.

Governed artifacts include:

- tools
- validators
- tests
- workflows
- closely related guidance

## Why This Exists

- distant explanation becomes stale or invisible
- future maintainers should not need commit archaeology to recover intent
- local explanation improves review quality and reduces accidental misuse

## Good Outcomes

- a validator README explains which failure class it protects against
- a workflow README explains why step order matters
- a test README explains which repository guarantee the test protects

## Anti-Patterns

- critical rationale exists only in commit history or chat logs
- enforcement artifacts have no explanation of protected guarantees
- central docs explain everything while local artifacts remain opaque

## Portability Notes

This rule is portable because every repository accumulates tools, tests, workflows, and checks that need local explanation. The exact documentation format is repository-specific.
