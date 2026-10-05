import { provideHttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';

import { Header } from './header';
import { HeaderService } from './header.service';

const appVersion = vi.hoisted(() => ({ value: '30.1.0' }));

vi.mock('../app-version', () => ({
  get APP_VERSION() {
    return appVersion.value;
  },
}));

class MockHeaderService {
  versions = signal(['18.0.0', '20.0.0', '30.0.0']);
  getAllHelixVersions = vi.fn();
}

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeAll(() => {
    vi.spyOn(window.history, 'pushState').mockImplementation();
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
  });

  function createComponent(version: string) {
    appVersion.value = version;
    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  it('should use the latest version when the app major matches it', () => {
    createComponent('30.1.0');

    expect(component.currentVersion()).toBe('30.0.0 (latest)');
  });

  it('should fall back to the app major version when it is not the latest', () => {
    createComponent('20.3.0');

    expect(component.currentVersion()).toBe('20');
  });
});
