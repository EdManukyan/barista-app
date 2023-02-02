import { Component } from '@angular/core';
import { Ingredients } from "../../../../utils/interfaces/ingerdients";

const ingredientsData: Ingredients[] = [
  {key: 'coffee', name: 'Coffee', quantity: 10, price: 0.75, action: 'Restock'},
  {key: 'decafCoffee', name: 'Decaf Coffee', quantity: 10, price: 0.75, action: 'Restock'},
  {key: 'sugar', name: 'Sugar', quantity: 10, price: 0.25, action: 'Restock'},
  {key: 'cream', name: 'Cream', quantity: 10, price: 0.25, action: 'Restock'},
  {key: 'steamedMilk', name: 'Steamed Milk', quantity: 10, price: 0.35, action: 'Restock'},
  {key: 'foamedMilk', name: 'Foamed Milk', quantity: 10, price: 0.35, action: 'Restock'},
  {key: 'espresso', name: 'Espresso', quantity: 10, price: 1.10, action: 'Restock'},
  {key: 'cocoa', name: 'Cocoa', quantity: 10, price: 0.90, action: 'Restock'},
  {key: 'whippedCream', name: 'Whipped Cream', quantity: 10, price: 1.00, action: 'Restock'},
];

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent {

  displayedColumns: string[] = ['name', 'quantity', 'price', 'action'];
  dataSource = ingredientsData;

}
