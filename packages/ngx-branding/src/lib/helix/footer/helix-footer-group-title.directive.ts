import { Directive, HostBinding } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[hlx-footer-group-title]',
})
export class HelixFooterGroupTitleDirective {
  @HostBinding('class') classes = 'hlx-footer__group-title';
}
