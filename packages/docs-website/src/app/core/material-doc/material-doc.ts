import { Component, computed, input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { ExternalLink } from '../../components/external-link/external-link';
import { APP_VERSION } from '../app-version';

@Component({
  selector: 'hlx-material-doc',
  templateUrl: './material-doc.html',
  styleUrl: './material-doc.scss',
  standalone: true,
  imports: [ExternalLink, MatDividerModule],
})
export class MaterialDoc {
  title = input<string>();
  versionNumber = APP_VERSION;
  majorVersion = this.versionNumber.split('.')[0];
  url = computed(
    () =>
      `https://v${this.majorVersion}.material.angular.io/components/${this.title()}/api`,
  );
}
