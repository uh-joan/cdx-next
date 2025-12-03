import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { HeaderComponent } from './header.component';
import { HeaderService } from './header.service';

class MockHeaderService {
  getAllHelixVersions = jest
    .fn()
    .mockReturnValue(of(['18.0.0', '20.0.0', '30.0.0']));
  http = { get: jest.fn() };
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeAll(() => {
    jest.spyOn(window.history, 'pushState').mockImplementation();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      providers: [{ provide: HeaderService, useClass: MockHeaderService }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
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
