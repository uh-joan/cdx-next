import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortHeader } from './sort-header';

describe('SortHeader', () => {
  let component: SortHeader;
  let fixture: ComponentFixture<SortHeader>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortHeader],
    });
    fixture = TestBed.createComponent(SortHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
