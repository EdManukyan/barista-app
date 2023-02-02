import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CoffeeInterface } from "../../utils/interfaces/coffee.interface";
import { IngredientsInterface } from "../../utils/interfaces/ingredients.interface";
import { COFFEE, INVENTORY } from "../actions";

@Injectable()
export class BaristaEffects {

  readInventory$ = createEffect(() => this.actions.pipe(
    ofType(INVENTORY.READ),
    switchMap(() =>
      {
        return this.http.get('/assets/data/inventory.json')
          .pipe(
            map((data: {inventory: IngredientsInterface[]}) => INVENTORY.READ_SUCCESS({payload: data.inventory})),
            catchError((error) => {
              // error case will be handled in the future.
              return of(null)
            })
          )
      }
    )
  ), { useEffectsErrorHandler: false });

  readCoffee$ = createEffect(() => this.actions.pipe(
    ofType(COFFEE.READ),
    switchMap(() =>
      {
        return this.http.get('/assets/data/coffee.json')
          .pipe(
            map((data: {coffee: CoffeeInterface[]}) => COFFEE.READ_SUCCESS({payload: data.coffee})),
            catchError((error) => {
              // error case will be handled in the future.
              return of(null)
            })
          )
      }
    )
  ), { useEffectsErrorHandler: false });

  constructor(
    private http: HttpClient,
    private actions: Actions,
  ) {

  }
}
