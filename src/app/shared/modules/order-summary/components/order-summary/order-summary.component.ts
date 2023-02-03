import { Component, Input } from '@angular/core';
import { CoffeeInterface } from '../../../../../utils/interfaces/coffee.interface';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent {

  @Input()  dataSource: (CoffeeInterface & {price?: number})[];

  displayedColumns: string[] = ['name', 'price'];


}
