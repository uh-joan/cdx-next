import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snackbar } from './snackbar';

describe('Snackbar', () => {
  let component: Snackbar;
  let fixture: ComponentFixture<Snackbar>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Snackbar],
    });
    fixture = TestBed.createComponent(Snackbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
