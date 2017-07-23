import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import sidenav from "./reducers/sidenavReducer";
import plus from "./reducers/plusReducer";

let middleware = [ thunk, promise() ];

if (process.env.NODE_ENV !== "production") {
  
    const logger = require("redux-logger");
    middleware = [ logger.createLogger(), ...middleware];
}

export default createStore( 
    combineReducers( { sidenav, plus } ), 
    {}, 
    applyMiddleware( ...middleware ) 
);


