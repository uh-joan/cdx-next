import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternLibraryComponent } from './pattern-library.component';

describe('PatternLibraryComponent', () => {
  let component: PatternLibraryComponent;
  let fixture: ComponentFixture<PatternLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatternLibraryComponent],
    });
    fixture = TestBed.createComponent(PatternLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
