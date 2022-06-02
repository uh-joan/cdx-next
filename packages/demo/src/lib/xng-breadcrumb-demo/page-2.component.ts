import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'demo-app-page-2',
  templateUrl: './page-2.component.html',
})
export class Page2Component implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.set('@Page2', 'Page 2');
  }
}
