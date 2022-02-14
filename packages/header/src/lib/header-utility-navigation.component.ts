import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'cdx-header-utility-navigation',
  template: '<ng-content></ng-content>',
  styleUrls: ['./header-utility-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUtilityNavigationComponent {
  @HostBinding('class') classes = 'cdx-header__utility-navigation';
}
