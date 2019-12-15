import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChinesePageRoutingModule } from './chinese-routing.module';

import { ChinesePage } from './chinese.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChinesePageRoutingModule
  ],
  declarations: [ChinesePage]
})
export class ChinesePageModule {}
