import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from "@angular/material/grid-list";
import { DrinkComponent } from './components/drink/drink.component';



@NgModule({
  declarations: [
    DrinkComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [DrinkComponent],
})
export class BaristaShopDrinksModule { }
