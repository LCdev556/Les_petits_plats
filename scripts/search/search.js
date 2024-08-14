import { counter } from "../Counter/Counter.js";

const searchInput = document.querySelector(".search-input")

const searchInputButton = document.querySelector(".search-button")

/**
 * Recherche un mot spécifique dans les descriptions des recettes et filtre les cartes des recettes en conséquence.
 * Les cartes correspondantes seront affichées et les autres seront masquées.
 *
 * @function searchInDescription
 */
export function searchInDescription() {
    const displayedRecipe = document.querySelectorAll(".description-text");
    const specificWord = searchInput.value.toLowerCase() + " ";
    const recipesCard = document.querySelectorAll(".card")
    
    
    // Parcours de toutes les descriptions de recettes
    for (let i = 0; i < displayedRecipe.length; i++) {
        const text = displayedRecipe[i].textContent.toLowerCase();
        const recipeCard = recipesCard[i];

        // Affichage ou masquage des cartes en fonction de la présence du mot spécifique
        if (text.includes(specificWord)) {
            recipeCard.classList.add('show');
            recipeCard.classList.remove('hiden');
        } else {
            recipeCard.classList.add('hiden');
            recipeCard.classList.remove('show');
        }
    }
}

/**
 * Recherche un mot spécifique dans les titres des recettes et filtre les cartes des recettes en conséquence.
 * Les cartes correspondantes seront affichées et les autres seront masquées.
 *
 * @function searchInTitle
 */
export function searchInTitle() {
    const displayedRecipe = document.querySelectorAll(".card-title");
    const specificWord = searchInput.value.toLowerCase() ;
    const recipesCard = document.querySelectorAll(".card")


    // Parcours de tous les titres de recettes
    for (let i = 0; i < displayedRecipe.length; i++) {
        const text = displayedRecipe[i].textContent.toLowerCase();
        const recipeCard = recipesCard[i];
       
        // Affichage ou masquage des cartes en fonction de la présence du mot spécifique
        if (text.includes(specificWord)) {
            recipeCard.classList.add('show');
            recipeCard.classList.remove('hiden');
        } else {
            recipeCard.classList.add('hiden');
            recipeCard.classList.remove('show');
        }
    }
}

/**
 * Recherche un mot spécifique dans les ingrédients des recettes et filtre les cartes des recettes en conséquence.
 * Les cartes correspondantes seront affichées et les autres seront masquées.
 *
 * @function searchInIngredient
 */
export function searchInIngredient() {
    const specificWord = searchInput.value.toLowerCase();
    const recipesCard = document.querySelectorAll(".card")
    
    // Parcours de tous les ingrédients des recettes
    for (let i = 0; i < recipesCard.length; i++) {
        const recipeCard = recipesCard[i];
        const ingredients = recipeCard.getAttribute('data-ingredient').toLowerCase();
        
        // Affichage ou masquage des cartes en fonction de la présence du mot spécifique
        if (ingredients.includes(specificWord)) {
            recipeCard.classList.add('show');
            recipeCard.classList.remove('hiden');
        } else {
            recipeCard.classList.add('hiden');
            recipeCard.classList.remove('show');
        }
    }
}


/**
 * Ajoute un événement sur le bouton de recherche pour lancer la recherche dans les descriptions,
 * les titres, et les ingrédients des recettes, et met à jour le compteur.
 * Calcule également le temps d'exécution de ces opérations.
 * 
 * @event
 */
searchInputButton.addEventListener("click", (event) => {
    const start = performance.now();

    searchInDescription();
    searchInTitle();
    searchInIngredient();
    counter();

    const end = performance.now();
    const executionTime = end - start;

    console.log(`Temps d'exécution: ${executionTime} ms`);
});


