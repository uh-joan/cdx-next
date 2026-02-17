import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contributing } from './contributing';

describe('Contributing', () => {
  let component: Contributing;
  let fixture: ComponentFixture<Contributing>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Contributing],
    });
    fixture = TestBed.createComponent(Contributing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
