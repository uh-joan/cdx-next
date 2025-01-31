import { Component, HostBinding } from '@angular/core';

export interface TypographyData {
  name: string;
  typeface: string;
  weight: string;
  size: string;
  letterSpacing: string;
}

const TYPOGRAPHY_DATA: TypographyData[] = [
  {
    name: 'Display 4',
    typeface: 'Source Sans Pro',
    weight: 'Bold (700)',
    size: '96px',
    letterSpacing: '0',
  },
  {
    name: 'Display 3',
    typeface: 'Source Sans Pro',
    weight: 'Bold (700)',
    size: '56px',
    letterSpacing: '0',
  },
  {
    name: 'Display 2',
    typeface: 'Source Sans Pro',
    weight: 'Bold (700)',
    size: '48px',
    letterSpacing: '0',
  },
  {
    name: 'Display 1',
    typeface: 'Source Sans Pro',
    weight: 'Bold (700)',
    size: '32px',
    letterSpacing: '0',
  },
  {
    name: 'Headline',
    typeface: 'Source Sans Pro',
    weight: 'Semibold (600)',
    size: '24px',
    letterSpacing: '0',
  },
  {
    name: 'Title',
    typeface: 'Source Sans Pro',
    weight: 'Bold (700)',
    size: '20px',
    letterSpacing: '0',
  },
  {
    name: 'Subheading 2',
    typeface: 'Source Sans Pro',
    weight: 'Semibold (600)',
    size: '16px',
    letterSpacing: '0',
  },
  {
    name: 'Subheading 1',
    typeface: 'Source Sans Pro',
    weight: 'Regular (400)',
    size: '14px',
    letterSpacing: '0',
  },
  {
    name: 'Body 1',
    typeface: 'Source Sans Pro',
    weight: 'Regular (400)',
    size: '16px',
    letterSpacing: '0',
  },
  {
    name: 'Body 2',
    typeface: 'Source Sans Pro',
    weight: 'Semibold (600)',
    size: '16px',
    letterSpacing: '0',
  },
  {
    name: 'Caption',
    typeface: 'Source Sans Pro',
    weight: 'Regular (400)',
    size: '12px',
    letterSpacing: '0',
  },
  {
    name: 'Button',
    typeface: 'Source Sans Pro',
    weight: 'Medium (500)',
    size: '14px',
    letterSpacing: '0',
  },
  {
    name: 'Input',
    typeface: 'Source Sans Pro',
    weight: 'Regular (400)',
    size: '14px',
    letterSpacing: '0',
  },
];

export interface TypographyMapping {
  materialName: string;
  angularName: string;
}

const TYPOGRAPHY_MAPPING: TypographyMapping[] = [
  { materialName: 'Headline 1', angularName: 'Display 4' },
  { materialName: 'Headline 2', angularName: 'Display 3' },
  { materialName: 'Headline 3', angularName: 'Display 2' },
  { materialName: 'Headline 4', angularName: 'Display 1' },
  { materialName: 'Headline 5', angularName: 'Headline' },
  { materialName: 'Headline 6', angularName: 'Title' },
  { materialName: 'Subtitle 1', angularName: 'Subheading 1' },
  { materialName: 'Subtitle 2', angularName: 'Subheading 2' },
  { materialName: 'Body 1', angularName: 'Body 1' },
  { materialName: 'Body 2', angularName: 'Body 2' },
  { materialName: 'Button', angularName: 'Button' },
  { materialName: 'Caption', angularName: 'Caption' },
  { materialName: 'Overline', angularName: 'N/A' },
];

@Component({
  selector: 'cdx-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  typographyData = TYPOGRAPHY_DATA;
  displayedColumns1: string[] = [
    'name',
    'typeface',
    'weight',
    'size',
    'letterSpacing',
  ];

  displayedColumns2: string[] = ['materialName', 'angularName'];
  typographyMapping = TYPOGRAPHY_MAPPING;

  highlightedText = `font-weight: 300; // Light
font-weight: 400; // Regular
font-weight: 600; // Semibold
font-weight: 700; // Bold`;

  highlightedTex2 = `// CSS

h1 { defined by css rules... }

<h1>This is my Angular Material heading</h1>
<h1>This is my Material heading</h1>

// HTML

<div class="mat-display-4">This is my Angular Material heading</div>
<div class="mdc-typography--headline1">This is my Material heading</div>`;
}
