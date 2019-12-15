import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EuropaPageRoutingModule } from './europa-routing.module';

import { EuropaPage } from './europa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EuropaPageRoutingModule
  ],
  declarations: [EuropaPage]
})
export class EuropaPageModule {}
