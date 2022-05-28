// Core
import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {ConnectedRouter as Router} from "react-router-redux";

// Instruments
import './theme/init';

// Intro
import App from './navigation/App';
import {store} from "./init/store";
import {history} from "./init/middleware/core";

render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);
