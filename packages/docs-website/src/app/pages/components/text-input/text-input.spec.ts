import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInput } from './text-input';

describe('TextInput', () => {
  let component: TextInput;
  let fixture: ComponentFixture<TextInput>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextInput],
    });
    fixture = TestBed.createComponent(TextInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
