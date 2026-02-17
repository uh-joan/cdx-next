import { provideHttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';

import { Header } from './header';
import { HeaderService } from './header.service';

class MockHeaderService {
  versions = signal(['18.0.0', '20.0.0', '30.0.0']);
  fetchAllHelixVersions = jest.fn();
}

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeAll(() => {
    jest.spyOn(window.history, 'pushState').mockImplementation();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        { provide: HeaderService, useClass: MockHeaderService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
  });

  it('should set versionControl to the matched version from URL', () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: 'https://v20-helix-website.dev.sp.aws.clarivate.net/',
      },
      writable: true,
    });

    fixture.detectChanges();

    expect(component.currentVersion).toBe('20.0.0');
  });

  it('should default to latest version if no version in URL', () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: 'hhttps://design-lsh.clarivate.io',
      },
      writable: true,
    });

    fixture.detectChanges();
    expect(component.currentVersion).toBe('30.0.0 (latest)');
  });
});
