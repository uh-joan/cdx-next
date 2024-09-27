import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { CdxFooter, CdxFooterLinkGroup } from './rcx-footer';

const meta: Meta<typeof CdxFooter> = {
  component: CdxFooter,
  title: 'footer',
};
export default meta;

type Story = StoryObj<typeof CdxFooter>;

export const BasicTemplate: Story = {
  args: {
    groupCompanyLinks: false,
    slim: false,
  },
  render: (args) => {
    return (
      <CdxFooter
        groupCompanyLinks={args.groupCompanyLinks}
        slim={args.slim}
      ></CdxFooter>
    );
  },
};

export const SlimTemplate: Story = {
  args: {
    groupCompanyLinks: false,
    slim: true,
  },
  render: (args) => (
    <CdxFooter
      groupCompanyLinks={args.groupCompanyLinks}
      slim={args.slim}
    ></CdxFooter>
  ),
};

export const WithApplicationLinksTemplate: Story = {
  args: {
    groupCompanyLinks: false,
    slim: true,
  },
  render: (args) => {
    return (
      <CdxFooter groupCompanyLinks={args.groupCompanyLinks} slim={args.slim}>
        <a href="https://stackoverflow.com/">Stack Overflow</a>
        <a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a>
      </CdxFooter>
    );
  },
};

export const WithLinkGroupsTemplate: Story = {
  args: {
    groupCompanyLinks: true,
    slim: false,
  },
  render: (args) => {
    return (
      <CdxFooter groupCompanyLinks={args.groupCompanyLinks} slim={args.slim}>
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
  },
};
