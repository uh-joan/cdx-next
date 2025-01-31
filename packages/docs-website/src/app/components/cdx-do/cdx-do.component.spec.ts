import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdxDoComponent } from './cdx-do.component';

describe('CdxDoComponent', () => {
  let component: CdxDoComponent;
  let fixture: ComponentFixture<CdxDoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdxDoComponent],
    });
    fixture = TestBed.createComponent(CdxDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
