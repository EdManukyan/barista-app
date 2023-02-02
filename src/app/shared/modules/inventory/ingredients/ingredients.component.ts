import { Component, OnInit } from '@angular/core';
import { filter } from "rxjs";
import { IngredientsInterface } from "../../../../utils/interfaces/ingredients.interface";
import { InventoryService } from "../services/inventory.service";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'quantity', 'price', 'action'];
  dataSource$ = this.inventoryService.selectInventoryState.pipe(filter(data => !!data));

  constructor(
    private inventoryService: InventoryService
  ) {
  }

  ngOnInit(): void {
    this.inventoryService.readData();
  }

  restock(id: number): void {
    this.inventoryService.restockIngredient(id);
  }
}
