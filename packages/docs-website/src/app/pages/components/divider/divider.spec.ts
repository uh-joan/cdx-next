import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Divider } from './divider';

describe('Divider', () => {
  let component: Divider;
  let fixture: ComponentFixture<Divider>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Divider],
    });
    fixture = TestBed.createComponent(Divider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
