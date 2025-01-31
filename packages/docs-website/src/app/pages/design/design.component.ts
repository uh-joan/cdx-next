import { Component } from '@angular/core';
import { NavbarSection } from 'src/app/core/left-navigation/left-navigation.interface';

@Component({
  selector: 'cdx-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
})
export class DesignComponent {
  leftNavbarConfig: NavbarSection[] = [
    {
      heading: 'Design principles',
      elements: [
        {
          label: 'Principles Overview',
          url: 'principles-overview',
        },
        {
          label: 'Enterprise Design System Strategy',
          url: 'enterprise-design-system-strategy',
        },
        {
          label: 'Enterprise Design System Value',
          url: 'enterprise-design-system-value',
        },
      ],
    },
    {
      heading: 'Design foundations',
      elements: [
        {
          label: 'Foundations Overview',
          url: 'foundations-overview',
        },
        {
          label: 'Color palette',
          url: 'color-palette',
        },
        {
          label: 'Elevation',
          url: 'elevation',
        },
        {
          label: 'Grid System',
          url: 'grid-system',
        },
        {
          label: 'Iconography',
          url: 'iconography',
        },
        {
          label: 'Illustration and Imagery',
          url: 'illustration-and-imagery',
        },
        {
          label: 'Logos',
          url: 'logos',
        },
        {
          label: 'Pictograms',
          url: 'pictograms',
        },
        {
          label: 'Responsive Design',
          url: 'responsive-design',
        },
        {
          label: 'Typography',
          url: 'typography',
        },
      ],
    },
    {
      heading: 'Design Patterns',
      elements: [
        {
          label: 'Pattern Library',
          url: 'pattern-library',
        },
      ],
    },
    {
      heading: 'Design Toolkits',
      elements: [
        {
          label: 'Abstract',
          url: 'abstract',
        },
        {
          label: 'Figma',
          url: 'figma',
        },
        {
          label: 'Invision',
          url: 'invision',
        },
        {
          label: 'Sketch',
          url: 'sketch',
        },
        {
          label: 'Toolkits',
          url: 'toolkits',
        },
      ],
    },
  ];
}
