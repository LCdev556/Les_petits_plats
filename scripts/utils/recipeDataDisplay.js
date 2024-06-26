import { recipeTemplate } from "../template/recipeCardTemplate.js";

const recipesSection = document.querySelector('recipe_section')

export async function displayRecipeData(recipes){
    recipes.forEach((recipe) => {
        const recipeCardModel = recipeTemplate(recipe);
        const recipeCardDOM = recipeCardModel.getRecipeCard()
        
        recipesSection.appendChild(recipeCardDOM);
    });
}