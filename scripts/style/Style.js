/**
 * Ajuste la largeur de la div `.recipe-section` pour qu'elle soit égale à celle de la div `.filter-section`.
 * 
 * Cette fonction récupère la largeur calculée de la div `.filter-section` 
 * et applique cette largeur à la div `.recipe-section` pour les synchroniser.
 * Elle est appelée initialement après le chargement de la page 
 * et à chaque redimensionnement de la fenêtre pour maintenir l'alignement.
 */
function adjustDivWidths() {
    const div2 = document.querySelector(".recipe-section")
    const div1 = document.querySelector(".filter-section")

    // Récupère la largeur de div1 en pixels
    const width1 = window.getComputedStyle(div1).width;

    // Applique cette largeur à div2
    div2.style.width = width1;

    
};

// Appel initial après le chargement de la page
adjustDivWidths();

// Réajuste la largeur de div2 lorsque la fenêtre est redimensionnée
window.addEventListener('resize', adjustDivWidths);
