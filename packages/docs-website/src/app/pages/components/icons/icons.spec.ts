import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Icons } from './icons';

describe('Icons', () => {
  let component: Icons;
  let fixture: ComponentFixture<Icons>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Icons],
    });
    fixture = TestBed.createComponent(Icons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
