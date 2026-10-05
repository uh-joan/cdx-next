import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickStartNewProject } from './quick-start-new-project';

describe('QuickStartNewProject', () => {
  let component: QuickStartNewProject;
  let fixture: ComponentFixture<QuickStartNewProject>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuickStartNewProject],
    });
    fixture = TestBed.createComponent(QuickStartNewProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
