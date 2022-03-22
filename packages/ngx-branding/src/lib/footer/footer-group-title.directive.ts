import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'cdx-footer-group-title',
})
export class FooterGroupTitleDirective {
  @HostBinding('class') classes = 'cdx-footer__group-title';
}
