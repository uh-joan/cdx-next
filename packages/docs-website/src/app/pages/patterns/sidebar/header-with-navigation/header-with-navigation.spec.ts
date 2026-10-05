import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithNavigation } from './header-with-navigation';

describe('HeaderWithNavigation', () => {
  let component: HeaderWithNavigation;
  let fixture: ComponentFixture<HeaderWithNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWithNavigation],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderWithNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
