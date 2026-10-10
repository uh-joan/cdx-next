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
- [x] `package-lock.json` — **already done**: the migration re-linked the workspace,
      so the lock has 0 `@cdx/*` and 20 `@hlx/*` entries. (A fresh `npm install`
      after item 2 is still fine but not required for the names.)
- [ ] Doc/example strings (cosmetic, historical — leave or sweep as preferred):
      `packages/docs-website/.../analytics.text-highlighted.ts` (`@cdx/rcx-analytics`,
      a cross-product React package — **not** ours), ADR + planning docs
      (`graph.md`, `checks.md`, `progress.md`), release notes.
      Note: `packages/oti-snippet/README.md` uses `@sp:registry` — a *different*
      scope, unrelated to this migration; leave it.

## 7. Verification (definition of done)
- [ ] `rg '@cdx/'` returns zero across the **publishable** surface (package
      names, imports, publish scripts) — docs/planning excepted.
- [ ] A dry-run release (`Jenkinsfile` already supports a dry-run param) shows it
      would authenticate `@hlx` and publish `@hlx/*` to the chosen registry.
- [ ] From a scratch app: `npm install @hlx/theme-angular-material` resolves from
      the registry.
- [ ] `helix doctor <app>` on an app bumped to `@hlx` reports `legacy-cdx: pass`
      and `helix scan` shows the legacy-selector count at zero.

---

# 8. Activation runbook — exact edits (apply ONLY after `npm-hlx` exists)

Nothing below is applied yet. These are the precise, copy-paste changes to flip
publishing to `@hlx`. Do them in order. (`@hlx` publish was already proven
end-to-end against a local Verdaccio registry — publish + `npm install` of
`@hlx/colors`, `@hlx/theme-angular-material`, and `@hlx/clarivate-font` with its
self-hosted font binaries all succeeded. The only thing missing in production is a
real registry + push rights.)

## 8.0 Preconditions (verify first)
- [ ] `curl -s -o /dev/null -w '%{http_code}' https://repo.clarivate.io/artifactory/api/npm/npm-hlx/`
      returns **200** (today it is **404** — repo does not exist yet).
- [ ] The CI publish account (`ARTIFACTORY_USR` in Jenkins) has **deploy/push**
      permission on `npm-hlx`.
- [ ] Branch `hlx/publish-wiring-s3` is merged (it already switched the
      `helix-check` `.npmrc` regex and all setup guidance to `@hlx` / `npm-hlx` —
      checklist §3). Confirm with `git grep '@hlx:registry'`.

## 8.1 Edit `.npmrc` (checklist §2) — repo root
Clean break — replace the one line:
```diff
- @cdx:registry = https://repo.clarivate.io/artifactory/api/npm/npm-cdx/
+ @hlx:registry = https://repo.clarivate.io/artifactory/api/npm/npm-hlx/
```
Transition variant (publish/install BOTH scopes during a window): keep the `@cdx`
line and add the `@hlx` line beneath it.

## 8.2 Edit `Jenkinsfile` (checklist §4) — the `npm-cli-login` block (~line 182)
```diff
  npx npm-cli-login \
      -u ${ARTIFACTORY_USR} \
      -e ${ARTIFACTORY_USR}@clarivate.com \
      -p ${ARTIFACTORY_PSW} \
-     -r https://repo.clarivate.io/artifactory/api/npm/npm-cdx \
-     -s @cdx \
+     -r https://repo.clarivate.io/artifactory/api/npm/npm-hlx \
+     -s @hlx \
      --config-path=.
```
Nothing else in that stage changes: the `find packages … -exec cp ./.npmrc {}`
copy and `npm run publish:release` (→ `nx run-many --target=deploy` → `npm publish`
per package) are scope-agnostic — they publish whatever the package.json `name`
declares (all `@hlx` now) to whatever `.npmrc` maps (§8.1).
Transition variant: add a **second** `npm-cli-login … -s @cdx -r …/npm-cdx` call
before the first so both scopes are authenticated.

## 8.3 CDN (checklist §5) — SEPARATE AWS track, decide before touching
This is NOT part of `repo.clarivate.io`; it is S3/CloudFront under IAM role
`arn:aws:iam::809146824789:role/cl/app/cdx/jenkins-cdx-prod_role` (itself
`@cdx`-named). Decide per package:
- **`clarivate-font`** — its `deploy:cdn` is now **dead** (font self-hosted in the
  package). Safe to **delete** `packages/clarivate-font/package.json` `scripts.deploy:cdn`
  once you confirm no external consumer still fetches the font from the CDN.
- **`theme-snackbar` / `theme-highcharts` / `theme-ag-grid`** — only matter if apps
  still load these themes’ CSS from the CDN rather than via npm. If so: repoint each
  `deploy:cdn --destination @cdx/<pkg>/…` → `@hlx/<pkg>/…` **and** have infra create
  the matching path (and possibly a new bucket + IAM role) on AWS. If all consumers
  npm-install these, drop the CDN deploy entirely.
- The `Jenkinsfile` `withAWS(role: …/cdx/jenkins-cdx-prod_role)` + `npm run deploy:cdn`
  block (lines ~191–196) is what runs these — update or remove it alongside.
- **Open decision:** does `@hlx` need a CDN at all? The font (the original reason)
  no longer does.

## 8.4 Verify (checklist §7)
- [ ] Jenkins **DryRun** run: log shows it would `npm-cli-login … -s @hlx` and
      publish `@hlx/*` to `npm-hlx`.
- [ ] Real run publishes; then `npm view @hlx/theme-angular-material --registry
      https://repo.clarivate.io/artifactory/api/npm/npm-hlx/` returns the package.
- [ ] Scratch app with `@hlx:registry=…/npm-hlx/`: `npm install
      @hlx/theme-angular-material` resolves from the registry.
- [ ] `git grep '@cdx/'` across the publishable surface is zero (docs/planning/
      cross-product `rcx-analytics`/CDN-if-kept excepted).

## 8.5 One-shot application (when ready)
A single commit can carry §8.1 + §8.2 (and §8.3 if the CDN decision is made):
```
git checkout -b hlx/activate-publish origin/main
# apply 8.1 and 8.2 edits
git commit -am "chore(publish): activate @hlx publishing to npm-hlx"
```
Then open a PR, run the Jenkins DryRun from it, and merge once the dry-run is clean.
