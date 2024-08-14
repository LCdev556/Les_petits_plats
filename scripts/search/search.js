import {Counter} from "../Counter/Counter.js"

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
 * Sélectionne toutes les cartes de recettes et les transforme en tableau.
 * @type {HTMLElement[]}
 */
const recipesCard = document.querySelectorAll(".card")
const recipesCardArray = Array.from(recipesCard)

/**
 * Recherche des recettes dans les descriptions et affiche les résultats.
 */
function searchInDescription(){


    //recuperation des description des carte de recette
    const displayedRecipe = document.querySelectorAll(".descriptionText")

    //transformation de la liste des description en tableau array
    const newArray = Array.from(displayedRecipe)
    
    //creation d'un nouveau tableau ne contenant  que le texte des description
    const captionsText = newArray.map(function(newArray) {
        return newArray.textContent;
    })

    // Conversion des textes en minuscules
    const lowerCaseTextArray = captionsText.map(text => text.toLowerCase());

    //creation d'un tableau contenent l'index des elements
    const arrayWithIndexes = lowerCaseTextArray.map((string, index) => ({
        index: index,
        value: string
    }));

    //recuperation de la valeur du champ d'entrée
    const specificWord = searchInput.value;

    //filtrage du tableau selon la valeur du champ d'entrée
    const filteredArray = arrayWithIndexes.filter(item => item.value.includes(specificWord));
    
    //création d'un tableau contenant les index des elemant filtrés
    const originalIndexes = filteredArray.map(item => item.index);
    
    //création d'un tableau contenant les recettes selectionnées
    const selectedRecipes = recipesCardArray.filter((_, index) => originalIndexes.includes(index));
    
    //création d'un tableau contenant les recettes non selectionées 
    const nonSelectedRecipes = recipesCardArray.filter((_, index) => !originalIndexes.includes(index));
    
    //affichage et masquage des carte des recette
    nonSelectedRecipes.forEach(item => item.classList.add('hiden'));
    nonSelectedRecipes.forEach(item => item.classList.remove('show'));


    selectedRecipes.forEach(item => item.classList.add('show'));
    selectedRecipes.forEach(item => item.classList.remove('hiden'));
}


/**
 * Recherche des recettes dans les titres et affiche les résultats.
 */
function searchInTitle(){


    //recuperation des description des carte de recette
    const displayedRecipe = document.querySelectorAll(".card-title")

    //transformation de la liste des description en tableau array
    const newArray = Array.from(displayedRecipe)
    
    //creation d'un nouveau tableau ne contenant  que le texte des description
    const captionsText = newArray.map(function(newArray) {
        return newArray.textContent;
    })

    const lowerCaseTextArray = captionsText.map(text => text.toLowerCase());

    //creation d'un tableau contenent l'index des elements
    const arrayWithIndexes = lowerCaseTextArray.map((string, index) => ({
        index: index,
        value: string
    }));

    //recuperation de la valeur du champ d'entrée
    const specificWord = searchInput.value;

    //filtrage du tableau selon la valeur du champ d'entrée
    const filteredArray = arrayWithIndexes.filter(item => item.value.includes(specificWord));
    
    //création d'un tableau contenant les index des elemant filtrés
    const originalIndexes = filteredArray.map(item => item.index);
    
    //création d'un tableau contenant les recettes selectionnées
    const selectedRecipes = recipesCardArray.filter((_, index) => originalIndexes.includes(index));
    
    //création d'un tableau contenant les recettes non selectionées 
    const nonSelectedRecipes = recipesCardArray.filter((_, index) => !originalIndexes.includes(index));
    
    //affichage et masquage des carte des recette
    nonSelectedRecipes.forEach(item => item.classList.add('hiden'));
    nonSelectedRecipes.forEach(item => item.classList.remove('show'));


    selectedRecipes.forEach(item => item.classList.add('show'));
    selectedRecipes.forEach(item => item.classList.remove('hiden'));
}

/**
 * Recherche des recettes dans les ingrédients et affiche les résultats.
 */
function searchInIngredient(){

    const ingredientsArray = Array.from(recipesCard).map(card => card.getAttribute('data-ingredients'));
    

    //transformation de la liste des description en tableau array
    //const newArray = Array.from(displayedRecipe)
    //console.log(newArray)

    //creation d'un nouveau tableau ne contenant  que le texte des description
    //captionsText = newArray.map(function(newArray) {
    //    return newArray.textContent;
    //})

    const lowerCaseTextArray = ingredientsArray.map(text => text.toLowerCase());

    //creation d'un tableau contenent l'index des elements
    const arrayWithIndexes = lowerCaseTextArray.map((string, index) => ({
        index: index,
        value: string
    }));

    
    //recuperation de la valeur du champ d'entrée
    const specificWord = searchInput.value;

    //filtrage du tableau selon la valeur du champ d'entrée
    const filteredArray = arrayWithIndexes.filter(item => item.value.includes(specificWord));
    
    //création d'un tableau contenant les index des elemant filtrés
    const originalIndexes = filteredArray.map(item => item.index);
    
    //création d'un tableau contenant les recettes selectionnées
    const selectedRecipes = recipesCardArray.filter((_, index) => originalIndexes.includes(index));

    //création d'un tableau contenant les recettes non selectionées 
    const nonSelectedRecipes = recipesCardArray.filter((_, index) => !originalIndexes.includes(index));
    
    //affichage et masquage des carte des recette
    nonSelectedRecipes.forEach(item => item.classList.add('hiden'));
    nonSelectedRecipes.forEach(item => item.classList.remove('show'));


    selectedRecipes.forEach(item => item.classList.add('show'));
    selectedRecipes.forEach(item => item.classList.remove('hiden'));
}

/**
 * Ajoute un gestionnaire d'événements au bouton de recherche pour déclencher la recherche dans la description, le titre et les ingrédients.
 */
searchInputButton.addEventListener("click", (event) => {
  
    searchInDescription()
    searchInTitle()
    searchInIngredient()
    Counter()
});

