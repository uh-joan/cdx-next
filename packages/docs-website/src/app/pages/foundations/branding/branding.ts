import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { InternalLink } from '../../../components/internal-link/internal-link';
import { Page } from '../../../core/page/page';

interface Pictogram {
  file: string;
  number: string;
  src: string;
}

const PICTOGRAM_COUNT = 79;
const BASE = 'helix/foundations-branding/';

/**
 * Helix ships 79 pictograms, each in a light and a dark theme variant. The
 * downloaded files are numbered in Helix page order: the logo images are
 * 01-02, the light variants 03-81 and the dark variants 82-160 (pictogram
 * 001-079 in each run).
 */
function pictograms(firstFile: number): Pictogram[] {
  return Array.from({ length: PICTOGRAM_COUNT }, (_, i) => {
    const file = `${String(firstFile + i).padStart(2, '0')}.svg`;
    return {
      file,
      number: String(i + 1).padStart(3, '0'),
      src: BASE + file,
    };
  });
}

@Component({
  selector: 'cdx-branding',
  templateUrl: './branding.html',
  styleUrl: '../foundation-page.scss',
  imports: [Page, MatDivider, InternalLink],
})
export class Branding {
  @HostBinding('class') hostClass = 'cdx-section';

  readonly lightPictograms = pictograms(3);
  readonly darkPictograms = pictograms(3 + PICTOGRAM_COUNT);
}
