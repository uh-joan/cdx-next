import { Directive, HostBinding } from '@angular/core';

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[cdx-footer-group-title]' })
export class FooterGroupTitleDirective {
  @HostBinding('class') classes = 'cdx-footer__group-title';
}
