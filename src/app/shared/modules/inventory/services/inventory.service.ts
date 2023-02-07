import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {selectInventoryState} from "../../../../state/selectors/barista.selector"
import { INVENTORY } from "../../../../state/actions"
import { IngredientsInterface } from "../../../../utils/interfaces/ingredients.interface";

@Injectable()
export class  InventoryService {

  constructor(
    private store: Store
  ) {
  }

  get selectInventoryState(): Observable<IngredientsInterface[] | undefined> {
    return this.store.pipe(select(selectInventoryState));
  }

  readData(): void {
    return this.store.dispatch(INVENTORY.READ())
  }

  restockIngredient(id: number): void {
    this.store.dispatch(INVENTORY.RESTOCK({payload: id}))
  }
 }
