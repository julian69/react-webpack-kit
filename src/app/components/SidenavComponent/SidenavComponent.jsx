import React from "react";

export const Sidenav = (props) => {
    
    let sidenavStatus =  props.sidenavStatus ?  'open' : 'close';

    return (

        <nav id="mySidenav" className={`sidenav ${sidenavStatus}` }>
            
            <a href="#" 
               className="closebtn" 
               onClick={ props.toggleSidenavStatus } >
                &times;
            </a>

            <ul>
                <li>
                    <a href="#">Buttons</a>
                </li>
                <li>
                    <a href="#">Forms</a>
                </li>
                <li>
                    <a href="#">Colors</a>
                </li>
                <li>
                    <a href="#">Accesibility</a>
                </li>
            </ul>
           
        </nav>
    );
}