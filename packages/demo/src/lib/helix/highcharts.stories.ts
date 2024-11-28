import { MatTabsModule } from '@angular/material/tabs';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

import { HighchartsStyledModule } from '../highcharts/highcharts-styled.module';
import { HighchartsThemedModule } from '../highcharts/highcharts-themed.module';

export default {
  title: 'helix/HighCharts',
  component: MatTabsModule,
  decorators: [
    moduleMetadata({
      imports: [HighchartsThemedModule, HighchartsStyledModule, ThemeModule],
    }),
  ],
} as Meta;

const GlobalThemeTemplate: StoryFn = () => ({
  template: html`
    <h3>Global Theme Example</h3>
    <demo-highcharts-themed></demo-highcharts-themed>
  `,
});

const StyledModeTemplate: StoryFn = () => ({
  template: html`
    <h3>Styled Mode Example</h3>
    <demo-highcharts-styled></demo-highcharts-styled>
  `,
});

export const globalTheme = GlobalThemeTemplate.bind({});
export const styledMode = StyledModeTemplate.bind({});
