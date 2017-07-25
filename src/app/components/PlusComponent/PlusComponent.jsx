import React from "react";
import PropTypes from "prop-types";

export const Plus = (props) => {
    
    Plus.propTypes = {
        plusStatusClass: PropTypes.string,
        deviceStatusClass: PropTypes.string,
        togglePlus: PropTypes.func,
        switchDevice: PropTypes.func 
    };

    return (

        <div id="plus-component" className={ `container ${props.plusStatusClass}` }>
        
            <button type="button"
                className="circles"
                data-tooltip = "Mobile Phone"
                aria-label="Click here to switch the container to Mobile Phone version"
                onClick={ () => props.switchDevice("mobile") } >
                <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </button>

            <button type="button"
                className="circles"
                data-tooltip = "Tablet"
                aria-label="Click here to switch the container to Tablet version"
                onClick={ () => props.switchDevice("tablet") }>
                <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z"/>
                </svg>
            </button>

            <button type="button"
                className="circles last-inner"
                data-tooltip = "Desktop"
                aria-label="Click here to switch the container to Desktop version"
                onClick={ () => props.switchDevice("desktop") }>
                <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/>
                </svg>
            </button>

            <button type="button"
                className="circles plus" 
                aria-label="Click or hover here to see the responsive testing options"
                onClick={ () => props.togglePlus(true) } >
                <span>
                    <span className="rotate"></span>
                </span>
            </button>

        </div>
    );
};