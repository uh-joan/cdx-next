import {
  createDirectiveFactory,
  SpectatorDirective,
} from '@ngneat/spectator/vitest';

import { FooterLinkDirective } from './footer-link.directive';

describe('FooterLinkComponent', () => {
  let spectator: SpectatorDirective<FooterLinkDirective>;
  const createDirective = createDirectiveFactory(FooterLinkDirective);

  beforeEach(() => {
    spectator = createDirective('<a cdxFooterLink>Foo</a>');
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
