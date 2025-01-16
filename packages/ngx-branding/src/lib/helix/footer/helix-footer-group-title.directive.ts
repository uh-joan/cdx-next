import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'hlx-footer-group-title',
})
export class HelixFooterGroupTitleDirective {
  @HostBinding('class') classes = 'hlx-footer__group-title';
}
