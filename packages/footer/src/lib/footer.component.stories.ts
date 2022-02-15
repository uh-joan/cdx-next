import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

import { FooterModule } from '..';
import { FooterComponent } from './footer.component';

export default {
  title: 'Footer',
  component: FooterComponent,
  parameters: {
    docs: { iframeHeight: 200 },
  },
  decorators: [
    moduleMetadata({
      imports: [FooterModule],
    }),
  ],
} as Meta<FooterComponent>;

const BasicTemplate: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args,
  template: html`<footer cdx-footer></footer>`,
});

const WithLinksTemplate: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args,
  template: html`
    <footer cdx-footer>
      <a cdx-footer-link href="https://stackoverflow.com/">Stack Overflow</a>
      <a cdx-footer-link href="https://www.powerlanguage.co.uk/wordle/">
        Wordle
      </a>
    </footer>
  `,
});

const WithLinkGroupTemplate: Story<FooterComponent> = (
  args: FooterComponent,
) => ({
  props: args,
  template: html`
    <footer cdx-footer>
      <cdx-footer-group>
        <a cdx-footer-link href="https://stackoverflow.com/">Stack Overflow</a>
        <cdx-footer-group-title>Developer Resources</cdx-footer-group-title>
        <a cdx-footer-link href="https://www.powerlanguage.co.uk/wordle/">
          Wordle
        </a>
        <a cdx-footer-link href="https://hackertyper.net/">Hacker Typer</a>
      </cdx-footer-group>
    </footer>
  `,
});

const WithLotsOfLinkGroups: Story<FooterComponent> = (
  args: FooterComponent,
) => ({
  props: args,
  template: html`
    <footer cdx-footer>
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

export const Basic = BasicTemplate.bind({});
export const WithLinks = WithLinksTemplate.bind({});
export const WithLinkGroup = WithLinkGroupTemplate.bind({});
export const LotsOfLinkGroups = WithLotsOfLinkGroups.bind({});
