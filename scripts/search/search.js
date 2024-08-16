
import { counter } from "../Counter/Counter.js"

/**
 * Sélectionne l'élément du champ de saisie pour la recherche de recettes.
 * @type {HTMLInputElement}
 */
const searchInput = document.querySelector(".search-input")

/**
 * Sélectionne le bouton de recherche.
 * @type {HTMLButtonElement}
 */
const searchInputButton = document.querySelector(".search-button")

/**
 * Filtre les cartes de recettes en fonction des critères de recherche et met à jour leur visibilité.
 * @param {Set<number>} visibleIndices - Ensemble des indices des recettes à afficher.
 */
export function updateRecipeVisibility(visibleIndices) {
    
    const recipesCard = document.querySelectorAll(".card");
    const recipesCardArray = Array.from(recipesCard);

    const selectedRecipes = recipesCardArray.filter((_, index) => visibleIndices.has(index));
    
    const nonSelectedRecipes = recipesCardArray.filter((_, index) => !visibleIndices.has(index));
    
    selectedRecipes.forEach(item => {
        item.classList.remove('hiden');
        item.classList.add('show');
    });

    nonSelectedRecipes.forEach(item => {
        
        item.classList.remove('show');
        item.classList.add('hiden');
    });

    
}

/**
 * Recherche des recettes dans les descriptions et retourne les indices des recettes sélectionnées.
 * @returns {Set<number>} - Ensemble des indices des recettes sélectionnées.
 */
export function searchInDescription() {
    
    const displayedRecipe = document.querySelectorAll(".description-text");
    console.log(displayedRecipe)
    const captionsText = Array.from(displayedRecipe).map(el => el.textContent.toLowerCase());
    console.log(captionsText)

    const specificWord = searchInput.value.toLowerCase();
    
    const filteredArray = captionsText.map((text, index) => ({
        index: index,
        value: text
    })).filter(item => item.value.includes(specificWord));

    return new Set(filteredArray.map(item => item.index));
}

/**
 * Recherche des recettes dans les titres et retourne les indices des recettes sélectionnées.
 * @returns {Set<number>} - Ensemble des indices des recettes sélectionnées.
 */
export function searchInTitle() {
    
    const displayedRecipe = document.querySelectorAll(".card-title");
    const captionsText = Array.from(displayedRecipe).map(el => el.textContent.toLowerCase());

    const specificWord = searchInput.value.toLowerCase();
    
    const filteredArray = captionsText.map((text, index) => ({
        index: index,
        value: text
    })).filter(item => item.value.includes(specificWord));

    return new Set(filteredArray.map(item => item.index));
}

/**
 * Recherche des recettes dans les ingrédients et retourne les indices des recettes sélectionnées.
 * @returns {Set<number>} - Ensemble des indices des recettes sélectionnées.
 */
export function searchInIngredient() {
    
    const ingredientsArray = Array.from(document.querySelectorAll(".card"))
        .map(card => card.getAttribute('data-ingredient') || '')
        .map(ingredient => ingredient.toLowerCase());

    const specificWord = searchInput.value.toLowerCase();
    
    const filteredArray = ingredientsArray.map((text, index) => ({
        index: index,
        value: text
    })).filter(item => item.value.includes(specificWord));

    return new Set(filteredArray.map(item => item.index));
}

/**
 * Ajoute un gestionnaire d'événements au bouton de recherche pour déclencher la recherche dans la description, le titre et les ingrédients.
 */
//export function initializeSearch() {
    
    searchInputButton.addEventListener("click", (event) => {
        const start = performance.now();

        const specificWord = searchInput.value.toLowerCase();

        // Obtenir les indices visibles par chaque critère
        const descriptionIndices = searchInDescription();
        const titleIndices = searchInTitle();
        const ingredientIndices = searchInIngredient();

        // Combiner tous les indices pour obtenir un ensemble final
        const combinedIndices = new Set([...descriptionIndices, ...titleIndices, ...ingredientIndices]);

        // Mettre à jour la visibilité des recettes en fonction des indices combinés
        updateRecipeVisibility(combinedIndices);

        counter();
        const errorMessage = document.querySelector(".search-error-message")
        if(counter() === 0){
            
            errorMessage.textContent = " Aucune recette ne contient <<" + specificWord + ">> vous pouvez chercher 'tarte aux pommes' ,  'poisson' ... "
            errorMessage.style.display = 'flex';
        }
        else{
            errorMessage.style.display = 'none';
        }

        const end = performance.now();
        const executionTime = end - start;

        console.log(`Temps d'exécution: ${executionTime} ms`);
    });
//}

