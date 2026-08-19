import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'a[hlxFooterLink]',
})
export class HelixFooterLinkDirective {
  @HostBinding('target') target = '_blank';
  @HostBinding('rel') rel = 'noopener noreferrer';
}
