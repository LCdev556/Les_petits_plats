const counterText = document.querySelector('.counter__text'); 

export function iniCounter() {
    const card = document.querySelectorAll('.card'); 
    console.log(card.length);
    counterText.textContent = card.length + " recettes";
}

export function counter() {
    const card = document.querySelectorAll('.card'); 
    if (!card || !counterText) {
        console.error("Les éléments '.card' ou '.counter__text' ne sont pas trouvés.");
        return;
    }

    let actualRecipeCard = [];

    // Parcourir toutes les cartes pour vérifier leur visibilité
    card.forEach(element => {
        if (getComputedStyle(element).display === 'block') {
            // Ajouter l'élément visible à actualRecipeCard
            actualRecipeCard.push(element);
        }
    });
    console.log(actualRecipeCard);
    // Mettre à jour le texte du compteur
    if (actualRecipeCard.length === 1) {
        counterText.textContent = actualRecipeCard.length + " recette";
    } else {
        counterText.textContent = actualRecipeCard.length + " recettes";
    }
}