import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[hlxFooterGroupTitle]',
})
export class HelixFooterGroupTitleDirective {
  @HostBinding('class') classes = 'hlx-footer__group-title';
}
