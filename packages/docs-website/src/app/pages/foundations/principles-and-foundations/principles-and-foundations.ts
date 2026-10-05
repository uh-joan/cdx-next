import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { RouterLink } from '@angular/router';

import { Page } from '../../../core/page/page';

interface Principle {
  title: string;
  description: string;
  pictogram: string;
}

interface FoundationCard {
  title: string;
  description: string;
  url: string;
  image: string;
}

const ASSETS = 'helix/foundations-principles-and-foundations';

@Component({
  selector: 'cdx-principles-and-foundations',
  templateUrl: './principles-and-foundations.html',
  styleUrls: ['../foundation-page.scss', './principles-and-foundations.scss'],
  imports: [Page, MatDivider, RouterLink],
})
export class PrinciplesAndFoundations {
  @HostBinding('class') hostClass = 'cdx-section';

  protected readonly assets = ASSETS;

  protected readonly principles: Principle[] = [
    {
      title: 'Focus on the user',
      description:
        'We design with empathy and understanding—putting user needs first to create experiences that help them achieve their goals with confidence.',
      pictogram: `${ASSETS}/02.png`,
    },
    {
      title: 'Create clarity',
      description:
        'In complex environments like Life Sciences and Healthcare, we turn complexity into simplicity—delivering solutions that are clear, direct and easy to understand.',
      pictogram: `${ASSETS}/03.png`,
    },
    {
      title: 'Care about the craft',
      description:
        'We pay close attention to detail and stay current with best practices—ensuring every interaction feels refined, reliable and thoughtfully designed.',
      pictogram: `${ASSETS}/04.png`,
    },
  ];

  protected readonly foundations: FoundationCard[] = [
    {
      title: 'Color',
      description:
        'Establish a consistent palette that communicates meaning and supports accessibility.',
      url: '/foundations/color',
      image: `${ASSETS}/card-color.png`,
    },
    {
      title: 'Typography',
      description:
        'Use clear, readable type to create hierarchy and support user focus.',
      url: '/foundations/typography',
      image: `${ASSETS}/card-typography.png`,
    },
    {
      title: 'Icons',
      description:
        'Apply purposeful icons to enhance meaning and improve scannability.',
      url: '/foundations/iconography',
      image: `${ASSETS}/card-icons.png`,
    },
    {
      title: 'Branding',
      description:
        'Align visuals and tone with our brand to build recognition and trust.',
      url: '/foundations/branding',
      image: `${ASSETS}/card-branding.png`,
    },
    {
      title: 'Elevation',
      description:
        'Use depth and shadow to convey hierarchy and guide user attention.',
      url: '/foundations/elevation',
      image: `${ASSETS}/card-elevation.png`,
    },
    {
      title: 'Density',
      description:
        'Adapt spacing and sizing to suit different contexts and content needs.',
      url: '/foundations/density',
      image: `${ASSETS}/card-density.png`,
    },
    {
      title: 'AI',
      description:
        'Design AI experiences that are transparent, recognisable, and support user control.',
      url: '/foundations/ai',
      image: `${ASSETS}/card-ai.png`,
    },
  ];
}
