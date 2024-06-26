/**
 * Recuperation des données du fichier json avec fetch
 * @returns 
 */
export async function getRecipeData() {
    const reponse = await fetch("./data/recipe.json");
    const recipeData = await reponse.json();
   
    
    return (recipeData)
       
}

export const {recipes}  = await getRecipeData();