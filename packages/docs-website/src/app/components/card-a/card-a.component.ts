import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'cdx-card-a',
  templateUrl: './card-a.component.html',
  styleUrls: ['./card-a.component.scss'],
  imports: [MatCardModule],
})
export class CardAComponent {
  @Input() title = '';
  @Input() text = '';
  @Input() imageUrl = '';
}
