import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { filter, Observable, take } from "rxjs";
import { selectCoffeeState, selectInventoryState } from "../../../../state/selectors/barista.selector"
import { COFFEE } from "../../../../state/actions"
import { CoffeeInterface } from "../../../../utils/interfaces/coffee.interface";
import { IngredientsInterface } from "../../../../utils/interfaces/ingredients.interface";

@Injectable({providedIn: 'root'})
export class  OrderService {

  constructor(
    private store: Store
  ) {
  }

  get selectCoffeeList(): Observable<CoffeeInterface[]> {
    return this.selectCoffeeState.pipe(filter(data => !!data));
  }

  get selectCoffeeState(): Observable<CoffeeInterface[]> {
    return this.store.pipe(select(selectCoffeeState));
  }

  get selectIngredients(): Observable<IngredientsInterface[]> {
    return this.store.pipe(select(selectInventoryState), filter(data => !!data));
  }

  readData(): void {
    return this.store.dispatch(COFFEE.READ())
  }

  placeOrder(data: CoffeeInterface[]): void {
    this.store.dispatch(COFFEE.ORDER({payload: data}))
  }

}
