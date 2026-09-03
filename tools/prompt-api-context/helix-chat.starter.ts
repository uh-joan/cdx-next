/**
 * Drop this into the seed app. `helixContext` is the raw text of
 * `helix-context.md` — import it with `?raw` (Vite) or inline it.
 */
import helixContext from './helix-context.md?raw';

export interface StarterCard {
  readonly icon: string;
  readonly title: string;
  readonly subtitle: string;
  /** Prepopulates the main intro input when the card is clicked. */
  readonly prompt: string;
}

export const STARTER_CARDS: readonly StarterCard[] = [
  {
    icon: 'palette',
    title: 'Pick the right variant',
    subtitle: 'Colors & sizes for a button group',
    prompt:
      'Show me the markup for a row of Helix buttons: a primary filled action, an outlined secondary action, and a destructive one. Then show the same row at small density.',
  },
  {
    icon: 'dashboard',
    title: 'Build a screen',
    subtitle: 'Header, page shell and footer',
    prompt:
      'Give me a standalone Angular 22 component that lays out a Helix app shell: branded header, page content area, and footer with two link groups. Use signals and no NgModules.',
  },
  {
    icon: 'rule',
    title: 'Review my template',
    subtitle: 'Catch hardcoded colors & legacy APIs',
    prompt:
      'Review this template for Helix anti-patterns — hardcoded colors, legacy Material directives, invented hlx-* classes — and give me the corrected version:\n\n```html\n<button mat-raised-button style="background-color: #6b21a8">Save</button>\n<button class="hlx-btn-small" mat-stroked-button>Cancel</button>\n```',
  },
  {
    icon: 'token',
    title: 'Which token do I use?',
    subtitle: 'Style without hardcoding hex values',
    prompt:
      'I need a card with a subtle background, a negative-state border and secondary text. Which Helix tokens should I use in SCSS, and what does the resulting stylesheet look like?',
  },
];

export async function createHelixSession(): Promise<LanguageModel> {
  const availability = await LanguageModel.availability();
  if (availability === 'unavailable') {
    throw new Error(
      'The built-in Prompt API is not available in this browser.',
    );
  }

  return LanguageModel.create({
    initialPrompts: [{ role: 'system', content: helixContext }],
  });
}
