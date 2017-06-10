const css = require("./assets/scss/main.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import {Hello} from './components/HelloComponent/HelloComponent';

ReactDOM.render(
   <Hello />,
   document.getElementById('root')
);