import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'cdx-header-global',
  template: `<ng-content></ng-content>
    <ng-container *ngIf="withAuthentication">
      <cdx-header-global-user-profile></cdx-header-global-user-profile>
    </ng-container>`,
  styleUrls: ['./header-global.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderGlobalComponent {
  @HostBinding('class') classes = 'cdx-header__global';

  @Input() withAuthentication?: boolean;
}
