import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBComponent } from './card-b.component';

describe('CardBComponent', () => {
  let component: CardBComponent;
  let fixture: ComponentFixture<CardBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBComponent],
    });
    fixture = TestBed.createComponent(CardBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
