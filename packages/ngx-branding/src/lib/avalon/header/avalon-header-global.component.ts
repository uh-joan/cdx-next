import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'ava-header-global',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./avalon-header-global.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AvalonHeaderGlobalComponent {
  @HostBinding('class') classes = 'ava-header__global';
}
