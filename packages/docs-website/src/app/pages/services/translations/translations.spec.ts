import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Translations } from './translations';

describe('Translations', () => {
  let component: Translations;
  let fixture: ComponentFixture<Translations>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Translations],
    });
    fixture = TestBed.createComponent(Translations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
