export const SET_RECIPIES = 'SET_RECIPIES';

export function setRecipes(items){
   return {
      type: SET_RECIPIES,
      items,
   };
}
