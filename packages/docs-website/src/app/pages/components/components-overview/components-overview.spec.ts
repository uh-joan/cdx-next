import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsOverview } from './components-overview';

describe('ComponentsOverview', () => {
  let component: ComponentsOverview;
  let fixture: ComponentFixture<ComponentsOverview>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ComponentsOverview],
    });
    fixture = TestBed.createComponent(ComponentsOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
