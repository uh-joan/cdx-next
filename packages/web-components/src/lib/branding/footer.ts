import { Component, Input } from '@angular/core';

@Component({
  template: `<a cdx-footer-link [href]="href"><ng-content></ng-content></a>`,
})
export class FooterLinkDirectiveWrapperComponent {
  @Input()
  href?: string;
}

@Component({
  template: `<cdx-footer-group-title
    ><ng-content></ng-content
  ></cdx-footer-group-title>`,
})
export class FooterGroupTitleWrapperComponent {}
