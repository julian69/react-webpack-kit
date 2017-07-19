import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";﻿
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import sidenav from "./reducers/sidenavReducer";

export default createStore( 
    combineReducers( 
    	{ 
    		sidenav 
    	} 
    ), 
    {}, 
    applyMiddleware( createLogger(), thunk, promise() ) 
);