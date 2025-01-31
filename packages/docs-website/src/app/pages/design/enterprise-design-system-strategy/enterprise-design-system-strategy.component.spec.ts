import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseDesignSystemStrategyComponent } from './enterprise-design-system-strategy.component';

describe('EnterpriseDesignSystemStrategyComponent', () => {
  let component: EnterpriseDesignSystemStrategyComponent;
  let fixture: ComponentFixture<EnterpriseDesignSystemStrategyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterpriseDesignSystemStrategyComponent],
    });
    fixture = TestBed.createComponent(EnterpriseDesignSystemStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
