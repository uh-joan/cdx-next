import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttons } from './buttons';

describe('Buttons', () => {
  let component: Buttons;
  let fixture: ComponentFixture<Buttons>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Buttons],
    });
    fixture = TestBed.createComponent(Buttons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
