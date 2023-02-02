import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

import { AuthenticationService } from '../authentication.service';
import { JwtToken } from '../authentication.types';

@Component({
  selector: 'cdx-header-global-user-profile',
  templateUrl: './header-global-user-profile.component.html',
  styleUrls: ['./header-global-user-profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderGlobalUserProfileComponent implements OnInit {
  @ContentChild('menuTriggerCustom') menuTriggerCustom!: ElementRef;
  @ContentChild('menuContentCustom') menuContentCustom!: ElementRef;

  authenticated = false;
  tokenPayload: JwtToken | null = null;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.authenticated = this.authenticationService.isAuthenticated();
    this.tokenPayload = this.authenticationService.getTokenPayload();
  }

  loginWithRouteSnapshot() {
    this.authenticationService.login();
  }

  logoutWithRouteSnapshot() {
    this.authenticationService.logout();
  }
}
