import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'cdx-broker',
  template: '',
  standalone: false,
})
export class BrokerComponent {
  constructor(
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
  ) {
    const authCode = this.route.snapshot.paramMap.get('authCode');
    if (authCode) {
      this.authenticationService
        .createSession(authCode)
        .then(() =>
          authenticationService.enterApplicationAfterAuthentication(
            route.snapshot,
          ),
        );
    } else {
      this.authenticationService.logout();
    }
  }
}
