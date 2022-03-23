import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Sprint 1/Theme',
  decorators: [moduleMetadata({ imports: [ThemeModule] })],
} as Meta;

const TypographyTemplate: Story = () => ({
  template: html`
    <div class="mat-typography">
      <h1>Typography</h1>
      <h2>Levels</h2>
      <blockquote>
        <p>
          A <strong>typography</strong> level is a collection of typographic
          styles that corresponds to a specific part of an application's
          structure, such as a header. Each level includes styles for font
          family, font weight, font size, and letter spacing. Angular Material
          uses the typography levels from the
          <a
            href="https://material.io/archive/guidelines/style/typography.html#typography-styles"
            target="_blank"
            rel="nofollow noopener noreferrer"
            >2014 version of the Material Design specification</a
          >.
        </p>
      </blockquote>
      <p>
        Border and background color are used in the following examples to
        demonstrate that many of the typography levels <em>also</em> adjust
        spacing by way of margins.
      </p>
    </div>
    <dl>
      <ng-container
        *ngFor="let level of ['display-4','display-3','display-2','display-1','headline','title','subheading-2','subheading-1','body-2','body-1','caption']"
      >
        <dt><h4>{{ level }}</h4></dt>
        <dd
          style="border: 1px dashed; padding: 0; background-color: #ddd; margin-bottom: 0.5rem;"
        >
          <div>
            <div class="mat-{{level}}" style="background-color: white">
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
        </dd>
      </ng-container>
    </dl>
    <h2>Longer text</h2>
    <dl>
      <ng-container *ngFor="let level of ['body-2','body-1']">
        <dt><h4>{{ level }}</h4></dt>
        <dd
          style="border: 1px dashed; padding: 0; background-color: #ddd; margin-bottom: 0.5rem"
        >
          <div class="mat-{{level}}" style="background-color: white">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              porttitor orci id leo faucibus rhoncus. Quisque auctor mattis
              massa quis suscipit. Suspendisse ut augue vitae est pretium
              elementum in auctor tortor. Donec nulla nibh, pretium in viverra
              ut, pellentesque vel nibh. Quisque sodales a purus at molestie.
              Cras vel felis congue, sagittis massa ut, hendrerit neque.
              Praesent porttitor imperdiet est.
            </p>
            <p>
              Nam justo nisi, bibendum sed efficitur in, tincidunt id diam.
              Fusce ac maximus magna. Sed lacinia, nunc sit amet ultrices
              imperdiet, sem tortor laoreet arcu, ut faucibus enim leo vitae
              tellus. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. In nec felis eu diam
              condimentum rutrum. Aenean pharetra velit eu vulputate vestibulum.
              Nam maximus libero et rhoncus fermentum. Pellentesque vulputate
              turpis eu neque bibendum porttitor. Praesent maximus quam nisl,
              accumsan cursus sem consectetur nec. Interdum et malesuada fames
              ac ante ipsum primis in faucibus. Nulla felis lorem, tempus a
              tincidunt ac, consectetur ut nisi.
            </p>
            <p>
              Integer posuere sapien id felis pharetra, nec tincidunt lorem
              porttitor. Phasellus mollis maximus pellentesque. Integer a
              ullamcorper tortor. Donec ornare ipsum sapien. Cras tempus ante
              non vulputate dapibus. Nullam facilisis sollicitudin mauris nec
              bibendum. Nulla tempus nunc et tellus maximus, nec venenatis augue
              varius. Vestibulum tempus mauris et massa vestibulum, ut dictum
              tellus malesuada. Aenean justo orci, congue quis porta nec, tempor
              id quam. Aliquam luctus enim condimentum erat fringilla mattis.
              Donec tincidunt imperdiet lacinia. Aliquam sed nibh sapien. Donec
              id ligula eu lectus volutpat fermentum. Aliquam erat volutpat.
            </p>
            <p>
              Donec lacinia elit nec diam viverra, ut sagittis tortor feugiat.
              Integer sit amet lobortis erat, non ultrices ipsum. Aliquam nec
              ante sed massa pulvinar mattis. Donec vehicula vehicula mi sit
              amet venenatis. Duis dui orci, facilisis sed blandit eget,
              lobortis id mauris. Fusce neque leo, posuere ac nibh in, malesuada
              aliquam odio. Sed venenatis pretium tellus, eget imperdiet libero
              aliquam eget. Nulla sed tortor nec lectus malesuada malesuada non
              at tellus. Nulla tempor aliquet efficitur. Donec neque enim,
              maximus nec lacus sed, lacinia ultricies nisl. Morbi malesuada
              iaculis condimentum. Ut iaculis rhoncus eros eget venenatis. Ut
              nec luctus nunc, in facilisis nisi. Donec id erat metus. In ut
              orci justo.
            </p>
            <p>
              In elit sem, hendrerit ut odio eu, interdum eleifend leo. Donec
              non elit volutpat, mattis justo ut, hendrerit tortor. Proin vel
              egestas dui. Mauris porta, risus non cursus fermentum, sem odio
              laoreet lorem, non convallis metus massa ac arcu. Vivamus at nisl
              dolor. Cras vel suscipit ligula, ut pellentesque odio. Maecenas
              sit amet libero nec nibh tempus auctor quis eget magna.
            </p>
          </div>
        </dd>
      </ng-container>
    </dl>
  `,
});

export const Typography = TypographyTemplate.bind({});
