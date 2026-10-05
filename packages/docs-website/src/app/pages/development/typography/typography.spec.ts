import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Typography } from './typography';

describe('Typography', () => {
  let component: Typography;
  let fixture: ComponentFixture<Typography>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Typography],
    });
    fixture = TestBed.createComponent(Typography);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
