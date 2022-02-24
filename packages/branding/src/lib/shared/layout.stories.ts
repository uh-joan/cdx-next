import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OneTrustModule } from '@cdx/cookies';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';

export default {
  title: 'Layout',
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        FooterModule,
        HeaderModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatTabsModule,
        OneTrustModule.forRoot({
          domainId: '8b536ee6-9547-4577-843e-314ef3fff451',
        }),
      ],
    }),
  ],
} as Meta;

const HeaderAndFooterTemplate: Story = () => ({
  template: html`
    <div
      style="padding: 0; display: flex; flex-direction: column; margin: -16px;"
    >
      <header cdx-header>
        <cdx-header-global>
          <div
            style="display: inherit; align-items: inherit; margin-right: 1rem;"
          >
            English <mat-icon>expand_more</mat-icon>
          </div>
          <div
            style="display: inherit; align-items: inherit; margin-right: 1rem;"
          >
            <mat-icon>apps</mat-icon> Products
          </div>
          <div style="display: inherit; align-items: inherit;">
            <mat-icon style="margin-right: 0.25rem;">account_circle</mat-icon>
            Doe, Jane
          </div>
        </cdx-header-global>
        <cdx-header-product-name>My Product</cdx-header-product-name>
        <nav mat-tab-nav-bar style="flex: 1">
          <a mat-tab-link routerLink="" routerLinkActive>Foo Bar</a>
          <a mat-tab-link active>Bar</a>
          <a mat-tab-link>Bar Baz Buzz</a>
          <a mat-tab-link disabled>
            <mat-icon>lock</mat-icon>
            Disabled Link
          </a>
        </nav>
      </header>
      <div
        style="flex: 1; padding: 2rem; width: clamp(45ch, 50%, 75ch); margin: 0 auto;"
      >
        <h2>First</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet
          ornare odio at convallis. In hac habitasse platea dictumst. Duis
          accumsan lobortis tortor nec fringilla. Nullam bibendum eros et
          vulputate hendrerit. Curabitur egestas porttitor nisl vestibulum
          hendrerit. Quisque scelerisque libero eget enim pulvinar, at feugiat
          dui luctus. Sed metus turpis, laoreet sit amet ligula ut, commodo
          semper leo. Nulla cursus dapibus ultricies.
        </p>
        <p>
          Proin pulvinar metus a felis facilisis vestibulum. Pellentesque
          suscipit lorem vitae erat porttitor molestie. Pellentesque finibus
          felis arcu, at suscipit tortor maximus nec. Praesent rhoncus justo
          elit, eget interdum lacus luctus non. Vivamus orci mi, condimentum id
          gravida et, maximus in dolor. Proin ultricies eget ex ultricies
          tristique. Mauris id mauris ut massa blandit tristique. Quisque tempor
          risus nibh, non commodo dolor feugiat id. Nam orci est, semper at
          tristique eget, sollicitudin ac purus. Donec ac ullamcorper tellus,
          vel sollicitudin leo.
        </p>
        <p>
          Mauris ac metus eget risus tempus feugiat sit amet et magna.
          Vestibulum a urna ultrices odio tincidunt rutrum sed eget sapien.
          Donec sed dignissim mauris. Cras suscipit, mauris ac ornare finibus,
          mauris nibh vehicula turpis, eget malesuada justo lacus a dui.
          Suspendisse sit amet iaculis odio. Integer leo neque, vehicula ut
          felis et, consequat iaculis orci. Donec ornare nunc vel tempus
          pellentesque. Phasellus sapien ligula, ultricies quis erat non,
          ultricies dictum nisi. Pellentesque id volutpat mauris.
        </p>
        <h2>Second</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          consectetur tellus lectus, et faucibus leo porta lobortis. Mauris elit
          lacus, porttitor a mauris eu, tristique dapibus turpis. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Integer eu ligula sed
          enim ullamcorper viverra eu quis dui. Cras ut tempus arcu, sed cursus
          metus. Phasellus urna elit, cursus quis viverra vel, hendrerit in
          nisl. Donec feugiat volutpat ante a ultrices. Pellentesque et neque
          vestibulum velit mattis pellentesque a quis enim. Donec at mauris
          consequat urna interdum pharetra nec at nisl. Proin ac nisi nec metus
          efficitur venenatis. Aenean porttitor condimentum rutrum. Nunc aliquam
          sem et dui laoreet elementum. Praesent pellentesque nisi ex, rhoncus
          feugiat lorem elementum in. Nullam quis leo cursus, hendrerit tellus
          quis, molestie diam.
        </p>
        <p>
          Etiam nisi dolor, posuere sed lacus ac, facilisis blandit tortor.
          Nulla non vulputate nunc. In efficitur tristique felis in eleifend.
          Phasellus feugiat sapien aliquam libero faucibus, vitae cursus tortor
          lobortis. Vestibulum facilisis in neque sit amet aliquet. Sed egestas
          scelerisque felis ut mollis. Vestibulum accumsan lorem eu ante congue,
          non consequat tellus porta. Nam rhoncus semper scelerisque. Mauris
          rhoncus nulla in sem dapibus porta. Sed nec lectus at leo luctus
          vulputate a eget erat. Vestibulum in arcu nulla. Morbi mollis non
          dolor nec elementum. Quisque quis ipsum at urna volutpat commodo.
          Curabitur odio lectus, dictum eu porttitor et, aliquam eu tellus. In
          hac habitasse platea dictumst. In justo neque, pharetra vitae ante
          nec, facilisis sagittis magna.
        </p>
        <h2>Third</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet
          ornare odio at convallis. In hac habitasse platea dictumst. Duis
          accumsan lobortis tortor nec fringilla. Nullam bibendum eros et
          vulputate hendrerit. Curabitur egestas porttitor nisl vestibulum
          hendrerit. Quisque scelerisque libero eget enim pulvinar, at feugiat
          dui luctus. Sed metus turpis, laoreet sit amet ligula ut, commodo
          semper leo. Nulla cursus dapibus ultricies.
        </p>
        <p>
          Proin pulvinar metus a felis facilisis vestibulum. Pellentesque
          suscipit lorem vitae erat porttitor molestie. Pellentesque finibus
          felis arcu, at suscipit tortor maximus nec. Praesent rhoncus justo
          elit, eget interdum lacus luctus non. Vivamus orci mi, condimentum id
          gravida et, maximus in dolor. Proin ultricies eget ex ultricies
          tristique. Mauris id mauris ut massa blandit tristique. Quisque tempor
          risus nibh, non commodo dolor feugiat id. Nam orci est, semper at
          tristique eget, sollicitudin ac purus. Donec ac ullamcorper tellus,
          vel sollicitudin leo.
        </p>
        <p>
          Mauris ac metus eget risus tempus feugiat sit amet et magna.
          Vestibulum a urna ultrices odio tincidunt rutrum sed eget sapien.
          Donec sed dignissim mauris. Cras suscipit, mauris ac ornare finibus,
          mauris nibh vehicula turpis, eget malesuada justo lacus a dui.
          Suspendisse sit amet iaculis odio. Integer leo neque, vehicula ut
          felis et, consequat iaculis orci. Donec ornare nunc vel tempus
          pellentesque. Phasellus sapien ligula, ultricies quis erat non,
          ultricies dictum nisi. Pellentesque id volutpat mauris.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          consectetur tellus lectus, et faucibus leo porta lobortis. Mauris elit
          lacus, porttitor a mauris eu, tristique dapibus turpis. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Integer eu ligula sed
          enim ullamcorper viverra eu quis dui. Cras ut tempus arcu, sed cursus
          metus. Phasellus urna elit, cursus quis viverra vel, hendrerit in
          nisl. Donec feugiat volutpat ante a ultrices. Pellentesque et neque
          vestibulum velit mattis pellentesque a quis enim. Donec at mauris
          consequat urna interdum pharetra nec at nisl. Proin ac nisi nec metus
          efficitur venenatis. Aenean porttitor condimentum rutrum. Nunc aliquam
          sem et dui laoreet elementum. Praesent pellentesque nisi ex, rhoncus
          feugiat lorem elementum in. Nullam quis leo cursus, hendrerit tellus
          quis, molestie diam.
        </p>
        <p>
          Etiam nisi dolor, posuere sed lacus ac, facilisis blandit tortor.
          Nulla non vulputate nunc. In efficitur tristique felis in eleifend.
          Phasellus feugiat sapien aliquam libero faucibus, vitae cursus tortor
          lobortis. Vestibulum facilisis in neque sit amet aliquet. Sed egestas
          scelerisque felis ut mollis. Vestibulum accumsan lorem eu ante congue,
          non consequat tellus porta. Nam rhoncus semper scelerisque. Mauris
          rhoncus nulla in sem dapibus porta. Sed nec lectus at leo luctus
          vulputate a eget erat. Vestibulum in arcu nulla. Morbi mollis non
          dolor nec elementum. Quisque quis ipsum at urna volutpat commodo.
          Curabitur odio lectus, dictum eu porttitor et, aliquam eu tellus. In
          hac habitasse platea dictumst. In justo neque, pharetra vitae ante
          nec, facilisis sagittis magna.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet
          ornare odio at convallis. In hac habitasse platea dictumst. Duis
          accumsan lobortis tortor nec fringilla. Nullam bibendum eros et
          vulputate hendrerit. Curabitur egestas porttitor nisl vestibulum
          hendrerit. Quisque scelerisque libero eget enim pulvinar, at feugiat
          dui luctus. Sed metus turpis, laoreet sit amet ligula ut, commodo
          semper leo. Nulla cursus dapibus ultricies.
        </p>
        <p>
          Proin pulvinar metus a felis facilisis vestibulum. Pellentesque
          suscipit lorem vitae erat porttitor molestie. Pellentesque finibus
          felis arcu, at suscipit tortor maximus nec. Praesent rhoncus justo
          elit, eget interdum lacus luctus non. Vivamus orci mi, condimentum id
          gravida et, maximus in dolor. Proin ultricies eget ex ultricies
          tristique. Mauris id mauris ut massa blandit tristique. Quisque tempor
          risus nibh, non commodo dolor feugiat id. Nam orci est, semper at
          tristique eget, sollicitudin ac purus. Donec ac ullamcorper tellus,
          vel sollicitudin leo.
        </p>
        <p>
          Mauris ac metus eget risus tempus feugiat sit amet et magna.
          Vestibulum a urna ultrices odio tincidunt rutrum sed eget sapien.
          Donec sed dignissim mauris. Cras suscipit, mauris ac ornare finibus,
          mauris nibh vehicula turpis, eget malesuada justo lacus a dui.
          Suspendisse sit amet iaculis odio. Integer leo neque, vehicula ut
          felis et, consequat iaculis orci. Donec ornare nunc vel tempus
          pellentesque. Phasellus sapien ligula, ultricies quis erat non,
          ultricies dictum nisi. Pellentesque id volutpat mauris.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          consectetur tellus lectus, et faucibus leo porta lobortis. Mauris elit
          lacus, porttitor a mauris eu, tristique dapibus turpis. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Integer eu ligula sed
          enim ullamcorper viverra eu quis dui. Cras ut tempus arcu, sed cursus
          metus. Phasellus urna elit, cursus quis viverra vel, hendrerit in
          nisl. Donec feugiat volutpat ante a ultrices. Pellentesque et neque
          vestibulum velit mattis pellentesque a quis enim. Donec at mauris
          consequat urna interdum pharetra nec at nisl. Proin ac nisi nec metus
          efficitur venenatis. Aenean porttitor condimentum rutrum. Nunc aliquam
          sem et dui laoreet elementum. Praesent pellentesque nisi ex, rhoncus
          feugiat lorem elementum in. Nullam quis leo cursus, hendrerit tellus
          quis, molestie diam.
        </p>
        <p>
          Etiam nisi dolor, posuere sed lacus ac, facilisis blandit tortor.
          Nulla non vulputate nunc. In efficitur tristique felis in eleifend.
          Phasellus feugiat sapien aliquam libero faucibus, vitae cursus tortor
          lobortis. Vestibulum facilisis in neque sit amet aliquet. Sed egestas
          scelerisque felis ut mollis. Vestibulum accumsan lorem eu ante congue,
          non consequat tellus porta. Nam rhoncus semper scelerisque. Mauris
          rhoncus nulla in sem dapibus porta. Sed nec lectus at leo luctus
          vulputate a eget erat. Vestibulum in arcu nulla. Morbi mollis non
          dolor nec elementum. Quisque quis ipsum at urna volutpat commodo.
          Curabitur odio lectus, dictum eu porttitor et, aliquam eu tellus. In
          hac habitasse platea dictumst. In justo neque, pharetra vitae ante
          nec, facilisis sagittis magna.
        </p>
      </div>
      <footer cdx-footer></footer>
    </div>
  `,
});

export const HeaderAndFooter = HeaderAndFooterTemplate.bind({});
