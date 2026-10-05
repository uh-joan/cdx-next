import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleViewer } from './example-viewer';

describe('ExampleViewer', () => {
  let component: ExampleViewer;
  let fixture: ComponentFixture<ExampleViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleViewer],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
