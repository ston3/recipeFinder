import React, { Component } from 'react';
import SearchRecipies from './SearchRecipies';
import RecipeList from './RecipeList';
import FavoriteRecipeList from './FavoriteRecipeList';

import '../style/index.css';

class App extends Component {
   render(){
      return (
         <div>
            <h2>Recipe Finder</h2>
            <SearchRecipies />
            <RecipeList />
            <FavoriteRecipeList />

         </div>
      );
   }
}

export default App;
