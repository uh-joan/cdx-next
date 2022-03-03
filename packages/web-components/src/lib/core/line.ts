import { Component, NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';

@Component({
  template: `<div mat-line><ng-content></ng-content></div>`,
})
export class MatLineWrapperComponent {}

@NgModule({
  imports: [MatCommonModule],
  exports: [MatLineWrapperComponent, MatCommonModule],
  declarations: [MatLineWrapperComponent],
})
export class MatLineModule {}
