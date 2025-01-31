import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cdx-card-b',
  templateUrl: './card-b.component.html',
  styleUrls: ['./card-b.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatCardModule, RouterModule],
})
export class CardBComponent {
  @Input() title = '';
  @Input() text = '';
  @Input() buttonName = '';
  @Input() url = '';
}
