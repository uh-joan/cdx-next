---
id: ai-sources
title: AI sources & citations
layer: pattern
status: beta
summary: >-
  Make an AI answer traceable — number claims with inline citations that reveal the
  cited passage and link to the source, and list the ranked source documents behind
  the answer, collapsed past a handful.
use-when: >-
  An AI answer is grounded in documents and the user must be able to check any
  statement against its source.
avoid-when: >-
  An ungrounded, generative draft the user is expected to edit (that's generate &
  rewrite), or a UI that has no underlying sources to cite.
components:
  - matButton
  - matIcon
hlx-classes:
  - hlx-link-inline
tokens:
  - surface-minimal
  - border-secondary
  - text-secondary
  - spacing-2
related-foundations:
  - ai
rules:
  - id: cite-inline
    text: >-
      Number claims in the answer with inline citations that reveal the exact cited
      passage and a link to its source, so the user can check any sentence against
      the document it came from (the Trustworthy principle).
  - id: reveal-on-hover-and-focus
    text: >-
      The citation detail opens on hover AND keyboard focus; the trigger is a real
      focusable control (aria-haspopup), never hover-only.
  - id: rank-and-collapse
    text: >-
      List the source documents in relevance order and numbered; show a handful and
      collapse the rest behind "Show N more" / "Show less" so the list never buries
      the answer.
  - id: link-to-source
    text: >-
      Every citation and document links to the real source — opened in a viewer or a
      new tab — with the locator (page, field) where available. No dead references.
  - id: source-metadata
    text: >-
      Give each document the context that lets the user judge it: title, publisher /
      source, territory and last-updated.
  - id: translate-and-disclose
    text: >-
      When a source is in another language, offer an AI translation that is clearly
      marked as AI with a "see original" toggle (and RTL support); handle its
      loading and error states with a retry.
anti-patterns:
  - id: uncited-claims
    text: An answer with no way to trace a statement back to a source.
  - id: hover-only-citation
    text: A citation that opens only on hover and can't be reached by keyboard.
  - id: dead-source
    text: A citation or document that links nowhere.
  - id: wall-of-sources
    text: Dumping every document with no ranking and no collapse.
  - id: silent-translation
    text: Showing translated source text without marking it AI or offering the original.
examples:
  - citations
evidence:
  - cortellis-reg-ai-app: inline source-citation chips opening a hover/focus tooltip (cited snippet + AI translate toggle with see-original + source link, RTL-aware); ranked source-documents list with per-doc Summarize/Compare and "Show N more sources" (preview 5, show-all threshold 6)
  - cmc-gui-docker: html-source-tooltip turns source ids in the answer into focusable aria-haspopup triggers showing a compact source-single card
  - off-x-ui: no source citations — the gap this pattern closes
---

## Overview

An AI answer is only as trustworthy as the user's ability to **check it**. When the
answer is grounded in documents, make every claim traceable: number it with an
inline citation that reveals the exact passage and links to the source, and list the
ranked documents behind the answer. reg-ai does both — inline citation chips with a
hover/focus tooltip (cited snippet + translate toggle + link) and a ranked
source-documents list with "Show N more sources"; cmc turns source ids into
focusable tooltip triggers. This is the
[AI foundation](/foundations/ai)'s *Trustworthy* principle made concrete.

## Two linked surfaces

- **Inline citations** — numbered references in the answer text. On hover or focus
  they reveal the cited passage and a link to the source; off-language sources offer
  an AI translation with a *see original* toggle.
- **Source list** — the ranked documents behind the answer, numbered, with title,
  publisher, territory and last-updated. Show a handful; collapse the rest.

```ts
// Rank, show a preview, collapse the rest — mirrors reg-ai's thresholds.
private readonly previewLimit = 5;
private readonly showAllThreshold = 6;

readonly visibleSources = computed(() => {
  const docs = this.sources();
  return docs.length <= this.showAllThreshold ? docs : docs.slice(0, this.previewLimit);
});
readonly hiddenCount = computed(() => Math.max(0, this.sources().length - this.previewLimit));
```

## Translate, and disclose

A source in another language gets an AI translation that is **labelled as AI** and
reversible — *AI translation · see original* — with loading, error (retry) and RTL
handling, exactly like a translated citation snippet.

## Do

- Number claims and reveal the cited passage on hover and focus.
- Rank the sources, show a few, collapse the rest.
- Link every citation and document to the real source.
- Give each document title, source, territory and last-updated.
- Mark AI translations as AI and offer the original.

## Don't

- Leave claims uncited or citations dead.
- Use a hover-only citation with no keyboard path.
- Dump every document with no ranking or collapse.
- Show translated text without disclosing it's AI.
