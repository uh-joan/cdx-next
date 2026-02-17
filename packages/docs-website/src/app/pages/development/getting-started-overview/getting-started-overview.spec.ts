import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartedOverview } from './getting-started-overview';

describe('GettingStartedOverview', () => {
  let component: GettingStartedOverview;
  let fixture: ComponentFixture<GettingStartedOverview>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GettingStartedOverview],
    });
    fixture = TestBed.createComponent(GettingStartedOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
