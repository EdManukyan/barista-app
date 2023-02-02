import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { MatStepper } from "@angular/material/stepper";
import { CoffeeList } from "../../../../../utils/interfaces/coffee-list";

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
    coffeeList: ['', Validators.required]
  });
  isLinear = false;
  isLoading = false;
  orderCompleted = false;

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
  ];

  constructor(private _formBuilder: FormBuilder) {
  }

  @ViewChild('stepper') private myStepper: MatStepper | undefined;

  placeOrder () {

    this.isLoading = !this.isLoading;
    this.orderCompleted = !this.orderCompleted;

    setTimeout(() => {
      this.isLoading = !this.isLoading;
      this.orderCompleted = !this.orderCompleted;
      this.myStepper?.next();
    }, 5000);

  }

  setOrder (data: any) {
    console.log(data);
    if(data.coffeeList.length) {
      this.myStepper?.next();
    }

  }

}
