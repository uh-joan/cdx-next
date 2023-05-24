import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';

@NgModule({
  imports: [HomeRoutingModule, TranslateModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
