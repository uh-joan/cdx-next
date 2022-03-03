import { Component, Input } from '@angular/core';

@Component({
  template: `<mat-nav-list>
    <ng-content></ng-content>
  </mat-nav-list>`,
})
export class MatNavListWrapperComponent {}

@Component({
  template: `<mat-list>
    <ng-content></ng-content>
  </mat-list>`,
})
export class MatListWrapperComponent {}

@Component({
  template: `<mat-list dense>
    <ng-content></ng-content>
  </mat-list>`,
})
export class MatListDenseWrapperComponent {}

@Component({
  template: `<img [src]="src" mat-list-avatar />`,
})
export class MatListAvatarWrapperComponent {
  @Input()
  src?: string;
}

@Component({
  template: `<mat-icon matListIcon><ng-content></ng-content></mat-icon>`,
})
export class MatListIconWrapperComponent {}

@Component({
  template: `<div mat-subheader><ng-content></ng-content></div>`,
})
export class MatListSubheaderWrapperComponent {}

@Component({
  template: `<a mat-list-item [href]="href"><ng-content></ng-content></a>`,
})
export class MatListItemLinkWrapperComponent {
  @Input()
  href?: string;
}

@Component({
  //TODO: Fix multiline class not being added
  template: `<mat-list-item>
    <ng-content
      select="c-mat-list-avatar"
      ngProjectAs="[mat-list-avatar]"
    ></ng-content>
    <ng-content
      select="c-mat-list-icon"
      ngProjectAs="[mat-list-icon]"
    ></ng-content>
    <ng-content select="c-mat-line" ngProjectAs="[matLine]"></ng-content>
    <ng-content></ng-content>
  </mat-list-item>`,
})
export class MatListItemWrapperComponent {}

@Component({
  //TODO: Wrap this into a higher order component
  template: `<mat-list-option>
    <ng-content
      select="c-mat-list-icon"
      ngProjectAs="[mat-list-icon]"
    ></ng-content>
    <ng-content></ng-content>
  </mat-list-option>`,
})
export class MatListOptionWrapperComponent {}
