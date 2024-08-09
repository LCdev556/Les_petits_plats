
import { recipes } from "../recipe/import.js";
import { counter } from "../Counter/Counter.js";

// Get elements from the DOM
const filterSection = document.querySelector('.filter-section');

const searchInputs = {
    ingredient: document.querySelector('#searchInput1'),
    appliance: document.querySelector('#searchInput2'),
    ustensil: document.querySelector('#searchInput3')
};

const optionsLists = {
    ingredient: document.querySelector('#optionsList1'),
    appliance: document.querySelector('#optionsList2'),
    ustensil: document.querySelector('#optionsList3')
};

// Arrays to hold unique ingredients, appliances, and utensils
const ingredientsArray = [];
const appliancesArray = [];
const ustensilsArray = [];

// Extract data from recipes
recipes.forEach(recipe => {
    // Extract ingredients
    recipe.ingredients.forEach(ingredient => {
        const ingredientName = ingredient.ingredient.toLowerCase();
        if (!ingredientsArray.includes(ingredientName)) {
            ingredientsArray.push(ingredientName);
        }
    });

    // Extract appliances
    const applianceName = recipe.appliance.toLowerCase();
    if (!appliancesArray.includes(applianceName)) {
        appliancesArray.push(applianceName);
    }

    // Extract utensils
    recipe.ustensils.forEach(ustensil => {
        const ustensilName = ustensil.toLowerCase();
        if (!ustensilsArray.includes(ustensilName)) {
            ustensilsArray.push(ustensilName);
        }
    });
});

// Function to create filter list
function createFilterList(filterType, filterArray) {
    const optionsList = optionsLists[filterType];
    optionsList.innerHTML = ""; // Clear current list

    filterArray.forEach(element => {
        const filterListElement = document.createElement('li');
        filterListElement.textContent = element;
        filterListElement.className = 'ingredient-liste-element';
        let cleanElement = element.replace(/\s+/g, '').toLowerCase();
        filterListElement.setAttribute('id', cleanElement);
        filterListElement.addEventListener('click', () => {
            addFilter(filterType, element);
            counter();
            filterListElement.style.display = "none"
        });
        optionsList.appendChild(filterListElement);
    });
}

// Function to add filter tag
function addFilter(filterType, selectedElement) {
    console.log("hahah")
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
            
            if(element.classList.contains(NameOfClass)  /**`filter-${selectedElement.replace(/\s+/g, '-').toLowerCase()}` */){ 

                element.classList.remove (`filter-${selectedElement.replace(/\s+/g, '-').toLowerCase()}`)
                element.classList.add('show')
             } 
        });
        counter()
    })
    filterTag.appendChild(filterTagName)
    filterTag.appendChild(removeBtn)

    const filterTagSection = document.querySelector(".filter-tag-section")
    if(filterType === "ingredient"){
        //const ingredientFilterTagContainer = document.querySelector(/**".ingredient-filter-tag-container"*/".dropdown1")
        //ingredientFilterTagContainer.appendChild(filterTag)
        filterTagSection.appendChild(filterTag)
    }

    if(filterType === "appliance"){
        //const appliancesFilterTagContainer = document.querySelector(/**".appliances-filter-tag-container"*/".dropdown2")
        //appliancesFilterTagContainer.appendChild(filterTag)
        filterTagSection.appendChild(filterTag)
    }

    if(filterType === "ustensil"){
        //const ustencilsFilterTagContainer = document.querySelector(/**".ustencils-filter-tag-container"*/".dropdown3")
        //ustencilsFilterTagContainer.appendChild(filterTag)
        filterTagSection.appendChild(filterTag)
    }
    
    //filterSection.appendChild(filterTag);
    searchInRecipes(filterType, selectedElement);
}

// Function to search in recipes
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

// Function to create CSS class dynamically
function createCSSClass(className, rules) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `.${className} { ${rules} }`;
    document.getElementsByTagName('head')[0].appendChild(style);
}

// Event listeners for search inputs
Object.keys(searchInputs).forEach(filterType => {
    searchInputs[filterType].addEventListener('input', () => {
        const searchValue = searchInputs[filterType].value.toLowerCase();
        const filterArray = filterType === 'ingredient' ? ingredientsArray : filterType === 'appliance' ? appliancesArray : ustensilsArray;

        createFilterList(filterType, filterArray.filter(element => element.includes(searchValue)));
        counter()
    });
});

// Exported functions for initial creation of filter lists
export function ingredientFilterListeCreation() {
    createFilterList('ingredient', ingredientsArray);
}

export function applianceFilterListeCreation() {
    createFilterList('appliance', appliancesArray);
}

export function ustensilsFilterListeCreation() {
    createFilterList('ustensil', ustensilsArray);
}

// Initial creation of filter lists
ingredientFilterListeCreation();
applianceFilterListeCreation();
ustensilsFilterListeCreation();

