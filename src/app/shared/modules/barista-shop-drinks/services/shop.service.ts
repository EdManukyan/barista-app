import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, Observable, take } from 'rxjs';
import { selectCoffeeState } from '../../../../state/selectors/barista.selector';
import { COFFEE } from '../../../../state/actions';
import { CoffeeInterface } from '../../../../utils/interfaces/coffee.interface';

@Injectable({providedIn: 'root'})
export class  ShopService {

  constructor(
    private store: Store
  ) {
  }

  get selectCoffeeList(): Observable<CoffeeInterface[]> {
    const state = this.selectCoffeeState;
    state.pipe(take(1), filter(data => !data))
      .subscribe(() => this.readData());

    return state.pipe(filter(data => !!data));
  }

  get selectCoffeeState(): Observable<CoffeeInterface[]> {
    return this.store.pipe(select(selectCoffeeState));
  }

  readData(): void {
    return this.store.dispatch(COFFEE.READ())
  }

}
