export function recipeTemplate(recipe){

    const {name, image, ingredients, description } = recipe

    const picture = `assets/picture/${image}`

    function getRecipeCard(){

    const card = document.createElement ('article');

    const cardPicture = document.createElement('img');
    cardPicture.setAttribute("src", picture);

    const cardContent = document.createElement('div')

    const recipeTitle = document.createElement('h2')
    recipeTitle.textContent = name

    const descriptionContainer = document.createElement('div')

    const descriptionTitle = document.createElement('h3')
    descriptionTitle.textContent = "Recette"

    const descriptionText = document.createElement('p')
    descriptionText.textContent = description

    const ingredientContainer = document.createElement('div')

    const ingredientListTitle = document.createElement('h3')
    ingredientListTitle.textContent = "Ingrédients"

    card.appendChild(cardPicture)
    cardContent.appendChild(recipeTitle)
    descriptionContainer.appendChild(descriptionTitle)
    descriptionContainer.appendChild(descriptionText)
    ingredientContainer.appendChild(ingredientListTitle)
    cardContent.appendChild(descriptionContainer)
    cardContent.appendChild(ingredientContainer)
    card.appendChild(cardContent)

    return(card);
}
}
