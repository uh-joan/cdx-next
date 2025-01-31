import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationsOverviewComponent } from './foundations-overview.component';

describe('FoundationsOverviewComponent', () => {
  let component: FoundationsOverviewComponent;
  let fixture: ComponentFixture<FoundationsOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoundationsOverviewComponent],
    });
    fixture = TestBed.createComponent(FoundationsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
