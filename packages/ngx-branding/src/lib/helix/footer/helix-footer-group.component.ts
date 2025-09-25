import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'hlx-footer-group',
  templateUrl: './helix-footer-group.component.html',
  styleUrls: ['./helix-footer-group.component.scss'],
  imports: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelixFooterGroupComponent {
  @HostBinding('class') classes = 'cdx-footer__group';
}
