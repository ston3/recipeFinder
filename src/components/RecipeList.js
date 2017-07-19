import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

class RecipeList extends Component {
   render(){
      console.log('this.props', this.props);
      return (
         <div>

            {
               this.props.recipes.map((recipe, index) => (
                  <RecipeItem
                     key={index}
                     recipe={recipe}
                     favoriteButton
                  />
               ))
            }
         </div>
      );
   }
}
function mapStateToProps(state){
   return state;
}

export default connect(mapStateToProps, null)(RecipeList);
