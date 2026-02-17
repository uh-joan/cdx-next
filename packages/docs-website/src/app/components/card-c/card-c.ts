import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

export interface CardCInput {
  title: string;
  text: string;
  imageUrl: string;
  buttonName: string;
  url: string;
}

@Component({
  selector: 'app-card-c',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './card-c.html',
  styleUrl: './card-c.scss',
})
export class CardC {
  cardData = input.required<CardCInput>();
}
