import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersOverview } from './filters-overview';

describe('FiltersOverview', () => {
  let component: FiltersOverview;
  let fixture: ComponentFixture<FiltersOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltersOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
