import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { provideTranslateService, TranslatePipe } from '@ngx-translate/core';

import { AuthenticationService } from '../authentication.service';
import { JwtToken } from '../authentication.types';
import { HeaderGlobalUserProfileComponent } from './header-global-user-profile.component';

describe('HeaderGlobalUserProfileComponent', () => {
  let component: HeaderGlobalUserProfileComponent;
  let fixture: ComponentFixture<HeaderGlobalUserProfileComponent>;
  let authenticationService: Mocked<AuthenticationService>;

  beforeEach(async () => {
    const authServiceMock = {
      isAuthenticated: vi.fn(),
      getTokenPayload: vi.fn(),
      login: vi.fn(),
      logout: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [
        HeaderGlobalUserProfileComponent,
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        TranslatePipe,
      ],
      providers: [
        { provide: AuthenticationService, useValue: authServiceMock },
        provideTranslateService(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderGlobalUserProfileComponent);
    component = fixture.componentInstance;
    authenticationService = TestBed.inject(
      AuthenticationService,
    ) as Mocked<AuthenticationService>;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize authenticated and tokenPayload from authenticationService', () => {
    const mockTokenPayload: JwtToken = {
      '1p:eml': 'test@example.com',
      '1p:fnm': 'John',
      '1p:lnm': 'Doe',
      exp: 21421421,
      expts: 1234567890,
      user: 'testUser',
    };

    authenticationService.isAuthenticated.mockReturnValue(true);
    authenticationService.getTokenPayload.mockReturnValue(mockTokenPayload);

    component.ngOnInit();

    expect(component.authenticated).toBe(true);
    expect(component.tokenPayload).toEqual(mockTokenPayload);
  });

  it('should call login on authenticationService when loginWithRouteSnapshot is called', () => {
    const loginSpy = vi.fn();
    authenticationService.login.mockImplementation(loginSpy);

    component.loginWithRouteSnapshot();

    expect(loginSpy).toHaveBeenCalled();
  });

  it('should call logout on authenticationService when logoutWithRouteSnapshot is called', () => {
    const logoutSpy = vi.fn();
    authenticationService.logout.mockImplementation(logoutSpy);

    component.logoutWithRouteSnapshot();

    expect(logoutSpy).toHaveBeenCalled();
  });
});
