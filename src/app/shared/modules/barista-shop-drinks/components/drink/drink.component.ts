import { Component } from '@angular/core';
import { CoffeeList } from "../../../../../utils/interfaces/coffee-list";

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent {

  coffeeList: CoffeeList[] = [
    {
      name: 'Coffee',
      inStock: true
    },
    {
      name: 'Decaf Coffee',
      inStock: true
    },
    {
      name: 'Caffe Latte',
      inStock: true
    },
    {
      name: 'Caffe Americano',
      inStock: true
    },
    {
      name: 'Caffe Mocha',
      inStock: false
    },
    {
      name: 'Cappuccino',
      inStock: true
    }
  ]

}
