import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Authentication } from './authentication';

describe('Authentication', () => {
  let component: Authentication;
  let fixture: ComponentFixture<Authentication>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Authentication],
    });
    fixture = TestBed.createComponent(Authentication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
