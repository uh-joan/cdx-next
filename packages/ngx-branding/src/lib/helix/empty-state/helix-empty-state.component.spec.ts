import { createHostFactory, SpectatorHost } from '@ngneat/spectator/vitest';
import { html } from 'common-tags';

import { HelixEmptyStateComponent } from './helix-empty-state.component';

describe('HelixEmptyStateComponent', () => {
  let host: SpectatorHost<HelixEmptyStateComponent>;
  const createHost = createHostFactory(HelixEmptyStateComponent);

  it('renders the heading and message as an empty state by default', () => {
    host = createHost(
      html`<hlx-empty-state
        heading="No alerts yet"
        message="Alerts you create will appear here."
      ></hlx-empty-state>`,
    );

    expect(host.element).toHaveClass('hlx-empty-state--empty');
    expect(host.query('.hlx-empty-state__heading')).toHaveText('No alerts yet');
    expect(host.query('.hlx-empty-state__message')).toHaveText(
      'Alerts you create will appear here.',
    );
  });

  it('falls back to the inbox icon for an empty state', () => {
    host = createHost(html`<hlx-empty-state heading="Nothing here"></hlx-empty-state>`);

    expect(host.query('.hlx-empty-state__icon')).toHaveText('inbox');
  });

  it('is not announced to assistive technology when empty', () => {
    host = createHost(html`<hlx-empty-state heading="Nothing here"></hlx-empty-state>`);

    expect(host.element).not.toHaveAttribute('role');
  });

  it('announces an error tone with role="alert" and the error icon', () => {
    host = createHost(
      html`<hlx-empty-state
        tone="error"
        heading="Couldn't load alerts"
      ></hlx-empty-state>`,
    );

    expect(host.element).toHaveClass('hlx-empty-state--error');
    expect(host.element).toHaveAttribute('role', 'alert');
    expect(host.query('.hlx-empty-state__icon')).toHaveText('error_outline');
  });

  it('lets the icon input override the default', () => {
    host = createHost(
      html`<hlx-empty-state heading="No results" icon="search_off"></hlx-empty-state>`,
    );

    expect(host.query('.hlx-empty-state__icon')).toHaveText('search_off');
  });

  it('projects actions into the actions slot', () => {
    host = createHost(
      html`<hlx-empty-state tone="error" heading="Couldn't load alerts">
        <button hlx-empty-state-actions type="button">Retry</button>
      </hlx-empty-state>`,
    );

    expect(host.query('.hlx-empty-state__actions button')).toHaveText('Retry');
  });
});
