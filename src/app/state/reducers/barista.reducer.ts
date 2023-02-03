import { Action, createReducer, on } from '@ngrx/store';
import { COFFEE, INVENTORY } from '../actions';
import { BaristaStateInterface } from '../../utils/interfaces/barista-state.interface';

const _reducer = createReducer(
  {} as BaristaStateInterface,
  on(INVENTORY.READ_SUCCESS, (state, {payload}) => {
    return {...state, inventory: payload};
  }),
  on(INVENTORY.RESTOCK, (state, {payload}) => {
    const inventory = state.inventory.map(item => {
      return item.id === payload ? {...item, quantity: 10} : item;
    });

    // define for each coffee if in stock
    const coffee = [...state.coffee];
    for (let coffeeItem of coffee) {
      let instock = true;
      for (const ingredients of coffeeItem.ingredients) {
        const inventoryItem = inventory.find(item => item.id === ingredients.ingredient_id);
        if (inventoryItem.quantity < ingredients.quantity) {
          instock = false;
          break;
        }
      }
      coffeeItem.inStock = instock;
    }

    return {...state, inventory, coffee};
  }),
  on(COFFEE.READ_SUCCESS, (state, {payload}) => {
    return {...state, coffee: payload.map(item => ({...item, inStock: true}))};
  }),
  on(COFFEE.ORDER, (state, {payload}) => {

    // Calculating the in stock for the orders
    const inventory = [...state.inventory];
    for (const coffeeItem of payload) {
      for (let ingredient of coffeeItem.ingredients) {
        const inventoryItem = inventory.find(item => item.id === ingredient.ingredient_id);
        inventoryItem.quantity -= ingredient.quantity;
      }
    }

    const coffee = [...state.coffee];
    for (let coffeeItem of coffee) {
      let instock = true;
      for (const ingredients of coffeeItem.ingredients) {
        const inventoryItem = inventory.find(item => item.id === ingredients.ingredient_id);
        if (inventoryItem.quantity < ingredients.quantity) {
          instock = false;
          break;
        }
      }
      coffeeItem.inStock = instock;
    }


    return {...state, inventory, coffee};
  }),

);

export function BaristaReducer(state: BaristaStateInterface, action: Action) {
  return _reducer(state, action);
}

