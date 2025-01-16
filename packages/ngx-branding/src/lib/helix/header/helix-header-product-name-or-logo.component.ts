import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'hlx-header-product-name, a[hlx-header-product-name], a[hlx-header-product-logo], img[hlx-header-product-logo]',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./helix-header-product-name-or-logo.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class HelixHeaderProductNameOrLogoComponent {
  @HostBinding('class') classes = 'hlx-header__product-name-or-logo';
}
