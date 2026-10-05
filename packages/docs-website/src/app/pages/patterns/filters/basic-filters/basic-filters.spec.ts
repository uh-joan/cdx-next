import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFilters } from './basic-filters';

describe('BasicFilters', () => {
  let component: BasicFilters;
  let fixture: ComponentFixture<BasicFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicFilters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
