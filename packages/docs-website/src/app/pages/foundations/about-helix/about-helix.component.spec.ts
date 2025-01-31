import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHelixComponent } from './about-helix.component';

describe('AboutHelixComponent', () => {
  let component: AboutHelixComponent;
  let fixture: ComponentFixture<AboutHelixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutHelixComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutHelixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
