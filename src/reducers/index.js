import { combineReducers } from 'redux';
import { SET_RECIPIES, FAVORITE_RECIPE } from '../actions';

function recipes(state = [], action){
   switch (action.type){
   case SET_RECIPIES:
      return action.items;
   default:
      return state;
   }
}

function favoriteRecipes(state = [], action){
   switch (action.type){
   case FAVORITE_RECIPE:
      state = [...state, action.recipe];
      return state;
   default:
      return state;
   }
}


const rootReducer = combineReducers({ recipes, favoriteRecipes });

export default rootReducer;
