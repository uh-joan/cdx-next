---
id: dialogs
title: Dialogs
layer: pattern
status: stable
summary: >-
  A modal for one decision or one short task. Open it through a named size
  preset, structure the body with the Material dialog slots, and put the primary
  action on the right.
use-when: >-
  Confirming a decision (especially a destructive one), a short focused task, or
  showing detail beside the current page without navigating away.
avoid-when: >-
  A long or multi-step flow (use a page or a stepper), or a passive message that
  needs no decision (use a snackbar or hlx-notification).
components:
  - MatDialog
  - MatDialogModule
  - matButton
  - matIconButton
hlx-classes:
  - hlx-btn-negative
tokens:
  - dialog-size-sm
  - dialog-size-md
  - dialog-size-lg
  - dialog-size-side
  - dialog-max-width
  - border-radius-default
  - elevation-lg
related-foundations:
  - elevation
rules:
  - id: size-preset
    text: >-
      Open every dialog through a named size preset (sm / md / lg / side /
      fullscreen), never with a raw width string. One set of widths keeps dialogs
      consistent.
  - id: dialog-slots
    text: >-
      Build the body from mat-dialog-title, mat-dialog-content and
      mat-dialog-actions — not a mat-card inside the dialog. The slots give the
      correct padding, scrolling and focus order.
  - id: keep-autofocus
    text: >-
      Leave autoFocus on. Focus lands on the least destructive action; never
      focus a Delete button by default.
  - id: action-order
    text: >-
      Put actions at the end (right): dismiss on the left, the primary action on
      the right. A destructive primary action uses hlx-btn-negative.
  - id: labelled-close
    text: >-
      If there is a close affordance, it is a matIconButton with
      aria-label="Close" and mat-dialog-close.
  - id: confirm-in-page
    text: >-
      window.confirm is not available in the product; build confirmation as a
      dialog with two actions.
anti-patterns:
  - id: raw-width
    text: Opening a dialog with a raw width such as width:'80vw'.
  - id: autofocus-off
    text: Setting autoFocus:false to stop a destructive button being focused, instead of ordering the actions.
  - id: card-in-dialog
    text: Building the body from mat-card inside MatDialog instead of the dialog slots.
  - id: destructive-primary-colour
    text: Styling a destructive confirm as the normal primary action with no negative treatment.
examples:
  - confirm-destructive
  - side-panel
evidence:
  - cmc-gui-docker: modal.config.ts size factory (but autoFocus:false — corrected here)
  - off-x-ui: width '80vw' x308, autoFocus:false x360, one alerts modal opened from 249 call sites
  - cortellis-reg-ai-app: three dialog header styles, widths 480px / 50vw / 1024px
---

## Overview

A dialog interrupts the user for **one** decision or one short task. Anything
longer belongs on a page. Across the apps we audited, dialogs were the least
consistent surface: raw `80vw` widths in hundreds of places, `autoFocus` turned
off to stop a destructive button being focused, and bodies built from
`mat-card` instead of the dialog slots. This pattern fixes the defaults.

## Sizes

Open every dialog through a named preset, so widths are consistent and the set is
small. The `.hlx-dialog-*` panel classes and their size tokens
(`$dialog-size-sm` … `$dialog-size-side`, `$dialog-max-width`) ship from
`@cdx/theme-angular-material` via `theme-helix-overrides`, so an app that applies
the Helix theme gets them for free. Wrap them in a small typed helper:

```ts
import { MatDialogConfig } from '@angular/material/dialog';

export type HelixDialogSize = 'sm' | 'md' | 'lg' | 'side' | 'fullscreen';

const PANEL_CLASS: Record<HelixDialogSize, string> = {
  sm: 'hlx-dialog-sm', // ~400px — a confirm
  md: 'hlx-dialog-md', // ~560px — a short form
  lg: 'hlx-dialog-lg', // ~800px — a rich task
  side: 'hlx-dialog-side', // right-docked panel
  fullscreen: 'hlx-dialog-fullscreen',
};

export function helixDialog<D>(
  size: HelixDialogSize,
  config: MatDialogConfig<D> = {},
): MatDialogConfig<D> {
  // autoFocus stays on; order the actions so focus lands on the safe one.
  return { panelClass: PANEL_CLASS[size], ...config };
}
```

## Structure

```html
<h2 mat-dialog-title>Delete this watch?</h2>
<mat-dialog-content>
  <p>You'll stop receiving alerts for Pembrolizumab. This can't be undone.</p>
</mat-dialog-content>
<mat-dialog-actions align="end">
  <button matButton mat-dialog-close>Cancel</button>
  <button matButton="filled" class="hlx-btn-negative" [mat-dialog-close]="true">
    Delete
  </button>
</mat-dialog-actions>
```

Corners are `border-radius-default` and the overlay sits at `elevation-lg`; both
come from the theme, so you do not set them. `align="end"` puts the actions on
the right, Cancel before the destructive Delete, so `autoFocus` lands on Cancel.

## Do

- Open through a size preset; keep the set to sm / md / lg / side / fullscreen.
- Use `mat-dialog-title` / `-content` / `-actions`.
- Keep `autoFocus` on and order actions so the safe one is focused.
- Use `hlx-btn-negative` for a destructive confirm.

## Don't

- Pass a raw `width`.
- Turn `autoFocus` off to dodge focusing a destructive button.
- Build the body from `mat-card`.
- Rely on `window.confirm`.
