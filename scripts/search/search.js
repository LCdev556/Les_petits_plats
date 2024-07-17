const searchInput = document.querySelector(".search-input")

const searchInputButton = document.querySelector(".search-button")

const recipesCard = document.querySelectorAll(".card")
const recipesCardArrayLength = recipesCard.length;

function searchInDescription() {
    const displayedRecipe = document.querySelectorAll(".description-text");
    const specificWord = searchInput.value.toLowerCase() + " ";

    console.log(displayedRecipe)
    // Parcours de toutes les descriptions
    for (let i = 0; i < displayedRecipe.length; i++) {
        const text = displayedRecipe[i].textContent.toLowerCase();
        const recipeCard = recipesCard[i];
        

        if (text.includes(specificWord)) {
            recipeCard.classList.add('show');
            recipeCard.classList.remove('hiden');
        } else {
            recipeCard.classList.add('hiden');
            recipeCard.classList.remove('show');
        }
    }
}

function searchInTitle() {
    const displayedRecipe = document.querySelectorAll(".card-title");
    const specificWord = searchInput.value.toLowerCase() + " ";

    // Parcours de tous les titres
    for (let i = 0; i < displayedRecipe.length; i++) {
        const text = displayedRecipe[i].textContent.toLowerCase();
        const recipeCard = recipesCard[i];

        if (text.includes(specificWord)) {
            recipeCard.classList.add('show');
            recipeCard.classList.remove('hiden');
        } else {
            recipeCard.classList.add('hiden');
            recipeCard.classList.remove('show');
        }
    }
}

function searchInIngredient() {
    const specificWord = searchInput.value.toLowerCase() + " ";

    for (let i = 0; i < recipesCardArrayLength; i++) {
        const recipeCard = recipesCard[i];
        const ingredients = recipeCard.getAttribute('data-ingredients').toLowerCase();

        if (ingredients.includes(specificWord)) {
            recipeCard.classList.add('show');
            recipeCard.classList.remove('hiden');
        } else {
            recipeCard.classList.add('hiden');
            recipeCard.classList.remove('show');
        }
    }
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
//test

