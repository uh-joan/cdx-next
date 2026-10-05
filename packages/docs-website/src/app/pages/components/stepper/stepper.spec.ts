import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stepper } from './stepper';

describe('Stepper', () => {
  let component: Stepper;
  let fixture: ComponentFixture<Stepper>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Stepper],
    });
    fixture = TestBed.createComponent(Stepper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
