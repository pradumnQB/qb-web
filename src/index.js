
 import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
           <App/>
        ,document.getElementById('root')
);
registerServiceWorker();
