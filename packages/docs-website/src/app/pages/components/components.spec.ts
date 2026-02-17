import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Components } from './components';

describe('Components', () => {
  let component: Components;
  let fixture: ComponentFixture<Components>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Components],
    });
    fixture = TestBed.createComponent(Components);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
