import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from "@angular/material/table";
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';



@NgModule({
  declarations: [
    OrderSummaryComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [OrderSummaryComponent]
})
export class OrderSummaryModule { }
