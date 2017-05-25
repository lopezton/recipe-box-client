import { Ingredient } from './ingredient';

export class Drink {
  id: number;
  name: string;
  imageUrl: string;
  ingredients: Ingredient[];
  description: string;
  
  constructor() {
    this.ingredients = new Array();
  }
}