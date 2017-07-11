export const SET_RECIPIES = 'SET_RECIPIES';
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';


export function setRecipes(items){
   return {
      type: SET_RECIPIES,
      items,
   };
}

export function favoriteRecipe(recipe){
   return {
      type: FAVORITE_RECIPE,
      recipe,
   };
}

