import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'demo-app-subcategory',
  templateUrl: './subcategory.component.html',
})
export class SubcategoryComponent implements OnInit {
  private breadcrumbService: BreadcrumbService = inject(BreadcrumbService);

  ngOnInit(): void {
    this.breadcrumbService.set('@Subcategory', 'Subcategory');
  }
}
