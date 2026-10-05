import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedNavigation } from './nested-navigation';

describe('NestedNavigation', () => {
  let component: NestedNavigation;
  let fixture: ComponentFixture<NestedNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedNavigation],
    }).compileComponents();

    fixture = TestBed.createComponent(NestedNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
