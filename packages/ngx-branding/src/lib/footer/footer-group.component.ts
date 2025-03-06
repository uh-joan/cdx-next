import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'cdx-footer-group',
  templateUrl: './footer-group.component.html',
  styleUrls: ['./footer-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class FooterGroupComponent {
  @HostBinding('class') classes = 'cdx-footer__group';
}
