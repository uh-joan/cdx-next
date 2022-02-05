# Contributing

The Experience Engineering team embraces an
"[inner source](https://resources.github.com/whitepapers/introduction-to-innersource/)"
contribution model. Forks and PRs are an appreciated and essential means to the
long-term success of the Digital Experience System.

Before proposing a change, please:

- Review this Contribution Guide
- Review the
  [Architecture Decision Records](https://git.clarivate.io/projects/CDXN/repos/cdx-next/browse/adr/README.md)

## Pull Requests

Please use the following template for submitting proposed changes:

```md
# Motivation

A few sentences, at most, describing the need for the proposed change. "To
satisfy user story XXX" is not sufficient here -- include relevant motivation
from the user story. As a general guideline, "In order to ABC, XYZ is necessary"
or a statement of this nature is helpful.

# Implementation

Sentences describing approach/design.

Maybe some bullet points:

- libraries used
- links to articles/posts used as motivation

Avoid simply listing files changed or functions added, as this is easily seen in
the diff.

# Out of Scope

List of items not included in this proposed change that a reviewer might assume
are included.

# Relevant PRs

Links to a relevant PR, description as to relevance

# Screenshot(s)

Preferably GIF if feature contains motion. Still images otherwise.
```

## Commits

Commits should be well-constructed, focused units of change. A readable git log
with good commit messages in an invaluable tool in understanding a codebase and
addressing issues.

Commit messages should be **formatted
[conventionally](https://www.conventionalcommits.org/)**.

[commitlint](https://commitlint.js.org/) will check your commits for adherence,
blocking any poorly-formatted commits.

If you need assistance crafting the commit messages,
[commitizen](https://commitizen-tools.github.io/commitizen/) is configured to
help you interactively at the terminal.

```shell
$ npm run commit

? Select the type of change that you're committing: (Use arrow keys)
❯ feat:       A new feature
  fix:        A bug fix
  docs:       Documentation only changes
  style:      Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  refactor:   A code change that neither fixes a bug nor adds a feature
  perf:       A code change that improves performance
  test:       Adding missing tests or correcting existing tests
(Move up and down to reveal more choices)
```

## Architecture Decision Record

Any proposed change that contains a significant "decision" should include an
Architecture Decision Record as
[described by Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions).
Initially, the status should be "proposed" and the content should be well
written and help the team understand the scope and impact of the decision.

ADRs should be managed with
[log4brains](https://github.com/thomvaill/log4brains#-getting-started). Usage
instructions can be found in the
[ADR README](https://git.clarivate.io/projects/CDXN/repos/cdx-next/browse/adr/README.md).

A convenience script is provided:

```shell
$ npm run adr:new

> cdx-next@0.0.0 adr:new /Users/gregoryhopkins/working/clarivate/src/git.clarivate.io/cdxn/cdx-next
> log4brains adr new


? Title of the solved problem and its solution? Foo

? Does this ADR supersede a previous one? No

 ✔  New ADR created: adr/20220204-foo.md


? How would you like to edit it? (Use arrow keys)
❯ Edit and preview
  Edit
  Later
```

To view and explore ADRs, run:

`$ npm run adr:preview`

## Code style

This project adopts a combination of the following tools to repeatably and
deterministically enforce a reasonable style:

- [prettier](https://prettier.io/)
- [stylelint](https://stylelint.io/)
- [eslint](https://eslint.org/)
- [json-sort-cli](https://gitlab.com/codsen/codsen/tree/master/packages/json-sort-cli)
- [npm-groovy-lint](https://www.npmjs.com/package/npm-groovy-lint)

These tools run automatically with every commit
([pre-commit hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks))
with the help of [Husky](https://github.com/typicode/husky) and
[lint-staged](https://github.com/okonet/lint-staged).

Additionally, a first-class configuration for VSCode is provided. Provided that
you have the [recommended](.vscode/extensions.json) extensions
[installed](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions),
style will be applied on save.

### Prettier

Prettier is responsible for validating and applying consistent formatting. Most
file types in the project are supported.

Prettier is designed in an "opinionated" manner, meaning that its configuration
is limited, reducing the amount of time teams spend discussing "proper"
formatting.

### stylelint

The stylelint configuration is mostly
[managed by an Nx plugin](https://github.com/Phillip9587/nx-stylelint/).

The "standard" shared configs (for both
[CSS](https://github.com/stylelint/stylelint-config-standard) and
[SCSS](https://github.com/stylelint-scss/stylelint-config-standard-scss)) are
applied as a baseline for stylelint.

Idiomatic CSS ordering is enforced by
[stylelint-config-idiomatic-order](https://github.com/ream88/stylelint-config-idiomatic-order).

Finally,
[sytlelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)
turns off any stylelint rules that might conflict with prettier.

### eslint

The eslint configuration is mostly
[managed by Nx](https://nx.dev/guides/eslint). Nx publishes its own shared
config tha varies based on project type. For our purposes (using mostly
Angular), Nx chooses the
"[recommended](https://github.com/angular-eslint/angular-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json)"
config from [angular-eslint](https://github.com/angular-eslint/angular-eslint).

Typescript and Javascript imports and exports are sorted and kept orderly by
[simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort).
Eslint has some built-in support for ordering, but no "fixers" are available.
With simple-import-sort, statements are sorted automatically.

Finally,
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
turns off any eslint rules that might conflict with prettier.

### json-sort-cli

JSON files are sorted, where appropriate, by key. Special attention is paid to
`package.json`, using
[format-package](https://github.com/camacho/format-package) to arrange the file
according to well-held convnetions.

### npm-groovy-lint

Although it should not change too frequently, making sure the `Jenkinsfile`
follows good Groovy patterns is important to maintain healthy CI/CD.
