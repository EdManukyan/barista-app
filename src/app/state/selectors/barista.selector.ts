import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectState = createFeatureSelector<BaristaInterface>('barista');
