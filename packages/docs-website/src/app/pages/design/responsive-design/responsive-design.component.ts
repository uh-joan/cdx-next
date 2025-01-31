import { Component, HostBinding } from '@angular/core';

export interface BreakpointData {
  breakpoint: string;
  screenWidth: string;
  columns: string;
}

export interface BreakpointInfo {
  breakpoint: string;
  range: string;
  targetDevice: string;
}

@Component({
  selector: 'cdx-responsive-design',
  templateUrl: './responsive-design.component.html',
  styleUrls: ['./responsive-design.component.scss'],
})
export class ResponsiveDesignComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  dataSource: BreakpointData[] = [
    { breakpoint: 'XXS', screenWidth: '0 - 479px', columns: '4, 6, 8' },
    { breakpoint: 'XS', screenWidth: '480px - 599px', columns: '4, 6, 8' },
    { breakpoint: 'SM', screenWidth: '600px - 959px', columns: '4, 6, 8, 12' },
    { breakpoint: 'MD', screenWidth: '960px - 1279px', columns: '4, 6, 8, 12' },
    {
      breakpoint: 'LG',
      screenWidth: '1280px - 1439px',
      columns: '4, 6, 8, 12',
    },
    { breakpoint: 'XL', screenWidth: '1440px and up', columns: '4, 6, 8, 12' },
  ];

  displayedColumns1: string[] = ['breakpoint', 'screenWidth', 'columns'];

  breakpointData: BreakpointInfo[] = [
    { breakpoint: 'XXS', range: '0 - 479px', targetDevice: 'Phone' },
    { breakpoint: 'XS', range: '480px - 599px', targetDevice: 'Phone' },
    { breakpoint: 'SM', range: '600px - 959px', targetDevice: 'Tablet' },
    {
      breakpoint: 'MD',
      range: '960px - 1279px',
      targetDevice: 'Tablet / Desktop',
    },
    { breakpoint: 'LG', range: '1280px - 1439px', targetDevice: 'Desktop' },
    { breakpoint: 'XL', range: '1440px and up', targetDevice: 'Desktop' },
  ];

  displayedColumns2: string[] = ['breakpoint', 'range', 'targetDevice'];
}
