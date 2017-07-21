import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./containers/AppContainer/AppContainer";
import store from "./store";

require("./assets/scss/main.scss");

render(
    <Provider store={store}>
        <App />
    </Provider>
   , window.document.getElementById('app')
);