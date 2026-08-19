import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[cdxFooterGroupTitle]' })
export class FooterGroupTitleDirective {
  @HostBinding('class') classes = 'cdx-footer__group-title';
}
