import {
  FooterComponent,
  FooterModule,
  OneTrustModule,
} from '@cdx/ngx-branding';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      imports: [FooterModule, ThemeModule],
    }),
  ],
} as Meta<FooterComponent>;

const BasicTemplate: StoryFn<FooterComponent> = () => ({
  template: html`<footer cdx-footer></footer>`,
});

const BasicWithCustomThemeTemplate: StoryFn<FooterComponent> = () => ({
  template: html`<footer cdx-footer [theme]="brandingTheme"></footer>`,
  props: {
    brandingTheme: {
      footer: {
        background: '#E0E0E0',
        color: '#0D47A1',
      },
    },
  },
});

const WithApplicationLinksTemplate: StoryFn<FooterComponent> = () => ({
  template: html`
    <footer cdx-footer>
      <a cdx-footer-link href="https://stackoverflow.com/">Stack Overflow</a>
      <a cdx-footer-link href="https://www.powerlanguage.co.uk/wordle/">
        Wordle
      </a>
    </footer>
  `,
});

const WithLinkGroupsTemplate: StoryFn<FooterComponent> = () => ({
  template: html`
    <footer cdx-footer groupCompanyLinks>
      <cdx-footer-group>
        <cdx-footer-group-title>Developer Resources</cdx-footer-group-title>
        <a cdx-footer-link href="https://stackoverflow.com/">Stack Overflow</a>
        <a cdx-footer-link href="https://www.powerlanguage.co.uk/wordle/">
          Wordle
        </a>
        <a cdx-footer-link href="https://hackertyper.net/">Hacker Typer</a>
      </cdx-footer-group>
      <cdx-footer-group>
        <cdx-footer-group-title>One Link</cdx-footer-group-title>
        <a
          cdx-footer-link
          href="https://www.pinterest.com/debbie_gould/purple-green-together/"
        >
          Purple and Green
        </a>
      </cdx-footer-group>
      <cdx-footer-group>
        <cdx-footer-group-title>Two Links</cdx-footer-group-title>
        <a cdx-footer-link href="https://www.vim.org/">vim</a>
        <a cdx-footer-link href="https://www.gnu.org/software/emacs/">emacs</a>
      </cdx-footer-group>
      <cdx-footer-group>
        <cdx-footer-group-title>Three Links</cdx-footer-group-title>
        <a
          cdx-footer-link
          href="https://en.wikipedia.org/wiki/Athos_(character)"
        >
          Athos
        </a>
        <a cdx-footer-link href="https://en.wikipedia.org/wiki/Porthos">
          Porthos
        </a>
        <a cdx-footer-link href="https://en.wikipedia.org/wiki/Aramis">
          Aramis
        </a>
      </cdx-footer-group>
      <cdx-footer-group>
        <cdx-footer-group-title>Four Links</cdx-footer-group-title>
        <a cdx-footer-link href="https://en.wikipedia.org/wiki/John_Lennon">
          John
        </a>
        <a cdx-footer-link href="https://en.wikipedia.org/wiki/Paul_McCartney">
          Paul
        </a>
        <a cdx-footer-link href="https://en.wikipedia.org/wiki/George_Harrison">
          George
        </a>
        <a cdx-footer-link href="https://en.wikipedia.org/wiki/Ringo_Starr">
          Ringo
        </a>
      </cdx-footer-group>
    </footer>
  `,
});

const BasicWithOneTrustTemplate: StoryFn<FooterComponent> = () => ({
  template: html`<footer cdx-footer></footer>`,
});

export const Basic = BasicTemplate.bind({});
export const BasicWithOneTrust = BasicWithOneTrustTemplate.bind({});
export const WithApplicationLinks = WithApplicationLinksTemplate.bind({});
export const WithLinkGroups = WithLinkGroupsTemplate.bind({});
export const BasicWithCustomTheme = BasicWithCustomThemeTemplate.bind({});

BasicWithOneTrust.decorators = [
  moduleMetadata({
    imports: [
      FooterModule,
      OneTrustModule.forRoot({
        domainId: '8b536ee6-9547-4577-843e-314ef3fff451',
      }),
      ThemeModule,
    ],
  }),
];
