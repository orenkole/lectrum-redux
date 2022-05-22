import {applyMiddleware, compose} from "redux";
import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";
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

const devtools = __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const middleware = [
    thunk,
    customThunk,
];

if (__DEV__) {
    middleware.push(logger);
}

const composeEnhancers = devtools || compose;
export const enhancedStore = composeEnhancers(applyMiddleware(...middleware));
