# Validator-First Governance

## Rule

When a recurring failure can be checked objectively, prefer validator or automated-check enforcement over human memory alone.

## Why This Exists

- repeated reviewer reminders do not scale
- objective failures should graduate into durable enforcement when practical
- automation preserves lessons better than prose-only repetition

## Good Outcomes

- a repeated source-of-evidence mistake becomes a validator
- a recurring generated-output drift becomes a structural or runtime check
- a closed defect class becomes blocking when confidence is high enough

## Anti-Patterns

- solving the same failure repeatedly through reviewer reminders only
- creating broad human checklists for issues that could be checked mechanically
- adding validators without documenting what recurring risk they replace

## Boundaries

This rule does not mean every policy must become automation.

Keep a rule in guidance or review when:

- it is subjective
- the check is not reliable yet
- the enforcement cost exceeds the current maintenance benefit

## Portability Notes

The portable principle is the graduation path from repeated failure to automation. Exact validators, commands, and CI jobs remain local.
