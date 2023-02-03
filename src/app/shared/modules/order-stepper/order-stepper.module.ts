import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { BaristaShopDrinksModule } from '../barista-shop-drinks/barista-shop-drinks.module';
import { OrderSummaryModule } from '../order-summary/order-summary.module';
import { OrderStepperComponent } from './components/order-stepper/order-stepper.component';



@NgModule({
  declarations: [OrderStepperComponent],
  imports: [
    CommonModule,
    BaristaShopDrinksModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    OrderSummaryModule,
    MatProgressSpinnerModule
  ],
  exports: [OrderStepperComponent]
})
export class OrderStepperModule { }
