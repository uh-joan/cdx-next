import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

export interface CardCInput {
  title: string;
  text: string;
  imageUrl: string;
  buttonName: string;
  url: string;
}

@Component({
  selector: 'app-card-c',
  imports: [MatButtonModule, RouterModule],
  templateUrl: './card-c.component.html',
  styleUrl: './card-c.component.scss',
})
export class CardCComponent {
  @Input() cardData: CardCInput = {
    title: '',
    text: '',
    imageUrl: '',
    buttonName: '',
    url: '',
  };
}
