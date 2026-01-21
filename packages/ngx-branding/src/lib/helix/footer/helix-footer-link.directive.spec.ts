import {
  createDirectiveFactory,
  SpectatorDirective,
} from '@ngneat/spectator/jest';

import { HelixFooterLinkDirective } from './helix-footer-link.directive';

describe('FooterLinkComponent', () => {
  let spectator: SpectatorDirective<HelixFooterLinkDirective>;
  const createDirective = createDirectiveFactory(HelixFooterLinkDirective);

  beforeEach(() => {
    spectator = createDirective('<a hlx-footer-link>Foo</a>');
  });

  it('should set target to _blank', () => {
    expect((spectator.element as HTMLAnchorElement).target).toEqual('_blank');
  });

  it('should set rel to "nopener noferrer"', () => {
    // see https://web.dev/external-anchors-use-rel-noopener/
    expect((spectator.element as HTMLAnchorElement).rel).toEqual(
      'noopener noreferrer',
    );
  });
});
