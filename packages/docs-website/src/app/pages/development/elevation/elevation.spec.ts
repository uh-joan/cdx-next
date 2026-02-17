import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteComponent } from './elevation';

describe('ColorPaletteComponent', () => {
  let component: ColorPaletteComponent;
  let fixture: ComponentFixture<ColorPaletteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorPaletteComponent],
    });
    fixture = TestBed.createComponent(ColorPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
