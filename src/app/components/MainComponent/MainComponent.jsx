import React from "react";

export const Main = (props) => {
    return (
        <div id="main-component" className="container">
            <div className="row">
                <div className="col-xs-12">
                    <h1>The Main Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <button
                        className="btn btn-primary"
                        onClick={ () => props.changeUsername() }>Change the Username</button>
                </div>
            </div>

            <div className="row">
                <img src={ require('../../assets/img/html5.png') } />
            </div>
        </div>
    );
}