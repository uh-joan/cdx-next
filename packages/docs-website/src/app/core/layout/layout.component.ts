import { Component, computed, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router, RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'web-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [HeaderComponent, RouterOutlet, MatProgressBarModule],
})
export class LayoutComponent {
  private router = inject(Router);
  readonly isLoading = computed(() => !!this.router.currentNavigation());
}
