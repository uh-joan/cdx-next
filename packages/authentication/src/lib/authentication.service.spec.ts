import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { AuthenticationModule } from './authentication.module';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AuthenticationModule.forRoot({
          appId: 'cdx',
          environment: 'dev-stable',
        }),
      ],
    }).compileComponents();

    window.open = jest.fn();
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('when login is called, another window should be opened', () => {
    service.login();
    expect(window.open).toHaveBeenCalledTimes(1);
  });
  it('when login is called, the opened window will be redirected into login URL generated into the buildLogin() function', () => {
    service.login();
    expect(window.open).toHaveBeenCalledWith(
      'https://access.dev-stable.clarivate.com/login?app=cdx',
      '_blank',
    );
  });
});
