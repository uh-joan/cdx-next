import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elevation } from './elevation';

describe('Elevation', () => {
  let component: Elevation;
  let fixture: ComponentFixture<Elevation>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Elevation],
    });
    fixture = TestBed.createComponent(Elevation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
