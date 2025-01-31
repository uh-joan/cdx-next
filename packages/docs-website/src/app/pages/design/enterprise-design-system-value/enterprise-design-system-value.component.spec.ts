import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseDesignSystemValueComponent } from './enterprise-design-system-value.component';

describe('EnterpriseDesignSystemValueComponent', () => {
  let component: EnterpriseDesignSystemValueComponent;
  let fixture: ComponentFixture<EnterpriseDesignSystemValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterpriseDesignSystemValueComponent],
    });
    fixture = TestBed.createComponent(EnterpriseDesignSystemValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
