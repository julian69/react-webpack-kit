import React from "react";
import { NavLink } from 'react-router-dom';

export const Sidenav = (props) => {
    
    return (

        <nav id="site-sidenav" className={ `${props.sidenavStatusClass}` }>
            
            <ul>
                <li>
                    <NavLink to="/Snippets"
                          activeClassName="active" 
                          onClick={ () => props.toggleSidenav(false, true) } >
                        Snippets
                    </NavLink>
                </li>
            </ul>
           
        </nav>
    );
}

