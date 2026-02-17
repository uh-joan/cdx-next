import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinner } from './progress-spinner';

describe('ProgressSpinner', () => {
  let component: ProgressSpinner;
  let fixture: ComponentFixture<ProgressSpinner>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProgressSpinner],
    });
    fixture = TestBed.createComponent(ProgressSpinner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
