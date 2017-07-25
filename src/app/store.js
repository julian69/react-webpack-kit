import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import plus from "./reducers/plusReducer";

let middleware = [ thunk, promise() ];

if (process.env.NODE_ENV !== "production") {
  
    const logger = require("redux-logger");
    middleware = [ logger.createLogger(), ...middleware];
}

export default createStore( 
    combineReducers( { plus } ), 
    {}, 
    applyMiddleware( ...middleware ) 
);


