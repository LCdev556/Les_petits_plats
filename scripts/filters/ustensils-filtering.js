import { recipes } from "../recipe/import.js";

const ustensilsListe = document.querySelector('#optionsList3')

const filterSection = document.querySelector('.filter-section')

const searchInput3 = document.querySelector('#searchInput3')

const ustensilsArray = [];

// Extract ingredients from recipes
recipes.forEach(recipe => {
    /** 
    const ustensilName = recipe.ustensils.toLowerCase();
        if (!ustensilsArray.includes(ustensilName)) {
            ustensilsArray.push(ustensilName);
        }
    */
    recipe.ustensils.forEach(ustensils => {
        const ingredientName = ustensils.toLowerCase();
        if (!ustensilsArray.includes(ingredientName)) {
            ustensilsArray.push(ingredientName);
        }
    });
});

export function ustensilsFilterListeCreation(){
    ustensilsArray.forEach(element => {
        
        const ustensilsListeElement = document.createElement('li')
        ustensilsListeElement.textContent = element
        ustensilsListeElement.className = ('ingredient-liste-element')
        ustensilsListeElement.addEventListener('click', function() {
            addFilter(element);
        });
        ustensilsListe.appendChild(ustensilsListeElement)
    })
}

searchInput3.addEventListener("change", function (){

    ustensilsListe.innerHTML = ""
    ustensilsArray.forEach(element => {
    if(element.includes(searchInput3.value)){
        const ustensilsListeElement = document.createElement('li')
        ustensilsListeElement.textContent = element
        ustensilsListeElement.className = ('ingredient-liste-element')
        ustensilsListeElement.addEventListener('click', function() {
            addFilter(element);
        });
        ustensilsListe.appendChild(ustensilsListeElement)
        
        
    }
})
});


function addFilter(selectedUstensil) {
    console.log("lol")
    const filterTag = document.createElement('div'); // Correction ici
    filterTag.className = "filter-tag";
    filterTag.textContent = selectedUstensil;
    filterSection.appendChild(filterTag); // Ajout du tag au body ou à un autre conteneur
    searchInAppliance(selectedUstensil)
}

function searchInAppliance(selectedUstensil) {
    const specificWord = selectedUstensil

    const recipesCard = document.querySelectorAll(".card")
const recipesCardArrayLength = recipesCard.length;

    for (let i = 0; i < recipesCardArrayLength; i++) {
        const recipeCard = recipesCard[i];
        const appliances = recipeCard.getAttribute('data-ustensils').toLowerCase();

        if (appliances.includes(specificWord)) {
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
            
console.log(ustensilsArray)