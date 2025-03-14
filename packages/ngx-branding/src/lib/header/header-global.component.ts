import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'cdx-header-global',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./header-global.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderGlobalComponent {
  @HostBinding('class') classes = 'cdx-header__global';
}
