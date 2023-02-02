export interface CoffeeInterface {
  id?: number;
  name?: string;
  inStock?: boolean;
  ingredients?: {
      ingredient_id: number;
      quantity: number;
    }[]
}
