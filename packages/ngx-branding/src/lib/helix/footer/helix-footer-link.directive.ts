import { Directive, HostBinding } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'a[hlx-footer-link]',
})
export class HelixFooterLinkDirective {
  @HostBinding('target') target = '_blank';
  @HostBinding('rel') rel = 'noopener noreferrer';
}
