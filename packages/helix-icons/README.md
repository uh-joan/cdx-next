# @cdx/helix-icons

The Clarivate icons and pictograms from the Helix Figma library that are not
part of Google's Material Symbols.

Most Helix icons are standard Material icons. Keep using those through the
Material Symbols font:

```html
<mat-icon>search</mat-icon>
```

## Setup

```ts
import { provideHttpClient } from '@angular/common/http';
import { provideHelixIcons } from '@cdx/helix-icons';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideHelixIcons()],
};
```

## Icons

Custom icons are bundled with the package and registered in the `hlx` namespace.
They use `currentColor`, so they follow the text colour and the `hlx-icon-*`
classes.

```html
<mat-icon svgIcon="hlx:ai-summary"></mat-icon>
```

`HELIX_ICONS` lists every name, and `HelixIconName` types them.

## Pictograms

Pictograms are larger multi-colour illustrations, so they are loaded on first
use instead of bundled. Copy them into your app's assets:

```json
{
  "glob": "**/*.svg",
  "input": "node_modules/@cdx/helix-icons/svg/pictograms",
  "output": "assets/helix-pictograms"
}
```

Then use the `hlx-pictogram` namespace:

```html
<mat-icon svgIcon="hlx-pictogram:pictogram-001-light-purple-blue"></mat-icon>
```

If you serve them somewhere else, pass the path:
`provideHelixIcons({ pictogramsPath: 'static/pictograms' })`.

## Updating from Figma

```bash
node tools/scripts/sync-helix-icons.mjs
```

Put `FIGMA_TOKEN=<personal access token>` in the repo's `.env` file (ignored by
git) or export it in your shell. The script exports every icon that isn't in
Material Symbols, plus all pictograms, normalises the SVGs and regenerates
`src/lib/*.generated.ts`. Use `--build-only` to regenerate the TypeScript after
editing the SVGs by hand.
