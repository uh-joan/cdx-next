import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesOverview } from './services-overview';

describe('ServicesOverview', () => {
  let component: ServicesOverview;
  let fixture: ComponentFixture<ServicesOverview>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServicesOverview],
    });
    fixture = TestBed.createComponent(ServicesOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
