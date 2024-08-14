import { recipes } from "../recipe/import.js";
import { displayRecipeData } from "../recipe/display.js";
import { iniCounter } from "../Counter/Counter.js";



/**
 * Initialise l'affichage des données de recettes.
 * 
 * Cette fonction exécute l'affichage des recettes en utilisant la fonction `displayRecipeData`
 * avec les données importées depuis `../recipe/import.js`.
 * 
 * @async
 * @function init
 * @returns {Promise<void>} Une promesse qui est résolue une fois que les recettes sont affichées.
 */
async function init() {
     
    displayRecipeData(recipes)
    
} 

init() 

/**
 * Ajoute un événement pour initialiser le compteur lorsque le DOM est complètement chargé.
 * 
 * Cet écouteur d'événement utilise `DOMContentLoaded` pour s'assurer que le DOM est prêt avant
 * d'exécuter la fonction `iniCounter` pour initialiser le compteur de recettes affichées.
 */
document.addEventListener('DOMContentLoaded', function () {
    iniCounter();
});




