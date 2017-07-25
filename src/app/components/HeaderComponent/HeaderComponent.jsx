import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const Header = (props) => {

    Header.propTypes = {
        sidenavStatusClass: PropTypes.string,
        toggleSidenav: PropTypes.func
    };

    return (

        <header id="site-header">
            
            <button type="button"
                className="toggler" 
                aria-label={ `This is the navigation bar toggler: the bar is now ${props.sidenavStatusClass}` }
                tabIndex="1"
                onClick={ () => props.toggleSidenav(false) } >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>

            <NavLink to="/">
                <img className="brand-logo"
                    src={ require("../../assets/img/propellerhead-logo.png") } 
                    alt="Propellerhead Logo"
                    tabIndex="2" 
                    onClick={ () => props.toggleSidenav(true) } />
            </NavLink>
           
        </header>
    );
};