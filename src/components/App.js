import React, { Component } from 'react'; 
import SearchRecipies from './SearchRecipies';
import RecipeList from './RecipeList';

import '../style/index.css';

class App extends Component {
   render(){
      return(
         <div>
            <h2>Recipe Finder</h2>
            <SearchRecipies />
            <RecipeList />
           
         </div>
      )
   }
}

export default App;
