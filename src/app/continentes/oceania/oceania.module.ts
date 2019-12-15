import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OceaniaPageRoutingModule } from './oceania-routing.module';

import { OceaniaPage } from './oceania.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OceaniaPageRoutingModule
  ],
  declarations: [OceaniaPage]
})
export class OceaniaPageModule {}
