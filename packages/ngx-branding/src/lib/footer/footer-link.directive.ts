import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: 'a[cdxFooterLink]' })
export class FooterLinkDirective {
  @HostBinding('target') target = '_blank';
  @HostBinding('rel') rel = 'noopener noreferrer';
}
