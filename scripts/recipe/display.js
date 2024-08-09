import { recipeTemplate } from "../template/recipe-card-template.js";
import { iniCounter } from "../Counter/Counter.js";



export async function displayRecipeData(recipes){

    const recipesSection = document.querySelector('.recipe-section')

    recipes.forEach((recipe) => {
        const recipeCardModel = recipeTemplate(recipe);
        const recipeCardDOM = recipeCardModel.getRecipeCard();
       
        
        recipesSection.appendChild(recipeCardDOM);
        
    });
    iniCounter();
}