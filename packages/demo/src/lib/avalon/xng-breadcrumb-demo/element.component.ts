import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'demo-app-element',
  template: '',
})
export class ElementComponent implements OnInit {
  private breadcrumbService: BreadcrumbService = inject(BreadcrumbService);
  private router: Router = inject(Router);

  ngOnInit(): void {
    this.breadcrumbService.set('@Element', 'Element');
  }

  checkRouteUrl() {
    return this.router.url == '/platform/category/subcategory/element';
  }
}
