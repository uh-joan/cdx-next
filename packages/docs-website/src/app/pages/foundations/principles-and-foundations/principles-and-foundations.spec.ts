import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinciplesAndFoundations } from './principles-and-foundations';

describe('PrinciplesAndFoundations', () => {
  let component: PrinciplesAndFoundations;
  let fixture: ComponentFixture<PrinciplesAndFoundations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrinciplesAndFoundations],
    }).compileComponents();

    fixture = TestBed.createComponent(PrinciplesAndFoundations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
