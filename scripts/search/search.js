import { counter } from "../Counter/Counter.js";

const searchInput = document.querySelector(".search-input");
const searchInputButton = document.querySelector(".search-button");

/**
 * Recherche un mot spécifique dans les descriptions des recettes et retourne les indices des cartes correspondantes.
 * @returns {Set<number>} - Ensemble des indices des cartes correspondantes.
 */
export function searchInDescription() {
    const displayedRecipe = document.querySelectorAll(".description-text");
    console.log(displayedRecipe)
    const specificWord = searchInput.value.toLowerCase() + " ";
    const indices = new Set();

    // Parcours de toutes les descriptions de recettes
    for (let i = 0; i < displayedRecipe.length; i++) {
        const text = displayedRecipe[i].textContent.toLowerCase();
        console.log(text)
        if (text.includes(specificWord)) {
            indices.add(i);
        }
    }

    return indices;
}

/**
 * Recherche un mot spécifique dans les titres des recettes et retourne les indices des cartes correspondantes.
 * @returns {Set<number>} - Ensemble des indices des cartes correspondantes.
 */
export function searchInTitle() {
    const displayedRecipe = document.querySelectorAll(".card-title");
    const specificWord = searchInput.value.toLowerCase();
    const indices = new Set();

    // Parcours de tous les titres de recettes
    for (let i = 0; i < displayedRecipe.length; i++) {
        const text = displayedRecipe[i].textContent.toLowerCase();
        if (text.includes(specificWord)) {
            indices.add(i);
        }
    }

    return indices;
}

/**
 * Recherche un mot spécifique dans les ingrédients des recettes et retourne les indices des cartes correspondantes.
 * @returns {Set<number>} - Ensemble des indices des cartes correspondantes.
 */
export function searchInIngredient() {
    const specificWord = searchInput.value.toLowerCase();
    const recipesCard = document.querySelectorAll(".card");
    const indices = new Set();

    // Parcours de tous les ingrédients des recettes
    for (let i = 0; i < recipesCard.length; i++) {
        const ingredients = recipesCard[i].getAttribute('data-ingredient').toLowerCase();
        if (ingredients.includes(specificWord)) {
            indices.add(i);
        }
    }

    return indices;
}

/**
 * Met à jour la visibilité des cartes de recettes en fonction des indices fournis.
 * @param {Set<number>} visibleIndices - Ensemble des indices des cartes à afficher.
 */
export function updateRecipeVisibility(visibleIndices) {
    const recipesCard = document.querySelectorAll(".card");

    // Parcours de toutes les cartes de recettes
    for (let i = 0; i < recipesCard.length; i++) {
        const recipeCard = recipesCard[i];

        if (visibleIndices.has(i)) {
            recipeCard.classList.add('show');
            recipeCard.classList.remove('hiden');
        } else {
            recipeCard.classList.add('hiden');
            recipeCard.classList.remove('show');
        }
    }
}

/**
 * Fonction appelée lors du clic sur le bouton de recherche.
 * Combine les indices des cartes correspondantes à tous les critères et met à jour leur visibilité.
 */
searchInputButton.addEventListener("click", (event) => {
    const start = performance.now();

    // Obtenir les indices visibles par chaque critère
    const descriptionIndices = searchInDescription();
    const titleIndices = searchInTitle();
    const ingredientIndices = searchInIngredient();

    // Combiner tous les indices pour obtenir un ensemble final
    const combinedIndices = new Set([...descriptionIndices, ...titleIndices, ...ingredientIndices]);

    // Mettre à jour la visibilité des recettes en fonction des indices combinés
    updateRecipeVisibility(combinedIndices);

    counter();

    const end = performance.now();
    const executionTime = end - start;

    console.log(`Temps d'exécution: ${executionTime} ms`);
});

