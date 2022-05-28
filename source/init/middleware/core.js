import {applyMiddleware, compose} from "redux";
import {createBrowserHistory} from "history";
import {routerMiddleware as createRouterMiddleware} from "react-router-redux";
import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import {customThunk} from "./custom";

const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: () => 'lightblue',
        prevState: () => 'darkblue',
        action: () => 'lightgreen',
        nextState: () => 'orange',
        error: () => 'red',
    }
})

const history = createRouterMiddleware()
const routerMiddleware = createRouterMiddleware(history);

const devtools = __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const sagaMiddleware = createSagaMiddleware()

const middleware = [
    sagaMiddleware,
    customThunk,
    routerMiddleware,
];

if (__DEV__) {
    middleware.push(logger);
}

const composeEnhancers = devtools || compose;
const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export {enhancedStore, sagaMiddleware, history};
