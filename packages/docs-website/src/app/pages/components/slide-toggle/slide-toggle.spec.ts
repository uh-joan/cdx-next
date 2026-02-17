import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggle } from './slide-toggle';

describe('SlideToggle', () => {
  let component: SlideToggle;
  let fixture: ComponentFixture<SlideToggle>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SlideToggle],
    });
    fixture = TestBed.createComponent(SlideToggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
