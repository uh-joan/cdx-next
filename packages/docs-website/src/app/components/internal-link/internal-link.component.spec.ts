import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalLinkComponent } from './internal-link.component';

describe('InternalLinkComponent', () => {
  let component: InternalLinkComponent;
  let fixture: ComponentFixture<InternalLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternalLinkComponent],
    });
    fixture = TestBed.createComponent(InternalLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
