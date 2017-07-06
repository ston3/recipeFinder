import React, { Component } from 'react'; 
import SearchRecipies from './SearchRecipies';

import '../style/index.css';

class App extends Component {
   render(){
      return(
         <div>
            <h2>Recipe Finder</h2>
            <SearchRecipies />
           
         </div>
      )
   }
}

export default App;