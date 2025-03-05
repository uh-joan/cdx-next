import { Component } from '@angular/core';
import { HelixFooterModule } from '@cdx/ngx-branding';
import {
  CardCComponent,
  CardCInput,
} from 'src/app/components/card-c/card-c.component';

@Component({
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CardCComponent, HelixFooterModule],
})
export class HomeComponent {
  cardConfigs: CardCInput[] = [
    {
      title: 'Development',
      text: 'Start building with our guidelines, service information and resources.',
      imageUrl: '../../../assets/home/pictograms/development.svg',
      buttonName: 'Get started',
      url: '/development',
    },
    {
      title: 'Foundations',
      text: 'Discover the visual elements that make up our design system.',
      imageUrl: '../../../assets/home/pictograms/foundations.svg',
      buttonName: 'Explore foundations',
      url: '/foundations',
    },
    {
      title: 'Components',
      text: 'Learn about the intuitive building blocks of our design system.',
      imageUrl: '../../../assets/home/pictograms/components.svg',
      buttonName: 'Explore components',
      url: '/components',
    },
    {
      title: 'Services',
      text: 'Find out about our preferred solutions to common use-cases.',
      imageUrl: '../../../assets/home/pictograms/patterns.svg',
      buttonName: 'Explore services',
      url: '/services',
    },
  ];
}
