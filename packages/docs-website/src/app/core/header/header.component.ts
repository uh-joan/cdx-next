import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {
  HelixHeaderComponent,
  HelixHeaderGlobalComponent,
} from '@cdx/ngx-branding';

import { SearchComponent } from '../search/search.component';
import { links, NavigationLink } from './header.config';

@Component({
  selector: 'web-hlx-header',
  imports: [
    HelixHeaderComponent,
    HelixHeaderGlobalComponent,
    SearchComponent,
    RouterModule,
    MatButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  links: NavigationLink[] = links;
}
