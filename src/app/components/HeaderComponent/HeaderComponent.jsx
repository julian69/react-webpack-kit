import React from "react";
import { NavLink } from 'react-router-dom';

export const Header = (props) => {

   return (

        <header id="site-header">
            
            <button type="button"
                    className="toggler" 
                    aria-label={ `This is the navigation bar toggler: the bar is now ${props.sidenavStatusClass}` }
                    onClick={ () => props.toggleSidenav(true) } >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
            </button>

            <NavLink to="/">
              <img className="brand-logo"
                   src={ require('../../assets/img/propellerhead-logo.png') } 
                   alt="Propellerhead Logo"
                   onClick={ () => props.toggleSidenav(false) } />
            </NavLink>
           
        </header>
    );
}