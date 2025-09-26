import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'demo-app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  private breadcrumbService: BreadcrumbService = inject(BreadcrumbService);

  ngOnInit(): void {
    this.breadcrumbService.set('@Category', 'Category');
  }
}
