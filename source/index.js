// Core
import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";

// Instruments
import './theme/init';

// Intro
import App from './navigation/App';
import {store} from "./init/store";

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);
