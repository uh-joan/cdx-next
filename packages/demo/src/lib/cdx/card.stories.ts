import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'cdx/Card',
  component: MatCardModule,
  decorators: [
    moduleMetadata({
      imports: [MatCardModule, MatButtonModule, ThemeModule],
    }),
  ],
} as Meta;

const basicCardTemplate: StoryFn = () => ({
  template: html`
    <h3>Basic Card</h3>
    <div class="story">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Card title</mat-card-title>
          <mat-card-subtitle>Card subtitle</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>Card content goes here.</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button mat-stroked-button color="primary">
            Card action button
          </button>
          <button mat-button mat-flat-button color="primary">
            Card action button
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
});

const fullyFeaturedCardTemplate: StoryFn = () => ({
  template: html`
    <h3>Fully Featured Card</h3>
    <div class="story">
      <mat-card class="example-card">
        <mat-card-header>
          <div mat-card-avatar class="example-header-image"></div>
          <mat-card-title>Shiba Inu</mat-card-title>
          <mat-card-subtitle>Dog Breed</mat-card-subtitle>
        </mat-card-header>
        <img
          mat-card-image
          src="https://material.angular.io/assets/img/examples/shiba2.jpg"
          alt="Photo of a Shiba Inu"
        />
        <mat-card-content>
          <p>
            The Shiba Inu is the smallest of the six original and distinct spitz
            breeds of dog from Japan. A small, agile dog that copes very well
            with mountainous terrain, the Shiba Inu was originally bred for
            hunting.
          </p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button>LIKE</button>
          <button mat-button>SHARE</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
});

export const basicCard = basicCardTemplate.bind({});
export const fullyFeaturedCard = fullyFeaturedCardTemplate.bind({});
