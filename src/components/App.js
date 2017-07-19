import React, { Component } from 'react';
import SearchRecipies from './SearchRecipies';
import RecipeList from './RecipeList';
import Header from './Header';

import '../style/index.css';

class App extends Component {
   render(){
      return (
         <div>
            <Header />
            <SearchRecipies />
            <RecipeList />
         </div>
      );
   }
}

export default App;
