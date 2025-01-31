import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdxDontComponent } from './cdx-dont.component';

describe('CdxDontComponent', () => {
  let component: CdxDontComponent;
  let fixture: ComponentFixture<CdxDontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdxDontComponent],
    });
    fixture = TestBed.createComponent(CdxDontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
