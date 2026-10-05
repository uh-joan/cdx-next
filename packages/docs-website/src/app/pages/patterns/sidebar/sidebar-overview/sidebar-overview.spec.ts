import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOverview } from './sidebar-overview';

describe('SidebarOverview', () => {
  let component: SidebarOverview;
  let fixture: ComponentFixture<SidebarOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
