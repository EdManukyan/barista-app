import { CoffeeInterface } from "./coffee.interface";
import { IngredientsInterface } from "./ingredients.interface";

export interface BaristaStateInterface {
  inventory?: IngredientsInterface[],
  coffee?: CoffeeInterface[],
}
