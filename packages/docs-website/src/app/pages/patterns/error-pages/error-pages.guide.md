---
id: error-pages
title: Error pages
layer: template
status: beta
summary: >-
  Full-page states for 404, 403 and 500 — a centred hlx-empty-state with a
  pictogram, a plain explanation and one clear way forward, served by the router.
use-when: >-
  A whole route can't be shown — not found (404), not permitted (403), or a server
  error (500).
avoid-when: >-
  One region of an otherwise-working page failed — use the Page states error
  inside that region instead.
components:
  - HelixEmptyStateComponent
  - matButton
hlx-classes: []
tokens:
  - spacing-6
related-foundations: []
rules:
  - id: reuse-empty-state
    text: >-
      Build each error page from hlx-empty-state (tone="error") centred in the
      content area — same component as the in-region empty/error states, at page
      scale.
  - id: one-way-forward
    text: >-
      Give exactly one primary action that fits the error: 404 → go to home or
      search; 403 → request access or go back; 500 → retry, then contact support.
  - id: plain-explanation
    text: >-
      Say what happened in plain words and what the user can do — no codes-only
      pages, no stack traces, no blame.
  - id: routed
    text: >-
      Serve them from the router — a wildcard route for 404, a guard redirect for
      403, an error handler for 500 — inside the app shell so the header/nav stay.
  - id: distinct-from-region
    text: >-
      A failed region of a working page is not a full error page; keep those as
      the Page states error so the rest of the page stays usable.
anti-patterns:
  - id: code-only
    text: A bare "404" with no explanation or way forward.
  - id: stack-trace
    text: Showing a stack trace or raw server error to the user.
  - id: dead-end
    text: An error page with no action, leaving the user stuck.
  - id: full-page-for-region
    text: Replacing the whole page when only one region failed.
examples:
  - states
evidence:
  - off-x-ui: error-page, unauthorized, not-found pages (duplicated)
  - cmc-gui-docker: error page (pictogram + lines + buttons)
  - research: full-page 404 / 403 / 500 templates flagged as missing
---

## Overview

When a whole route can't be shown, give the user a real page — not a blank screen
or a bare code. Each error page is an `hlx-empty-state` (`tone="error"`) centred
in the content area, with a pictogram, a plain explanation and **one** clear way
forward. It's the same component as the in-region
[Page states](/patterns/page-states) error, at page scale, served by the router
inside the [App shell](/patterns/app-shell) so the header and nav stay.

## The three

| Code | Means | Primary action |
| --- | --- | --- |
| **404** | The page doesn't exist | Go to home (or search) |
| **403** | You don't have access | Request access / go back |
| **500** | Something went wrong our end | Retry, then contact support |

```html
<div class="error-page">
  <hlx-empty-state
    tone="error"
    heading="Page not found"
    message="We couldn't find that page. It may have moved or no longer exist."
  >
    <button hlx-empty-state-actions matButton="filled" class="hlx-btn-accent" routerLink="/">
      Go to home
    </button>
  </hlx-empty-state>
</div>
```

## Routing

- **404** — a wildcard route (`{ path: '**', component: NotFoundPage }`) inside the
  shell's children.
- **403** — a guard redirects to a `forbidden` route when access is denied.
- **500** — a global `ErrorHandler` routes to an `error` page; offer Retry.

## Do

- Build from `hlx-empty-state`; centre it in the content area.
- Give one primary action that fits the error.
- Explain in plain words; no codes-only pages, no stack traces.
- Keep the shell (header/nav) around the error.

## Don't

- Show a bare code or a stack trace.
- Leave the user with no way forward.
- Use a full error page when only one region failed.
