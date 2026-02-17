import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List } from './list';

describe('List', () => {
  let component: List;
  let fixture: ComponentFixture<List>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [List],
    });
    fixture = TestBed.createComponent(List);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
