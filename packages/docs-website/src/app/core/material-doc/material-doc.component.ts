import { Component, computed, input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

// eslint-disable-next-line @nx/enforce-module-boundaries
import packageJson from '../../../../../../package.json';
import { ExternalLinkComponent } from '../../components/external-link/external-link.component';

@Component({
  selector: 'hlx-material-doc',
  templateUrl: './material-doc.component.html',
  styleUrls: ['./material-doc.component.scss'],
  imports: [ExternalLinkComponent, MatDividerModule],
})
export class MaterialDocComponent {
  title = input<string>();
  versionNumber = packageJson.version;
  majorVersion = this.versionNumber.split('.')[0];
  url = computed(
    () =>
      `https://v${this.majorVersion}.material.angular.io/components/${this.title()}/api`,
  );
}
