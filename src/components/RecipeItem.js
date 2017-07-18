import React, { Component } from 'react';
import { Collection, CollectionItem, Badge, Button } from 'react-materialize';
import { connect } from 'react-redux';

import { favoriteRecipe } from '../actions';

class RecipeItem extends Component{
   constructor(){
      super();
      this.state = {
         favorited: false,
      };
   }
   favorite(recipe){
      this.props.favoriteRecipe(recipe);
      this.setState({ favorited: true });
   }

   render(){
      const { recipe } = this.props;
      return (
         <div>
            <Collection>
               <CollectionItem >
                  {
                     this.props.favoriteButton ?
                        this.state.favorited ?
                           <Button
                              floating
                              className="red"
                              waves="light"
                              icon="start"
                           />
                           :
                           <Button
                              floating
                              className="primary"
                              waves="light"
                              icon="star"
                              onClick={() => this.favorite(recipe)}
                           />
                        :
                        <div />
                  }
                  <Badge>
                     <img src={recipe.thumbnail} />
                  </Badge>
                  <a href={recipe.href}>
                     <b>{recipe.title}</b>
                  </a>
                  <p>{recipe.ingredients}</p>
               </CollectionItem>
            </Collection>
         </div>

      );
   }
}
function mapStateToProps(state){
   return state;
}

export default connect(mapStateToProps, { favoriteRecipe })(RecipeItem);
