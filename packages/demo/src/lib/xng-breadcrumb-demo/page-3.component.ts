import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'demo-app-page-3',
  template: '',
})
export class Page3Component implements OnInit {
  constructor(
    private breadcrumbService: BreadcrumbService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.breadcrumbService.set('@Page3', 'Page 3');
  }

  checkRouteUrl() {
    return this.router.url == '/platform/page-1/page-2/page-3';
  }
}
