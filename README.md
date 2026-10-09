[![Build Status](https://build.sp.clarivate.io/jenkins/buildStatus/icon?job=cdxn%2Fcdx-next%2Fmain)](https://build.sp.clarivate.io/jenkins/job/cdxn/job/cdx-next/job/main/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# CDX Next

CDX Next is the code for **Helix**, Clarivate's design system for Angular. It
ships the Helix theme for Angular Material, branded components such as the
header, footer and notifications, shared services, icons and pictograms, and the
Helix documentation site.

The packages track Angular majors: this branch targets **Angular 22** and
publishes `22.x` versions of every `@hlx/*` package.

## Contents

- [Packages](#packages)
- [Using Helix in an app](#using-helix-in-an-app)
- [Developing](#developing)
- [Repository layout](#repository-layout)
- [Figma and AI tooling](#figma-and-ai-tooling)
- [Contributing](#contributing)
- [CI and releases](#ci-and-releases)

## Packages

All published packages share one version and are released together.

**Theme and tokens**

| Package                       | What it is                                                                          |
| ----------------------------- | ----------------------------------------------------------------------------------- |
| `@hlx/theme-angular-material` | The Helix theme for Angular Material: tokens, typography, density, overrides        |
| `@hlx/colors`                 | The colour palette as plain Sass variables                                          |
| `@hlx/clarivate-font`         | The Clarivate brand font                                                            |
| `@hlx/helix-icons`            | Clarivate's custom icons and pictograms (standard icons come from Material Symbols) |

**Components and services**

| Package                     | What it is                                                                           |
| --------------------------- | ------------------------------------------------------------------------------------ |
| `@hlx/ngx-branding`         | Header, footer, notification, AI avatar, empty state, rich tooltip, OneTrust         |
| `@hlx/shared-branding`      | Shared header and footer styles                                                      |
| `@hlx/ngx-authentication`   | Authentication broker and user profile menu                                          |
| `@hlx/ngx-session-activity` | Inactivity detection and session timeout dialog                                      |
| `@hlx/ngx-analytics`        | Analytics service with Clarivate's Snowplow (Iglu) schemas                           |
| `@hlx/ngx-translations`     | Translations service and bundled i18n strings, built on `@ngx-translate`             |
| `@hlx/oti-snippet`          | OneTrust cookie consent with analytics integrations such as Pendo; also a UMD script |

**Themes for third-party libraries**

| Package                     | Library                           |
| --------------------------- | --------------------------------- |
| `@hlx/theme-ag-grid`        | AG Grid                           |
| `@hlx/theme-highcharts`     | Highcharts                        |
| `@hlx/theme-snackbar`       | Angular Material snack bar toasts |
| `@hlx/theme-xng-breadcrumb` | xng-breadcrumb                    |

**Apps (not published)**

| Project             | What it is                                            |
| ------------------- | ----------------------------------------------------- |
| `docs-website`      | The Helix documentation site, with Storybook built in |
| `storybook`         | Stories for every documented component                |
| `ngx-reference-app` | Reference app showing the packages together           |
| `ngx-demo-app`      | Demo app                                              |

## Using Helix in an app

The packages are published to Clarivate's Artifactory. Point the `@hlx` scope at
it in your app's `.npmrc`:

```ini
@hlx:registry = https://repo.clarivate.io/artifactory/api/npm/npm-hlx/
```

Install the theme and the branding components:

```bash
npm install @hlx/theme-angular-material @hlx/ngx-branding
```

Apply the Helix theme in your global `styles.scss`:

```scss
@use '@hlx/theme-angular-material' as cdx;
@use '@hlx/ngx-branding/header/theme' as header;
@use '@hlx/ngx-branding/footer/theme' as footer;

@include cdx.default(cdx.$helix-theme, 'helix-theme-material');
@include header.theme(cdx.$helix-theme);
@include footer.theme(cdx.$helix-theme);

.helix-theme-material {
  @include cdx.theme-helix-overrides;
}
```

Then add the theme class to `<body>`:

```html
<body class="mat-typography helix-theme-material"></body>
```

For Clarivate's custom icons and pictograms, add `@hlx/helix-icons` and register
it in `app.config.ts`. Standard icons keep using the Material Symbols font by
name.

```ts
providers: [provideHttpClient(), provideHelixIcons()],
```

```html
<mat-icon>search</mat-icon> <mat-icon svgIcon="hlx:ai-summary"></mat-icon>
```

The documentation site has the full setup guide, every component with live
examples, density, colours, typography and patterns.

## Developing

### Prerequisites

- **Node 26.7**, pinned in [`.nvmrc`](.nvmrc). With nvm: `nvm use`.
- **npm**. The workspace uses npm workspaces (`packages/**`).
- **Access to Clarivate's Artifactory**, for `@hlx` and internal dependencies.

```bash
npm ci
```

### Common commands

| Task                              | Command                                                  |
| --------------------------------- | -------------------------------------------------------- |
| Run the docs site (port 4200)     | `npx nx serve docs-website`                              |
| Run Storybook (port 4400)         | `npx nx storybook storybook`                             |
| Lint everything                   | `npm run lint`                                           |
| Test everything                   | `npm test`                                               |
| Build all published packages      | `npm run build`                                          |
| Build the docs site and Storybook | `npm run build:website`                                  |
| Work on one project               | `npx nx test ngx-branding`, `npx nx lint helix-icons`, … |
| Commit with a guided prompt       | `npm run commit`                                         |

`npm run lint` also formats the workspace (`nx format:write`), checks commit
messages and checks the pattern guides, so run it before pushing.

Unit tests use **Vitest** with `@analogjs/vitest-angular`. The workspace is
**zoneless and standalone**; see
[`.github/copilot-instructions.md`](.github/copilot-instructions.md) for the
coding baseline.

Build output goes to `dist/packages/<project>`.

## Repository layout

```text
packages/          One folder per Nx project (libraries and apps)
tools/
  scripts/         Build, release-notes and Figma sync scripts
  patterns/        Generates AI guidance from the pattern guides
  prompt-api-context/  Context files for AI assistants
adr/               Architecture Decision Records
.github/
  skills/          AI skills for Helix components, patterns and project setup
  agents/          AI agent definitions
Jenkinsfile        CI pipeline
```

## Figma and AI tooling

**Icons and pictograms from Figma.** `@hlx/helix-icons` is generated from the
Helix Figma library. It exports only the icons that aren't in Material Symbols,
plus every pictogram:

```bash
node tools/scripts/sync-helix-icons.mjs
```

The script needs a Figma personal access token in `FIGMA_TOKEN`, either exported
in your shell or in the repo's `.env` file, which git ignores. See the
[package README](packages/helix-icons/README.md).

**Patterns for people and AI.** Each Helix pattern is written once as a
`*.guide.md` file next to its docs page. A generator validates the guides
against the theme and produces the AI skill in `.github/skills/helix-patterns`:

```bash
npm run patterns:ai     # regenerate the skill
npm run lint:patterns   # fail if the skill is out of date (runs in CI)
```

The reasoning is in
[`adr/20261005-author-patterns-once-generate-ai-guidance.md`](adr/20261005-author-patterns-once-generate-ai-guidance.md).

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. In short:

- **Commits follow
  [Conventional Commits](https://www.conventionalcommits.org/)** and commitlint
  enforces them. The scope is the Nx project name, for example
  `feat(ngx-branding): …`, or `workspace` for repo-wide changes.
  `npm run commit` walks you through it.
- **Pre-commit hooks** run ESLint and Prettier on staged files.
- **Significant decisions** get an Architecture Decision Record in
  [`adr/`](adr).
- Changes should be accessible (WCAG), translatable, tested and backwards
  compatible where possible.

## CI and releases

Jenkins runs the [`Jenkinsfile`](Jenkinsfile) on every push: `npm ci`, then
`npm run lint`, `npm run test`, `npm run build` and `npm run build:website`.
Commits containing `[skip ci]` are skipped.

Releases are triggered manually in Jenkins from `main` or a `version/*` branch:

| Parameter        | Effect                                                           |
| ---------------- | ---------------------------------------------------------------- |
| `Publish`        | Version with `nx release`, tag, and publish to Artifactory       |
| `ReleaseAsAlpha` | Publish an `-alpha` prerelease (default) instead of a final one  |
| `Level`          | `patch`, `minor` or `major`                                      |
| `Website`        | Deploy the docs site                                             |
| `DryRun`         | Run every step without tagging, pushing, publishing or deploying |

Maintenance branches for earlier Angular majors live under `version/*`, for
example `version/angular-21`.
