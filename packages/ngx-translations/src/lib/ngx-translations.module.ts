import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { NgxTranslationsService } from './ngx-translations.service';

@NgModule({
  imports: [CommonModule, TranslatePipe],
  providers: [NgxTranslationsService],
})
export class NgxTranslationsModule {}
