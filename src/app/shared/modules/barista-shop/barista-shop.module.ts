import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaristaRoutingModule } from "@shared/modules/barista-shop/barista-routing.module";
import { InventoryModule } from "@shared/modules/inventory";
import { OrderStepperModule } from "@shared/modules/order-stepper";
import { BaristaShopComponent } from "./components/barista-shop/barista-shop.component";


@NgModule({
  declarations: [BaristaShopComponent],
  imports: [
    BaristaRoutingModule,
    CommonModule,
    OrderStepperModule,
    InventoryModule
  ],
  exports: [BaristaShopComponent]
})
export class BaristaShopModule {
}
