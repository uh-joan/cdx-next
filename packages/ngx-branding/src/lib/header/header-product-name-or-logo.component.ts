import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'cdx-header-product-name, a[cdx-header-product-name], a[cdx-header-product-logo], img[cdx-header-product-logo]',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./header-product-name-or-logo.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class HeaderProductNameOrLogoComponent {
  @HostBinding('class') classes = 'cdx-header__product-name-or-logo';
}
