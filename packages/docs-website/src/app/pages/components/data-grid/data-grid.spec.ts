import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGrid } from './data-grid';

describe('DataGrid', () => {
  let component: DataGrid;
  let fixture: ComponentFixture<DataGrid>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DataGrid],
    });
    fixture = TestBed.createComponent(DataGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
