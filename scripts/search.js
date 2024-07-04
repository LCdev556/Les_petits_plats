const searchInput = document.querySelector(".search-input")

const searchInputButton = document.querySelector(".search-button")

const recipesCard = document.querySelectorAll(".card")

const recipesCardArray = Array.from(recipesCard)


function searchInDescription(){


    //recuperation des description des carte de recette
    const displayedRecipe = document.querySelectorAll(".descriptionText")

    //transformation de la liste des description en tableau array
    const newArray = Array.from(displayedRecipe)
    console.log(newArray)

    //creation d'un nouveau tableau ne contenant  que le texte des description
    captionsText = newArray.map(function(newArray) {
        return newArray.textContent;
    })

    const lowerCaseTextArray = captionsText.map(text => text.toLowerCase());

    //creation d'un tableau contenent l'index des elements
    const arrayWithIndexes = lowerCaseTextArray.map((string, index) => ({
        index: index,
        value: string
    }));

    console.log(arrayWithIndexes)


    //recuperation de la valeur du champ d'entrée
    const specificWord = searchInput.value + " ";

    //filtrage du tableau selon la valeur du champ d'entrée
    const filteredArray = arrayWithIndexes.filter(item => item.value.includes(specificWord));
    console.log(filteredArray)

    //création d'un tableau contenant les index des elemant filtrés
    const originalIndexes = filteredArray.map(item => item.index);
    console.log(originalIndexes);

    //création d'un tableau contenant les recettes selectionnées
    const selectedRecipes = recipesCardArray.filter((_, index) => originalIndexes.includes(index));
    console.log(selectedRecipes)

    //création d'un tableau contenant les recettes non selectionées 
    const nonSelectedRecipes = recipesCardArray.filter((_, index) => !originalIndexes.includes(index));
    console.log(nonSelectedRecipes)


    //affichage et masquage des carte des recette
    nonSelectedRecipes.forEach(item => item.classList.add('hiden'));
    nonSelectedRecipes.forEach(item => item.classList.remove('show'));


    selectedRecipes.forEach(item => item.classList.add('show'));
    selectedRecipes.forEach(item => item.classList.remove('hiden'));
}



function searchInTitle(){


    //recuperation des description des carte de recette
    const displayedRecipe = document.querySelectorAll(".card-title")

    //transformation de la liste des description en tableau array
    const newArray = Array.from(displayedRecipe)
    console.log(newArray)

    //creation d'un nouveau tableau ne contenant  que le texte des description
    captionsText = newArray.map(function(newArray) {
        return newArray.textContent;
    })

    const lowerCaseTextArray = captionsText.map(text => text.toLowerCase());

    //creation d'un tableau contenent l'index des elements
    const arrayWithIndexes = lowerCaseTextArray.map((string, index) => ({
        index: index,
        value: string
    }));

    console.log(arrayWithIndexes)


    //recuperation de la valeur du champ d'entrée
    const specificWord = searchInput.value + " ";

    //filtrage du tableau selon la valeur du champ d'entrée
    const filteredArray = arrayWithIndexes.filter(item => item.value.includes(specificWord));
    console.log(filteredArray)

    //création d'un tableau contenant les index des elemant filtrés
    const originalIndexes = filteredArray.map(item => item.index);
    console.log(originalIndexes);

    //création d'un tableau contenant les recettes selectionnées
    const selectedRecipes = recipesCardArray.filter((_, index) => originalIndexes.includes(index));
    console.log(selectedRecipes)

    //création d'un tableau contenant les recettes non selectionées 
    const nonSelectedRecipes = recipesCardArray.filter((_, index) => !originalIndexes.includes(index));
    console.log(nonSelectedRecipes)


    //affichage et masquage des carte des recette
    nonSelectedRecipes.forEach(item => item.classList.add('hiden'));
    nonSelectedRecipes.forEach(item => item.classList.remove('show'));


    selectedRecipes.forEach(item => item.classList.add('show'));
    selectedRecipes.forEach(item => item.classList.remove('hiden'));
}

function searchInIngredient(){

    ingredientsArray = Array.from(recipesCard).map(card => card.getAttribute('data-ingredients'));
    console.log(ingredientsArray)

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

    console.log(arrayWithIndexes)


    //recuperation de la valeur du champ d'entrée
    const specificWord = searchInput.value + " ";

    //filtrage du tableau selon la valeur du champ d'entrée
    const filteredArray = arrayWithIndexes.filter(item => item.value.includes(specificWord));
    console.log(filteredArray)

    //création d'un tableau contenant les index des elemant filtrés
    const originalIndexes = filteredArray.map(item => item.index);
    console.log(originalIndexes);

    //création d'un tableau contenant les recettes selectionnées
    const selectedRecipes = recipesCardArray.filter((_, index) => originalIndexes.includes(index));
    console.log(selectedRecipes)

    //création d'un tableau contenant les recettes non selectionées 
    const nonSelectedRecipes = recipesCardArray.filter((_, index) => !originalIndexes.includes(index));
    console.log(nonSelectedRecipes)


    //affichage et masquage des carte des recette
    nonSelectedRecipes.forEach(item => item.classList.add('hiden'));
    nonSelectedRecipes.forEach(item => item.classList.remove('show'));


    selectedRecipes.forEach(item => item.classList.add('show'));
    selectedRecipes.forEach(item => item.classList.remove('hiden'));
}

function counter(){
    let counter = document.querySelector(".counter")

    const actualRecipeCard = document.querySelectorAll(' .show')
    console.log(actualRecipeCard)

    counter.textContent = actualRecipeCard.length
}

searchInputButton.addEventListener("click", (event) => {
  
    searchInDescription()
    searchInTitle()
    searchInIngredient()
    counter()
});

