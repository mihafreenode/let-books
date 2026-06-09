# Layered Validation

## Rule

Quality and governance should be enforced through layers rather than a single check type.

Typical layers:

1. guidance or specification
2. manual review
3. local validation
4. tests
5. CI gates
6. deployment or publish checks

## Why This Exists

- no single validation layer answers every question
- policy without enforcement drifts
- tests without guidance may protect the wrong assumptions
- deployment without rebuild and validation can publish stale artifacts

## Good Outcomes

- guidance defines the rule
- review handles meaning and edge cases
- validators automate stable parts of review
- tests verify protected behavior
- CI makes the checks repeatable
- deployment verifies publishable outputs

## Anti-Patterns

- expecting linting alone to guarantee quality
- expecting tests alone to replace governance
- treating deployment as passive file copy instead of a trust boundary

## Portability Notes

The layer names and tooling vary by repository. The portable rule is that layers should reinforce one another and have explicit roles.
