import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartedOverviewComponent } from './getting-started-overview.component';

describe('GettingStartedOverviewComponent', () => {
  let component: GettingStartedOverviewComponent;
  let fixture: ComponentFixture<GettingStartedOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GettingStartedOverviewComponent],
    });
    fixture = TestBed.createComponent(GettingStartedOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
