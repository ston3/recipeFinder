import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import Header from './Header';

class FavoriteRecipeList extends Component{
   render(){
      return (
         <div>
            <Header />
            <h4>Favorite Recipe</h4>
            {
               this.props.favoriteRecipes.map((recipe, index) => (
                  <RecipeItem
                     key={index}
                     recipe={recipe}
                     favoriteButton={false}
                  />),
               )
            }
         </div>

      );
   }
}

function mapStateToProps(state){
   return {
      favoriteRecipes: state.favoriteRecipes,
   };
}

export default connect(mapStateToProps, null)(FavoriteRecipeList);
