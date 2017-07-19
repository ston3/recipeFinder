import React, { Component } from 'react';
import { Navbar } from 'react-materialize';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component{
   render(){
      return (
         <div>
            <Navbar
               brand="Recipe Finder"
               className="center teal lighten-1"
               right
            >
               <Link
                  to="/"
               />
               {
                  this.props.favoriteRecipes.length > 0 ?
                     <Link to="/favorites">Favorites</Link>
                     :
                     <div />
               }

            </Navbar>
         </div>

      );
   }
}

function mapStateToProps(state){
   return state;
}

export default connect(mapStateToProps, null)(Header);
