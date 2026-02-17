import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionActivityManagement } from './session-activity-management';

describe('SessionActivityManagement', () => {
  let component: SessionActivityManagement;
  let fixture: ComponentFixture<SessionActivityManagement>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SessionActivityManagement],
    });
    fixture = TestBed.createComponent(SessionActivityManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
