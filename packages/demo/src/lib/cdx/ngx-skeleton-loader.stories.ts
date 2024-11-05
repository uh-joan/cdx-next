import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

export default {
  title: 'base/Skeleton loader',
  decorators: [
    moduleMetadata({
      imports: [NgxSkeletonLoaderModule],
    }),
  ],
} as Meta;

const linearNgxSkeletonLoaderTemplate: StoryFn = () => ({
  template: html`<ngx-skeleton-loader count="5" />`,
});

const circleNgxSkeletonLoaderTemplate: StoryFn = () => ({
  template: html`<ngx-skeleton-loader count="5" appearance="circle" />`,
});

const customNgxSkeletonLoaderTemplate: StoryFn = () => ({
  template: html`<div style="display: flex; gap: 5px; flex-wrap: wrap">
    <div style="display: flex">
      <ngx-skeleton-loader
        appearance="circle"
        count="1"
        [theme]="{ width: '120px', height: '120px', background: '#f3e5f5', display: block}"
      />

      <div>
        <ngx-skeleton-loader
          [theme]="{width: '820px', height: '30px', display: block }"
        ></ngx-skeleton-loader>
        <ngx-skeleton-loader
          [theme]="{width: '820px', height: '30px', display: block }"
        ></ngx-skeleton-loader>
        <ngx-skeleton-loader
          [theme]="{width: '820px', height: '30px', display: block }"
        ></ngx-skeleton-loader>
      </div>
    </div>

    <ngx-skeleton-loader
      style="width: 100%"
      count="10"
      [theme]="{width: '100%', height: '10px', display: block}"
    ></ngx-skeleton-loader>
  </div>`,
});

const animationsNgxSkeletonLoaderTemplate: StoryFn = () => ({
  template: html`
    No Animation:
    <ngx-skeleton-loader animation="false"></ngx-skeleton-loader>
    progress animation:
    <ngx-skeleton-loader animation="progress"></ngx-skeleton-loader>
    progress-dark animation:
    <ngx-skeleton-loader animation="progress-dark"></ngx-skeleton-loader>
    pulse animation:
    <ngx-skeleton-loader animation="pulse"></ngx-skeleton-loader>
  `,
});

export const linearNgxSkeletonLoader = linearNgxSkeletonLoaderTemplate.bind({});
export const circleNgxSkeletonLoader = circleNgxSkeletonLoaderTemplate.bind({});
export const customNgxSkeletonLoader = customNgxSkeletonLoaderTemplate.bind({});
export const animationsNgxSkeletonLoader =
  animationsNgxSkeletonLoaderTemplate.bind({});
