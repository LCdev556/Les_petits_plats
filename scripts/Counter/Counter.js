const counterText = document.querySelector('.counter__text'); 

export function iniCounter() {
    const card = document.querySelectorAll('.card'); 
    
    counterText.textContent = card.length + " recettes";
}

export function counter() {
    const card = document.querySelectorAll('.card'); 
    if (!card || !counterText) {
        console.error("Les éléments '.card' ou '.counter__text' ne sont pas trouvés.");
        return;
    }

    let actualRecipeCard = [];

    
    card.forEach(element => {
        if (getComputedStyle(element).display === 'block') {
            
            actualRecipeCard.push(element);
        }
    });
    
    
    if (actualRecipeCard.length === 1) {
        counterText.textContent = actualRecipeCard.length + " recette";
    } else {
        counterText.textContent = actualRecipeCard.length + " recettes";
    }
}