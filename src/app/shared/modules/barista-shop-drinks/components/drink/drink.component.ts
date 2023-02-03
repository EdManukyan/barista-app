import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent {

  coffeeList$ = this.shopService.selectCoffeeList.pipe(
    map(data => data.filter(item => item.inStock))
  )

  constructor(
    private shopService: ShopService
  ) {
  }

}
