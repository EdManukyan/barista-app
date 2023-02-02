import { Component } from '@angular/core';
import { Ingredients } from "../../../../../utils/interfaces/ingerdients";

const ingredientsData: Ingredients[] = [
  {name: 'Coffee', price: 0.75},
  {name: 'Espresso', price: 1.10},
  {name: 'Cocoa', price: 0.90},
  {name: 'Whipped Cream', price: 1.00},
];

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent {

  displayedColumns: string[] = ['name', 'price'];
  dataSource = ingredientsData;

}
