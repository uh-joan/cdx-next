import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'cdx/Sidenav',
  component: MatSidenavModule,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatSelectModule,
        MatButtonModule,
        ThemeModule,
      ],
    }),
  ],
} as Meta;

const SidenavTemplate: StoryFn = () => ({
  template: html`
    <ng-container>
      <h3>Sidenav with explicit backdrop setting</h3>
      <div class="story mat-typography sidenav-with-backdrop">
        <mat-drawer-container
          class="example-container"
          [hasBackdrop]="hasBackdrop.value"
          style="height: 500px;"
        >
          <mat-drawer #drawer2 [mode]="mode.value">
            <h3>Sidenav</h3>
          </mat-drawer>
          <mat-drawer-content>
            <div style="display: flex; column-gap: 1rem; margin: 1rem;">
              <mat-form-field appearance="fill">
                <mat-label>Sidenav mode</mat-label>
                <mat-select #mode value="side">
                  <mat-option value="side">Side</mat-option>
                  <mat-option value="over">Over</mat-option>
                  <mat-option value="push">Push</mat-option>
                </mat-select>
              </mat-form-field>
              <mat-form-field appearance="fill">
                <mat-label>Has backdrop</mat-label>
                <mat-select #hasBackdrop>
                  <mat-option>Unset</mat-option>
                  <mat-option [value]="true">True</mat-option>
                  <mat-option [value]="false">False</mat-option>
                </mat-select>
              </mat-form-field>
            </div>
            <div style="text-align: center;">
              <button
                mat-raised-button
                color="primary"
                (click)="drawer2.toggle()"
              >
                Toggle sidenav
              </button>
            </div>
          </mat-drawer-content>
        </mat-drawer-container>
      </div>
    </ng-container>
  `,
});

export const sidenav = SidenavTemplate.bind({});
