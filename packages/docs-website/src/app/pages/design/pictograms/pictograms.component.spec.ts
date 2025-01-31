import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictogramsComponent } from './pictograms.component';

describe('PictogramsComponent', () => {
  let component: PictogramsComponent;
  let fixture: ComponentFixture<PictogramsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictogramsComponent],
    });
    fixture = TestBed.createComponent(PictogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
