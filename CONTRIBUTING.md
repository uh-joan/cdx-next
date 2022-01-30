# Contributing

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
