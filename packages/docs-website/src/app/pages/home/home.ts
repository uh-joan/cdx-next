import { Component } from '@angular/core';

import { CardC, CardCInput } from '../../components/card-c/card-c';

@Component({
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [CardC],
})
export class Home {
  cardConfigs: CardCInput[] = [
    {
      title: 'Foundations',
      text: 'Explore the visual language that defines Helix—from colour and typography to spacing and iconography.',
      imageUrl: '/home/pictograms/foundations.svg',
      buttonName: 'Explore foundations',
      url: '/foundations',
    },
    {
      title: 'Components',
      text: 'Use flexible, accessible UI components designed for consistency across products.',
      imageUrl: '/home/pictograms/components.svg',
      buttonName: 'Explore components',
      url: '/components',
    },
    {
      title: 'Patterns',
      text: 'Follow proven, reusable solutions for common user needs and workflows.',
      imageUrl: '/home/pictograms/patterns.svg',
      buttonName: 'Explore patterns',
      url: '/patterns',
    },
    {
      title: 'Development',
      text: 'Start building with clear guidelines, platform services and developer resources.',
      imageUrl: '/home/pictograms/development.svg',
      buttonName: 'Get started',
      url: '/development',
    },
    {
      title: 'Services',
      text: 'Find out about our preferred solutions to common use-cases.',
      // No dedicated Services pictogram yet; reuses the Development one.
      imageUrl: '/home/pictograms/development.svg',
      buttonName: 'Explore services',
      url: '/services',
    },
  ];
}
