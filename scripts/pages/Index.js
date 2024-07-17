import { recipes } from "../recipe/import.js";
import { displayRecipeData } from "../recipe/display.js";





async function init() {
     
    displayRecipeData(recipes)
    
} 
init() 
