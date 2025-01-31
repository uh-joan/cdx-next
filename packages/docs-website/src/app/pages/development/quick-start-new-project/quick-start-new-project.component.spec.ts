import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickStartNewProjectComponent } from './quick-start-new-project.component';

describe('QuickStartNewProjectComponent', () => {
  let component: QuickStartNewProjectComponent;
  let fixture: ComponentFixture<QuickStartNewProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickStartNewProjectComponent],
    });
    fixture = TestBed.createComponent(QuickStartNewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
