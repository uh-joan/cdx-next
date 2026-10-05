import { createHostFactory, SpectatorHost } from '@ngneat/spectator/vitest';
import { html } from 'common-tags';

import { HelixNotificationComponent } from './helix-notification.component';

describe('HelixNotificationComponent', () => {
  let host: SpectatorHost<HelixNotificationComponent>;
  const createHost = createHostFactory(HelixNotificationComponent);

  it('defaults to the primary inline theme', () => {
    host = createHost(html`<hlx-notification>Message</hlx-notification>`);

    expect(host.element).toHaveClass('hlx-notification--primary');
    expect(host.element).toHaveClass('hlx-notification--inline');
    expect(host.element).toHaveAttribute('role', 'status');
  });

  it.each([
    ['info', 'primary'],
    ['success', 'positive'],
    ['warn', 'warn'],
    ['negative', 'negative'],
  ])('maps severity "%s" to the %s theme', (severity, theme) => {
    host = createHost(
      html`<hlx-notification severity="${severity}">Message</hlx-notification>`,
    );

    expect(host.element).toHaveClass(`hlx-notification--${theme}`);
  });

  it('announces negative notifications as alerts', () => {
    host = createHost(
      html`<hlx-notification severity="negative">Message</hlx-notification>`,
    );

    expect(host.element).toHaveAttribute('role', 'alert');
  });

  it('renders and emits both actions', () => {
    host = createHost(
      html`<hlx-notification action="Retry" secondaryAction="View details">
        Message
      </hlx-notification>`,
    );
    const action = vi.fn();
    const secondary = vi.fn();
    host.output('actionEvent').subscribe(action);
    host.output('secondaryActionEvent').subscribe(secondary);

    const buttons = host.queryAll<HTMLButtonElement>(
      '.hlx-notification__actions button',
    );
    expect(buttons.map((b) => b.textContent?.trim())).toEqual([
      'Retry',
      'View details',
    ]);

    host.click(buttons[0]);
    host.click(buttons[1]);
    expect(action).toHaveBeenCalledWith('Retry');
    expect(secondary).toHaveBeenCalledWith('View details');
  });

  it('hides itself when dismissed', () => {
    host = createHost(
      html`<hlx-notification dismissable="true">Message</hlx-notification>`,
    );
    const dismiss = vi.fn();
    host.output('dismissEvent').subscribe(dismiss);

    host.click('.hlx-notification__close');

    expect(dismiss).toHaveBeenCalled();
    expect(host.element).toHaveClass('dismissed');
  });
});
