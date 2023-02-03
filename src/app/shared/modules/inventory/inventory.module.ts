import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { InventoryService } from './services/inventory.service';



@NgModule({
  declarations: [
    IngredientsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [IngredientsComponent],
  providers: [InventoryService]
})
export class InventoryModule { }
