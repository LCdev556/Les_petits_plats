import { recipes } from "../recipe/import.js";
import { displayRecipeData } from "../recipe/display.js";
import { iniCounter } from "../Counter/Counter.js";




async function init() {
     
    displayRecipeData(recipes)
    
} 
init() 

document.addEventListener('DOMContentLoaded', function () {
    iniCounter();
});




