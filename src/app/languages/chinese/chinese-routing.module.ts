import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChinesePage } from './chinese.page';

const routes: Routes = [
  {
    path: '',
    component: ChinesePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChinesePageRoutingModule {}
