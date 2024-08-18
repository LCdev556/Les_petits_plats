
//import { recipes } from "../recipe/import.js";
//import { counter } from "../Counter/Counter.js";
//import { searchInDescription, searchInIngredient, searchInTitle, /**updateFilterArraysBasedOnVisibleCards*/ } from "../search/search.js";
/** 
// Récupération des champs d'entrée des listes de filtres
const searchInputs = {
    ingredient: document.querySelector('#searchInput1'),
    appliance: document.querySelector('#searchInput2'),
    ustensil: document.querySelector('#searchInput3')
};

// Récupération des éléments contenant les listes de filtres
const optionsLists = {
    ingredient: document.querySelector('#optionsList1'),
    appliance: document.querySelector('#optionsList2'),
    ustensil: document.querySelector('#optionsList3')
};

// Initialisation des tableaux contenant les filtres
let ingredientsArray = [];
let appliancesArray = [];
let ustensilsArray = [];

// Génération des filtres à partir des recettes
recipes.forEach(recipe => {
    // Ajout des ingrédients
    recipe.ingredients.forEach(ingredient => {
        const ingredientName = ingredient.ingredient.toLowerCase();
        if (!ingredientsArray.includes(ingredientName)) {
            ingredientsArray.push(ingredientName);
        }
    });

    // Ajout des appareils
    const applianceName = recipe.appliance.toLowerCase();
    if (!appliancesArray.includes(applianceName)) {
        appliancesArray.push(applianceName);
    }

    // Ajout des ustensiles
    recipe.ustensils.forEach(ustensil => {
        const ustensilName = ustensil.toLowerCase();
        if (!ustensilsArray.includes(ustensilName)) {
            ustensilsArray.push(ustensilName);
        }
    });
});

// Création des listes de filtres à partir des tableaux générés
createFilterList('ingredient', ingredientsArray);
createFilterList('appliance', appliancesArray);
createFilterList('ustensil', ustensilsArray);
*/
/**
 * Nettoie un texte pour qu'il soit utilisable comme identifiant CSS.
 * @param {string} text - Le texte à nettoyer.
 * @returns {string} - Le texte nettoyé.


function sanitizeId(text) {
    return text.replace(/[^\w-]/g, '').toLowerCase();
}
*/
/**
 * Crée la liste des filtres en fonction du type de filtre et du tableau des éléments de filtre.
 * @param {string} filterType - Le type de filtre (ingredient, appliance, ustensil).
 * @param {string[]} filterArray - Le tableau des éléments de filtre.

function createFilterList(filterType, filterArray) {
    const optionsList = optionsLists[filterType];
    optionsList.innerHTML = ""; // Vider la liste actuelle

    filterArray.forEach(element => {
        const filterListElement = document.createElement('li');
        filterListElement.textContent = element;
        filterListElement.className = 'ingredient-liste-element';
        let cleanElement = sanitizeId(element);
        filterListElement.setAttribute('id', cleanElement);

        filterListElement.addEventListener('click', () => {
            addFilter(filterType, element);
            searchInDescription();
            searchInTitle();
            searchInIngredient();
            counter();
            // Mise à jour des filtres
            updateFilterArraysBasedOnVisibleCards();
            filterListElement.style.display = "none";
        });

        optionsList.appendChild(filterListElement);
    });
}
*/ 
/**
 * Ajoute un filtre sélectionné à la liste des filtres actifs et met à jour les recettes affichées.
 * @param {string} filterType - Le type de filtre (ingredient, appliance, ustensil).
 * @param {string} selectedElement - L'élément de filtre sélectionné.
 
function addFilter(filterType, selectedElement) {
    const filterTag = document.createElement('div');
    const filterTagName = document.createElement('p');
    filterTagName.className = "filter-tag__name";
    filterTag.className = "filter-tag";
    filterTagName.textContent = selectedElement;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'x';
    removeBtn.addEventListener("click", () => {
        const recipesCard = document.querySelectorAll(".card");
        let cleanElement = sanitizeId(selectedElement);
        const elementListeOfFilterTag = document.querySelector(`#${cleanElement}`);

        if (elementListeOfFilterTag) {
            elementListeOfFilterTag.style.display = "flex";
        }

        filterTag.style.display = 'none';

        recipesCard.forEach(element => {
            const NameOfClass = `filter-${sanitizeId(selectedElement)}`;
            if (element.classList.contains(NameOfClass)) {
                element.classList.remove(NameOfClass);
                element.classList.add('show');
            }
        });

        searchInDescription();
        searchInTitle();
        searchInIngredient();
        counter();
        updateFilterArraysBasedOnVisibleCards(); // Mise à jour des filtres après suppression
    });

    filterTag.appendChild(filterTagName);
    filterTag.appendChild(removeBtn);

    const filterTagSection = document.querySelector(".filter-tag-section");
    filterTagSection.appendChild(filterTag);

    searchInRecipes(filterType, selectedElement);
}
*/
/**
 * Filtre les recettes affichées en fonction du type et de l'élément de filtre sélectionné.
 * @param {string} filterType - Le type de filtre (ingredient, appliance, ustensil).
 * @param {string} selectedElement - L'élément de filtre sélectionné.
 
function searchInRecipes(filterType, selectedElement) {
    const specificWord = selectedElement.toLowerCase();
    const recipesCard = document.querySelectorAll(".card");

    recipesCard.forEach(recipeCard => {
        const dataAttribute = `data-${filterType}`;
        const dataValue = recipeCard.getAttribute(dataAttribute);
        
        if (dataValue) {
            const items = dataValue.toLowerCase().split(',').map(item => item.trim());
            const matchFound = items.some(item => item === specificWord);

            if (matchFound) {
                recipeCard.classList.add('show');
                recipeCard.classList.remove('hiden');
            } else {
                const noneClassName = `filter-${sanitizeId(specificWord)}`;
                createCSSClass(noneClassName, 'display: none;');
                recipeCard.classList.add(noneClassName);
                recipeCard.classList.remove('show');
            }
        }
    });
}
*/
/**
 * Crée une nouvelle classe CSS avec les règles spécifiées.
 * @param {string} className - Le nom de la classe CSS.
 * @param {string} rules - Les règles CSS à appliquer.

function createCSSClass(className, rules) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `.${className} { ${rules} }`;
    document.getElementsByTagName('head')[0].appendChild(style);
}
 */
/**
 * Met à jour les listes de filtres en fonction des cartes actuellement affichées.
 * Cette fonction est appelée après une recherche.
 
export function updateFilterArraysBasedOnVisibleCards() {
    // Obtenez les filtres actifs depuis les tags de filtre
    const activeFilters = Array.from(document.querySelectorAll('.filter-tag__name')).map(tag => tag.textContent.toLowerCase());

    // Obtenez toutes les cartes visibles
    const visibleCards = document.querySelectorAll(".card.show");

    // Initialisez des ensembles pour les nouveaux filtres
    const newIngredientsSet = new Set();
    const newAppliancesSet = new Set();
    const newUstensilsSet = new Set();

    visibleCards.forEach(card => {
        // Récupération des ingrédients
        const ingredients = card.getAttribute('data-ingredient').split(',').map(ing => ing.trim().toLowerCase());
        ingredients.forEach(ingredient => {
            if (!activeFilters.includes(ingredient)) {
                newIngredientsSet.add(ingredient);
            }
        });

        // Récupération des appareils
        const appliance = card.getAttribute('data-appliance').toLowerCase();
        if (!activeFilters.includes(appliance)) {
            newAppliancesSet.add(appliance);
        }

        // Récupération des ustensiles
        const ustensils = card.getAttribute('data-ustensil').split(',').map(ust => ust.trim().toLowerCase());
        ustensils.forEach(ustensil => {
            if (!activeFilters.includes(ustensil)) {
                newUstensilsSet.add(ustensil);
            }
        });
    });

    // Convertir les ensembles en tableaux
    const newIngredientsArray = Array.from(newIngredientsSet);
    const newAppliancesArray = Array.from(newAppliancesSet);
    const newUstensilsArray = Array.from(newUstensilsSet);

    // Mise à jour des listes de filtres dans le DOM
    createFilterList('ingredient', newIngredientsArray);
    createFilterList('appliance', newAppliancesArray);
    createFilterList('ustensil', newUstensilsArray);
}

// Ajoute un écouteur d'événements sur chaque champ de recherche pour mettre à jour la liste des filtres.
Object.keys(searchInputs).forEach(filterType => {
    searchInputs[filterType].addEventListener('input', () => {
        const searchValue = searchInputs[filterType].value.toLowerCase();
        const filterArray = filterType === 'ingredient' ? ingredientsArray : filterType === 'appliance' ? appliancesArray : ustensilsArray;
        createFilterList(filterType, filterArray.filter(element => element.includes(searchValue)));
        counter();
    });
});
*/
///
///
///
///
///
import { recipes } from "../recipe/import.js";
import { counter } from "../Counter/Counter.js";
import { searchInDescription, searchInIngredient, searchInTitle, /**updateFilterArraysBasedOnVisibleCards*/ updateRecipeVisibility } from "../search/search.js";
/** */
// Récupération des champs d'entrée des listes de filtres
const searchInputs = {
    ingredient: document.querySelector('#searchInput1'),
    appliance: document.querySelector('#searchInput2'),
    ustensil: document.querySelector('#searchInput3')
};

// Récupération des éléments contenant les listes de filtres
const optionsLists = {
    ingredient: document.querySelector('#optionsList1'),
    appliance: document.querySelector('#optionsList2'),
    ustensil: document.querySelector('#optionsList3')
};

// Initialisation des tableaux contenant les filtres
let ingredientsArray = [];
let appliancesArray = [];
let ustensilsArray = [];

// Génération des filtres à partir des recettes
recipes.forEach(recipe => {
    // Ajout des ingrédients
    recipe.ingredients.forEach(ingredient => {
        const ingredientName = ingredient.ingredient.toLowerCase();
        if (!ingredientsArray.includes(ingredientName)) {
            ingredientsArray.push(ingredientName);
        }
    });

    // Ajout des appareils
    const applianceName = recipe.appliance.toLowerCase();
    if (!appliancesArray.includes(applianceName)) {
        appliancesArray.push(applianceName);
    }

    // Ajout des ustensiles
    recipe.ustensils.forEach(ustensil => {
        const ustensilName = ustensil.toLowerCase();
        if (!ustensilsArray.includes(ustensilName)) {
            ustensilsArray.push(ustensilName);
        }
    });
});

// Création des listes de filtres à partir des tableaux générés
createFilterList('ingredient', ingredientsArray);
createFilterList('appliance', appliancesArray);
createFilterList('ustensil', ustensilsArray);

/**
 * Nettoie un texte pour qu'il soit utilisable comme identifiant CSS.
 * @param {string} text - Le texte à nettoyer.
 * @returns {string} - Le texte nettoyé.
*/

function sanitizeId(text) {
    return text.replace(/[^\w-]/g, '').toLowerCase();
}

/**
 * Crée la liste des filtres en fonction du type de filtre et du tableau des éléments de filtre.
 * @param {string} filterType - Le type de filtre (ingredient, appliance, ustensil).
 * @param {string[]} filterArray - Le tableau des éléments de filtre.
*/
function createFilterList(filterType, filterArray) {
    const optionsList = optionsLists[filterType];
    optionsList.innerHTML = ""; // Vider la liste actuelle

    filterArray.forEach(element => {
        const filterListElement = document.createElement('li');
        filterListElement.textContent = element;
        filterListElement.className = 'ingredient-liste-element';
        let cleanElement = sanitizeId(element);
        filterListElement.setAttribute('id', cleanElement);

        filterListElement.addEventListener('click', () => {
            addFilter(filterType, element);
            searchInDescription();
            searchInTitle();
            searchInIngredient();
            counter();
            // Mise à jour des filtres
            updateFilterArraysBasedOnVisibleCards();
            filterListElement.style.display = "none";
        });

        optionsList.appendChild(filterListElement);
    });
}
 
/**
 * Ajoute un filtre sélectionné à la liste des filtres actifs et met à jour les recettes affichées.
 * @param {string} filterType - Le type de filtre (ingredient, appliance, ustensil).
 * @param {string} selectedElement - L'élément de filtre sélectionné.
*/ 
function addFilter(filterType, selectedElement) {
    const filterTag = document.createElement('div');
    const filterTagName = document.createElement('p');
    filterTagName.className = "filter-tag__name";
    filterTag.className = "filter-tag";
    filterTagName.textContent = selectedElement;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'x';
    removeBtn.addEventListener("click", () => {
        const recipesCard = document.querySelectorAll(".card");
        let cleanElement = sanitizeId(selectedElement);
        const elementListeOfFilterTag = document.querySelector(`#${cleanElement}`);

        if (elementListeOfFilterTag) {
            elementListeOfFilterTag.style.display = "flex";
        }

        filterTag.style.display = 'none';

        recipesCard.forEach(element => {
            const NameOfClass = `filter-${sanitizeId(selectedElement)}`;
            if (element.classList.contains(NameOfClass)) {
                element.classList.remove(NameOfClass);
                element.classList.add('show');
            }
        });

        // Vérifier si tous les filtres sont supprimés
        const remainingFilters = document.querySelectorAll('.filter-tag:not([style*="display: none"])');
        if (remainingFilters.length === 0) {
            console.log("lol")
            // Relancer la recherche principale
            searchInDescription();
            searchInTitle();
            searchInIngredient();
            const descriptionIndices = searchInDescription();
            const titleIndices = searchInTitle();
            const ingredientIndices = searchInIngredient();
            const combinedIndices = new Set([...descriptionIndices, ...titleIndices, ...ingredientIndices]);
            updateRecipeVisibility(combinedIndices);
        }

        searchInDescription();
            searchInTitle();
            searchInIngredient();
            const descriptionIndices = searchInDescription();
            const titleIndices = searchInTitle();
            const ingredientIndices = searchInIngredient();
            const combinedIndices = new Set([...descriptionIndices, ...titleIndices, ...ingredientIndices]);
            updateRecipeVisibility(combinedIndices);

        counter();
        updateFilterArraysBasedOnVisibleCards(); // Mise à jour des filtres après suppression
    });

    filterTag.appendChild(filterTagName);
    filterTag.appendChild(removeBtn);

    const filterTagSection = document.querySelector(".filter-tag-section");
    filterTagSection.appendChild(filterTag);

    searchInRecipes(filterType, selectedElement);
}

/**
 * Filtre les recettes affichées en fonction du type et de l'élément de filtre sélectionné.
 * @param {string} filterType - Le type de filtre (ingredient, appliance, ustensil).
 * @param {string} selectedElement - L'élément de filtre sélectionné.
*/ 
function searchInRecipes(filterType, selectedElement) {
    const specificWord = selectedElement.toLowerCase();
    const recipesCard = document.querySelectorAll(".card");

    recipesCard.forEach(recipeCard => {
        const dataAttribute = `data-${filterType}`;
        const dataValue = recipeCard.getAttribute(dataAttribute);
        
        if (dataValue) {
            const items = dataValue.toLowerCase().split(',').map(item => item.trim());
            const matchFound = items.some(item => item === specificWord);

            if (matchFound) {
                recipeCard.classList.add('show');
                recipeCard.classList.remove('hiden');
            } else {
                const noneClassName = `filter-${sanitizeId(specificWord)}`;
                createCSSClass(noneClassName, 'display: none;');
                recipeCard.classList.add(noneClassName);
                recipeCard.classList.remove('show');
            }
        }
    });
}

/**
 * Crée une nouvelle classe CSS avec les règles spécifiées.
 * @param {string} className - Le nom de la classe CSS.
 * @param {string} rules - Les règles CSS à appliquer.
*/
function createCSSClass(className, rules) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `.${className} { ${rules} }`;
    document.getElementsByTagName('head')[0].appendChild(style);
}
 
/**
 * Met à jour les listes de filtres en fonction des cartes actuellement affichées.
 * Cette fonction est appelée après une recherche.
*/ 
export function updateFilterArraysBasedOnVisibleCards() {
    // Obtenez les filtres actifs depuis les tags de filtre
    const activeFilters = Array.from(document.querySelectorAll('.filter-tag__name')).map(tag => tag.textContent.toLowerCase());

    // Obtenez toutes les cartes visibles
    const visibleCards = document.querySelectorAll(".card.show");

    // Initialisez des ensembles pour les nouveaux filtres
    const newIngredientsSet = new Set();
    const newAppliancesSet = new Set();
    const newUstensilsSet = new Set();

    visibleCards.forEach(card => {
        // Récupération des ingrédients
        const ingredients = card.getAttribute('data-ingredient').split(',').map(ing => ing.trim().toLowerCase());
        ingredients.forEach(ingredient => {
            if (!activeFilters.includes(ingredient)) {
                newIngredientsSet.add(ingredient);
            }
        });

        // Récupération des appareils
        const appliance = card.getAttribute('data-appliance').toLowerCase();
        if (!activeFilters.includes(appliance)) {
            newAppliancesSet.add(appliance);
        }

        // Récupération des ustensiles
        const ustensils = card.getAttribute('data-ustensil').split(',').map(ust => ust.trim().toLowerCase());
        ustensils.forEach(ustensil => {
            if (!activeFilters.includes(ustensil)) {
                newUstensilsSet.add(ustensil);
            }
        });
    });

    // Convertir les ensembles en tableaux
    const newIngredientsArray = Array.from(newIngredientsSet);
    const newAppliancesArray = Array.from(newAppliancesSet);
    const newUstensilsArray = Array.from(newUstensilsSet);

    // Mise à jour des listes de filtres dans le DOM
    createFilterList('ingredient', newIngredientsArray);
    createFilterList('appliance', newAppliancesArray);
    createFilterList('ustensil', newUstensilsArray);
}

// Ajoute un écouteur d'événements sur chaque champ de recherche pour mettre à jour la liste des filtres.
Object.keys(searchInputs).forEach(filterType => {
    searchInputs[filterType].addEventListener('input', () => {
        const searchValue = searchInputs[filterType].value.toLowerCase();
        const filterArray = filterType === 'ingredient' ? ingredientsArray : filterType === 'appliance' ? appliancesArray : ustensilsArray;
        createFilterList(filterType, filterArray.filter(element => element.includes(searchValue)));
        counter();
    });
});
