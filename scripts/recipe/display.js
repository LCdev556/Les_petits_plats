import { recipeTemplate } from "../template/recipe-card-template.js";



export async function displayRecipeData(recipes){

    const recipesSection = document.querySelector('.recipe-section')

    recipes.forEach((recipe) => {
        const recipeCardModel = recipeTemplate(recipe);
        const recipeCardDOM = recipeCardModel.getRecipeCard();
       
        
        recipesSection.appendChild(recipeCardDOM);
    });
}