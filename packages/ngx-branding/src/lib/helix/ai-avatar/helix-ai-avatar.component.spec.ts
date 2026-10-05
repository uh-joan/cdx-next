import { createHostFactory, SpectatorHost } from '@ngneat/spectator/vitest';
import { html } from 'common-tags';

import { HelixAiAvatarComponent } from './helix-ai-avatar.component';

describe('HelixAiAvatarComponent', () => {
  let host: SpectatorHost<HelixAiAvatarComponent>;
  const createHost = createHostFactory(HelixAiAvatarComponent);

  it('renders a static gradient avatar by default', () => {
    host = createHost(html`<hlx-ai-avatar></hlx-ai-avatar>`);

    expect(host.element).toHaveClass('hlx-ai-avatar--gradient');
    expect(host.element).not.toHaveClass('hlx-ai-avatar--animated');
    expect(host.queryAll('.hlx-ai-avatar__sparkle')).toHaveLength(3);
  });

  it('applies the dark theme and animation', () => {
    host = createHost(
      html`<hlx-ai-avatar theme="dark" animated></hlx-ai-avatar>`,
    );

    expect(host.element).toHaveClass('hlx-ai-avatar--dark');
    expect(host.element).toHaveClass('hlx-ai-avatar--animated');
  });

  it('is exposed to assistive technology as a labelled image', () => {
    host = createHost(
      html`<hlx-ai-avatar label="AI assistant"></hlx-ai-avatar>`,
    );

    expect(host.element).toHaveAttribute('role', 'img');
    expect(host.element).toHaveAttribute('aria-label', 'AI assistant');
  });
});
