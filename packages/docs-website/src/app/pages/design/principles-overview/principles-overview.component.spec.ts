import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinciplesOverviewComponent } from './principles-overview.component';

describe('PrinciplesOverviewComponent', () => {
  let component: PrinciplesOverviewComponent;
  let fixture: ComponentFixture<PrinciplesOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrinciplesOverviewComponent],
    });
    fixture = TestBed.createComponent(PrinciplesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
