import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const Sidenav = (props) => {
    
    Sidenav.propTypes = {
        sidenavStatusClass: PropTypes.string,
        toggleSidenav: PropTypes.func
    };

    return (

        <nav id="site-sidenav" className={ props.sidenavStatusClass }>
            
            <ul>
                
                <li>
                    <div>
                        <NavLink to="/buttons"
                            activeClassName="active" 
                            tabIndex="3"
                            onClick={ () => props.toggleSidenav(true) }>
                            Buttons
                        </NavLink>   
                    </div>
                </li>

                <li>
                    <div>
                        <NavLink to="/Snippets"
                            activeClassName="active" 
                            tabIndex="3">
                            Forms
                        </NavLink>   
                    </div>
                </li>

            </ul>
           
        </nav>
    );
};