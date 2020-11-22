import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'schnitzel',
      imgUrl: 'https://photos.bigoven.com/recipe/hero/lowfat-vegetable-lasagna-1336994.jpg',
      ingredients: ['French Fries', 'Meet', 'salad']
    },
    {
      id: 'r2',
      title: 'sphageti',
      imgUrl: 'https://photos.bigoven.com/recipe/hero/lowfat-vegetable-lasagna-1336994.jpg',
      ingredients: ['sphageti', 'Meet', 'Tomatos']
    }
  ];
  constructor() { }
  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id == recipeId;
      })
    }
  }
  deleteRecipe(recipeId: string) {
    this.recipes=this.recipes.filter(recipe=>recipe.id!==recipeId);
  }
}
