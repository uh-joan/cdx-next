import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavigation } from './left-navigation';

describe('LeftNavigation', () => {
  let component: LeftNavigation;
  let fixture: ComponentFixture<LeftNavigation>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LeftNavigation],
    });
    fixture = TestBed.createComponent(LeftNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
