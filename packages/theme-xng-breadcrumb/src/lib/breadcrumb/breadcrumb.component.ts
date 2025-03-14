import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  BreadcrumbComponent as BreadcrumbComponent_1,
  BreadcrumbItemDirective,
} from 'xng-breadcrumb';

@Component({
  selector: 'cdx-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BreadcrumbComponent_1, BreadcrumbItemDirective, MatIcon],
})
export class BreadcrumbComponent {}
