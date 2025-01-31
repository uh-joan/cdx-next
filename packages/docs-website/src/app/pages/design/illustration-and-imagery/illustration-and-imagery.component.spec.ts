import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationAndImageryComponent } from './illustration-and-imagery.component';

describe('IllustrationAndImageryComponent', () => {
  let component: IllustrationAndImageryComponent;
  let fixture: ComponentFixture<IllustrationAndImageryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IllustrationAndImageryComponent],
    });
    fixture = TestBed.createComponent(IllustrationAndImageryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
