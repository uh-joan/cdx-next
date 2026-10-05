import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalLink } from './internal-link';

describe('InternalLink', () => {
  let component: InternalLink;
  let fixture: ComponentFixture<InternalLink>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InternalLink],
    });
    fixture = TestBed.createComponent(InternalLink);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('url', '/');
    fixture.componentRef.setInput('text', 'Link');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
