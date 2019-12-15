import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpanishPageRoutingModule } from './spanish-routing.module';

import { SpanishPage } from './spanish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpanishPageRoutingModule
  ],
  declarations: [SpanishPage]
})
export class SpanishPageModule {}
