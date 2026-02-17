import { Component, computed, input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

// eslint-disable-next-line @nx/enforce-module-boundaries
import packageJson from '../../../../../../package.json';
import { ExternalLink } from '../../components/external-link/external-link';

@Component({
  selector: 'hlx-material-doc',
  templateUrl: './material-doc.html',
  styleUrls: ['./material-doc.scss'],
  imports: [ExternalLink, MatDividerModule],
})
export class MaterialDoc {
  title = input<string>();
  versionNumber = packageJson.version;
  majorVersion = this.versionNumber.split('.')[0];
  url = computed(
    () =>
      `https://v${this.majorVersion}.material.angular.io/components/${this.title()}/api`,
  );
}
