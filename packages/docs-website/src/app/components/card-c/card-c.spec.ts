import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardC } from './card-c';

describe('CardC', () => {
  let component: CardC;
  let fixture: ComponentFixture<CardC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardC],
    }).compileComponents();

    fixture = TestBed.createComponent(CardC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
