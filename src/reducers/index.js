import { combineReducers } from 'redux';
import { SET_RECIPIES } from '../actions';

function recipes(state = [], action){
   switch (action.type){
   case SET_RECIPIES:
      return action.items;
   default:
      return state;
   }
}

const rootReducer = combineReducers({ recipes });

export default rootReducer;
