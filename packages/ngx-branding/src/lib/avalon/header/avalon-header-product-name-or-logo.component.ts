import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'ava-header-product-name, a[ava-header-product-name], a[ava-header-product-logo], img[ava-header-product-logo]',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./avalon-header-product-name-or-logo.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AvalonHeaderProductNameOrLogoComponent {
  @HostBinding('class') classes = 'ava-header__product-name-or-logo';
}
