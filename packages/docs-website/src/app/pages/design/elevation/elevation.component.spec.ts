import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationComponent } from './elevation.component';

describe('EvaluationComponent', () => {
  let component: EvaluationComponent;
  let fixture: ComponentFixture<EvaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluationComponent],
    });
    fixture = TestBed.createComponent(EvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
