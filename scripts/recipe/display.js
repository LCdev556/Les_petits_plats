import { recipeTemplate } from "../template/recipe-card-template.js";
import { iniCounter } from "../Counter/Counter.js";


/**
 * Affiche les données des recettes sur la page.
 * 
 * Cette fonction génère et insère des cartes de recettes dans la section dédiée du DOM
 * pour chaque recette fournie dans le tableau `recipes`. Après avoir affiché toutes les
 * recettes, elle initialise le compteur en appelant la fonction `iniCounter`.
 * 
 * @async
 * @function displayRecipeData
 * @param {Array<Object>} recipes - Un tableau d'objets de recettes à afficher. Chaque objet
 * contient les données nécessaires pour créer une carte de recette.
 * @returns {Promise<void>} Une promesse qui est résolue une fois que toutes les recettes
 * sont affichées et que le compteur est initialisé.
 */
export async function displayRecipeData(recipes){

    const recipesSection = document.querySelector('.recipe-section')

    recipes.forEach((recipe) => {
        const recipeCardModel = recipeTemplate(recipe);
        const recipeCardDOM = recipeCardModel.getRecipeCard();
       
        
        recipesSection.appendChild(recipeCardDOM);
        
    });
    iniCounter();
}