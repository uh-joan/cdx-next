import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveDevelopmentComponent } from './responsive-development.component';

describe('ResponsiveDevelopmentComponent', () => {
  let component: ResponsiveDevelopmentComponent;
  let fixture: ComponentFixture<ResponsiveDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsiveDevelopmentComponent],
    });
    fixture = TestBed.createComponent(ResponsiveDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
