# Use automatic codestyle

- Status: accepted
- Date: 2022-02-04

## Context and Problem Statement

Development teams often spend (waste) too much time arguing the particulars of
code style. We need a set of deterministic, automatically-applied code style
rules.

## Decision Outcome

Use an opinionated combination of:

- [husky](https://github.com/typicode/husky) for management of a pre-commit hook
- [lint-staged](https://github.com/okonet/lint-staged) for execution of
  formatting tasks on git changes
- [prettier](https://prettier.io/) for general-purpose file formatting
- [stylelint](https://stylelint.io/) for linting and formatting of CSS and SCSS
- [eslint](https://eslint.org/) for linting and formatting of javascript and
  typescript
- [json-sort-cli](https://gitlab.com/codsen/codsen/tree/master/packages/json-sort-cli)
  for formatting and sorting of keys in json files
- [npm-groovy-lint](https://www.npmjs.com/package/npm-groovy-lint) for linting
  and formatting in the Jenkinsfile

These are the "best of breed" options and all have first-class support in Nx.

### Positive Consequences

- increased productivity
- less arguing about code style

### Negative Consequences

- some might not agree with the opinions codified 😞
