import { recipes } from "../utils/recipeDataImport.js";
import { displayRecipeData } from "../utils/recipeDataDisplay.js";

const recipesSection = document.querySelector('recipe_section')



async function init() {
     
    displayRecipeData(recipes)
    
}
init()