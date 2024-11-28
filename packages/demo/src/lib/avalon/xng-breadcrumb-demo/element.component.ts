import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'demo-app-element',
  template: '',
})
export class ElementComponent implements OnInit {
  constructor(
    private breadcrumbService: BreadcrumbService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.breadcrumbService.set('@Element', 'Element');
  }

  checkRouteUrl() {
    return this.router.url == '/platform/category/subcategory/element';
  }
}
