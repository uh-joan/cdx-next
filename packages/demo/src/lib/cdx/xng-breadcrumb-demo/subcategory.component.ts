import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'demo-app-subcategory',
  templateUrl: './subcategory.component.html',
})
export class SubcategoryComponent implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.set('@Subcategory', 'Subcategory');
  }
}
