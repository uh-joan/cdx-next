import { Component, Input } from '@angular/core';

@Component({
  template: `
    <mat-card>
      <ng-content></ng-content>
      <ng-content
        select="c-mat-card-footer"
        ngProjectAs="mat-card-footer"
      ></ng-content>
    </mat-card>
  `,
})
export class MatCardWrapperComponent {}

@Component({
  template: `
    <mat-card-header>
      <ng-content
        select="c-mat-card-avatar, img"
        ngProjectAs="[mat-card-avatar]"
      ></ng-content>
      <ng-content
        select="c-mat-card-title, c-mat-card-subtitle"
        ngProjectAs="mat-card-title, mat-card-subtitle"
      ></ng-content>
      <ng-content></ng-content>
    </mat-card-header>
  `,
})
export class MatCardHeaderComponent {}

@Component({
  template: `
    <mat-card-title>
      <ng-content></ng-content>
    </mat-card-title>
  `,
})
export class MatCardTitleComponent {}

@Component({
  template: `
    <mat-card-subtitle>
      <ng-content></ng-content>
    </mat-card-subtitle>
  `,
})
export class MatCardSubtitleComponent {}

@Component({
  template: `
    <mat-card-title-group>
      <ng-content
        select="c-mat-card-title, c-mat-card-subtitle, img"
        ngProjectAs="mat-card-title, mat-card-subtitle, img"
      ></ng-content>
      <ng-content></ng-content>
    </mat-card-title-group>
  `,
})
export class MatCardTitleGroupComponent {}

@Component({
  template: `
    <mat-card-content>
      <ng-content></ng-content>
    </mat-card-content>
  `,
})
export class MatCardContentComponent {}

@Component({
  template: `
    <mat-card-actions [align]="align">
      <ng-content></ng-content>
    </mat-card-actions>
  `,
})
export class MatCardActionsComponent {
  @Input()
  align: 'start' | 'end' = 'start';
}

@Component({
  template: `<img [src]="src" mat-card-image />`,
})
export class MatCardImageComponent {
  @Input()
  src?: string;
}

@Component({
  template: `<img [src]="src" mat-card-sm-image />`,
})
export class MatCardSmImageComponent {
  @Input()
  src?: string;
}

@Component({
  template: `<img [src]="src" mat-card-md-image />`,
})
export class MatCardMdImageComponent {
  @Input()
  src?: string;
}

@Component({
  template: `<img [src]="src" mat-card-lg-image />`,
})
export class MatCardLgImageComponent {
  @Input()
  src?: string;
}

@Component({
  template: `<img [src]="src" mat-card-xl-image />`,
})
export class MatCardXlImageComponent {
  @Input()
  src?: string;
}

@Component({
  template: `<img [src]="src" mat-card-avatar />`,
})
export class MatCardAvatarComponent {
  @Input()
  src?: string;
}

@Component({
  template: `
    <mat-card-footer>
      <ng-content></ng-content>
    </mat-card-footer>
  `,
})
export class MatCardFooterComponent {}
