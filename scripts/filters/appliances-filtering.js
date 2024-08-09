import { recipes } from "../recipe/import.js";

const applianceListe = document.querySelector('#optionsList2')

const filterSection = document.querySelector('.filter-section')

const searchInput2 = document.querySelector('#searchInput2')

const appliancesArray = [];

// Extract ingredients from recipes
recipes.forEach(recipe => {
    const applianceName = recipe.appliance.toLowerCase();
        if (!appliancesArray.includes(applianceName)) {
            appliancesArray.push(applianceName);
        }
});

export function applianceFilterListeCreation(){
    appliancesArray.forEach(element => {
        
        const applianceListeElement = document.createElement('li')
        applianceListeElement.textContent = element
        applianceListeElement.className = ('ingredient-liste-element')
        applianceListeElement.addEventListener('click', function() {
            addFilter(element);
        });
        applianceListe.appendChild(applianceListeElement)
    })
}

searchInput2.addEventListener("change", function (){

applianceListe.innerHTML = ""
appliancesArray.forEach(element => {
    if(element.includes(searchInput2.value)){
        const applianceListeElement = document.createElement('li')
        applianceListeElement.textContent = element
        applianceListeElement.className = ('ingredient-liste-element')
        applianceListeElement.addEventListener('click', function() {
            addFilter(element);
        });
        applianceListe.appendChild(applianceListeElement)
        
        
    }
})
});


function addFilter(selectedAppliance) {
    console.log("lol")
    const filterTag = document.createElement('div'); // Correction ici
    filterTag.className = "filter-tag";
    filterTag.textContent = selectedAppliance;
    filterSection.appendChild(filterTag); // Ajout du tag au body ou à un autre conteneur
    searchInAppliance(selectedAppliance)
}

function searchInAppliance(selectedappliance) {
    const specificWord = selectedappliance

    const recipesCard = document.querySelectorAll(".card")
const recipesCardArrayLength = recipesCard.length;

    for (let i = 0; i < recipesCardArrayLength; i++) {
        const recipeCard = recipesCard[i];
        const appliances = recipeCard.getAttribute('data-appliance').toLowerCase();

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
            
console.log(appliancesArray)