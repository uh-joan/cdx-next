import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHelix } from './about-helix';

describe('AboutHelix', () => {
  let component: AboutHelix;
  let fixture: ComponentFixture<AboutHelix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutHelix],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutHelix);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
