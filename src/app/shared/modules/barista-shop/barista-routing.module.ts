import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaristaShopComponent } from './components/barista-shop';


const routes: Routes = [
  {
    path: '',
    component: BaristaShopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaristaRoutingModule { }
