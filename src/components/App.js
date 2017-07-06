import React, { Component } from 'react'; 
import { Button, Icon } from 'react-materialize';

class App extends Component {
   render(){
      return(
         <div>
            <h2>Recipe Finder</h2>
            <Button waves="light">
               <Icon> thumb_up</Icon>
            </Button>
         </div>
      )
   }
}

export default App;