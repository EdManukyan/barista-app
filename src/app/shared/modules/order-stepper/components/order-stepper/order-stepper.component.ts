import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { MatStepper } from "@angular/material/stepper";
import { take } from "rxjs";
import { CoffeeInterface } from "../../../../../utils/interfaces/coffee.interface";
import { OrderService } from "../../services/order.service";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-order-stepper',
  templateUrl: './order-stepper.component.html',
  styleUrls: ['./order-stepper.component.scss']
})

export class OrderStepperComponent {

  coffeesFormGroup = this._formBuilder.group({
    coffeeList: [void 0, Validators.required]
  });
  isLinear = false;
  isLoading = false;
  orderCompleted = false;
  total = 0;

  coffeeList$ = this.orderService.selectCoffeeList;
  selectedCoffees: (CoffeeInterface & {price?: number})[];

  constructor(
    private _formBuilder: FormBuilder,
    private orderService: OrderService,
    ) {
  }

  @ViewChild('stepper') private myStepper: MatStepper;

  placeOrder () {

    this.isLoading = !this.isLoading;
    this.orderCompleted = !this.orderCompleted;
    this.orderService.placeOrder(this.selectedCoffees);

    setTimeout(() => {
      this.isLoading = !this.isLoading;
      this.orderCompleted = !this.orderCompleted;
      this.myStepper?.next();
    }, 5000);

  }

  setOrder () {
    const data = this.coffeesFormGroup.value;
    const selectedCoffees = data?.coffeeList as CoffeeInterface[];
    if(selectedCoffees?.length) {
      this.defineOrderCoffees(selectedCoffees);
      this.myStepper?.next();
    }

  }

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
