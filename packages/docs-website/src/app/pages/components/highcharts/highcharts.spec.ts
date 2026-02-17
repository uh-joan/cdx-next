import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Highcharts } from './highcharts';

describe('Highcharts', () => {
  let component: Highcharts;
  let fixture: ComponentFixture<Highcharts>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Highcharts],
    });
    fixture = TestBed.createComponent(Highcharts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
