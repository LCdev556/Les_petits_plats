import { recipes } from "../recipe/import.js";

const ingredientListe = document.querySelector('#optionsList1')

const filterSection = document.querySelector('.filter-section')

const searchInput1 = document.querySelector('#searchInput1')
const searchInput2 = document.querySelector('#searchInput2')
const searchInput3 = document.querySelector('#searchInput3')



const ingredientsArray = [];

// Extract ingredients from recipes
recipes.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => {
        const ingredientName = ingredient.ingredient.toLowerCase();
        if (!ingredientsArray.includes(ingredientName)) {
            ingredientsArray.push(ingredientName);
        }
    });
});
// Convert set to array and sort


export function ingredientFilterListeCreation(){
    ingredientsArray.forEach(element => {
        
            const ingredientListeElement = document.createElement('li')
            ingredientListeElement.textContent = element
            ingredientListeElement.className = ('ingredient-liste-element')
            ingredientListeElement.addEventListener('click', function() {
                addFilter(element);
            });
            ingredientListe.appendChild(ingredientListeElement)
    })
}

searchInput1.addEventListener("change", function (){

ingredientListe.innerHTML = ""


    ingredientsArray.forEach(element => {
        if(element.includes(searchInput1.value)){
            const ingredientListeElement = document.createElement('li')
            ingredientListeElement.textContent = element
            ingredientListeElement.className = ('ingredient-liste-element')
            ingredientListeElement.addEventListener('click', function() {
                addFilter(element);
            });
            ingredientListe.appendChild(ingredientListeElement)
            
            
        }
    })

});


function addFilter(selectedIngredient) {
    console.log("lol")
    const filterTag = document.createElement('div'); // Correction ici
    filterTag.className = "filter-tag";
    filterTag.textContent = selectedIngredient;
    filterSection.appendChild(filterTag); // Ajout du tag au body ou à un autre conteneur
    searchInIngredient(selectedIngredient)
}

function searchInIngredient(selectedIngredient) {
    const specificWord = selectedIngredient

    const recipesCard = document.querySelectorAll(".card")
const recipesCardArrayLength = recipesCard.length;

    for (let i = 0; i < recipesCardArrayLength; i++) {
        const recipeCard = recipesCard[i];
        const ingredients = recipeCard.getAttribute('data-ingredients').toLowerCase();

        if (ingredients.includes(specificWord)) {
            recipeCard.classList.add('show');
            recipeCard.classList.remove('hiden');
        } else {
            const noneClassName = `filter-${specificWord.replace(/\s+/g, '-').toLowerCase()}`;
            createCSSClass(noneClassName, 'display: none;');
            recipeCard.classList.add(/**'hiden'''*/'noneClassName');
            //recipeCard.classList.remove('show');

            
        }
    }
}
function createCSSClass(className, rules) {
    console.log("top")
                const style = document.createElement('style');
                style.type = 'text/css';
                style.innerHTML = `.${className} { ${rules} }`;
                document.getElementsByTagName('head')[0].appendChild(style);
            }
            
console.log(ingredientsArray)