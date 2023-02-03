import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { take } from 'rxjs';
import { CoffeeInterface } from '../../../../../utils/interfaces/coffee.interface';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-stepper',
  templateUrl: './order-stepper.component.html',
  styleUrls: ['./order-stepper.component.scss']
})

export class OrderStepperComponent {

  @ViewChild('stepper') private myStepper: MatStepper;

  coffeesFormGroup = this.formBuilder.group({
    coffeeList: [void 0, Validators.required]
  });
  coffeeList$ = this.orderService.selectCoffeeList;
  isLinear = false;
  isLoading = false;
  orderCompleted = false;
  selectedCoffees: (CoffeeInterface & {price?: number})[];
  total = 0;

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    ) {
  }

  placeOrder () {

    this.isLoading = !this.isLoading;
    this.orderCompleted = !this.orderCompleted;
    this.orderService.placeOrder(this.selectedCoffees);

    // Manually adding a loader which mimics the order is in process
    setTimeout(() => {
      this.isLoading = !this.isLoading;
      this.orderCompleted = !this.orderCompleted;
      this.myStepper?.next();
    }, 3000);

  }

  // Preparing the order for the purchase
  handleOrder () {
    const data = this.coffeesFormGroup.value;
    const selectedCoffees = data?.coffeeList as CoffeeInterface[];

    if(selectedCoffees?.length) {
      this.defineOrderCoffees(selectedCoffees);
      this.myStepper?.next();
    }
  }

  // Getting ingredients for selected coffees and calculating the summary
  private defineOrderCoffees(coffeeList: CoffeeInterface[]): void {
    this.orderService.selectIngredients
      .pipe(take(1))
      .subscribe(ingredients => {
        this.total = 0;
        this.selectedCoffees = [];
        for (const coffee of coffeeList) {
          let itemTotal = 0
          for (const coffeeIngredient of coffee.ingredients) {

            const ingredient = ingredients.find(item => item.id === coffeeIngredient.ingredient_id);
            if (!ingredient) continue;
            itemTotal += ingredient.price * coffeeIngredient.quantity;

          }

          const dataSourceItem = {...coffee, price:  itemTotal};
          this.total += dataSourceItem.price;
          this.selectedCoffees.push(dataSourceItem);
        }
      })
  }
}
