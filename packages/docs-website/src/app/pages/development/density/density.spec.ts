import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Density } from './density';

describe('Density', () => {
  let component: Density;
  let fixture: ComponentFixture<Density>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Density],
    });
    fixture = TestBed.createComponent(Density);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
