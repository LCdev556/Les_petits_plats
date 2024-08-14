/**
 * Génère un modèle de carte de recette (recipe card) à partir des données d'une recette.
 * 
 * @param {Object} recipe - L'objet représentant la recette.
 * @param {number} recipe.id - L'identifiant unique de la recette.
 * @param {string} recipe.name - Le nom de la recette.
 * @param {string} recipe.image - Le nom de l'image associée à la recette.
 * @param {Array<Object>} recipe.ingredients - La liste des ingrédients de la recette.
 * @param {string} recipe.ingredients[].ingredient - Le nom de l'ingrédient.
 * @param {number} [recipe.ingredients[].quantity] - La quantité de l'ingrédient (facultatif).
 * @param {string} [recipe.ingredients[].unit] - L'unité de mesure de la quantité (facultatif).
 * @param {string} recipe.description - La description de la recette.
 * @param {Array<string>} recipe.ustensils - La liste des ustensiles nécessaires pour la recette.
 * @param {number} recipe.time - Le temps de préparation en minutes.
 * @param {string} recipe.appliance - L'appareil utilisé pour préparer la recette.
 * 
 * @returns {Object} Un objet contenant la méthode `getRecipeCard` pour obtenir l'élément DOM représentant la carte de la recette.
 */
export function recipeTemplate(recipe){

    const {id, name, image, ingredients, description, ustensils, time, appliance } = recipe;

    const picture = `assets/picture/${image}`;

    /**
     * Crée et retourne un élément DOM représentant une carte de recette.
     * 
     * @returns {HTMLElement} L'élément article représentant la carte de recette.
     */
    function getRecipeCard() {

        const card = document.createElement ('article');
        card.className = "card"
        card.setAttribute('data-id', id);

        const ingredientsString = ingredients.map(item => item.ingredient).join(' , ');
        card.setAttribute('data-ingredient', ingredientsString);
        
        const ustensilsString = ustensils.map(u => u.toLowerCase()).join(' , ');
        card.setAttribute('data-ustensil', ustensilsString);

        card.setAttribute('data-appliance', appliance)

        const cardPicture = document.createElement('img');
        cardPicture.setAttribute("src", picture);
        cardPicture.className = "card-img-top"

        const cardContent = document.createElement('div')
        cardContent.className = "card-body"

        const recipeTitle = document.createElement('h2')
        recipeTitle.textContent = name
        recipeTitle.className = "card-title font"

        const descriptionContainer = document.createElement('div')
        descriptionContainer.className = ("description")

        const descriptionTitle = document.createElement('h3')
        descriptionTitle.textContent = "Recette"
        descriptionTitle.className = "description-title"

        const descriptionText = document.createElement('p')
        descriptionText.className = "description-text"
        descriptionText.textContent = description
        

        const ingredientContainer = document.createElement('div')
        ingredientContainer.className = "caractéristiques"
        

        const ingredientListTitle = document.createElement('h3')
        ingredientListTitle.textContent = "Ingrédients"
        ingredientListTitle.className = "description-title"

        const timeTag = document.createElement('div')
        timeTag.textContent = time + "min"
        timeTag.className = "time-tag"



        
        ingredients.forEach(Element => {
            
            const {quantity, unit,  } = Element;

            

            const IngredientElement = document.createElement('div')
            IngredientElement.className = "ingrédient"


            const ingredientName = document.createElement('p')
            ingredientName.textContent = Element.ingredient
            ingredientName.className = "ingredient-name"

            IngredientElement.appendChild(ingredientName)
        
            if (Element.quantity) {
                const ingredientQuantityValue = document.createElement('p')
                ingredientQuantityValue.textContent = quantity
                ingredientQuantityValue.className = "quantity"
        
                IngredientElement.appendChild( ingredientQuantityValue)

                if (Element.unit) {
                    ingredientQuantityValue.textContent = quantity + " " + unit
                }
            }
            
            ingredientContainer.appendChild(IngredientElement)
        
        });

        card.appendChild(cardPicture)
        card.appendChild(timeTag)
        cardContent.appendChild(recipeTitle)
        descriptionContainer.appendChild(descriptionTitle)
        descriptionContainer.appendChild(descriptionText)
        cardContent.appendChild(descriptionContainer)
        cardContent.appendChild(ingredientListTitle)
        cardContent.appendChild(ingredientContainer)
        card.appendChild(cardContent)

        return(card);
    }
    return {getRecipeCard}
}

