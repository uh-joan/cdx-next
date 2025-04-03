import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { jest } from '@jest/globals';
import { of } from 'rxjs';

import { HeaderComponent } from './header.component';
import { HeaderService } from './header.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let headerServiceSpy: jest.Mocked<HeaderService>;
  let routerSpy: jest.Mocked<Router>;

  beforeEach(() => {
    headerServiceSpy = {
      getAllHelixVersions: jest.fn(),
    } as unknown as jest.Mocked<HeaderService>;
    routerSpy = { url: '/test-path' } as unknown as jest.Mocked<Router>;

    TestBed.configureTestingModule({
      providers: [
        { provide: HeaderService, useValue: headerServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });

    headerServiceSpy.getAllHelixVersions.mockReturnValue(
      of(['1.0.0', '2.0.0', 'latest']),
    );

    component = new HeaderComponent(routerSpy, headerServiceSpy);
  });

  it('should fetch all Helix versions on initialization', () => {
    expect(headerServiceSpy.getAllHelixVersions).toHaveBeenCalled();
    expect(component.versions).toEqual(['1.0.0', '2.0.0', 'latest']);
  });

  it('should set versionControl to the matched version from URL', () => {
    jest.spyOn(window, 'location', 'get').mockReturnValue({
      href: 'https://v2-helix-website.dev.sp.aws.clarivate.net/test-path',
    } as Location);

    component = new HeaderComponent(routerSpy, headerServiceSpy);

    expect(component.versionControl.value).toBe('2');
  });

  it('should set versionControl to the latest version if no match is found', () => {
    jest.spyOn(window, 'location', 'get').mockReturnValue({
      href: 'https://helix-website.dev.sp.aws.clarivate.net/test-path',
    } as Location);

    component = new HeaderComponent(routerSpy, headerServiceSpy);

    expect(component.versionControl.value).toBe('latest');
  });
});
