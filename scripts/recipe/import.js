/**
 * Récupère les données des recettes à partir d'un fichier JSON via une requête fetch.
 * 
 * Cette fonction envoie une requête `fetch` pour obtenir le contenu du fichier `recipe.json`,
 * puis analyse la réponse en JSON et retourne les données des recettes.
 * 
 * @async
 * @function getRecipeData
 * @returns {Promise<Object>} Une promesse qui se résout en un objet contenant les données des recettes.
 * @throws {Error} Lance une erreur si la requête `fetch` échoue ou si les données JSON ne peuvent pas être analysées.
 */

export async function getRecipeData() {
    const reponse = await fetch("./assets/data/recipe.json");
    const recipeData = await reponse.json();
   
    
    return (recipeData)
       
}

/**
 * Exporte les recettes récupérées à partir des données JSON.
 * 
 * La constante `recipes` contient les données des recettes récupérées par la fonction `getRecipeData`.
 * 
 * @type {Array<Object>} Un tableau d'objets représentant les recettes.
 */
export const {recipes}  = await getRecipeData();