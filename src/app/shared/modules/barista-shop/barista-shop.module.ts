import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryModule } from "../inventory/inventory.module";
import { OrderStepperModule } from "../order-stepper/order-stepper.module";
import { BaristaShopComponent } from "./components/barista-shop/barista-shop.component";



@NgModule({
  declarations: [BaristaShopComponent],
  imports: [
    CommonModule,
    OrderStepperModule,
    InventoryModule
  ],
  exports: [BaristaShopComponent]
})
export class BaristaShopModule { }
