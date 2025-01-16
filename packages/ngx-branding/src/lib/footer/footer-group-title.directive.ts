import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: 'cdx-footer-group-title',
    standalone: false
})
export class FooterGroupTitleDirective {
  @HostBinding('class') classes = 'cdx-footer__group-title';
}
