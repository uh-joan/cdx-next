# `@hlx` publish-wiring checklist

The scope **rename is done** — all 20 publishable packages are `@hlx/*`, zero
`@cdx` names. What remains before `@hlx` can actually be **published to the
registry and installed by consumer apps** is the publish/registry wiring, which
is still `@cdx` end to end. These are the items the migration graph flagged as
HARD STOPs (`graph.md` → Open questions). Until they are done, the release
pipeline would build `@hlx/*`-named packages but publish them as `@cdx`, and no
app can `npm install @hlx/*`.

Audited on branch `hlx/scope-migration`. Line refs are from that state.

## 1. Pick the `@hlx` registry home — ✅ DECIDED
- [x] **Decision: a new Artifactory repo `npm-hlx`** →
      `https://repo.clarivate.io/artifactory/api/npm/npm-hlx/`.
- [x] Mismatch resolved: all in-repo guidance/validation now points at the single
      canonical `npm-hlx` URL (was `npm-cdx` in `.npmrc` vs `npm-central` in the
      checker/docs). The root `.npmrc` itself still needs the mapping (item 2).

## 2. Registry mapping (`.npmrc`)
- [ ] Root `.npmrc` currently maps **only** `@cdx:registry = …/npm-cdx/` and has
      **no `@hlx:registry`**. Add the `@hlx:registry = …/<chosen repo>/` line.
- [ ] A grep for `@hlx:registry` / `npm-hlx` returns nothing anywhere in the
      repo today — this mapping does not exist yet.

## 3. `helix doctor` / `helix-check` registry regex — ✅ DONE
- [x] `packages/ngx-branding/src/bin/helix-check.js` regex now requires
      `@hlx:registry = …/npm-hlx/`. (Flag-day: it does **not** also accept the
      legacy `@cdx` line — add that back only if item 2 adopts a dual-source
      transition window.)
- [x] Registry string + generic `@cdx` scope mentions updated to `@hlx` /
      `npm-hlx` across the setup guidance (source + mirror + prompt-context + doc
      site), and `README.md`:
  - `.github/skills/helix-project-setup/{SKILL.md, references/helix-check-troubleshooting.md, references/optional-packages.md}`
  - `packages/helix-ai/payload/skills/helix-project-setup/…` (mirror; kept in sync)
  - `tools/prompt-api-context/helix-project-setup-context.md`
  - `packages/docs-website/.../quick-start-new-project.html`
  - `README.md` (install `.npmrc` snippet + Artifactory access note)

## 4. Jenkins publish step
- [ ] `Jenkinsfile:186` logs in with `npm-cli-login … -s @cdx` before
      `npm run publish:release` (line 190). Change the scope to `@hlx` (or add an
      `@hlx` login) and point it at the chosen registry.
- [ ] Confirm `publish:release` resolves package registries from the updated
      `.npmrc` (item 2), not a hard-coded `@cdx` target.

## 5. CDN deploy scripts (carve-out — partially done)
The brand font was self-hosted (CDN dependency dropped), but these `deploy:cdn`
scripts still target `@cdx/...` destinations on the `cdx-cdn…clarivate.io`
bucket. This is cross-team (AWS/CDN) work:
- [ ] `packages/clarivate-font/package.json:23`
- [ ] `packages/theme-ag-grid/package.json:29`
- [ ] `packages/theme-highcharts/package.json:18`
- [ ] `packages/theme-snackbar/package.json:8`
- [ ] Decide whether `@hlx` needs a CDN path at all (font no longer does), and
      whether the bucket/distribution is renamed or reused.

## 6. Residual `@cdx` cleanup (non-blocking)
- [ ] `package-lock.json` still references `@cdx/*` — regenerate with `npm install`
      after the registry mapping lands.
- [ ] Doc/example strings: `packages/docs-website/.../analytics.text-highlighted.ts`,
      `packages/oti-snippet/README.md` (`@sp:registry`), ADR + planning docs
      (`graph.md`, `checks.md`, `progress.md`) — cosmetic, historical; leave or
      sweep as preferred.

## 7. Verification (definition of done)
- [ ] `rg '@cdx/'` returns zero across the **publishable** surface (package
      names, imports, publish scripts) — docs/planning excepted.
- [ ] A dry-run release (`Jenkinsfile` already supports a dry-run param) shows it
      would authenticate `@hlx` and publish `@hlx/*` to the chosen registry.
- [ ] From a scratch app: `npm install @hlx/theme-angular-material` resolves from
      the registry.
- [ ] `helix doctor <app>` on an app bumped to `@hlx` reports `legacy-cdx: pass`
      and `helix scan` shows the legacy-selector count at zero.
