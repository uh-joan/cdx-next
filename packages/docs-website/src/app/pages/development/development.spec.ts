import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Development } from './development';

describe('Development', () => {
  let component: Development;
  let fixture: ComponentFixture<Development>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Development],
    });
    fixture = TestBed.createComponent(Development);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
