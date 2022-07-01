import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { AuthenticationService } from '@cdx/authentication';

@Component({
  selector: 'cdx-header-global-user-profile',
  templateUrl: './header-global-user-profile.component.html',
  styleUrls: ['./header-global-user-profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderGlobalUserProfileComponent {
  constructor(public authenticationService: AuthenticationService) {}
}
