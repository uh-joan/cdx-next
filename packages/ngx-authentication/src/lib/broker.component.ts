import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'cdx-broker',
  template: '',
})
export class BrokerComponent {
  private route = inject(ActivatedRoute);
  private authenticationService = inject(AuthenticationService);
  constructor() {
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
