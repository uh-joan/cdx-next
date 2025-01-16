import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'hlx-header-global',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./helix-header-global.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelixHeaderGlobalComponent {
  @HostBinding('class') classes = 'hlx-header__global';
}
