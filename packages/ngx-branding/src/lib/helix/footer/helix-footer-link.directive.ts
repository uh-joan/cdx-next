import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'a[cdx-footer-link]',
})
export class HelixFooterLinkDirective {
  @HostBinding('target') target = '_blank';
  @HostBinding('rel') rel = 'noopener noreferrer';
}
