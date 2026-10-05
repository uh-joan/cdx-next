import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fab } from './fab';

describe('Fab', () => {
  let component: Fab;
  let fixture: ComponentFixture<Fab>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Fab],
    });
    fixture = TestBed.createComponent(Fab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
