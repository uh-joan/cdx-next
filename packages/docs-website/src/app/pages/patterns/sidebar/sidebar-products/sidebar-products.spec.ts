import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProducts } from './sidebar-products';

describe('SidebarProducts', () => {
  let component: SidebarProducts;
  let fixture: ComponentFixture<SidebarProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarProducts],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
