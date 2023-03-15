import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CdxFooter, CdxFooterLinkGroup } from './rcx-footer';

const Story: ComponentMeta<typeof CdxFooter> = {
  component: CdxFooter,
  title: 'footer',
};
export default Story;

const BasicTemplate: ComponentStory<typeof CdxFooter> = (args) => (
  <CdxFooter
    groupCompanyLinks={args.groupCompanyLinks}
    slim={args.slim}
  ></CdxFooter>
);

export const Primary = BasicTemplate.bind({});
Primary.args = {
  groupCompanyLinks: false,
  slim: false,
};

const SlimTemplate: ComponentStory<typeof CdxFooter> = (args) => (
  <CdxFooter groupCompanyLinks={args.groupCompanyLinks} slim={true}></CdxFooter>
);

export const Slim = SlimTemplate.bind({});

Slim.args = {
  groupCompanyLinks: false,
};

const WithApplicationLinksTemplate: ComponentStory<typeof CdxFooter> = (
  args,
) => (
  <CdxFooter groupCompanyLinks={args.groupCompanyLinks} slim={args.slim}>
    <a href="https://stackoverflow.com/">Stack Overflow</a>
    <a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a>
  </CdxFooter>
);
WithApplicationLinksTemplate.args = {
  slim: false,
};
export const WithApplicationLinks = WithApplicationLinksTemplate.bind({});

export const WithLinkGroupsTemplate: ComponentStory<typeof CdxFooter> = (
  args,
) => (
  <CdxFooter groupCompanyLinks={true} slim={args.slim}>
    <CdxFooterLinkGroup title="Developer Resources">
      <a href="https://stackoverflow.com/">Stack Overflow</a>
      <a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a>
      <a href="https://hackertyper.net/">Hacker Typer</a>
    </CdxFooterLinkGroup>
    <CdxFooterLinkGroup title="One Link">
      <a href="https://www.pinterest.com/debbie_gould/purple-green-together/">
        Purple and Green
      </a>
    </CdxFooterLinkGroup>
    <CdxFooterLinkGroup title="Two Links">
      <a href="https://www.vim.org/">vim</a>
      <a href="https://www.gnu.org/software/emacs/">emacs</a>
    </CdxFooterLinkGroup>
    <CdxFooterLinkGroup title="Three Links">
      <a href="https://en.wikipedia.org/wiki/Athos_(character)">Athos</a>
      <a href="https://en.wikipedia.org/wiki/Porthos">Porthos</a>
      <a href="https://en.wikipedia.org/wiki/Aramis">Aramis</a>
    </CdxFooterLinkGroup>
    <CdxFooterLinkGroup title="Four Links">
      <a href="https://stackoverflow.com/">Stack Overflow</a>
      <a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a>
      <a href="https://hackertyper.net/">Hacker Typer</a>
    </CdxFooterLinkGroup>
  </CdxFooter>
);
