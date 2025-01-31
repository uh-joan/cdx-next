import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionActivityManagementComponent } from './session-activity-management.component';

describe('SessionActivityManagementComponent', () => {
  let component: SessionActivityManagementComponent;
  let fixture: ComponentFixture<SessionActivityManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionActivityManagementComponent],
    });
    fixture = TestBed.createComponent(SessionActivityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
