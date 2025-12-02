import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterModule, MatProgressBarModule],
})
export class AppComponent {
  matIconReg = inject(MatIconRegistry);

  constructor() {
    this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
  }
}
