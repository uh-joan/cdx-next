import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

// import { OneTrustModule } from '../../one-trust/one-trust.module';
import { HelixFooterComponent } from './helix-footer.component';
import { HelixFooterModule } from './helix-footer.module';

export default {
  title: 'Helix/Footer',
  component: HelixFooterComponent,
  decorators: [
    moduleMetadata({
      imports: [HelixFooterModule, ThemeModule],
    }),
  ],
} as Meta<HelixFooterComponent>;

const BasicTemplate: StoryFn<HelixFooterComponent> = () => ({
  template: html`<footer hlx-footer></footer> `,
});

const WithApplicationLinksTemplate: StoryFn<HelixFooterComponent> = () => ({
  template: html`
    <footer hlx-footer>
      <a hlx-footer-link href="#">Legal center</a>
      <a hlx-footer-link href="#">Privacy notice</a>
      <a hlx-footer-link href="#">Cookie policy</a>
      <a hlx-footer-link href="#">Manage cookie preferences</a>
    </footer>
  `,
});

const WithLinkGroupsTemplate: StoryFn<HelixFooterComponent> = () => ({
  template: html`
    <footer hlx-footer groupCompanyLinks>
      <hlx-footer-group>
        <hlx-footer-group-title>Company</hlx-footer-group-title>
        <a hlx-footer-link href="#">Legal center</a>
        <a hlx-footer-link href="#">Privacy notice</a>
        <a hlx-footer-link href="#">Cookie policy</a>
        <a hlx-footer-link href="#">Manage cookie preferences</a>
      </hlx-footer-group>
      <hlx-footer-group>
        <hlx-footer-group-title>Title</hlx-footer-group-title>
        <a hlx-footer-link href="#">link-item-1</a>
        <a hlx-footer-link href="#">link-item-2</a>
        <a hlx-footer-link href="#">link-item-3</a>
        <a hlx-footer-link href="#">link-item-4</a>
        <a hlx-footer-link href="#">link-item-5</a>
        <a hlx-footer-link href="#">link-item-6</a>
      </hlx-footer-group>
      <hlx-footer-group>
        <hlx-footer-group-title>Title</hlx-footer-group-title>
        <a hlx-footer-link href="#">link-item-1</a>
        <a hlx-footer-link href="#">link-item-2</a>
        <a hlx-footer-link href="#">link-item-3</a>
        <a hlx-footer-link href="#">link-item-4</a>
        <a hlx-footer-link href="#">link-item-5</a>
        <a hlx-footer-link href="#">link-item-6</a>
      </hlx-footer-group>
    </footer>
  `,
});

const WithLogoTemplate: StoryFn<HelixFooterComponent> = () => ({
  template: html`<footer hlx-footer branded>
    <a hlx-footer-link href="#">Legal center</a>
    <a hlx-footer-link href="#">Privacy notice</a>
    <a hlx-footer-link href="#">Cookie policy</a>
    <a hlx-footer-link href="#">Manage cookie preferences</a>
  </footer> `,
});

export const Basic = BasicTemplate.bind({});
export const WithApplicationLinks = WithApplicationLinksTemplate.bind({});
export const WithLinkGroups = WithLinkGroupsTemplate.bind({});
export const WithLogo = WithLogoTemplate.bind({});
