import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'cdx-footer-group-title',
  template: '<ng-content></ng-content>',
  styleUrls: ['./footer-group-title.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterGroupTitleComponent {
  @HostBinding('class') classes = 'cdx-footer__group-title mat-body-strong';
}
