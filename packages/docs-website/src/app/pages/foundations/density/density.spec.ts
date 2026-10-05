import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Density } from './density';

describe('Density', () => {
  let component: Density;
  let fixture: ComponentFixture<Density>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Density],
    }).compileComponents();

    fixture = TestBed.createComponent(Density);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
