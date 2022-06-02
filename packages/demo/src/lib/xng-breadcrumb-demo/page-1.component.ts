import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'demo-app-page-1',
  templateUrl: './page-1.component.html',
})
export class Page1Component implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.set('@Page1', 'Page 1');
  }
}
