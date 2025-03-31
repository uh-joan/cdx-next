import { Component, Input, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ExternalLinkComponent } from 'src/app/components/external-link/external-link.component';

// eslint-disable-next-line @nx/enforce-module-boundaries
import packageJson from '../../../../../../package.json';

@Component({
  selector: 'hlx-material-doc',
  templateUrl: './material-doc.component.html',
  styleUrls: ['./material-doc.component.scss'],
  imports: [ExternalLinkComponent, MatDividerModule],
})
export class MaterialDocComponent implements OnInit {
  @Input() title?: string;

  url = '';

  ngOnInit(): void {
    const versionNumber = packageJson.version;
    const majorVersion = versionNumber.split('.')[0];
    this.url = `https://v${majorVersion}.material.angular.io/components/${this.title}/api`;
  }
}
