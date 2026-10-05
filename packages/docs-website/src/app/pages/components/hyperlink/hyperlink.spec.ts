import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hyperlink } from './hyperlink';

describe('Hyperlink', () => {
  let component: Hyperlink;
  let fixture: ComponentFixture<Hyperlink>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Hyperlink],
    });
    fixture = TestBed.createComponent(Hyperlink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
