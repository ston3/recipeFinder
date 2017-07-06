import React, { Component } from 'react';
import { Row, Input,Col, Button, Icon } from 'react-materialize';

class SearchRecipies extends Component {
   constructor(){
      super();
      this.state = {
         ingredients: '',
         dish: ''
      }
   }

   search(){
      let {ingredients , dish} = this.state;
      const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
      console.log('state', this.state , 'url', url);
   }

   render(){
      return(
         <Row>
            <Input
               placeholder = "garlic, chicken" 
               onChange= {event => this.setState({ ingredients : event.target.value})}
               s={4} label="Ingredients"  />
            <Input 
               onChange= {event => this.setState({ dish : event.target.value})}
               s={4} label="Dish" />
            <Button 
               onClick={() => this.search()}
               waves='light'>
                  Submit 
                  <Icon right>search</Icon>
            </Button>
         </Row>
      )
   }

}

export default SearchRecipies;