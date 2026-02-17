import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanel } from './expansion-panel';

describe('ExpansionPanel', () => {
  let component: ExpansionPanel;
  let fixture: ComponentFixture<ExpansionPanel>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExpansionPanel],
    });
    fixture = TestBed.createComponent(ExpansionPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
