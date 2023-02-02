import { createAction, props } from "@ngrx/store";
import { CoffeeInterface } from "../utils/interfaces/coffee.interface";
import { IngredientsInterface } from "../utils/interfaces/ingredients.interface";

export const INVENTORY = {
  READ: createAction('@INVENTORY/READ'),
  READ_SUCCESS: createAction('@INVENTORY/READ_SUCCESS', props<{payload: IngredientsInterface[]}>()),
  RESTOCK: createAction('@INVENTORY/RESTOCK', props<{payload: number}>()),
};

export const COFFEE = {
  READ: createAction('@COFFEE/READ'),
  READ_SUCCESS: createAction('@COFFEE/READ_SUCCESS', props<{payload: CoffeeInterface[]}>()),
  ORDER: createAction('@COFFEE/ORDER', props<{payload: CoffeeInterface[]}>())
};
