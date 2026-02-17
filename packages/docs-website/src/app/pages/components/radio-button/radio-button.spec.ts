import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButton } from './radio-button';

describe('RadioButton', () => {
  let component: RadioButton;
  let fixture: ComponentFixture<RadioButton>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RadioButton],
    });
    fixture = TestBed.createComponent(RadioButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
