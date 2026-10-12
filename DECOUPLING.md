# Decoupling: standalone, local-only Helix repo

This repository is now **independent of `cdx` / Clarivate infrastructure** and
builds entirely on a local machine from the **public npm registry** plus its own
workspace packages. It no longer depends on, or publishes to, any Clarivate
service.

## What this means

- **Install & build are fully local.** Every third-party dependency resolves
  from `https://registry.npmjs.org`. The internal `@hlx/*` packages are npm
  workspaces, symlinked from `./packages` — nothing is fetched from a private
  registry.
- **No private registry.** `.npmrc` no longer maps the `@cdx` scope (or any
  scope) to Clarivate Artifactory. The repo installs with a plain `npm install`.
- **No publishing / deploy pipeline.** The Jenkins pipeline, the npm `publish:*`
  and `deploy:cdn` / `deploy:website` scripts, the per-package `deploy` targets,
  and the AWS/npm-publish tooling have been removed. This workspace publishes
  nowhere.
- **No Clarivate service descriptors.** The Backstage `catalog-info.yaml`
  (pointed at `git.clarivate.io`) has been removed.

## What changed in the decoupling

- `.npmrc`: removed the `@cdx:registry` Artifactory mapping.
- Root `package.json`: renamed `name` to `helix`; removed `publish:*`,
  `deploy:cdn`, `deploy:website` scripts and the `deploy-aws-s3-cloudfront`,
  `ngx-deploy-npm`, `npm-groovy-lint` devDependencies.
- Every `packages/*`: removed `deploy` / `deploy:cdn` scripts and the `deploy`
  Nx targets; repointed `repository.url` to this repo's own remote.
- **No selector prefix convention.** The ESLint `component-selector` /
  `directive-selector` prefix rules were removed (they previously required a
  `cdx`/`hlx` prefix), and the `prefix` field was dropped from the library
  `project.json` files. Components/directives may use any selector, so the
  library is simple to consume from any app. Existing selectors were left
  exactly as they are.
- Deleted the Clarivate-only `Jenkinsfile`, `catalog-info.yaml`,
  `.groovylintrc.json`, and the obsolete `@cdx`→`@hlx` migration tracking docs
  (`CDX-TO-HLX-MIGRATION.md`, `PUBLISH-WIRING-CHECKLIST.md`, `checks.md`,
  `graph.md`, `progress.md`).

## Known remaining `cdx` naming (cosmetic, not a dependency)

These do not tie the repo to Clarivate. Selector names are intentionally left
untouched — no prefix convention is enforced either way:

- **Existing component selectors** are a mix of `cdx-*` and `hlx-*` (e.g.
  `cdx-breadcrumb`, `cdx-header`, `hlx-header`, `hlx-footer`). They are left as
  they are; apps consume them by their existing names.
- **Consumer-onboarding guidance** under `.github/skills/helix-project-setup/`
  and `.github/copilot-instructions.md` still documents installing published
  `@hlx/*` packages from a Clarivate Artifactory registry. That describes a
  distribution model this repo no longer uses; update it if/when a new
  distribution model (or "develop locally only") is decided.
