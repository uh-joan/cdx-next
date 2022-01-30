# 2. Use conventional commits

Date: 2022-01-30

## Status

Accepted

## Context

`@cdx-next` will be long-lived and have contributors from many different parts
of the Clarivate business, through an inner-source support model.

As such, a reasonable standard for quality commit messages is necessary to
support long-term project health.

## Decision

Use [Conventional Commits](https://www.conventionalcommits.org/) and enforce
compliance with [commitlint](https://commitlint.js.org/) and
[commitizen](https://commitizen-tools.github.io/commitizen/).

For more information, see the [Contributing Guide](../../CONTRIBUTING.md).

## Consequences

Writing good commit messages, although still challenging, is made much easier.
The git log will be readable and supportable over time, leading to a highly
maintainable product.

"quick and dirty" local commits will be more difficult to author (bleep, blorb,
etc). Some will see this as a benefit, others will see this as a deteriment.
