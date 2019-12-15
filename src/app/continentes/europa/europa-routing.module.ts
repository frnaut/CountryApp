import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EuropaPage } from './europa.page';

const routes: Routes = [
  {
    path: '',
    component: EuropaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EuropaPageRoutingModule {}
