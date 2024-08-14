import { recipes } from "../recipe/import.js";
import { counter } from "../Counter/Counter.js";
import { searchInDescription, searchInIngredient, searchInTitle } from "../search/search.js";


//Recuperation des champs d'entrée des liste de filtre
const searchInputs = {
    ingredient: document.querySelector('#searchInput1'),
    appliance: document.querySelector('#searchInput2'),
    ustensil: document.querySelector('#searchInput3')
};

//Recuperation des elements contenants la liste de filtres
const optionsLists = {
    ingredient: document.querySelector('#optionsList1'),
    appliance: document.querySelector('#optionsList2'),
    ustensil: document.querySelector('#optionsList3')
};

//Initialisation des tableaux contenant les filtres
const ingredientsArray = [];
const appliancesArray = [];
const ustensilsArray = [];

//Ajout des different elements au tableau de filtre correspondant
recipes.forEach(recipe => {
    
    recipe.ingredients.forEach(ingredient => {
        const ingredientName = ingredient.ingredient.toLowerCase();
        if (!ingredientsArray.includes(ingredientName)) {
            ingredientsArray.push(ingredientName);
        }
    });

    
    const applianceName = recipe.appliance.toLowerCase();
    if (!appliancesArray.includes(applianceName)) {
        appliancesArray.push(applianceName);
    }

    
    recipe.ustensils.forEach(ustensil => {
        const ustensilName = ustensil.toLowerCase();
        if (!ustensilsArray.includes(ustensilName)) {
            ustensilsArray.push(ustensilName);
        }
    });
});

/**
 * Crée la liste des filtres en fonction du type de filtre et du tableau des éléments de filtre.
 * @param {string} filterType - Le type de filtre (ingredient, appliance, ustensil).
 * @param {string[]} filterArray - Le tableau des éléments de filtre.
 */
function createFilterList(filterType, filterArray) {
    const optionsList = optionsLists[filterType];
    optionsList.innerHTML = ""; 

    filterArray.forEach(element => {
        const filterListElement = document.createElement('li');
        filterListElement.textContent = element;
        filterListElement.className = 'ingredient-liste-element';
        let cleanElement = element.replace(/\s+/g, '').toLowerCase();
        filterListElement.setAttribute('id', cleanElement);
        filterListElement.addEventListener('click', () => {
            addFilter(filterType, element);
            searchInDescription();
            searchInTitle();
            searchInIngredient();
            counter();
            filterListElement.style.display = "none"
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
    const filterTagName = document.createElement('p')
    filterTagName.className = "filter-tag__name"
    filterTag.className = "filter-tag";
    filterTagName.textContent = selectedElement ;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'x';
    removeBtn.addEventListener("click", () =>{
        const recipesCard = document.querySelectorAll(".card");
        
        let cleanElement = selectedElement.replace(/\s+/g, '').toLowerCase();
        const elementListeOfFilterTag = document.querySelector(`#${cleanElement}`)
        elementListeOfFilterTag.style.display = "flex"
        filterTag.style.display = 'none'

        recipesCard.forEach(element => {
           
            const NameOfClass = `filter-${selectedElement.replace(/\s+/g, '-').toLowerCase()}`
            
            if(element.classList.contains(NameOfClass)  ){ 

                element.classList.remove (`filter-${selectedElement.replace(/\s+/g, '-').toLowerCase()}`)
                element.classList.add('show')
             } 
        });
        searchInDescription();
        searchInTitle();
        searchInIngredient();
        counter()
    })
    filterTag.appendChild(filterTagName)
    filterTag.appendChild(removeBtn)

    const filterTagSection = document.querySelector(".filter-tag-section")

    filterTagSection.appendChild(filterTag)
    
    
    searchInRecipes(filterType, selectedElement);
}

/**
 * Filtre les recettes affichées en fonction du type et de l'élément de filtre sélectionné.
 * @param {string} filterType - Le type de filtre (ingredient, appliance, ustensil).
 * @param {string} selectedElement - L'élément de filtre sélectionné.
 */
function searchInRecipes(filterType, selectedElement) {
    console.log(filterType)
    const specificWord = selectedElement.toLowerCase();
    console.log(specificWord)
    const recipesCard = document.querySelectorAll(".card");

    recipesCard.forEach(recipeCard => {
        const dataAttribute = `data-${filterType}`;
        console.log(dataAttribute)
        
        const dataValue = recipeCard.getAttribute(dataAttribute);
        

        if (dataValue && dataValue.toLowerCase().includes(specificWord)) {
            recipeCard.classList.add('show');
            recipeCard.classList.remove('hiden');
        } else {
            const noneClassName = `filter-${specificWord.replace(/\s+/g, '-').toLowerCase()}`;
            createCSSClass(noneClassName, 'display: none;');
            recipeCard.classList.add(noneClassName);
            recipeCard.classList.remove('show');
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

// Ajoute un écouteur d'événements sur chaque champ de recherche pour mettre à jour la liste des filtres.
Object.keys(searchInputs).forEach(filterType => {
    searchInputs[filterType].addEventListener('input', () => {
        const searchValue = searchInputs[filterType].value.toLowerCase();
        const filterArray = filterType === 'ingredient' ? ingredientsArray : filterType === 'appliance' ? appliancesArray : ustensilsArray;

        createFilterList(filterType, filterArray.filter(element => element.includes(searchValue)));
        counter()
    });
});

/**
 * Initialise la liste des filtres pour les ingrédients.
 */
export function ingredientFilterListeCreation() {
    createFilterList('ingredient', ingredientsArray);
}

/**
 * Initialise la liste des filtres pour les appareils.
 */
export function applianceFilterListeCreation() {
    createFilterList('appliance', appliancesArray);
}

/**
 * Initialise la liste des filtres pour les ustensiles.
 */
export function ustensilsFilterListeCreation() {
    createFilterList('ustensil', ustensilsArray);
}

// Initialisation des listes de filtres
ingredientFilterListeCreation();
applianceFilterListeCreation();
ustensilsFilterListeCreation();

