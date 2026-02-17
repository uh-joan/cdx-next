import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveDevelopment } from './responsive-development';

describe('ResponsiveDevelopment', () => {
  let component: ResponsiveDevelopment;
  let fixture: ComponentFixture<ResponsiveDevelopment>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ResponsiveDevelopment],
    });
    fixture = TestBed.createComponent(ResponsiveDevelopment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
