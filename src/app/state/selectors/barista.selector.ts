import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BaristaStateInterface } from "../../utils/interfaces/barista-state.interface";

export const selectBaristaState = createFeatureSelector<BaristaStateInterface>('barista');

export const selectInventoryState = createSelector(
  selectBaristaState,
  (state: BaristaStateInterface) => state.inventory
);

export const selectCoffeeState = createSelector(
  selectBaristaState,
  (state: BaristaStateInterface) => state.coffee
);
