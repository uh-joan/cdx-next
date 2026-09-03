import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <button matButton="filled" (click)="openDialog()">Open dialog</button>

  @if (lastResult(); as result) {
    <p>Dialog result: {{ result }}</p>
  }
</div>`;

const htmlCode2 = `
<h2 mat-dialog-title>Install Angular
  <button matIconButton class="close-button" [mat-dialog-close]="true" aria-label="Close dialog">
    <mat-icon>close</mat-icon>
  </button>
</h2>
<mat-dialog-content class="mat-typography">
    <h3>Develop across all platforms</h3>
    <p>Learn one way to build applications with Angular and reuse your code and abilities to build
    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>

    <h3>Speed &amp; Performance</h3>
    <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web
    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge
    data requirements by building data models on RxJS, Immutable.js or another push-model.</p>

    <h3>Incredible tooling</h3>
    <p>Build features quickly with simple, declarative templates. Extend the template language with
    your own components and use a wide array of existing components. Get immediate Angular-specific
    help and feedback with nearly every IDE and editor. All this comes together so you can focus
    on building amazing apps rather than trying to make the code work.</p>

    <h3>Loved by millions</h3>
    <p>From prototype through global deployment, Angular delivers the productivity and scalable
    infrastructure that supports Google's largest applications.</p>

    <h3>What is Angular?</h3>

    <p>Angular is a platform that makes it easy to build applications with the web. Angular
    combines declarative templates, dependency injection, end to end tooling, and integrated
    best practices to solve development challenges. Angular empowers developers to build
    applications that live on the web, mobile, or the desktop</p>

    <h3>Architecture overview</h3>

    <p>Angular is a platform and framework for building client applications in HTML and TypeScript.
    Angular is itself written in TypeScript. It implements core and optional functionality as a
    set of TypeScript libraries that you import into your apps.</p>

    <p>The basic building blocks of an Angular application are NgModules, which provide a compilation
    context for components. NgModules collect related code into functional sets; an Angular app is
    defined by a set of NgModules. An app always has at least a root module that enables
    bootstrapping, and typically has many more feature modules.</p>

    <p>Components define views, which are sets of screen elements that Angular can choose among and
    modify according to your program logic and data. Every app has at least a root component.</p>

    <p>Components use services, which provide specific functionality not directly related to views.
    Service providers can be injected into components as dependencies, making your code modular,
    reusable, and efficient.</p>

    <p>Both components and services are simply classes, with decorators that mark their type and
    provide metadata that tells Angular how to use them.</p>

    <p>The metadata for a component class associates it with a template that defines a view. A
    template combines ordinary HTML with Angular directives and binding markup that allow Angular
    to modify the HTML before rendering it for display.</p>

    <p>The metadata for a service class provides the information Angular needs to make it available
    to components through Dependency Injection (DI).</p>

    <p>An app's components typically define many views, arranged hierarchically. Angular provides
    the Router service to help you define navigation paths among views. The router provides
    sophisticated in-browser navigational capabilities.</p>
</mat-dialog-content>
<mat-dialog-actions align="end">
    <button matButton mat-dialog-close>Cancel</button>
    <button matButton="filled" [mat-dialog-close]="true">Install</button>
</mat-dialog-actions>`;

const styleCode = `.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
}`;

const tsCode = `import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-dialog-content-example',
  templateUrl: './dialog-content-example.html',
  styleUrl: './dialog-content-example.scss',
  imports: [MatDialogModule, MatButton, MatIconButton, MatIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentExample {}

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.html',
  imports: [MatButton],
})
export class DialogExample {
  private readonly dialog = inject(MatDialog);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly lastResult = signal<string | undefined>(undefined);

  protected openDialog(): void {
    this.dialog
      .open(DialogContentExample)
      .afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => this.lastResult.set(String(result)));
  }
}`;

@Component({
  selector: 'app-content-example-dialog',
  template: htmlCode2,
  imports: [MatDialogModule, MatButton, MatIconButton, MatIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [styleCode],
})
class DialogContentExampleDialog {}

@Component({
  template: htmlCode,
  imports: [MatButton],
})
class SampleComponent {
  private readonly dialog = inject(MatDialog);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly lastResult = signal<string | undefined>(undefined);

  protected openDialog(): void {
    this.dialog
      .open(DialogContentExampleDialog)
      .afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => this.lastResult.set(String(result)));
  }
}

export const DialogComponent: InputViewerComponent = {
  exampleName: 'Dialog',
  dynamicComponent: SampleComponent,
  height: 60,
  hideCss: true,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
