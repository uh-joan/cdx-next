import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextArea } from './text-area';

describe('TextArea', () => {
  let component: TextArea;
  let fixture: ComponentFixture<TextArea>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextArea],
    });
    fixture = TestBed.createComponent(TextArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
