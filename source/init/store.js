import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import {createLogger} from "redux-logger/src";
import {List} from "immutable";
import thunk from "redux-thunk";

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
];

if (__DEV__) {
    middleware.push(logger);
}

const composeEnhancers = devtools || compose;
const enhancedStore = composeEnhancers(applyMiddleware(...middleware));
export const store = createStore(rootReducer, enhancedStore);
