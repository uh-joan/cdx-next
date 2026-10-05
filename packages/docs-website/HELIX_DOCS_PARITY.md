# Helix docs parity plan

Audit of
[helix.clarivate.io](https://helix.clarivate.io/latest/welcome-to-the-helix-design-system-WxH1ajug)
(Supernova, 95 pages) against `packages/docs-website`, and a phased plan to
bring our docs in line with it. Audited 2026-10-05.

## How the two sites relate

- Helix (Supernova) is the **design** source of truth: principles, foundations,
  component usage guidance (Options / Usage / Do & Don't), and patterns.
- Every Helix component has an **Overview** tab (design guidance) and a **Code**
  tab. The Code tab is an `<iframe>` of _this_ app's `/examples/:component`
  route, currently pinned to the **v19** deployment
  (`v19-helix-website.dev.sp.aws.clarivate.net`).
- Development and Services pages on Helix are near-verbatim copies of ours.

## Findings

> These are the findings of the original audit. The phased plan below tracks
> what has been done since; only §3 (Supernova) and the asset decision are still
> open.

### 1. Information architecture

| Helix section | Helix pages                                                                                           | Ours                                                                                  | Gap                                                                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Home          | Welcome                                                                                               | `home`                                                                                | Content differs                                                                                                                       |
| Foundations   | Principles & foundations, Color, Typography, Iconography, Branding, Elevation, Density, AI            | `foundations/about-helix` (lorem ipsum)                                               | **All 8 missing**. Colors/Typography/Elevation/Density exist under Development but only as token/implementation docs                  |
| Components    | Overview + 34 components (Overview + Code tabs)                                                       | 41 pages, examples only                                                               | Design guidance missing on every page (see §2)                                                                                        |
| Patterns      | Filters (overview, basic, modal, panel), Sidebar (overview, header+nav+sidebar, nested nav, products) | `patterns` route exists but is empty and hidden from the header                       | **All 8 missing**                                                                                                                     |
| Development   | Getting started, Quick start, Responsive, Services/*                                                  | Same + colors, typography, elevation, density, contributing, migration, release notes | Parity (ours is a superset)                                                                                                           |
| Services      | Overview, Analytics, Authentication, OTI snippets, Session activity, Translations                     | Same                                                                                  | OTI page on Helix has extra sections: Pendo integration, Snowplow integration, ZenDesk integration, Domain and subdomain issues, Keys |

### 2. Components

Our component pages are `title + subtitle + Material API link + examples`. Helix
overview pages add, per component: intro sentence, implementation note,
**Options** (variants: color, size, density, icons, states), **Usage** (Do /
Don't with images), and comparisons ("Buttons vs. links", "Chips vs. buttons",
"Snackbars vs. dialogs").

Name/slug mapping (Helix → ours):

| Helix                       | Ours                                | Notes                                                                                |
| --------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------ |
| Button                      | `buttons`                           |                                                                                      |
| Button - Icon button        | —                                   | Helix embeds `/examples/button/icon-button`, which doesn't resolve (no `button` key) |
| Button - FAB                | —                                   | Helix embeds `/examples/buttons/buttons-fab-default`                                 |
| Chip                        | `chips`                             |                                                                                      |
| Expansion panel (accordion) | `expansion-panel`                   |                                                                                      |
| Hyperlink                   | —                                   | **Missing**                                                                          |
| Icon                        | `icons`                             |                                                                                      |
| Input (text field)          | `text-input`                        |                                                                                      |
| Sidenav (Navigation drawer) | `sidenav`                           |                                                                                      |
| Slide toggle (switch)       | `slide-toggle`                      |                                                                                      |
| Table and data grid         | `table`, `data-grid`, `sort-header` | Helix merges the three                                                               |
| Tooltip                     | `tooltips`                          |                                                                                      |

Ours only (keep): autocomplete, form-field, highcharts, notifications, stepper,
text-area, time-picker, toolbar.

### 3. Broken Code-tab embeds on Helix (Supernova-side fix)

These Helix Code tabs iframe the wrong example (or a missing one):

| Helix page          | Embeds                        | Should embed                |
| ------------------- | ----------------------------- | --------------------------- |
| Divider             | `examples/dialog`             | `examples/divider`          |
| Expansion panel     | `examples/buttons`            | `examples/expansion-panel`  |
| Hyperlink           | `examples/buttons`            | `examples/hyperlink`        |
| Menu                | `examples/list`               | `examples/menu`             |
| Paginator           | `examples/list`               | `examples/paginator`        |
| Progress bar        | `examples/checkbox`           | `examples/progress-bar`     |
| Progress spinner    | `examples/buttons`            | `examples/progress-spinner` |
| Select              | `examples/text-input`         | `examples/select`           |
| Sidenav             | `examples/text-input`         | `examples/sidenav`          |
| Skeleton loader     | `examples/text-input`         | `examples/skeleton-loader`  |
| Slider              | `examples/slide-toggle`       | `examples/slider`           |
| Snackbar            | `examples/slide-toggle`       | `examples/snackbar`         |
| Table and data grid | `examples/buttons`            | `examples/table`            |
| Tabs                | `examples/buttons`            | `examples/tabs`             |
| Tooltip             | `examples/buttons`            | `examples/tooltips`         |
| Tree                | `examples/buttons`            | `examples/tree`             |
| Icon button         | `examples/button/icon-button` | `examples/icon-button`      |
| FAB                 | `examples/buttons/…-default`  | `examples/fab`              |

All embeds also point at the v19 host and should move to the current one. The
old URLs Helix uses today (`button/icon-button`, `buttons/buttons-fab-default`,
Helix component names like `tooltip`) keep resolving on our side, as do
`button-icon-button` and `button-fab`.

### 4. Content quality

- `foundations/about-helix` is lorem ipsum.
- Patterns is an empty shell and commented out of the header nav.
- Our nav labels differ from Helix ("Buttons" vs "Button", "Chips" vs "Chip",
  "Tooltips" vs "Tooltip", etc.).
- Helix's design content relies heavily on images (swatches, pictograms,
  Do/Don't illustrations) hosted on Supernova's CDN.

## Phased plan

### Phase 0: Infrastructure (small, unblocks the rest)

- [x] Reusable Do / Don't block: `<cdx-usage-guideline kind="do|dont">` cards
      inside a `<cdx-usage-guidelines>` grid (`components/usage-guideline`).
- [x] Component page tabs: `<hlx-page tabbed>` with **Overview**
      (`<div overview>`) and **Code** (`<div code>`: Material API link,
      Storybook playground from `storybookId`, examples), addressable with
      `?tab=code`.
- [x] `/examples` slug aliases so every Helix embed resolves (`button`, `chip`,
      `icon`, `input-text-field`, `tooltip`, …).
- [x] Image hosting: Helix images are downloaded into `src/assets/helix/<page>/`
      (served at `helix/<page>/…`), each folder with a `manifest.json` of the
      source URL, section and Do/Don't card. Global `.doc-image` /
      `.doc-image-grid` styles.

### Phase 1: Foundations

- [x] Principles & foundations (replaces lorem-ipsum About Helix)
- [x] Color, Typography, Iconography, Branding, Elevation, Density, AI (design
      guidance, cross-linked to the Development token pages)
- [x] Images for the above (Branding pictograms, AI spec/examples/icons,
      principles, density). Iconography's icon images are rendered live instead.

### Phase 2: Components

- [x] Overview content for every component page that has a Helix page (Options /
      Usage / Do & Don't). Pages without a Helix page (autocomplete, form field,
      highcharts, notifications, stepper, time picker, toolbar) say that
      guidance isn't published yet.
- [x] New pages: Hyperlink (`/components/hyperlink`), Button - Icon button
      (`/components/icon-button`), Button - FAB (`/components/fab`), each with
      Overview/Code tabs and a story.
- [x] Nav labels use the Helix names; URLs unchanged, so no redirects needed.
      The site search index lists every page under the same names.
- [x] Component overview page: every component with a link, description and the
      Figma link from Helix where one exists.

### Phase 3: Patterns

- [x] Filters: overview, basic filters, filter modal, filter panel
      (`/patterns/filters/…`)
- [x] Sidebar: overview, header with navigation and sidebar, nested navigation,
      products working best with sidebar (`/patterns/sidebar/…`)
- [x] Re-enable Patterns in the header nav
- [x] Images (decision tree, "when to use" illustrations, Do/Don't cards)
- [x] Component Overview images on every component page (Options illustrations
      and Do/Don't cards)

### Phase 4: Development, Services, Home

- [x] OTI snippet: on review ours already had every Helix section (the audit was
      wrong) plus more (Pendo backend integration, CNAME, versions). Fixed the
      empty "Return type" column and broken snippets.
- [x] Home: Helix welcome title and section cards, plus a Patterns card.
- [x] Diff remaining Development/Services pages for drift. Ours is newer for
      Session activity, Translations and Quick start (Angular 22, standalone);
      fixed broken links and snippet bugs.
- [x] Session activity: `expireWarningMinutes` must be smaller than
      `expireDurationMinutes` (confirmed in the service code; Helix still says
      "bigger").

### Phase 5: Storybook (component playground)

Goal: every component documented with **all** of its configurations
(color/theme, size, density, appearance, states, icons, disabled, …) as
interactive Storybook controls, embedded in the component pages.

**Status:** `packages/storybook` (Nx project `storybook`) has stories for every
docs component page (42 files, 200+ stories), each embedded in that page's Code
tab. Run it with `npx nx run storybook:storybook` (port 4400) next to the docs
dev server.

- [x] Add a Storybook Nx project (Angular + Vite via
      `@analogjs/storybook-angular`, matching our Vite/Analog toolchain) that
      loads the Helix theme, fonts and density setup.
- [x] Density toolbar global (0 to -4) so every story can be checked against
      Foundations rules.
- [ ] Theme toolbar global (light/dark) once the Helix theme ships a dark
      variant.
- [ ] Stories with full `argTypes` per component:
  - [x] `@cdx/ngx-branding` Header and Footer (every input, projected content
        toggles, theme colors).
  - [x] Remaining `@cdx/ngx-branding` components (notification, rich tooltip).
  - [x] Button (variant × color × size × icon × disabled, plus a matrix story).
  - [x] Remaining Helix-styled Material components, following the Options
        sections on Helix (e.g. Input: appearance × state × size × icons).
  - [ ] AI variants (AI button, FAB, avatar) per Foundations › AI.
- [x] Autodocs and the a11y addon (violations reported, not yet failing).
- [ ] Turn a11y violations into failures once existing ones are fixed.
- [x] Embed component docs (primary story + controls table + all stories) on
      component pages: `<cdx-storybook-embed componentId="…">`.
- [x] Roll the embed out to every component page (Code tab).
- [x] Deploy Storybook next to the docs site (`/storybook`):
      `npm run build:website` now runs `docs-website:build-site`, which builds
      the docs and then Storybook into `dist/packages/docs-website/storybook`,
      so the existing deploy step uploads both. The embed reads
      `VITE_STORYBOOK_URL`, defaulting to `/storybook` in production.
- [ ] Interaction/visual tests from stories in CI (optional, later).

Found while prototyping:

- The Helix theme mixin doesn't emit Material system tokens (`--mat-sys-*`), so
  docs examples that use them (e.g. `.background-invert` in the button examples)
  get no background. Storybook resolves colors with `mat.get-theme-color()`
  instead.
- The elevated button in the `hlx-btn-invert` color is white on the inverse
  surface background, so its label isn't visible. Worth checking with design.
- The breadcrumbs story renders `xng-breadcrumb` with the Helix template instead
  of the `<cdx-breadcrumb>` wrapper, because Storybook doesn't resolve
  `@cdx/theme-xng-breadcrumb` from source yet.
- Theme classes added from Helix values: `hlx-btn-ai` (AI gradient `#3595F0` →
  `#B175E1` at 150°, filled buttons and FABs), `hlx-link-blue` (`#1565C0`,
  visited `#282C75`), `hlx-link-visited`, `hlx-link-inline` (underline + 600),
  `.hlx-gradient-ai`, plus tokens in `tokens.scss`. White text on the AI
  gradient is 3.1–3.4:1 (fails 4.5:1 for the 14px label; a Helix colour issue).
  The AI _stroked_ button (gradient outline) isn't themed yet.
- Still approximated, needing design specs: the Helix **Default** header is two
  rows (dark Clarivate bar + white product bar with navigation) and doesn't
  exist in `@cdx/ngx-branding`; our `hlx-header` is Helix's "Condensed". Also
  divider "dark", button toggle Light/Dark and equal/variable width, slide
  toggle "three sizes".

#### Helix content issues to raise with design

Fixed or dropped while porting:

- Copied from another page: Expansion panel's Usage (Button's Do/Don'ts);
  Dialog's "Color and types" (Button's text); Tabs and Breadcrumbs intros name
  the wrong component ("table", "slide toggle"); Badge and Select intros name
  the wrong Material framework.
- Counts that don't match the list: Badge "four color themes" (lists two), Icon
  "four" (lists three), Hyperlink "two colors" (lists three), FAB "Icon buttons
  have three color themes" (lists four).
- Hyperlink has no intro text (just "…").
- Badge Don't card "Ensure contrast and readability…" reads as a Do.
- Header and Footer Usage sections are empty; Select has an empty "States"
  section.
- Typos and missing spaces/periods ("Manus", "information.They",
  "documentation.After", "UI element.There", missing closing quotes).

### Phase 6: Supernova (needs `supernova-helix` MCP authorized)

- [ ] Repoint every Code-tab embed to the current host
      (`v22-helix-website.dev.sp.aws.clarivate.net`) and the correct example
      (§3), with heights matching our example pages. The shared draft still has
      33 of 34 on v19 (Divider is fixed in the draft but unpublished). Publish
      only after this branch is deployed (Hyperlink, Icon button and FAB
      examples are new). Supernova supports Storybook embeds natively, so the
      Code tabs could later embed the stories instead.
- [ ] Fix the Helix copy errors listed above in Supernova too.
- [ ] The header's version list comes from `latest-helix-website…`, which still
      serves v19 (versions 18–19 only); point it at the current deployment or
      update "latest".
- [ ] Decide which site is canonical for Development/Services and remove the
      duplicate
