import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvisionComponent } from './invision.component';

describe('InvisionComponent', () => {
  let component: InvisionComponent;
  let fixture: ComponentFixture<InvisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvisionComponent],
    });
    fixture = TestBed.createComponent(InvisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
