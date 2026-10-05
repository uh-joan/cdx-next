import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalLink } from './external-link';

describe('ExternalLink', () => {
  let component: ExternalLink;
  let fixture: ComponentFixture<ExternalLink>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExternalLink],
    });
    fixture = TestBed.createComponent(ExternalLink);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('url', 'https://example.com');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
