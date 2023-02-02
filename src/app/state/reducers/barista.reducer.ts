import { Action, createReducer } from "@ngrx/store";
import { ACTIONS } from "../actions";

const _reducer = createReducer(
  {},
/*  on(ACTIONS.READ.REQUEST, (state) => {
    return {...state, batchIsLoading: true};
  }),*/

);

export function BaristaReducer(state: BaristaStateInterface, action: Action): BaristaStateInterface {
  return _reducer(state, action);
}

