import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iconography } from './iconography';

describe('Iconography', () => {
  let component: Iconography;
  let fixture: ComponentFixture<Iconography>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iconography],
    }).compileComponents();

    fixture = TestBed.createComponent(Iconography);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
