import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggle } from './button-toggle';

describe('ButtonToggle', () => {
  let component: ButtonToggle;
  let fixture: ComponentFixture<ButtonToggle>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonToggle],
    });
    fixture = TestBed.createComponent(ButtonToggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
