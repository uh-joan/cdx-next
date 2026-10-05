import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tree } from './tree';

describe('Tree', () => {
  let component: Tree;
  let fixture: ComponentFixture<Tree>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Tree],
    });
    fixture = TestBed.createComponent(Tree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
