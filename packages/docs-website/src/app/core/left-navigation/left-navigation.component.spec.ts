import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavigationComponent } from './left-navigation.component';

describe('LeftNavigationComponent', () => {
  let component: LeftNavigationComponent;
  let fixture: ComponentFixture<LeftNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftNavigationComponent],
    });
    fixture = TestBed.createComponent(LeftNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
