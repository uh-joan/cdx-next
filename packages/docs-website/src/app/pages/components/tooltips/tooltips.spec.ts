import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipsComponent } from './tooltips';

describe('TooltipsComponent', () => {
  let component: TooltipsComponent;
  let fixture: ComponentFixture<TooltipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipsComponent],
    });
    fixture = TestBed.createComponent(TooltipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
