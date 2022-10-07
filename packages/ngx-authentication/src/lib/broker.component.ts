import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'cdx-broker',
  template: '',
})
export class BrokerComponent {
  constructor(
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
  ) {
    authenticationService.enterApplicationAfterAuthentication(route.snapshot);
    const authCode = this.route.snapshot.paramMap.get('authCode');
    if (authCode) {
      this.authenticationService.createSession(authCode);
    } else {
      this.authenticationService.logout();
    }
  }
}
