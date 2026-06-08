# Packaging

## Current Package Shape

```text
skills/
├── LICENSE
├── README.md
├── ADOPTION.md
├── PACKAGING.md
├── VERSIONING.md
├── SKILL_MANIFEST.md
├── PORTABLE_ASSET_POLICY.md
├── SKILL_MATURITY_MODEL.md
├── PORTABILITY_REVIEW.md
├── engineering-governance.md
├── localization-governance.md
├── documentation-as-product.md
├── ci-cd-governance.md
├── adaptations/
└── research/
```

## Packaging Intent

The `skills/` directory is being treated as a portable asset bundle rather than only repository-local documentation.

That means a future user should be able to:

- copy one skill file into another repository
- copy the whole package as documentation
- separate portable skill definitions from Let Books adaptations
- reuse the package in open-source, internal, commercial, or closed-source settings under the Apache 2.0 license

## Future Packaging Possibilities

Possible future distribution forms include:

- standalone repository
- Git submodule
- documentation package
- starter repository template
- validator pack
- GitHub Action bundle
- agent skill package

These are packaging possibilities only. They are not implemented here.

## Packaging Boundaries

Portable package contents:

- skill definitions
- adoption guidance
- portability review
- maturity model
- manifest and versioning metadata
- portable asset policy

Repository-specific package contents:

- adaptation notes under `skills/adaptations/`
- research notes under `skills/research/`
- direct references to current Let Books validators, workflows, and folder structure

## Recommended Future Split

If these skills move into a standalone package later, a useful split would be:

- core portable skill definitions
- optional adaptation examples
- optional validator packs
- optional CI templates
- optional agent-install metadata

## Metadata And Packaging Readiness

Each top-level skill file now includes:

- a metadata block
- version
- status
- license
- origin
- parent skill relationship
- license section
- provenance section

That makes the skill identifiable even when copied outside this directory.

Supporting package metadata lives in:

- `skills/VERSIONING.md`
- `skills/SKILL_MANIFEST.md`
- `skills/PORTABLE_ASSET_POLICY.md`
