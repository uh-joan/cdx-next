import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Highlight } from './highlight';

describe('Highlight', () => {
  let component: Highlight;
  let fixture: ComponentFixture<Highlight>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Highlight],
    });
    fixture = TestBed.createComponent(Highlight);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('text', 'const a = 1;');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
