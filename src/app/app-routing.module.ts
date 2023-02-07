import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { BaristaShopComponent } from "./shared/modules/barista-shop/components/barista-shop/barista-shop.component";

const routes: Routes = [
  { path: 'home', component: BaristaShopComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
