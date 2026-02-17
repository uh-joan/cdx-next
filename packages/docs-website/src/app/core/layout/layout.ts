import { Component, computed, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router, RouterOutlet } from '@angular/router';

import { Header } from '../header/header';

@Component({
  selector: 'web-layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss'],
  imports: [Header, RouterOutlet, MatProgressBarModule],
})
export class Layout {
  private router = inject(Router);
  readonly isLoading = computed(() => !!this.router.currentNavigation());
}
